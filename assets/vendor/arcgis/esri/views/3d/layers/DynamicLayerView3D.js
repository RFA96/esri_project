// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/asyncUtils ../../../core/Logger ../../../core/promiseUtils ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../geometry/Extent ../../../geometry/support/aaBoundingRect ./LayerView3D ./support/overlayImageUtils ./support/projectExtentUtils ../support/debugFlags ../webgl-engine/lib/RenderGeometry ../webgl-engine/lib/Texture ../webgl-engine/materials/DefaultMaterial ../../layers/LayerView ../../layers/RefreshableLayerView".split(" "),
function(x,O,A,f,B,r,n,C,D,t,y,E,k,z,l,F,u,G,H,I,J,K,L,M){var v=D.getLogger("esri.views.3d.layers.DynamicLayerView3D");x=function(w){function b(){var a=null!==w&&w.apply(this,arguments)||this;a.drapeSourceType=0;a.hasDraped=!0;a.fullExtentInLocalViewSpatialReference=null;a.maximumDataResolution=null;a._images=[];a._extents=[];a._overlayExtents=[];a.updateWhenStationary=!0;return a}A(b,w);b.prototype.initialize=function(){var a=this;this.addResolvingPromise(G.toViewIfLocal(this).then(function(d){return a._set("fullExtentInLocalViewSpatialReference",
d)}));this.updatingHandles.add(this,"suspended",function(){return a._suspendedChangeHandler()});this.handles.add(this.view.resourceController.scheduler.registerIdleStateCallbacks(function(){a._isScaleRangeActive()&&a.notifyChange("suspended")},function(){}));this._isScaleRangeLayer()&&this.updatingHandles.add(this.layer,"scaleRangeId",function(){return a.notifyChange("suspended")});"local"===this.view.viewingMode&&this.updatingHandles.add(this.view.basemapTerrain,"extent",function(){return a._overlayExtents.forEach(function(d,
e){return a._updateImageExtent(e)})})};b.prototype.destroy=function(){this.clear()};b.prototype.setDrapingExtent=function(a,d,e,c,b,h){this._overlayExtents[a]={extent:l.create(d),spatialReference:e,resolution:c,renderLocalOrigin:b,pixelRatio:h};this._updateImageExtent(a)};b.prototype._updateImageExtent=function(a){var d=this._overlayExtents[a],e=this._clippedExtent(d.extent,N),c=u.computeImageExportSize(d.extent,e,d.resolution),b=d.pixelRatio*this.view.pixelRatio;if("imageMaxWidth"in this.layer||
"imageMaxHeight"in this.layer){var h=this.layer.imageMaxWidth,g=this.layer.imageMaxHeight;if(c.width>h){var m=h/c.width;c.height=Math.floor(c.height*m);c.width=h;b*=m}c.height>g&&(m=g/c.height,c.width=Math.floor(c.width*m),c.height=g,b*=m)}h=this._extents[a];h&&l.equals(h.extent,e)&&!this._imageSizeDiffers(e,h.imageSize,c)||(this._extents[a]={extent:l.create(e),spatialReference:d.spatialReference,imageSize:c,pixelRatio:b},this.suspended||this._fetch(a).catch(function(a){t.isAbortError(a)||v.error(a)}))};
b.prototype.getGraphicFromGraphicUid=function(){return null};b.prototype.clear=function(){for(var a=0;a<this._images.length;a++)this._clearImage(a)};b.prototype.doRefresh=function(a){return n(this,void 0,void 0,function(){var d,e;return r(this,function(c){switch(c.label){case 0:if(this.suspended)return[2];d=[];for(e=0;e<this._extents.length;e++)this._extents[e]&&d.push(this._fetch(e,a));return[4,t.eachAlways(d)];case 1:return c.sent(),[2]}})})};b.prototype.canResume=function(){if(!this.inherited(arguments))return!1;
if(this._isScaleRangeLayer()){var a=this.layer,d=a.minScale,a=a.maxScale;if(0<d||0<a){var e=this.view.scale;if(e<a||0<d&&e>d)return!1}}return!0};b.prototype.isUpdating=function(){return this._images.some(function(a){return!!a.loadingPromise})};b.prototype.processResult=function(a,d,e){return n(this,void 0,void 0,function(){return r(this,function(c){if(d instanceof HTMLImageElement||d instanceof HTMLCanvasElement)a.image=d;return[2]})})};b.prototype.findExtentInfoAt=function(a){for(var d=0,e=this._extents;d<
e.length;d++){var c=e[d],b=c.extent;if((new z(b[0],b[1],b[2],b[3],c.spatialReference)).contains(a))return c}return null};b.prototype.getFetchOptions=function(){};b.prototype.redraw=function(a,d){return n(this,void 0,void 0,function(){var b=this;return r(this,function(c){switch(c.label){case 0:return[4,C.forEach(this._images,function(c,e){return n(b,void 0,void 0,function(){return r(this,function(b){switch(b.label){case 0:return c?[4,a(c,d)]:[2];case 1:return b.sent(),this._createStageObjects(e,c.image),
this.emit("draped-data-change"),[2]}})})})];case 1:return c.sent(),[2]}})})};b.prototype._imageSizeDiffers=function(a,d,b){if(!this.maximumDataResolution||H.TESTS_DISABLE_UPDATE_THRESHOLDS)return!0;var c=l.width(a)/this.maximumDataResolution.x;a=l.height(a)/this.maximumDataResolution.y;a=Math.abs(a/d.height-a/b.height);return 1.5<Math.abs(c/d.width-c/b.width)||1.5<a?!0:!1};b.prototype._fetch=function(a,d){return n(this,void 0,void 0,function(){var b,c,p,h,g,m,k,f,n,q=this;return r(this,function(e){switch(e.label){case 0:if(this.suspended)return[2];
b=this._overlayExtents[a];c=this._extents[a];p=c.extent;h=new z(p[0],p[1],p[2],p[3],c.spatialReference);this._images[a]||(this._images[a]={texture:null,material:null,rendergeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:l.create(p)});g=this._images[a];g.loadingAbortController&&(g.loadingAbortController.abort(),g.loadingAbortController=null);if(0===h.width||0===h.height)return this._clearImage(a),[2];m=t.createAbortController();g.loadingAbortController=
m;t.onAbort(d,function(){return m.abort()});k=m.signal;f=this._waitFetchReady(k).then(function(){var a=B({requestAsImageElement:!0,pixelRatio:b.pixelRatio},q.getFetchOptions(),{signal:k}),d=c.imageSize;return q.layer.fetchImage(h,d.width,d.height,a)}).then(function(a){if(y.isAborted(k))throw v.warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),y.createAbortError();return q.processResult(g,a)});g.loadingPromise=
f;t.always(f,function(){f===g.loadingPromise&&(g.loadingPromise=null,g.loadingAbortController=null)});n=f.then(function(){l.set(g.renderExtent,p);q._createStageObjects(a,g.image);q.notifyChange("updating");q.emit("draped-data-change")}).catch(function(a){a&&!t.isAbortError(a)&&v.error(a);q.notifyChange("updating");throw a;});this.notifyChange("updating");return[4,n];case 1:return e.sent(),[2]}})})};b.prototype.notifyGraphicUpdate=function(){};b.prototype._clearImage=function(a){a=this._images[a];
var d=this.view._stage;a&&(a.rendergeometry&&(this.view.basemapTerrain.overlayManager.renderer.removeGeometries([a.rendergeometry],this,2),a.rendergeometry=null),a.texture&&(d.remove(4,a.texture.id),a.texture=null),a.material&&(d.remove(3,a.material.id),a.material=null),a.loadingAbortController&&(a.loadingAbortController.abort(),a.loadingAbortController=null),a.loadingPromise=null,a.image=null,a.pixelData=null)};b.prototype._createStageObjects=function(a,d){var b=this.view._stage,c=this._images[a];
c.texture&&(b.remove(4,c.texture.id),c.texture=null);d?(c.texture=new J(d,"dynamicLayer",{width:d.width,height:d.height,wrap:{s:33071,t:33071}}),b.add(4,c.texture)):c.material&&(b.remove(3,c.material.id),c.material=null);!c.material&&c.texture?(c.material=new K({ambient:[1,1,1],diffuse:[0,0,0],transparent:!0,textureId:c.texture.id,receiveSSAO:!1},"dynamicLayer"),b.add(3,c.material)):c.material&&d&&c.material.setParameterValues({textureId:c.texture.id});d=this.view.basemapTerrain.overlayManager.renderer;
if(c.material){var f=void 0,b=this._overlayExtents[a].renderLocalOrigin;if(0===a)f=u.createGeometryForExtent(c.renderExtent,-1);else if(1===a){a=this._images[0].renderExtent;if(!a)return;f=u.createOuterImageGeometry(a,c.renderExtent,-1)}else{console.error("DynamicLayerView3D._createStageObjects: Invalid extent idx");return}a=new I(f);a.material=c.material;a.origin=b;d.addGeometries([a],this,2);c.rendergeometry&&d.removeGeometries([c.rendergeometry],this,2);c.rendergeometry=a}else c.rendergeometry&&
(d.removeGeometries([c.rendergeometry],this,2),c.rendergeometry=null)};b.prototype._isScaleRangeLayer=function(){return"minScale"in this.layer&&"maxScale"in this.layer};b.prototype._isScaleRangeActive=function(){return this._isScaleRangeLayer()?0<this.layer.minScale||0<this.layer.maxScale:!1};b.prototype._clippedExtent=function(a,b){if("local"!==this.view.viewingMode)return l.set(b,a);var d=this.view.basemapTerrain,c=d.extent;return d.ready&&c?l.intersection(a,c,b):l.set(b,a)};b.prototype._suspendedChangeHandler=
function(){this.suspended?(this.clear(),this.emit("draped-data-change")):this.refresh()};b.prototype._waitFetchReady=function(a){return n(this,void 0,void 0,function(){return r(this,function(b){switch(b.label){case 0:return this.updateWhenStationary?[4,E.whenOnce(this.view,"stationary",a)]:[3,2];case 1:b.sent(),b.label=2;case 2:return[2]}})})};f([k.property()],b.prototype,"layer",void 0);f([k.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],b.prototype,"suspended",void 0);f([k.property({type:Boolean})],
b.prototype,"hasDraped",void 0);f([k.property({readOnly:!0})],b.prototype,"fullExtentInLocalViewSpatialReference",void 0);f([k.property()],b.prototype,"updating",void 0);return b=f([k.subclass("esri.views.3d.layers.DynamicLayerView3D")],b)}(k.declared(M.RefreshableLayerView(F.LayerView3D(L))));var N=l.create();return x});