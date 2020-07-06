// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/accessorSupport/decorators ../../../../layers/graphics/dehydratedFeatures ../../../../tasks/operations/query".split(" "),function(n,e,f,d,g,c,h,k){Object.defineProperty(e,"__esModule",{value:!0});var l=function(b){function a(){return null!==b&&b.apply(this,arguments)||this}f(a,b);Object.defineProperty(a.prototype,"queryFeaturesDehydrated",{get:function(){var a=
this,b=this.layer.capabilities;if((b=b&&b.query)&&b.supportsFormatPBF){var c={type:"dehydrated",sourceSpatialReference:this.layer.spatialReference?this.layer.spatialReference.toJSON():null,applyTransform:!0,useWorker:!0,maxStringAttributeLength:1024};return function(b,d){return k.executeQueryPBF(a.layer.parsedUrl,b,c,d).then(function(a){return a.data})}}return function(b,c){return k.executeQuery(a.layer.parsedUrl,b,a.layer.spatialReference,c).then(function(a){return h.fromFeatureSetJSON(a.data)})}},
enumerable:!0,configurable:!0});a.prototype.queryFeatureCount=function(a,b){return this.layer.queryFeatureCount(a,b)};d([c.property({constructOnly:!0})],a.prototype,"layer",void 0);d([c.property({readOnly:!0,dependsOn:["layer.capabilities.query.supportsFormatPBF"]})],a.prototype,"queryFeaturesDehydrated",null);return a=d([c.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],a)}(c.declared(g)),m=function(b){function a(){return null!==b&&b.apply(this,arguments)||
this}f(a,b);a.prototype.queryFeaturesDehydrated=function(a,b){var c=this;return this.source.queryFeaturesJSON(a,b).then(h.fromFeatureSetJSON,function(d){if(d&&"query-features-json:unsupported"===d.name)return c.source.queryFeatures(a,b);throw d;})};a.prototype.queryFeatureCount=function(a,b){return this.layer.queryFeatureCount(a,b)};d([c.property({constructOnly:!0})],a.prototype,"layer",void 0);d([c.aliasOf("layer.source")],a.prototype,"source",void 0);return a=d([c.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],
a)}(c.declared(g));e.createFeatureTileQuery3D=function(b){switch(b.source.type){case "feature-layer":return new l({layer:b});case "memory":case "csv":case "geojson":return new m({layer:b});case "stream-layer":throw Error("Tile based queries unsupported for stream sources");}}});