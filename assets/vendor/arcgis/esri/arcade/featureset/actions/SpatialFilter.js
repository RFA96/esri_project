// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../sources/Empty ../support/FeatureSet ../support/IdSet ../support/shared ../../../core/promiseUtils ../../../geometry/geometryEngineAsync".split(" "),function(r,t,q,h,e,p,m,n,l){var g=function(a){function d(c){var b=a.call(this,c)||this;b._relation="";b._relationGeom=null;b._relationString="";b.declaredClass="esri.arcade.featureset.actions.SpatialFilter";b._relationString=c.relationString;b._parent=c.parentfeatureset;b._maxProcessing=
40;b._relation=c.relation;b._relationGeom=c.relationGeom;return b}q(d,a);d.prototype._getSet=function(c){var b=this;return null===this._wset?this._ensureLoaded().then(function(){return b._parent._getFilteredSet("esriSpatialRelRelation"!==b._relation?b._relation:b._relation+":"+b._relationString,b._relationGeom,null,null,c)}).then(function(a){b._checkCancelled(c);b._wset=new p(a._candidates.slice(0),a._known.slice(0),a._ordered,b._clonePageDefinition(a.pagesDefinition));return b._wset}):n.resolve(this._wset)};
d.prototype._isInFeatureSet=function(c){var b=this._parent._isInFeatureSet(c);if(b===m.IdState.NotInFeatureSet)return b;b=this._idstates[c];return void 0===b?m.IdState.Unknown:b};d.prototype._getFeature=function(c,b,a){return this._parent._getFeature(c,b,a)};d.prototype._getFeatures=function(c,b,a,d){return this._parent._getFeatures(c,b,a,d)};d.prototype._featureFromCache=function(a){return this._parent._featureFromCache(a)};d.prototype.executeSpatialRelationTest=function(a){if(null===a.geometry)return n.resolve(!1);
switch(this._relation){case "esriSpatialRelEnvelopeIntersects":var b=m.shapeExtent(this._relationGeom);a=m.shapeExtent(a.geometry);return l.intersects(b,a);case "esriSpatialRelIntersects":return l.intersects(this._relationGeom,a.geometry);case "esriSpatialRelContains":return l.contains(this._relationGeom,a.geometry);case "esriSpatialRelOverlaps":return l.overlaps(this._relationGeom,a.geometry);case "esriSpatialRelWithin":return l.within(this._relationGeom,a.geometry);case "esriSpatialRelTouches":return l.touches(this._relationGeom,
a.geometry);case "esriSpatialRelCrosses":return l.crosses(this._relationGeom,a.geometry);case "esriSpatialRelRelation":return l.relate(this._relationGeom,a.geometry,this._relationString)}};d.prototype._fetchAndRefineFeatures=function(a,b,d){var c=this,f=new p([],a,!1,null),k=Math.min(b,a.length);return this._parent._getFeatures(f,-1,k,d).then(function(){c._checkCancelled(d);for(var b=[],f=0;f<k;f++){var e=c._parent._featureFromCache(a[f]);b.push(c.executeSpatialRelationTest(e))}return n.all(b)}).then(function(d){for(var k=
0;k<b;k++)c._idstates[a[k]]=!0===d[k]?m.IdState.InFeatureSet:m.IdState.NotInFeatureSet;return"success"})};d.prototype._getFilteredSet=function(a,b,d,e,f){var c=this;return this._ensureLoaded().then(function(){return c._parent._getFilteredSet("esriSpatialRelRelation"!==c._relation?c._relation:c._relation+":"+c._relationString,c._relationGeom,d,e,f)}).then(function(a){c._checkCancelled(f);return null!==b?new p(a._candidates.slice(0).concat(a._known.slice(0)),[],a._ordered,c._clonePageDefinition(a.pagesDefinition)):
new p(a._candidates.slice(0),a._known.slice(0),a._ordered,c._clonePageDefinition(a.pagesDefinition))})};d.prototype._stat=function(a,b,d,e,f,k,g){var c=this;return""!==d?n.resolve({calculated:!1}):this._parent._stat(a,b,"esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,f,k,g).then(function(h){return!1===h.calculated?null===f&&""===d&&null===e?c._manualStat(a,b,k,g):{calculated:!1}:h})};d.prototype._canDoAggregates=function(a,b,d,e,
f){return""!==d||null!==e||null===this._parent?n.resolve(!1):this._parent._canDoAggregates(a,b,"esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,f)};d.prototype._getAggregatePagesDataSourceDefinition=function(a,b,d,e,f,g,h){return null===this._parent?n.reject(Error("Should never be called")):this._parent._getAggregatePagesDataSourceDefinition(a,b,"esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,
this._relationGeom,f,g,h)};return d}(e);e._featuresetFunctions.intersects=function(a){return null===a||void 0===a?new h({parentfeatureset:this}):new g({parentfeatureset:this,relation:"esriSpatialRelIntersects",relationGeom:a})};e._featuresetFunctions.envelopeIntersects=function(a){return null===a||void 0===a?new h({parentfeatureset:this}):new g({parentfeatureset:this,relation:"esriSpatialRelEnvelopeIntersects",relationGeom:a})};e._featuresetFunctions.contains=function(a){return null===a||void 0===
a?new h({parentfeatureset:this}):new g({parentfeatureset:this,relation:"esriSpatialRelContains",relationGeom:a})};e._featuresetFunctions.overlaps=function(a){return null===a||void 0===a?new h({parentfeatureset:this}):new g({parentfeatureset:this,relation:"esriSpatialRelOverlaps",relationGeom:a})};e._featuresetFunctions.within=function(a){return null===a||void 0===a?new h({parentfeatureset:this}):new g({parentfeatureset:this,relation:"esriSpatialRelWithin",relationGeom:a})};e._featuresetFunctions.touches=
function(a){return null===a||void 0===a?new h({parentfeatureset:this}):new g({parentfeatureset:this,relation:"esriSpatialRelTouches",relationGeom:a})};e._featuresetFunctions.crosses=function(a){return null===a||void 0===a?new h({parentfeatureset:this}):new g({parentfeatureset:this,relation:"esriSpatialRelCrosses",relationGeom:a})};e._featuresetFunctions.relate=function(a,d){return null===a||void 0===a?new h({parentfeatureset:this}):new g({parentfeatureset:this,relation:"esriSpatialRelRelation",relationGeom:a,
relationString:d})};return g});