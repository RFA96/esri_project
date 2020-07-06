// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/assignHelper dojo/i18n!./BasemapToggle/nls/BasemapToggle ../core/deprecate ../core/Logger ../core/accessorSupport/decorators ./Widget ./BasemapToggle/BasemapToggleViewModel ./support/widget".split(" "),function(u,v,n,d,f,h,p,q,e,r,g,b){function k(b){return(b=g.getThumbnailUrl(b))?{backgroundImage:"url("+b+")"}:{backgroundImage:""}}var t=q.getLogger("esri.widgets.BasemapToggle"),m={title:!1};
return function(l){function c(a){a=l.call(this,a)||this;a.activeBasemap=null;a.label=h.widgetLabel;a.nextBasemap=null;a.view=null;a.viewModel=new g;a.visibleElements=f({},m);return a}n(c,l);Object.defineProperty(c.prototype,"titleVisible",{set:function(a){p.deprecatedProperty(t,"titleVisible",{replacement:"visibleElements.title",version:"4.15"});this.visibleElements=f({},this.visibleElements,{title:a})},enumerable:!0,configurable:!0});c.prototype.castVisibleElements=function(a){return f({},m,a)};
c.prototype.toggle=function(){};c.prototype.render=function(){var a=this.viewModel,c="disabled"===a.state?null:a.activeBasemap,d=(a="disabled"===a.state?null:a.nextBasemap)?a.title:"",e=a&&"loaded"!==a.loadStatus,f;this.visibleElements.title&&d&&(f=b.tsx("div",{class:"esri-basemap-thumbnail__overlay esri-basemap-toggle__image-overlay",key:"esri-basemap-toggle__overlay"},b.tsx("span",{class:"esri-basemap-thumbnail__title esri-basemap-toggle__title",title:d},d)));return b.tsx("div",{class:"esri-basemap-toggle esri-widget",
role:"button","data-basemap-id":a?a.id:"",bind:this,onclick:this._toggle,onkeydown:this._toggle,tabIndex:0,title:h.widgetLabel},b.tsx("div",{class:this.classes("esri-basemap-thumbnail esri-basemap-toggle__container","esri-basemap-toggle__image--secondary")},b.tsx("div",{class:"esri-basemap-thumbnail__image esri-basemap-toggle__image",styles:k(c)})),b.tsx("div",{class:"esri-basemap-thumbnail esri-basemap-toggle__container"},b.tsx("div",{class:this.classes("esri-basemap-thumbnail__image esri-basemap-toggle__image",
e?"esri-basemap-toggle__image--loading":null),styles:k(a)},e?b.tsx("span",{"aria-hidden":"true",role:"presentation",class:"esri-widget__loader-animation"}):null),f))};c.prototype._toggle=function(){this.toggle()};d([e.aliasOf("viewModel.activeBasemap"),b.renderable()],c.prototype,"activeBasemap",void 0);d([e.property()],c.prototype,"label",void 0);d([e.aliasOf("viewModel.nextBasemap"),b.renderable()],c.prototype,"nextBasemap",void 0);d([e.property(),b.renderable()],c.prototype,"titleVisible",null);
d([e.aliasOf("viewModel.view"),b.renderable()],c.prototype,"view",void 0);d([b.vmEvent("toggle"),e.property({type:g}),b.renderable(["viewModel.nextBasemap.loadStatus","viewModel.state"])],c.prototype,"viewModel",void 0);d([e.property(),b.renderable()],c.prototype,"visibleElements",void 0);d([e.cast("visibleElements")],c.prototype,"castVisibleElements",null);d([e.aliasOf("viewModel.toggle")],c.prototype,"toggle",null);d([b.accessibleHandler()],c.prototype,"_toggle",null);return c=d([e.subclass("esri.widgets.BasemapToggle")],
c)}(e.declared(r))});