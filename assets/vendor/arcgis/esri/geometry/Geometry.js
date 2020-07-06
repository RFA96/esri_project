// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/accessorSupport/decorators ./SpatialReference".split(" "),function(k,l,g,d,h,c,e){return function(f){function b(a){a=f.call(this,a)||this;a.type=null;a.extent=null;a.hasM=!1;a.hasZ=!1;a.spatialReference=e.WGS84;return a}g(b,f);Object.defineProperty(b.prototype,"cache",{get:function(){return{}},enumerable:!0,configurable:!0});b.prototype.readSpatialReference=function(a,b){if(a instanceof
e)return a;if(null!=a){var c=new e;c.read(a,b);return c}return a};b.prototype.clone=function(){console.warn(".clone() is not implemented for "+this.declaredClass);return null};b.prototype.clearCache=function(){this.notifyChange("cache")};b.prototype.getCacheValue=function(a){return this.cache[a]};b.prototype.setCacheValue=function(a,b){this.cache[a]=b};d([c.property()],b.prototype,"type",void 0);d([c.property({readOnly:!0,dependsOn:["spatialReference"]})],b.prototype,"cache",null);d([c.property({readOnly:!0,
dependsOn:["spatialReference"]})],b.prototype,"extent",void 0);d([c.property({type:Boolean,json:{write:{overridePolicy:function(a){return{enabled:a}}}}})],b.prototype,"hasM",void 0);d([c.property({type:Boolean,json:{write:{overridePolicy:function(a){return{enabled:a}}}}})],b.prototype,"hasZ",void 0);d([c.property({type:e,json:{write:!0}})],b.prototype,"spatialReference",void 0);d([c.reader("spatialReference")],b.prototype,"readSpatialReference",null);return b=d([c.subclass("esri.geometry.Geometry")],
b)}(c.declared(h.JSONSupport))});