// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/asyncUtils ../../core/promiseUtils ../../core/Warning".split(" "),function(p,b,h,k,l,m,n){Object.defineProperty(b,"__esModule",{value:!0});b.loadStyleRenderer=function(c,a,b){return k(this,void 0,void 0,function(){var d,e,f;return h(this,function(g){switch(g.label){case 0:return(d=c&&c.getAtOrigin&&c.getAtOrigin("renderer",a.origin))&&"unique-value"===d.type&&d.styleOrigin?[4,l.result(d.populateFromStyle())]:
[3,2];case 1:e=g.sent(),m.throwIfAborted(b),!1===e.ok&&(f=e.error,a&&a.messages&&a.messages.push(new n("renderer:style-reference","Failed to create unique value renderer from style reference: "+f.message,{error:f,context:a})),c.clear("renderer",a.origin)),g.label=2;case 2:return[2]}})})}});