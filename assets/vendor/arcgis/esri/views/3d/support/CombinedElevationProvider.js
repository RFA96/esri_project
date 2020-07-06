// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/generatorHelper ../../../core/Accessor ../../../core/Evented ../../../core/promiseUtils ../../../core/accessorSupport/decorators ../layers/graphics/ElevationQuery".split(" "),function(l,p,r,n,w,x,t,u,q,m,v){Object.defineProperty(p,"__esModule",{value:!0});l=function(l){function b(a){a=l.call(this,a)||this;a.providers={im:[],ground:[],
scene:[]};a.handles=new Map;return a}r(b,l);b.prototype.getElevation=function(a,d,f,g,c){var e;e=this._updateElevation(null,this.providers.im,a,d,f,g,c);null==e&&(e=this._updateElevation(e,this.providers.ground,a,d,f,g,c));"scene"===c&&(e=this._updateElevation(e,this.providers.scene,a,d,f,g,c));return e};b.prototype._updateElevation=function(a,d,f,g,c,e,b){for(var h=0;h<d.length;h++){var k=d[h].getElevation(f,g,c,e,b);null!=k&&(a=null!=a?Math.max(k,a):k)}return a};b.prototype.queryElevation=function(a,
d,f,g,c,e,b){var h=this;void 0===c&&(c=null);void 0===e&&(e=0);this._elevationService||(this._elevationService=new v.ElevationQuery(this.view.spatialReference,function(){return h.view.map&&h.view.map.ground},{maximumAutoTileRequests:4}));var k=q.createResolver();this._elevationService.queryElevation(a,d,c,e).then(function(c){"scene"===b&&(c=h._updateElevation(c,h.providers.scene,a,d,f,g,b));k.resolve(c)}).catch(function(c){q.isAbortError(c)?k.reject(c):k.resolve(h.getElevation(a,d,f,g,b))});return k.promise};
b.prototype.register=function(a,d){var b=this;this.handles.set(d,d.on("elevation-change",function(a){return b.emit("elevation-change",a)}));this.providers[a].push(d)};b.prototype.unregister=function(a){this.handles.has(a)&&(this.handles.get(a).remove(),this.handles.delete(a));for(var b=0,f=Object.keys(this.providers);b<f.length;b++){var g=f[b],c=this.providers[g].indexOf(a);-1<c&&this.providers[g].splice(c,1)}};n([m.property({constructOnly:!0})],b.prototype,"view",void 0);n([m.property({readOnly:!0,
aliasOf:"view.basemapTerrain.spatialReference"})],b.prototype,"spatialReference",void 0);return b=n([m.subclass("esri.views.3d.support.CombinedElevationProvider")],b)}(m.declared(u.EventedMixin(t)));p.CombinedElevationProvider=l});