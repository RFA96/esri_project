// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper dojo/i18n!../../nls/smartMapping ../../../PopupTemplate ./support/utils".split(" "),function(p,b,c,d,l,m,h){function n(e){return d(this,void 0,void 0,function(){return c(this,function(a){switch(a.label){case 0:return[4,e.layer.load()];case 1:return a.sent(),[2,e]}})})}Object.defineProperty(b,"__esModule",{value:!0});b.getTemplates=function(e){return d(this,void 0,void 0,function(){var a,b,f,g,d,k;
return c(this,function(c){switch(c.label){case 0:return e.renderer.field?[4,n(e)]:[2,null];case 1:return a=c.sent(),b=a.renderer,f=a.layer,g=h.getFieldAndExpressionInfos({renderer:b,layer:f}).fieldInfos,d=new m({content:h.getContentFromFieldInfos(f,{fieldInfos:g}),fieldInfos:g}),k={name:"heatmap",title:l.heatmap,value:d},[2,{primaryTemplate:k,secondaryTemplates:[]}]}})})}});