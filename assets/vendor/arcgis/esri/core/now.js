// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","./global"],function(d,e,c){return function(){var a=c.performance||{};if(a.now)return function(){return a.now()};if(a.webkitNow)return function(){return a.webkitNow()};if(a.mozNow)return function(){return a.mozNow()};if(a.msNow)return function(){return a.msNow()};if(a.oNow)return function(){return a.oNow()};var b;b=a.timing&&a.timing.navigationStart?a.timing.navigationStart:Date.now();return function(){return Date.now()-b}}()});