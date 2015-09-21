( function () {

    'use strict';

    var osgShader = window.OSG.osgShader;
    var osg = window.OSG.osg;


    // this compiler use basic lighting and add a node to demonstrate how to
    // customize the shader compiler
    var CustomCompiler = function () {

        osgShader.Compiler.apply( this, arguments );

    };


    CustomCompiler.prototype = osg.objectInherit( osgShader.Compiler.prototype, {

        getFragmentShaderName(){
            var str = 'default';

            var rampAttribute = this.getAttributeType( 'Ramp' );

            if ( rampAttribute && rampAttribute.getAttributeEnable() )
                str = 'ramp';

            var negatifAttribute = this.getAttributeType( 'Negatif' );

            if ( negatifAttribute )
                str = 'negatif';

            var sssAttribute = this.getAttributeType( 'SubSurfaceScattering' );

            if ( sssAttribute && sssAttribute.getAttributeEnable() )
                str = 'sss';

            return str;

        },

        // this is the main code that instanciate and link nodes together
        // it's a simplified version of the curent osgjs compiler
        // it could also be simpler
        createFragmentShaderGraph: function () {

            // no material then return a default shader
            // you could do whatever you want here
            // if you want to return a debug color
            // just to be sure that you always have
            // valid material in your scene, in our case we suppose
            // it exists in the scene
            // if ( !this._material )
            //     return this.createDefaultFragmentShaderGraph();

            var materialUniforms = this.getOrCreateStateAttributeUniforms( this._material );


            // here we gather all Root of the Shader Graph
            // for the cases where you have multiple output
            // (output glFragDepth, or
            // glFragColor[0], glFragColor[1], etc in the MRT case)
            var roots = [];

            // that's the final result of the shader graph
            var fragColor = this.getNode( 'glFragColor' );


            // diffuse color
            // use texture if we have some, check code of Compiler
            // to see the default behaviour
            var diffuseColor = this.getDiffuseColorFromTextures();


            // no texture then we use the material diffuse value
            if ( diffuseColor === undefined ) {

                diffuseColor = materialUniforms.diffuse;

            } else {

                this.getNode( 'InlineCode' ).code( '%color.rgb *= %diffuse.rgb;' ).inputs( {
                    diffuse: materialUniforms.diffuse
                } ).outputs( {
                    color: diffuseColor
                } );

            }


            if ( this._lights.length > 0 ) {

                // creates lights nodes
                var lightedOutput = this.createLighting( {
                    materialdiffuse: diffuseColor
                } );

                // ======================================================
                // my custom attribute Sub-Surface Scattering
                // it's here I connect
                // ======================================================
                var sssResult = this.createVariable( 'vec3' );
                var sssAttribute = this.getAttributeType( 'SubSurfaceScattering' );

                if ( sssAttribute ) {

                    var lightNDL = this.getVariable(  'lightNDL' );
                    var normal = this.getOrCreateFrontNormal();
                    var vertex = this.getOrCreateInputPosition();

                    this.getNode( 'SubSurfaceScattering' ).inputs( {
                        color: lightedOutput,
                        normal: normal,
                        vertex: vertex,
                        ndl: lightNDL,
                        sssScale: this.getOrCreateUniform( sssAttribute.getOrCreateUniforms().sssScale ),
                        sssDiffuse: this.getOrCreateUniform( sssAttribute.getOrCreateUniforms().sssDiffuse ),
                        enable: this.getOrCreateUniform( sssAttribute.getOrCreateUniforms().enable )
                    } ).outputs( {
                        color: sssResult
                    } );

                } else {

                    sssResult = lightedOutput;

                }
                // ======================================================


                // ======================================================
                // my custom attribute ramp
                // it's here I connect ouput of light result with my ramp
                // ======================================================
                var rampResult = this.createVariable( 'vec3' );
                var rampAttribute = this.getAttributeType( 'Ramp' );

                if ( rampAttribute && rampAttribute.getAttributeEnable() ) {

                    this.getNode( 'Ramp' ).inputs( {
                        color: sssResult
                    } ).outputs( {
                        color: rampResult
                    } );

                } else {

                    rampResult = sssResult;

                }
                // ======================================================


                // my custom attribute negatif
                // ======================================================
                // it's here I connect output to the invert of input
                // ======================================================
                var negatifResult = this.createVariable( 'vec3' );
                var negatifAttribute = this.getAttributeType( 'Negatif' );

                if ( negatifAttribute ) {

                    this.getNode( 'Negatif' ).inputs( {
                        color: rampResult,
                        enable: this.getOrCreateUniform( negatifAttribute.getOrCreateUniforms().enable )
                    } ).outputs( {
                        color: negatifResult
                    } );

                } else {

                    negatifResult = rampResult;

                }
                // ======================================================



                // get final color
                // use the rampResult from previous node
                this.getNode( 'InlineCode' ).code( '%color = vec4(%emit.rgb + %negatif, 1.0);' ).inputs( {
                    emit: materialUniforms.emission,
                    negatif: negatifResult
                } ).outputs( {
                    color: fragColor
                } );

            } else {

                // no lights use a default behaviour
                this.getNode( 'InlineCode' ).code( '%color = vec4(%diffuse, 1.0);' ).inputs( {
                    diffuse: diffuseColor
                } ).outputs( {
                    color: fragColor
                } );


            }

            roots.push( fragColor );
            return roots;

        }

    } );

    window.CustomCompiler = CustomCompiler;

} )();
