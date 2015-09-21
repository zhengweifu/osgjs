( function () {

    'use strict';

    var osgShader = window.OSG.osgShader;
    var osg = window.OSG.osg;
    var shaderNode = osgShader.node;
    var factory = osgShader.nodeFactory;

    var SubSurfaceScatteringAttribute = window.SubSurfaceScatteringAttribute = function () {

        osg.StateAttribute.call( this );

        this._scale = 15.0;
        this._diffuse = [1.0, 0.0, 0.0, 1.0];
        this._attributeEnable = false;

    };
    SubSurfaceScatteringAttribute.prototype = osg.objectLibraryClass( osg.objectInherit( osg.StateAttribute.prototype, {

        attributeType: 'SubSurfaceScattering',

        cloneType: function () {

            return new SubSurfaceScatteringAttribute();

        },

        setAttributeEnable: function ( state ) {

            this._attributeEnable = state;

        },

        // uniforms list are per Class Type
        getOrCreateUniforms: function () {

            var obj = SubSurfaceScatteringAttribute;

            if ( obj.uniforms ) return obj.uniforms;

            obj.uniforms = new osg.Map( {

                enable: osg.Uniform.createInt1( 0, 'sssEnable' ),
                sssDiffuse: osg.Uniform.createFloat4( [0,0,0,0], 'sssDiffuse' ),
                sssScale: osg.Uniform.createFloat1( [0], 'sssScale' )

            } );

            return obj.uniforms;

        },

        setSubDiffuse : function ( c ) {

            this._diffuse = c;
            this.dirty();

        },

        setSubScale : function ( c ) {

            this._scale = c;
            this.dirty();

        },

        apply: function ( ) {

            var uniforms = this.getOrCreateUniforms();

            uniforms.enable.set( this._attributeEnable ? 1 : 0 );
            uniforms.sssDiffuse.set( this._diffuse );
            uniforms.sssScale.set( this._scale );
            this.setDirty( false );

        },

        getAttributeEnable: function () {

            return this._attributeEnable;

        },

        // getHash is used to know if an StateAttribute changed
        // if yes it will trigger a shader rebuild. You can for example
        // trigger a change if we enable or not the attribute. It's really
        // up to how you want to handle your shaders
        // if you dont want to trigger rebuild of shader then instead you an use a
        // uniform and keep always the same hash
        getHash: function () {

            return this.getType();

        }

    } ), 'osg', 'SubSurfaceScattering' );


    // this node will call a function subSurfaceScatter in the shader
    var SubSurfaceScatteringNode = window.SubSurfaceScatteringNode = function () {

        shaderNode.BaseOperator.apply( this, arguments );

    };

    SubSurfaceScatteringNode.prototype = osg.objectInherit( shaderNode.BaseOperator.prototype, {
        type: 'SubSurfaceScattering',
        validInputs: [ 'color', 'normal', 'vertex', 'ndl', 'sssScale', 'sssDiffuse', 'enable' ],
        validOutputs: [ 'color' ],

        // it's a global declaration
        // you can make your include here or your global variable
        globalFunctionDeclaration: function () {

            return '#pragma include "custom.glsl"';

        },

       getDefines: function () {

            return ['#define _SUBSURFACE 1'];

        },

       getExtensions: function () {

            return ['#extension GL_OES_standard_derivatives : enable'];

        },

        // call the GLSL function with input/output of the node
        computeShader: function () {


            return osgShader.utils.callFunction( 'subSurfaceScatter', undefined, [
                this._inputs.enable,
                this._inputs.normal,
                this._inputs.vertex,
                this._inputs.sssDiffuse,
                this._inputs.sssScale,
                this._inputs.ndl,
                this._inputs.color,
                this._outputs.color
            ] );

        }

    } );

    factory.registerNode( 'SubSurfaceScattering', SubSurfaceScatteringNode );

} )();
