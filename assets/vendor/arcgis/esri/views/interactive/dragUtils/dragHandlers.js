// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/handleUtils","../../../core/maybe"],function(m,a,l,f){function g(h,d,e){var b=null;return h.events.on("drag",function(c){"start"===c.action&&(b=d(h,c));if(!f.isNone(b)){var a=b(c);f.isSome(a)&&e(a);"end"===c.action&&(b=null)}})}function k(a,d,e){for(var b=[],c=0;c<a.length;c++)b.push(g(a[c],d,e));return l.handlesGroup(b)}Object.defineProperty(a,"__esModule",{value:!0});a.createManipulatorDragHandler=g;a.createManipulatorDragHandlerOneOf=function(a,d,e){var b=
null;return k(a,function(c,a){return f.isSome(b)?null:b=d(c,a)},function(a){"end"===a.action&&(b=null);return e(a)})};a.createManipulatorDragHandlerMany=k});