// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Logger ../../core/accessorSupport/decorators ../support/arcgisLayerUrl".split(" "),function(h,a,f,d,g,c,e){Object.defineProperty(a,"__esModule",{value:!0});a.ArcGISService=function(a){return function(a){function b(){return null!==a&&a.apply(this,arguments)||this}f(b,a);Object.defineProperty(b.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");
if(this.url){var a=e.parse(this.url);if(a&&a.title)return a.title}return this._get("title")||""},set:function(a){this._set("title",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"url",{set:function(a){this._set("url",e.sanitizeUrl(a,g.getLogger(this.declaredClass)))},enumerable:!0,configurable:!0});d([c.property({dependsOn:["url"]})],b.prototype,"title",null);d([c.property({type:String})],b.prototype,"url",null);return b=d([c.subclass("esri.layers.mixins.ArcGISService")],b)}(c.declared(a))}});