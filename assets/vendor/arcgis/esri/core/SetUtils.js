// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","@dojo/framework/shim/array"],function(e,d,f){function g(a){if(0===a.size)throw Error("Set is empty");return a.values().next().value}function h(a){if(0===a.size)throw Error("Set is empty");var c,b=!1;a.forEach(function(a){b||(c=a,b=!0)});return c}Object.defineProperty(d,"__esModule",{value:!0});d.someSet=Set.prototype.entries?function(a,c){a=a.entries();for(var b=a.next();!b.done;b=a.next())if(c(b.value[0]))return!0;return!1}:function(a,c){var b=!0;a.forEach(function(a){b&&
(b=!c(a))});return!b};e=!!Set.prototype.values;d.valuesOfSet=e?function(a){return f.from(a.values())}:function(a){var c=Array(a.size),b=0;a.forEach(function(a){return c[b++]=a});return c};d.createSetFromValues=e?function(a){return new Set(a)}:function(a){for(var c=new Set,b=0;b<a.length;b++)c.add(a[b]);return c};d.firstOfSet=e?g:h;d.reduceSet=function(a,c,b){var d=b;a.forEach(function(a){return d=c(a,d)});return d}});