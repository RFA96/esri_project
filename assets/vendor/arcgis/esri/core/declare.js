// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/_base/declare","./deprecate","./Logger"],function(p,q,h,k,m){function n(a,b){a&&!Array.isArray(a)&&"function"!==typeof a&&(b=a,a=null);a=a||[];b=b||{};return d([this].concat(a),b)}function d(a,b){a&&!Array.isArray(a)&&"function"!==typeof a&&(b=a,a=null);"function"===typeof a?a=[a]:a||(a=[]);1<a.length&&k.deprecated(l,"Extending multiple classes with Accessor",{version:"4.13",see:"https://arcg.is/T8fr4"});b=b||{};var c,e;c=0;for(e=f.length;c<e;c++)f[c](a,b);a=h(a,
b);a.createSubclass=n;var d=a.prototype.isInstanceOf;a.prototype.isInstanceOf=function(){k.deprecatedFunction(l,"isInstanceOf",{moduleName:"Accessor",replacement:"Use `instanceof` or check for property presence `'property' in instance`",version:"4.13"});return d.apply(this,arguments)};c=0;for(e=g.length;c<e;c++)g[c](a);return a}var l=m.getLogger("esri.core.Accessor"),f=[],g=[];(function(a){a.hasMixin=function(a,c){a=Array.isArray(a)?a.reduce(function(a,b){return b._meta?a.concat(b._meta.bases):a},
[]):a._meta?a._meta.bases:a;if(!a)return!1;if("string"===typeof c)for(var b=a.length-1;0<=b;b--)if(a[b].prototype.declaredClass===c)return!0;return-1!==a.indexOf(c)};a.safeMixin=function(a,c){return h.safeMixin(a,c)};a.before=function(a){f.push(a)};a.after=function(a){g.push(a)}})(d||(d={}));return d});