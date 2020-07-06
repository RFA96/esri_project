// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/compilerUtils ../../../core/Error ../../../core/promiseUtils ../../../layers/support/layerUtils ../../../views/3d/terrain/terrainUtils ../../../views/3d/terrain/TilingScheme ../../../views/support/spatialReferenceSupport".split(" "),function(F,d,u,m,z,e,h,A,w,B,C){function q(){throw new e("basemap-compatibility:incompatible-spatial-reference","Basemap spatial reference is not compatible with the view");
}function D(f,b){return m(this,void 0,void 0,function(){var a,x,g,v,k,r,d,m,h,q,y;return u(this,function(c){switch(c.label){case 0:return a=f.basemap,x=f.view,[4,a.load(b)];case 1:c.sent();if(0===a.baseLayers.length)return[2,void 0];g=a.baseLayers.concat(a.referenceLayers);v=E(g);if(v.length)throw v[0];k=z.typeCast(a.baseLayers.getItemAt(0))();c.label=2;case 2:return c.trys.push([2,4,,5]),[4,k.load(b)];case 3:return c.sent(),[3,5];case 4:throw r=c.sent(),d=r.name,m=void 0===d?"basemap-compatibility:unknown-error":
d,h=r.message,q=void 0===h?"Unknown basemap compatibility error":h,y=r.details,new e(m,q,y);case 5:c=k;var n=x,p=c.tileInfo;if(p){var l=n.get("viewingMode");if(l){if(!C.isSpatialReferenceSupported(p.spatialReference,l))throw new e("basemapgalleryitem:spatial-reference-unsupported-"+l,"Basemap spatial reference is unsupported in "+l+" mode");if("global"===l){var t=w.checkIfTileInfoSupportedForView(p,c.fullExtent,null,l);t&&c.compatibleTileInfo256&&!w.checkIfTileInfoSupportedForView(c.compatibleTileInfo256,
c.fullExtent,null,l)&&(t=null);if(t)throw new e("basemapgalleryitem:tiling-scheme-unsupported-"+(p.spatialReference.isWebMercator?"web-mercator":"wgs84")+"-global","Basemap tiling scheme is unsupported in global mode",{error:t});}else if(B.checkUnsupported(p))throw new e("basemapgalleryitem:tiling-scheme-unsupported-local","Basemap tiling scheme is unsupported in local mode");n=n.get("basemapTerrain.tilingScheme");if(!(!n||n.compatibleWith(p)||c.compatibleTileInfo256&&n.compatibleWith(c.compatibleTileInfo256)))throw new e("basemapgalleryitem:tiling-scheme-incompatible",
"Basemap tiling scheme is incompatible with the view");}}return[2]}})})}function E(f){var b=["ArcGISTiledImageServiceLayer","ArcGISTiledMapServiceLayer","OpenStreetMap","VectorTileLayer","WebTiledLayer"];return f.toArray().filter(function(a){return-1===b.indexOf(a.operationalLayerType)}).map(function(a){return new e("basemap-compatibility:unsupported-basemap-layer-type","Unsupported basemap layer type ${operationalLayerType}",{layer:a,operationalLayerType:a.operationalLayerType||"unknown"})})}Object.defineProperty(d,
"__esModule",{value:!0});d.default3DCompatibility=function(f,b){void 0===b&&(b={});return m(this,void 0,void 0,function(){return u(this,function(a){switch(a.label){case 0:return[4,D(f,b)];case 1:return a.sent(),h.throwIfAborted(b),[2]}})})};d.default2DCompatibility=function(f,b){void 0===b&&(b={});return m(this,void 0,void 0,function(){var a,d,g,e;return u(this,function(k){switch(k.label){case 0:return a=f.basemap,d=f.view,[4,a.load(b)];case 1:k.sent();h.throwIfAborted(b);if(0===a.baseLayers.length)return[2,
void 0];g=a.baseLayers.getItemAt(0);if(!A.isTiledLayer(g))return[2,void 0];if(a.spatialReference){if(d.spatialReference.equals(a.spatialReference))return[2,void 0];q()}return[4,g.load(b)];case 2:k.sent();h.throwIfAborted(b);e=(g.get("supportedSpatialReferences")||[g.get("tileInfo.spatialReference")]).filter(Boolean);if(0===e.length)return[2,void 0];e.every(function(a){return!d.spatialReference.equals(a)})&&q();return[2,void 0]}})})}});