// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../geometry ../../core/jsonMap ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators".split(" "),function(c,f,h,d,k,l,m,n,b){Object.defineProperty(f,"__esModule",{value:!0});var g=new l.default({upperLeft:"upper-left",lowerLeft:"lower-left"});c=function(c){function a(a){a=c.call(this,a)||this;a.extent=null;a.mode="view";a.originPosition="upper-left";a.tolerance=1;return a}
h(a,c);e=a;a.prototype.clone=function(){return new e(n.clone({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))};var e;d([b.property({type:k.Extent,json:{write:!0}})],a.prototype,"extent",void 0);d([b.property({type:["view","edit"],json:{write:!0}})],a.prototype,"mode",void 0);d([b.property({type:String,json:{read:g.read,write:g.write}})],a.prototype,"originPosition",void 0);d([b.property({type:Number,json:{write:!0}})],a.prototype,"tolerance",void 0);
return a=e=d([b.subclass("esri.tasks.support.QuantizationParameters")],a)}(b.declared(m.JSONSupport));f.default=c});