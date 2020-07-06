// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../Graphic ../../../core/Collection ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ./BuildingComponentSublayerView3D ./BuildingGroupSublayerView3D ./LayerView3D ./i3s/BuildingFilterUtil ./i3s/I3SUtil ./support/layerViewUpdatingProperties ../../layers/LayerView".split(" "),
function(E,F,G,q,d,r,t,m,h,u,k,n,v,p,e,w,x,y,z,A,B,C){var D=u.getLogger("esri.views.3d.layers.BuildingSceneLayerView3D");return function(l){function b(){var a=null!==l&&l.apply(this,arguments)||this;a.componentLayerViews=new h;a.groupLayerViews=new h;a._abortController=n.createAbortController();a._loadingComponents=0;return a}q(b,l);Object.defineProperty(b.prototype,"filterExpression",{get:function(){var a=this.layer.activeFilterId,c=null!=a?this.layer.filters.find(function(c){return c.id===a}):null;
return(c=null!=c?c.filterBlocks.find(function(a){return"solid"===a.filterMode.type}):null)?c.filterExpression:null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"filterExpressions",{get:function(){var a=this.layer.activeFilterId,c=null!=a?this.layer.filters.find(function(c){return c.id===a}):null;return c&&c.filterBlocks?c.filterBlocks.toArray().map(function(a){return[a.filterExpression,z.parseFilterMode(a)]}):[]},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"updatingProgressValue",{get:function(){var a=this.componentLayerViews,c=this._loadingComponents+(a?a.length:0);return a.reduce(function(a,c){return a+c.updatingProgress},0)/c},enumerable:!0,configurable:!0});b.prototype.isUpdating=function(){return 0<this._loadingComponents||this.componentLayerViews&&this.componentLayerViews.some(function(a){return a.updating})};b.prototype.initialize=function(){A.checkSpatialReference(this.layer.spatialReference,this.view.spatialReference,this.view.viewingMode);
this.initializeSubLayerViews(this.layer.sublayers,this)};b.prototype.destroy=function(){this.groupLayerViews&&(this.groupLayerViews.forEach(function(a){return a.destroy()}),this.groupLayerViews=null);this.componentLayerViews&&(this.componentLayerViews.forEach(function(a){return a.destroy()}),this.componentLayerViews=null);this._abortController.abort();this._abortController=null};b.prototype.initializeSubLayerViews=function(a,c){var b=this,e=this,d=this.view;a.forEach(function(a){if("building-group"===
a.type){var f=new x({layer:a,view:d,parent:c});b.groupLayerViews.push(f);b.initializeSubLayerViews(a.sublayers,f)}else"mesh"===a.geometryType&&(b._loadingComponents++,a.load({signal:b._abortController.signal}).then(function(){var f=new w({layer:a,layerView:e,view:d,parent:c});b.componentLayerViews.push(f);b.handles.add([p.init(f,"updating",function(){return b.notifyChange("updating")},!0),p.init(f,"updatingProgress",function(){return b.notifyChange("updatingProgressValue")},!0)])}).catch(function(c){v.isAbortError(c)||
D.error("Error while creating view for sublayer "+a.id+"\nLayer: "+b.layer.url+"\n",c)}).then(function(){b._loadingComponents--;b.notifyChange("updating");b.notifyChange("updatingProgressValue")}))})};b.prototype.getGraphicFromIntersectorMetadata=function(a){for(var c=0,b=this.componentLayerViews.items;c<b.length;c++){var d=b[c];if(d.layer.uid===a.sublayerUid)return d.getGraphicFromIntersectorMetadata(a)}return null};b.prototype.fetchPopupFeatures=function(a,c){return t(this,void 0,void 0,function(){var b;
return r(this,function(d){if(!k.isSome(c)||!c.clientGraphics||0===c.clientGraphics.length)return[2,void 0];b=this._findComponent(c.clientGraphics[0].sourceLayer);return k.isNone(b)?[2,void 0]:[2,b.fetchPopupFeatures(a,c)]})})};b.prototype.whenGraphicBounds=function(a){var c=this._findComponent(a.sourceLayer);return k.isNone(c)?n.reject():c.whenGraphicBounds(a)};b.prototype._findComponent=function(a){return this.componentLayerViews.find(function(c){return a===c.layer})};b.prototype.highlight=function(a){a instanceof
m?a=[a]:a instanceof h&&(a=a.toArray());var c=[];if(Array.isArray(a)&&0<a.length&&a[0]instanceof m){for(var b=new Map,d=0;d<a.length;d++){var e=a[d],g=b.get(e.sourceLayer);null==g&&(g=[],b.set(e.sourceLayer,g));g.push(e)}this.componentLayerViews.forEach(function(a){var d=b.get(a.layer);d&&c.push(a.highlight(d))})}return{remove:function(){return c.forEach(function(a){return a.remove()})},pause:function(){return c.forEach(function(a){return a.pause()})},resume:function(){return c.forEach(function(a){return a.resume()})}}};
b.prototype.getUsedMemory=function(){return this.componentLayerViews.reduce(function(a,b){return a+b.getUsedMemory()},0)};b.prototype.getUnloadedMemory=function(){return this.componentLayerViews.reduce(function(a,b){return a+b.getUnloadedMemory()},0)};b.prototype.ignoresMemoryFactor=function(){return!1};d([e.property()],b.prototype,"layer",void 0);d([e.property()],b.prototype,"componentLayerViews",void 0);d([e.property()],b.prototype,"groupLayerViews",void 0);d([e.property({readOnly:!0,dependsOn:["layer.filters",
"layer.activeFilterId"]})],b.prototype,"filterExpression",null);d([e.property({readOnly:!0,dependsOn:["layer.filters","layer.activeFilterId"]})],b.prototype,"filterExpressions",null);d([e.property(B.updatingProgress)],b.prototype,"updatingProgress",void 0);d([e.property({readOnly:!0})],b.prototype,"updatingProgressValue",null);return b=d([e.subclass("esri.views.3d.layers.BuildingSceneLayerView3D")],b)}(e.declared(y.LayerView3D(C)))});