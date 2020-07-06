// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../Graphic ../../languageUtils ./Adapted ./AttributeFilter ./OrderBy ../support/FeatureSet ../support/IdSet ../support/OrderbyClause ../support/shared ../support/sqlUtils ../support/sqlUtils ../support/stats ../support/StatsField ../../../core/MD5 ../../../core/promiseUtils ../../../core/sql/WhereClause ../../../geometry/SpatialReference ../../../layers/support/Field ../../../layers/support/FieldsIndex".split(" "),function(K,L,C,
w,D,r,E,F,x,q,G,m,t,k,n,y,z,h,p,H,u,I){function J(h){if(!h)return"COUNT";switch(h.toLowerCase()){case "max":return"MAX";case "var":case "variance":return"VAR";case "avg":case "average":case "mean":return"AVG";case "min":return"MIN";case "sum":return"SUM";case "stdev":case "stddev":return"STDDEV"}return"COUNT"}var B=function(A){function g(c){var a=A.call(this,c)||this;a._decodedStatsfield=[];a._decodedGroupbyfield=[];a._candosimplegroupby=!0;a.phsyicalgroupbyfields=[];a.objectIdField="ROW__ID";a._internalObjectIdField=
"ROW__ID";a._adaptedFields=[];a.declaredClass="esri.arcade.featureset.actions.Aggregate";a._uniqueIds=1;a._maxQuery=10;a._maxProcessing=10;a._parent=c.parentfeatureset;a._config=c;return a}C(g,A);g.prototype.isTable=function(){return!0};g.prototype._getSet=function(c){var a=this;return null===this._wset?this._getFilteredSet("",null,null,null,c).then(function(c){a._wset=c;return a._wset}):h.resolve(this._wset)};g.prototype._isInFeatureSet=function(){return m.IdState.InFeatureSet};g.prototype.nextUniqueName=
function(c){for(;1===c["T"+this._uniqueIds.toString()];)this._uniqueIds++;var a="T"+this._uniqueIds.toString();c[a]=1;return a};g.prototype.convertToEsriFieldType=function(c){return c};g.prototype._initialiseFeatureSet=function(){var c={},a=!1,e=1,b=this._parent?this._parent.getFieldsIndex():new I([]);for(this.objectIdField="ROW__ID";!1===a;){for(var f=!1,d=0;d<this._config.groupbyfields.length;d++)if(this._config.groupbyfields[d].name.toLowerCase()===this.objectIdField.toLowerCase()){f=!0;break}if(!1===
f)for(d=0;d<this._config.statsfields.length;d++)if(this._config.statsfields[d].name.toLowerCase()===this.objectIdField.toLowerCase()){f=!0;break}!1===f?a=!0:(this.objectIdField="ROW__ID"+e.toString(),e++)}a=0;for(e=this._config.statsfields;a<e.length;a++)d=e[a],f=new y,f.field=d.name,f.tofieldname=d.name,f.workingexpr=d.expression instanceof p.WhereClause?d.expression:p.WhereClause.create(d.expression,b),f.typeofstat=J(d.statistic),this._decodedStatsfield.push(f);this._decodedGroupbyfield=[];a=0;
for(e=this._config.groupbyfields;a<e.length;a++)d=e[a],d={name:d.name,singlefield:null,tofieldname:d.name,expression:d.expression instanceof p.WhereClause?d.expression:p.WhereClause.create(d.expression,b)},this._decodedGroupbyfield.push(d);if(null!==this._parent){this.geometryType=this._parent.geometryType;this.spatialReference=this._parent.spatialReference;this.hasM=this._parent.hasM;this.hasZ=this._parent.hasZ;this.typeIdField="";b=0;for(a=this._parent.fields;b<a.length;b++)d=a[b],c[d.name.toUpperCase()]=
1;this.types=null}else this.geometryType=m.layerGeometryEsriConstants.point,this.typeIdField="",this.types=null,this.spatialReference=new H({wkid:4326});this.fields=[];b=new y;b.field=this.nextUniqueName(c);b.tofieldname=this.objectIdField;b.workingexpr=p.WhereClause.create(this._parent.objectIdField,this._parent.getFieldsIndex());b.typeofstat="MIN";this._decodedStatsfield.push(b);d=0;for(e=this._decodedGroupbyfield;d<e.length;d++){a=e[d];b=new u;a.name=this.nextUniqueName(c);b.name=a.tofieldname;
b.alias=b.name;if(t.isSingleField(a.expression)){f=this._parent.getField(k.toWhereClause(a.expression,m.FeatureServiceDatabaseType.Standardised));if(!f)throw Error("Field is not present for Aggregation");a.name=f.name;a.singlefield=f.name;this.phsyicalgroupbyfields.push(f.name);b.type=f.type}else b.type=this.convertToEsriFieldType(k.predictType(a.expression,this._parent.fields)),f=new u,f.name=a.name,f.alias=f.name,this.phsyicalgroupbyfields.push(a.name),this._adaptedFields.push(new r.SqlExpressionAdapted(f,
a.expression)),this._candosimplegroupby=!1;this.fields.push(b)}if(0<this._adaptedFields.length)for(b=0,a=this._parent.fields;b<a.length;b++)d=a[b],this._adaptedFields.push(new r.OriginalField(d));for(d=0;d<this._decodedStatsfield.length;d++){b=new u;f=null;a=this._decodedStatsfield[d];a.field=this.nextUniqueName(c);a.tofieldname===this.objectIdField&&(this._internalObjectIdField=a.field);b.name=a.tofieldname;b.alias=b.name;a=null!==a.workingexpr?t.isSingleField(a.workingexpr)?k.toWhereClause(a.workingexpr,
m.FeatureServiceDatabaseType.Standardised):"":"";switch(this._decodedStatsfield[d].typeofstat){case "SUM":if(""!==a){f=this._parent.getField(a);if(!f)throw Error("Field is not present for Aggregation");b.type=f.type}else b.type="double";break;case "MIN":case "MAX":if(""!==a){f=this._parent.getField(a);if(!f)throw Error("Field is not present for Aggregation");b.type=f.type}else b.type="double";break;case "COUNT":b.type="integer";break;case "STDDEV":case "VAR":case "AVG":if(""!==a&&(f=this._parent.getField(a),
!f))throw Error("Field is not present for Aggregation");b.type="double"}this.fields.push(b)}};g.prototype._canDoAggregates=function(){return h.resolve(!1)};g.prototype._getFeatures=function(c,a,e,b){var f=this,d=[];-1!==a&&void 0===this._featureCache[a]&&d.push(a);d=this._maxQuery;return!0===this._checkIfNeedToExpandKnownPage(c,d)?this._expandPagedSet(c,d,0,0,b).then(function(){return f._getFeatures(c,a,e,b)}):h.resolve("success")};g.prototype._getFilteredSet=function(c,a,e,b,f){var d=this;if(""!==
c)return h.resolve(new q([],[],!0,null));var g=null,l=!1,v=!1;return this._ensureLoaded().then(function(){if(null!==e)for(var a=0;a<d._decodedStatsfield.length;a++)if(!0===t.scanForField(e,d._decodedStatsfield[a].tofieldname)){v=!0;e=null;break}if(null!==b){l=!0;for(a=0;a<d._decodedStatsfield.length;a++)if(!0===b.scanForField(d._decodedStatsfield[a].tofieldname)){b=null;l=!1;break}if(null!==b)for(var a=0,c=d._decodedGroupbyfield;a<c.length;a++){var f=c[a];if(null===f.singlefield&&!0===b.scanForField(f.tofieldname)){b=
null;l=!1;break}}}return!1===d._candosimplegroupby?h.resolve(!1):d._parent._canDoAggregates(d.phsyicalgroupbyfields,d._decodedStatsfield,"",null,null)}).then(function(a){if(a){a=null;e&&(a=d._reformulateWhereClauseWithoutGroupByFields(e));var c=null;b&&(c=d._reformulateOrderClauseWithoutGroupByFields(b));return d._parent._getAggregatePagesDataSourceDefinition(d.phsyicalgroupbyfields,d._decodedStatsfield,"",null,a,c,d._internalObjectIdField).then(function(a){d._checkCancelled(f);return g=!0===v?new q(a._candidates.slice(0).concat(a._known.slice(0)),
[],!0===l?a._ordered:!1,d._clonePageDefinition(a.pagesDefinition)):new q(a._candidates.slice(0),a._known.slice(0),!0===l?a._ordered:!1,d._clonePageDefinition(a.pagesDefinition))})}a=d._parent;0<d._adaptedFields.length&&(a=new r.AdaptedFeatureSet({parentfeatureset:d._parent,adaptedFields:d._adaptedFields,extraFilter:null}));!0!==v&&null!==e&&(c=null,e&&(c=d._reformulateWhereClauseWithoutGroupByFields(e)),a=new E({parentfeatureset:a,whereclause:c}));return g=new q(["GETPAGES"],[],!1,{aggregatefeaturesetpagedefinition:!0,
resultOffset:0,resultRecordCount:d._maxQuery,internal:{fullyResolved:!1,workingItem:null,type:"manual",iterator:null,set:[],subfeatureset:new F({parentfeatureset:a,orderbyclause:new G(d.phsyicalgroupbyfields.join(",")+","+d._parent.objectIdField+" ASC")})}})})};g.prototype._reformulateWhereClauseWithoutStatsFields=function(c){for(var a=0,e=this._decodedStatsfield;a<e.length;a++){var b=e[a];c=k.reformulateWithoutField(c,b.tofieldname,k.toWhereClause(b.workingexpr,m.FeatureServiceDatabaseType.Standardised),
this._parent.getFieldsIndex())}return c};g.prototype._reformulateWhereClauseWithoutGroupByFields=function(c){for(var a=0,e=this._decodedGroupbyfield;a<e.length;a++){var b=e[a];b.tofieldname!==b.name&&(c=k.reformulateWithoutField(c,b.tofieldname,k.toWhereClause(b.expression,m.FeatureServiceDatabaseType.Standardised),this._parent.getFieldsIndex()))}return c};g.prototype._reformulateOrderClauseWithoutGroupByFields=function(c){for(var a=[],e=0,b=this._decodedGroupbyfield;e<b.length;e++){var f=b[e];f.tofieldname!==
f.name&&a.push({field:f.tofieldname,newfield:f.name})}return 0<a.length?c.replaceFields(a):c};g.prototype._clonePageDefinition=function(c){return null===c?null:!0===c.aggregatefeaturesetpagedefinition?{aggregatefeaturesetpagedefinition:!0,resultRecordCount:c.resultRecordCount,resultOffset:c.resultOffset,internal:c.internal}:this._parent._clonePageDefinition(c)};g.prototype._refineSetBlock=function(c,a,e){var b=this;try{if(!0===this._checkIfNeedToExpandCandidatePage(c,this._maxQuery))return this._expandPagedSet(c,
this._maxQuery,0,0,e).then(function(){return b._refineSetBlock(c,a,e)});this._checkCancelled(e);this._refineKnowns(c,a);return h.resolve(c)}catch(f){return h.reject(f)}};g.prototype._expandPagedSet=function(c,a,e,b,f){return this._expandPagedSetFeatureSet(c,a,e,b,f)};g.prototype._getPhysicalPage=function(c,a,e){var b=this;return!0===c.pagesDefinition.aggregatefeaturesetpagedefinition?h.create(function(a,d){b._sequentialGetPhysicalItem(c,c.pagesDefinition.resultRecordCount,e,[]).then(function(b){a(b)},
d)}):this._getAgregagtePhysicalPage(c,a,e).then(function(a){for(var c=0;c<a.length;c++){for(var f=a[c],e={geometry:f.geometry,attributes:{}},g=0,h=b._decodedGroupbyfield;g<h.length;g++){var k=h[g];e.attributes[k.tofieldname]=f.attributes[k.name]}g=0;for(h=b._decodedStatsfield;g<h.length;g++)k=h[g],e.attributes[k.tofieldname]=f.attributes[k.field];b._featureCache[e.attributes[b.objectIdField]]=new w(e)}return a.length})};g.prototype._sequentialGetPhysicalItem=function(c,a,e,b){var f=this;return h.create(function(d,
g){null===c.pagesDefinition.internal.iterator&&(c.pagesDefinition.internal.iterator=c.pagesDefinition.internal.subfeatureset.iterator(e));!0===c.pagesDefinition.internal.fullyResolved?d(b.length):0===a?d(b.length):f._nextAggregateItem(c,a,e,b,function(g){null===g?d(b.length):(--a,d(f._sequentialGetPhysicalItem(c,a,e,b)))},g)})};g.prototype._nextAggregateItem=function(c,a,e,b,f,d){var g=this;try{D.tick(c.pagesDefinition.internal.iterator.next()).then(function(h){if(null===h){if(null!==c.pagesDefinition.internal.workingItem){var k=
g._calculateAndAppendAggregateItem(c.pagesDefinition.internal.workingItem);b.push(k);c.pagesDefinition.internal.workingItem=null;c.pagesDefinition.internal.set.push(k.attributes[g.objectIdField])}c.pagesDefinition.internal.fullyResolved=!0;f(null)}else{var l=g._generateAggregateHash(h);if(null===c.pagesDefinition.internal.workingItem)c.pagesDefinition.internal.workingItem={features:[h],id:l};else{if(l!==c.pagesDefinition.internal.workingItem.id){k=g._calculateAndAppendAggregateItem(c.pagesDefinition.internal.workingItem);
b.push(k);c.pagesDefinition.internal.workingItem=null;c.pagesDefinition.internal.set.push(k.attributes[g.objectIdField]);--a;c.pagesDefinition.internal.workingItem={features:[h],id:l};f(k);return}c.pagesDefinition.internal.workingItem.features.push(h)}g._nextAggregateItem(c,a,e,b,f,d)}},d)}catch(l){d(l)}};g.prototype._calculateFieldStat=function(c,a,e){for(var b=[],f=0;f<c.features.length;f++)if(null!==a.workingexpr){var d=a.workingexpr.calculateValue(c.features[f]);null!==d&&b.push(d)}else b.push(null);
switch(a.typeofstat){case "MIN":e.attributes[a.tofieldname]=n.calculateStat("min",b,-1);break;case "MAX":e.attributes[a.tofieldname]=n.calculateStat("max",b,-1);break;case "SUM":e.attributes[a.tofieldname]=n.calculateStat("sum",b,-1);break;case "COUNT":e.attributes[a.tofieldname]=b.length;break;case "VAR":e.attributes[a.tofieldname]=n.calculateStat("var",b,-1);break;case "STDDEV":e.attributes[a.tofieldname]=n.calculateStat("stddev",b,-1);break;case "AVG":e.attributes[a.tofieldname]=n.calculateStat("avg",
b,-1)}return!0};g.prototype._calculateAndAppendAggregateItem=function(c){for(var a={attributes:{},geometry:null},e=0,b=this._decodedGroupbyfield;e<b.length;e++){var f=b[e],d=f.singlefield?c.features[0].attributes[f.singlefield]:f.expression.calculateValue(c.features[0]);a.attributes[f.tofieldname]=d}e=0;for(b=this._decodedStatsfield;e<b.length;e++)this._calculateFieldStat(c,b[e],a);e=[];for(b=0;b<this._decodedStatsfield.length;b++)e.push(this._calculateFieldStat(c,this._decodedStatsfield[b],a));this._featureCache[a.attributes[this.objectIdField]]=
new w({attributes:a.attributes,geometry:a.geometry});return a};g.prototype._generateAggregateHash=function(c){for(var a="",e=0,b=this._decodedGroupbyfield;e<b.length;e++)var f=b[e],f=f.singlefield?c.attributes[f.singlefield]:f.expression.calculateValue(c),a=null===f||void 0===f?a+":":a+(":"+f.toString());return z.createMD5Hash(a,z.outputTypes.String)};g.prototype._stat=function(){return h.resolve({calculated:!1})};g.prototype.getFeatureByObjectId=function(){return h.resolve(null)};return g}(x);x._featuresetFunctions.groupby=
function(h,g){return new B({parentfeatureset:this,groupbyfields:h,statsfields:g})};return B});