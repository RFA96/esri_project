// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../Graphic ../../core/JSONSupport ../../core/accessorSupport/decorators ../../core/accessorSupport/decorators/reader ./FeatureSet ./NAMessage ./RouteResult".split(" "),function(p,q,h,b,d,k,c,e,l,m,n){function f(b){return b&&l.fromJSON(b).features.map(function(a){return a})}return function(g){function a(a){a=g.call(this,a)||this;a.barriers=null;a.messages=null;a.pointBarriers=null;a.polylineBarriers=
null;a.polygonBarriers=null;a.routeResults=null;return a}h(a,g);a.prototype.readPointBarriers=function(a,b){return f(b.barriers||b.pointBarriers)};a.prototype.readPolylineBarriers=function(a){return f(a)};a.prototype.readPolygonBarriers=function(a){return f(a)};b([c.property({aliasOf:"pointBarriers"})],a.prototype,"barriers",void 0);b([c.property({type:[m]})],a.prototype,"messages",void 0);b([c.property({type:[d]})],a.prototype,"pointBarriers",void 0);b([e.reader("pointBarriers",["barriers","pointBarriers"])],
a.prototype,"readPointBarriers",null);b([c.property({type:[d]})],a.prototype,"polylineBarriers",void 0);b([e.reader("polylineBarriers")],a.prototype,"readPolylineBarriers",null);b([c.property({type:[d]})],a.prototype,"polygonBarriers",void 0);b([e.reader("polygonBarriers")],a.prototype,"readPolygonBarriers",null);b([c.property({type:[n]})],a.prototype,"routeResults",void 0);return a=b([c.subclass("esri.tasks.support.RouteResultsContainer")],a)}(c.declared(k.JSONSupport))});