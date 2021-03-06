'use strict';
var QUnit = require( 'qunit' );
var mockup = require( 'tests/mockup/mockup' );
var FirstPersonManipulator = require( 'osgGA/FirstPersonManipulator' );
var Camera = require( 'osg/Camera' );
var Vec3 = require( 'osg/Vec3' );
var Matrix = require( 'osg/Matrix' );


module.exports = function () {

    QUnit.module( 'osgGA' );

    QUnit.test( 'FirstPersonManipulator', function () {
        var manipulator = new FirstPersonManipulator();
        var matrix = manipulator.getInverseMatrix();
        ok( matrix !== undefined, 'check getInverseMatrix method' );
    } );

    QUnit.test( 'FirstPersonManipulator check controllers', function () {
        var manipulator = new FirstPersonManipulator();
        var list = manipulator.getControllerList();
        ok( list.StandardMouseKeyboard !== undefined, 'check mouse support' );
    } );


    QUnit.test( 'FirstPersonManipulator check computation', function () {
        var manipulator = new FirstPersonManipulator();

        var fakeFS = {
            getFrameStamp: function () {
                return {
                    getDeltaTime: function () {
                        return 0.0;
                    }
                };
            }
        };

        manipulator.setCamera( new Camera() );

        var eye = Vec3.create();
        var target = Vec3.create();
        manipulator.getEyePosition( eye );
        manipulator.getTarget( target );

        mockup.near( eye, Vec3.createAndSet( 0.0, 25.0, 10.0 ), 1e-5, 'check default eye position' );
        mockup.near( target, Vec3.createAndSet( 0.0, 26.0, 10.0 ), 1e-5, 'check default target' );
        mockup.near( manipulator.getDistance(), 1.0, 1e-5, 'check default distance' );

        manipulator.update( fakeFS );
        mockup.near( manipulator.getInverseMatrix(), Matrix.createAndSet( 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, -1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, -10.0, 25.0, 1.0 ), 1e-5, 'check matrix result' );


        manipulator.setTarget( Vec3.createAndSet( 10.0, 10.0, 10.0 ) );
        manipulator.update( fakeFS );
        mockup.near( manipulator.getInverseMatrix(), Matrix.createAndSet( -0.83205029, 0.0, -0.55470019, 0.0, -0.55470019, 0.0, 0.83205029, 0.0, 0.0, 1.0, 0.0, 0.0, 13.867504, -10, -20.801257, 1.0 ), 1e-5, 'check matrix result' );


        manipulator.computeRotation( 100.0, 0.4 );
        manipulator.update( fakeFS );
        mockup.near( manipulator.getInverseMatrix(), Matrix.createAndSet( 0.017205427, 0.00399939, -0.9998439, 0.0, -0.9998519, 0.000068821, -0.01720529, 0.0, 0.0, 1.0, 0.004, 0.0, 25.0, -10.001640, 0.3901323, 1.0 ), 1e-2, 'check matrix result' );
    } );

};
