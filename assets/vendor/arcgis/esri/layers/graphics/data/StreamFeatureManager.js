// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/extendsHelper ../../../core/CircularArray ../../../core/mathUtils ../../../core/maybe".split(" "),function(h,f,m,n,k,l,e){Object.defineProperty(f,"__esModule",{value:!0});f.DEFAULT_STREAM_ID_FIELD="__esri_stream_id__";h=function(){function b(a,c,d,b,g){void 0===g&&(g=128);this._trackIdToObservations=new Map;this._idCounter=0;this._lastPurge=Date.now();this._addOrUpdated=new Map;this._removed=[];this._maxAge=0;this._timeInfo=
d;this._purgeOptions=b;this.store=a;this.objectIdField=c;this.purgeInterval=g;this._useGeneratedIds=this.objectIdField===f.DEFAULT_STREAM_ID_FIELD}b.prototype.add=function(a){this._useGeneratedIds&&(a.attributes[this.objectIdField]=this._nextId());a.objectId=a.attributes[this.objectIdField];this.store.add(a);this._addOrUpdated.set(a.objectId,a);this._maxAge=Math.max(this._maxAge,a.attributes[this._timeInfo.startTimeField]);if(this._timeInfo.trackIdField){var c=a.attributes[this._timeInfo.trackIdField];
if(!this._trackIdToObservations.has(c)){var d=e.isSome(this._purgeOptions)&&null!=this._purgeOptions.maxObservations?this._purgeOptions.maxObservations:1E3,d=l.clamp(d,0,1E3);this._trackIdToObservations.set(c,new k.default(d))}a=this._trackIdToObservations.get(c).enqueue(a.attributes[this.objectIdField]);e.isSome(a)&&(c=this.store.removeById(a),e.isSome(c)&&(this._addOrUpdated.has(a)?this._addOrUpdated.delete(a):this._removed.push(c)))}};b.prototype.checkForUpdates=function(){var a=this._getToAdd(),
c=this._getToRemove(),d=Date.now();d-this._lastPurge>=this.purgeInterval&&(this._purge(),this._lastPurge=d);(a||c)&&this.store.update(a,c)};b.prototype._getToAdd=function(){if(!this._addOrUpdated.size)return null;var a=Array(this._addOrUpdated.size),c=0;this._addOrUpdated.forEach(function(d){return a[c++]=d});this._addOrUpdated.clear();return a};b.prototype._getToRemove=function(){var a=this._removed;if(!this._removed.length)return null;this._removed=[];return a};b.prototype._nextId=function(){var a=
this._idCounter;this._idCounter=(this._idCounter+1)%4294967294+1;return a};b.prototype._purge=function(){var a=this._purgeOptions;e.isSome(a)&&(this._purgeSomeByDisplayCount(a),this._purgeByAge(a),this._purgeTracks())};b.prototype._purgeSomeByDisplayCount=function(a){var c=this;if(a.displayCount){var d=this.store.size;d>a.displayCount&&this._trackIdToObservations.forEach(function(b){d>a.displayCount&&b.size&&(b=c.store.removeById(e.unwrap(b.dequeue())),e.isSome(b)&&c._removed.push(b),d--)})}};b.prototype._purgeByAge=
function(a){var c=this;if(a.age){var b=this._maxAge-6E4*a.age,e=this._timeInfo.startTimeField;this.store.forEach(function(a){a.attributes[e]<b&&(c.store.removeById(a.objectId),c._removed.push(a))})}};b.prototype._purgeTracks=function(){var a=this;this._trackIdToObservations.forEach(function(c,b){0===c.size&&a._trackIdToObservations.delete(b)})};return b}();f.default=h});