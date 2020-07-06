// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/Error ../../core/object ./FeatureReduction ./FeatureReductionCluster ./FeatureReductionSelection".split(" "),function(m,c,g,h,k,l,e){function f(a,b,d){return a?"selection"!==a.type?(d.messages&&d.messages.push(new g("featureReduction:unsupported","FeatureReduction of type '"+a.declaredClass+"' are not supported in scenes.",{featureReduction:a,context:d})),null):a.write(b,d):null}Object.defineProperty(c,"__esModule",{value:!0});c.webSceneFeatureReductionTypes={key:"type",
base:k.default,typeMap:{selection:e.default}};c.read=function(a,b){b=b.layerDefinition||b;if(a=b.featureReduction)switch(a.type){case "selection":return e.default.fromJSON(a);case "cluster":return l.default.fromJSON(a)}return null};c.writeTarget=function(a,b,d,c){(a=f(a,{},c))&&h.setDeepValue(d,a,b)};c.write=f});