// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper dojo/i18n!../../nls/smartMapping ../../../PopupTemplate ./support/utils".split(" "),function(q,d,e,f,l,n,g){function p(b){return f(this,void 0,void 0,function(){return e(this,function(c){switch(c.label){case 0:return[4,b.layer.load()];case 1:return c.sent(),[2,b]}})})}function m(b,c,a){void 0===a&&(a="divide");a=g.getFieldAndExpressionInfos({renderer:b,layer:c,normFieldExpressionTemplate:a});b=a.fieldInfos;
a=a.expressionInfos;return new n({content:g.getContentFromFieldInfos(c,{fieldInfos:b,expressionInfos:a}),expressionInfos:a,fieldInfos:b})}Object.defineProperty(d,"__esModule",{value:!0});d.getTemplates=function(b){return f(this,void 0,void 0,function(){var c,a,h,d,f,k;return e(this,function(e){switch(e.label){case 0:return[4,p(b)];case 1:c=e.sent();a=c.renderer;h=c.layer;d=g.getPrimaryVisualVariables(a);if(!d.length)return[2,null];f={name:"simple",title:l.simple,value:m(a,h)};k=[];g.hasNormalizedField(a)&&
k.push({name:"simple-percent",title:l.simpleNormFieldAsPercent,value:m(a,h,"percentage")});return[2,{primaryTemplate:f,secondaryTemplates:k}]}})})}});