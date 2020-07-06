// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../geometry ../../Graphic ../../rasterRenderers ../../request ../../core/Error ../../core/jsonMap ../../core/lang ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/urlUtils ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ../support/commonProperties ../support/DimensionalDefinition ../support/ExportImageServiceParameters ../support/Field ../support/FieldsIndex ../support/imageryRendererUtils ../support/MosaicRule ../support/PixelBlock ../support/RasterFunction ../support/RasterInfo ../support/RasterJobHandler ../support/rasterFormats/RasterCodec ../../renderers/support/RasterSymbolizer ../../tasks/ImageServiceIdentifyTask ../../tasks/QueryTask ../../tasks/support/FeatureSet ../../tasks/support/ImageServiceIdentifyParameters ../../tasks/support/Query".split(" "),
function(qa,O,q,Z,e,F,A,r,aa,P,m,w,p,Q,ba,x,y,ca,c,da,R,ea,fa,B,ga,G,C,ha,E,H,ia,M,ja,ka,la,S,ma,na){function oa(c){return c?JSON.stringify(c).match(/"rasterFunction":"(.*?")/gi).map(function(c){return c.replace('"rasterFunction":"',"").replace('"',"")}).join("/"):null}Object.defineProperty(O,"__esModule",{value:!0});var pa=ba.getLogger("esri.layers.mixins.ArcGISImageService"),T=p.strict()({RSP_NearestNeighbor:"nearest",RSP_BilinearInterpolation:"bilinear",RSP_CubicConvolution:"cubic",RSP_Majority:"majority"}),
U=p.strict()({esriNoDataMatchAny:"any",esriNoDataMatchAll:"all"}),V=p.strict()({U1:"u1",U2:"u2",U4:"u4",U8:"u8",S8:"s8",U16:"u16",S16:"s16",U32:"u32",S32:"s32",F32:"f32",F64:"f64",C64:"c64",C128:"c128",UNKNOWN:"unknown"});O.ArcGISImageService=function(p){return function(p){function b(){var a=null!==p&&p.apply(this,arguments)||this;a._functionRasterInfos={};a._rasterJobHandler={instance:null,refCount:0,connectionPromise:null};a._symbolizer=null;a._defaultServiceMosaicRule=null;a.rasterAttributeTableFieldPrefix=
"Raster.";a.adjustAspectRatio=null;a.bandCount=null;a.bandIds=void 0;a.capabilities=null;a.compressionQuality=void 0;a.compressionTolerance=.01;a.copyright=null;a.definitionExpression=null;a.exportImageServiceParameters=null;a.rasterInfo=null;a.fields=null;a.fullExtent=null;a.hasMultidimensions=!1;a.imageMaxHeight=4100;a.imageMaxWidth=4100;a.interpolation=void 0;a.multidimensionalInfo=null;a.noData=null;a.noDataInterpretation=void 0;a.objectIdField=null;a.pixelSizeX=null;a.pixelSizeY=null;a.pixelFilter=
null;a.raster=void 0;a.viewId=void 0;a.renderer=null;a.rasterAttributeTable=null;a.rasterFunctionInfos=null;a.serviceDataType=null;a.spatialReference=null;a.pixelType=null;a.serviceRasterInfo=null;a.sourceJSON=null;a.url=null;a.version=null;return a}Z(b,p);b.prototype.initialize=function(){this._set("exportImageServiceParameters",new fa.ExportImageServiceParameters({layer:this}))};b.prototype.readDefaultServiceMosaicRule=function(a,d){return C.fromJSON(d)};Object.defineProperty(b.prototype,"rasterFunctionNamesIndex",
{get:function(){var a=new Map;if(!this.rasterFunctionInfos||1>this.rasterFunctionInfos.length)return a;this.rasterFunctionInfos.forEach(function(d){a.set(d.name.toLowerCase().replace(/ /gi,"_"),d.name)});return a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"queryTask",{get:function(){return new la({url:this.url})},enumerable:!0,configurable:!0});b.prototype.readCapabilities=function(a){return a&&a.split(",").map(function(a){return a.trim()})};b.prototype.writeCompressionQuality=
function(a,d,f){null!=a&&"lerc"!==this.format&&(d[f]=a)};b.prototype.writeCompressionTolerance=function(a,d,f){"lerc"===this.format&&null!=a&&(d[f]=a)};Object.defineProperty(b.prototype,"fieldsIndex",{get:function(){return this.fields?new ga(this.fields):null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"format",{get:function(){return this._get("format")||(null!=this.pixelFilter?"lerc":"jpgpng")},set:function(a){a&&-1<"png png8 png24 png32 jpg bmp jpgpng lerc tiff".split(" ").indexOf(a.toLowerCase())&&
this._set("format",a.toLowerCase())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"mosaicRule",{set:function(a){a&&a.mosaicMethod&&(a=C.fromJSON(q({},a.toJSON(),{mosaicMethod:a.mosaicMethod,mosaicOperation:a.mosaicOperation})));this._set("mosaicRule",a)},enumerable:!0,configurable:!0});b.prototype.readMosaicRule=function(a,d){return C.fromJSON(a||d.mosaicRule||d)};b.prototype.writeMosaicRule=function(a,d,f){a=this.mosaicRule;var b=this.definitionExpression;a?b&&b!==a.where&&(a=
a.clone(),a.where=b):b&&(a=new C({where:b}));this._isValidCustomizedMosaicRule(a)&&(d[f]=a.toJSON())};b.prototype.writeNoData=function(a,d,b){null!=a&&"number"===typeof a&&(d[b]=a)};b.prototype.readObjectIdField=function(a,d){a||(a=(a=d.fields.filter(function(a){return"esriFieldTypeOID"===a.type||"oid"===a.type}))&&a[0]&&a[0].name);return a};Object.defineProperty(b.prototype,"parsedUrl",{get:function(){return this.url?ca.urlToObject(this.url):null},enumerable:!0,configurable:!0});b.prototype.readRenderer=
function(a,d,b){a=P.read(d&&d.layerDefinition&&d.layerDefinition.drawingInfo&&d.layerDefinition.drawingInfo.renderer,b)||void 0;if(null!=a)return G.isSupportedRendererType(a)||pa.warn("ArcGISImageService","Imagery layer doesn't support given renderer type."),a};Object.defineProperty(b.prototype,"rasterFields",{get:function(){var a=this.rasterAttributeTableFieldPrefix||"Raster.",d=new B({name:"Raster.ItemPixelValue",alias:"Item Pixel Value",domain:null,editable:!1,length:50,type:"string"}),b=new B({name:"Raster.ServicePixelValue",
alias:"Service Pixel Value",domain:null,editable:!1,length:50,type:"string"}),g=new B({name:"Raster.ServicePixelValue.Raw",alias:"Raw Service Pixel Value",domain:null,editable:!1,length:50,type:"string"}),l=this.fields?Q.clone(this.fields):[];l.push(b);this.capabilities&&this.capabilities.some(function(a){return"catalog"===a.toLowerCase()})&&this.fields&&0<this.fields.length&&l.push(d);10.4<=this.version&&this.rasterFunctionInfos&&this.rasterFunctionInfos.some(function(a){return"none"===a.name.toLowerCase()})&&
l.push(g);this.rasterFunctionInfos&&this.rasterFunctionInfos.filter(function(a){return"none"!==a.name.toLowerCase()}).forEach(function(a){l.push(new B({name:"Raster.ServicePixelValue."+a.name,alias:a.name,domain:null,editable:!1,length:50,type:"string"}))});null==this.pixelFilter||"esriImageServiceDataTypeVector-UV"!==this.serviceDataType&&"esriImageServiceDataTypeVector-MagDir"!==this.serviceDataType||(l.push(new B({name:"Raster.Magnitude",alias:"Magnitude",domain:null,editable:!1,type:"double"})),
l.push(new B({name:"Raster.Direction",alias:"Direction",domain:null,editable:!1,type:"double"})));(d=this.rasterInfo.attributeTable&&this.rasterInfo.attributeTable.fields||null)&&0<d.length&&(d=d.filter(function(a){return"esriFieldTypeOID"!==a.type&&"value"!==a.name.toLowerCase()}).map(function(d){var b=Q.clone(d);b.name=a+d.name;return b}),l=l.concat(d));return l},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"renderingRule",{set:function(a){a&&a.rasterFunction&&(a=E.fromJSON(q({},
a.toJSON(),{rasterFunction:a.rasterFunction,rasterFunctionArguments:a.rasterFunctionArguments})));this._set("renderingRule",a)},enumerable:!0,configurable:!0});b.prototype.readRenderingRule=function(a,d){a=d.rasterFunctionInfos;return d.renderingRule||a&&a.length&&"None"!==a[0].name?E.fromJSON(d.renderingRule||{rasterFunctionInfos:d.rasterFunctionInfos}):null};b.prototype.writeRenderingRule=function(a,d,b){this._isRFTJson(a)||(d[b]=a.toJSON())};b.prototype.readSpatialReference=function(a,d){return(a=
a||d.extent.spatialReference)?r.SpatialReference.fromJSON(a):null};b.prototype.readPixelType=function(a){return V.fromJSON(a)||a};b.prototype.writePixelType=function(a,d,b){if(x.isNone(this.serviceRasterInfo)||this.pixelType!==this.serviceRasterInfo.pixelType)d[b]=V.toJSON(a)};b.prototype.readVersion=function(a,d){(a=d.currentVersion)||(a=d.hasOwnProperty("fields")||d.hasOwnProperty("timeInfo")?10:9.3);return a};b.prototype.applyFilter=function(a){var d=a;this.pixelFilter&&(d=this._clonePixelData(a),
this.pixelFilter(d));return d};b.prototype.applyRenderer=function(a,d){return A(this,void 0,void 0,function(){var b,g,l,c;return F(this,function(f){switch(f.label){case 0:b=a;if(this._isPicture()||!this.renderer||!this._symbolizer||this.pixelFilter)return[3,5];g=JSON.stringify(this._cachedRendererJson)!==JSON.stringify(this.renderer.toJSON());l=this._rasterJobHandler.instance;if(!l)return[3,4];if(!g)return[3,2];this._symbolizer.bind();return[4,l.updateSymbolizer(this._symbolizer,d)];case 1:f.sent(),
this._cachedRendererJson=this.renderer.toJSON(),f.label=2;case 2:return[4,l.symbolize(a.pixelBlock,d)];case 3:return c=f.sent(),b={extent:a.extent,pixelBlock:c},[3,5];case 4:b={extent:a.extent,pixelBlock:this._symbolizer.symbolize(a.pixelBlock)},f.label=5;case 5:return[2,b]}})})};b.prototype.destroy=function(){this._shutdownJobHandler()};b.prototype.increaseRasterJobHandlerUsage=function(){this._rasterJobHandler.refCount++};b.prototype.decreaseRasterJobHandlerUsage=function(){this._rasterJobHandler.refCount--;
0>=this._rasterJobHandler.refCount&&this._shutdownJobHandler()};b.prototype.fetchImage=function(a,d,b,g){var f=this;void 0===g&&(g={});if(null==a||null==d||null==b)return y.reject(new w("imagery-layer:fetch-image","Insufficient parameters for requesting an image. A valid extent, width and height values are required."));var c=this.renderer||this._symbolizer?this.generateRasterInfo(this.renderingRule,{signal:g.signal}):null;return y.when(c).then(function(l){l&&(f.rasterInfo=l);l={imageServiceParameters:f.getExportImageServiceParameters(a,
d,b,g.timeExtent),imageProps:{extent:a,width:d,height:b,format:f.format},requestAsImageElement:g.requestAsImageElement&&!f.pixelFilter||!1,signal:g.signal};return f._requestArrayBuffer(l)})};b.prototype.fetchKeyProperties=function(a){a=a&&a.renderingRule&&a.renderingRule.toJSON();return m(this.parsedUrl.path+"/keyProperties",{query:this._getQueryParams({renderingRule:10.3<=this.version&&a?JSON.stringify(a):null})}).then(function(a){return a.data})};b.prototype.fetchRasterAttributeTable=function(a){a=
a&&a.renderingRule&&a.renderingRule.toJSON();return 10.1>this.version?y.reject(new w("#fetchRasterAttributeTable()","Failed to get rasterAttributeTable")):m(this.parsedUrl.path+"/rasterAttributeTable",{query:this._getQueryParams({renderingRule:10.3<=this.version&&a?JSON.stringify(a):null})}).then(function(a){return S.fromJSON(a.data)})};b.prototype.getCatalogItemRasterInfo=function(a,d){return A(this,void 0,void 0,function(){var b,g,l,c,h;return F(this,function(f){switch(f.label){case 0:return b=
m(this.parsedUrl.path+"/"+a+"/info",q({query:this._getQueryParams(),responseType:"json"},d)).then(function(a){return a.data}),g=m(this.parsedUrl.path+"/"+a+"/info/keyProperties",q({query:this._getQueryParams(),responseType:"json"},d)).then(function(a){return a.data}).catch(function(){}),[4,y.all([b,g])];case 1:l=f.sent();if(!l[0])return[2,void 0];c=r.Extent.fromJSON(l[0].extent);h=l[0].statistics?l[0].statistics.map(function(a){return{min:a[0],max:a[1],avg:a[2],stddev:a[3]}}):null;return[2,new H({bandCount:l[0].bandCount,
extent:c,spatialReference:c.sr,pixelSize:new r.Point({x:l[0].pixelSizeX,y:l[0].pixelSizeY,spatialReference:c.sr}),pixelType:l[0].pixelType.toLowerCase(),statistics:h,histograms:l[0].histograms,keyProperties:l[1]})]}})})};b.prototype.getCatalogItemICSInfo=function(a,d){return A(this,void 0,void 0,function(){var b,g,l,c,h,e,t,n,W,u,X,N,v,Y,p,I,L,x,A,z,w,K,B,C,E,D,J,G,H;return F(this,function(f){switch(f.label){case 0:return[4,m(this.parsedUrl.path+"/"+a+"/info/ics",q({query:this._getQueryParams(),responseType:"json"},
d))];case 1:g=(b=f.sent().data)&&b.ics;if(!g)return[2,void 0];l=10.7<=this.version?m(this.parsedUrl.path+"/"+a+"/info/icstopixel",q({query:this._getQueryParams(),responseType:"json"},d)).then(function(a){return a.data}).catch(function(){return{}}):{};c=g.extent.spatialReference;if(!c)for(h in g.geodataXform)g.geodataXform[h].spatialReference&&(c=g.geodataXform[h].spatialReference);e={geometries:JSON.stringify({geometryType:"esriGeometryEnvelope",geometries:[g.extent]}),inSR:c.wkid||c,outSR:"0:"+a};
t=m(this.parsedUrl.path+"/project",q({query:this._getQueryParams(e),responseType:"json"},d)).then(function(a){return a.data});n=5;W=(g.extent.xmin+g.extent.xmax)/2;u=(g.extent.ymax-g.extent.ymin)/(n+1);X=g.extent.ymin+u;N=[];for(v=0;v<n;v++)N.push({x:W,y:X+u*v});Y={geometries:JSON.stringify({geometryType:"esriGeometryPoint",geometries:N}),inSR:c.wkid||c,outSR:"0:"+a};p=m(this.parsedUrl.path+"/project",q({query:this._getQueryParams(Y),responseType:"json"},d)).then(function(a){return a.data});return[4,
y.all([l,t,p])];case 2:I=f.sent();L=I[0].ipxf;null==L&&(x=g.geodataXform&&g.geodataXform.xf_0)&&"topup"===x.name.toLowerCase()&&(L={affine:{name:"ics [sensor: Frame] to pixel (column, row) transformation",coefficients:x.coefficients,cellsizeRatio:0,type:"GeometricXform"}});if(A=r.Extent.fromJSON(I[1]&&I[1].geometries&&I[1].geometries[0]))A.spatialReference=new r.SpatialReference({wkid:0,imageCoordinateSystem:g});z=I[2].geometries.filter(function(a){return null!=a});w=z.length;for(v=E=C=B=K=0;v<w;v++)K+=
z[v].x,B+=z[v].y,C+=z[v].x*z[v].x,E+=z[v].x*z[v].y;D=(w*E-K*B)/(w*C-K*K);J=0;G=z[n-1].x>z[0].x;H=z[n-1].y>z[0].y;Infinity===D?J=H?90:270:0===D?J=G?0:180:0<D?J=G?180*Math.atan(D)/Math.PI:180*Math.atan(D)/Math.PI+180:0>D&&(J=H?180+180*Math.atan(D)/Math.PI:360+180*Math.atan(D)/Math.PI);return[2,{ics:g,icsToPixelTransform:L,icsExtent:A,northDirection:J}]}})})};b.prototype.generateRasterInfo=function(a,d){return A(this,void 0,void 0,function(){var b,g;return F(this,function(f){switch(f.label){case 0:if((!a||
"none"===a.functionName.toLowerCase())&&x.isSome(this.serviceRasterInfo))return[2,this.serviceRasterInfo];b=oa(a);if(this._functionRasterInfos[b])return[2,this._functionRasterInfos[b]];g=this._generateRasterInfo(a,d);this._functionRasterInfos[b]=g;f.label=1;case 1:return f.trys.push([1,3,,4]),[4,g];case 2:return[2,f.sent()];case 3:return f.sent(),this._functionRasterInfos[b]=null,[2,null];case 4:return[2]}})})};b.prototype.getExportImageServiceParameters=function(a,d,b,g){a=a.clone().shiftCentralMeridian();
var f=a.spatialReference;if(f.imageCoordinateSystem)var c=f.imageCoordinateSystem,h=c.id,c=c.referenceServiceName,f=null!=h?c?-1<this.parsedUrl.path.toLowerCase().indexOf("/"+c.toLowerCase()+"/")?"0:"+h:JSON.stringify({icsid:h,icsns:c}):"0:"+h:JSON.stringify({ics:f.imageCoordinateSystem});else f=f.wkid||JSON.stringify(f.toJSON());x.isSome(this.serviceRasterInfo)&&this.pixelType!==this.serviceRasterInfo.pixelType&&(this.exportImageServiceParameters.pixelType=this.pixelType);var h=this.exportImageServiceParameters.toJSON(),
c=h.bandIds,e=h.noData,t=h.mosaicRule,n=h.renderingRule;c instanceof Array&&0<c.length&&(h.bandIds=c.join(","));e instanceof Array&&0<e.length&&(h.noData=e.join(","));var m=this.timeInfo;t&&t.multidimensionalDefinition&&g&&m&&m.startField&&(t.multidimensionalDefinition=t.multidimensionalDefinition.filter(function(a){return a.dimensionName!==m.startField}));h.mosaicRule=t&&JSON.stringify(t);h.renderingRule=n&&JSON.stringify(n);c={};if(g)if(e=g.toJSON(),g=e.start,e=e.end,g&&e&&g===e)c.time=""+g;else if(null!=
g||null!=e)c.time=(null==g?"null":g)+","+(null==e?"null":e);return q({bbox:a.xmin+","+a.ymin+","+a.xmax+","+a.ymax,bboxSR:f,imageSR:f,size:d+","+b},h,c)};b.prototype.queryRasters=function(a){return this.queryTask.execute(a)};b.prototype.queryVisibleRasters=function(a,d){var b=this;if(!a)return y.reject(new w("imagery-layer: query-visible-rasters","missing query parameter"));var g=d||{pixelSize:null,returnDomainValues:!1,returnTopmostRaster:!1,showNoDataRecords:!1};d=g.pixelSize;var c=g.returnDomainValues,
e=g.returnTopmostRaster,h=g.showNoDataRecords,k=!1,t=g=null,n=this.rasterFunctionNamesIndex;if(a.outFields&&10.4<=this.version){var m=a.outFields.filter(function(a){return-1<a.toLowerCase().indexOf("raster.servicepixelvalue")&&24<a.length}).map(function(a){a=a.slice(25);return[b._updateRenderingRulesFunctionName(a,n),a]}),g=m.map(function(a){return new E({functionName:a[0]})}),t=m.map(function(a){return a[1]}),k=a.outFields.some(function(a){return-1===a.toLowerCase().indexOf("raster.servicepixelvalue")});
0===g.length?this.renderingRule?(g.push(this.renderingRule),t.push(this.renderingRule.functionName)):g=null:this.renderingRule&&!g.some(function(a){return a.functionName===b.renderingRule.functionName})&&(g.push(this.renderingRule),t.push(this.renderingRule.functionName))}var u=!a.outSpatialReference||a.outSpatialReference.equals(this.spatialReference);d=this._getQueryParams({geometry:a.geometry,timeExtent:a.timeExtent,mosaicRule:this.exportImageServiceParameters.mosaicRule,renderingRule:10.4>this.version?
this.renderingRule:null,renderingRules:g,pixelSize:d,returnCatalogItems:k,returnGeometry:u,maxItemCount:e?1:null});delete d.f;var q=new ma(d),p=new ka({url:this.url}),v=this.generateRasterInfo(this.renderingRule);return y.create(function(d){v.then(function(){p.execute(q).then(function(f){var g=a.outFields;if(k&&!u&&f.catalogItems&&f.catalogItems.features&&0<f.catalogItems.features.length){var e=b.objectIdField||"ObjectId",l=f.catalogItems.features,n=l.map(function(a){return a.attributes&&a.attributes[e]}),
n=new na({objectIds:n,returnGeometry:!0,outSpatialReference:a.outSpatialReference,outFields:[e]});return b.queryRasters(n).then(function(k){k&&k.features&&0<k.features.length&&k.features.forEach(function(d){l.forEach(function(b){b.attributes[e]===d.attributes[e]&&(b.geometry=new r.Polygon(d.geometry),b.geometry.spatialReference=a.outSpatialReference)})});d(b._processVisibleRastersResponse(f,{returnDomainValues:c,templateRRFunctionNames:t,showNoDataRecords:h,templateFields:g}))}).catch(function(){throw new w("imagery-layer:query-visible-rasters",
"encountered error when querying visible rasters geometry");})}d(b._processVisibleRastersResponse(f,{returnDomainValues:c,templateRRFunctionNames:t,showNoDataRecords:h,templateFields:g}))}).catch(function(){throw new w("imagery-layer:query-visible-rasters","encountered error when querying visible rasters");})})})};b.prototype._fetchService=function(a){return A(this,void 0,void 0,function(){var b,f,g,c,e,h,k=this;return F(this,function(d){switch(d.label){case 0:return(b=this.sourceJSON)?[3,2]:[4,m(this.parsedUrl.path,
{query:this._getQueryParams(),responseType:"json",signal:a})];case 1:f=d.sent(),g=f.data,c=f.ssl,this.sourceJSON=b=g,c&&(this.url=this.url.replace(/^http:/i,"https:")),d.label=2;case 2:return this.read(b,{origin:"service",url:this.parsedUrl}),x.isSome(this.serviceRasterInfo)&&!this.rasterInfo&&(this.rasterInfo=this.serviceRasterInfo),e=x.isSome(this.serviceRasterInfo)?y.resolve(this.serviceRasterInfo):this._fetchAuxiliaryRasterInfo({serviceInfo:b,signal:a}).then(function(a){k._set("serviceRasterInfo",
a);return a}),h=this.renderingRule&&"none"!==this.renderingRule.functionName.toLowerCase()?this.generateRasterInfo(this.renderingRule,{signal:a}):null,[2,y.all([e,h]).then(function(a){a[1]?k._set("rasterInfo",a[1]):k._set("rasterInfo",a[0]);k._configDefaultRenderer();k.watch("renderer",function(){return k._configDefaultRenderer()});k.watch("renderingRule",function(a){(k.renderer||k._symbolizer||k.popupEnabled&&k.popupTemplate)&&k.generateRasterInfo(a).then(function(a){a&&(k.rasterInfo=a)})});(a=x.isSome(k.serviceRasterInfo)&&
k.serviceRasterInfo.multidimensionalInfo)&&k._updateMultidimensionalDefinition(a)})]}})})};b.prototype._initJobHandler=function(){return A(this,void 0,void 0,function(){var a,b=this;return F(this,function(d){switch(d.label){case 0:if(null!=this._rasterJobHandler.connectionPromise)return[2,this._rasterJobHandler.connectionPromise];a=new ia;this._rasterJobHandler.connectionPromise=a.initialize().then(function(){b._rasterJobHandler.instance=a},function(){return null});return[4,this._rasterJobHandler.connectionPromise];
case 1:return d.sent(),[2]}})})};b.prototype._shutdownJobHandler=function(){this._rasterJobHandler.instance&&this._rasterJobHandler.instance.destroy();this._rasterJobHandler.instance=null;this._rasterJobHandler.connectionPromise=null;this._rasterJobHandler.refCount=0};b.prototype._isPicture=function(){return!this.format||-1<this.format.indexOf("jpg")||-1<this.format.indexOf("png")};b.prototype._configDefaultRenderer=function(){if(!this._isPicture()&&!this.pixelFilter){if(!this.bandIds&&3<=this.rasterInfo.bandCount){var a=
G.getDefaultBandCombination(this.rasterInfo);!a||3===this.rasterInfo.bandCount&&0===a[0]&&1===a[1]&&2===a[2]||(this.bandIds=a)}this.renderer||(this.renderer=G.createDefaultRenderer(this.rasterInfo,this.bandIds));this._symbolizer?(this._symbolizer.renderer=this.renderer,this._symbolizer.rasterInfo=this.rasterInfo):this._symbolizer=new ja({renderer:this.renderer,rasterInfo:this.rasterInfo});this._symbolizer.bind()||(this._symbolizer=null)}};b.prototype._clonePixelData=function(a){return null==a?a:{extent:a.extent&&
a.extent.clone(),pixelBlock:a.pixelBlock&&a.pixelBlock.clone()}};b.prototype._getQueryParams=function(a){return q({raster:this.raster,viewId:this.viewId,f:"json"},a)};b.prototype._decodePixelBlock=function(a,b,f){return this._rasterJobHandler.instance?this._rasterJobHandler.instance.decode({data:a,options:b}):M.decode(a,b,f)};b.prototype._fetchAuxiliaryRasterInfo=function(a){var b=a&&a.serviceInfo;if(!b)return y.reject(new w("imagery-layer:fetch-metadata","valid serviceInfo is required"));var f=a.renderingRule?
JSON.stringify(a.renderingRule.toJSON()):null,g=a.signal;a=b.hasRasterAttributeTable&&10.1<=this.version?m(this.parsedUrl.path+"/rasterAttributeTable",{query:this._getQueryParams({renderingRule:10.1<=this.version?f:null}),signal:g}).then(function(a){return S.fromJSON(a.data)}).catch(function(){return null}):!1;var c=b.hasColormap&&10.1<=this.version?m(this.parsedUrl.path+"/colormap",{query:this._getQueryParams({renderingRule:10.6<=this.version?f:null}),signal:g}).then(function(a){return a.data&&a.data.colormap}):
!1,e=b.hasHistograms&&10.1<=this.version?m(this.parsedUrl.path+"/histograms",{query:this._getQueryParams({renderingRule:10.1<=this.version?f:null}),signal:g}).then(function(a){return a.data&&a.data.histograms}):!1,f=10.3<=this.version?m(this.parsedUrl.path+"/keyProperties",{query:this._getQueryParams({renderingRule:f}),signal:g}).then(function(a){return a.data}).catch(function(){}):!1,g=b.hasMultidimensions&&10.3<=this.version?m(this.parsedUrl.path+"/multidimensionalInfo",{query:this._getQueryParams(),
signal:g}).then(function(a){return a.data&&a.data.multidimensionalInfo}):!1;return y.all([a,c,e,f,g]).then(function(a){var d=null;if(b.minValues&&b.minValues.length===b.bandCount)for(var d=[],f=0;f<b.minValues.length;f++)d.push({min:b.minValues[f],max:b.maxValues[f],avg:b.meanValues[f],stddev:b.stdvValues[f]});var f=Math.ceil((b.extent.xmax-b.extent.xmin)/b.pixelSizeX-.1),g=Math.ceil((b.extent.ymax-b.extent.ymin)/b.pixelSizeY-.1),c=r.SpatialReference.fromJSON(b.spatialReference||b.extent.spatialReference);
return new H({width:f,height:g,bandCount:b.bandCount,extent:r.Extent.fromJSON(b.extent),spatialReference:c,pixelSize:new r.Point({x:b.pixelSizeX,y:b.pixelSizeY,spatialReference:c}),pixelType:b.pixelType.toLowerCase(),statistics:d,attributeTable:a[0]||null,colormap:a[1]||null,histograms:a[2]||null,keyProperties:a[3]||null,multidimensionalInfo:a[4]||null})})};b.prototype._requestArrayBuffer=function(a){var b=this,f=a.imageProps,g=a.signal;if(a.requestAsImageElement&&!this.pixelFilter&&f.format&&-1<
f.format.indexOf("png"))return m(this.parsedUrl.path+"/exportImage",{responseType:"image",query:this._getQueryParams(q({f:"image"},a.imageServiceParameters)),signal:g}).then(function(a){return{imageElement:a.data,params:f}});var c=this._initJobHandler();a=m(this.parsedUrl.path+"/exportImage",{responseType:"array-buffer",query:this._getQueryParams(q({f:"image"},a.imageServiceParameters)),signal:g});return y.all([a,c]).then(function(a){a=a[0].data;var d=f.format||"jpgpng",c=d;"bsq"!==c&&"bip"!==c&&
(c=M.getFormat(a));if(!c)throw new w("imagery-layer:fetch-image","unsupported format signature "+String.fromCharCode.apply(null,new Uint8Array(a)));var c=-1<d.indexOf("png")&&("png"===c||"jpg"===c),e={signal:g};return c?M.decode(a,q({useCanvas:!0},f),e).then(function(a){return{pixelData:{pixelBlock:a,extent:f.extent},params:f}}):b._decodePixelBlock(a,{width:f.width,height:f.height,planes:null,pixelType:null,noDataValue:null,format:d},e).then(function(a){return{pixelData:{pixelBlock:a,extent:f.extent},
params:f}})})};b.prototype._generateRasterInfo=function(a,b){return A(this,void 0,void 0,function(){var d,c;return F(this,function(f){switch(f.label){case 0:return[4,m(this.parsedUrl.path,q({query:this._getQueryParams({renderingRule:a}),responseType:"json"},b))];case 1:return d=f.sent().data,[4,this._fetchAuxiliaryRasterInfo(q({serviceInfo:d,renderingRule:a},b))];case 2:return c=f.sent(),[2,c]}})})};b.prototype._isValidCustomizedMosaicRule=function(a){return a&&JSON.stringify(a.toJSON())!==JSON.stringify(this._defaultServiceMosaicRule&&
this._defaultServiceMosaicRule.toJSON())};b.prototype._updateMultidimensionalDefinition=function(a){if(!this._isValidCustomizedMosaicRule(this.mosaicRule)){var b=a.variables[0].dimensions;a=[];for(var f in b)if(b.hasOwnProperty(f)){var c=b[f],e=c.extent,m=!0,h=[e[0]];c.hasRanges&&!0===c.hasRanges?(m=!1,h=[c.values[0]]):"stdz"===c.name.toLowerCase()&&Math.abs(e[1])<=Math.abs(e[0])&&(h=[e[1]]);a.push(new ea({variableName:"",dimensionName:b[f].name,isSlice:m,values:h}))}0<a.length&&(this.mosaicRule=
this.mosaicRule||new C,f=this.mosaicRule.multidimensionalDefinition,!f||f&&0>=f.length)&&(this.mosaicRule.multidimensionalDefinition=a)}};b.prototype._formatAttributeValue=function(a,b){if("string"===typeof a&&(b=(b=this._getFieldInfo(this.popupTemplate&&this.popupTemplate.fieldInfos,b))&&b.format)){var d=void 0,c=void 0;return-1<a.trim().indexOf(",")?(d=",",this._formatDelimitedString(a,d,d+" ",b)):-1<a.trim().indexOf(" ")?(d=c=" ",this._formatDelimitedString(a,d,c,b)):this._formatNumberFromString(a,
b)}return a};b.prototype._getFieldInfo=function(a,b){if(a&&a.length&&b){var d=b.toLowerCase(),c=void 0;a.some(function(a){return!a.fieldName||a.fieldName.toLowerCase()!==d&&a.fieldName.toLowerCase()!==d.replace(/ /g,"_")?!1:(c=a,!0)});return c}};b.prototype._formatDelimitedString=function(a,b,c,g){var d=this;return a&&b&&c&&g?a.trim().split(b).map(function(a){return d._formatNumberFromString(a,g)}).join(c):a};b.prototype._formatNumberFromString=function(a,b){if(!a||!b)return a;var c=Number(a);return isNaN(c)?
a:b.format(c)};b.prototype._processVisibleRastersResponse=function(a,b){b=b||{};var c=a.value,d=b.templateRRFunctionNames,e=b.showNoDataRecords,m=b.returnDomainValues,h=b.templateFields;b=a.processedValues;var k=a.catalogItems&&a.catalogItems.features,t=a.properties&&a.properties.Values&&a.properties.Values.map(function(a){return a.replace(/ /gi,", ")})||[],n=this.objectIdField||"ObjectId";a="string"===typeof c&&-1<c.toLowerCase().indexOf("nodata");var q=[];!c||k||a||(k={},k[n]=0,k=new aa(this.fullExtent,
null,k),t=[c],k=[k]);if(!k)return[];this._updateResponseFieldNames(k,h);for(var u,p,n=0;n<k.length;n++){h=k[n];if(null!=c&&!a){u=t[n];p=this.renderingRule&&b&&0<b.length&&d&&0<d.length&&-1<d.indexOf(this.renderingRule.functionName)?b[d.indexOf(this.renderingRule.functionName)]:c;if("nodata"===u.toLowerCase()&&!e)continue;h.attributes["Raster.ItemPixelValue"]=this._formatAttributeValue(u,"Raster.ItemPixelValue");h.attributes["Raster.ServicePixelValue"]=this._formatAttributeValue(p,"Raster.ServicePixelValue");
this._updateFeatureWithMagDirValues(h,u);var r=this.fields&&0<this.fields.length;p=this.renderingRule&&x.isSome(this.serviceRasterInfo)&&this.serviceRasterInfo.attributeTable?r?u:c:p;this.renderingRule||(p=r?u:c);this._updateFeatureWithRasterAttributeTableValues(h,p)}h.sourceLayer=this;m&&this._updateFeatureWithDomainValues(h);if(d&&b&&d.length===b.length)for(u=0;u<d.length;u++)r="Raster.ServicePixelValue."+d[u],h.attributes[r]=this._formatAttributeValue(b[u],r);q.push(k[n])}return q};b.prototype._updateFeatureWithRasterAttributeTableValues=
function(a,b){var c=this,d=this.rasterInfo&&this.rasterInfo.attributeTable||x.isSome(this.serviceRasterInfo)&&this.serviceRasterInfo.attributeTable,e=d&&d.features;if(e){var d=d.fields,m=d.map(function(a){return a.name}).filter(function(a){return"value"===a.toLowerCase()}),h=m&&m[0];if(h){var k=e.filter(function(a){return a.attributes[h]===(null!=b?parseInt(b,10):null)});k&&k[0]&&d.forEach(function(b){var d=c.rasterAttributeTableFieldPrefix+b.name;a.attributes[d]=c._formatAttributeValue(k[0].attributes[b.name],
d)})}}};b.prototype._updateFeatureWithMagDirValues=function(a,b){if(this.pixelFilter&&("esriImageServiceDataTypeVector-UV"===this.serviceDataType||"esriImageServiceDataTypeVector-MagDir"===this.serviceDataType)){var c=b.replace(" ",",").split(",").map(function(a){return parseFloat(a)});b=c.map(function(a){return[a]});c=c.map(function(a){return{minValue:a,maxValue:a,noDataValue:null}});b=new ha({height:1,width:1,pixelType:"f32",pixels:b,statistics:c});this.pixelFilter({pixelBlock:b,extent:new r.Extent(0,
0,0,0,this.spatialReference)});a.attributes["Raster.Magnitude"]=b.pixels[0][0];a.attributes["Raster.Direction"]=b.pixels[1][0]}};b.prototype._updateFeatureWithDomainValues=function(a){var b=this.fields&&this.fields.filter(function(a){return a.domain&&"coded-value"===a.domain.type});null!=b&&b.forEach(function(b){var c=a.attributes[b.name];if(null!=c){var d=b.domain.codedValues.filter(function(a){return a.code===c})[0];d&&(a.attributes[b.name]=d.name)}})};b.prototype._updateResponseFieldNames=function(a,
b){if(b&&!(1>b.length)){var c=this.fieldsIndex;c&&a.forEach(function(a){if(a&&a.attributes)for(var d=0;d<b.length;d++){var e=b[d];if(c.has(e)){var f=c.get(e).name;f!==e&&(a.attributes[e]=a.attributes[f],delete a.attributes[f])}}})}};b.prototype._updateRenderingRulesFunctionName=function(a,b){if(a&&!(1>a.length)){if("Raw"===a)return a.replace("Raw","None");var c=a.toLowerCase().replace(/ /gi,"_");return b.has(c)?b.get(c):a}};b.prototype._isRFTJson=function(a){return a.name&&a.arguments&&a.function&&
a.hasOwnProperty("functionType")};e([c.property()],b.prototype,"_functionRasterInfos",void 0);e([c.property()],b.prototype,"_rasterJobHandler",void 0);e([c.property()],b.prototype,"_symbolizer",void 0);e([c.property()],b.prototype,"_defaultServiceMosaicRule",void 0);e([c.reader("_defaultServiceMosaicRule",["defaultMosaicMethod"])],b.prototype,"readDefaultServiceMosaicRule",null);e([c.property()],b.prototype,"_cachedRendererJson",void 0);e([c.property()],b.prototype,"rasterAttributeTableFieldPrefix",
void 0);e([c.property({readOnly:!0,dependsOn:["rasterFunctionInfos"]})],b.prototype,"rasterFunctionNamesIndex",null);e([c.property({readOnly:!0,dependsOn:["url"]})],b.prototype,"queryTask",null);e([c.property()],b.prototype,"adjustAspectRatio",void 0);e([c.property({readOnly:!0}),c.aliasOf("serviceRasterInfo.bandCount")],b.prototype,"bandCount",void 0);e([c.property({type:[da.Integer],json:{write:!0}})],b.prototype,"bandIds",void 0);e([c.property({readOnly:!0})],b.prototype,"capabilities",void 0);
e([c.reader("capabilities")],b.prototype,"readCapabilities",null);e([c.property({type:Number})],b.prototype,"compressionQuality",void 0);e([c.writer("compressionQuality")],b.prototype,"writeCompressionQuality",null);e([c.property({type:Number})],b.prototype,"compressionTolerance",void 0);e([c.writer("compressionTolerance")],b.prototype,"writeCompressionTolerance",null);e([c.property({json:{read:{source:"copyrightText"}}})],b.prototype,"copyright",void 0);e([c.property({type:String,json:{read:{source:"layerDefinition.definitionExpression"},
write:{target:"layerDefinition.definitionExpression"}}})],b.prototype,"definitionExpression",void 0);e([c.property({readOnly:!0,constructOnly:!0})],b.prototype,"exportImageServiceParameters",void 0);e([c.property()],b.prototype,"rasterInfo",void 0);e([c.property({readOnly:!0,type:[B]})],b.prototype,"fields",void 0);e([c.property({readOnly:!0,dependsOn:["fields"]})],b.prototype,"fieldsIndex",null);e([c.property({type:String,json:{write:!0}})],b.prototype,"format",null);e([c.property({type:r.Extent})],
b.prototype,"fullExtent",void 0);e([c.property({readOnly:!0})],b.prototype,"hasMultidimensions",void 0);e([c.property({json:{read:{source:"maxImageHeight"}}})],b.prototype,"imageMaxHeight",void 0);e([c.property({json:{read:{source:"maxImageWidth"}}})],b.prototype,"imageMaxWidth",void 0);e([c.property({type:String,json:{read:{reader:T.read},write:{writer:T.write}}})],b.prototype,"interpolation",void 0);e([c.property({type:C})],b.prototype,"mosaicRule",null);e([c.reader("mosaicRule",["mosaicRule","defaultMosaicMethod"])],
b.prototype,"readMosaicRule",null);e([c.writer("mosaicRule")],b.prototype,"writeMosaicRule",null);e([c.property({readOnly:!0}),c.aliasOf("serviceRasterInfo.multidimensionalInfo")],b.prototype,"multidimensionalInfo",void 0);e([c.property()],b.prototype,"noData",void 0);e([c.writer("noData")],b.prototype,"writeNoData",null);e([c.property({type:String,json:{read:{reader:U.read},write:{writer:U.write}}})],b.prototype,"noDataInterpretation",void 0);e([c.property({type:String,readOnly:!0,json:{read:{source:["fields"]}}})],
b.prototype,"objectIdField",void 0);e([c.reader("objectIdField")],b.prototype,"readObjectIdField",null);e([c.property({readOnly:!0,dependsOn:["url"]})],b.prototype,"parsedUrl",null);e([c.property({readOnly:!0}),c.aliasOf("serviceRasterInfo.pixelSize.x")],b.prototype,"pixelSizeX",void 0);e([c.property({readOnly:!0}),c.aliasOf("serviceRasterInfo.pixelSize.y")],b.prototype,"pixelSizeY",void 0);e([c.property({type:Function})],b.prototype,"pixelFilter",void 0);e([c.property()],b.prototype,"raster",void 0);
e([c.property()],b.prototype,"viewId",void 0);e([c.property({types:P.rasterRendererTypes,json:{read:{source:"layerDefinition.drawingInfo.renderer"},write:{target:"layerDefinition.drawingInfo.renderer"}}})],b.prototype,"renderer",void 0);e([c.reader("renderer")],b.prototype,"readRenderer",null);e([c.property(R.opacityDrawingInfo)],b.prototype,"opacity",void 0);e([c.property({readOnly:!0}),c.aliasOf("serviceRasterInfo.attributeTable")],b.prototype,"rasterAttributeTable",void 0);e([c.property({readOnly:!0,
dependsOn:["fields","rasterInfo"]})],b.prototype,"rasterFields",null);e([c.property({readOnly:!0})],b.prototype,"rasterFunctionInfos",void 0);e([c.property({type:E})],b.prototype,"renderingRule",null);e([c.reader("renderingRule",["renderingRule","rasterFunctionInfos"])],b.prototype,"readRenderingRule",null);e([c.writer("renderingRule")],b.prototype,"writeRenderingRule",null);e([c.property()],b.prototype,"serviceDataType",void 0);e([c.property({readOnly:!0,type:r.SpatialReference})],b.prototype,"spatialReference",
void 0);e([c.reader("spatialReference",["spatialReference","extent"])],b.prototype,"readSpatialReference",null);e([c.property()],b.prototype,"pixelType",void 0);e([c.reader("pixelType")],b.prototype,"readPixelType",null);e([c.writer("pixelType")],b.prototype,"writePixelType",null);e([c.property({constructOnly:!0,type:H})],b.prototype,"serviceRasterInfo",void 0);e([c.property()],b.prototype,"sourceJSON",void 0);e([c.property(R.url)],b.prototype,"url",void 0);e([c.property({readOnly:!0})],b.prototype,
"version",void 0);e([c.reader("version",["currentVersion","fields","timeInfo"])],b.prototype,"readVersion",null);return b=e([c.subclass("esri.layers.mixins.ArcGISImageService")],b)}(c.declared(p))}});