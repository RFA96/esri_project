// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../geometry ../../core/Accessor ../../core/screenUtils ../../core/accessorSupport/decorators ../../geometry/support/geodesicUtils ../../geometry/support/normalizeUtils ../../geometry/support/spatialReferenceUtils ../../geometry/support/webMercatorUtils ../../geometry/support/WKIDUnitConversion".split(" "),function(y,z,r,k,m,t,n,h,u,v,w,x,l){function p(e,b){e="decimal-degrees"===e?x.webMercatorToGeographic(b,
!0):b;return[e.x,e.y]}function q(e){var b=e.state.paddedViewState,a=e.width;return e.spatialReference.isWrappable&&b.worldScreenWidth<a}return function(e){function b(a){a=e.call(this,a)||this;a.scaleComputedFrom=n.createScreenPoint();a.view=null;return a}r(b,e);Object.defineProperty(b.prototype,"state",{get:function(){return this.get("view.ready")&&"2d"===this.get("view.type")?"ready":"disabled"},enumerable:!0,configurable:!0});b.prototype.getScaleBarProperties=function(a,g){if("disabled"===this.state||
isNaN(a)||!g)return null;var d=this._getDistanceInKm(this.view,this.scaleComputedFrom);return"metric"===g?this._getScaleBarProps(a,d,"metric"):this._getScaleBarProps(a,d/1.609,"non-metric")};b.prototype._getLocationUnit=function(){var a=this.get("view.spatialReference"),g=a.wkid,d=a.wkt;return a.isWebMercator||d&&-1<d.indexOf("WGS_1984_Web_Mercator")?"decimal-degrees":null!=l[g]||d&&-1<d.indexOf("PROJCS")?"linear-unit":"unknown"};b.prototype._getDistanceInKm=function(a,g){var d=a.extent,c=a.spatialReference,
b=this._getLocationUnit();if("linear-unit"===b)return b=d.width,a=c.wkid,null!=l[a]?c=l.values[l[a]]:(c=c.wkt,a=c.lastIndexOf(",")+1,g=c.lastIndexOf("]]"),c=parseFloat(c.substring(a,g))),b*c/1E3;c=this._getScaleMeasuringPoints(a,g);a=c[1];c=new m.Polyline({paths:[[p(b,c[0]),p(b,a)]],spatialReference:4326});c=v.straightLineDensify(c,10);return u.geodesicLengths([c],"kilometers")[0]};b.prototype._getScaleMeasuringPoints=function(a,b){var d=a.width,c=a.height,g=a.position,f=a.spatialReference;if(q(a))return d=
w.getInfo(f).valid,a=new m.Point(d[0],0,f),d=new m.Point(d[1],0,f),[a,d];f=b.y-g[1];f>c?f=c:0>f&&(f=0);c=n.createScreenPoint(0,f);d=n.createScreenPoint(d,f);f=a.toMap(c);a=a.toMap(d);return[f,a]};b.prototype._getScaleBarProps=function(a,b,d){var c=this.view,c=q(c)?c.state.paddedViewState.worldScreenWidth:c.width;b=a*b/c;d="metric"===d?"km":"mi";.1>b&&("mi"===d?(b*=5280,d="ft"):"km"===d&&(b*=1E3,d="m"));for(c=0;1<=b;)b/=10,c++;var e=this._getConstraints(b);if(!e)return null;var f=e.min,e=e.max,f=e/
b>=b/f?f:e;return{length:f/b*a,value:Math.pow(10,c)*f,unit:d}};b.prototype._getConstraints=function(a){if(.5<a)return{min:.5,max:1};if(.3<a)return{min:.3,max:.5};if(.2<a)return{min:.2,max:.3};if(.15<a)return{min:.15,max:.2};if(.1<=a)return{min:.15,max:.1}};k([h.property()],b.prototype,"scaleComputedFrom",void 0);k([h.property({readOnly:!0,dependsOn:["scaleComputedFrom","view.ready","view.scale"]})],b.prototype,"state",null);k([h.property()],b.prototype,"view",void 0);return b=k([h.subclass("esri.widgets.Scalebar.ScaleBarViewModel")],
b)}(h.declared(t))});