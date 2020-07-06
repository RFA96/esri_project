// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/Point ./elevationAlignmentUtils ./graphicUtils ../../support/debugFlags ../../support/projectionUtils ../../webgl-engine/lib/Util".split(" "),function(O,p,H,u,v,m,I,A,J,B,E,K){Object.defineProperty(p,"__esModule",{value:!0});var L=K.VertexAttrConstants;p.perVertexElevationAligner=function(d,a,
b,c){d=d.stageObject;w.spatialReference=b.spatialReference;for(var h=d.geometryRecords,r=h.length,F="absolute-height"!==a.mode,l=0,x=0;x<r;x++){var f=h[x].geometry,n=h[x].getShaderTransformation();e[0]=n[12];e[1]=n[13];e[2]=n[14];f.invalidateBoundingInfo();for(var n=f.data.getVertexAttr(),y=n[L.POSITION],f=y.data,n=n.mapPos.data,y=y.size,m=f.length/y,k=0,C=0,D=!1,u=0,v=0;v<m;v++){w.x=n[C++];w.y=n[C++];w.z=n[C++];t[0]=f[k];t[1]=f[k+1];t[2]=f[k+2];var z=A.evaluateElevationAlignmentAtPoint(w,b,a,c,F?
q:null);F&&(u+=q.sampledElevation);g[0]=f[k]+e[0];g[1]=f[k+1]+e[1];g[2]=f[k+2]+e[2];c.setAltitude(z,g);f[k]=g[0]-e[0];f[k+1]=g[1]-e[1];f[k+2]=g[2]-e[2];if(B.TESTS_DISABLE_UPDATE_THRESHOLDS)D=!0;else if(z=p.updateThresholdInMeters/c.unitInMeters,Math.abs(t[0]-f[k])>=z||Math.abs(t[1]-f[k+1])>=z||Math.abs(t[2]-f[k+2])>=z)D=!0;k+=y}l+=u/m;D&&d.geometryVertexAttrsUpdated(x)}return l/r};p.perObjectElevationAligner=function(d,a,b,c){d=d.stageObject;var h=a.centerPointInElevationSR,r=0,e=0;if(d.metadata.usesVerticalDistanceToGround)r=
A.evaluateElevationAlignmentAtPoint(h,b,a,c,q),J.updateVertexAttributeAuxpos1w(d,q.verticalDistanceToGround),e=q.sampledElevation;else{var l="absolute-height"!==a.mode,r=A.evaluateElevationAlignmentAtPoint(h,b,a,c,l?q:null);l&&(e=q.sampledElevation)}a=H.mat4.copy(M,d.objectTransformation);b=v.vec3.set(G,a[12],a[13],a[14]);B.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES?(g[0]=h.x,g[1]=h.y,g[2]=r,E.computeLinearTransformation(h.spatialReference,g,a,c.spatialReference)&&(d.objectTransformation=a)):c.setAltitudeOfTransformation(r,
a);c=p.updateThresholdInMeters/c.unitInMeters;if(Math.abs(a[12]-b[0])>=c||Math.abs(a[13]-b[1])>=c||Math.abs(a[14]-b[2])>=c)d.objectTransformation=a;return e};var M=u.mat4f64.create();p.perLodInstanceElevationAligner=function(d,a,b,c){var h=a.centerPointInElevationSR,e=0,m=0,l="absolute-height"!==a.mode,e=A.evaluateElevationAlignmentAtPoint(h,b,a,c,l?q:null);l&&(m=q.sampledElevation);a=d.graphics3DSymbolLayer.lodRenderer.instanceData;d=d.instanceIndex;b=N;a.getGlobalTransform(d,b);l=v.vec3.set(G,b[12],
b[13],b[14]);B.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES?(g[0]=h.x,g[1]=h.y,g[2]=e,E.computeLinearTransformation(h.spatialReference,g,b,c.spatialReference)&&a.setGlobalTransform(d,b)):c.setAltitudeOfTransformation(e,b);c=p.updateThresholdInMeters/c.unitInMeters;(Math.abs(b[12]-l[0])>=c||Math.abs(b[13]-l[1])>=c||Math.abs(b[14]-l[2])>=c)&&a.setGlobalTransform(d,b);return m};p.updateThresholdInMeters=.01;p.iterativeUpdatesEnabled=!0;var w=new I,g=m.vec3f64.create(),e=m.vec3f64.create(),t=m.vec3f64.create(),
N=u.mat4f64.create(),G=m.vec3f64.create(),q={verticalDistanceToGround:0,sampledElevation:0}});