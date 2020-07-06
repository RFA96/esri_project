// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/jsonMap","../../geometry/support/jsonUtils"],function(g,c,d,e){Object.defineProperty(c,"__esModule",{value:!0});var f=new d.default({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});c.generalizeToRESTParameters=function(b){var a=b.toJSON();b=a.geometries;var c=a.deviationUnit,a={maxDeviation:a.maxDeviation};b&&b.length&&
(a.geometries=JSON.stringify({geometryType:e.getJsonType(b[0]),geometries:b}),a.sr=JSON.stringify(b[0].spatialReference));f.write(c,a,"deviationUnit");return a}});