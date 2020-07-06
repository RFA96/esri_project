// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/accessorSupport/decorators".split(" "),function(g,h,e,c,f,b){return function(d){function a(){return null!==d&&d.apply(this,arguments)||this}e(a,d);Object.defineProperty(a.prototype,"canZoomIn",{get:function(){if(!this.get("view.ready"))return!1;var a=this.get("view.animation.target.scale")||this.get("view.scale"),b=this.get("view.constraints.effectiveMaxScale");return 0===
b||a>b},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"canZoomOut",{get:function(){if(!this.get("view.ready"))return!1;var a=this.get("view.animation.target.scale")||this.get("view.scale"),b=this.get("view.constraints.effectiveMinScale");return 0===b||a<b},enumerable:!0,configurable:!0});c([b.property({dependsOn:["view.ready","view.scale","view.animation.target.scale","view.constraints.effectiveMaxScale"],readOnly:!0})],a.prototype,"canZoomIn",null);c([b.property({dependsOn:["view.ready",
"view.scale","view.animation.target.scale","view.constraints.effectiveMinScale"],readOnly:!0})],a.prototype,"canZoomOut",null);c([b.property()],a.prototype,"view",void 0);return a=c([b.subclass("esri.widgets.Zoom.ZoomConditions2D")],a)}(b.declared(f))});