// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../geometry ../../core/JSONSupport ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType".split(" "),function(d,k,e,c,f,g,b,h){d=function(d){function a(a){a=d.call(this,a)||this;a.contains=!0;a.dynamicLayerInfos=null;a.geometryPrecision=null;a.layerDefinitions=null;a.layerIds=null;a.maxAllowableOffset=null;a.outSpatialReference=null;a.returnGeometry=!1;a.searchFields=null;
a.searchText=null;return a}e(a,d);c([b.property({type:Boolean,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"contains",void 0);c([b.property({type:[Object],json:{read:{source:"dynamicLayers"},write:{target:"dynamicLayers"}}})],a.prototype,"dynamicLayerInfos",void 0);c([b.property({type:Number,json:{write:!0}})],a.prototype,"geometryPrecision",void 0);c([b.property({type:[Object],json:{write:!0}})],a.prototype,"layerDefinitions",void 0);c([b.property({type:[Number],json:{write:!0}})],a.prototype,
"layerIds",void 0);c([b.property({type:Number,json:{write:!0}})],a.prototype,"maxAllowableOffset",void 0);c([b.property({type:f.SpatialReference,json:{read:{source:"outSR"},write:{target:"outSR"}}})],a.prototype,"outSpatialReference",void 0);c([b.property({type:Boolean,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"returnGeometry",void 0);c([b.property({type:[String],json:{write:!0}})],a.prototype,"searchFields",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"searchText",
void 0);return a=c([b.subclass("esri.tasks.support.FindParameters")],a)}(b.declared(g.JSONSupport));d.from=h.default(d);return d});