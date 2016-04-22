( function () {
    'use strict';

    var OSG = window.OSG;
    var osg = OSG.osg;
    var osgViewer = OSG.osgViewer;

    // globals
    var P = window.P;
    var $ = window.$;

    var OSG = window.OSG;
    var osg = OSG.osg;
    var osgViewer = OSG.osgViewer;
    var osgShader = OSG.osgShader;
    var osgUtil = OSG.osgUtil;

    // we create a Callback
    var FPSUpdateCallback = function ( config ) {
        this._config = config;
    };
    FPSUpdateCallback.prototype = {
        update: function ( node, nv ) {

            var currentTime = 1000.0 * nv.getFrameStamp().getDeltaTime();
            var frameNumber = nv.getFrameStamp().getFrameNumber();
            if ( frameNumber % 60 === 1 ) {
                this._config.ms = currentTime;
            } else {
                this._config.ms += ( currentTime - this._config.ms ) / frameNumber;
            }
            this._config.fps = 1000.0 / currentTime;

            //
            node.traverse( nv );
        }
    };

    // inherits for the ExampleOSGJS prototype
    var Example = function () {

        ExampleOSGJS.call( this );

        var that = this;
        this._config = {
            items: 4,
            deep: 3,
            quadSize: 1,
            texture: true,
            textureSize: 512,
            numTextures: 1,
            shaderComplexity: 0,
            nbTotalItems: 0,
            nbTotalNodes: 0,
            ms: 0.0,
            fps: 0.0,
            update: function () {
                that._rootItems.removeChildren();
                that._rootItems.addChild( that.createItems( that._config.deep ) );
            },

            frustumCulling: function () {
                that._viewer.getCamera().setEnableFrustumCulling( !that._viewer.getCamera().getEnableFrustumCulling() );

            }
        };

        this._mediaPath = '';
        this._textureNames = [ 'texture.png' ];
        this._shaderNames = [];
    };


    Example.prototype = osg.objectInherit( ExampleOSGJS.prototype, {


        createItem: function () {

            var quadSizeX = this._config.quadSize;
            var quadSizeY = quadSizeX * 9 / 16.0;
            var rq = osg.createTexturedQuadGeometry( -quadSizeX / 2.0, -quadSizeY / 2.0, 0,
                quadSizeX, 0, 0,
                0, quadSizeY, 0 );
            this._item = rq;


            return this._item;
        },

        getTexture: function () {

            if ( !this._config.texture ) return;

            this._texture = new osg.Texture();

            var size = this._config.textureSize;

            this._canvasTexture = document.createElement( 'canvas' );
            this._canvasTexture.width = size;
            this._canvasTexture.height = size;
            this._contextTexture = this._canvasTexture.getContext( '2d' );
            this._contextTexture.clearRect( 0, 0, size, size );
            //this._contextTexture.textAlign = "center";
            this._contextTexture.fillStyle = 'black';
            this._contextTexture.fillRect( 0, 0, size, size );

            this._contextTexture.font = ( size * 0.50 ) + 'px Arial';
            this._contextTexture.fillStyle = 'red';
            this._contextTexture.fillText( size + '', 0, size / 2.0 );

            this._texture.setTextureSize( size, size );
            this._texture.setMinFilter( 'LINEAR' );
            this._texture.setMagFilter( 'LINEAR' );
            this._texture.setImage( this._canvasTexture );

        },

        createItems: function ( deep ) {

            var scale = Math.pow( 2, deep - 1 );

            var root = new osg.MatrixTransform();
            var nbx = this._config.items;
            var nby = Math.floor( nbx * 9 / 16.0 );
            if ( deep === 0 ) {
                this._config.nbTotalItems += nbx * nby;
            }
            this._config.nbTotalNodes += nbx * nby;

            this.getTexture();
            var item = this.createItem();
            if ( this._config.texture ) {

                item.setStateSet( undefined );
                item.getOrCreateStateSet().setTextureAttributeAndModes( 0, this._texture );
            }

            for ( var i = 0, l = nbx; i < l; i++ ) {
                for ( var j = 0, m = nby; j < m; j++ ) {
                    var mt = new osg.MatrixTransform();
                    var x, y;
                    if ( deep === 0 ) {
                        x = ( -nbx * 0.5 + 0.5 + i ) * 1.1;
                        y = ( -nby * 0.5 + 0.5 + j ) * 1.1;

                        osg.Matrix.makeTranslate( x, y, 0, mt.getMatrix() );
                        if ( i % 2 === 0 ) {
                            mt.addChild( item );
                        } else {
                            mt.addChild( item );
                        }
                    } else {
                        var s = nbx * deep * scale * 1.1;
                        x = ( -nbx * 0.5 + 0.5 + i ) * ( s );
                        y = ( -nby * 0.5 + 0.5 + j ) * ( s * 9 / 16.0 );
                        //osg.log([x,y]);
                        osg.Matrix.makeTranslate( x, y, 0, mt.getMatrix() );
                        mt.addChild( this.createItems( deep - 1 ) );
                    }
                    root.addChild( mt );
                }
            }
            return root;
        },

        initDatGUI: function () {
            this._gui = new window.dat.GUI();

            // ui
            this._gui.add( this._config, 'items', 1, 6 ).step( 1 );
            this._gui.add( this._config, 'deep', 1, 5 ).step( 1 );
            this._gui.add( this._config, 'quadSize', 1, 20 ).step( 1 );

            this._gui.add( this._config, 'texture' );
            this._gui.add( this._config, 'textureSize', [ '64', '128', '256', '512', '1024', '2048', '4096' ] );
            this._gui.add( this._config, 'numTextures' );

            //button            
            this._gui.add( this._config, 'update' );
            this._gui.add( this._config, 'frustumCulling' );
            //this._gui.add( this._config, 'postProc' );
            //this._gui.add( this._config, 'scissor' );

            // auto update
            this._gui.add( this._config, 'nbTotalItems' ).listen();
            this._gui.add( this._config, 'nbTotalNodes' ).listen();
            this._gui.add( this._config, 'fps' ).listen();
            this._gui.add( this._config, 'ms' ).listen();

        },

        getOrCreateModel: function () {


            this._rootItems = new osg.Node();

            this._rootItems.setUpdateCallback( new FPSUpdateCallback( this._config ) );

            this._rootItems.addChild( this.createItems( this._config.deep ) );

            return this._rootItems;
        }

    } );


    window.addEventListener( 'load', function () {
        var example = new Example();
        example.run();
    }, true );

} )();
