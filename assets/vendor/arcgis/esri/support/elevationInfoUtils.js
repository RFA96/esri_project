// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../core/maybe","../symbols/support/unitConversionUtils"],function(k,c,d,h){function e(a,b){a=d.isSome(a)?a.hasZ:!1;return d.isNone(b)?a?"absolute-height":"on-the-ground":b.mode}function g(a){var b=f(a);return e(a.geometry,b)}function f(a){return a.layer&&"elevationInfo"in a.layer?a.layer.elevationInfo:null}Object.defineProperty(c,"__esModule",{value:!0});c.getGeometryEffectiveElevationMode=e;c.getGraphicEffectiveElevationMode=g;c.getGraphicEffectiveElevationInfo=function(a){var b=
f(a);a=e(a.geometry,b);b=d.isSome(b)&&"on-the-ground"!==a?d.unwrapOr(b.offset,0)*h.getMetersPerUnit(d.unwrapOr(b.unit,"meters")):0;return{mode:a,offset:b}};c.hasGraphicFeatureExpressionInfo=function(a){if("on-the-ground"===g(a))return!1;a=f(a);a=d.isSome(a)&&a.featureExpressionInfo?a.featureExpressionInfo.expression:null;return!(!a||"0"===a)};c.getZForElevationMode=function(a,b,c){if(!d.isNone(c)){var e=a.hasZ?a.z:0,f=d.isSome(c.offset)?c.offset:0;switch(c.mode){case "absolute-height":return e-f;
case "on-the-ground":return 0;case "relative-to-ground":return a=(b.elevationProvider.getElevation(a.x,a.y,a.z,a.spatialReference,"ground")||0)+f,e-a;case "relative-to-scene":return a=(b.elevationProvider.getElevation(a.x,a.y,a.z,a.spatialReference,"scene")||0)+f,e-a}}}});