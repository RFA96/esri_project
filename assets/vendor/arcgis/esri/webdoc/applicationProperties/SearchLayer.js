// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ./SearchLayerField".split(" "),function(m,n,f,c,g,h,b,k,l){return function(e){function a(a){a=e.call(this,a)||this;a.field=null;a.id=null;a.subLayer=null;return a}f(a,e);d=a;a.prototype.clone=function(){return new d(h.clone({field:this.field,id:this.id,subLayer:this.subLayer}))};var d;
c([b.property({type:l,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"field",void 0);c([b.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"id",void 0);c([b.property({type:k.Integer,json:{write:!0}})],a.prototype,"subLayer",void 0);return a=d=c([b.subclass("esri.webdoc.applicationProperties.SearchLayer")],a)}(b.declared(g.JSONSupport))});