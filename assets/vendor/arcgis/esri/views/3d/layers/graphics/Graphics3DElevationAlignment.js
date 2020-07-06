// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/Evented ../../../../core/Handles ../../../../core/SetUtils ../../../../core/accessorSupport/decorators ./ExtentSet ../../../support/Scheduler".split(" "),function(u,v,l,k,m,n,p,q,g,r,t){return function(f){function b(){var a=null!==f&&f.apply(this,arguments)||this;a.dirtyExtents=new r.ExtentSet;a.globalDirty=!1;a.dirtyGraphicsSet=new Set;a.handles=
new p;a.updateElevation=!1;a.layerView=null;a.graphicsCore=null;a.events=new n;return a}l(b,f);Object.defineProperty(b.prototype,"updating",{get:function(){return this.needsUpdate()},enumerable:!0,configurable:!0});b.prototype.setup=function(a,h,b,e){var c=this;this.layerView=a;this.queryGraphicUIDsInExtent=h;this.graphicsCore=b;this.elevationProvider=e;a=this.layerView.view.resourceController.scheduler;this.handles.add([e.on("elevation-change",function(a){("scene"!==a.context||b.layer.elevationInfo&&
"relative-to-scene"===b.layer.elevationInfo.mode)&&c.elevationUpdateHandler(a)}),this.layerView.watch("suspended",function(){return c.suspendedChange()}),a.registerTask(t.Task.ELEVATION_ALIGNMENT,function(a){return c.update(a)},function(){return c.needsUpdate()})])};b.prototype.destroy=function(){this.dirtyGraphicsSet=null;this.handles.destroy();this.queryGraphicUIDsInExtent=this.graphicsCore=this.layerView=this.handles=null};b.prototype.clear=function(){this.dirtyGraphicsSet.clear();this.notifyChange("updating")};
b.prototype.suspendedChange=function(){!0===this.layerView.suspended?this.updateElevation=!1:!1===this.layerView.suspended&&this.updateElevation&&(this.globalDirty=!0,this.notifyChange("updating"))};b.prototype.elevationInfoChange=function(){this.globalDirty=!0;this.notifyChange("updating")};b.prototype.needsUpdate=function(){return this.dirtyGraphicsSet&&0<this.dirtyGraphicsSet.size||this.dirtyExtents&&!this.dirtyExtents.empty||this.globalDirty};b.prototype.update=function(a){var b=this;this.globalDirty&&
(this.markAllGraphicsElevationDirty(),this.globalDirty=!1,a.madeProgress());for(a.run(function(){return b.dirtyExtents.merge(a)});this.needsUpdate()&&!a.done;)this._updateDirtyGraphics(a),this._updateDirtyExtents(a);this.layerView.view.deconflictor.setDirty();this.notifyChange("updating")};b.prototype._updateDirtyGraphics=function(a){for(var b=this,d=this.layerView.view,e=this.graphicsCore.stageLayer.id,c=this.layerView.labeling,g=function(){var h=Math.min(f.dirtyGraphicsSet.size,100);q.someSet(f.dirtyGraphicsSet,
function(c){var e=b.graphicsCore.getGraphics3DGraphicById(c);b.dirtyGraphicsSet.delete(c);e&&e.alignWithElevation(b.elevationProvider,d.renderCoordsHelper,b.graphicsCore.asyncUpdates);a.madeProgress();return 0>=--h||a.done});d._stage.processDirtyLayer(e);c&&c.processStageDirty()},f=this;0<this.dirtyGraphicsSet.size&&!a.done;)g()};b.prototype._updateDirtyExtents=function(a){for(var b=this;!this.dirtyExtents.empty&&100>this.dirtyGraphicsSet.size&&!a.done;){var d=this.dirtyExtents.pop();this.events.hasEventListener("invalidate-elevation")&&
this.events.emit("invalidate-elevation",{extent:d,spatialReference:this.spatialReference});this.queryGraphicUIDsInExtent(d,this.spatialReference,function(a){var c=b.graphicsCore.getGraphics3DGraphicById(a);c&&c.needsElevationUpdates()&&b.dirtyGraphicsSet.add(a)});a.madeProgress()}};b.prototype.markAllGraphicsElevationDirty=function(){var a=this;this.dirtyExtents.clear();this.dirtyGraphicsSet.clear();this.graphicsCore.graphics3DGraphics.forEach(function(b,d){a.dirtyGraphicsSet.add(d)})};b.prototype.elevationUpdateHandler=
function(a){var b=a.extent;this.layerView.suspended?this.updateElevation||(a=this.graphicsCore.computedExtent)&&b[2]>a.xmin&&b[0]<a.xmax&&b[3]>a.ymin&&b[1]<a.ymax&&(this.updateElevation=!0):(-Infinity===b[0]?this.globalDirty=!0:this.dirtyExtents.add(b),this.spatialReference=a.spatialReference,this.notifyChange("updating"))};k([g.property({readOnly:!0})],b.prototype,"updating",null);return b=k([g.subclass("esri.views.3d.layers.graphics.Graphics3DElevationAlignment")],b)}(g.declared(m))});