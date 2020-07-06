// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/tsSupport/assignHelper ../../request ../../core/promiseUtils ../../core/urlUtils ../../core/accessorSupport/decorators ../../geometry/Extent ../../geometry/SpatialReference ../support/commonProperties".split(" "),function(v,f,l,c,g,k,w,m,n,p,e,q,r,t){Object.defineProperty(f,"__esModule",{value:!0});f.ArcGISMapService=
function(f){return function(f){function a(){var d=null!==f&&f.apply(this,arguments)||this;d.capabilities=void 0;d.copyright=null;d.fullExtent=null;d.legendEnabled=!0;d.spatialReference=null;d.version=null;return d}l(a,f);a.prototype.readCapabilities=function(d,b){var a=b.capabilities&&b.capabilities.split(",").map(function(a){return a.toLowerCase().trim()});if(!a)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};d=
this.type;var e=-1!==a.indexOf("query"),c=-1!==a.indexOf("map"),f=!!b.exportTilesAllowed,a=-1!==a.indexOf("tilemap"),h="tile"!==d&&!!b.supportsDynamicLayers,u="tile"!==d&&(!b.tileInfo||h),g="tile"!==d&&(!b.tileInfo||h);return{operations:{supportsQuery:e,supportsExportMap:c,supportsExportTiles:f,supportsTileMap:a},exportMap:c?{supportsSublayersChanges:"tile"!==d,supportsDynamicLayers:h,supportsSublayerVisibility:u,supportsSublayerDefinitionExpression:g}:null,exportTiles:f?{maxExportTilesCount:+b.maxExportTilesCount}:
null}};a.prototype.readVersion=function(a,b){(a=b.currentVersion)||(a=b.hasOwnProperty("capabilities")||b.hasOwnProperty("tables")?10:b.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3);return a};a.prototype.fetchSublayerInfo=function(a,b){return k(this,void 0,void 0,function(){return g(this,function(d){switch(d.label){case 0:return[4,this.fetchAllLayersAndTables(b)];case 1:return d.sent(),[2,this._allLayersAndTablesMap.get(a)]}})})};a.prototype.fetchAllLayersAndTables=function(a){return k(this,
void 0,void 0,function(){var b,d=this;return g(this,function(c){switch(c.label){case 0:return[4,this.load(a)];case 1:return c.sent(),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=m(p.urlToObject(this.url).path+"/layers",{responseType:"json",query:{f:"json"}}).then(function(a){d._allLayersAndTablesMap=new Map;for(var b=0,c=a.data.layers;b<c.length;b++){var e=c[b];d._allLayersAndTablesMap.set(e.id,e)}return{result:a.data}},function(a){return{error:a}})),[4,this._allLayersAndTablesPromise];
case 2:b=c.sent();n.throwIfAborted(a);if("result"in b)return[2,b.result];throw b.error;}})})};c([e.property({readOnly:!0})],a.prototype,"capabilities",void 0);c([e.reader("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],a.prototype,"readCapabilities",null);c([e.property({json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0);c([e.property({type:q})],a.prototype,"fullExtent",void 0);c([e.property({json:{origins:{service:{read:!1},
"portal-item":{read:!1}}}})],a.prototype,"id",void 0);c([e.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],a.prototype,"legendEnabled",void 0);c([e.property(t.popupEnabled)],a.prototype,"popupEnabled",void 0);c([e.property({type:r})],a.prototype,"spatialReference",void 0);c([e.property()],a.prototype,"version",void 0);c([e.reader("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],a.prototype,
"readVersion",null);return a=c([e.subclass("esri.layers.mixins.ArcGISMapService")],a)}(e.declared(f))}});