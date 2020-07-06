// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","./dom"],function(v,m,n){Object.defineProperty(m,"__esModule",{value:!0});var q;q=Array.prototype.find?function(f,e){return f.find(e)}:function(f,e){return f.filter(e)[0]};var r=function(f,e){var d=f;e.forEach(function(e){d=d&&d.children?q(d.children,function(d){return d.domNode===e}):void 0});return d},t=function(f,e,d){var g=function(h){d("domEvent",h);var c=e(),a;a=h.currentTarget;for(var g=c.domNode,k=[];a!==g;)k.push(a),a=a.parentNode;a=k;a.reverse();c=r(c.getLastRender(),
a);f.scheduleRender();var l;c&&(l=c.properties["on"+h.type].apply(c.properties.bind||this,arguments));d("domEventProcessed",h);return l};return function(){return g}};m.createProjector=function(f){var e,d=n.applyDefaultProjectionOptions(f),g=d.performanceLogger,h=!0,c,a=!1,p=[],k=[],l=function(u,b,c){var a;d.eventHandlerInterceptor=t(e,function(){return a},g);a=u(b,c(),d);p.push(a);k.push(c)},m=function(){c=void 0;if(h){h=!1;g("renderStart",void 0);for(var a=0;a<p.length;a++){var b=k[a]();g("rendered",
void 0);p[a].update(b);g("patched",void 0)}g("renderDone",void 0);h=!0}};return e={renderNow:m,scheduleRender:function(){c||a||(c=requestAnimationFrame(m))},stop:function(){c&&(cancelAnimationFrame(c),c=void 0);a=!0},resume:function(){a=!1;h=!0;e.scheduleRender()},append:function(a,b){l(n.dom.append,a,b)},insertBefore:function(a,b){l(n.dom.insertBefore,a,b)},merge:function(a,b){l(n.dom.merge,a,b)},replace:function(a,b){l(n.dom.replace,a,b)},detach:function(a){for(var b=0;b<k.length;b++)if(k[b]===
a)return k.splice(b,1),p.splice(b,1)[0];throw Error("renderFunction was not found");}}}});