// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!../nls/common dojo/i18n!./Locate/nls/Locate ../core/accessorSupport/decorators ./Widget ./Locate/LocateViewModel ./support/widget".split(" "),function(n,p,k,b,l,g,d,m,f,e){return function(h){function a(c){c=h.call(this,c)||this;c.geolocationOptions=null;c.goToLocationEnabled=null;c.goToOverride=null;c.graphic=null;c.iconClass="esri-icon-north-navigation";c.label=g.widgetLabel;c.scale=null;c.useHeadingEnabled=
null;c.view=null;c.viewModel=new f;return c}k(a,h);a.prototype.cancelLocate=function(){};a.prototype.locate=function(){};a.prototype.render=function(){var c,a,b=this.get("viewModel.state"),d="locating"===b,f=(c={},c["esri-disabled"]="disabled"===b,c["esri-hidden"]="feature-unsupported"===b,c);c=(a={},a["esri-icon-loading-indicator"]=d,a["esri-rotating"]=d,a["esri-icon-locate"]=!d,a);a="locating"===b?l.cancel:g.title;return e.tsx("div",{bind:this,class:this.classes("esri-locate esri-widget--button esri-widget",
f),hidden:"feature-unsupported"===b,onclick:this._locate,onkeydown:this._locate,role:"button",tabIndex:0,"aria-label":a,title:a},e.tsx("span",{"aria-hidden":"true",class:this.classes("esri-icon",c)}),e.tsx("span",{class:"esri-icon-font-fallback-text"},g.title))};a.prototype._locate=function(){var a=this.viewModel;"locating"===a.state?a.cancelLocate():a.locate()};b([d.aliasOf("viewModel.geolocationOptions")],a.prototype,"geolocationOptions",void 0);b([d.aliasOf("viewModel.goToLocationEnabled")],a.prototype,
"goToLocationEnabled",void 0);b([d.aliasOf("viewModel.goToOverride")],a.prototype,"goToOverride",void 0);b([d.aliasOf("viewModel.graphic")],a.prototype,"graphic",void 0);b([d.property()],a.prototype,"iconClass",void 0);b([d.property()],a.prototype,"label",void 0);b([d.aliasOf("viewModel.scale")],a.prototype,"scale",void 0);b([d.aliasOf("viewModel.useHeadingEnabled")],a.prototype,"useHeadingEnabled",void 0);b([d.aliasOf("viewModel.view")],a.prototype,"view",void 0);b([d.property({type:f}),e.renderable("viewModel.state"),
e.vmEvent(["locate","locate-error"])],a.prototype,"viewModel",void 0);b([d.aliasOf("viewModel.cancelLocate")],a.prototype,"cancelLocate",null);b([d.aliasOf("viewModel.locate")],a.prototype,"locate",null);b([e.accessibleHandler()],a.prototype,"_locate",null);return a=b([d.subclass("esri.widgets.Locate")],a)}(d.declared(m))});