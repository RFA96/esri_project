// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/mathUtils","../../../../../renderers/support/utils"],function(q,g,h,m){function k(b,a){switch(a.transformationType){case "additive":var c=e(a.minSize,b);return b+(c||a.minDataValue);case "constant":return c=(c=a.stops)&&c.length&&c[0].size,null==c&&(c=a.minSize),e(c,b);case "clamped-linear":var c=(b-a.minDataValue)/(a.maxDataValue-a.minDataValue),d=e(a.minSize,b),f=e(a.maxSize,b);b=b<=a.minDataValue?d:b>=a.maxDataValue?f:d+c*(f-d);return b;case "proportional":return c=
b/a.minDataValue,d=e(a.minSize,b),b=e(a.maxSize,b),h.clamp(c*d,d,b);case "stops":return d=n(b,a.cache.ipData),f=d[0],c=d[1],d=d[2],f===c?b=e(a.stops[f].size,b):(f=e(a.stops[f].size,b),b=e(a.stops[c].size,b),b=f+(b-f)*d),b;case "real-world-size":c=m.meterIn[a.valueUnit];d=e(a.minSize,b);f=e(a.maxSize,b);a=a.valueRepresentation;var l=null,l="area"===a?2*Math.sqrt(b/p)/c:"radius"===a||"distance"===a?2*b/c:b/c;return h.clamp(l,d,f);case "identity":return b;case "unknown":return null}}function e(b,a){return"number"===
typeof b?b:k(a,b)}function n(b,a){if(a){var c=0,d=a.length-1;a.some(function(a,e){if(b<a)return d=e,!0;c=e;return!1});return[c,d,(b-a[c])/(a[d]-a[c])]}}Object.defineProperty(g,"__esModule",{value:!0});var p=Math.PI;g.getSizeForValueSimple=k});