// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../request ../core/deprecate ../core/Error ../core/Logger ../core/maybe ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators ../geometry/HeightModelInfo ./Layer ./mixins/ArcGISCachedService ./mixins/ArcGISService ./mixins/OperationalLayer ./mixins/PortalLayer ./support/commonProperties ./support/LercWorker".split(" "),
function(p,I,g,q,e,r,t,l,u,v,w,x,y,h,z,c,A,B,C,D,E,F,G,m){var k=w.getLogger("esri.layers.ElevationLayer");return function(n){function b(a){a=n.call(this,a)||this;a.copyright=null;a.heightModelInfo=null;a.path=null;a.opacity=1;a.operationalLayerType="ArcGISTiledElevationServiceLayer";a.sourceJSON=null;a.type="elevation";a.url=null;a.version=null;a._lercWorker=m.acquireInstance();return a}q(b,n);b.prototype.normalizeCtorArgs=function(a,b){return"string"===typeof a?g({url:a},b):a};b.prototype.destroy=
function(){m.releaseInstance(this._lercWorker);this._lercWorker=null};Object.defineProperty(b.prototype,"minScale",{get:function(){},set:function(a){this.constructed&&k.warn(this.declaredClass+".minScale support has been removed (since 4.5)")},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"maxScale",{get:function(){},set:function(a){this.constructed&&k.warn(this.declaredClass+".maxScale support has been removed (since 4.5)")},enumerable:!0,configurable:!0});b.prototype.readVersion=
function(a,b){(a=b.currentVersion)||(a=9.3);return a};b.prototype.load=function(a){var b=this,f=x.isSome(a)?a.signal:null;this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(a){for(var b=0;b<a.typeKeywords.length;b++)if("elevation 3d layer"===a.typeKeywords[b].toLowerCase())return!0;throw new v("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"});
}},a).then(function(){return b._fetchImageService(f)},function(){return b._fetchImageService(f)}));return h.resolve(this)};b.prototype.fetchTile=function(a,b,f,d){var c=this;void 0===d&&(d={});null!=d&&"number"===typeof d&&(u.deprecated(k,"Passing 'noDataValue' directly as a parameter",{replacement:"use { noDataValue } options object instead",version:"4.12"}),d={noDataValue:d});var e={responseType:"array-buffer",signal:d.signal},H={noDataValue:d.noDataValue,returnFileInfo:!0};return this.load().then(function(){return c._fetchTileAvailability(a,
b,f,d)}).then(function(){return l(c.getTileUrl(a,b,f),e)}).then(function(a){return c._lercWorker.decode(a.data,H,d.signal)}).then(function(a){return{values:a.pixelData,width:a.width,height:a.height,maxZError:a.fileInfo.maxZError,noDataValue:a.noDataValue,minValue:a.minValue,maxValue:a.maxValue}})};b.prototype.getTileUrl=function(a,b,c){var d=z.objectToQuery(g({},this.parsedUrl.query,{blankTile:!this.tilemapCache&&this.supportsBlankTile?!1:null}));return this.parsedUrl.path+"/tile/"+a+"/"+b+"/"+c+
(d?"?"+d:"")};b.prototype.queryElevation=function(a,b){var c=this;return this._importElevationQuery().then(function(d){return(new d.ElevationQuery).query(c,a,b)})};b.prototype.createElevationSampler=function(a,b){var c=this;return this._importElevationQuery().then(function(d){return(new d.ElevationQuery).createSampler(c,a,b)})};b.prototype._fetchTileAvailability=function(a,b,c,d){return this.tilemapCache?this.tilemapCache.fetchAvailability(a,b,c,d):h.resolve("unknown")};b.prototype._fetchImageService=
function(a){return t(this,void 0,void 0,function(){var b,c;return r(this,function(d){switch(d.label){case 0:if(this.sourceJSON)return[2,this.sourceJSON];b={query:g({f:"json"},this.parsedUrl.query),responseType:"json",signal:a};return[4,l(this.parsedUrl.path,b)];case 1:return c=d.sent(),c.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=c.data,this.read(c.data,{origin:"service",url:this.parsedUrl}),[2]}})})};b.prototype._importElevationQuery=function(){return h.create(function(a){p(["./support/ElevationQuery"],
a)})};e([c.property({json:{read:{source:"copyrightText"}}})],b.prototype,"copyright",void 0);e([c.property({readOnly:!0,type:A})],b.prototype,"heightModelInfo",void 0);e([c.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],b.prototype,"path",void 0);e([c.property({type:["show","hide"]})],b.prototype,"listMode",void 0);e([c.property({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],b.prototype,
"minScale",null);e([c.property({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],b.prototype,"maxScale",null);e([c.property({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],b.prototype,"opacity",void 0);e([c.property({type:["ArcGISTiledElevationServiceLayer"]})],b.prototype,"operationalLayerType",void 0);e([c.property()],b.prototype,"sourceJSON",void 0);e([c.property({json:{read:!1},value:"elevation",
readOnly:!0})],b.prototype,"type",void 0);e([c.property(G.url)],b.prototype,"url",void 0);e([c.property()],b.prototype,"version",void 0);e([c.reader("version",["currentVersion"])],b.prototype,"readVersion",null);return b=e([c.subclass("esri.layers.ElevationLayer")],b)}(c.declared(C.ArcGISCachedService(D.ArcGISService(E.OperationalLayer(F.PortalLayer(y.MultiOriginJSONMixin(B)))))))});