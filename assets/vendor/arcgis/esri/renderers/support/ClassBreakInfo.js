// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../symbols ../../core/JSONSupport ../../core/accessorSupport/decorators ../../symbols/support/jsonUtils".split(" "),function(l,m,h,c,f,k,b,d){return function(g){function a(a){a=g.call(this,a)||this;a.description=null;a.label=null;a.minValue=null;a.maxValue=0;a.symbol=null;return a}h(a,g);e=a;a.prototype.clone=function(){return new e({description:this.description,label:this.label,minValue:this.minValue,
maxValue:this.maxValue,symbol:this.symbol?this.symbol.clone():null})};a.prototype.getMeshHash=function(){var a=JSON.stringify(this.symbol);return this.minValue+"."+this.maxValue+"."+a};var e;c([b.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);c([b.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],a.prototype,"minValue",void 0);c([b.property({type:Number,
json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],a.prototype,"maxValue",void 0);c([b.property({types:f.symbolTypesRenderer,json:{origins:{"web-scene":{types:f.symbolTypesRenderer3D,read:d.read,write:d.writeTarget}},read:d.read,write:d.writeTarget}})],a.prototype,"symbol",void 0);return a=e=c([b.subclass("esri.renderers.support.ClassBreakInfo")],a)}(b.declared(k.JSONSupport))});