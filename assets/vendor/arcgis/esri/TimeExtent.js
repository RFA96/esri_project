// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./core/JSONSupport ./core/accessorSupport/decorators ./layers/support/timeUtils".split(" "),function(n,p,l,e,m,d,h){return function(k){function b(a){a=k.call(this,a)||this;a.end=null;a.start=null;return a}l(b,k);f=b;b.prototype.readEnd=function(a,c){return null!=c.end?new Date(c.end):null};b.prototype.writeEnd=function(a,c){c.end=a?a.getTime():null};b.prototype.readStart=function(a,c){return null!=c.start?
new Date(c.start):null};b.prototype.writeStart=function(a,c){c.start=a?a.getTime():null};b.prototype.clone=function(){return new f({end:this.end,start:this.start})};b.prototype.intersection=function(a){if(!a)return null;var c=this.start?this.start.getTime():-Infinity,b=this.end?this.end.getTime():Infinity,g=a.start?a.start.getTime():-Infinity;a=a.end?a.end.getTime():Infinity;var d,e;g>=c&&g<=b?d=g:c>=g&&c<=a&&(d=c);b>=g&&b<=a?e=b:a>=c&&a<=b&&(e=a);return isNaN(d)||isNaN(e)?null:(c=new f,c.start=-Infinity===
d?null:new Date(d),c.end=Infinity===e?null:new Date(e),c)};b.prototype.offset=function(a,b){var c=new f,d=this.start,e=this.end;d&&(c.start=h.offsetDate(d,a,b));e&&(c.end=h.offsetDate(e,a,b));return c};b.prototype.equals=function(a){if(!a)return!1;var b=this.start?this.start.getTime():null,d=this.end?this.end.getTime():null,e=a.start?a.start.getTime():null;a=a.end?a.end.getTime():null;return b===e&&d===a};var f;e([d.property({type:Date,json:{write:{allowNull:!0}}})],b.prototype,"end",void 0);e([d.reader("end")],
b.prototype,"readEnd",null);e([d.writer("end")],b.prototype,"writeEnd",null);e([d.property({type:Date,json:{write:{allowNull:!0}}})],b.prototype,"start",void 0);e([d.reader("start")],b.prototype,"readStart",null);e([d.writer("start")],b.prototype,"writeStart",null);return b=f=e([d.subclass("esri.TimeExtent")],b)}(d.declared(m.JSONSupport))});