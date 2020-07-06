// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Collection ../../core/Handles ../../core/Loadable ../../core/Loadable ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../../support/basemapUtils ./support/basemapCompatibilityUtils ./support/BasemapGalleryItem ./support/LocalBasemapsSource ./support/PortalBasemapsSource".split(" "),function(w,x,p,d,f,q,r,t,g,h,c,u,k,l,v,e){var m=f.ofType(l);return function(n){function b(a){a=
n.call(this,a)||this;a._handles=new q;a.activeBasemap=null;a.items=new m;a.source=new e;a.view=null;return a}p(b,n);b.prototype.initialize=function(){var a=this;this._handles.add([h.init(this,["compatibilityFunction","state"],function(){return a._updateItems()}),h.on(this,"source.basemaps","change",function(){return a._updateItems()})])};b.prototype.destroy=function(){this._handles.destroy();this._handles=null};Object.defineProperty(b.prototype,"compatibilityFunction",{get:function(){return void 0===
this._get("compatibilityFunction")?"3d"===this.get("view.type")?k.default3DCompatibility:k.default2DCompatibility:this._get("compatibilityFunction")},set:function(a){this._set("compatibilityFunction",a)},enumerable:!0,configurable:!0});b.prototype.castSource=function(a){return Array.isArray(a)||f.isCollection(a)?new v({basemaps:a}):a&&"esri.portal.Portal"===a.declaredClass?new e({portal:a}):!a||a instanceof e||!a.portal&&!a.query?a&&"basemaps"in a&&"state"in a&&"refresh"in a?a:null:new e(a)};Object.defineProperty(b.prototype,
"state",{get:function(){return this.get("view.ready")&&this.source?"ready":"disabled"},enumerable:!0,configurable:!0});b.prototype.basemapEquals=function(a,b){return u.contentEquals(a,b)};b.prototype.refresh=function(){this._updateItems()};b.prototype.load=function(a){this.addResolvingPromise(r.isLoadable(this.source)?this.source.load(a):g.resolve());return g.resolve(this)};b.prototype._updateItems=function(){var a=this.get("source.basemaps"),b=this.view,c=this.compatibilityFunction;this.items.removeAll().forEach(function(a){return a.destroy()});
this.items.addMany(a.map(function(a){return new l({basemap:a,compatibilityFunction:c,view:b})}))};d([c.property({aliasOf:"view.map.basemap"})],b.prototype,"activeBasemap",void 0);d([c.property({dependsOn:["view.type"]})],b.prototype,"compatibilityFunction",null);d([c.property({readOnly:!0,type:m})],b.prototype,"items",void 0);d([c.property()],b.prototype,"source",void 0);d([c.cast("source")],b.prototype,"castSource",null);d([c.property({readOnly:!0,dependsOn:["view.ready"]})],b.prototype,"state",
null);d([c.property()],b.prototype,"view",void 0);return b=d([c.subclass("esri.widgets.BasemapGallery.BasemapGalleryViewModel")],b)}(c.declared(t))});