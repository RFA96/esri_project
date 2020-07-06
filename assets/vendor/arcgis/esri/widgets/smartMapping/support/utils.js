// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../Color ../../../core/maybe ../../../intl/date ../../../renderers/support/utils ../../../renderers/visualVariables/SizeVariable".split(" "),function(q,d,g,h,n,p,m){Object.defineProperty(d,"__esModule",{value:!0});d.formatDateLabel=function(a){return n.formatDate(new Date(a),p.timelineDateFormatOptions)};d.getDeviationValues=function(a,b,c){if(!h.isSome(b)||!h.isSome(a))return[];for(var e=[],f=-1*c;f<=c;f++)0!==f&&e.push(b+f*a);return e};d.getPathForSizeStops=function(a){var b=
a.min,c=a.pathHeight,e=a.pathWidth,f=a.topWidth*e,e=a.bottomWidth*e,d=a.max-b;return"M"+f+" 0 L"+f+" "+Math.round(c-(a.topValue-b)/d*c)+" L"+e+" "+Math.round(c-(a.bottomValue-b)/d*c)+" L"+e+" "+c+" L0 "+c+" L0 0 Z"};d.getSizesFromVariable=function(a){var b=a.maxSize;a=a.minSize;b instanceof m&&(b=b.stops[0].size);a instanceof m&&(a=a.stops[0].size);return[b,a]};d.getStopChanges=function(a,b,c){for(var e=c.length-1,d=c[0],g=c[e]-d,h=b-a,k=[],l=1;l<e;l++)k.push({index:l,value:(c[l]-d)/g*h+a});k.unshift({index:0,
value:a});k.push({index:e,value:b});return k};d.getFillFromColor=function(a){return a instanceof g?a.toCss(!0):g.fromString(a).toCss(!0)}});