'use strict';
var QUnit = require( 'qunit' );
var mockup = require( 'tests/mockup/mockup' );
var MatrixTransform = require( 'osg/MatrixTransform' );
var Matrix = require( 'osg/Matrix' );
var ReaderParser = require( 'osgDB/ReaderParser' );
var TransformEnums = require( 'osg/TransformEnums' );


module.exports = function () {

    QUnit.module( 'osg' );

    QUnit.test( 'MatrixTransform', function () {

        var n = new MatrixTransform();
        var scene = ReaderParser.parseSceneGraph( mockup.getBoxScene() );
        Matrix.makeTranslate( 100, 0, 0, n.getMatrix() );
        n.addChild( scene );
        var bs = n.getBound();
        mockup.near( bs.center(), [ 100, 0, 0 ] );
        mockup.near( bs.radius(), 2.414213562373095 );
    } );

    QUnit.test( 'Transform', function () {

        var n = new MatrixTransform();
        var scene = ReaderParser.parseSceneGraph( mockup.getBoxScene() );
        Matrix.makeScale( 2, 3, 4, n.getMatrix() );
        n.addChild( scene );
        var bs = n.getBound();
        mockup.near( bs.center(), [ 0, 0, 0 ] );
        mockup.near( bs.radius(), 9.65685424949238 );
    } );

    QUnit.test( 'Transform absolute vs relative', function () {
        var mat = Matrix.makeRotate( -Math.PI * 0.5, 1.0, 0.0, 0.0, Matrix.create() );
        var inv = Matrix.create();
        Matrix.inverse( mat, inv );

        var n = new MatrixTransform();
        Matrix.copy( mat, n.getMatrix() );
        var test = Matrix.create();

        var checkMatrices = function ( node ) {
            mockup.near( node.getWorldMatrices()[ 0 ], mat );

            node.computeLocalToWorldMatrix( Matrix.makeIdentity( Matrix.makeIdentity( test ) ) );
            mockup.near( test, mat );

            node.computeWorldToLocalMatrix( Matrix.makeIdentity( Matrix.makeIdentity( test ) ) );
            mockup.near( test, inv );
        };

        checkMatrices( n );
        n.setReferenceFrame( TransformEnums.ABSOLUTE_RF );
        checkMatrices( n );
    } );
};
