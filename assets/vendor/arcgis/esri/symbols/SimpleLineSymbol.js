// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/jsonMap ../core/lang ../core/screenUtils ../core/accessorSupport/decorators ./LineSymbol".split(" "),function(r,t,m,d,n,p,k,c,q){var e=new n.default({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSInsideFrame:"inside-frame",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",
esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"});return function(l){function a(b,a,g,c,d,e){b=l.call(this,b)||this;b.type="simple-line";b.style="solid";b.cap="round";b.join="round";b.miterLimit=2;return b}m(a,l);h=a;a.prototype.normalizeCtorArgs=function(b,a,g,c,d,e){if(b&&"string"!==typeof b)return b;var f={};null!=b&&(f.style=b);null!=a&&(f.color=a);null!=g&&(f.width=k.toPt(g));null!=c&&(f.cap=c);null!=d&&(f.join=d);null!=e&&(f.miterLimit=
k.toPt(e));return f};a.prototype.clone=function(){return new h({color:p.clone(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit})};a.prototype.hash=function(){return this.inherited(arguments)+"."+(this.color&&this.color.hash())+"."+this.style+"."+this.cap+"."+this.join+"."+this.miterLimit};var h;d([c.enumeration.serializable()({esriSLS:"simple-line"})],a.prototype,"type",void 0);d([c.property({type:e.apiValues,json:{read:e.read,write:e.write}})],
a.prototype,"style",void 0);d([c.property({type:["butt","round","square"],json:{write:{overridePolicy:function(b,a,c){return{enabled:"round"!==b&&(null==c||null==c.origin)}}}}})],a.prototype,"cap",void 0);d([c.property({type:["miter","round","bevel"],json:{write:{overridePolicy:function(b,a,c){return{enabled:"round"!==b&&(null==c||null==c.origin)}}}}})],a.prototype,"join",void 0);d([c.property({type:Number,json:{read:!1,write:!1}})],a.prototype,"miterLimit",void 0);return a=h=d([c.subclass("esri.symbols.SimpleLineSymbol")],
a)}(c.declared(q))});