// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../request ../../../core/Accessor ../../../core/Error ../../../core/Logger ../../../core/promiseUtils ../../../core/accessorSupport/decorators ../../../tasks/QueryTask ../../../tasks/support/Query ../../../tasks/support/StatisticDefinition ./featureUtils".split(" "),function(B,C,v,m,w,x,n,y,g,k,z,p,A,q){var r=new Map,t=y.getLogger("esri.widgets.Popup.support.RelatedFeatures");return function(u){function b(a){a=
u.call(this,a)||this;a.relatedInfoCount=null;a.relatedInfos=new Map;return a}v(b,u);b.prototype.destroy=function(){this.relatedInfos.clear()};b.prototype.addRelatedFeatureAttributes=function(a){var c=this;this.relatedInfos.forEach(function(d){return c._addRelatedFeatureAttribute(a,d)})};b.prototype.getRelatedFieldInfo=function(a){if(-1===a.indexOf("relationships/"))return null;a=a.split("/").slice(1);return{layerId:a[0],fieldName:a[1]}};b.prototype.getRelatedInfo=function(a){return this.relatedInfos.get(a.toString())};
b.prototype.isRelatedField=function(a){void 0===a&&(a="");return a?-1!==a.indexOf("relationships/"):!1};b.prototype.queryRelatedInfos=function(a,c,d){var e=this;this.relatedInfos.clear();var b=q.getSourceLayer(a);if(!b)return g.resolve();var f=c.filter(function(a){return a&&e.isRelatedField(a.fieldName)});if(!f||!f.length)return g.resolve();this._createRelatedInfos(c,b);return this._queryLayerInfos(b,d).then(function(c){e._updateRelatedInfoLayerInfos(c);return e._queryRelatedFeatureMap(a,d).then(function(a){Object.keys(a).forEach(function(c){e._setRelatedFeatures(a[c],
c.toString())});return a})})};b.prototype._addRelatedFeatureAttribute=function(a,c){var d=this;a&&c&&(c.relatedFeatures&&c.relatedFeatures&&c.relatedFeatures.forEach(function(e){return d._addAttributesFromFeature(a,e,c)}),c.relatedStatsFeatures&&c.relatedStatsFeatures&&c.relatedStatsFeatures.forEach(function(e){return d._addAttributesFromFeature(a,e,c)}))};b.prototype._updateRelatedInfoLayerInfo=function(a,c){if(a=a.value)this.getRelatedInfo(c).layerInfo=a.data};b.prototype._updateRelatedInfoLayerInfos=
function(a){var c=this;Object.keys(a).forEach(function(d){return c._updateRelatedInfoLayerInfo(a[d],d.toString())})};b.prototype._addAttributesFromFeature=function(a,c,d){var e=this;a&&c&&d&&Object.keys(c.attributes).forEach(function(b){var l=e._relatedFieldInfoToString({layerId:d.relation.id.toString(),fieldName:b});a[l]=c.attributes[b]})};b.prototype._relatedFieldInfoToString=function(a){return a?"relationships/"+a.layerId+"/"+a.fieldName:""};b.prototype._createRelatedInfoForFieldInfo=function(a,
c){var d=this.getRelatedFieldInfo(a.fieldName);if(d){var e=d.layerId,d=d.fieldName;e&&(c=this.getRelatedInfo(e)||this._createRelatedInfo(e,c))&&(c.relatedFields.push(d),a.statisticType&&(a=new A({statisticType:a.statisticType,onStatisticField:d,outStatisticFieldName:d}),c.outStatistics.push(a)))}};b.prototype._createRelatedInfos=function(a,c){var d=this;a.forEach(function(a){return d._createRelatedInfoForFieldInfo(a,c)})};b.prototype._queryRelatedFeatureMap=function(a,c){var d=this,e={};this.relatedInfos.forEach(function(b,
f){b.layerInfo&&(e[f]=d._queryRelatedLayerFeatures(a,b,c))});return g.eachAlways(e)};b.prototype._queryLayerInfos=function(a,c){var d=this,e={};this.relatedInfos.forEach(function(b,f){b=b.relation;if(!b)throw f=new n("relation-required","A relation is required on a layer to retrieve related records."),t.error(f),f;b=b.relatedTableId;if(!b)throw f=new n("A related table ID is required on a layer to retrieve related records."),t.error(f),f;b=a.url+"/"+b;var h=r.get(b),g=h?h:d._queryLayerInfo(b,c);h||
r.set(b,g);e[f]=g});return g.eachAlways(e)};b.prototype._queryLayerInfo=function(a,c){return w(a,{query:{f:"json"},signal:c&&c.signal})};b.prototype._queryRelatedLayerFeatures=function(a,c,d){var b=q.getSourceLayer(a).layerId.toString(),l=c.layerInfo,f=c.queryTask,h=c.relation;if(b=this._getDestinationRelation(l,b)){var h=h.keyField,k=b.keyField,b="string"===this._getDestinationFieldType(l,b)?k+"\x3d'"+a.attributes[h]+"'":k+"\x3d"+a.attributes[h];a=f.execute(new p({where:b,outFields:c.relatedFields}),
d);c=c.outStatistics&&0<c.outStatistics.length&&l.supportsStatistics?f.execute(new p({where:b,outFields:c.relatedFields,outStatistics:c.outStatistics}),d):null;return g.eachAlways({features:a,statsFeatures:c?c:g.resolve()})}return g.resolve()};b.prototype._setRelatedFeatures=function(a,c){if(c=this.getRelatedInfo(c)){var b=a.value;b&&(a=b.features,b=b.statsFeatures,a=a&&a.value,c.relatedFeatures=a?a.features:[],a=b&&b.value,c.relatedStatsFeatures=a?a.features:[])}};b.prototype._getRelation=function(a,
c){if(!c.relationships)return null;var b=null;c.relationships.some(function(c){return c.id===parseInt(a,10)?(b=c,!0):!1});return b};b.prototype._createRelatedInfo=function(a,c){var b=this._getRelation(a,c);if(b){var e=c.url+"/"+b.relatedTableId;c=new z({url:e,sourceSpatialReference:c.spatialReference});b={url:e,queryTask:c,relation:b,relatedFields:[],outStatistics:[]};this.relatedInfos.set(a,b);return b}};b.prototype._getDestinationRelation=function(a,b){var c;a&&a.relationships&&a.relationships.some(function(a){return""+
a.relatedTableId===b?(c=a,!0):!1});return c};b.prototype._getDestinationFieldType=function(a,b){var c=void 0;a.fields.some(function(a){return a.name===b.keyField?(c=-1!==["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"].indexOf(a.type)?"number":"string",!0):!1});return c};m([k.aliasOf("relatedInfos.size")],b.prototype,"relatedInfoCount",void 0);m([k.property()],b.prototype,"relatedInfos",void 0);return b=m([k.subclass("esri.widgets.Popup.support.RelatedFeatures")],
b)}(k.declared(x))});