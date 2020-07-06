// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/promiseUtils ../../../../core/watchUtils ../../../../core/accessorSupport/decorators ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/Point ../PropertiesPool ./PointOfInterest".split(" "),function(e,g,p,d,k,q,c,h,l,m,r,t){Object.defineProperty(g,"__esModule",{value:!0});var u=Array;e=function(e){function a(b){b=e.call(this,
b)||this;b._dirty=!1;b._propertiesPool=new r.default({location:m,renderLocation:u},b);b._estimatedSurfaceAltitude=0;b._pendingElevationQueryController=null;b.renderLocation=l.vec3f64.create();return b}p(a,e);a.prototype.initialize=function(){var b=this;this.handles.add(this.scheduler.registerTask(this.task,function(){return b._measureSurfaceAltitude()},function(){return b._needsUpdate()}));this._measureSurfaceAltitude();if(this.map){var a=function(){return b._setDirty()};this.handles.add([q.on(this.map,
"ground.layers","change",a,a,a)])}};a.prototype.destroy=function(){this._cancelPendingRequest();this._propertiesPool.destroy();this._propertiesPool=null};Object.defineProperty(a.prototype,"location",{get:function(){var b=this._propertiesPool.get("location");this.renderCoordsHelper.fromRenderCoords(this.renderLocation,b,this.state.spatialReference);return b},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"updating",{get:function(){return this._dirty||null!=this._pendingElevationQueryController},
enumerable:!0,configurable:!0});a.prototype.updateRenderLocation=function(){this._setDirty();this._updateRenderLocation()};a.prototype.update=function(){this._measureSurfaceAltitude();this._updateRenderLocation()};a.prototype._setDirty=function(){this._dirty||(this._dirty=!0,this.notifyChange("updating"))};a.prototype._needsUpdate=function(){return!this._pendingElevationQueryController&&this._dirty};a.prototype._cancelPendingRequest=function(){var b=this._pendingElevationQueryController;b&&(this._pendingElevationQueryController=
null,b.abort(),this.notifyChange("updating"))};a.prototype._measureSurfaceAltitude=function(){var b=this;this._cancelPendingRequest();this._dirty=!1;this.notifyChange("updating");if(this.map&&this.map.ground){this.renderCoordsHelper.fromRenderCoords(this.state.camera.eye,n,this.state.spatialReference);var a=k.createAbortController();this.map.ground.queryElevation(n,{signal:a.signal}).then(function(a){return b._updateSurfaceAltitude(a.geometry.z)}).catch(function(a){k.isAbortError(a)||b._updateSurfaceAltitude(0)}).catch(function(){}).then(function(){b._pendingElevationQueryController===
a&&(b._pendingElevationQueryController=null,b.notifyChange("updating"));a=null});this._pendingElevationQueryController=a}else this._updateSurfaceAltitude(0)};a.prototype._updateSurfaceAltitude=function(a){this._estimatedSurfaceAltitude!==a&&(this._estimatedSurfaceAltitude=a,this._updateRenderLocation())};a.prototype._updateRenderLocation=function(){h.vec3.copy(f,this.state.camera.eye);this.renderCoordsHelper.setAltitude(this._estimatedSurfaceAltitude,f);h.vec3.exactEquals(this._get("renderLocation"),
f)||this._set("renderLocation",h.vec3.copy(this._propertiesPool.get("renderLocation"),f))};d([c.property({constructOnly:!0})],a.prototype,"scheduler",void 0);d([c.property({constructOnly:!0})],a.prototype,"task",void 0);d([c.property({readOnly:!0,dependsOn:["renderLocation"]})],a.prototype,"location",null);d([c.property({constructOnly:!0})],a.prototype,"map",void 0);d([c.property({readOnly:!0})],a.prototype,"renderLocation",void 0);d([c.property({readOnly:!0})],a.prototype,"updating",null);return a=
d([c.subclass("esri.views.3d.support.CameraOnSurface")],a)}(c.declared(t.PointOfInterest));g.CameraOnSurface=e;var f=l.vec3f64.create(),n=new m;g.default=e});