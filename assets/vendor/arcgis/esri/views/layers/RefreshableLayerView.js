// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/promiseUtils ../../core/accessorSupport/decorators".split(" "),function(l,a,f,e,g,h,k,c){Object.defineProperty(a,"__esModule",{value:!0});a.RefreshableLayerView=function(a){return function(a){function b(){var d=null!==a&&a.apply(this,arguments)||this;d.refreshTimestamp=null;d.refreshDebounced=k.debounce(function(a,
b){return h(d,void 0,void 0,function(){var d;return g(this,function(c){switch(c.label){case 0:return"number"===typeof a?d=a:(d=Date.now(),b=a),this._set("refreshTimestamp",d),this.doRefresh?[4,this.doRefresh(b)]:[3,2];case 1:c.sent(),c.label=2;case 2:return[2]}})})},2E3);return d}f(b,a);b.prototype.refresh=function(a){void 0===a&&(a=Date.now());this._set("refreshTimestamp",a);this.doRefresh&&this.doRefresh()};e([c.property()],b.prototype,"layer",void 0);e([c.aliasOf("layer.refreshInterval")],b.prototype,
"refreshInterval",void 0);e([c.property({readOnly:!0})],b.prototype,"refreshTimestamp",void 0);return b=e([c.subclass("esri.layers.mixins.RefreshableLayerView")],b)}(c.declared(a))};a.isRefreshableLayerView=function(a){return"refresh"in a}});