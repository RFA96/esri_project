// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ./AuthoringInfoClassBreakInfo".split(" "),function(c,b,f,e,g,h,d,k){Object.defineProperty(b,"__esModule",{value:!0});c=function(c){function a(a){a=c.call(this,a)||this;a.field="";a.normalizationField="";a.classBreakInfos=[];return a}f(a,c);b=a;a.prototype.clone=function(){return new b({field:this.field,normalizationField:this.normalizationField,
classBreakInfos:h.clone(this.classBreakInfos)})};var b;e([d.property({type:String,json:{write:!0}})],a.prototype,"field",void 0);e([d.property({type:String,json:{write:!0}})],a.prototype,"normalizationField",void 0);e([d.property({type:[k.default],json:{write:!0}})],a.prototype,"classBreakInfos",void 0);return a=b=e([d.subclass("esri.renderers.support.AuthoringInfoFieldInfo")],a)}(d.declared(g.JSONSupport));b.AuthoringInfoFieldInfo=c;b.default=c});