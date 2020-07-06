// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/Error ../../../core/lang ../../../core/MemCache ../../../core/promiseUtils ../../../core/SetUtils ../../../core/unitUtils ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ../../../geometry/support/boundsUtils ../../../geometry/support/jsonUtils ../../../geometry/support/spatialReferenceUtils ./attributeSupport ./projectionSupport ./QueryEngineCapabilities ./QueryEngineResult ./spatialQuerySupport ./timeSupport ./utils ../../support/FieldsIndex ../../support/PromiseQueue".split(" "),
function(A,B,U,p,l,t,v,G,K,L,y,q,E,M,H,I,r,J,N,w,D,O,k,P,Q){Object.defineProperty(B,"__esModule",{value:!0});A=function(){return function(f,a,b,c,d){void 0===a&&(a=null);this.attributes=f;this.geometry=b;this.centroid=c;this.filterFlags=d;this.groupId=-1;this.localId=a}}();B.Feature=A;var z=new Set,R=new G.MemCacheStorage(2E6),S=0;A=function(){function f(a){var b=this;this.capabilities={query:N.queryCapabilities};this.geometryType=a.geometryType;this.hasM=a.hasM;this.hasZ=a.hasZ;this.objectIdField=
a.objectIdField;this.spatialReference=a.spatialReference;this.definitionExpression=a.definitionExpression;this.featureStore=a.featureStore;this._changeHandle=this.featureStore.events.on("changed",function(){return b.clearCache()});this.timeInfo=a.timeInfo;a.cacheSpatialQueries&&(this._geometryQueryCache=new G.MemCache(S++ +"$$",R));this.fieldsIndex=new P(a.fields);a.scheduler&&a.task&&(this._frameQueue=new Q.default,this._frameTask=a.scheduler.registerTask(a.task,function(a){return b._update(a)},
function(){return 0<b._frameQueue.length}))}f.prototype.destroy=function(){this._frameTask&&(this._frameTask.remove(),this._frameTask=null,this._frameQueue.cancelAll(),this._frameQueue=null);this.clearCache();this._geometryQueryCache&&this._geometryQueryCache.destroy();this._changeHandle&&(this._changeHandle.remove(),this._changeHandle=null);this.fieldsIndex.destroy()};Object.defineProperty(f.prototype,"featureAdapter",{get:function(){return this.featureStore.featureAdapter},enumerable:!0,configurable:!0});
Object.defineProperty(f.prototype,"fullExtent",{get:function(){var a=this.featureStore.fullBounds;return a?{xmin:a[0],ymin:a[1],xmax:a[2],ymax:a[3],spatialReference:k.cleanFromGeometryEngine(this.spatialReference)}:null},enumerable:!0,configurable:!0});Object.defineProperty(f.prototype,"timeExtent",{get:function(){return this.timeInfo?this._timeExtent?this._timeExtent:this._timeExtent=O.getTimeExtent(this.timeInfo,this.featureStore):null},enumerable:!0,configurable:!0});f.prototype.clearCache=function(){this._geometryQueryCache&&
this._geometryQueryCache.clear();this._timeExtent=this._allItems=null};f.prototype.executeQuery=function(a,b){void 0===a&&(a={});return l(this,void 0,void 0,function(){var c,d,b,g=this;return p(this,function(h){switch(h.label){case 0:c=v.clone(a),h.label=1;case 1:return h.trys.push([1,8,,9]),[4,this._schedule(function(){return k.normalizeQuery(c,g.definitionExpression,g.spatialReference)})];case 2:return c=h.sent(),[4,this._reschedule(function(){return g._checkQuerySupport(c)})];case 3:return c=h.sent(),
[4,this._reschedule(function(){return g._executeGeometryQuery(c)})];case 4:return d=h.sent(),[4,this._reschedule(function(){return d.executeObjectIdsQuery(c)})];case 5:return d=h.sent(),[4,this._reschedule(function(){return d.executeTimeQuery(c)})];case 6:return d=h.sent(),[4,this._reschedule(function(){return d.executeAttributesQuery(c)})];case 7:return d=h.sent(),[3,9];case 8:b=h.sent();if(b!==k.QUERY_ENGINE_EMPTY_RESULT)throw b;d=new w.default([],null,this);return[3,9];case 9:return[2,d.createQueryResponse(c)]}})})};
f.prototype.executeQueryForCount=function(a,b){void 0===a&&(a={});return l(this,void 0,void 0,function(){var c,d,b,g=this;return p(this,function(h){switch(h.label){case 0:c=v.clone(a),c.returnGeometry=!1,c.returnCentroid=!1,c.outSR=null,h.label=1;case 1:return h.trys.push([1,8,,9]),[4,this._schedule(function(){return k.normalizeQuery(c,g.definitionExpression,g.spatialReference)})];case 2:return c=h.sent(),[4,this._reschedule(function(){return g._checkQuerySupport(c)})];case 3:return c=h.sent(),[4,
this._reschedule(function(){return g._executeGeometryQuery(c)})];case 4:return d=h.sent(),[4,this._reschedule(function(){return d.executeObjectIdsQuery(c)})];case 5:return d=h.sent(),[4,this._reschedule(function(){return d.executeTimeQuery(c)})];case 6:return d=h.sent(),[4,this._reschedule(function(){return d.executeAttributesQuery(c)})];case 7:return d=h.sent(),[2,d.size];case 8:b=h.sent();if(b!==k.QUERY_ENGINE_EMPTY_RESULT)throw b;return[2,0];case 9:return[2]}})})};f.prototype.executeQueryForExtent=
function(a,b){void 0===a&&(a={});return l(this,void 0,void 0,function(){var c,b,u,g,h,e,m,f,x=this;return p(this,function(d){switch(d.label){case 0:c=v.clone(a),u=c.outSR,d.label=1;case 1:return d.trys.push([1,8,,9]),[4,this._schedule(function(){return k.normalizeQuery(c,x.definitionExpression,x.spatialReference)})];case 2:return c=d.sent(),[4,this._reschedule(function(){return x._checkQuerySupport(c)})];case 3:return c=d.sent(),c.returnGeometry=!0,c.returnCentroid=!1,c.outSR=null,[4,this._reschedule(function(){return x._executeGeometryQuery(c)})];
case 4:return b=d.sent(),[4,this._reschedule(function(){return b.executeObjectIdsQuery(c)})];case 5:return b=d.sent(),[4,this._reschedule(function(){return b.executeTimeQuery(c)})];case 6:return b=d.sent(),[4,this._reschedule(function(){return b.executeAttributesQuery(c)})];case 7:b=d.sent();g=b.size;if(!g)return[2,{count:g,extent:null}];q.set(n,q.NEGATIVE_INFINITY);this.featureStore.forEachBounds(b.items,function(a){return q.expand(n,a)},T);h={xmin:n[0],ymin:n[1],xmax:n[3],ymax:n[4],spatialReference:k.cleanFromGeometryEngine(this.spatialReference)};
this.hasZ&&isFinite(n[2])&&isFinite(n[5])&&(h.zmin=n[2],h.zmax=n[5]);e=J.project(h,b.spatialReference,u);e.spatialReference=k.cleanFromGeometryEngine(u||this.spatialReference);0===e.xmax-e.xmin&&(m=y.getMetersPerUnitForSR(e.spatialReference),e.xmin-=m,e.xmax+=m);0===e.ymax-e.ymin&&(m=y.getMetersPerUnitForSR(e.spatialReference),e.ymin-=m,e.ymax+=m);this.hasZ&&null!=e.zmin&&null!=e.zmax&&0===e.zmax-e.zmin&&(m=y.getMetersPerUnitForSR(e.spatialReference),e.zmin-=m,e.zmax+=m);return[2,{count:g,extent:e}];
case 8:f=d.sent();if(f===k.QUERY_ENGINE_EMPTY_RESULT)return[2,{count:0,extent:null}];throw f;case 9:return[2]}})})};f.prototype.executeQueryForIds=function(a,b){void 0===a&&(a={});return l(this,void 0,void 0,function(){return p(this,function(c){return[2,this.executeQueryForIdSet(a,b).then(function(a){return L.valuesOfSet(a)})]})})};f.prototype.executeQueryForIdSet=function(a,b){void 0===a&&(a={});return l(this,void 0,void 0,function(){var c,b,f,g,h,e=this;return p(this,function(d){switch(d.label){case 0:c=
v.clone(a),c.returnGeometry=!1,c.returnCentroid=!1,c.outSR=null,d.label=1;case 1:return d.trys.push([1,9,,10]),[4,this._schedule(function(){return k.normalizeQuery(c,e.definitionExpression,e.spatialReference)})];case 2:return c=d.sent(),[4,this._reschedule(function(){return e._checkQuerySupport(c)})];case 3:return c=d.sent(),[4,this._reschedule(function(){return e._executeGeometryQuery(c)})];case 4:return b=d.sent(),[4,this._reschedule(function(){return b.executeObjectIdsQuery(c)})];case 5:return b=
d.sent(),[4,this._reschedule(function(){return b.executeTimeQuery(c)})];case 6:return b=d.sent(),[4,this._reschedule(function(){return b.executeAttributesQuery(c)})];case 7:return b=d.sent(),f=b.items,g=new Set,[4,this._reschedule(function(){for(var a=0,c=f;a<c.length;a++)g.add(b.featureAdapter.getObjectId(c[a]))})];case 8:return d.sent(),[2,g];case 9:h=d.sent();if(h===k.QUERY_ENGINE_EMPTY_RESULT)return[2,new Set];throw h;case 10:return[2]}})})};f.prototype.executeQueryForLatestObservations=function(a,
b){void 0===a&&(a={});return l(this,void 0,void 0,function(){var b,d,f,g=this;return p(this,function(c){switch(c.label){case 0:if(!this.timeInfo||!this.timeInfo.trackIdField)throw new t("feature-store:unsupported-query","Missing timeInfo or timeInfo.trackIdField",{query:a,timeInfo:this.timeInfo});b=v.clone(a);c.label=1;case 1:return c.trys.push([1,9,,10]),[4,this._schedule(function(){return k.normalizeQuery(b,g.definitionExpression,g.spatialReference)})];case 2:return b=c.sent(),[4,this._reschedule(function(){return g._checkQuerySupport(b)})];
case 3:return b=c.sent(),[4,this._reschedule(function(){return g._executeGeometryQuery(b)})];case 4:return d=c.sent(),[4,this._reschedule(function(){return d.executeObjectIdsQuery(b)})];case 5:return d=c.sent(),[4,this._reschedule(function(){return d.executeTimeQuery(b)})];case 6:return d=c.sent(),[4,this._reschedule(function(){return d.executeAttributesQuery(b)})];case 7:return d=c.sent(),[4,this._reschedule(function(){return d.filterLatest()})];case 8:return d=c.sent(),[3,10];case 9:f=c.sent();
if(f!==k.QUERY_ENGINE_EMPTY_RESULT)throw f;d=new w.default([],null,this);return[3,10];case 10:return[2,d.createQueryResponse(b)]}})})};f.prototype._schedule=function(a){return l(this,void 0,void 0,function(){return p(this,function(b){return this._frameQueue?[2,this._frameQueue.push(a)]:[2,a()]})})};f.prototype._reschedule=function(a){return l(this,void 0,void 0,function(){return p(this,function(b){return this._frameQueue?[2,this._frameQueue.unshift(a)]:[2,a()]})})};f.prototype._update=function(a){for(this._budget=
a;!a.done&&this._frameQueue&&this._frameQueue.process();)a.madeProgress();this._budget=null};f.prototype._getAll=function(){if(!this._allItems){var a=[];this.featureStore.forEach(function(b){return a.push(b)});this._allItems=new w.default(a,null,this)}return this._allItems};f.prototype._executeGeometryQuery=function(a){return l(this,void 0,void 0,function(){var b,c,d,f,g,h,e,m,k,x,n,r,t,F,v,C,q,A,z,B,y=this;return p(this,function(u){switch(u.label){case 0:b=a.geometry;c=a.outSR;d=a.spatialRel;f=I.isValid(c)&&
!I.equals(this.spatialReference,c);if(g=this._geometryQueryCache?f?JSON.stringify({geometry:b,spatialRelationship:d,outSpatialReference:c}):JSON.stringify({geometry:b,spatialRelationship:d}):null)if(h=this._geometryQueryCache.get(g),void 0!==h)return[2,h];e=function(b){return l(y,void 0,void 0,function(){var d;return p(this,function(e){switch(e.label){case 0:return f&&(a.returnGeometry||a.returnCentroid)?[4,b.project(c)]:[3,2];case 1:return d=e.sent(),g&&this._geometryQueryCache.put(g,d,d.size||1),
[2,d];case 2:return g&&this._geometryQueryCache.put(g,b,b.size||1),[2,b]}})})};if(!b)return[2,e(this._getAll())];m=this.featureAdapter;if("esriSpatialRelDisjoint"!==d)return[3,3];k=this._searchFeatures(this._getQueryBBoxes(b));if(!k.length)return[2,e(this._getAll())];r=new Set;t=0;for(F=k;t<F.length;t++)v=F[t],r.add(m.getObjectId(v));return[4,this._reschedule(function(){var a=0;x=Array(r.size);y.featureStore.forEach(function(b){return x[a++]=b});n=r})];case 1:return u.sent(),[4,this._reschedule(function(){return l(y,
void 0,void 0,function(){var a,c,e;return p(this,function(g){switch(g.label){case 0:return[4,D.getSpatialQueryOperator(d,b,this)];case 1:return a=g.sent(),c=function(b){return!n.has(m.getObjectId(b))||a(m.getGeometry(b))},e=w.default.bind,[4,this._runSpatialFilter(x,c)];case 2:return[2,new (e.apply(w.default,[void 0,g.sent(),b,this]))]}})})})];case 2:return C=u.sent(),[2,e(C)];case 3:return q=this._searchFeatures(this._getQueryBBoxes(b)),q.length?(A=this._canExecuteSoloPass(b,a))?[2,e(new w.default(q,
b,this))]:[4,D.getSpatialQueryOperator(d,b,this)]:(C=new w.default([],b,this),g&&this._geometryQueryCache.put(g,C,C.size||1),[2,C]);case 4:return z=u.sent(),[4,this._runSpatialFilter(q,function(a){return z(m.getGeometry(a))})];case 5:return B=u.sent(),[2,e(new w.default(B,b,this))]}})})};f.prototype._runSpatialFilter=function(a,b){return l(this,void 0,void 0,function(){var c,d,f,g=this;return p(this,function(h){if(!b)return[2,a];if(!this._budget)return[2,a.filter(function(a){return b(a)})];c=0;d=
[];f=function(){return l(g,void 0,void 0,function(){var e;return p(this,function(g){switch(g.label){case 0:if(!(c<a.length))return[3,3];e=a[c];b(e)&&d.push(e);return this._budget.done?[4,this._reschedule(function(){return f()})]:[3,2];case 1:g.sent(),g.label=2;case 2:return++c,[3,0];case 3:return[2]}})})};return[2,this._reschedule(function(){return f()}).then(function(){return d})]})})};f.prototype._canExecuteSoloPass=function(a,b){var c=this.geometryType;b=b.spatialRel;return D.canQueryWithRBush(a)&&
("esriSpatialRelEnvelopeIntersects"===b||"esriGeometryPoint"===c&&("esriSpatialRelIntersects"===b||"esriSpatialRelContains"===b||"esriSpatialRelWithin"===b))};f.prototype._getQueryBBoxes=function(a){if(D.canQueryWithRBush(a)){if(H.isExtent(a))return[E.fromValues(a.xmin,a.ymin,a.xmax,a.ymax)];if(H.isPolygon(a))return a.rings.map(function(a){return E.fromValues(Math.min(a[0][0],a[2][0]),Math.min(a[0][1],a[2][1]),Math.max(a[0][0],a[2][0]),Math.max(a[0][1],a[2][1]))})}return[M.getBoundsXY(E.create(),
a)]};f.prototype._searchFeatures=function(a){for(var b=0;b<a.length;b++)this.featureStore.forEachInBounds(a[b],function(a){z.add(a)});var c=Array(z.size),d=0;z.forEach(function(a){return c[d++]=a});z.clear();return c};f.prototype._checkQuerySupport=function(a){return l(this,void 0,void 0,function(){return p(this,function(b){if(0>a.distance||null!=a.geometryPrecision||a.multipatchOption||a.pixelSize||a.relationParam||a.text)throw new t("feature-store:unsupported-query","Unsupported query options",
{query:a});return[2,K.all([this._checkAttributesQuerySupport(a),this._checkStatisticsQuerySupport(a),D.checkSpatialQuerySupport(a,this.geometryType,this.spatialReference),J.checkProjectionSupport(this.spatialReference,a.outSR)]).then(function(){return a})]})})};f.prototype._checkAttributesQuerySupport=function(a){var b=a.outFields,c=a.orderByFields,d=a.returnDistinctValues;c&&0<c.length&&(c=c.map(function(a){var b=a.toLowerCase();return-1<b.indexOf(" asc")?b.split(" asc")[0]:-1<b.indexOf(" desc")?
b.split(" desc")[0]:a}),r.validateFields(this.fieldsIndex,c,"orderByFields contains missing fields"));if(b&&0<b.length)r.validateFields(this.fieldsIndex,b,"outFields contains missing fields");else if(d)throw new t("feature-store:unsupported-query","outFields should be specified for returnDistinctValues",{query:a});r.validateWhere(this.fieldsIndex,a.where)};f.prototype._checkStatisticsQuerySupport=function(a){return l(this,void 0,void 0,function(){var b,c,d,f,g,h,e,m,k,l,n,q;return p(this,function(p){b=
a.outStatistics;c=a.groupByFieldsForStatistics;d=a.having;f=c&&c.length;g=b&&b.length;if(d){if(!f||!g)throw new t("feature-store:unsupported-query","outStatistics and groupByFieldsForStatistics should be specified with having",{query:a});r.validateHaving(this.fieldsIndex,d,b)}if(g){if(h=b.some(function(a){return"exceedslimit"===a.statisticType}))return[2];e=b.map(function(a){return a.onStatisticField});r.validateFields(this.fieldsIndex,e,"onStatisticFields contains missing fields");f&&r.validateFields(this.fieldsIndex,
c,"groupByFieldsForStatistics contains missing fields");m=0;for(k=b;m<k.length;m++)if(l=k[m],n=l.onStatisticField,q=l.statisticType,(!f||"count"!==q)&&n&&r.hasInvalidFieldType(n,this.fieldsIndex))throw new t("feature-store:unsupported-query","outStatistics contains non-numeric fields",{definition:l,query:a});}return[2]})})};return f}();B.default=A;var T=q.create(),n=q.create()});