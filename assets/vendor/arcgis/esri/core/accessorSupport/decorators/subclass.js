// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../declare","../metadata"],function(z,k,v,p){function l(b,a){b.read&&("function"===typeof b.read?a.push(b.read):"object"===typeof b.read&&b.read.reader&&a.push(b.read.reader))}function m(b,a){b.write&&("function"===typeof b.write?a.push(b.write):"object"===typeof b.write&&b.write.writer&&a.push(b.write.writer))}function w(b){var a=[];b=p.getPropertiesMetadata(b.prototype);if(!b)return a;for(var d in b){var c=b[d];c.cast&&a.push(c.cast);c.copy&&a.push(c.copy);if(c=c.json)if(l(c,
a),m(c,a),c=c.origins)for(var e in c){var f=c[e];l(f,a);m(f,a)}}return a}function x(b){var a={values:{},descriptors:{}},d=["__bases__"],c=p.getPropertiesMetadata(b.prototype),e=w(b);Object.getOwnPropertyNames(b.prototype).filter(function(a){return-1!==d.indexOf(a)||c&&c.hasOwnProperty(a)||!q(Object.getOwnPropertyDescriptor(b.prototype,a))&&-1!==e.indexOf(b.prototype[a])?!1:!0}).forEach(function(c){var g=Object.getOwnPropertyDescriptor(b.prototype,c);q(g)?a.descriptors[c]=g:a.values[c]=b.prototype[c]});
return a}function y(b){var a=Object.getOwnPropertyNames(b),d=Object.getPrototypeOf(b.prototype).constructor,c=Object.getOwnPropertyNames(Function);c.push("__bases__","caller","arguments");var e=Object.getOwnPropertyNames(d),f={values:{},descriptors:{}};a.filter(function(a){return-1!==c.indexOf(a)?!1:-1===e.indexOf(a)||d[a]!==b[a]?!0:!1}).forEach(function(a){var c=Object.getOwnPropertyDescriptor(b,a);q(c)?f.descriptors[a]=c:f.values[a]=b[a]});return f}function q(b){return b&&!(!b.get&&!b.set)}Object.defineProperty(k,
"__esModule",{value:!0});k.subclass=function(b){return function(a){var d=x(a),c=y(a);null!=b&&(d.values.declaredClass=b);a=v(a.__bases__,d.values);var e=Object.getPrototypeOf(a.prototype),f=a._meta&&a._meta.bases,g=a._meta&&a._meta.parents;if(e&&f&&g&&!(1>=g.length))for(var r=1;r<f.length;r++){var n=f[r],k=n.__accessorMetadata__&&n.__accessorMetadata__.properties,p=e,e=Object.getPrototypeOf(e);if(-1!==g.indexOf(n))for(var t=0,l=Object.getOwnPropertyNames(n.prototype);t<l.length;t++){var h=l[t];if("initialized"!==
h&&"constructed"!==h&&"destroyed"!==h&&!(k&&h in k)){var m=Object.getOwnPropertyDescriptor(n.prototype,h);q(m)&&Object.defineProperty(p,h,m)}}}Object.defineProperties(a.prototype,d.descriptors);for(var u in c.values)a[u]=c.values[u];Object.defineProperties(a,c.descriptors);return a}}});