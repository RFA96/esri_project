// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../Graphic ../support/FeatureSet ../support/IdSet ../support/shared ../../../core/promiseUtils ../../../tasks/support/RelationshipQuery".split(" "),function(z,A,w,x,y,q,p,k,r){return function(v){function b(a){var c=v.call(this,a)||this;c.declaredClass="esri.arcade.featureset.sources.FeatureLayerRelated";c._findObjectId=-1;c._requestStandardised=!1;c._removeGeometry=!1;c._overrideFields=null;c.featureObjectId=null;c.relatedLayer=null;
c.relationship=null;a.spatialReference&&(c.spatialReference=a.spatialReference);c._transparent=!0;c._maxProcessing=1E3;c._layer=a.layer;c._wset=null;c._findObjectId=a.objectId;c.featureObjectId=a.objectId;c.relationship=a.relationship;c.relatedLayer=a.relatedLayer;void 0!==a.outFields&&(c._overrideFields=a.outFields);void 0!==a.includeGeometry&&(c._removeGeometry=!1===a.includeGeometry);return c}w(b,v);b.prototype._maxQueryRate=function(){return p.defaultMaxRecords};b.prototype.end=function(){return this._layer};
b.prototype.optimisePagingFeatureQueries=function(){};b.prototype.load=function(){var a=this;null===this._loadPromise&&(this._loadPromise=k.create(function(c,g){k.all([a._layer.load(),a.relatedLayer.load()]).then(function(){a._initialiseFeatureSet();c(a)},g)}));return this._loadPromise};b.prototype.nativeCapabilities=function(){return this.relatedLayer.nativeCapabilities()};b.prototype._initialiseFeatureSet=function(){null==this.spatialReference&&(this.spatialReference=this._layer.spatialReference);
this.geometryType=this.relatedLayer.geometryType;this.fields=this.relatedLayer.fields.slice(0);if(null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{for(var a=[],c=[],g=0,f=this.fields;g<f.length;g++){var b=f[g];if("oid"===b.type)a.push(b),c.push(b.name);else for(var d=0,e=this._overrideFields;d<e.length;d++)if(e[d].toLowerCase()===b.name.toLowerCase()){a.push(b);c.push(b.name);break}}this.fields=a;this._overrideFields=c}if(a=
this._layer.nativeCapabilities())this._databaseType=a.databaseType,this._requestStandardised=a.requestStandardised;this.objectIdField=this.relatedLayer.objectIdField;this.hasM=this.relatedLayer.supportsM;this.hasZ=this.relatedLayer.supportsZ;this.typeIdField=this.relatedLayer.typeIdField;this.types=this.relatedLayer.types};b.prototype.databaseType=function(){var a=this;return this.relatedLayer.databaseType().then(function(){a._databaseType=a.relatedLayer._databaseType;return a._databaseType})};b.prototype.isTable=
function(){return this.relatedLayer.isTable()};b.prototype._isInFeatureSet=function(){return p.IdState.InFeatureSet};b.prototype._candidateIdTransform=function(a){return a};b.prototype._getSet=function(a){var c=this;return null===this._wset?this._ensureLoaded().then(function(){return c._getFilteredSet("",null,null,null,a)}).then(function(a){return c._wset=a}):k.resolve(this._wset)};b.prototype._changeFeature=function(a){for(var c={},b=0,f=this.fields;b<f.length;b++){var l=f[b];c[l.name]=a.attributes[l.name]}return new x({geometry:!0===
this._removeGeometry?null:a.geometry,attributes:c})};b.prototype._getFilteredSet=function(a,c,b,f,l){var d=this;return this.databaseType().then(function(){if(d.isTable()&&c&&null!==a&&""!==a){var e=new q([],[],!0,null);return e}e=d._layer.nativeCapabilities();if(!1===e.canQueryRelated)return e=new q([],[],!0,null);if(e.capabilities.queryRelated&&e.capabilities.queryRelated.supportsPagination)return d._getFilteredSetUsingPaging(a,c,b,f,l);var g="",n=!1;null!==f&&e.capabilities&&e.capabilities.queryRelated&&
!0===e.capabilities.queryRelated.supportsOrderBy&&(g=f.constructClause(),n=!0);var m=new r;m.objectIds=[d._findObjectId];var t=null!==d._overrideFields?d._overrideFields:d._fieldsIncludingObjectId(d.relatedLayer.fields?d.relatedLayer.fields.map(function(a){return a.name}):["*"]);m.outFields=t;m.relationshipId=d.relationship.id;m.where="1\x3d1";t=!0;!0===d._removeGeometry&&(t=!1);m.returnGeometry=t;d._requestStandardised&&(m.sqlFormat="standard");m.outSpatialReference=d.spatialReference;m.orderByFields=
""!==g?g.split(","):null;return e.source.queryRelatedFeatures(m).then(function(e){d._checkCancelled(l);var g=e[d._findObjectId]?e[d._findObjectId].features:[];e=[];for(var f=0;f<g.length;f++)d._featureCache[g[f].attributes[d._layer.objectIdField]]=g[f],e.push(g[f].attributes[d._layer.objectIdField]);g=c&&null!==a&&""!==a;f=null!==b&&void 0!==b;return new q(g||f?e:[],g||f?[]:e,n,null)})})};b.prototype._fieldsIncludingObjectId=function(a){if(null===a)return[this.objectIdField];a=a.slice(0);if(-1<a.indexOf("*"))return a;
for(var c=!1,b=0;b<a.length;b++)if(a[b].toUpperCase()===this.objectIdField.toUpperCase()){c=!0;break}!1===c&&a.push(this.objectIdField);return a};b.prototype._getFilteredSetUsingPaging=function(a,c,b,f,l){var d=this;try{var e="",g=!1,n=this._layer.nativeCapabilities();null!==f&&n&&n.capabilities.queryRelated&&!0===n.capabilities.queryRelated.supportsOrderBy&&(e=f.constructClause(),g=!0);return this.databaseType().then(function(){var f=d._maxQueryRate(),h=n.capabilities.query.maxRecordCount;void 0!==
h&&h<f&&(f=h);var h=c&&null!==a&&""!==a,k=null!==b&&void 0!==b,u=null,p=!0;!0===d._removeGeometry&&(p=!1);var r=null!==d._overrideFields?d._overrideFields:d._fieldsIncludingObjectId(d.relatedLayer.fields?d.relatedLayer.fields.map(function(a){return a.name}):["*"]),u=new q(h||k?["GETPAGES"]:[],h||k?[]:["GETPAGES"],g,{outFields:r.join(","),resultRecordCount:f,resultOffset:0,objectIds:[d._findObjectId],where:"1\x3d1",orderByFields:e,returnGeometry:p,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,
fullyResolved:!1}});return d._expandPagedSet(u,f,0,0,l).then(function(){return u})})}catch(m){return k.reject(m)}};b.prototype._expandPagedSet=function(a,c,b,f,l){return this._expandPagedSetFeatureSet(a,c,b,f,l)};b.prototype._clonePageDefinition=function(a){return null===a?null:!0!==a.groupbypage?{groupbypage:!1,outFields:a.outFields,resultRecordCount:a.resultRecordCount,resultOffset:a.resultOffset,where:a.where,objectIds:a.objectIds,orderByFields:a.orderByFields,returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,
internal:a.internal}:{groupbypage:!0,outFields:a.outFields,resultRecordCount:a.resultRecordCount,useOIDpagination:a.useOIDpagination,generatedOid:a.generatedOid,groupByFieldsForStatistics:a.groupByFieldsForStatistics,resultOffset:a.resultOffset,outStatistics:a.outStatistics,geometry:a.geometry,where:a.where,objectIds:a.objectIds,orderByFields:a.orderByFields,returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,internal:a.internal}};b.prototype._getPhysicalPage=function(a,c,b){var f=this;
try{var g=a.pagesDefinition.internal.lastRetrieved,d=this._layer.nativeCapabilities(),e=new r;!0===this._requestStandardised&&(e.sqlFormat="standard");e.relationshipId=this.relationship.id;e.objectIds=a.pagesDefinition.objectIds;e.resultOffset=a.pagesDefinition.internal.lastRetrieved;e.resultRecordCount=a.pagesDefinition.resultRecordCount;e.outFields=a.pagesDefinition.outFields.split(",");e.where=a.pagesDefinition.where;e.orderByFields=""!==a.pagesDefinition.orderByFields?a.pagesDefinition.orderByFields.split(","):
null;e.returnGeometry=a.pagesDefinition.returnGeometry;e.outSpatialReference=this.spatialReference;return d.source.queryRelatedFeatures(e).then(function(c){f._checkCancelled(b);if(a.pagesDefinition.internal.lastRetrieved!==g)return 0;for(var e=c[f._findObjectId]?c[f._findObjectId].features:[],d=0;d<e.length;d++)a.pagesDefinition.internal.set[g+d]=e[d].attributes[f._layer.objectIdField];for(d=0;d<e.length;d++)f._featureCache[e[d].attributes[f._layer.objectIdField]]=e[d];c=c[f._findObjectId]?!1===c[f._findObjectId].exceededTransferLimit:
!0;e.length!==a.pagesDefinition.resultRecordCount&&c&&(a.pagesDefinition.internal.fullyResolved=!0);a.pagesDefinition.internal.lastRetrieved=g+e.length;return e.length})}catch(h){return k.reject(h)}};b.prototype._getFeatures=function(a,c,b,f){var g=this,d=[];-1!==c&&void 0===this._featureCache[c]&&d.push(c);var e=this._maxQueryRate();if(!0===this._checkIfNeedToExpandKnownPage(a,e))return this._expandPagedSet(a,e,0,0,f).then(function(){return g._getFeatures(a,c,b,f)});for(var e=0,h=a._lastFetchedIndex;h<
a._known.length;h++){e++;e<=b&&(a._lastFetchedIndex+=1);if("GETPAGES"!==a._known[h]&&void 0===this._featureCache[a._known[h]]&&(a._known[h]!==c&&d.push(a._known[h]),d.length>b))break;if(e>=b&&0===d.length)break}return 0===d.length?k.resolve("success"):k.reject(Error("Unaccounted for Features. Not in Feature Collection"))};b.prototype._refineSetBlock=function(a,c,b){return k.resolve(a)};b.prototype._stat=function(a,c,b,f,l,d,e){return k.resolve({calculated:!1})};b.prototype._canDoAggregates=function(a,
c,b,f,l){return k.resolve(!1)};b.prototype.relationshipMetaData=function(){return this.relatedLayer.relationshipMetaData()};b.prototype.serviceUrl=function(){return this.relatedLayer.serviceUrl()};b.prototype.queryAttachments=function(a,c,b,f){return this.relatedLayer.queryAttachments(a,c,b,f)};b.prototype.getFeatureByObjectId=function(a,b){return this.relatedLayer.getFeatureByObjectId(a,b)};return b}(y)});