// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","./lang"],function(n,g,m){function k(a,d,c){for(var b=0;b<a.length;b++){var h=a[b];if(null==c)return;if(!(h in c))if(d)c[h]={};else return;c=c[h]}return c}function l(a,d,c){return d?Object.keys(d).reduce(function(b,a){var f=b[a],e=d[a];if(f===e)return b;if(void 0===f)return b[a]=m.clone(e),b;if(Array.isArray(e)||Array.isArray(b))f=f?Array.isArray(f)?b[a]=f.concat():b[a]=[f]:b[a]=[],e&&(Array.isArray(e)||(e=[e]),c?e.forEach(function(a){-1===f.indexOf(a)&&f.push(a)}):b[a]=
e.concat());else if(e&&"object"===typeof e)b[a]=l(f,e,c);else if(!b.hasOwnProperty(a)||d.hasOwnProperty(a))b[a]=e;return b},a||{}):a}Object.defineProperty(g,"__esModule",{value:!0});g.deepMerge=function(a,d,c){void 0===c&&(c=!1);return l(a,d,c)};g.getDeepValue=function(a,d){if(null!=d)return d[a]||k(a.split("."),!1,d)};g.setDeepValue=function(a,d,c){var b=a.split(".");a=b.pop();(c=k(b,!0,c))&&a&&(c[a]=d)}});