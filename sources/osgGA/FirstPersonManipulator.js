'use strict';
var MACROUTILS = require( 'osg/Utils' );
var Manipulator = require( 'osgGA/Manipulator' );
var OrbitManipulator = require( 'osgGA/OrbitManipulator' );
var Matrix = require( 'osg/Matrix' );
var Vec2 = require( 'osg/Vec2' );
var Vec3 = require( 'osg/Vec3' );
var IntersectionVisitor = require( 'osgUtil/IntersectionVisitor' );
var SphereIntersector = require( 'osgUtil/SphereIntersector' );
var ComputeMatrixFromNodePath = require( 'osg/ComputeMatrixFromNodePath' );
var FirstPersonManipulatorDeviceOrientationController = require( 'osgGA/FirstPersonManipulatorDeviceOrientationController' );
var FirstPersonManipulatorHammerController = require( 'osgGA/FirstPersonManipulatorHammerController' );
var FirstPersonManipulatorWebVRController = require( 'osgGA/FirstPersonManipulatorWebVRController' );
var FirstPersonManipulatorStandardMouseKeyboardController = require( 'osgGA/FirstPersonManipulatorStandardMouseKeyboardController' );


/**
 * Authors:
 *  Matt Fontaine <tehqin@gmail.com>
 *  Cedric Pinson <trigrou@gmail.com>
 */

/**
 *  FirstPersonManipulator
 *  @class
 */
var FirstPersonManipulator = function () {
    Manipulator.call( this );
    this.init();
};

FirstPersonManipulator.AvailableControllerList = [ 'StandardMouseKeyboard', 'WebVR', 'DeviceOrientation', 'Hammer' ];
FirstPersonManipulator.ControllerList = [ 'StandardMouseKeyboard', 'WebVR', 'DeviceOrientation', 'Hammer' ];

/** @lends FirstPersonManipulator.prototype */
FirstPersonManipulator.prototype = MACROUTILS.objectInherit( Manipulator.prototype, {
    computeHomePosition: function ( useBoundingBox ) {
        var bs = this.getHomeBound( useBoundingBox );
        if ( !bs ) return;

        this._distance = this.getHomeDistance( bs );
        var cen = bs.center();
        Vec3.mult( this._direction, -this._distance, this._eye );
        Vec3.add( cen, this._eye, this._eye );
        this.setTarget( cen );
    },
    init: function () {
        this._direction = Vec3.createAndSet( 0.0, 1.0, 0.0 );
        this._eye = Vec3.createAndSet( 0.0, 25.0, 10.0 );
        this._up = Vec3.createAndSet( 0.0, 0.0, 1.0 );
        this._distance = 1.0;
        this._forward = new OrbitManipulator.Interpolator( 1 );
        this._side = new OrbitManipulator.Interpolator( 1 );
        this._lookPosition = new OrbitManipulator.Interpolator( 2 );

        this._velocity = Vec3.create();

        // direct pan interpolator (not based on auto-move)
        this._pan = new OrbitManipulator.Interpolator( 2 );
        this._zoom = new OrbitManipulator.Interpolator( 1 );

        this._stepFactor = 1.0; // meaning radius*stepFactor to move
        this._target = Vec3.create();
        this._angleVertical = 0.0;
        this._angleHorizontal = 0.0;

        // tmp value use for computation
        this._tmpGetTargetDir = Vec3.create();

        this._rotBase = Matrix.create();

        var self = this;

        this._controllerList = {};
        FirstPersonManipulator.ControllerList.forEach( function ( value ) {
            if ( FirstPersonManipulator[ value ] !== undefined ) {
                self._controllerList[ value ] = new FirstPersonManipulator[ value ]( self );
            }
        } );

    },

    setDelay: function ( dt ) {
        this._forward.setDelay( dt );
        this._side.setDelay( dt );
        this._lookPosition.setDelay( dt );
        this._pan.setDelay( dt );
        this._zoom.setDelay( dt );
    },

    getEyePosition: function ( eye ) {
        eye[ 0 ] = this._eye[ 0 ];
        eye[ 1 ] = this._eye[ 1 ];
        eye[ 2 ] = this._eye[ 2 ];
        return eye;
    },

    setEyePosition: function ( eye ) {
        this._eye[ 0 ] = eye[ 0 ];
        this._eye[ 1 ] = eye[ 1 ];
        this._eye[ 2 ] = eye[ 2 ];
        return this;
    },

    getTarget: function ( pos ) {
        var dir = Vec3.mult( this._direction, this._distance, this._tmpGetTargetDir );
        Vec3.add( this._eye, dir, pos );
        return pos;
    },

    setTarget: function ( pos ) {
        this._target[ 0 ] = pos[ 0 ];
        this._target[ 1 ] = pos[ 1 ];
        this._target[ 2 ] = pos[ 2 ];
        var dir = this._tmpGetTargetDir;
        Vec3.sub( pos, this._eye, dir );
        dir[ 2 ] = 0.0;
        Vec3.normalize( dir, dir );
        this._angleHorizontal = Math.acos( dir[ 1 ] );
        if ( dir[ 0 ] < 0.0 ) {
            this._angleHorizontal = -this._angleHorizontal;
        }
        Vec3.sub( pos, this._eye, dir );
        Vec3.normalize( dir, dir );

        this._angleVertical = -Math.asin( dir[ 2 ] );
        Vec3.copy( dir, this._direction );
    },

    getLookPositionInterpolator: function () {
        return this._lookPosition;
    },
    getSideInterpolator: function () {
        return this._side;
    },
    getForwardInterpolator: function () {
        return this._forward;
    },
    getPanInterpolator: function () {
        return this._pan;
    },
    getZoomInterpolator: function () {
        return this._zoom;
    },
    getRotateInterpolator: function () {
        // for compatibility with orbit hammer controllers
        return this._lookPosition;
    },

    computeRotation: ( function () {
        var first = Matrix.create();
        var second = Matrix.create();
        var rotMat = Matrix.create();

        var upy = Vec3.createAndSet( 0.0, 1.0, 0.0 );
        var upz = Vec3.createAndSet( 0.0, 0.0, 1.0 );
        var LIMIT = Math.PI * 0.5;
        return function ( dx, dy ) {
            this._angleVertical += dy * 0.01;
            this._angleHorizontal -= dx * 0.01;
            if ( this._angleVertical > LIMIT ) this._angleVertical = LIMIT;
            else if ( this._angleVertical < -LIMIT ) this._angleVertical = -LIMIT;

            Matrix.makeRotate( -this._angleVertical, 1.0, 0.0, 0.0, first );
            Matrix.makeRotate( -this._angleHorizontal, 0.0, 0.0, 1.0, second );
            Matrix.mult( second, first, rotMat );

            // TOTO refactor the way the rotation matrix is managed
            Matrix.preMult( rotMat, this._rotBase );

            Matrix.transformVec3( rotMat, upy, this._direction );
            Vec3.normalize( this._direction, this._direction );

            Matrix.transformVec3( rotMat, upz, this._up );
        };
    } )(),
    reset: function () {
        this.init();
    },
    setDistance: function ( d ) {
        this._distance = d;
    },
    getDistance: function () {
        return this._distance;
    },
    setStepFactor: function ( t ) {
        this._stepFactor = t;
    },

    update: ( function () {
        var vec = Vec2.createAndSet( 0.0, 0.0 );
        return function ( nv ) {
            var dt = nv.getFrameStamp().getDeltaTime();

            this._forward.update( dt );
            this._side.update( dt );
            var delta = this._lookPosition.update( dt );

            this.computeRotation( -delta[ 0 ] * 0.5, -delta[ 1 ] * 0.5 );

            // TDOO why check with epsilon ?
            var factor = this._distance < 1e-3 ? 1e-3 : this._distance;

            // see comment in orbitManipulator for fov modulation speed
            var proj = this._camera.getProjectionMatrix();
            var vFov = proj[ 15 ] === 1 ? 1.0 : 2.00 / proj[ 5 ];

            // time based displacement vector
            vec[ 0 ] = this._forward.getCurrent()[ 0 ];
            vec[ 1 ] = this._side.getCurrent()[ 0 ];
            var len2 = Vec2.length2( vec );
            if ( len2 > 1.0 ) Vec2.mult( vec, 1.0 / Math.sqrt( len2 ), vec );

            // direct displacement vectors
            var pan = this._pan.update( dt );
            var zoom = this._zoom.update( dt );

            var timeFactor = this._stepFactor * factor * vFov * dt;
            var directFactor = this._stepFactor * factor * vFov * 0.005;

            var oldEye = Vec3.createAndSet( this._eye[ 0 ], this._eye[ 1 ], this._eye[ 2 ] );

            this.moveForward( vec[ 0 ] * timeFactor - zoom[ 0 ] * directFactor * 20.0 );
            this.strafe( vec[ 1 ] * timeFactor - pan[ 0 ] * directFactor );
            this.strafeVertical( -pan[ 1 ] * directFactor );

            this.handleCollision( oldEye );

            Vec3.copy( this._eye, oldEye );
            // gravity
            this._velocity[ 2 ] -= 1.0 * dt;
            Vec3.add( this._eye, this._velocity, this._eye );
            this.handleCollision( oldEye, true );

            Vec3.add( this._eye, this._direction, this._target );

            Matrix.makeLookAt( this._eye, this._target, this._up, this._inverseMatrix );
        };
    } )(),

    handleCollision: function ( oldEye, gravityResponse ) {
        var si = new SphereIntersector();
        var radius = Math.max( this._node.getBound().radius() * 0.1, 2.0 * Vec3.distance( oldEye, this._eye ) );
        si.set( this._eye, radius );

        var iv = new IntersectionVisitor();
        iv.setIntersector( si );
        this._node.accept( iv );

        var hits = si.getIntersections();
        if ( hits.length === 0 )
            return;
        Vec3.init( this._velocity );

        hits.sort( function ( a, b ) {
            return a.ratio - b.ratio;
        } );
        var hit = hits[ 0 ];

        var mat = Matrix.create();
        ComputeMatrixFromNodePath.computeLocalToWorld( hit.nodepath, true, mat );

        var inter = Vec3.create();
        Matrix.transformVec3( mat, hit.point, inter );

        // normal matrix
        mat[ 12 ] = mat[ 13 ] = mat[ 14 ] = 0.0;
        Matrix.inverse( mat, mat );
        Matrix.transpose( mat, mat );
        var offset = Vec3.create();
        Matrix.transformVec3( mat, hit.TriangleIntersection.normal, offset );
        Vec3.normalize( offset, offset );

        var dirMove = Vec3.create();
        Vec3.sub( this._eye, oldEye, dirMove );
        Vec3.normalize( dirMove, dirMove );
        var dot = -Vec3.dot( dirMove, offset );

        // direct-block of eye position with low degree slope
        if ( gravityResponse === true && ( dot > 0.9 || dot < 0.0 ) ) {
            Vec3.copy( oldEye, this._eye );
            return;
        }

        // check which side of triangle we are in
        if ( dot < 0.0 )
            return;

        Vec3.sub( this._eye, inter, offset );
        Vec3.normalize( offset, offset );

        Vec3.mult( offset, radius, offset );
        Vec3.add( inter, offset, this._eye );
    },
    setRotationBaseFromQuat: function ( quat ) {
        Matrix.makeRotateFromQuat( quat, this._rotBase );
    },

    moveForward: ( function () {
        var tmp = Vec3.create();
        return function ( distance ) {
            Vec3.copy( this._direction, tmp );
            tmp[ 2 ] = 0.0;
            Vec3.normalize( tmp, tmp );
            Vec3.mult( tmp, distance, tmp );
            Vec3.add( this._eye, tmp, this._eye );
        };
    } )(),

    strafe: ( function () {
        var tmp = Vec3.create();
        return function ( distance ) {
            Vec3.cross( this._direction, this._up, tmp );
            Vec3.normalize( tmp, tmp );
            Vec3.mult( tmp, distance, tmp );
            Vec3.add( this._eye, tmp, this._eye );
        };
    } )(),

    strafeVertical: ( function () {
        var tmp = Vec3.create();
        return function ( distance ) {
            Vec3.normalize( this._up, tmp );
            Vec3.mult( tmp, distance, tmp );
            Vec3.add( this._eye, tmp, this._eye );
        };
    } )()

} );

FirstPersonManipulator.DeviceOrientation = FirstPersonManipulatorDeviceOrientationController;
FirstPersonManipulator.Hammer = FirstPersonManipulatorHammerController;
FirstPersonManipulator.WebVR = FirstPersonManipulatorWebVRController;
FirstPersonManipulator.StandardMouseKeyboard = FirstPersonManipulatorStandardMouseKeyboardController;

module.exports = FirstPersonManipulator;
