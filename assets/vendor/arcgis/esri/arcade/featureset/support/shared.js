// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/promiseUtils","../../../geometry/Extent","../../../layers/support/Field"],function(w,b,e,p,q){function f(a){return a instanceof Date}Object.defineProperty(b,"__esModule",{value:!0});(function(a){a[a.Standardised=0]="Standardised";a[a.StandardisedNoInterval=1]="StandardisedNoInterval";a[a.SqlServer=2]="SqlServer";a[a.Oracle=3]="Oracle";a[a.Postgres=4]="Postgres";a[a.PGDB=5]="PGDB";a[a.FILEGDB=6]="FILEGDB";a[a.NotEvaluated=7]="NotEvaluated"})(b.FeatureServiceDatabaseType||
(b.FeatureServiceDatabaseType={}));b.cloneField=function(a){return q.fromJSON(a.toJSON())};b.esriFieldToJson=function(a){return a.toJSON()};(function(a){a[a.InFeatureSet=0]="InFeatureSet";a[a.NotInFeatureSet=1]="NotInFeatureSet";a[a.Unknown=2]="Unknown"})(b.IdState||(b.IdState={}));b.isString=function(a){return"string"===typeof a||a instanceof String};b.isBoolean=function(a){return"boolean"===typeof a};b.isNumber=function(a){return"number"===typeof a};b.isArray=function(a){return a instanceof Array};
b.isDate=f;b.equalityTest=function(a,c){return a===c?!0:f(a)&&f(c)?a.getTime()===c.getTime():!1};b.cloneAttributes=function(a){var c={},b;for(b in a)c[b]=a[b];return c};b.convertSquareUnitsToCode=function(a){if(void 0===a)return null;if("number"===typeof a)return a;switch(a.toLowerCase()){case "meters":case "meter":return 109404;case "miles":case "mile":return 109413;case "kilometers":case "kilometer":case "km":return 109414}return null};b.shapeExtent=function(a){if(null===a)return null;switch(a.type){case "polygon":case "multipoint":case "polyline":return a.extent;
case "point":return new p({xmin:a.x,ymin:a.y,xmax:a.x,ymax:a.y,spatialReference:a.spatialReference});case "extent":return a}return null};b.convertLinearUnitsToCode=function(a){if(void 0===a)return null;if("number"===typeof a||"number"===typeof a)return a;switch(a.toLowerCase()){case "meters":case "meter":return 9001;case "miles":case "mile":return 9035;case "kilometers":case "kilometer":case "km":return 9036}return null};b.sameGeomType=function(a,c){return a===c||"point"===a&&"esriGeometryPoint"===
c||"polyline"===a&&"esriGeometryPolyline"===c||"polygon"===a&&"esriGeometryPolygon"===c||"extent"===a&&"esriGeometryEnvelope"===c||"multipoint"===a&&"esriGeometryMultipoint"===c||"point"===c&&"esriGeometryPoint"===a||"polyline"===c&&"esriGeometryPolyline"===a||"polygon"===c&&"esriGeometryPolygon"===a||"extent"===c&&"esriGeometryEnvelope"===a||"multipoint"===c&&"esriGeometryMultipoint"===a?!0:!1};b.defaultMaxRecords=1E3;b.errback=function(a){return function(c){a.reject(c)}};b.callback=function(a,c){return function(){try{a.apply(null,
arguments)}catch(r){c.reject(r)}}};b.layerGeometryEsriConstants={point:"point",polygon:"polygon",polyline:"polyline",multipoint:"multipoint",extent:"extent",esriGeometryPoint:"point",esriGeometryPolygon:"polygon",esriGeometryPolyline:"polyline",esriGeometryMultipoint:"multipoint",esriGeometryEnvelope:"extent",envelope:"extent"};b.toEsriGeometryType=function(a){switch(a){case "point":return"esriGeometryPoint";case "polygon":return"esriGeometryPolygon";case "multipoint":return"esriGeometryMultipoint";
case "polyline":return"esriGeometryPolyline";default:return"esriGeometryPoint"}};b.reduceArrayWithPromises=function(a,c){return e.create(function(b,t){var g=e.resolve(!0);a.reduce(function(a,b,u,h){return a.then(function(a){try{return c(a,b,u,h)}catch(v){return e.reject(v)}},function(a){return e.reject(a)})},g).then(b,t)})};b.extractServiceUrl=function(a){if(void 0===a)return"";a=a.replace(/\/featureserver\/[0-9]*/i,"/FeatureServer");a=a.replace(/\/mapserver\/[0-9]*/i,"/MapServer");return a=a.split("?")[0]};
b.stableStringify=function(a,b){b||(b={});"function"===typeof b&&(b={cmp:b});var c="boolean"===typeof b.cycles?b.cycles:!1,e=b.cmp&&function(a){return function(b){return function(c,h){return a({key:c,value:b[c]},{key:h,value:b[h]})}}}(b.cmp),g=[];return function k(a){a&&a.toJSON&&"function"===typeof a.toJSON&&(a=a.toJSON());if(void 0!==a){if("number"===typeof a)return isFinite(a)?""+a:"null";if("object"!==typeof a)return JSON.stringify(a);var b,d;if(Array.isArray(a)){d="[";for(b=0;b<a.length;b++)b&&
(d+=","),d+=k(a[b])||"null";return d+"]"}if(null===a)return"null";if(-1!==g.indexOf(a)){if(c)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON");}var f=g.push(a)-1,l=Object.keys(a).sort(e&&e(a));d="";for(b=0;b<l.length;b++){var m=l[b],n=k(a[m]);n&&(d&&(d+=","),d+=JSON.stringify(m)+":"+n)}g.splice(f,1);return"{"+d+"}"}}(a)}});