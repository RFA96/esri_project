// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/arrayUtils","../../../../core/MapUtils","./Util"],function(w,x,u,v,p){return function(){function d(a){this._residentGeomRecords=new Map;this._dirtyGeomRecords=new Map;this._model=a}Object.defineProperty(d.prototype,"residentLayerCount",{get:function(){return this._residentGeomRecords.size},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"residentObjectCount",{get:function(){var a=0;this._residentGeomRecords.forEach(function(b){a+=b.size});
return a},enumerable:!0,configurable:!0});d.prototype.hasDirtyGeometryRecords=function(){return v.someMap(this._dirtyGeomRecords,function(a){return v.someMap(a,function(a){return a&&0<a.size})})};d.prototype.handleUpdate=function(a,b,c){p.assert(this[b],"ModelDirtySet doesn't know how to process "+b);return this[b](a,c)};d.prototype.shaderTransformationChanged=function(a){var b=this;(a=this._residentGeomRecords.get(a.id))&&a.forEach(function(a,d){(d=b._model.get(1,d))&&d.hasVolativeTransformation()&&
a.forEach(function(a){var b=0;for(a=a[1];b<a.length;b++)a[b].shaderTransformationChanged()})})};d.prototype.commit=function(){return this.commitLayers(u.keysOfMap(this._dirtyGeomRecords))};d.prototype.commitLayers=function(a){for(var b=this,c=[],d=[],q=[],g=function(e){var g=a[e];e=h._dirtyGeomRecords.get(g);if(!e)return"continue";e.forEach(function(a,e){var f=b._ensureGeomRecord(g,e);a.forEach(function(a,g){var h=a[0],l=a[1];a=a[2];var r=!1;if(l&2){var k=f.get(g);if(k){k=k[1];if(a&4)for(var n=b._model.get(1,
e),m=0;m<k.length;m++){var t=k[m];if(b._model.updateRenderGeometryTransformation(n,h,t)){r=!0;break}}if(!r)for(n=0;n<k.length;n++)t=k[n],q.push({renderGeometry:t,updateType:a})}else p.assert(!1,"ModelDirtySet.getAddRemoveListFilteredByLayers: invalid update")}if(l&4||r)(k=f.get(g))?d.push.apply(d,k[1]):4===l&&p.assert(!1,"ModelDirtySet.getAddRemoveListFilteredByLayers: invalid remove"),k&&f.delete(g);if(l&1||r)l=[h,[]],n=b._model.get(1,e),b._model.getGeometryRenderGeometries(n,h,l[1]),c.push.apply(c,
l[1]),f.set(g,l)});0===f.size&&b._residentGeomRecords.get(g).delete(e)});0===h._residentGeomRecords.get(g).size&&h._residentGeomRecords.delete(g);h._dirtyGeomRecords.delete(g)},h=this,f=0;f<a.length;f++)g(f);return[c,d,q]};d.prototype.getResidentRenderGeometries=function(){return this.getResidentRenderGeometriesFilteredByLayers(u.keysOfMap(this._residentGeomRecords))};d.prototype.getResidentRenderGeometriesFilteredByLayers=function(a){for(var b=[],c=0;c<a.length;c++){var d=this._residentGeomRecords.get(a[c]);
d&&d.forEach(function(a){a.forEach(function(a){b.push.apply(b,a[1])})})}return b};d.prototype._objectStateChanged=function(a,b,c,d){if(null!=c)this._componentPropertyChanged(b,c,d,a);else{c=0;for(var e=b.geometryRecords;c<e.length;c++)this._componentPropertyChanged(b,e[c],d,a)}};d.prototype.visibilityChanged=function(a,b,c){this._objectStateChanged(1,a,b,c)};d.prototype.highlightChanged=function(a,b,c){this._objectStateChanged(8,a,b,c)};d.prototype.occlusionChanged=function(a,b,c){this._objectStateChanged(16,
a,b,c)};d.prototype.vertexAttrsUpdated=function(a,b,c){this._updateOrCreateDirtyRecord(a,b,c,2,0,0,2,5,2)};d.prototype.layerAdded=function(a){for(var b=a.getObjects(),c=0;c<b.length;c++)this.layerObjectAdded(a,b[c])};d.prototype.layerRemoved=function(a){for(var b=a.getObjects(),c=0;c<b.length;c++)this.layerObjectRemoved(a,b[c])};d.prototype.layerObjectAdded=function(a,b){a=a.id;for(var c=b.geometryRecords,d=0;d<c.length;d++)this.objGeometryAdded(b,c[d],a)};d.prototype.layerObjectRemoved=function(a,
b){a=a.id;for(var c=b.geometryRecords,d=0;d<c.length;d++)this.objGeometryRemoved(b,c[d],a)};d.prototype.layObjectReplaced=function(a,b){this.layerObjectRemoved(a,b[0]);this.layerObjectAdded(a,b[1])};d.prototype.objTransformation=function(a,b){var c=this;b=b||this._getParentLayerId(a);this._ensureGeomRecord(b,a.id).forEach(function(d){c._updateOrCreateDirtyRecord(a,d[0],b,2,0,0,2,5,4)})};d.prototype.objGeometryAdded=function(a,b,c){this._updateOrCreateDirtyRecord(a,b,c,1,4,0,0,0)};d.prototype.objGeometryRemoved=
function(a,b,c){this._updateOrCreateDirtyRecord(a,b,c,4,1,2,0,0)};d.prototype.objGeometryReplaced=function(a,b){this.objGeometryRemoved(a,b[0]);this.objGeometryAdded(a,b[1])};d.prototype.objGeometryTransformation=function(a,b){this.objGeometryReplaced(a,b)};d.prototype._componentPropertyChanged=function(a,b,c,d){this._updateOrCreateDirtyRecord(a,b,c,2,0,0,2,5,d)};d.prototype._updateOrCreateDirtyRecord=function(a,b,c,d,q,g,h,f,m){c=c||this._getParentLayerId(a);var e=b.id;a=this._ensureDirtyRecord(c,
a.id);(c=a.get(e))?(b=c[1],b&q?a.delete(e):b&g?(c[1]=d,c[2]=m):b&h?c[2]|=m:b&f||p.assert(!1,"ModelDirtySet.objGeometryAdded: inconsistent state")):a.set(e,[b,d,m])};d.prototype._ensureGeomRecord=function(a,b){var c=this._residentGeomRecords.get(a);c||(c=new Map,this._residentGeomRecords.set(a,c));a=c.get(b);a||(a=new Map,c.set(b,a));return a};d.prototype._ensureDirtyRecord=function(a,b){var c=this._dirtyGeomRecords.get(a);c||(c=new Map,this._dirtyGeomRecords.set(a,c));a=c.get(b);a||(a=new Map,c.set(b,
a));return a};d.prototype._getParentLayerId=function(a){return a.parentLayer.id};d.prototype.formatDebugInfo=function(a){if(a)return"";var b=["ADD","UPD",void 0,"REM"],c="";this._dirtyGeomRecords.forEach(function(a,d){a.forEach(function(a,e){0<c.length&&(c+="\n");c+=d+"."+e;var f=[];a.forEach(function(a){var b=a[1];f[b]||(f[b]=[]);f[b].push(a[0].geometry.id)});for(a=0;a<f.length;a++)if(f[a])for(c+=" "+b[a-1]+": ",e=0;e<f[a].length;e++)c+=f[a][e]+", "})});return c};return d}()});