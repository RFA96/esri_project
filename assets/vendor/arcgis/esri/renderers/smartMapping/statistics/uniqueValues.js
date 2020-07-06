// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/restHelper ../../../core/Error ../../../core/maybe ./support/utils ../support/utils".split(" "),function(y,z,u,m,b,n,h,v,w,k){function x(a){return b(this,void 0,void 0,function(){var c,p,d,f,b,g,e,q,r,t;return m(this,function(l){switch(l.label){case 0:if(!a||!a.layer||!a.field&&!a.valueExpression)throw new h("unique-values:missing-parameters",
"'layer' and 'field' or 'valueExpression' parameters are required");p=(c=a.valueExpression||a.sqlExpression)&&!a.sqlExpression;if(c)if(p){if(!a.view)throw new h("unique-values:missing-parameters","View is required when 'valueExpression' is specified");}else if(!a.valueExpression)throw new h("unique-values:missing-parameters","'valueExpression' parameters are required");d=[0,2,1,3,4];f=a.layer;b=n(a,["layer"]);g=k.createLayerAdapter(f,d);e=u({layerAdapter:g},b);if(!g)throw new h("unique-values:invalid-parameters",
"'layer' must be one of these types: "+k.getLayerTypeLabels(d).join(", "));q=v.isSome(e.signal)?{signal:e.signal}:null;return[4,g.load(q)];case 1:return l.sent(),[4,k.getFieldsList({field:e.field,valueExpression:e.valueExpression})];case 2:r=l.sent();if(t=w.verifyBasicFieldValidity(g,r,"unique-values:invalid-parameters"))throw t;return[2,e]}})})}return function(a){return b(this,void 0,void 0,function(){var c,b,d;return m(this,function(f){switch(f.label){case 0:return[4,x(a)];case 1:return c=f.sent(),
b=c.layerAdapter,d=n(c,["layerAdapter"]),[2,b.uniqueValues(d)]}})})}});