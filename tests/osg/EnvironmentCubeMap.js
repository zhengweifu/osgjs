'use strict';
var QUnit = require( 'qunit' );
var mockup = require( 'tests/mockup/mockup' );
var Texture = require( 'osg/Texture' );
var TextureCubeMap = require( 'osg/TextureCubeMap' );

module.exports = function () {

    QUnit.module( 'osg' );

    QUnit.test( 'EnvironmnentCubeMap', function () {

        var textureEnv = new TextureCubeMap();


        var start = Texture.TEXTURE_CUBE_MAP_POSITIVE_X;


        var MipFloatArrayLight = [ 92, 123, 123 ];
        var MipFloatArrayBlack = [ 42, 23, 234 ];

        var packedImages = new Array( start + 6 );

        for ( var j = 0; j < 6; j++ ) {

            packedImages[ start + j ] = [ MipFloatArrayBlack, [],
                [],
                [],
                [],
                []
            ];
        }

        packedImages[ start + 3 ] = [ MipFloatArrayLight, [ 42, 123, 123,
                42, 123, 123,
                62, 123, 163,
                42, 183, 123
            ],
            [ 42, 123, 123,
                42, 123, 123,
                42, 123, 123,
                42, 123, 123,
                42, 123, 123,
                42, 123, 123,
                42, 123, 123,
                42, 123, 123,
                42, 123, 123,
                42, 123, 123,
                42, 123, 123,
                62, 146, 123,
                42, 123, 123,
                42, 123, 123,
                42, 123, 123,
                42, 123, 123
            ]
        ];

        var results = textureEnv.computeDirection( packedImages );

        ok( results.maxLum === 62, 'Check Light Extraction Luminosity' );
        ok( results.maxPixel === 11, 'Check Light Extraction Pixel' );
        ok( results.direction[ 0 ] === 0 && results.direction[ 1 ] === 0 && results.direction[ 2 ] === 1, 'Check Light Extraction Direction' );
    } );
};
