// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/jsonMap"],function(u,e,p){Object.defineProperty(e,"__esModule",{value:!0});var q=new p.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});e.toJSONGeometryType=function(l){return q.toJSON(l)};e.analyzeRings=function(l,e,t){for(var d=[],m=[],b=0,a=0,r=0;r<l.length;r++){var f=l[r],c=a,g=f[0][0],h=f[0][1];d[a++]=g;d[a++]=h;for(var k=0,n=
1;n<f.length;++n){var p=g,q=h,g=f[n][0],h=f[n][1],k=k+(h*p-g*q);d[a++]=g;d[a++]=h}e(k/2);0<k?(0<c-b&&(t(b,c,d,m),b=c),m.length=0):0>k?0<c-b?m.push(.5*(c-b)):a=c:a=c}0<a-b&&t(b,a,d,m)}});