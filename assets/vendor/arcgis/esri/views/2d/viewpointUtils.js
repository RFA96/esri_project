// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../Viewpoint ../../core/Collection ../../core/maybe ../../core/promiseUtils ../../core/unitUtils ../../core/wgs84Constants ../../core/libs/gl-matrix-2/common ../../core/libs/gl-matrix-2/mat2d ../../core/libs/gl-matrix-2/mat2df64 ../../core/libs/gl-matrix-2/vec2 ../../core/libs/gl-matrix-2/vec2f64 ../../geometry/Extent ../../geometry/Geometry ../../geometry/Point ../../geometry/SpatialReference ../../geometry/support/spatialReferenceUtils ../../geometry/support/webMercatorUtils ../../geometry/support/webMercatorUtils".split(" "),
function(ia,f,P,Q,I,Z,L,aa,R,ba,q,p,t,g,h,S,ca,M,da,w,H,ea){function T(a,b,c,d){return d&&c&&!d.equals(c)&&H.canProject(d,c)&&d.isWebMercator?(d.isWebMercator?(c=b[1],89.99999<c?c=89.99999:-89.99999>c&&(c=-89.99999),c=Math.sin(q.common.toRadian(c)),a=g.vec2.set(a,q.common.toRadian(b[0])*z,.5*z*Math.log((1+c)/(1-c)))):(c=q.common.toDegree(b[0]/z),a=g.vec2.set(a,c-360*Math.floor((c+180)/360),q.common.toDegree(.5*Math.PI-2*Math.atan(Math.exp(-1*b[1]/z))))),a):g.vec2.copy(a,b)}function C(a){return a.wkid?
a:a.spatialReference||da.WGS84}function D(a,b){return b.type?g.vec2.set(a,b.x,b.y):g.vec2.copy(a,b)}function A(a,b){return Math.max(a.width/b[0],a.height/b[1])*U(a.spatialReference)}function J(a,b,c,d){return Q(this,void 0,void 0,function(){var e,k,f,g,h,p,r,l,m,n,N,F,D,A,u,x,y,B,O,q,t,z,C,v,K,I,G,w;return P(this,function(E){switch(E.label){case 0:if(!a||Array.isArray(a)&&!a.length)return[2,null];Z.isCollection(a)&&(a=a.toArray());if(!Array.isArray(a)||!a.length||"object"!==typeof a[0])return[3,7];
k=a.every(function(a){return"attributes"in a});f=a.some(function(a){return!a.geometry});g=a;if(!(k&&f&&b&&b.allLayerViews))return[3,2];h=new Map;p=0;for(r=a;p<r.length;p++)l=r[p],m=l.layer,n=h.get(m)||[],N=l.attributes[m.objectIdField],null!=N&&n.push(N),h.set(m,n);F=[];h.forEach(function(a,c){var d=b.allLayerViews.find(function(a){return a.layer.id===c.id});if("queryFeatures"in d){var e=c.createQuery();e.objectIds=a;e.returnGeometry=!0;F.push(d.queryFeatures(e))}});return[4,aa.all(F)];case 1:D=E.sent();
A=[];u=0;for(x=D;u<x.length;u++)if((y=x[u])&&y.features&&y.features.length)for(B=0,O=y.features;B<O.length;B++)l=O[B],L.isSome(l.geometry)&&A.push(l.geometry);g=A;E.label=2;case 2:q=0,t=g,E.label=3;case 3:if(!(q<t.length))return[3,6];z=t[q];return[4,J(z,b,c,d)];case 4:d=E.sent(),E.label=5;case 5:return q++,[3,3];case 6:return[2,d];case 7:if(!Array.isArray(a)||2!==a.length||"number"!==typeof a[0]||"number"!==typeof a[1])return[3,8];e=new M(a);return[3,12];case 8:if(!(a instanceof ca))return[3,9];e=
a;return[3,12];case 9:if(!("geometry"in a))return[3,12];if(!a.geometry)return[3,10];e=a.geometry;return[3,12];case 10:if(!a.layer)return[3,12];C=a.layer;v=b.allLayerViews.find(function(a){return a.layer.id===C.id});if(!("queryFeatures"in v))return[3,12];K=C.createQuery();K.objectIds=[a.attributes[C.objectIdField]];K.returnGeometry=!0;return[4,v.queryFeatures(K)];case 11:I=E.sent(),e=L.get(I,"features",0,"geometry"),E.label=12;case 12:if(L.isNone(e))return[2,null];G="point"===e.type?new S({xmin:e.x,
ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference}):e.extent;if(!G)return[2,null];w=H.canProject(G,c);if(!G.spatialReference.equals(c)&&w)G=H.project(G,c);else if(!w)return[2,null];d=d?d.union(G):G.clone();return[2,d]}})})}function fa(a){if(a&&(!Array.isArray(a)||"number"!==typeof a[0])&&("object"===typeof a||Array.isArray(a)&&"object"===typeof a[0])){if("layer"in a&&a.layer&&a.layer.minScale&&a.layer.maxScale){var b=a.layer;return{min:b.minScale,max:b.maxScale}}if(Array.isArray(a)&&
a.length&&a.every(function(a){return"layer"in a})){for(var c=0,d=0,e=0;e<a.length;e++)(b=a[e].layer)&&b.minScale&&b.maxScale&&(c=b.minScale<c?b.minScale:c,d=b.maxScale>d?b.maxScale:d);return c&&d?{min:c,max:d}:null}}}function V(a,b){return Q(this,void 0,void 0,function(){var c,d,e,f,g,p,m,n,r,l,q,t,v,F,w,z,u,x,y,B;return P(this,function(k){switch(k.label){case 0:if(!a||!b)return[2,new I({targetGeometry:new M,scale:0,rotation:0})];c=b.spatialReference;d=b.constraints;e=b.padding;f=b.viewpoint;g=b.size;
p=e?g[0]-e.left-e.right:g[0];m=e?g[1]-e.top-e.bottom:g[1];n=[p,m];r=null;a instanceof I?r=a:a.viewpoint?r=a.viewpoint:a.target&&"esri.Viewpoint"===a.target.declaredClass&&(r=a.target);l=null;if(!r||!r.targetGeometry)return[3,1];l=r.targetGeometry;return[3,10];case 1:if(!(a instanceof S))return[3,2];l=a;return[3,10];case 2:return a||a&&("center"in a||"extent"in a||"target"in a)?[4,J(a.center,b,c)]:[3,10];case 3:return(v=k.sent())?[3,5]:[4,J(a.extent,b,c)];case 4:v=k.sent(),k.label=5;case 5:return(t=
v)?[3,7]:[4,J(a.target,b,c)];case 6:t=k.sent(),k.label=7;case 7:return(q=t)?[3,9]:[4,J(a,b,c)];case 8:q=k.sent(),k.label=9;case 9:l=q,k.label=10;case 10:!l&&f&&f.targetGeometry?l=f.targetGeometry:!l&&b.extent&&(l=b.extent);F=C(l);c||(c=C(b.spatialReference||b.extent||l));if(!ea.canProject(l,c)&&F&&!F.equals(c))return[2,null];w=D(h.vec2f64.create(),l.center?l.center:l);z=new M(T(w,w,F,c),c);u=null;u=r&&r.targetGeometry&&"point"===r.targetGeometry.type?r.scale:a.hasOwnProperty("scale")&&a.scale?a.scale:
a.hasOwnProperty("zoom")&&-1!==a.zoom&&d&&d.effectiveLODs?d.zoomToScale(a.zoom):Array.isArray(l)||"point"===l.type||"extent"===l.type&&0===l.width&&0===l.height?b.extent&&H.canProject(b.extent,c)?A(H.project(b.extent,c),n):b.extent?A(b.extent,n):f.scale:H.canProject(l.extent,c)?A(H.project(l.extent,c),n):A(l.extent,n);if(x=fa(a))x.min&&x.min>u?u=x.min:x.max&&x.max<u&&(u=x.max);y=0;r?y=r.rotation:a.hasOwnProperty("rotation")?y=a.rotation:f&&(y=f.rotation);B=new I({targetGeometry:z,scale:u,rotation:y});
d&&(B=d.fit(B),d.rotationEnabled||(B.rotation=y));return[2,B]}})})}function m(a,b){var c=a.targetGeometry,d=b.targetGeometry;c.x=d.x;c.y=d.y;c.spatialReference=d.spatialReference;a.scale=b.scale;a.rotation=b.rotation;return a}function W(a,b,c){return c?g.vec2.set(a,.5*(b[0]-c.right+c.left),.5*(b[1]-c.bottom+c.top)):g.vec2.scale(a,b,.5)}function ga(a,b,c,d){f.getTransform(a,b,c,d);return p.mat2d.invert(a,a)}function X(a,b,c){var d=v(b);b=Math.abs(Math.cos(d));d=Math.abs(Math.sin(d));return g.vec2.set(a,
Math.round(c[1]*d+c[0]*b),Math.round(c[1]*b+c[0]*d))}function n(a){var b=a.scale;a=a.targetGeometry.spatialReference;a=w.isValid(a)?1/(39.37*R.getMetersPerUnitForSR(a)*96):1;return b*a}function v(a){return q.common.toRadian(a.rotation)||0}function U(a){return w.isValid(a)?39.37*R.getMetersPerUnitForSR(a)*96:1}function Y(a){return a.isWrappable?(a=w.getInfo(a),a.valid[1]-a.valid[0]):0}Object.defineProperty(f,"__esModule",{value:!0});var z=ba.wgs84Radius,ha=180/Math.PI;f.extentToScale=A;f.create=V;
f.copy=m;f.getAnchor=W;f.getExtent=function(){var a=h.vec2f64.create();return function(b,c,d){var e=c.targetGeometry;D(a,e);c=.5*n(c);b.xmin=a[0]-c*d[0];b.ymin=a[1]-c*d[1];b.xmax=a[0]+c*d[0];b.ymax=a[1]+c*d[1];b.spatialReference=e.spatialReference;return b}}();f.setExtent=function(a,b,c,d,e){f.centerAt(a,b,c.center);a.scale=A(c,d);e&&e.constraints&&e.constraints.constrain(a);return a};f.getOuterExtent=function(){var a=h.vec2f64.create(),b=h.vec2f64.create();return function(c,d,e){D(a,d.targetGeometry);
X(b,d,e);e=.5*n(d);c.set({xmin:a[0]-e*b[0],ymin:a[1]-e*b[1],xmax:a[0]+e*b[0],ymax:a[1]+e*b[1],spatialReference:d.targetGeometry.spatialReference});return c}}();f.getOuterSize=X;f.getPaddingScreenTranslation=function(){var a=h.vec2f64.create();return function(b,c,d){return g.vec2.sub(b,g.vec2.scale(b,c,.5),W(a,c,d))}}();f.getPaddingMapTranslation=function(){var a=t.mat2df64.create(),b=h.vec2f64.create();return function(c,d,e,k){var h=n(d);d=v(d);g.vec2.set(b,h,h);p.mat2d.fromScaling(a,b);p.mat2d.rotate(a,
a,d);p.mat2d.translate(a,a,f.getPaddingScreenTranslation(b,e,k));p.mat2d.translate(a,a,[0,k.top-k.bottom]);return g.vec2.set(c,a[4],a[5])}}();f.getResolution=n;f.getResolutionToScaleFactor=U;f.getMatrix=function(){var a=h.vec2f64.create(),b=h.vec2f64.create(),c=h.vec2f64.create();return function(d,e,f,h,m,n){g.vec2.negate(a,e);g.vec2.scale(b,f,.5*n);g.vec2.set(c,1/h*n,-1/h*n);p.mat2d.identity(d);p.mat2d.translate(d,d,b);m&&p.mat2d.rotate(d,d,m);p.mat2d.scale(d,d,c);p.mat2d.translate(d,d,a);return d}}();
f.getTransform=function(){var a=h.vec2f64.create();return function(b,c,d,e){var k=n(c),g=v(c);D(a,c.targetGeometry);return f.getMatrix(b,a,d,k,g,e)}}();f.getTransformNoRotation=function(){var a=h.vec2f64.create();return function(b,c,d,e){var g=n(c);D(a,c.targetGeometry);return f.getMatrix(b,a,d,g,0,e)}}();f.getWorldWidth=Y;f.getWorldScreenWidth=function(a,b){return Math.round(Y(a)/b)};f.createAsync=function(a,b){return V(a,b)};f.angleBetween=function(){var a=h.vec2f64.create(),b=h.vec2f64.create(),
c=[0,0,0];return function(d,e,f){g.vec2.subtract(a,d,e);g.vec2.normalize(a,a);g.vec2.subtract(b,d,f);g.vec2.normalize(b,b);g.vec2.cross(c,a,b);d=Math.acos(g.vec2.dot(a,b)/(g.vec2.length(a)*g.vec2.length(b)))*ha;0>c[2]&&(d=-d);isNaN(d)&&(d=0);return d}}();f.addPadding=function(){var a=h.vec2f64.create();return function(b,c,d,e){var g=b.targetGeometry;m(b,c);f.getPaddingMapTranslation(a,c,d,e);g.x+=a[0];g.y+=a[1];return b}}();f.removePadding=function(){var a=h.vec2f64.create();return function(b,c,d,
e){var g=b.targetGeometry;m(b,c);f.getPaddingMapTranslation(a,c,d,e);g.x-=a[0];g.y-=a[1];return b}}();f.centerAt=function(){var a=h.vec2f64.create();return function(b,c,d){m(b,c);c=b.targetGeometry;var e=C(d),f=C(c);D(a,d);T(a,a,e,f);c.x=a[0];c.y=a[1];return b}}();f.pixelSize=function(a){return n(a)};f.resize=function(){var a=h.vec2f64.create();return function(b,c,d,e,k){k||(k="center");g.vec2.sub(a,d,e);g.vec2.scale(a,a,.5);d=a[0];e=a[1];switch(k){case "center":g.vec2.set(a,0,0);break;case "left":g.vec2.set(a,
-d,0);break;case "top":g.vec2.set(a,0,e);break;case "right":g.vec2.set(a,d,0);break;case "bottom":g.vec2.set(a,0,-e);break;case "top-left":g.vec2.set(a,-d,e);break;case "bottom-left":g.vec2.set(a,-d,-e);break;case "top-right":g.vec2.set(a,d,e);break;case "bottom-right":g.vec2.set(a,d,-e)}f.translateBy(b,c,a);return b}}();f.rotateBy=function(a,b,c){m(a,b);a.rotation+=c;return a};f.rotateTo=function(a,b,c){m(a,b);a.rotation=c;return a};f.scaleBy=function(){var a=h.vec2f64.create();return function(b,
c,d,e,k){m(b,c);isNaN(d)||0===d||(f.toMap(a,e,c,k),b.scale=c.scale*d,f.toScreen(a,a,b,k),f.translateBy(b,b,g.vec2.set(a,a[0]-e[0],e[1]-a[1])));return b}}();f.scaleTo=function(a,b,c){m(a,b);a.scale=c;return a};f.scaleAndRotateBy=function(){var a=h.vec2f64.create();return function(b,c,d,e,k,h){m(b,c);isNaN(d)||0===d||(f.toMap(a,k,c,h),b.scale=c.scale*d,b.rotation+=e,f.toScreen(a,a,b,h),f.translateBy(b,b,g.vec2.set(a,a[0]-k[0],k[1]-a[1])));return b}}();f.padAndScaleAndRotateBy=function(){var a=h.vec2f64.create(),
b=h.vec2f64.create();return function(c,d,e,h,n,m,p){f.getPaddingScreenTranslation(b,m,p);g.vec2.add(a,n,b);return h?f.scaleAndRotateBy(c,d,e,h,a,m):f.scaleBy(c,d,e,a,m)}}();f.toMap=function(){var a=t.mat2df64.create();return function(b,c,d,e){return g.vec2.transformMat2d(b,c,ga(a,d,e,1))}}();f.toScreen=function(){var a=t.mat2df64.create();return function(b,c,d,e){return g.vec2.transformMat2d(b,c,f.getTransform(a,d,e,1))}}();f.translateBy=function(){var a=h.vec2f64.create(),b=t.mat2df64.create();return function(c,
d,e){m(c,d);var f=n(d),q=c.targetGeometry;p.mat2d.fromRotation(b,v(d));p.mat2d.scale(b,b,h.vec2f64.fromValues(f,f));g.vec2.transformMat2d(a,e,b);q.x+=a[0];q.y+=a[1];return c}}()});