// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../../core/mathUtils ../../../../../core/screenUtils ../../../../../core/libs/gl-matrix-2/mat4 ../../../../../core/libs/gl-matrix-2/mat4f64 ../../../../../core/libs/gl-matrix-2/vec2 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../camera/constraintUtils ../../../input/util ../InteractiveController ../momentum/PanPlanarMomentumController ../momentum/PanSphericalMomentumController ../momentum/RotationMomentumController ../momentum/ZoomPlanarMomentumController ../momentum/ZoomSphericalMomentumController ../../utils/navigationUtils ../../utils/navigationUtils ../../../support/geometryUtils ../../../support/mathUtils ../../../webgl-engine/lib/Camera ../../../../navigation/PanPlanarMomentumEstimator ../../../../navigation/PanSphericalMomentumEstimator ../../../../navigation/RotationMomentumEstimator ../../../../navigation/ZoomMomentumEstimator".split(" "),
function(l,p,t,u,f,q,v,w,g,m,h,r,x,y,z,A,B,C,e,n,k,D,E,F,G,H,I){Object.defineProperty(p,"__esModule",{value:!0});l=function(l){function d(a,b){var c=l.call(this)||this;c.view=a;c.intersectionHelper=b;c.smoothRotation=new r.ExponentialFalloff(.05);c.rotationAxis=m.vec3f64.create();c.panningPlane=k.plane.create();c.smoothScaling=new r.ExponentialFalloff(.05);c.zoomCenterScreen=f.createScreenPointArray();c.zoomMomentumEstimator=new I.ZoomMomentumEstimator;c.rotationMomentumEstimator=new H.RotationMomentumEstimator;
c.panSphericalMomentumEstimator=new G.PanSphericalMomentumEstimator;c.panPlanarMomentumEstimator=new F.PanPlanarMomentumEstimator;c.adjustedSphere=k.sphere.create();c.tmp3d=m.vec3f64.create();c.tmpMat=v.mat4f64.create();c.tmpAxisAngle=k.axisAngle.create();c.tmpScreenPointArray=f.createScreenPointArray();c.beginScreenPoint=f.createScreenPointArray();c.beginScenePoint=m.vec3f64.create();c.screenPickPoint=f.createScreenPointArray();c.panMode=n.PanMode.Horizontal;c.tmpInteractionDirection=m.vec3f64.create();
c.constraintOptions={selection:15,interactionType:0,interactionFactor:0,interactionStartCamera:new E.default,interactionDirection:null,tiltMode:0};return c}t(d,l);d.prototype.begin=function(a){if(this.active){var b=this.view.navigation.momentumEnabled;this.zoomMomentumEstimator.enabled=b;this.rotationMomentumEstimator.enabled=b;this.panPlanarMomentumEstimator.enabled=b;this.panSphericalMomentumEstimator.enabled=b;this.beginHeading=-D.cyclicalPI.normalize(u.deg2rad(this.view.camera.heading));this.beginRadius=
a.radius;this.pointerCount=a.pointers.size;this.beginAngle=a.angle;this.smoothRotation.reset();f.screenPointObjectToArray(a.center,this.screenPickPoint);w.vec2.copy(this.beginScreenPoint,this.screenPickPoint);b=e.pickPointAndInitSphere(this.intersectionHelper,this.beginCamera,this.screenPickPoint,!0);this.scenePickPoint=b.scenePickPoint;this.sphere=b.sphere;g.vec3.copy(this.beginScenePoint,this.scenePickPoint);this.panMode=e.decidePanMode(this.beginCamera,this.sphere,this.scenePickPoint);this.panMode===
n.PanMode.Vertical&&(this.beginCamera.aboveGround?this.preparePlanarPanModeOverground(a):this.preparePlanarPanMode(a));this.constraintOptions.interactionStartCamera.copyFrom(this.beginCamera)}};d.prototype.preparePlanarPanModeOverground=function(a){var b=g.vec3.negate(this.tmp3d,this.beginCamera.viewForward);k.plane.fromPositionAndNormal(this.scenePickPoint,b,this.panningPlane);var c=f.createScreenPointArray(this.screenPickPoint[0],0),b=m.vec3f64.create(),d=g.vec3.length(this.beginCamera.eye);this.adjustedSphere.radius=
d<this.sphere.radius?d-100:this.sphere.radius;e.sphereOrPlanePointFromScreenPoint(this.adjustedSphere,this.beginCamera,c,b);c=f.createRenderScreenPointArray3();this.beginCamera.projectPoint(b,c);this.screenPickPoint[1]=Math.min(this.screenPickPoint[1],.9*c[1]);this.intersectionHelper.intersectScreen(this.screenPickPoint,this.scenePickPoint)&&k.plane.fromPositionAndNormal(this.scenePickPoint,this.panningPlane,this.panningPlane);a=f.screenPointObjectToArray(a.center,this.tmpScreenPointArray);e.intersectPlaneFromScreenPoint(this.panningPlane,
this.beginCamera,a,this.beginScenePoint)};d.prototype.preparePlanarPanMode=function(a){var b=g.vec3.negate(this.tmp3d,this.beginCamera.viewForward);k.plane.fromPositionAndNormal(this.scenePickPoint,b,this.panningPlane);var c=k.sphere.angleToSilhouette(this.sphere,this.currentCamera.eye),b=k.axisAngle.fromPoints(this.currentCamera.eye,this.scenePickPoint,this.tmpAxisAngle),c=-b[3]-(this.currentCamera.aboveGround?.25:.025)*c;if(0<c){var d=q.mat4.identity(this.tmpMat);q.mat4.rotate(d,d,-c,b);g.vec3.subtract(this.scenePickPoint,
this.scenePickPoint,this.sphere.center);g.vec3.transformMat4(this.scenePickPoint,this.scenePickPoint,d);g.vec3.add(this.scenePickPoint,this.scenePickPoint,this.sphere.center);k.plane.setOffsetFromPoint(this.panningPlane,this.scenePickPoint,this.panningPlane);a=f.screenPointObjectToArray(a.center,this.tmpScreenPointArray);e.intersectPlaneFromScreenPoint(this.panningPlane,this.beginCamera,a,this.beginScenePoint)}};d.prototype.update=function(a){if(this.active){this.currentCamera.copyFrom(this.beginCamera);
var b=1<a.pointers.size;this.panMode===n.PanMode.Horizontal?(b&&this.zoomSpherical(a),this.panningSpherical(a),b&&this.rotateSpherical(a)):(b&&this.zoomPlanar(a),this.panningPlanar(a),b&&this.rotatePlanar(a));this.currentCamera.markViewDirty()}};d.prototype.end=function(a){a.pointers.size===this.pointerCount&&this.update(a);this.finishController();if(a=this.zoomMomentumEstimator.evaluateMomentum())return this.panMode===n.PanMode.Horizontal?new C.ZoomSphericalMomentumController(this.view,a,this.zoomCenterScreen,
this.beginScenePoint,this.sphere.radius):new B.ZoomPlanarMomentumController(this.view,a,this.beginScenePoint);if(a=this.rotationMomentumEstimator.evaluateMomentum())return new A.RotationMomentumController(this.view,a,this.sphere.center,this.rotationAxis);if(this.panMode===n.PanMode.Horizontal){if(a=this.panSphericalMomentumEstimator.evaluateMomentum())return new z.PanSphericalMomentumController(this.view,a)}else if(a=this.panPlanarMomentumEstimator.evaluateMomentum())return new y.PanPlanarMomentumController(this.view,
a);return null};d.prototype.zoomSpherical=function(a){var b=this.beginRadius/a.radius;this.smoothScaling.gain=.001875*Math.min(Math.max(a.radius,40),120);this.smoothScaling.update(b);e.applyZoomOnSphere(this.sphere,this.currentCamera,this.smoothScaling.value);f.screenPointObjectToArray(a.center,this.zoomCenterScreen);this.zoomMomentumEstimator.add(this.smoothScaling.value,.001*a.timestamp);this.constraintOptions.interactionType=1;this.constraintOptions.interactionFactor=h.pixelDistanceToInteractionFactor(a.radius-
this.beginRadius);h.applyAll(this.view,this.currentCamera,this.constraintOptions)};d.prototype.panningSpherical=function(a){var b=f.screenPointObjectToArray(a.center,this.tmpScreenPointArray);e.sphereOrPlanePointFromScreenPoint(this.sphere,this.currentCamera,b,this.tmp3d);e.preserveHeadingThreshold(this.beginScenePoint,g.vec3.dot(this.currentCamera.up,this.beginScenePoint),this.sphere.radius,this.beginHeading,this.view.camera.tilt,this.beginCamera)?(e.applyPanSphericalPreserveHeading(this.sphere,
this.currentCamera,this.beginScenePoint,this.tmp3d,this.beginHeading,this.view.camera.tilt,!1),this.panSphericalMomentumEstimator.addMomentumPreserveHeading(b,this.tmp3d,.001*a.timestamp,this.beginCamera,this.sphere,this.beginHeading,this.view.camera.tilt)):(e.applyPanSphericalDirectRotation(this.sphere,this.currentCamera,this.beginScenePoint,this.tmp3d,this.view.camera.tilt,!1),this.panSphericalMomentumEstimator.addMomentumDirectRotation(b,this.tmp3d,.001*a.timestamp,this.beginCamera,this.sphere.radius,
this.view.camera.tilt));this.constraintOptions.interactionType=4;this.constraintOptions.interactionFactor=h.pixelDistanceToInteractionFactor(this.screenPickPoint,b);h.applyAll(this.view,this.currentCamera,this.constraintOptions)};d.prototype.rotateSpherical=function(a){g.vec3.normalize(this.rotationAxis,this.scenePickPoint);this.currentCamera.aboveGround||g.vec3.negate(this.rotationAxis,this.rotationAxis);var b=this.smoothRotation.value,c=e.normalizeRotationDelta(a.angle-b),b=b+c;this.smoothRotation.gain=
.00125*Math.min(Math.max(a.radius,40),120);this.smoothRotation.update(b);c=this.smoothRotation.value-this.beginAngle;this.rotationMomentumEstimator.add(c,.001*a.timestamp);e.applyRotation(this.currentCamera,this.sphere.center,k.axisAngle.wrapAxisAngle(this.rotationAxis,c));this.constraintOptions.interactionType=2;this.constraintOptions.interactionFactor=h.pixelDistanceToInteractionFactor(a.radius*b);h.applyAll(this.view,this.currentCamera,this.constraintOptions)};d.prototype.panningPlanar=function(a){var b=
f.screenPointObjectToArray(a.center,this.tmpScreenPointArray);e.intersectPlaneFromScreenPoint(this.panningPlane,this.currentCamera,b,this.tmp3d)&&(e.applyPanPlanar(this.currentCamera,this.beginScenePoint,this.tmp3d),this.panPlanarMomentumEstimator.add(b,this.tmp3d,.001*a.timestamp),this.constraintOptions.interactionType=4,this.constraintOptions.interactionFactor=h.pixelDistanceToInteractionFactor(this.beginScreenPoint,b),this.constraintOptions.interactionDirection=this.view.renderCoordsHelper.worldUpAtPosition(this.currentCamera.eye,
this.tmpInteractionDirection),h.applyAll(this.view,this.currentCamera,this.constraintOptions),this.constraintOptions.interactionDirection=null)};d.prototype.zoomPlanar=function(a){var b=this.beginRadius/a.radius;this.smoothScaling.gain=.001875*Math.min(Math.max(a.radius,40),120);this.smoothScaling.update(b);this.zoomMomentumEstimator.add(this.smoothScaling.value,.001*a.timestamp);e.applyZoomToPoint(this.currentCamera,this.beginScenePoint,this.smoothScaling.value,this.view.state.constraints.minimumPoiDistance);
this.constraintOptions.interactionType=1;this.constraintOptions.interactionFactor=h.pixelDistanceToInteractionFactor(a.radius-this.beginRadius);h.applyAll(this.view,this.currentCamera,this.constraintOptions)};d.prototype.rotatePlanar=function(a){g.vec3.copy(this.rotationAxis,this.beginScenePoint);this.currentCamera.aboveGround||g.vec3.negate(this.rotationAxis,this.rotationAxis);var b=this.smoothRotation.value,c=a.angle-b,c=e.normalizeRotationDelta(c);this.smoothRotation.gain=.00125*Math.min(Math.max(a.radius,
40),120);this.smoothRotation.update(b+c);b=this.smoothRotation.value-this.beginAngle;this.rotationMomentumEstimator.add(b,.001*a.timestamp);e.applyRotation(this.currentCamera,this.sphere.center,k.axisAngle.wrapAxisAngle(this.rotationAxis,b));this.constraintOptions.interactionType=2;this.constraintOptions.interactionFactor=h.pixelDistanceToInteractionFactor(a.radius*b);h.applyAll(this.view,this.currentCamera,this.constraintOptions)};return d}(x.InteractiveController);p.PinchAndPanController=l});