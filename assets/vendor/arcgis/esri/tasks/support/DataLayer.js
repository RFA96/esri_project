// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../geometry ../../geometry ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(m,n,f,c,g,h,k,l,b){var d=new k.default({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",
esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"});return function(e){function a(a){a=e.call(this,a)||this;a.geometry=null;a.name=null;a.spatialRelationship=null;a.type="layer";a.where=null;return a}f(a,e);c([b.property({types:h.geometryTypes,json:{read:g.fromJSON,write:!0}})],a.prototype,"geometry",void 0);c([b.property({type:String,json:{read:{source:"layerName"},write:{target:"layerName"}}})],a.prototype,"name",void 0);c([b.property({type:String,json:{read:{source:"spatialRel",
reader:d.read},write:{target:"spatialRel",writer:d.write}}})],a.prototype,"spatialRelationship",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"type",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"where",void 0);return a=c([b.subclass("esri.tasks.support.DataLayer")],a)}(b.declared(l.JSONSupport))});