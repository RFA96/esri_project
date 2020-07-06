// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Error ../../core/promiseUtils ../../core/accessorSupport/decorators ../../core/accessorSupport/read ../../core/accessorSupport/write ../support/commonProperties".split(" "),function(b,g,k,f,h,a,e,l,m,n){Object.defineProperty(g,"__esModule",{value:!0});g.OperationalLayer=function(c){return function(c){function a(){var a=null!==c&&c.apply(this,arguments)||this;a.title="Layer";return a}k(a,
c);a.prototype.writeListMode=function(c,a,b,d){d&&"ground"===d.layerContainerType?a[b]=c:c&&m.willPropertyWrite(this,b,{},d)&&(a[b]=c)};a.prototype.writeTitle=function(c,a){a.title=c||"Layer"};a.prototype.writeOperationalLayerType=function(c,a){c&&(a.layerType=c)};a.prototype.read=function(c,a){var b=this,d=arguments;a&&(a.layer=this);l.readLoadable(this,c,function(a){return b.inherited(d,[c,a])},a)};a.prototype.write=function(c,a){if(a&&a.origin){var b=a.origin+"/"+(a.layerContainerType||"operational-layers"),
d=g.supportedTypes[b],d=d&&d[this.operationalLayerType];if("write"!==d&&"readwrite"!==d)return a.messages&&a.messages.push(new h("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' are not supported in the context of '"+b+"'",{layer:this})),null}b=this.inherited(arguments,[c,a]);d=!!a&&!!a.messages&&!!a.messages.filter(function(a){return a instanceof h&&"web-document-write:property-required"===a.name}).length;return!this.url&&d?null:b};f([e.property({type:String,
json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}}}}})],a.prototype,"id",void 0);f([e.property({json:{write:{ignoreOrigin:!0}}})],a.prototype,"listMode",void 0);f([e.writer("listMode")],a.prototype,"writeListMode",null);f([e.property({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}}}}})],a.prototype,"title",void 0);f([e.writer("title")],a.prototype,"writeTitle",null);f([e.property({type:String,
readOnly:!0,json:{write:{target:"layerType",ignoreOrigin:!0}}})],a.prototype,"operationalLayerType",void 0);f([e.writer("operationalLayerType")],a.prototype,"writeOperationalLayerType",null);f([e.property(n.opacity)],a.prototype,"opacity",void 0);f([e.property({type:Boolean,json:{read:{source:"visibility"},write:{target:"visibility"},origins:{"web-document":{read:{source:"visibility"},write:{target:"visibility"},default:!0}}}})],a.prototype,"visible",void 0);return a=f([e.subclass("esri.layers.mixins.OperationalLayer")],
a)}(e.declared(c))};g.typeModuleMap={ArcGISFeatureLayer:function(){return a.create(function(a){return b(["../FeatureLayer"],a)})},ArcGISImageServiceLayer:function(){return a.create(function(a){return b(["../ImageryLayer"],a)})},ArcGISImageServiceVectorLayer:function(){return a.resolve(null)},ArcGISMapServiceLayer:function(){return a.create(function(a){return b(["../MapImageLayer"],a)})},ArcGISSceneServiceLayer:function(){return a.create(function(a){return b(["../SceneLayer"],a)})},ArcGISStreamLayer:function(){return a.create(function(a){return b(["../StreamLayer"],
a)})},ArcGISTiledElevationServiceLayer:function(){return a.create(function(a){return b(["../ElevationLayer"],a)})},ArcGISTiledImageServiceLayer:function(){return a.create(function(a){return b(["../TileLayer"],a)})},ArcGISTiledMapServiceLayer:function(){return a.create(function(a){return b(["../TileLayer"],a)})},BingMapsAerial:function(){return a.create(function(a){return b(["../BingMapsLayer"],a)})},BingMapsRoad:function(){return a.create(function(a){return b(["../BingMapsLayer"],a)})},BingMapsHybrid:function(){return a.create(function(a){return b(["../BingMapsLayer"],
a)})},BuildingSceneLayer:function(){return a.create(function(a){return b(["../BuildingSceneLayer"],a)})},CSV:function(){return a.create(function(a){return b(["../CSVLayer"],a)})},GeoRSS:function(){return a.create(function(a){return b(["../GeoRSSLayer"],a)})},GroupLayer:function(){return a.create(function(a){return b(["../GroupLayer"],a)})},IntegratedMeshLayer:function(){return a.create(function(a){return b(["../IntegratedMeshLayer"],a)})},KML:function(){return a.create(function(a){return b(["../KMLLayer"],
a)})},OpenStreetMap:function(){return a.create(function(a){return b(["../OpenStreetMapLayer"],a)})},PointCloudLayer:function(){return a.create(function(a){return b(["../PointCloudLayer"],a)})},VectorTileLayer:function(){return a.create(function(a){return b(["../VectorTileLayer"],a)})},WebTiledLayer:function(){return a.create(function(a){return b(["../WebTileLayer"],a)})},WFS:function(){return a.resolve(null)},WMS:function(){return a.create(function(a){return b(["../WMSLayer"],a)})},RasterDataLayer:function(){return a.resolve(null)},
RasterDataElevationLayer:function(){return a.resolve(null)}};g.supportedTypes={"web-scene/operational-layers":{ArcGISFeatureLayer:"readwrite",ArcGISImageServiceLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISSceneServiceLayer:"readwrite",ArcGISTiledElevationServiceLayer:"read",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",BuildingSceneLayer:"readwrite",GroupLayer:"readwrite",IntegratedMeshLayer:"readwrite",PointCloudLayer:"readwrite",WebTiledLayer:"readwrite",
CSV:"readwrite",VectorTileLayer:"readwrite",WMS:"readwrite",KML:"readwrite",RasterDataLayer:"readwrite"},"web-scene/basemap":{ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",WebTiledLayer:"readwrite",OpenStreetMap:"readwrite",VectorTileLayer:"readwrite",ArcGISImageServiceLayer:"readwrite",WMS:"readwrite",ArcGISMapServiceLayer:"readwrite"},"web-scene/ground":{ArcGISTiledElevationServiceLayer:"readwrite",RasterDataElevationLayer:"readwrite"},"web-map/operational-layers":{ArcGISImageServiceLayer:"readwrite",
ArcGISImageServiceVectorLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISStreamLayer:"readwrite",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",ArcGISFeatureLayer:"readwrite",BingMapsAerial:"readwrite",BingMapsRoad:"readwrite",BingMapsHybrid:"readwrite",CSV:"readwrite",GeoRSS:"readwrite",KML:"readwrite",VectorTileLayer:"readwrite",WFS:"readwrite",WMS:"readwrite",WebTiledLayer:"readwrite"},"web-map/basemap":{ArcGISImageServiceLayer:"readwrite",ArcGISImageServiceVectorLayer:"readwrite",
ArcGISMapServiceLayer:"readwrite",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",OpenStreetMap:"readwrite",VectorTileLayer:"readwrite",WMS:"readwrite",WebTiledLayer:"readwrite",BingMapsAerial:"readwrite",BingMapsRoad:"readwrite",BingMapsHybrid:"readwrite"}}});