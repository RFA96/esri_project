// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators ./widgets/Range ./widgets/TimeSlider".split(" "),function(m,n,f,c,g,h,b,k,l){return function(e){function a(a){a=e.call(this,a)||this;a.range=null;a.timeSlider=null;return a}f(a,e);d=a;a.prototype.clone=function(){return new d(h.clone({range:this.range,timeSlider:this.timeSlider}))};var d;c([b.property({type:k,json:{write:!0}})],a.prototype,
"range",void 0);c([b.property({type:l,json:{write:!0}})],a.prototype,"timeSlider",void 0);return a=d=c([b.subclass("esri.webdoc.Widgets")],a)}(b.declared(g.JSONSupport))});