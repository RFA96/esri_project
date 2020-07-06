// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/arrayUtils ../../../../core/Evented ../../../../core/libs/gl-matrix-2/vec3f64 ./IdGen ./Octree".split(" "),function(p,q,h,e,k,f,l,m){return function(g){function a(b,d,n){var c=g.call(this)||this;c._parentStages=new Map;c._objects=new Set;c.id=a._idGen.gen(b);c.apiLayerUid=n;c.name=b;d=d||{};c.group=d.group||"";c.isVisible=null!=d.isVisible?d.isVisible:!0;c.isPickable=null!=d.isPickable?d.isPickable:!0;c.isSliceable=
!1;c.translation=d.translation?f.vec3f64.clone(d.translation):f.vec3f64.create();return c}h(a,g);a.prototype.addParentStage=function(b){if(!this._parentStages.has(b)){var a=this.on("dirty",function(a){b.notifyDirty(a.origin,a.dirtyType,a.subObject)});this._parentStages.set(b,a)}};a.prototype.removeParentStage=function(b){var a=this._parentStages.get(b);a&&(a.remove(),this._parentStages.delete(b));this.invalidateSpatialQueryAccelerator()};a.prototype.getName=function(){return this.name};a.prototype.getGroup=
function(){return this.group};a.prototype.getTranslation=function(){return this.translation};a.prototype.getObjectIds=function(){return e.keysOfSet(this._objects,function(b){return b.id})};a.prototype.getObjects=function(){return e.keysOfSet(this._objects)};a.prototype.addObject=function(b){this._objects.add(b);b.parentLayer=this;this.notifyDirty("layerObjectAdded",b);this._octree&&this._octree.add(b)};a.prototype.hasObject=function(b){return this._objects.has(b)};a.prototype.removeObject=function(b){if(!this._objects.delete(b))return!1;
b.parentLayer=null;this.notifyDirty("layerObjectRemoved",b);this._octree&&this._octree.remove(b);return!0};a.prototype.notifyObjectBBChanged=function(b,a){this._octree&&this._octree.update(b,a)};a.prototype.getSpatialQueryAccelerator=function(){!this._octree&&50<this._objects.size&&this._createOctree();return this._octree};a.prototype.shaderTransformationChanged=function(){this.notifyDirty("shaderTransformationChanged",null)};a.prototype.invalidateSpatialQueryAccelerator=function(){this._octree&&
(this._octree.destroy(),this._octree=null)};a.prototype.notifyDirty=function(a,d,e,c){this.emit("dirty",{origin:c||this,dirtyType:a,subObject:d})};a.prototype._createOctree=function(){this._octree=new m({getRadius:function(a){return a.getBSRadius()},getCenter:function(a){return a.getCenter()}});this._octree.add(e.keysOfSet(this._objects))};a._idGen=new l.IdGen;return a}(k)});