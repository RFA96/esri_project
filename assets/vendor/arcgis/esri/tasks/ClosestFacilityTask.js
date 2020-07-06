// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../request ../core/promiseUtils ../core/queryUtils ../core/accessorSupport/decorators ../geometry/support/normalizeUtils ./Task ./mixins/NAServiceDescription ./support/ClosestFacilitySolveResult".split(" "),function(y,z,l,n,m,p,q,r,k,t,u,v,w){var x=r.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},
impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:function(h){return h.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});return function(h){function b(a){a=h.call(this,a)||this;a.url=null;return a}n(b,h);b.prototype.solve=function(a,
b){var e=this,f=[],c=[],d={},g={};a.incidents&&a.incidents.features&&this._collectGeometries(a.incidents.features,c,"incidents.features",d);a.facilities&&a.facilities.features&&this._collectGeometries(a.facilities.features,c,"facilities.features",d);a.pointBarriers&&a.pointBarriers.features&&this._collectGeometries(a.pointBarriers.features,c,"pointBarriers.features",d);a.polylineBarriers&&a.polylineBarriers.features&&this._collectGeometries(a.polylineBarriers.features,c,"polylineBarriers.features",
d);a.polygonBarriers&&a.polygonBarriers.features&&this._collectGeometries(a.polygonBarriers.features,c,"polygonBarriers.features",d);return t.normalizeCentralMeridian(c).then(function(a){for(var b in d){var c=d[b];f.push(b);g[b]=a.slice(c[0],c[1])}return e._isInputGeometryZAware(g,f)?e.getServiceDescription():q.resolve({dontCheck:!0})}).then(function(c){("dontCheck"in c?c.dontCheck:c.hasZ)||e._dropZValuesOffInputGeometry(g,f);c=function(c){g[c].forEach(function(b,d){a.get(c)[d].geometry=b})};for(var d in g)c(d);
d={query:l({},e.parsedUrl.query,{f:"json"},x.toQueryParams(a))};if(e.requestOptions||b)d=l({},e.requestOptions,b,d);return p(e.parsedUrl.path+"/solveClosestFacility",d)}).then(function(a){return w.fromJSON(a.data)})};b.prototype._collectGeometries=function(a,b,e,f){f[e]=[b.length,b.length+a.length];a.forEach(function(a){b.push(a.geometry)})};m([k.property()],b.prototype,"url",void 0);return b=m([k.subclass("esri.tasks.ClosestFacilityTask")],b)}(k.declared(v.NAServiceDescriptionMixin(u)))});