'use strict';

var MergeGeometryVisitor = function ( singleVB, singleIB ) {

    osg.NodeVisitor.call( this, osg.NodeVisitor.TRAVERSE_ALL_CHILDREN );
    this._singleVB = singleVB;
    this._singleIB = singleVB && singleIB;
    this._mergeList = [];

};

// merge geometry
// into a single VB (no morph, no animation)
// optionnally into a single IB (same stateset exactly + no solid animation) 
MergeGeometryVisitor.prototype = osg.objectInherit( osg.NodeVisitor.prototype, {


    apply: function ( node ) {

        if ( node instanceof osg.Geometry ) {

            if ( this._mergeList.length === 0 ) {
                this._mergeList.push( [ node ] );
            } else {
                var i = 0,
                    l = this._mergeList.length;
                for ( ; i < l; i++ ) {

                    var geomLists = this._mergeList[ 0 ];

                    if ( this.isAbleToMerge( geomLists[ 0 ], node ) ) {
                        geomLists.push( node );
                        break;
                    }
                }
                if ( i == l ) {
                    this._mergeList.push( [ node ] );
                }
            }
        }

        this.traverse( node );
    },

    /// Return true only if both geometries have same array type
    isAbleToMerge: function ( g1, g2 ) {

        // first verify sae arrays size
        var va1 = g1.getVertexAttributeList();
        var va2 = g2.getVertexAttributeList();


        //  verify data type compatibility
        var attributesKeys = va1.getKeys();
        for ( var i = 0, l = attributesKeys.length; i < l; i++ ) {
            var key = attributesKeys[ i ];

            var attr1 = va1[ key ];
            var attr2 = va2[ key ];

            if ( attr1 !== attr2 ) {
                return false;
            }

        }

        return true;
    }



        merge: function () {


        GeometryDuplicateMap;

        typedef std::vector < DuplicateList > MergeList;

        GeometryDuplicateMap geometryDuplicateMap;
        DrawableList standardDrawables;

        i;
        for ( i = 0; i < geode.getNumDrawables(); ++i ) {
            osg::Drawable * drawable = geode.getDrawable( i );
            if ( drawable ) {
                osg::Geometry * geom = drawable - > asGeometry();
                if ( geom ) {
                    //geom->computeCorrectBindingsAndArraySizes();

                    if ( !geometryContainsSharedArrays( * geom ) &&
                        geom - > getDataVariance() != osg::Object::DYNAMIC &&
                        isOperationPermissibleForObject( geom ) ) {
                        geometryDuplicateMap[ geom ].push_back( geom );
                    } else {
                        standardDrawables.push_back( drawable );
                    }
                } else {
                    standardDrawables.push_back( drawable );
                }
            }
        }

        #
        if 1
        // first try to group geometries with the same properties
        // (i.e. array types) to avoid loss of data during merging
        MergeList mergeListChecked; // List of drawables just before merging, grouped by "compatibility" and vertex limit
        MergeList mergeList; // Intermediate list of drawables, grouped ony by "compatibility"
        for ( GeometryDuplicateMap::iterator itr = geometryDuplicateMap.begin(); itr != geometryDuplicateMap.end();
            ++itr ) {
            if ( itr - > second.empty() ) continue;
            if ( itr - > second.size() == 1 ) {
                mergeList.push_back( DuplicateList() );
                DuplicateList * duplicateList = & mergeList.back();
                duplicateList - > push_back( itr - > second[ 0 ] );
                continue;
            }

            std::sort( itr - > second.begin(), itr - > second.end(), LessGeometryPrimitiveType() );

            // initialize the temporary list by pushing the first geometry
            MergeList mergeListTmp;
            mergeListTmp.push_back( DuplicateList() );
            DuplicateList * duplicateList = & mergeListTmp.back();
            duplicateList - > push_back( itr - > second[ 0 ] );

            for ( DuplicateList::iterator dupItr = itr - > second.begin() + 1; dupItr != itr - > second.end();
                ++dupItr ) {
                osg::Geometry * geomToPush = * dupItr;

                // try to group geomToPush with another geometry
                MergeList::iterator eachMergeList = mergeListTmp.begin();
                for ( ; eachMergeList != mergeListTmp.end(); ++eachMergeList ) {
                    if ( !eachMergeList - > empty() && eachMergeList - > front() != NULL && isAbleToMerge( * eachMergeList - > front(), * geomToPush ) ) {
                        eachMergeList - > push_back( geomToPush );
                        break;
                    }
                }

                // if no suitable group was found, then a new one is created
                if ( eachMergeList == mergeListTmp.end() ) {
                    mergeListTmp.push_back( DuplicateList() );
                    duplicateList = & mergeListTmp.back();
                    duplicateList - > push_back( geomToPush );
                }
            }

            // copy the group in the mergeListChecked
            for ( MergeList::iterator eachMergeList = mergeListTmp.begin(); eachMergeList != mergeListTmp.end(); ++eachMergeList ) {
                mergeListChecked.push_back( * eachMergeList );
            }
        }

        // then build merge list using _targetMaximumNumberOfVertices
        bool needToDoMerge = false;
        // dequeue each DuplicateList when vertices limit is reached or when all elements has been checked
        for ( ; !mergeListChecked.empty(); ) {
            MergeList::iterator itr = mergeListChecked.begin();
            DuplicateList & duplicateList( * itr );
            if ( duplicateList.size() == 0 ) {
                mergeListChecked.erase( itr );
                continue;
            }

            if ( duplicateList.size() == 1 ) {
                mergeList.push_back( duplicateList );
                mergeListChecked.erase( itr );
                continue;
            }

            numVertices( duplicateList.front() - > getVertexArray() ? duplicateList.front() - > getVertexArray() - > getNumElements() : 0 );
            DuplicateList::iterator eachGeom( duplicateList.begin() + 1 );
            // until all geometries have been checked or _targetMaximumNumberOfVertices is reached
            for ( ; eachGeom != duplicateList.end(); ++eachGeom ) {
                numAddVertices( ( * eachGeom ) - > getVertexArray() ? ( * eachGeom ) - > getVertexArray() - > getNumElements() : 0 );
                if ( ( numVertices + numAddVertices ) > _targetMaximumNumberOfVertices ) {
                    break;
                } else {
                    numVertices += numAddVertices;
                }
            }

            // push back if bellow the limit
            if ( eachGeom == duplicateList.end() ) {
                if ( duplicateList.size() > 1 ) needToDoMerge = true;
                mergeList.push_back( duplicateList );
                mergeListChecked.erase( itr );
            }
            // else split the list to store what is below the limit and retry on what is above
            else {
                mergeList.push_back( DuplicateList() );
                DuplicateList * duplicateListResult = & mergeList.back();
                duplicateListResult - > insert( duplicateListResult - > end(), duplicateList.begin(), eachGeom );
                duplicateList.erase( duplicateList.begin(), eachGeom );
                if ( duplicateListResult - > size() > 1 ) needToDoMerge = true;
            }
        }

        if ( needToDoMerge ) {
            // first take a reference to all the drawables to prevent them being deleted prematurely
            typedef std::vector < osg::ref_ptr < osg::Drawable > > DrawableList;
            DrawableList keepDrawables;
            keepDrawables.resize( geode.getNumDrawables() );
            for ( i = 0; i < geode.getNumDrawables(); ++i ) {
                osg::Drawable * drawable = geode.getDrawable( i );
                if ( drawable ) keepDrawables[ i ] = geode.getDrawable( i );
            }

            // now clear the drawable list of the Geode so we don't have to remove items one by one (which is slow)
            geode.removeDrawables( 0, geode.getNumDrawables() );

            // add back in the standard drawables which arn't possible to merge.
            for ( DrawableList::iterator sitr = standardDrawables.begin(); sitr != standardDrawables.end();
                ++sitr ) {
                geode.addDrawable( sitr - > get() );
            }

            // now do the merging of geometries
            for ( MergeList::iterator mitr = mergeList.begin(); mitr != mergeList.end();
                ++mitr ) {
                DuplicateList & duplicateList = * mitr;
                if ( duplicateList.size() > 1 ) {
                    osg::Geometry * lhs = duplicateList.front();
                    geode.addDrawable( lhs );
                    for ( DuplicateList::iterator ditr = duplicateList.begin() + 1; ditr != duplicateList.end();
                        ++ditr ) {
                        mergeGeometry( * lhs, ** ditr );
                    }
                } else if ( duplicateList.size() > 0 ) {
                    geode.addDrawable( duplicateList.front() );
                }
            }
        }

        #
        else
        // don't merge geometry if its above a maximum number of vertices.
            for ( GeometryDuplicateMap::iterator itr = geometryDuplicateMap.begin(); itr != geometryDuplicateMap.end();
            ++itr ) {
            if ( itr - > second.size() > 1 ) {
                std::sort( itr - > second.begin(), itr - > second.end(), LessGeometryPrimitiveType() );
                osg::Geometry * lhs = itr - > second[ 0 ];
                for ( DuplicateList::iterator dupItr = itr - > second.begin() + 1; dupItr != itr - > second.end();
                    ++dupItr ) {
                    osg::Geometry * rhs = * dupItr;
                    if ( lhs - > getVertexArray() && lhs - > getVertexArray() - > getNumElements() >= _targetMaximumNumberOfVertices ) {
                        lhs = rhs;
                        continue;
                    }
                    if ( rhs - > getVertexArray() && rhs - > getVertexArray() - > getNumElements() >= _targetMaximumNumberOfVertices ) {
                        continue;
                    }
                    if ( lhs - > getVertexArray() && rhs - > getVertexArray() &&
                        ( lhs - > getVertexArray() - > getNumElements() + rhs - > getVertexArray() - > getNumElements() ) >= _targetMaximumNumberOfVertices ) {
                        continue;
                    }
                    if ( mergeGeometry( * lhs, * rhs ) ) {
                        geode.removeDrawable( rhs );
                        static int co = 0;
                        OSG_INFO << "merged and removed Geometry " << ++co << std::endl;
                    }
                }
            }
        }#
        endif

        // OSG_NOTICE<<"After "<<geode.getNumDrawables()<<std::endl;

    }


    // convert all polygon primitives which has 3 indices into TRIANGLES, 4 indices into QUADS.
        i;
    for ( i = 0; i < geode.getNumDrawables(); ++i ) {
        osg::Geometry * geom = dynamic_cast < osg::Geometry * > ( geode.getDrawable( i ) );
        if ( geom ) {
            osg::Geometry::PrimitiveSetList & primitives = geom - > getPrimitiveSetList();
            for ( osg::Geometry::PrimitiveSetList::iterator itr = primitives.begin(); itr != primitives.end();
                ++itr ) {
                osg::PrimitiveSet * prim = itr - > get();
                if ( prim - > getMode() == osg::PrimitiveSet::POLYGON ) {
                    if ( prim - > getNumIndices() == 3 ) {
                        prim - > setMode( osg::PrimitiveSet::TRIANGLES );
                    } else if ( prim - > getNumIndices() == 4 ) {
                        prim - > setMode( osg::PrimitiveSet::QUADS );
                    }
                }
            }
        }
    }

    // now merge any compatible primitives.
    for ( i = 0; i < geode.getNumDrawables(); ++i ) {
        osg::Geometry * geom = dynamic_cast < osg::Geometry * > ( geode.getDrawable( i ) );
        if ( geom ) {
            if ( geom - > getNumPrimitiveSets() > 0 &&
                osg::getBinding( geom - > getNormalArray() ) != osg::Array::BIND_PER_PRIMITIVE_SET &&
                osg::getBinding( geom - > getColorArray() ) != osg::Array::BIND_PER_PRIMITIVE_SET &&
                osg::getBinding( geom - > getSecondaryColorArray() ) != osg::Array::BIND_PER_PRIMITIVE_SET &&
                osg::getBinding( geom - > getFogCoordArray() ) != osg::Array::BIND_PER_PRIMITIVE_SET ) {

                #
                if 1
                bool doneCombine = false;

                osg::Geometry::PrimitiveSetList & primitives = geom - > getPrimitiveSetList();
                lhsNo = 0;
                rhsNo = 1;
                while ( rhsNo < primitives.size() ) {
                    osg::PrimitiveSet * lhs = primitives[ lhsNo ].get();
                    osg::PrimitiveSet * rhs = primitives[ rhsNo ].get();

                    bool combine = false;

                    if ( lhs - > getType() == rhs - > getType() &&
                        lhs - > getMode() == rhs - > getMode() ) {

                        switch ( lhs - > getMode() ) {
                        case ( osg::PrimitiveSet::POINTS ):
                        case ( osg::PrimitiveSet::LINES ):
                        case ( osg::PrimitiveSet::TRIANGLES ):
                        case ( osg::PrimitiveSet::QUADS ):
                            combine = true;
                            break;
                        }

                    }

                    if ( combine ) {

                        switch ( lhs - > getType() ) {
                        case ( osg::PrimitiveSet::DrawArraysPrimitiveType ):
                            combine = mergePrimitive( * ( static_cast < osg::DrawArrays * > ( lhs ) ), * ( static_cast < osg::DrawArrays * > ( rhs ) ) );
                            break;
                        case ( osg::PrimitiveSet::DrawArrayLengthsPrimitiveType ):
                            combine = mergePrimitive( * ( static_cast < osg::DrawArrayLengths * > ( lhs ) ), * ( static_cast < osg::DrawArrayLengths * > ( rhs ) ) );
                            break;
                        case ( osg::PrimitiveSet::DrawElementsUBytePrimitiveType ):
                            combine = mergePrimitive( * ( static_cast < osg::DrawElementsUByte * > ( lhs ) ), * ( static_cast < osg::DrawElementsUByte * > ( rhs ) ) );
                            break;
                        case ( osg::PrimitiveSet::DrawElementsUShortPrimitiveType ):
                            combine = mergePrimitive( * ( static_cast < osg::DrawElementsUShort * > ( lhs ) ), * ( static_cast < osg::DrawElementsUShort * > ( rhs ) ) );
                            break;
                        case ( osg::PrimitiveSet::DrawElementsUIntPrimitiveType ):
                            combine = mergePrimitive( * ( static_cast < osg::DrawElementsUInt * > ( lhs ) ), * ( static_cast < osg::DrawElementsUInt * > ( rhs ) ) );
                            break;
                        default:
                            combine = false;
                            break;
                        }
                    }

                    if ( combine ) {
                        // make this primitive set as invalid and needing cleaning up.
                        rhs - > setMode( 0xffffff );
                        doneCombine = true;
                        ++rhsNo;
                    } else {
                        lhsNo = rhsNo;
                        ++rhsNo;
                    }
                }

                #
                if 1
                if ( doneCombine ) {
                    // now need to clean up primitiveset so it no longer contains the rhs combined primitives.

                    // first swap with a empty primitiveSet to empty it completely.
                    osg::Geometry::PrimitiveSetList oldPrimitives;
                    primitives.swap( oldPrimitives );

                    // now add the active primitive sets
                    for ( osg::Geometry::PrimitiveSetList::iterator pitr = oldPrimitives.begin(); pitr != oldPrimitives.end();
                        ++pitr ) {
                        if ( ( * pitr ) - > getMode() != 0xffffff ) primitives.push_back( * pitr );
                    }
                }#
                endif

                #
                else
                    osg::Geometry::PrimitiveSetList & primitives = geom - > getPrimitiveSetList();
                primNo = 0;
                while ( primNo + 1 < primitives.size() ) {
                    osg::PrimitiveSet * lhs = primitives[ primNo ].get();
                    osg::PrimitiveSet * rhs = primitives[ primNo + 1 ].get();
                    bool combine = false;
                    if ( lhs - > getType() == rhs - > getType() &&
                        lhs - > getMode() == rhs - > getMode() ) {
                        switch ( lhs - > getMode() ) {
                        case ( osg::PrimitiveSet::POINTS ):
                        case ( osg::PrimitiveSet::LINES ):
                        case ( osg::PrimitiveSet::TRIANGLES ):
                        case ( osg::PrimitiveSet::QUADS ):
                            combine = true;
                            break;
                        }
                    }
                    if ( combine ) {
                        switch ( lhs - > getType() ) {
                        case ( osg::PrimitiveSet::DrawArraysPrimitiveType ):
                            combine = mergePrimitive( * ( static_cast < osg::DrawArrays * > ( lhs ) ), * ( static_cast < osg::DrawArrays * > ( rhs ) ) );
                            break;
                        case ( osg::PrimitiveSet::DrawArrayLengthsPrimitiveType ):
                            combine = mergePrimitive( * ( static_cast < osg::DrawArrayLengths * > ( lhs ) ), * ( static_cast < osg::DrawArrayLengths * > ( rhs ) ) );
                            break;
                        case ( osg::PrimitiveSet::DrawElementsUBytePrimitiveType ):
                            combine = mergePrimitive( * ( static_cast < osg::DrawElementsUByte * > ( lhs ) ), * ( static_cast < osg::DrawElementsUByte * > ( rhs ) ) );
                            break;
                        case ( osg::PrimitiveSet::DrawElementsUShortPrimitiveType ):
                            combine = mergePrimitive( * ( static_cast < osg::DrawElementsUShort * > ( lhs ) ), * ( static_cast < osg::DrawElementsUShort * > ( rhs ) ) );
                            break;
                        case ( osg::PrimitiveSet::DrawElementsUIntPrimitiveType ):
                            combine = mergePrimitive( * ( static_cast < osg::DrawElementsUInt * > ( lhs ) ), * ( static_cast < osg::DrawElementsUInt * > ( rhs ) ) );
                            break;
                        default:
                            break;
                        }
                    }
                    if ( combine ) {
                        primitives.erase( primitives.begin() + primNo + 1 );
                    }
                    if ( !combine ) {
                        primNo++;
                    }
                }#
                endif
            }
        }


    }

    //    geode.dirtyBound();


    return false;
}

bool Optimizer::MergeGeometryVisitor::geometryContainsSharedArrays( osg::Geometry & geom ) {
    if ( geom.getVertexArray() && geom.getVertexArray() - > referenceCount() > 1 ) return true;
    if ( geom.getNormalArray() && geom.getNormalArray() - > referenceCount() > 1 ) return true;
    if ( geom.getColorArray() && geom.getColorArray() - > referenceCount() > 1 ) return true;
    if ( geom.getSecondaryColorArray() && geom.getSecondaryColorArray() - > referenceCount() > 1 ) return true;
    if ( geom.getFogCoordArray() && geom.getFogCoordArray() - > referenceCount() > 1 ) return true;


    for ( unit = 0; unit < geom.getNumTexCoordArrays(); ++unit ) {
        osg::Array * tex = geom.getTexCoordArray( unit );
        if ( tex && tex - > referenceCount() > 1 ) return true;
    }

    // shift the indices of the incoming primitives to account for the pre existing geometry.
    for ( osg::Geometry::PrimitiveSetList::iterator primItr = geom.getPrimitiveSetList().begin(); primItr != geom.getPrimitiveSetList().end();
        ++primItr ) {
        if ( ( * primItr ) - > referenceCount() > 1 ) return true;
    }


    return false;
}


class MergeArrayVisitor: public osg::ArrayVisitor {
    protected: osg::Array * _lhs;
    int _offset;
    public: MergeArrayVisitor(): _lhs( 0 ),
    _offset( 0 ) {}


    /// try to merge the content of two arrays.
    bool merge( osg::Array * lhs, osg::Array * rhs, int offset = 0 ) {
        if ( lhs == 0 || rhs == 0 ) return true;
        if ( lhs - > getType() != rhs - > getType() ) return false;

        _lhs = lhs;
        _offset = offset;

        rhs - > accept( * this );
        return true;
    }

    template < typename T >
    void _merge( T & rhs ) {
        T * lhs = static_cast < T * > ( _lhs );
        lhs - > insert( lhs - > end(), rhs.begin(), rhs.end() );
    }

    template < typename T >
    void _mergeAndOffset( T & rhs ) {
        T * lhs = static_cast < T * > ( _lhs );

        typename T::iterator itr;
        for ( itr = rhs.begin(); itr != rhs.end();
            ++itr ) {
            lhs - > push_back( * itr + _offset );
        }
    }

};

bool Optimizer::MergeGeometryVisitor::mergeGeometry( osg::Geometry & lhs, osg::Geometry & rhs ) {

    MergeArrayVisitor merger;

    base = 0;
    if ( lhs.getVertexArray() && rhs.getVertexArray() ) {

        base = lhs.getVertexArray() - > getNumElements();
        if ( !merger.merge( lhs.getVertexArray(), rhs.getVertexArray() ) ) {
            OSG_DEBUG << "MergeGeometry: vertex array not merged. Some data may be lost." << std::endl;
        }
    } else if ( rhs.getVertexArray() ) {
        base = 0;
        lhs.setVertexArray( rhs.getVertexArray() );
    }


    if ( lhs.getNormalArray() && rhs.getNormalArray() && lhs.getNormalArray() - > getBinding() != osg::Array::BIND_OVERALL ) {
        if ( !merger.merge( lhs.getNormalArray(), rhs.getNormalArray() ) ) {
            OSG_DEBUG << "MergeGeometry: normal array not merged. Some data may be lost." << std::endl;
        }
    } else if ( rhs.getNormalArray() ) {
        lhs.setNormalArray( rhs.getNormalArray() );
    }


    if ( lhs.getColorArray() && rhs.getColorArray() && lhs.getColorArray() - > getBinding() != osg::Array::BIND_OVERALL ) {
        if ( !merger.merge( lhs.getColorArray(), rhs.getColorArray() ) ) {
            OSG_DEBUG << "MergeGeometry: color array not merged. Some data may be lost." << std::endl;
        }
    } else if ( rhs.getColorArray() ) {
        lhs.setColorArray( rhs.getColorArray() );
    }

    if ( lhs.getSecondaryColorArray() && rhs.getSecondaryColorArray() && lhs.getSecondaryColorArray() - > getBinding() != osg::Array::BIND_OVERALL ) {
        if ( !merger.merge( lhs.getSecondaryColorArray(), rhs.getSecondaryColorArray() ) ) {
            OSG_DEBUG << "MergeGeometry: secondary color array not merged. Some data may be lost." << std::endl;
        }
    } else if ( rhs.getSecondaryColorArray() ) {
        lhs.setSecondaryColorArray( rhs.getSecondaryColorArray() );
    }

    if ( lhs.getFogCoordArray() && rhs.getFogCoordArray() && lhs.getFogCoordArray() - > getBinding() != osg::Array::BIND_OVERALL ) {
        if ( !merger.merge( lhs.getFogCoordArray(), rhs.getFogCoordArray() ) ) {
            OSG_DEBUG << "MergeGeometry: fog coord array not merged. Some data may be lost." << std::endl;
        }
    } else if ( rhs.getFogCoordArray() ) {
        lhs.setFogCoordArray( rhs.getFogCoordArray() );
    }


    unit;
    for ( unit = 0; unit < lhs.getNumTexCoordArrays(); ++unit ) {
        if ( !merger.merge( lhs.getTexCoordArray( unit ), rhs.getTexCoordArray( unit ) ) ) {
            OSG_DEBUG << "MergeGeometry: tex coord array not merged. Some data may be lost." << std::endl;
        }
    }

    for ( unit = 0; unit < lhs.getNumVertexAttribArrays(); ++unit ) {
        if ( !merger.merge( lhs.getVertexAttribArray( unit ), rhs.getVertexAttribArray( unit ) ) ) {
            OSG_DEBUG << "MergeGeometry: vertex attrib array not merged. Some data may be lost." << std::endl;
        }
    }


    // shift the indices of the incoming primitives to account for the pre existing geometry.
    osg::Geometry::PrimitiveSetList::iterator primItr;
    for ( primItr = rhs.getPrimitiveSetList().begin(); primItr != rhs.getPrimitiveSetList().end(); ++primItr ) {
        osg::PrimitiveSet * primitive = primItr - > get();

        switch ( primitive - > getType() ) {
        case ( osg::PrimitiveSet::DrawElementsUBytePrimitiveType ):
            {
                osg::DrawElementsUByte * primitiveUByte = static_cast < osg::DrawElementsUByte * > ( primitive );
                currentMaximum = 0;
                for ( osg::DrawElementsUByte::iterator eitr = primitiveUByte - > begin(); eitr != primitiveUByte - > end();
                    ++eitr ) {
                    currentMaximum = osg::maximum( currentMaximum, () * eitr );
                }
                if ( ( base + currentMaximum ) >= 65536 ) {
                    // must promote to a DrawElementsUInt
                    osg::DrawElementsUInt * new_primitive = new osg::DrawElementsUInt( primitive - > getMode() );
                    std::copy( primitiveUByte - > begin(), primitiveUByte - > end(), std::back_inserter( * new_primitive ) );
                    new_primitive - > offsetIndices( base );
                    ( * primItr ) = new_primitive;
                } else if ( ( base + currentMaximum ) >= 256 ) {
                    // must promote to a DrawElementsUShort
                    osg::DrawElementsUShort * new_primitive = new osg::DrawElementsUShort( primitive - > getMode() );
                    std::copy( primitiveUByte - > begin(), primitiveUByte - > end(), std::back_inserter( * new_primitive ) );
                    new_primitive - > offsetIndices( base );
                    ( * primItr ) = new_primitive;
                } else {
                    primitive - > offsetIndices( base );
                }
            }
            break;

        case ( osg::PrimitiveSet::DrawElementsUShortPrimitiveType ):
            {
                osg::DrawElementsUShort * primitiveUShort = static_cast < osg::DrawElementsUShort * > ( primitive );
                currentMaximum = 0;
                for ( osg::DrawElementsUShort::iterator eitr = primitiveUShort - > begin(); eitr != primitiveUShort - > end();
                    ++eitr ) {
                    currentMaximum = osg::maximum( currentMaximum, () * eitr );
                }
                if ( ( base + currentMaximum ) >= 65536 ) {
                    // must promote to a DrawElementsUInt
                    osg::DrawElementsUInt * new_primitive = new osg::DrawElementsUInt( primitive - > getMode() );
                    std::copy( primitiveUShort - > begin(), primitiveUShort - > end(), std::back_inserter( * new_primitive ) );
                    new_primitive - > offsetIndices( base );
                    ( * primItr ) = new_primitive;
                } else {
                    primitive - > offsetIndices( base );
                }
            }
            break;

        case ( osg::PrimitiveSet::DrawArraysPrimitiveType ):
        case ( osg::PrimitiveSet::DrawArrayLengthsPrimitiveType ):
        case ( osg::PrimitiveSet::DrawElementsUIntPrimitiveType ):
        default:
            primitive - > offsetIndices( base );
            break;
        }
    }

    for ( primItr = rhs.getPrimitiveSetList().begin(); primItr != rhs.getPrimitiveSetList().end(); ++primItr ) {
        lhs.addPrimitiveSet( primItr - > get() );
    }

    lhs.dirtyBound();
    lhs.dirtyDisplayList();

    return true;
}

bool Optimizer::MergeGeometryVisitor::mergePrimitive( osg::DrawArrays & lhs, osg::DrawArrays & rhs ) {
    if ( lhs.getFirst() + lhs.getCount() == rhs.getFirst() ) {
        lhs.setCount( lhs.getCount() + rhs.getCount() );
        return true;
    }
    return false;
}

bool Optimizer::MergeGeometryVisitor::mergePrimitive( osg::DrawArrayLengths & lhs, osg::DrawArrayLengths & rhs ) {
    int lhs_count = std::accumulate( lhs.begin(), lhs.end(), 0 );

    if ( lhs.getFirst() + lhs_count == rhs.getFirst() ) {
        lhs.insert( lhs.end(), rhs.begin(), rhs.end() );
        return true;
    }
    return false;
}

bool Optimizer::MergeGeometryVisitor::mergePrimitive( osg::DrawElementsUByte & lhs, osg::DrawElementsUByte & rhs ) {
    lhs.insert( lhs.end(), rhs.begin(), rhs.end() );
    return true;
}

bool Optimizer::MergeGeometryVisitor::mergePrimitive( osg::DrawElementsUShort & lhs, osg::DrawElementsUShort & rhs ) {
    lhs.insert( lhs.end(), rhs.begin(), rhs.end() );
    return true;
}

bool Optimizer::MergeGeometryVisitor::mergePrimitive( osg::DrawElementsUInt & lhs, osg::DrawElementsUInt & rhs ) {
    lhs.insert( lhs.end(), rhs.begin(), rhs.end() );
    return true;
}

} );

module.exports = MergeGeometryVisitor;
