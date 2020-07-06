// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators ../../../../layers/support/fieldUtils ./SceneLayerAdapter".split(" "),function(l,m,e,f,g,c,h,k){return function(d){function b(a){return d.call(this,a)||this}e(b,d);b.prototype.getField=function(a){void 0===a&&(a="");return h.getField(this.layer.fields,a)};b.prototype.getFieldUsageInfo=function(a){a=this.getField(a);
if(!a)return null;a=this._hasCachedStatistics(a.name);return{supportsLabelingInfo:a,supportsPopupTemplate:a,supportsRenderer:a,supportsLayerQuery:!1,supportsStatistics:a}};b.prototype.getFieldDomain=function(){return null};b.prototype.load=function(a){var b=this;a=this.layer.load(a).then(function(){b.geometryType="point";b.objectIdField=null;b.supportsSQLExpression=!1;b.hasQueryEngine=!1});this.addResolvingPromise(a);return g.resolve(this)};return b=f([c.subclass("esri.renderers.smartMapping.support.adapters.PointCloudLayerAdapter")],
b)}(c.declared(k))});