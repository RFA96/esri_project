// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../Graphic ../../../core/Error ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/SetUtils ../../../core/accessorSupport/decorators ../../../core/sql/WhereClause ../../../layers/support/fieldUtils ./BuildingSublayerView3D ./I3SMeshView3D ./i3s/BuildingFilterUtil ./i3s/I3SUtil ./support/DefinitionExpressionSceneLayerView ../../layers/support/popupUtils".split(" "),
function(I,J,K,y,d,t,u,z,v,A,B,w,C,c,D,h,E,F,x,G,H,q){var k=A.getLogger("esri.views.3d.layers.BuildingComponentSublayerView3D");return function(g){function b(){var a=null!==g&&g.apply(this,arguments)||this;a.layerView=null;a._elevationContext="scene";a._isIntegratedMesh=!1;a._supportsLabeling=!1;a.lodFactor=1;a.progressiveLoadFactor=1;return a}y(b,g);Object.defineProperty(b.prototype,"layerUid",{get:function(){return this.layer.layer.uid},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"sublayerUid",{get:function(){return this.layer.uid},enumerable:!0,configurable:!0});b.prototype.initialize=function(){var a=this;this.updatingHandles.add(this,"layer.renderer",function(){return a._updateRequiredFields()});this.updatingHandles.add(this,"definitionExpressionFields",function(){return a._updateRequiredFields()});this.updatingHandles.add(this,"filterExpressionFields",function(){return a._updateRequiredFields()});this.updatingHandles.add(this.layer,"renderer",function(e){return a._rendererChange(e)},
2);this.updatingHandles.add(this,"parsedDefinitionExpression",function(){return a._filterChange()});this.updatingHandles.add(this,"parsedFilterExpressions",function(){return a._updateSymbologyOverride()},2);this.addResolvingPromise(this._updateRequiredFields())};Object.defineProperty(b.prototype,"parsedFilterExpressions",{get:function(){var a=this;return"Overview"===this.layer.modelName?[]:this.layerView.filterExpressions.map(function(e){var b=e[0];e=e[1];var f;try{f=D.WhereClause.create(b,a.layer.fieldsIndex)}catch(l){return k.error("Failed to parse filterExpression: "+
l),null}if(!f.isStandardized)return k.error("filterExpression is using non standard function"),null;b=[];G.findFieldsCaseInsensitive(f.fieldNames,a.layer.fields,{missingFields:b});return 0<b.length?(k.error("filterExpression references unknown fields: "+b.join(", ")),null):[f,e]}).filter(function(a){return null!=a})},enumerable:!0,configurable:!0});b.prototype._updateSymbologyOverride=function(){var a=this,b=this.parsedFilterExpressions;0<b.length?this._setSymbologyOverride(function(e,f){for(var l=
0;l<b.length;l++){var c=b[l],d=c[0],c=c[1];try{if(d.testFeature(e))return x.applyFilterMode(f,c)}catch(m){a.logError(m)}}return x.applyFilterMode(f,null)},this.filterExpressionFields):this._setSymbologyOverride(null,null)};Object.defineProperty(b.prototype,"filterExpressionFields",{get:function(){return h.fixFields(this.layer.fields,this.parsedFilterExpressions.reduce(function(a,b){return a.concat(b[0].fieldNames)},[]))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"availableFields",
{get:function(){var a=this.layer,b=a.fields,c=this.requiredFields;if(a.outFields||a.layer.outFields)a=(a.outFields||[]).concat(a.layer.outFields||[]),c=h.unpackFieldNames(b,a).concat(c);return h.fixFields(b,c)},enumerable:!0,configurable:!0});b.prototype._createLayerGraphic=function(a){a=new z(null,null,a);a.layer=this.layer.layer;a.sourceLayer=this.layer;return a};b.prototype.canResume=function(){return this.inherited(arguments)&&(!this._controller||this._controller.rootNodeVisible)};b.prototype.isUpdating=
function(){return this.updatingMeshView3D};b.prototype.fetchPopupFeatures=function(a,b){return u(this,void 0,void 0,function(){var a,c,e,d,k,m,g,n,r,p;return t(this,function(f){switch(f.label){case 0:if(a=this._validateFetchPopupFeatures(b))return[2,w.reject(a)];if(!B.isSome(b)||!b.clientGraphics||0===b.clientGraphics.length)return[2,[]];c=[];e=[];k=h.unpackFieldNames;m=[this.layer.fields];return[4,q.getRequiredFields(this.layer,q.getFetchPopupTemplate(this.layer,b))];case 1:d=k.apply(void 0,m.concat([f.sent()]));
g=new Set;n=0;for(r=b.clientGraphics;n<r.length;n++)p=r[n],h.populateMissingFields(d,p,g)?e.push(p):c.push(p);return 0===e.length?[2,w.resolve(c)]:[2,this.whenGraphicAttributes(e,C.valuesOfSet(g)).catch(function(){return e}).then(function(a){return c.concat(a)})]}})})};b.prototype._updateRequiredFields=function(){return u(this,void 0,void 0,function(){var a,b,c,d;return t(this,function(e){switch(e.label){case 0:return b=h.fixFields,c=[this.layer.fields],this.layer.renderer?[4,this.layer.renderer.getRequiredFields(this.layer.fields)]:
[3,2];case 1:return d=e.sent(),[3,3];case 2:d=[],e.label=3;case 3:return a=b.apply(void 0,c.concat([d.concat(this.definitionExpressionFields||[],this.filterExpressionFields||[])])),this._set("requiredFields",a),[2]}})})};b.prototype._validateFetchPopupFeatures=function(b){var a=this.layer;if(!a.popupEnabled)return new v("buildingscenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:a});if(!q.getFetchPopupTemplate(a,b))return new v("buildingscenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",
{layer:a})};b.prototype.getFilters=function(){var a=this.inherited(arguments);this.addSqlFilter(a,this.parsedDefinitionExpression,this.definitionExpressionFields,this.logError);return a};d([c.property()],b.prototype,"layer",void 0);d([c.property()],b.prototype,"layerView",void 0);d([c.property({dependsOn:["updatingMeshView3D"]})],b.prototype,"updating",void 0);d([c.property({dependsOn:["_controller.rootNodeVisible"]})],b.prototype,"suspended",void 0);d([c.property({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.3dObject.lodFactor"})],
b.prototype,"lodFactor",void 0);d([c.property({readOnly:!0,dependsOn:["layerView.filterExpressions","layer.fieldsIndex"]})],b.prototype,"parsedFilterExpressions",null);d([c.property({type:[String],readOnly:!0,dependsOn:["parsedFilterExpressions"]})],b.prototype,"filterExpressionFields",null);d([c.property({type:[String],readOnly:!0})],b.prototype,"requiredFields",void 0);d([c.property({type:[String],readOnly:!0,dependsOn:["layer.outFields","layer.layer.outFields","requiredFields"]})],b.prototype,
"availableFields",null);return b=d([c.subclass("esri.views.3d.layers.BuildingComponentSublayerView3D")],b)}(c.declared(H.DefinitionExpressionSceneLayerView(F.I3SMeshView3D(E))))});