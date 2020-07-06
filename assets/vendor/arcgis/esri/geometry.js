// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ./core/jsonMap ./core/accessorSupport/ensureType ./geometry/Extent ./geometry/Geometry ./geometry/Multipoint ./geometry/Point ./geometry/Polygon ./geometry/Polyline ./geometry/SpatialReference ./geometry/support/jsonUtils".split(" "),function(n,a,c,k,d,b,e,f,g,h,l,m){Object.defineProperty(a,"__esModule",{value:!0});a.Extent=d;a.BaseGeometry=b;a.Multipoint=e;a.Point=f;a.Polygon=g;a.Polyline=h;a.SpatialReference=l;a.isGeometry=function(a){return a instanceof b};a.fromJSON=m.fromJSON;
a.typeKebabDictionary=c.strict()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"});a.isFeatureGeometryType=function(a){return"point"===a||"multipoint"===a||"polyline"===a||"polygon"===a};a.featureGeometryTypeKebabDictionary=c.strict()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"});a.geometryTypes={base:b,
key:"type",typeMap:{extent:d,multipoint:e,point:f,polyline:h,polygon:g}};a.ensureType=k.ensureOneOfType(a.geometryTypes)});