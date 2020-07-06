// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Accessor ../core/Handles ../core/accessorSupport/decorators ./layers/RefreshableLayerView".split(" "),function(p,q,k,f,l,m,d,g){return function(h){function b(){var a=null!==h&&h.apply(this,arguments)||this;a._handles=new m;a._currentTick=0;return a}k(b,h);b.prototype.initialize=function(){var a=this;this._handles.add([this.view.allLayerViews.on("after-changes",function(){a.notifyChange("tickInterval");
a._handles.remove("layerViewsUpdating");a._handles.add(a._getLayerViewHandles(),"layerViewsUpdating")}),this.watch("tickInterval",function(){return a._restartTicking()}),this.watch("view.ready",function(){return a._restartTicking()})]);this._restartTicking()};b.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null,this._intervalID&&clearInterval(this._intervalID),this._currentTick=0)};Object.defineProperty(b.prototype,"tickInterval",{get:function(){var a=this.view.allLayerViews.filter(function(a){return g.isRefreshableLayerView(a)});
return this._getCommonInterval(a)},enumerable:!0,configurable:!0});b.prototype._restartTicking=function(){var a=this;this._currentTick=0;this._intervalID&&clearInterval(this._intervalID);this.get("view.ready")&&this.tickInterval&&(this._intervalID=setInterval(function(){var b=Date.now();a._currentTick+=a.tickInterval;a.view.allLayerViews.forEach(function(e){if(g.isRefreshableLayerView(e)){var c=Math.round(6E4*e.refreshInterval),n=0===a._currentTick%c,d=6E3>b-e.refreshTimestamp;c&&n&&!d&&e.refresh(b)}})},
this.tickInterval))};b.prototype._getLayerViewHandles=function(){var a=this,b=[],e=function(){return a.notifyChange("tickInterval")};this.view.allLayerViews.forEach(function(a){g.isRefreshableLayerView(a)&&a.layer&&b.push(a.watch("refreshInterval",e),a.layer.on("refresh",function(){a.refresh(Date.now())}))});return b};b.prototype._getCommonInterval=function(a){var b=function(a,c){return isNaN(a)||isNaN(c)?0:0>=c?a:b(c,a%c)};return a.toArray().reduce(function(a,c){return b(Math.round(6E4*c.refreshInterval),
a)},0)};f([d.property()],b.prototype,"view",void 0);f([d.property({readOnly:!0})],b.prototype,"tickInterval",null);return b=f([d.subclass("esri.views.RefreshManager")],b)}(d.declared(l))});