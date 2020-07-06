// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/unitUtils ../core/accessorSupport/decorators ./Point ./Polygon ./support/geodesicUtils ./support/webMercatorUtils ./support/WKIDUnitConversion".split(" "),function(v,w,q,r,g,m,e,t,k,u,n,h){return function(p){function b(){for(var a=[],d=0;d<arguments.length;d++)a[d]=arguments[d];a=p.apply(this,a)||this;a.center=null;a.geodesic=!1;a.numberOfPoints=60;a.radius=1E3;a.radiusUnit=
"meters";return a}r(b,p);l=b;b.prototype.normalizeCtorArgs=function(a,d){var b;if(a&&a.center)b=a;else{if(a&&a.rings)return this.inherited(arguments);b={center:a}}return q({},this.inherited(arguments,[]),b,d)};b.prototype.initialize=function(){var a=this.center,d=this.numberOfPoints;this.hasZ=a&&a.hasZ;if(0===this.rings.length&&a){var b=m.convertUnit(this.radius,this.radiusUnit,"meters"),c=a.spatialReference,f="geographic";if(c.isWebMercator)f="webMercator";else if(null!=h[c.wkid]||c.wkt&&0===c.wkt.indexOf("PROJCS"))f=
"projected";if(this.geodesic){c=void 0;switch(f){case "webMercator":c=n.webMercatorToGeographic(a);break;case "projected":console.error("Creating a geodesic circle requires the center to be specified in web mercator or geographic coordinate system");break;case "geographic":c=a}a=this._createGeodesicCircle(c,b,d);"webMercator"===f&&(a=n.geographicToWebMercator(a))}else c=void 0,"webMercator"===f||"projected"===f?c=b/this._convert2Meters(1,a.spatialReference):"geographic"===f&&(c=m.lengthToDegrees(b,
"meters")),a=this._createPlanarCircle(a,c,d);this.spatialReference=a.spatialReference;this.addRing(a.rings[0])}};b.prototype.clone=function(){var a=this.numberOfPoints,d=this.radius,b=this.radiusUnit,c=this.geodesic;return new l({center:this.center.clone(),numberOfPoints:a,radius:d,radiusUnit:b,geodesic:c})};b.prototype._createGeodesicCircle=function(a,d,b){for(var c=0,f=[];360>c;){var e=[0,0];u.directGeodeticSolver(e,[a.x,a.y],c,d);this.hasZ&&e.push(a.z);f.push(e);c+=360/b}f.push(f[0]);return new k(f)};
b.prototype._createPlanarCircle=function(a,b,e){for(var c=0,d=[];c<2*Math.PI;){var g=[a.x+Math.cos(-c)*b,a.y+Math.sin(-c)*b];this.hasZ&&g.push(a.z);d.push(g);c+=Math.PI/(e/2)}d.push(d[0]);return new k({spatialReference:a.spatialReference,rings:[d]})};b.prototype._convert2Meters=function(a,b){if(null!=h[b.wkid])b=h.values[h[b.wkid]];else{b=b.wkt;var d=b.lastIndexOf(",")+1,c=b.lastIndexOf("]]");b=parseFloat(b.substring(d,c))}return a*b};var l;g([e.property({type:t})],b.prototype,"center",void 0);g([e.property()],
b.prototype,"geodesic",void 0);g([e.property()],b.prototype,"numberOfPoints",void 0);g([e.property()],b.prototype,"radius",void 0);g([e.property()],b.prototype,"radiusUnit",void 0);return b=l=g([e.subclass("esri.geometry.Circle")],b)}(e.declared(k))});