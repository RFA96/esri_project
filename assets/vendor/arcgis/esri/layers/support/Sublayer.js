// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/paramHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/tsSupport/assignHelper ../../geometry ../../PopupTemplate ../../renderers ../../request ../../symbols ../../core/Collection ../../core/Error ../../core/HandleOwner ../../core/lang ../../core/Loadable ../../core/Logger ../../core/MultiOriginJSONSupport ../../core/promiseUtils ../../core/urlUtils ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ../../core/accessorSupport/PropertyOrigin ../../core/accessorSupport/utils ./FeatureType ./Field ./FieldsIndex ./fieldUtils ./LabelClass ./layerSourceUtils ../../renderers/support/jsonUtils ../../support/popupUtils ../../tasks/support/Query".split(" "),
function(r,Y,D,d,Z,t,u,E,F,G,z,H,I,J,v,K,m,L,M,N,n,O,e,A,P,w,Q,R,S,T,U,g,V,W,B){function x(e){return e&&"esriSMS"===e.type}function h(e,b,d){return{ignoreOrigin:!0,enabled:d&&d.writeSublayerStructure||!1}}function l(e,b,d){return{ignoreOrigin:!0,enabled:d?d.writeSublayerStructure||this.originIdOf(b)>=P.nameToId(d.origin):!1}}var q=M.getLogger("esri.layers.support.Sublayer"),X=0,k=new Set;k.add("layer");k.add("parent");k.add("loaded");k.add("loadStatus");k.add("loadError");k.add("loadWarnings");return function(C){function b(a){a=
C.call(this,a)||this;a.capabilities=void 0;a.fields=null;a.fullExtent=null;a.globalIdField=null;a.legendEnabled=!0;a.objectIdField=null;a.popupEnabled=!0;a.popupTemplate=null;a.sourceJSON=null;a.title=null;a.typeIdField=null;a.types=null;return a}D(b,C);p=b;b.prototype.load=function(a){return u(this,void 0,void 0,function(){var c=this;return t(this,function(b){this.addResolvingPromise(function(){return u(c,void 0,void 0,function(){var c,b,y;return t(this,function(f){switch(f.label){case 0:if(!this.layer)throw new v("sublayer:missing-layer",
"Sublayer can't be loaded without being part of a layer",{sublayer:this});c=null;return 2<this.originIdOf("url")||g.isDataLayerSource(this.source)?[4,H(this.url,E({responseType:"json",query:{f:"json"}},a))]:[3,2];case 1:return b=f.sent(),c=b.data,[3,4];case 2:return y=this.id,this.source&&null!=this.source.mapLayerId&&(y=this.source.mapLayerId),[4,this.layer.fetchSublayerInfo(y,a)];case 3:c=f.sent(),f.label=4;case 4:return c&&(this.sourceJSON=c,this.read({layerDefinition:c},{origin:"service"})),[2]}})})}());
return[2,this]})})};b.prototype.readCapabilities=function(a,c){return{exportMap:{supportsModification:!!c.layerDefinition.canModifyLayer}}};Object.defineProperty(b.prototype,"definitionExpression",{set:function(a){this._setAndNotifyLayer("definitionExpression",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"fieldsIndex",{get:function(){return new S(this.fields||[])},enumerable:!0,configurable:!0});b.prototype.readGlobalIdFieldFromService=function(a,c){c=c.layerDefinition||c;
if(c.globalIdField)return c.globalIdField;if(c.fields)for(a=0,c=c.fields;a<c.length;a++){var b=c[a];if("esriFieldTypeGlobalID"===b.type)return b.name}};Object.defineProperty(b.prototype,"id",{get:function(){var a=this._get("id");return null==a?X++:a},set:function(a){this._get("id")!==a&&(!1===this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"):this._set("id",a))},enumerable:!0,configurable:!0});
Object.defineProperty(b.prototype,"labelingInfo",{set:function(a){this._setAndNotifyLayer("labelingInfo",a)},enumerable:!0,configurable:!0});b.prototype.writeLabelingInfo=function(a,c,b,f){a&&a.length&&(c.layerDefinition={drawingInfo:{labelingInfo:a.map(function(a){return a.write({},f)})}})};Object.defineProperty(b.prototype,"labelsVisible",{set:function(a){this._setAndNotifyLayer("labelsVisible",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"layer",{set:function(a){this._set("layer",
a);this.sublayers&&this.sublayers.forEach(function(c){return c.layer=a})},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"listMode",{set:function(a){this._set("listMode",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"minScale",{set:function(a){this._setAndNotifyLayer("minScale",a)},enumerable:!0,configurable:!0});b.prototype.readMinScale=function(a,c){return c.minScale||c.layerDefinition&&c.layerDefinition.minScale||0};Object.defineProperty(b.prototype,"maxScale",
{set:function(a){this._setAndNotifyLayer("maxScale",a)},enumerable:!0,configurable:!0});b.prototype.readMaxScale=function(a,c){return c.maxScale||c.layerDefinition&&c.layerDefinition.maxScale||0};b.prototype.readObjectIdFieldFromService=function(a,c){c=c.layerDefinition||c;if(c.objectIdField)return c.objectIdField;if(c.fields)for(a=0,c=c.fields;a<c.length;a++){var b=c[a];if("esriFieldTypeOID"===b.type)return b.name}};Object.defineProperty(b.prototype,"opacity",{set:function(a){this._setAndNotifyLayer("opacity",
a)},enumerable:!0,configurable:!0});b.prototype.readOpacity=function(a,c){a=c.layerDefinition;return 1-.01*(null!=a.transparency?a.transparency:a.drawingInfo.transparency)};b.prototype.writeOpacity=function(a,c,b,f){c.layerDefinition={drawingInfo:{transparency:100-100*a}}};b.prototype.writeParent=function(a,c){c.parentLayerId=this.parent&&this.parent!==this.layer?this.parent.id:-1};Object.defineProperty(b.prototype,"defaultPopupTemplate",{get:function(){return this.createPopupTemplate()},enumerable:!0,
configurable:!0});Object.defineProperty(b.prototype,"renderer",{set:function(a){if(a)for(var c=0,b=a.getSymbols();c<b.length;c++)if(I.isSymbol3D(b[c])){q.warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",a)},enumerable:!0,configurable:!0});b.prototype.readRenderer=function(a,c,b){if(a=c.layerDefinition.drawingInfo.renderer||void 0)(a=V.read(a,c,b)||void 0)||q.error("Failed to create renderer",{rendererDefinition:c.drawingInfo.renderer,layer:this,context:b});
return a};b.prototype.writeRenderer=function(a,c,b,f){c.layerDefinition={drawingInfo:{renderer:a.write({},f)}}};b.prototype.writeWebSceneRenderer=function(a,c,b,f){c.layerDefinition={drawingInfo:{renderer:a.write({},f)}}};Object.defineProperty(b.prototype,"source",{get:function(){return this._get("source")||{mapLayerId:this.id,type:g.MAPLAYER}},set:function(a){this._setAndNotifyLayer("source",a)},enumerable:!0,configurable:!0});b.prototype.writeSource=function(a,c){c.layerDefinition={source:g.sourceToJSON(a)}};
Object.defineProperty(b.prototype,"sublayers",{set:function(a){this._handleSublayersChange(a,this._get("sublayers"));this._set("sublayers",a)},enumerable:!0,configurable:!0});b.prototype.castSublayers=function(a){return A.default(J.ofType(p),a)};b.prototype.writeSublayers=function(a,c,b){this.get("sublayers.length")&&(c[b]=this.sublayers.map(function(a){return a.id}).toArray().reverse())};b.prototype.readTypeIdField=function(a,c){c=c.layerDefinition||c;if(a=c.typeIdField)if(c=T.getField(c.fields,
a))return c.name;return null};Object.defineProperty(b.prototype,"url",{get:function(){var a=this.layer,c=this.source;if(!a)return null;if(g.isMapLayerSource(c))return a.parsedUrl.path+"/"+c.mapLayerId;c={layer:JSON.stringify({source:g.sourceToJSON(this.source)})};return a.parsedUrl.path+"/dynamicLayer?"+O.objectToQuery(c)},set:function(a){a?this._override("url",a):this._clearOverride("url")},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"visible",{set:function(a){this._setAndNotifyLayer("visible",
a)},enumerable:!0,configurable:!0});b.prototype.writeVisible=function(a,c,b,f){c[b]=this.getAtOrigin("defaultVisibility","service")||a};b.prototype.clone=function(){var a=w.getProperties(this).store,c=new p;w.getProperties(c).store=a.clone(k);return c};b.prototype.createPopupTemplate=function(a){return W.createPopupTemplate(this,a)};b.prototype.createQuery=function(){return new B({returnGeometry:!0,where:this.definitionExpression||"1\x3d1"})};b.prototype.createFeatureLayer=function(){return u(this,
void 0,void 0,function(){var a,c,b,f,d;return t(this,function(e){switch(e.label){case 0:if(this.hasOwnProperty("sublayers"))return[2,null];a=this.layer&&this.layer.parsedUrl;c=this.source;b=null;a&&(b=g.isMapLayerSource(c)?a.path+"/"+c.mapLayerId:a.path+"/dynamicLayer");return[4,n.create(function(a){return r(["../FeatureLayer"],a)})];case 1:return f=e.sent(),d=new f({url:b}),this.definitionExpression&&(d.definitionExpression=this.definitionExpression),2<this.originIdOf("labelingInfo")&&(d.labelingInfo=
m.clone(this.labelingInfo)),0<this.originIdOf("labelsVisible")&&(d.labelsVisible=this.labelsVisible),0<this.originIdOf("legendEnabled")&&(d.legendEnabled=this.legendEnabled),0<this.originIdOf("visible")&&(d.visible=this.visible),0<this.originIdOf("minScale")&&(d.minScale=this.minScale),0<this.originIdOf("maxScale")&&(d.maxScale=this.maxScale),0<this.originIdOf("opacity")&&(d.opacity=this.opacity),0<this.originIdOf("popupTemplate")&&(d.popupTemplate=m.clone(this.popupTemplate)),2<this.originIdOf("renderer")&&
(d.renderer=m.clone(this.renderer)),g.isDataLayerSource(this.source)&&(d.dynamicDataSource=m.clone(this.source)),0<this.originIdOf("title")&&(d.title=this.title),[2,d]}})})};b.prototype.getFeatureType=function(a){var c=this.typeIdField;if(!c||!a)return null;var b=a.attributes?a.attributes[c]:void 0;if(null==b)return null;var d=null;this.types.some(function(a){var c=a.id;if(null==c)return!1;c.toString()===b.toString()&&(d=a);return!!d});return d};b.prototype.getFieldDomain=function(a,c){return(c=this.getFeatureType(c&&
c.feature))&&(c=c.domains&&c.domains[a])&&"inherited"!==c.type?c:this._getLayerDomain(a)};b.prototype.queryFeatures=function(a,c){var b=this;void 0===a&&(a=this.createQuery());return n.all([n.create(function(a){return r(["../../tasks/operations/query"],a)}),n.create(function(a){return r(["../../tasks/support/FeatureSet"],a)})]).then(function(d){var e=d[0].executeQuery,f=d[1];return e(b.url,B.from(a),b.layer.spatialReference,c).then(function(a){return f.fromJSON(a.data)})}).then(function(a){a&&a.features&&
a.features.forEach(function(a){a.sourceLayer=b});return a})};b.prototype.toExportImageJSON=function(){var a=this,b={id:this.id,source:g.sourceToJSON(this.source)};this.definitionExpression&&(b.definitionExpression=this.definitionExpression);var d=["renderer","labelingInfo","opacity","labelsVisible"].reduce(function(b,c){b[c]=a.originIdOf(c);return b},{});if(Object.keys(d).some(function(a){return 2<=d[a]})){var e=b.drawingInfo={};2<=d.renderer&&(e.renderer=this.renderer?this.renderer.toJSON():null);
2<=d.labelsVisible&&(e.showLabels=this.labelsVisible);this.labelsVisible&&2<=d.labelingInfo&&(e.labelingInfo=this.labelingInfo?this.labelingInfo.map(function(a){return a.write({},{origin:"service"})}):null,e.showLabels=!0);2<=d.opacity&&(e.transparency=100-100*this.opacity);this._assignDefaultSymbolColors(e.renderer)}return b};b.prototype._assignDefaultSymbolColors=function(a){this._forEachSimpleMarkerSymbols(a,function(a){a.color||"esriSMSX"!==a.style&&"esriSMSCross"!==a.style||(a.color=a.outline&&
a.outline.color?a.outline.color:[0,0,0,0])})};b.prototype._forEachSimpleMarkerSymbols=function(a,b){if(a){var c=0,d="uniqueValueInfos"in a?a.uniqueValueInfos:"classBreakInfos"in a?a.classBreakInfos:[];for(;c<d.length;c++){var e=d[c];x(e.symbol)&&b(e.symbol)}"symbol"in a&&x(a.symbol)&&b(a.symbol);"defaultSymbol"in a&&x(a.defaultSymbol)&&b(a.defaultSymbol)}};b.prototype._setAndNotifyLayer=function(a,b){var c=this.layer,d=this._get(a),e,g;switch(a){case "definitionExpression":e="supportsSublayerDefinitionExpression";
case "minScale":case "maxScale":case "visible":e="supportsSublayerVisibility";break;case "labelingInfo":case "labelsVisible":case "opacity":case "renderer":case "source":e="supportsDynamicLayers",g="supportsModification"}var h=w.getProperties(this).getDefaultOrigin();if("service"!==h){if(e&&!1===this.get("layer.capabilities.exportMap."+e)){this._logLockedError(a,"capability not available 'layer.capabilities.exportMap."+e+"'");return}if(g&&!1===this.get("capabilities.exportMap."+g)){this._logLockedError(a,
"capability not available 'capabilities.exportMap."+g+"'");return}}"source"===a&&"not-loaded"!==this.loadStatus?this._logLockedError(a,"'source' can't be changed after calling sublayer.load()"):(this._set(a,b),"service"!==h&&d!==b&&c&&c.emit&&c.emit("sublayer-update",{propertyName:a}))};b.prototype._handleSublayersChange=function(a,b){var c=this;b&&(b.forEach(function(a){a.parent=null;a.layer=null}),this.handles.removeAll());a&&(a.forEach(function(a){a.parent=c;a.layer=c.layer}),this.handles.add([a.on("after-add",
function(a){a=a.item;a.parent=c;a.layer=c.layer}),a.on("after-remove",function(a){a=a.item;a.parent=null;a.layer=null}),a.on("before-changes",function(a){var b=c.get("layer.capabilities.exportMap.supportsSublayersChanges");null==b||b||(q.error(new v("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:c,layer:c.layer})),a.preventDefault())})]))};b.prototype._logLockedError=function(a,b){q.error(new v("sublayer:locked","Property '"+a+
"' can't be changed on Sublayer from the layer '"+this.layer.id+"'",{reason:b,sublayer:this,layer:this.layer}))};b.prototype._getLayerDomain=function(a){return(a=this.fieldsIndex.get(a))?a.domain:null};var p;d([e.property({readOnly:!0})],b.prototype,"capabilities",void 0);d([e.reader("service","capabilities",["layerDefinition.canModifyLayer"])],b.prototype,"readCapabilities",null);d([e.property({type:String,value:null,json:{read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression",
overridePolicy:l}}})],b.prototype,"definitionExpression",null);d([e.property({type:[R],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],b.prototype,"fields",void 0);d([e.property({readOnly:!0,dependsOn:["fields"]})],b.prototype,"fieldsIndex",null);d([e.property({type:F.Extent,json:{read:{source:"layerDefinition.extent"}}})],b.prototype,"fullExtent",void 0);d([e.property({type:String})],b.prototype,"globalIdField",void 0);d([e.reader("service","globalIdField",["layerDefinition.globalIdField",
"layerDefinition.fields"])],b.prototype,"readGlobalIdFieldFromService",null);d([e.property({type:Number,json:{write:{ignoreOrigin:!0}}})],b.prototype,"id",null);d([e.property({value:null,type:[U],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:h}}})],b.prototype,"labelingInfo",null);d([e.writer("labelingInfo")],b.prototype,"writeLabelingInfo",null);d([e.property({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},
write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:h}}})],b.prototype,"labelsVisible",null);d([e.property({value:null})],b.prototype,"layer",null);d([e.property({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:l}}})],b.prototype,"legendEnabled",void 0);d([e.property({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],b.prototype,
"listMode",null);d([e.property({type:Number,value:0,json:{write:{enabled:!1,overridePolicy:h}}})],b.prototype,"minScale",null);d([e.reader("minScale",["minScale","layerDefinition.minScale"])],b.prototype,"readMinScale",null);d([e.property({type:Number,value:0,json:{write:{enabled:!1,overridePolicy:h}}})],b.prototype,"maxScale",null);d([e.reader("maxScale",["maxScale","layerDefinition.maxScale"])],b.prototype,"readMaxScale",null);d([e.property({type:String})],b.prototype,"objectIdField",void 0);d([e.reader("service",
"objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],b.prototype,"readObjectIdFieldFromService",null);d([e.property({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:h}}})],b.prototype,"opacity",null);d([e.reader("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],b.prototype,"readOpacity",null);d([e.writer("opacity")],b.prototype,"writeOpacity",null);d([e.property({json:{type:Number,write:{target:"parentLayerId",
allowNull:!0,overridePolicy:h}}})],b.prototype,"parent",void 0);d([e.writer("parent")],b.prototype,"writeParent",null);d([e.property({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:function(a,b){return!b.disablePopup}},write:{target:"disablePopup",overridePolicy:l,writer:function(a,b,d){b[d]=!a}}}})],b.prototype,"popupEnabled",void 0);d([e.property({type:G,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:l}}})],b.prototype,"popupTemplate",void 0);d([e.property({readOnly:!0,
dependsOn:["fields","title"]})],b.prototype,"defaultPopupTemplate",null);d([e.property({types:z.rendererTypes,value:null,json:{write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy:h}}})],b.prototype,"renderer",null);d([e.reader("renderer",["layerDefinition.drawingInfo.renderer"])],b.prototype,"readRenderer",null);d([e.writer("renderer")],b.prototype,"writeRenderer",null);d([e.writer("web-scene","renderer",{"layerDefinition.drawingInfo.renderer":{types:z.webSceneRendererTypes}})],b.prototype,
"writeWebSceneRenderer",null);d([e.property({cast:g.castSource,json:{read:{source:"layerDefinition.source",reader:g.sourceFromJSON},write:{target:"layerDefinition.source",overridePolicy:h}}})],b.prototype,"source",null);d([e.writer("source")],b.prototype,"writeSource",null);d([e.property()],b.prototype,"sourceJSON",void 0);d([e.property({value:null,json:{type:[A.Integer],write:{target:"subLayerIds",allowNull:!0,overridePolicy:h}}})],b.prototype,"sublayers",null);d([e.cast("sublayers")],b.prototype,
"castSublayers",null);d([e.writer("sublayers")],b.prototype,"writeSublayers",null);d([e.property({type:String,json:{read:{source:"name"},write:{target:"name",allowNull:!0,overridePolicy:l}}})],b.prototype,"title",void 0);d([e.property({type:String})],b.prototype,"typeIdField",void 0);d([e.reader("typeIdField",["layerDefinition.typeIdField"])],b.prototype,"readTypeIdField",null);d([e.property({type:[Q],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],b.prototype,"types",void 0);
d([e.property({type:String,dependsOn:["layer","source"],json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:function(){return{enabled:this._isOverridden("url")}}}}})],b.prototype,"url",null);d([e.property({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:h}}})],b.prototype,"visible",null);d([e.writer("visible")],b.prototype,"writeVisible",null);return b=p=d([e.subclass("esri.layers.support.Sublayer")],b)}(e.declared(K.HandleOwnerMixin(N.MultiOriginJSONMixin(L))))});