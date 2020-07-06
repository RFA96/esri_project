// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../kernel ../languageUtils ../featureset/actions/SpatialFilter ../featureset/sources/Empty ../../core/promiseUtils ../../geometry/Geometry ../../geometry/geometryEngineAsync".split(" "),function(r,m,p,f,q,n,k,h,l){function g(c,e,d,g,m){return m(c,e,function(a,c,b){if(2>b.length)return g(Error("Missing Parameters"));b=f.autoCastFeatureToGeometry(b);if(null===b[0]&&null===b[1])return k.resolve(!1);if(f.isFeatureSet(b[0]))return b[1]instanceof h?k.resolve(new q({parentfeatureset:b[0],
relation:d,relationGeom:b[1]})):null===b[1]?k.resolve(new n({parentfeatureset:b[0]})):g("Spatial Relation cannot accept this parameter type");if(b[0]instanceof h){if(b[1]instanceof h){a=null;switch(d){case "esriSpatialRelEnvelopeIntersects":a=l.intersects(p.shapeExtent(b[0]),p.shapeExtent(b[1]));break;case "esriSpatialRelIntersects":a=l.intersects(b[0],b[1]);break;case "esriSpatialRelContains":a=l.contains(b[0],b[1]);break;case "esriSpatialRelOverlaps":a=l.overlaps(b[0],b[1]);break;case "esriSpatialRelWithin":a=
l.within(b[0],b[1]);break;case "esriSpatialRelTouches":a=l.touches(b[0],b[1]);break;case "esriSpatialRelCrosses":a=l.crosses(b[0],b[1])}return null!==a?a:k.reject(Error("Unrecognised Relationship"))}return f.isFeatureSet(b[1])?k.resolve(new q({parentfeatureset:b[1],relation:d,relationGeom:b[0]})):null===b[1]?k.resolve(!1):g("Spatial Relation cannot accept this parameter type")}if(null===b[0]){if(f.isFeatureSet(b[1]))return k.resolve(new n({parentfeatureset:b[1]}));if(b[1]instanceof h||null===b[1])return k.resolve(!1)}else return g("Spatial Relation cannot accept this parameter type")})}
Object.defineProperty(m,"__esModule",{value:!0});m.registerFunctions=function(c){"async"===c.mode&&(c.functions.intersects=function(e,d){return g(e,d,"esriSpatialRelIntersects",c.failDefferred,c.standardFunctionAsync)},c.functions.envelopeintersects=function(e,d){return g(e,d,"esriSpatialRelEnvelopeIntersects",c.failDefferred,c.standardFunctionAsync)},c.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),c.functions.contains=function(e,d){return g(e,d,"esriSpatialRelContains",c.failDefferred,
c.standardFunctionAsync)},c.functions.overlaps=function(e,d){return g(e,d,"esriSpatialRelOverlaps",c.failDefferred,c.standardFunctionAsync)},c.functions.within=function(e,d){return g(e,d,"esriSpatialRelWithin",c.failDefferred,c.standardFunctionAsync)},c.functions.touches=function(e,d){return g(e,d,"esriSpatialRelTouches",c.failDefferred,c.standardFunctionAsync)},c.functions.crosses=function(e,d){return g(e,d,"esriSpatialRelCrosses",c.failDefferred,c.standardFunctionAsync)},c.functions.relate=function(e,
d){return c.standardFunctionAsync(e,d,function(c,d,a){a=f.autoCastFeatureToGeometry(a);f.pcCheck(a,3,3);if(a[0]instanceof h&&a[1]instanceof h)return l.relate(a[0],a[1],f.toString(a[2]));if(a[0]instanceof h&&null===a[1]||a[1]instanceof h&&null===a[0])return!1;if(f.isFeatureSet(a[0])&&null===a[1])return new n({parentfeatureset:a[0]});if(f.isFeatureSet(a[1])&&null===a[0])return new n({parentfeatureset:a[1]});if(f.isFeatureSet(a[0])&&a[1]instanceof h)return a[0].relate(a[1],f.toString(a[2]));if(f.isFeatureSet(a[1])&&
a[0]instanceof h)return a[1].relate(a[0],f.toString(a[2]));if(null===a[0]&&null===a[1])return!1;throw Error("Illegal Argument");})})}});