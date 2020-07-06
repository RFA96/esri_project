// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4 ../../../../core/libs/gl-matrix-2/vec4f64 ../../../../layers/graphics/dehydratedFeatures ../graphics/elevationAlignmentUtils ../graphics/ElevationContext ../graphics/featureExpressionInfoUtils ./I3SUtil ../../support/geometryUtils ../../support/orientedBoundingBox ../../support/projectionUtils".split(" "),function(x,y,c,h,t,u,v,m,w,n,p,l,q,r){return function(){function d(a,
b,e,c,d,f,k){void 0===k&&(k={});this.indexSR=a;this._renderCoordsHelper=b;this.extent=c;this.elevationProvider=d;this.options=k;this.fp=l.frustum.create();this._poi=h.vec3f64.create();this.minDistance=Infinity;this.maxDistance=0;this.maxLodLevel=2;this._tmp1=h.vec3f64.create();this._tmp2=h.vec3f64.create();this._tmp3=h.vec3f64.create();this._tmp0=h.vec3f64.create();this.screenspaceErrorBias=k.screenspaceErrorBias||1;this.progressiveLoadFactor=k.progressiveLoadFactor||1;this.updateCamera(e);this.engineSR=
this._renderCoordsHelper.spatialReference;this.updateElevationInfo(f);this.tmpPoint=v.makeDehydratedPoint(0,0,0,a)}d.prototype.updateElevationInfo=function(a){null==a?this._elevationContext=null:(this._elevationContext=w.fromElevationInfo(a),this._elevationContext.featureExpressionInfoContext=n.createContextWithoutExpressionSupport(n.extractExpressionInfo(a,!1)))};d.prototype.updateCamera=function(a){l.frustum.fromMatrix(a.viewMatrix,a.projectionMatrix,this.fp);this._screenSizeFactor=1/(a.perScreenPixelRatio/
2);this._camPos=a.eye;this.minDistance=Infinity;this.maxDistance=0};d.prototype.setPointOfInterest=function(a){c.vec3.copy(this._poi,a)};d.prototype.updateScreenSpaceErrorBias=function(a){var b=this.screenspaceErrorBias;this.screenspaceErrorBias=a;return b};d.prototype.updateExtent=function(a){this.extent=a};d.prototype.getRenderMbs=function(a){var b=a.renderMbs;b||(b=u.vec4f64.fromValues(a.mbs[0],a.mbs[1],a.mbs[2],-1),a.renderMbs=b);0>b[3]&&(t.vec4.copy(b,a.mbs),this._elevationContext&&1E5>b[3]&&
(this.tmpPoint.x=b[0],this.tmpPoint.y=b[1],this.tmpPoint.z=b[2],b[2]=m.evaluateElevationAlignmentAtPoint(this.tmpPoint,this.elevationProvider,this._elevationContext,this._renderCoordsHelper)),r.mbsToMbs(b,this.indexSR,b,this.engineSR));return b};d.prototype.getRenderObb=function(a){if(a.obb&&!(0>a.obb.halfSize[0])&&a.renderObb){var b=a.renderObb;if(0>b.halfSize[0]){var e=0;this._elevationContext&&1E5>a.mbs[3]&&(this.tmpPoint.x=a.obb.center[0],this.tmpPoint.y=a.obb.center[1],this.tmpPoint.z=a.obb.center[2],
e=m.evaluateElevationAlignmentAtPoint(this.tmpPoint,this.elevationProvider,this._elevationContext,this._renderCoordsHelper)-a.obb.center[2]);p.transformObb(a.obb,this.indexSR,b,this.engineSR,e,a.isComputedObb)}return b}};d.prototype.isNodeVisible=function(a){var b=this.getRenderMbs(a);return this.isMBSinExtent(b)?a.obb?(a=this.getRenderObb(a),q.isVisible(a,this.fp)):this.isMBSVisible(b):!1};d.prototype.isGeometryVisible=function(a){return(a=this.getRenderObb(a))?q.isVisible(a,this.fp):!0};d.prototype.isMBSinExtent=
function(a){return this.extent?0!==p.intersectBoundingBoxWithMbs(this.extent,a):!0};d.prototype.isMBSVisible=function(a){return l.frustum.intersectsSphere(this.fp.planes,l.sphere.wrap(a[3],a))};d.prototype.screenSpaceDiameterMbs=function(a,b){var e=this.getRenderMbs(a);a=Math.sqrt(c.vec3.squaredDistance(e,this._camPos));e=a-e[3];this._updateMinMaxDistance(a);return 0>e?.5*Number.MAX_VALUE:b/e*this._screenSizeFactor};d.prototype.calcCameraDistance=function(a){return this.calcCameraDistanceToCenter(a)-
this.getRenderMbs(a)[3]};d.prototype.calcCameraDistanceToCenter=function(a){a=this.getRenderMbs(a);a=c.vec3.distance(a,this._camPos);this._updateMinMaxDistance(a);return a};d.prototype.calcAngleDependentLoD=function(a){a=this.getRenderMbs(a);var b=a[3];a=(Math.abs(a[0]*(a[0]-this._camPos[0])+a[1]*(a[1]-this._camPos[1])+a[2]*(a[2]-this._camPos[2]))/c.vec3.length(a)+b)/c.vec3.distance(a,this._camPos);return Math.min(1,a)};d.prototype.hasLOD=function(a){return 0!==a.lodMetric};d.prototype.getDistancePlanarMode=
function(a,b){var e=a[0]-b[0],c=a[1]-b[1];a=a[2]-b[2];e=e*e+c*c;b=b[3];if(e<=b*b)return Math.abs(a);b=Math.sqrt(e)-b;return Math.sqrt(a*a+b*b)};d.prototype.getDistanceGlobeMode=function(a,b){var e=c.vec3.length(b),d=c.vec3.length(a)-e;c.vec3.scale(this._tmp0,a,c.vec3.dot(a,b)/c.vec3.squaredLength(a));var g=c.vec3.squaredDistance(b,this._tmp0),f=b[3];if(g<=f*f)return Math.abs(d);b=c.vec3.scale(this._tmp0,b,1/e);e=c.vec3.scale(this._tmp1,b,e-f*f/2/e);g=c.vec3.subtract(this._tmp2,a,e);g=c.vec3.subtract(this._tmp2,
g,c.vec3.scale(this._tmp3,b,c.vec3.dot(b,g)));e=c.vec3.add(this._tmp2,e,c.vec3.scale(this._tmp2,g,f/c.vec3.length(g)));f=c.vec3.distance(a,e);2E5<=d&&(a=c.vec3.subtract(this._tmp1,a,e),a=c.vec3.dot(a,b)/c.vec3.length(a),.08>a&&(a=1E-4),f/=a);return f};d.prototype.getDistance=function(a,b){return this.engineSR===r.SphericalECEFSpatialReference?this.getDistanceGlobeMode(a,b):this.getDistancePlanarMode(a,b)};d.prototype._updateMinMaxDistance=function(a){0<a?(this.minDistance=Math.min(this.minDistance,
a),this.maxDistance=Math.max(this.maxDistance,a)):(this.minDistance=0,this.maxDistance=Math.max(this.maxDistance,-a))};d.prototype.getLodLevel=function(a){if(0===a.lodMetric||!a.resources.hasFeatureData)return 0;if(0===a.childCount)return this.maxLodLevel;if(1>this.progressiveLoadFactor){var b=this.screenspaceErrorBias;return this.evaluateLODmetric(a,this.progressiveLoadFactor*this.screenspaceErrorBias)?this.evaluateLODmetric(a,b)?2:1:0}return this.evaluateLODmetric(a,this.screenspaceErrorBias)?this.maxLodLevel:
0};d.prototype.evaluateLODmetric=function(a,b){switch(a.lodMetric){case 2:var c=this.getRenderMbs(a),d=this.getDistance(this._camPos,c),g=2*d/this._screenSizeFactor;this._updateMinMaxDistance(d+c[3]);return a.maxError*b<=g;case 1:return b=this.screenSpaceDiameterMbs(a,a.mbs[3]*b),this.options.angleDependentLoD&&(b*=this.calcAngleDependentLoD(a)),b<a.maxError;case 3:return 10>this.screenSpaceDiameterMbs(a,a.maxError)*b;case 4:return this.calcCameraDistance(a)>a.maxError*b}return!1};d.prototype.distToPOI=
function(a){a=this.getRenderMbs(a);return c.vec3.distance(a,this._poi)-a[3]};d.prototype.distCameraToPOI=function(){return c.vec3.distance(this._camPos,this._poi)};return d}()});