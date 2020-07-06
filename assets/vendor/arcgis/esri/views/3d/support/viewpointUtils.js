// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../Camera ../../../geometry ../../../Graphic ../../../Viewpoint ../../../core/asyncUtils ../../../core/compilerUtils ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ../../../core/libs/gl-matrix-2/mat3 ../../../core/libs/gl-matrix-2/mat3f64 ../../../core/libs/gl-matrix-2/mat4f64 ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ../../../geometry/support/webMercatorUtils ../camera/intersectionUtils ./cameraUtils ./ElevationProvider ./geometryUtils ./mathUtils ./projectionUtils".split(" "),
function(va,x,r,z,Q,v,ha,I,Y,ia,R,ja,ka,Z,la,ma,k,J,t,aa,B,H,l,ba,na,ca,A){function S(a){return 360-ca.cyclicalDeg.normalize(a)}function F(a){return ca.cyclicalDeg.normalize(360-a)}function K(a,b){a&&a.resolver&&(null==b?a.resolver.reject():a.resolver.resolve(b));return b}function da(a,b,c,e){if(!b)return K(e);var d=a.spatialReference||v.SpatialReference.WGS84;if(b.camera){a=b.get("camera.position.spatialReference");if(!B.canProject(a,d))return K(e);b=b.camera.clone();a.equals(d)||(b.position=B.project(b.position,
d));return K(e,b)}var f=b.get("targetGeometry.spatialReference");if(f&&!B.canProject(f,d))return K(e);d=l.internalToExternal(a,a.state.camera);f=1;null!=b.rotation&&(d.heading=S(b.rotation),f=0);null!=c&&(d.tilt=c);if("point"===b.targetGeometry.type){c=b.targetGeometry;var g=void 0,n=b.targetGeometry.clone(),g=null!=b.scale?l.scaleToDistance(a,b.scale,c.latitude):a.state.camera.distance;return l.fromCenterDistance(a,n,g,d,f,e)}return l.fromExtent(a,b.targetGeometry.extent,d.heading,d.tilt,f,e)}function T(a,
b){return null==b.scale&&null!=b.zoom?l.zoomToScale(a,b.zoom):b.scale}function U(a,b){var c=!1;null!=b.heading?(a.heading=b.heading,c=!0):null!=b.rotation&&(a.heading=S(b.rotation),c=!0);null!=b.tilt&&(a.tilt=b.tilt,c=!0);null!=b.fov&&(a.fov=b.fov);return c}function L(a,b,c){var e=a.spatialReference||v.SpatialReference.WGS84;b=b||l.externalToInternal(a,c.camera);c.targetGeometry=A.vectorToPoint(b.center,a.renderSpatialReference,e);c.scale=l.computeScale(a,b);c.rotation=F(c.camera.heading);return c}
function M(a,b,c){if(b){if(!B.canProject(b.spatialReference,a.spatialReference))throw new R("viewpointutils:incompatible-spatialreference","Spatial reference ("+(b.spatialReference?b.spatialReference.wkid:"unknown")+") is incompatible with the view ("+a.spatialReference.wkid+")",{geometry:b});var e=[];if(!b.hasZ&&a.basemapTerrain){var d=void 0;switch(b.type){case "point":d=b;break;case "multipoint":case "polyline":case "mesh":d=b.extent.center;break;case "extent":d=b.center;break;case "polygon":d=
b.centroid;break;default:ia.neverReached(b)}d&&B.canProject(d,a.basemapTerrain.spatialReference)?h[2]=ba.getElevationAtPoint(a.elevationProvider,d)||0:h[2]=0}(0,oa[b.type])(b,function(a){e.push(a[0],a[1],a[2])},h);var f=e.length/3;if(0!==f&&(d=Array(e.length),A.bufferToBuffer(e,b.spatialReference,0,d,a.spatialReference,0,f)))for(b.hasZ&&(c.hasZ=!0),a=0;a<d.length;a+=3)b.hasZ?(h[0]=d[a+0],h[1]=d[a+1],h[2]=d[a+2]):(h[0]=d[a+0],h[1]=d[a+1]),t.expand(c.boundingBox,h)}}function pa(a,b,c,e){return z(this,
void 0,void 0,function(){var d,f,g,n,l,h;return r(this,function(k){switch(k.label){case 0:return[4,Y.result(a.whenViewForGraphic(b))];case 1:d=k.sent();if(!1===d.ok||ja.isNone(d.value)||!("whenGraphicBounds"in d.value))return M(a,b.geometry,e),[2];f=d.value;return[4,Y.result(f.whenGraphicBounds(b,{minDemResolution:c}))];case 2:g=k.sent();if(!1===g.ok)return M(a,b.geometry,e),[2];n=g.value;l=n.screenSpaceObjects;h=n.boundingBox;t.expand(e.boundingBox,h);l&&l.forEach(function(a){e.screenSpaceObjects.push(a)});
isFinite(h[2])&&(e.hasZ=!0);return[2]}})})}function ea(a,b,c,e){return z(this,void 0,void 0,function(){var d,f;return r(this,function(g){switch(g.label){case 0:return Array.isArray(b)&&2===b.length&&(d=b[0],f=b[1],"number"===typeof d&&"number"===typeof f)?(p.x=d,p.y=f,p.z=void 0,p.spatialReference=a.spatialReference.isGeographic?a.spatialReference:v.SpatialReference.WGS84,M(a,p,e),[2]):b&&"function"===typeof b.map?[4,ka.eachAlways(b.map(function(b){return ea(a,b,c,e)}))]:[3,2];case 1:return g.sent(),
[2];case 2:if(!(b instanceof v.BaseGeometry))return[3,3];M(a,b,e);return[3,5];case 3:return b instanceof ha?[4,pa(a,b,c,e)]:[3,5];case 4:g.sent(),g.label=5;case 5:return[2]}})})}function qa(a,b,c,e,d){return z(this,void 0,void 0,function(){var f,g,h;return r(this,function(k){switch(k.label){case 0:if(b.camera)return[2,fa(a,b.camera,d)];d.scale=b.scale;d.rotation=b.rotation;d.targetGeometry=b.targetGeometry?b.targetGeometry.clone():null;d.camera=null;null!=c.heading?d.rotation=F(c.heading):null!=c.rotation&&
(d.rotation=c.rotation);f=T(a,c);null!=f&&(d.scale=f);g=l.createAsyncContext(e);da(a,d,c.tilt,g);h=d;return[4,g.resolver.promise];case 1:return h.camera=k.sent(),[2,d]}})})}function fa(a,b,c){c.camera=b.clone();c.camera.fov=a.camera.fov;b=a.spatialReference;var e=c.camera.position.spatialReference;if(!B.canProject(e,b))return null;e.equals(b)||(c.camera.position=B.project(c.camera.position,b));return L(a,null,c)}function V(a,b,c,e,d){return z(this,void 0,void 0,function(){var f,g,n,p,t,u;return r(this,
function(y){switch(y.label){case 0:if(!c)throw new R("createfromcenter","invalid point");d.targetGeometry=c.clone();f=H.cameraOnContentAlongViewDirection(a);if(b.position){y=d.targetGeometry;var C=f,w=a.renderSpatialReference;A.pointToVector(b.position,N,w);A.pointToVector(y,W,w);d.targetGeometry=new v.Point(y);d.camera.position=new v.Point(b.position);k.vec3.subtract(O,W,N);l.directionToHeadingTilt(a,N,O,C.up,d.camera);d.scale=l.distanceToScale(a,k.vec3.distance(N,W),d.targetGeometry.latitude);d.rotation=
F(d.camera.heading);return[2,d]}b.zoomFactor&&(g=f.distance/b.zoomFactor,n=k.vec3.scale(h,f.viewForward,-g),k.vec3.add(f.eye,f.center,n),f.markViewDirty(),d.scale=l.distanceToScale(a,g,c.latitude));l.internalToExternal(a,f,d.camera);p=U(d.camera,b)?0:1;if(b.zoomFactor)return[3,2];d.scale=T(a,b);null==d.scale&&(A.pointToVector(c,h,a.renderSpatialReference),na.frustum.intersectsPoint(f.frustum.planes,h)?d.scale=l.distanceToScale(a,k.vec3.distance(f.eye,h),c.latitude):d.scale=l.computeScale(a,f));t=
l.createAsyncContext(e);l.fromCenterScale(a,d.targetGeometry,d.scale,d.camera,p,t);u=d;return[4,t.resolver.promise];case 1:u.camera=y.sent(),y.label=2;case 2:return[2,d]}})})}function ra(a,b,c,e){return z(this,void 0,void 0,function(){var d,f;return r(this,function(g){d=H.cameraOnContentAlongViewDirection(a);f=A.vectorToPoint(d.center,a.renderSpatialReference,p,a.spatialReference);return[2,V(a,b,f,c,e)]})})}function sa(a,b,c,e,d){return z(this,void 0,void 0,function(){var f,g,h,k;return r(this,function(n){switch(n.label){case 0:return d.targetGeometry=
c.clone(),f=H.cameraOnContentAlongViewDirection(a),l.internalToExternal(a,f,d.camera),g=U(d.camera,b)?0:1,h=l.createAsyncContext(e),l.fromExtent(a,c,d.camera.heading,d.camera.tilt,g,h),k=d,[4,h.resolver.promise];case 1:return k.camera=n.sent(),[2,d]}})})}function ta(a,b,c,e,d,f,g){return z(this,void 0,void 0,function(){var n,p,x,u,y;return r(this,function(C){switch(C.label){case 0:g.targetGeometry=c.clone();C=n=H.cameraOnContentAlongViewDirection(a);var w=0;c.hasZ?w=c.z:a.basemapTerrain&&(w=ba.getElevationAtPoint(a.elevationProvider,
c));k.vec3.set(h,c.x,c.y,w);A.computeLinearTransformation(a.spatialReference,h,ga,a.renderSpatialReference);Z.mat3.fromMat4(P,ga);Z.mat3.transpose(P,P);t.empty(D);for(var v=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]],E=0;E<v.length;E++){var m=v[E],q=e[m[2]];isFinite(q)||(q=w);k.vec3.set(h,e[m[0]],e[m[1]],q);A.vectorToVector(h,a.spatialReference,h,a.renderSpatialReference);t.expand(D,k.vec3.transformMat3(h,h,P))}w=t.width(D);v=t.height(D);E=t.depth(D);m=1/Math.tan(C.fovY/2);p=
Math.max(.5*Math.sqrt(w*w+E*E)*Math.max(m,1/Math.tan(C.fovX/2))+.5*v,.5*v*m+.5*Math.max(w,E))/d;l.internalToExternal(a,n,g.camera);x=U(g.camera,b)?0:1;g.scale=l.distanceToScale(a,p,g.targetGeometry.latitude);u=l.createAsyncContext(f);l.fromCenterScale(a,g.targetGeometry,g.scale,g.camera,x,u);y=g;return[4,u.resolver.promise];case 1:return y.camera=C.sent(),[2,g]}})})}function G(a){a&&(a.rotation=F(a.camera.heading));return a}Object.defineProperty(x,"__esModule",{value:!0});x.DEFAULT_FRAME_COVERAGE=
.66;x.rotationToHeading=S;x.headingToRotation=F;x.toCamera=da;x.fromInternalCamera=function(a,b,c){c||(c=new I({camera:new Q}));l.internalToExternal(a,b,c.camera);return L(a,b,c)};x.fromCamera=function(a,b,c){c||(c=new I);c.camera=b.clone();return L(a,null,c)};x.create=function(a,b,c){return z(this,void 0,void 0,function(){var e,d,f,g,n,z,A,u,y,C,w,B,E;return r(this,function(m){switch(m.label){case 0:if(b&&a.spatialReference){m={target:null};if("declaredClass"in b||Array.isArray(b))m.target=b;else{for(var q in b)m[q]=
b[q];b.center&&!m.target&&(m.target=b.center)}e=m}else e=null;if(!e)throw new R("viewpointutils-create:no-target","Missing target for creating viewpoint");d=new I({camera:new Q({fov:a.camera.fov})});return e.target instanceof I?[4,qa(a,e.target,e,c,d)]:[3,2];case 1:return f=m.sent(),[2,G(f)];case 2:if(e.target instanceof Q)return[2,G(fa(a,e.target,d))];g=null!=e.scale||null!=e.zoom;if(!(e.target instanceof v.Extent))return[3,6];n=e.target.xmin===e.target.xmax||e.target.ymin===e.target.ymax;if(!g&&
!n)return[3,4];z=G;return[4,V(a,e,e.target.center,c,d)];case 3:return[2,z.apply(void 0,[m.sent()])];case 4:return A=G,[4,sa(a,e,e.target,c,d)];case 5:return[2,A.apply(void 0,[m.sent()])];case 6:return u={boundingBox:t.empty(),hasZ:!1,screenSpaceObjects:[]},y=g?l.scaleToResolution(a,T(a,e)):void 0,[4,ea(a,e.target,y,u)];case 7:m.sent();if(!isFinite(u.boundingBox[0]))return[3,11];t.center(u.boundingBox,h);p.x=h[0];p.y=h[1];p.z=h[2];p.spatialReference=a.spatialReference;n=void 0;isFinite(p.z)&&u.hasZ?
n=t.isPoint(u.boundingBox):(p.z=void 0,n=aa.isPoint(t.toRect(u.boundingBox,ua)));if(!g&&!n)return[3,9];C=G;return[4,V(a,e,p,c,d)];case 8:return[2,C.apply(void 0,[m.sent()])];case 9:q=u.screenSpaceObjects;m=x.DEFAULT_FRAME_COVERAGE;if(q.length){for(var r=Number.NEGATIVE_INFINITY,F=0;F<q.length;F++)var D=q[F].screenSpaceBoundingRect,r=Math.max(r,Math.abs(D[0]),Math.abs(D[1]),Math.abs(D[2]),Math.abs(D[3]));w=m-r/Math.min(a.width,a.height)*2}else w=m;B=G;return[4,ta(a,e,p,u.boundingBox,w,c,d)];case 10:return[2,
B.apply(void 0,[m.sent()])];case 11:if(e.position)return q=e,m=d,r=H.cameraOnContentAlongViewDirection(a),k.vec3.copy(O,r.viewForward),l.directionToHeadingTilt(a,r.eye,O,r.up,X),m.camera.position=new v.Point(q.position),m.camera.heading=null!=q.heading?q.heading:X.heading,m.camera.tilt=null!=q.tilt?q.tilt:X.tilt,q=L(a,null,m),[2,G(q)];E=G;return[4,ra(a,e,c,d)];case 12:return[2,E.apply(void 0,[m.sent()])]}})})};var h=J.vec3f64.create(),ga=ma.mat4f64.create(),P=la.mat3f64.create(),D=t.create(),ua=aa.create(),
O=J.vec3f64.create(),N=J.vec3f64.create(),W=J.vec3f64.create(),X={heading:0,tilt:0},p=new v.Point,oa={point:function(a,b,c){c[0]=a.x;c[1]=a.y;a.hasZ&&(c[2]=a.z);b(c)},polygon:function(a,b,c){for(var e=a.hasZ,d=0;d<a.rings.length;d++)for(var f=a.rings[d],g=0;g<f.length;g++)c[0]=f[g][0],c[1]=f[g][1],e&&(c[2]=f[g][2]),b(c)},polyline:function(a,b,c){for(var e=a.hasZ,d=0;d<a.paths.length;d++)for(var f=a.paths[d],g=0;g<f.length;g++)c[0]=f[g][0],c[1]=f[g][1],e&&(c[2]=f[g][2]),b(c)},multipoint:function(a,
b,c){var e=a.points;a=a.hasZ;for(var d=0;d<e.length;d++)c[0]=e[d][0],c[1]=e[d][1],a&&(c[2]=e[d][2]),b(c)},extent:function(a,b,c){a.hasZ?(b(k.vec3.set(c,a.xmin,a.ymin,a.zmin)),b(k.vec3.set(c,a.xmax,a.ymin,a.zmin)),b(k.vec3.set(c,a.xmin,a.ymax,a.zmin)),b(k.vec3.set(c,a.xmax,a.ymax,a.zmin)),b(k.vec3.set(c,a.xmin,a.ymin,a.zmax)),b(k.vec3.set(c,a.xmax,a.ymin,a.zmax)),b(k.vec3.set(c,a.xmin,a.ymax,a.zmax)),b(k.vec3.set(c,a.xmax,a.ymax,a.zmax))):(b(k.vec3.set(c,a.xmin,a.ymin,c[2])),b(k.vec3.set(c,a.xmax,
a.ymin,c[2])),b(k.vec3.set(c,a.xmin,a.ymax,c[2])),b(k.vec3.set(c,a.xmax,a.ymax,c[2])))},mesh:function(a,b,c){if(a=a.vertexAttributes&&a.vertexAttributes.position)for(var e=0;e<a.length;e+=3)b(k.vec3.set(c,a[e+0],a[e+1],a[e+2]))}}});