// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ../../geometry/support/jsonUtils".split(" "),function(b,l,f,e,g,d,h,k){b=function(b){function c(a){a=b.call(this,a)||this;a.deviationUnit=null;a.geometries=null;a.maxDeviation=null;return a}f(c,b);e([d.property({type:String,json:{write:!0}})],c.prototype,"deviationUnit",void 0);e([d.property({json:{read:{reader:function(a){return a?
a.map(function(a){return k.fromJSON(a)}):null}},write:{writer:function(a,b){b.geometries=a.map(function(a){return a.toJSON()})}}}})],c.prototype,"geometries",void 0);e([d.property({type:Number,json:{write:!0}})],c.prototype,"maxDeviation",void 0);return c=e([d.subclass("esri.tasks.support.GeneralizeParameters")],c)}(d.declared(g.JSONSupport));b.from=h.default(b);return b});