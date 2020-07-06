// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper dojo/i18n!../../nls/smartMapping ../.. ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ../../../core/screenUtils ../../../intl/substitute ./support/utils ../heuristics/ageUnit ../heuristics/outline ../heuristics/sizeRange ../statistics/support/ageUtils ../support/utils ../symbology/size ../../support/AuthoringInfo ../../support/AuthoringInfoVisualVariable ../../support/utils ../../visualVariables/SizeVariable".split(" "),
function(la,D,z,u,n,J,E,g,x,K,O,X,p,Y,P,Z,H,r,C,Q,aa,ba,R){function ca(b){return n(this,void 0,void 0,function(){var a,e,c,d,f,h,q;return u(this,function(k){switch(k.label){case 0:if(!(b&&b.layer&&(b.field||b.valueExpression||b.sqlExpression)))throw new g("size-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(b.valueExpression&&!b.sqlExpression&&!b.view)throw new g("size-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");
a=z({},b);e=[0,2,1,3];c=r.createLayerAdapter(a.layer,e);a.layer=c;if(!c)throw new g("size-visual-variable:invalid-parameters","'layer' must be one of these types: "+r.getLayerTypeLabels(e).join(", "));"height"===a.axis&&(a.sizeOptimizationEnabled=!1);d=x.isSome(a.signal)?{signal:a.signal}:null;return[4,c.load(d)];case 1:k.sent();f=c.geometryType;if("mesh"===f)throw new g("size-visual-variable:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(a.worldScale){if("polyline"===
f||"polygon"===f)throw new g("size-visual-variable:not-supported","'worldScale' sizing is not supported for polyline and polygon layers");if(!a.view||"3d"!==a.view.type)throw new g("size-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true");}return[4,r.getFieldsList({field:a.field,normalizationField:a.normalizationField,valueExpression:a.valueExpression})];case 2:h=k.sent();if(q=p.verifyBasicFieldValidity(c,h,"size-visual-variable:invalid-parameters"))throw q;
return[2,a]}})})}function da(b){return n(this,void 0,void 0,function(){var a,e,c,d,f,h,q,k;return u(this,function(m){switch(m.label){case 0:if(!(b&&b.layer&&(b.field||b.valueExpression||b.sqlExpression)))throw new g("size-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(b.valueExpression&&!b.sqlExpression&&!b.view)throw new g("size-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");
a=z({},b);a.symbolType=a.symbolType||"2d";a.defaultSymbolEnabled=null==a.defaultSymbolEnabled?!0:a.defaultSymbolEnabled;e=[0,2,1,3];c=r.createLayerAdapter(a.layer,e);a.layer=c;if(!c)throw new g("size-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+r.getLayerTypeLabels(e).join(", "));d=x.isSome(a.signal)?{signal:a.signal}:null;return[4,c.load(d)];case 1:m.sent();f=c.geometryType;h=-1<a.symbolType.indexOf("3d");a.outlineOptimizationEnabled="polygon"===f?a.outlineOptimizationEnabled:
!1;if("mesh"===f)throw new g("size-continuous-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(h&&("polyline"===f||"polygon"===f))throw new g("size-continuous-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(-1<a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new g("size-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform");
return[4,r.getFieldsList({field:a.field,normalizationField:a.normalizationField,valueExpression:a.valueExpression})];case 2:q=m.sent();if(k=p.verifyBasicFieldValidity(c,q,"size-continuous-renderer:invalid-parameters"))throw k;return[2,a]}})})}function ea(b){return n(this,void 0,void 0,function(){var a,e,c,d,f,h,q,k,m;return u(this,function(l){switch(l.label){case 0:if(!b||!b.layer||!b.field&&!b.valueExpression)throw new g("size-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");
if(b.valueExpression&&!b.view)throw new g("size-class-breaks-renderer:missing-parameters","View is required when 'valueExpression' is specified");a=z({},b);a.symbolType=a.symbolType||"2d";a.defaultSymbolEnabled=null==a.defaultSymbolEnabled?!0:a.defaultSymbolEnabled;a.classificationMethod=a.classificationMethod||"equal-interval";a.normalizationType=r.getNormalizationType(a);e=[0,2,1,3];c=r.createLayerAdapter(a.layer,e);a.layer=c;if(!c)throw new g("size-class-breaks-renderer:invalid-parameters","'layer' must be one of these types: "+
r.getLayerTypeLabels(e).join(", "));d=null!=a.minValue&&null!=a.maxValue;if(!d&&(null!=a.minValue||null!=a.maxValue))throw new g("size-class-breaks-renderer:missing-parameters","Both 'minValue' and 'maxValue' are required when specifying custom data range");f=x.isSome(a.signal)?{signal:a.signal}:null;return[4,c.load(f)];case 1:l.sent();h=c.geometryType;q=-1<a.symbolType.indexOf("3d");a.outlineOptimizationEnabled="polygon"===h?a.outlineOptimizationEnabled:!1;if("mesh"===h)throw new g("size-class-breaks-renderer:invalid-parameters",
"Size visualization is not applicable to layers with 'mesh' geometry type");if(q&&("polyline"===h||"polygon"===h))throw new g("size-class-breaks-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(-1<a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new g("size-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform");return[4,
r.getFieldsList({field:a.field,normalizationField:a.normalizationField})];case 2:k=l.sent();if(m=p.verifyBasicFieldValidity(c,k,"size-class-breaks-renderer:invalid-parameters"))throw m;return[2,a]}})})}function fa(b){b=z({},b);delete b.basemap;delete b.sizeScheme;delete b.legendOptions;delete b.symbolType;delete b.defaultSymbolEnabled;b.analyzeData=!(null!=b.minValue&&null!=b.maxValue);return b}function S(b){b=z({},b);var a=-1<b.symbolType.indexOf("3d-volumetric");if(b.worldScale=a)b.axis="3d-volumetric-uniform"===
b.symbolType?"all":"height";delete b.symbolType;delete b.defaultSymbolEnabled;return b}function ga(b){return n(this,void 0,void 0,function(){var a,e,c,d,f,h,q;return u(this,function(k){switch(k.label){case 0:if(!(b&&b.layer&&b.view&&b.startTime&&b.endTime))throw new g("size-age-renderer:missing-parameters","'layer', 'view', 'startTime', 'endTime' parameters are required");a=z({},b);a.symbolType=a.symbolType||"2d";a.defaultSymbolEnabled=null==a.defaultSymbolEnabled?!0:a.defaultSymbolEnabled;e=[0,2,
1,3];c=r.createLayerAdapter(a.layer,e);a.layer=c;if(!c)throw new g("size-age-renderer:invalid-parameters","'layer' must be one of these types: "+r.getLayerTypeLabels(e).join(", "));d=x.isSome(a.signal)?{signal:a.signal}:null;return[4,c.load(d)];case 1:k.sent();f=c.geometryType;h=-1<a.symbolType.indexOf("3d");a.outlineOptimizationEnabled="polygon"===f?a.outlineOptimizationEnabled:!1;if("mesh"===f)throw new g("size-age-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");
if(h&&("polyline"===f||"polygon"===f))throw new g("size-age-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(-1<a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new g("size-age-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform");if(q=H.verifyDates(c,a.startTime,a.endTime,"size-age-renderer:invalid-parameters"))throw q;if(a.unit&&
-1===H.supportedAgeUnits.indexOf(a.unit))throw new g("size-age-renderer:invalid-unit","Supported units are: "+H.supportedAgeUnits.join(", "));return[2,a]}})})}function T(b){return n(this,void 0,void 0,function(){var a,e,c,d,f;return u(this,function(h){switch(h.label){case 0:return a=b.sizeScheme,c=e=null,[4,p.getBasemapInfo(b.basemap,b.view)];case 1:d=h.sent();e=x.isSome(d.basemapId)?d.basemapId:null;c=x.isSome(d.basemapTheme)?d.basemapTheme:null;if(a)return[2,{scheme:C.cloneScheme(a),basemapId:e,
basemapTheme:c}];if(f=C.getSchemes({basemap:e,basemapTheme:c,geometryType:b.geometryType,worldScale:b.worldScale,view:b.view}))a=f.primaryScheme,e=f.basemapId,c=f.basemapTheme;return[2,{scheme:a,basemapId:e,basemapTheme:c}]}})})}function U(b,a){var e;switch(a){case "point":case "multipoint":e=[b.minSize,b.maxSize];break;case "polyline":e=[b.minWidth,b.maxWidth];break;case "polygon":e=[b.marker.minSize,b.marker.maxSize]}return e}function ha(b,a,e,c){return n(this,void 0,void 0,function(){var d,f,h,
q,k,m,l,I,ia,L,y,r,v,A,t,n,w,B,F,G;return u(this,function(u){switch(u.label){case 0:return d=c.layer,f=c.field,h="function"===typeof f,k=(q=f&&!h?d.getField(f):null)&&"date"===q.type,m=d.geometryType,[4,T({basemap:c.basemap,geometryType:m,sizeScheme:c.sizeScheme,worldScale:c.worldScale,view:c.view})];case 1:l=u.sent();I=l.scheme;if(!I)throw new g("size-visual-variable:insufficient-info","Unable to find size scheme");L=(ia=a&&[a.minSize,a.maxSize])||U(I,m);r=(y=p.getDefaultDataRange(b,k,!1))||[b.min,
b.max];v=[];t=(A="height"===c.axis)?c.axis:void 0;n=L[0];w=L[1];A&&"number"===typeof n&&"number"===typeof w&&(B=p.getSizeRangeForAxis({minSize:n,maxSize:w},t),v.push(new R({axis:"width-and-depth",minSize:B.minSize})),w=B.maxSize);v.unshift(new R({field:f,valueExpression:c.valueExpression,valueExpressionTitle:c.valueExpressionTitle,valueUnit:"unknown",normalizationField:e,axis:t,minSize:n,maxSize:w,minDataValue:r[0],maxDataValue:r[1],legendOptions:c.legendOptions}));F=new aa({type:"size",minSliderValue:null!=
c.minValue?c.minValue:b.min,maxSliderValue:null!=c.maxValue?c.maxValue:b.max});G=new Q({visualVariables:[F]});return[2,{basemapId:l.basemapId,basemapTheme:l.basemapTheme,visualVariables:v,statistics:b,defaultValuesUsed:!!y,sizeScheme:C.cloneScheme(I),authoringInfo:G}]}})})}function V(b,a,e,c,d){var f=d.field,h=d.layer.geometryType,q=d.defaultSymbolEnabled,k=C.cloneScheme(b.sizeScheme),m="polygon"===h,l=m?k.marker:k,k=m?k.background:null,m=m?"point":h,g=a&&a.opacity,n=b.visualVariables.map(function(a){return a.clone()});
a&&a.visualVariables&&a.visualVariables.length&&n.push.apply(n,a.visualVariables.map(function(a){return a.clone()}));return{renderer:new E.ClassBreaksRenderer({backgroundFillSymbol:k&&p.createSymbol(h,{type:d.symbolType,color:k.color,outline:p.getSymbolOutlineFromScheme(k,h,g)}),classBreakInfos:[{minValue:-W,maxValue:W,symbol:p.createSymbol(m,{type:d.symbolType,color:l.color,size:p.getSymbolSizeFromScheme(l,m),outline:p.getSymbolOutlineFromScheme(l,m,g)})}],defaultLabel:q?J.other:null,defaultSymbol:q?
p.createSymbol(m,{type:d.symbolType,color:l.noDataColor,size:p.getSymbolSizeFromScheme(l,m,!0),outline:p.getSymbolOutlineFromScheme(l,m,g)}):null,field:f,normalizationField:c,normalizationType:e,valueExpression:d.valueExpression,valueExpressionTitle:d.valueExpressionTitle,visualVariables:n,authoringInfo:b.authoringInfo&&b.authoringInfo.clone()}),visualVariables:b.visualVariables.map(function(a){return a.clone()}),statistics:b.statistics,defaultValuesUsed:b.defaultValuesUsed,sizeScheme:C.cloneScheme(b.sizeScheme),
basemapId:b.basemapId,basemapTheme:b.basemapTheme}}function ja(b,a){var e=O.toPt(b.minSize);b=(O.toPt(b.maxSize)-e)/(4<=a?a-1:a);for(var c=[],d=0;d<a;d++)c.push(e+b*d);return c}function ka(b,a){return n(this,void 0,void 0,function(){var e,c,d,f,h,q,k,m,l,g,n,r,y,z,v,A,t,x,w,B;return u(this,function(u){switch(u.label){case 0:return e=b.layer,c=b.defaultSymbolEnabled,d=e.geometryType,f="polygon"===d,h=-1<b.symbolType.indexOf("3d-volumetric"),[4,T({basemap:b.basemap,geometryType:d,sizeScheme:b.sizeScheme,
worldScale:h,view:b.view})];case 1:return q=u.sent(),k=q.scheme,m=a.result,l=a.outlineResult,g=m.classBreakInfos,n=b.classificationMethod,r=b.normalizationType,y=f?k.marker:k,z=f?k.background:null,v=f?"point":d,A=U(y,v),t=h&&p.getSizeRangeForAxis({minSize:A[0],maxSize:A[1]},"height"),x=ja({minSize:A[0],maxSize:h?t.maxSize:A[1]},g.length),w=l&&l.opacity,B=new E.ClassBreaksRenderer({backgroundFillSymbol:z&&p.createSymbol(d,{type:b.symbolType,color:z.color,outline:p.getSymbolOutlineFromScheme(z,d,w)}),
classBreakInfos:g.map(function(a,c){return{minValue:a.minValue,maxValue:a.maxValue,symbol:p.createSymbol(v,{type:b.symbolType,color:y.color,size:x[c],widthAndDepth:t&&t.minSize,outline:p.getSymbolOutlineFromScheme(y,v,w)}),label:a.label}}),defaultLabel:c?J.other:null,defaultSymbol:c?p.createSymbol(v,{type:b.symbolType,color:y.noDataColor,size:p.getSymbolSizeFromScheme(y,v,!0),widthAndDepth:t&&t.minSize,outline:p.getSymbolOutlineFromScheme(y,v,w)}):null,field:b.field,valueExpression:b.valueExpression,
valueExpressionTitle:b.valueExpressionTitle,normalizationType:r,normalizationField:b.normalizationField,normalizationTotal:"percent-of-total"===r?m.normalizationTotal:void 0,legendOptions:b.legendOptions,authoringInfo:new Q({type:"class-breaks-size",classificationMethod:n,standardDeviationInterval:b.standardDeviationInterval})}),"standard-deviation"!==n&&ba.setLabelsForClassBreaks({classBreakInfos:B.classBreakInfos,classificationMethod:n,normalizationType:r,round:!0}),l&&l.visualVariables&&l.visualVariables.length&&
(B.visualVariables=l.visualVariables.map(function(a){return a.clone()})),[2,{renderer:B,sizeScheme:C.cloneScheme(k),classBreaksResult:m,defaultValuesUsed:a.defaultValuesUsed,basemapId:q.basemapId,basemapTheme:q.basemapTheme}]}})})}function N(b){return n(this,void 0,void 0,function(){var a,e,c,d,f,h,g,k,m;return u(this,function(l){switch(l.label){case 0:return[4,ca(b)];case 1:return a=l.sent(),e=a.view,c=a.layer,d=a.normalizationField,f=a.signal,h=d?"field":void 0,[4,K.all([a.statistics?a.statistics:
p.getSummaryStatistics({layer:c,field:a.field,valueExpression:a.valueExpression,sqlExpression:a.sqlExpression,sqlWhere:a.sqlWhere,normalizationType:h,normalizationField:d,minValue:a.minValue,maxValue:a.maxValue,view:e,signal:f}),a.sizeOptimizationEnabled?Z({view:e,layer:c,signal:f}):null])];case 2:return g=l.sent(),k=g[0],m=g[1],[2,ha(k,m,d,a)]}})})}Object.defineProperty(D,"__esModule",{value:!0});var W=Math.pow(2,53)-1;D.createVisualVariables=N;D.createContinuousRenderer=function(b){return n(this,
void 0,void 0,function(){var a,e,c,d,f,h,g;return u(this,function(k){switch(k.label){case 0:return[4,da(b)];case 1:return a=k.sent(),e={layer:a.layer,view:a.view,signal:a.signal},[4,K.all([N(S(a)),a.outlineOptimizationEnabled?P(e):null])];case 2:return c=k.sent(),d=c[0],f=c[1],g=(h=a.normalizationField)?"field":void 0,[2,V(d,f,g,h,a)]}})})};D.createClassBreaksRenderer=function(b){return n(this,void 0,void 0,function(){var a,e;return u(this,function(c){switch(c.label){case 0:return[4,ea(b)];case 1:return a=
c.sent(),[4,p.getClassBreaks(fa(a),a.outlineOptimizationEnabled)];case 2:return e=c.sent(),[2,ka(a,e)]}})})};D.createAgeRenderer=function(b){return n(this,void 0,void 0,function(){var a,e,c,d,f,g,q,k,m,l,n,r,x,y,C,v,A,t,D,w,B,F,G,M,E;return u(this,function(h){switch(h.label){case 0:return[4,ga(b)];case 1:a=h.sent();e=a.defaultSymbolEnabled;c=a.view;d=a.startTime;f=a.endTime;g=a.symbolType;q=a.minValue;k=a.maxValue;m=a.signal;l=a.layer;n={layer:a.layer,view:a.view,signal:m};v=(C=K).all;if(!a.unit)return[3,
2];A={unit:a.unit,statistics:null,valueExpression:null};return[3,4];case 2:return[4,Y({view:c,layer:l,startTime:d,endTime:f,minValue:q,maxValue:k,signal:m})];case 3:A=h.sent(),h.label=4;case 4:return[4,v.apply(C,[[A,a.outlineOptimizationEnabled?P(n):null]])];case 5:return r=h.sent(),x=r[0],y=r[1],t=x.unit,D=x.statistics,w=H.getAgeExpressions({layer:l,startTime:d,endTime:f,unit:t}).valueExpression,B=X.substitute(J["ageInfo_"+t],{unit:t,startTime:p.formatDate(d,t,l),endTime:p.formatDate(f,t,l)}),[4,
N(S({layer:l,basemap:a.basemap,valueExpression:w,symbolType:g,statistics:D,legendOptions:{title:B},sizeScheme:a.sizeScheme,sizeOptimizationEnabled:a.sizeOptimizationEnabled,view:a.view,minValue:q,maxValue:k,signal:m}))];case 6:return F=h.sent(),G={layer:l,valueExpression:w,defaultSymbolEnabled:e,symbolType:g},M=V(F,y,null,null,G),E=M.renderer.authoringInfo.visualVariables,E.forEach(function(a){return p.updateAgeRendererAuthoringInfoVV(a,d,f,t)}),[2,z({},M,{unit:t})]}})})}});