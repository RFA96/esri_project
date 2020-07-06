// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/generatorHelper ../../../../../core/tsSupport/awaiterHelper ../../../../../core/tsSupport/assignHelper ../../../../../core/Evented ../../../../../core/Handles ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../core/scheduling ../../../../../core/screenUtils ../../../../../core/watchUtils ../../../../../core/libs/gl-matrix-2/mat4 ../../../../../core/libs/gl-matrix-2/mat4f64 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../../../core/libs/gl-matrix-2/math/common ../../../../../support/elevationInfoUtils ../../Manipulator3D ../../manipulatorUtils ../manipulatorDragUtils ../manipulations/config ../../../support/geometryUtils ../../../support/mathUtils ../../../support/stack ../../../webgl-engine/lib/Geometry ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/materials/ColorMaterial".split(" "),
function(D,E,ca,da,ea,fa,J,K,L,F,p,M,G,N,w,O,n,y,P,Q,R,A,B,f,r,S,k,H,C,T){function U(b,a){var d=n.vec3.subtract(k.sv3d.get(),a.renderStart,b.origin);b=n.vec3.subtract(k.sv3d.get(),a.renderEnd,b.origin);d=n.vec3.length(d);b=n.vec3.length(b);return 0===d?0:b/d}function V(b,a){var d=b.allLayerViews.find(function(d){return d.layer===a.layer});if(p.isNone(a.symbol))return null;var g=a.symbol;return{symbolLayers:g.symbolLayers.map(function(a){var b=null,f=null;"object"===a.type&&(b=a.heading);f=d.getSymbolLayerSize(g,
a);return{heading:b,size:f}}).toArray()}}function Y(b,a,d,g){var c=b.renderStart;b=b.renderEnd;var h=z(c,g,k.sv3d.get());b=z(b,g,k.sv3d.get());if(n.vec3.squaredDistance(h,b)<f.DRAG_THRESHOLD_PX*f.DRAG_THRESHOLD_PX)return null;var X=n.vec3.subtract(k.sv3d.get(),c,d);a=n.vec3.cross(k.sv3d.get(),X,a);c=n.vec3.add(k.sv3d.get(),c,a);d=z(d,g,k.sv3d.get());g=z(c,g,k.sv3d.get());c=n.vec3.subtract(k.sv3d.get(),g,h);g=n.vec3.subtract(k.sv3d.get(),h,d);h=r.ray.wrap(h,c);g=r.ray.wrap(d,g);return r.ray.distance2(h,
b)<r.ray.distance2(g,b)?"rotate":"scale"}function z(b,a,d){b=a.projectPoint(b,G.castRenderScreenPointArray(Z));a=a.renderToScreen(b,aa);return n.vec3.set(d,a[0],a[1],0)}function I(b,a){var d=null,g=1,c=function(){return g};return{start:function(){g=b.getScale();d=b.getScale;b.getScale=c;a()},update:function(d){g+=((g+1)/2-g)*Math.min(d*f.RING_RESET_ANIMATION_SPEED_FACTOR,1);a();return.01>Math.abs(g-1)?1:0},destroy:function(){b.getScale=d;a()}}}function ba(b,a){var d=0,c=null,W=function(){return!1};
return{start:function(){c=b.getFocused;b.getFocused=W;d=0;a()},update:function(a){d+=a;return!c()||d>f.RING_INDICATOR_DELAY_MS?1:0},destroy:function(){b.getFocused=c;a()}}}Object.defineProperty(E,"__esModule",{value:!0});var c;(function(b){b.ScaleIn=32;b.ScaleOut=64;b.RotateLeft=128;b.RotateRight=256;b.Unlocked=1024;b.DelayedFocused=2048;b.TouchInput=32768})(c||(c={}));D=function(){function b(a){var d=this;this.mode=null;this._handles=new L;this._activeAnimation=this._scaleRotateDragData=null;this.events=
new K;this.getFocused=function(){return d.ringManipulator.focused};this.getScale=function(){return p.isSome(d._scaleRotateDragData)&&"scale"===d._scaleRotateDragData.mode?d._scaleRotateDragData.scale:1};this.tool=a.tool;this.mode=a.mode;this.createManipulator();this.updateDragState();this.updateManipulatorTransform()}b.prototype.destroy=function(){p.isSome(this._activeAnimation)&&(this._activeAnimation.frameTask.remove(),this._activeAnimation=null);this._handles.removeAll();this.tool.manipulators.remove(this.ringManipulator);
this.ringManipulator=null};b.prototype.startAnimation=function(a){var d=this;this.cancelActiveAnimation();a.start();var b=M.addFrameTask({update:function(b){a.update(b.deltaTime)&&d.cancelActiveAnimation()}});this._activeAnimation=J({},a,{frameTask:b})};b.prototype.cancelActiveAnimation=function(){p.isSome(this._activeAnimation)&&(this._activeAnimation.frameTask.remove(),this._activeAnimation.destroy(),this._activeAnimation=null)};b.prototype.forEachManipulator=function(a){a(this.ringManipulator,
2)};b.prototype.createManipulator=function(){var a=this;this.ringManipulator=this.createRingManipulator();this.tool.manipulators.add(this.ringManipulator);var d=this.tool.graphicState.graphic,b=B.createManipulatorDragEventPipeline(this.ringManipulator,function(b,c,g){a._scaleRotateDragData=null;var h=V(a.tool.view,d);if(p.isNone(h))return a.updateDragState(),null;var e={mode:"none",origin:y.vec3f64.clone(b.renderLocation),angle:0,startAngle:a.tool.symbolRotationAngle,angleDir:0,scale:1,scaleDir:0,
startSymbolData:h};a._scaleRotateDragData=e;a.updateDragState();h=k.sv3d.get();a.tool.view.renderCoordsHelper.worldUpAtPosition(b.renderLocation,h);c.next(B.screenToRenderPlane(a.tool.view,r.plane.fromPositionAndNormal(b.renderLocation,h))).next(function(b){var c=A.calculateInputRotationTransform(b.renderStart,b.renderEnd,e.origin,b.plane),g=S.cyclicalPI.shortestSignedDiff(e.angle,c);e.angleDir=F.clamp(e.angleDir+g,-f.ROTATE_INDICATOR_DIRECTION_BUFFER,f.ROTATE_INDICATOR_DIRECTION_BUFFER);e.angle=
c;c=U(e,b);e.scaleDir=F.clamp(e.scaleDir+(c-e.scale),-f.SCALE_INDICATOR_DIRECTION_BUFFER,f.SCALE_INDICATOR_DIRECTION_BUFFER);e.scale=c;a.onScaleChanged();if("none"===e.mode&&(c=a.mode||Y(b,b.plane,e.origin,a.tool.view.state.camera),p.isSome(c))){switch(c){case "rotate":a.tool.emit("graphic-rotate-start",{graphic:d,angle:e.angle});break;case "scale":a.tool.emit("graphic-scale-start",{graphic:d,scale:e.scale})}e.mode=c}a.updateDragState();if(p.isSome(d.symbol)){var c=d.symbol.clone(),g=0,h=1;switch(e.mode){default:case "none":break;
case "scale":h=e.scale;break;case "rotate":g=e.angle}a.applySymbolData(c,e.startSymbolData,g,h);d.symbol=c;a.updateManipulatorTransform()}switch(b.action){case "start":case "update":switch(e.mode){case "rotate":a.tool.emit("graphic-rotate",{graphic:d,angle:e.angle});break;case "scale":a.tool.emit("graphic-scale",{graphic:d,scale:e.scale})}break;case "end":switch(e.mode){case "rotate":a.tool.emit("graphic-rotate-stop",{graphic:d,angle:e.angle});break;case "scale":a.tool.emit("graphic-scale-stop",{graphic:d,
scale:e.scale})}}"end"===b.action&&(a.startAnimation(I(a,function(){return a.onScaleChanged()})),a._scaleRotateDragData=null,a.updateDragState())});g.next(B.resetSymbol(d)).next(function(){if(p.isSome(a._scaleRotateDragData)){switch(a._scaleRotateDragData.mode){case "rotate":a.tool.emit("graphic-rotate-stop",{graphic:d,angle:a._scaleRotateDragData.startAngle});break;case "scale":a.tool.emit("graphic-scale-stop",{graphic:d,scale:1})}a.startAnimation(I(a,function(){return a.onScaleChanged()}));a._scaleRotateDragData=
null}})});this._handles.add(b);this._handles.add([this.ringManipulator.events.on("focus-changed",function(b){"focus"===b.action?a.startAnimation(ba(a,function(){return a.updateDelayedFocusedState()})):a.updateDelayedFocusedState()}),this.ringManipulator.events.on("immediate-click",function(a){a.stopPropagation()}),N.init(this.tool.graphicState,"displaying",function(b){return a.ringManipulator.available=b}),this.tool.graphicState.on("changed",function(){return A.placeAtGraphic(a.tool.view,a.ringManipulator,
d)})]);A.placeAtGraphic(this.tool.view,this.ringManipulator,d)};b.prototype.onScaleChanged=function(){this.events.emit("scale-changed");this.updateManipulatorTransform()};b.prototype.updateDelayedFocusedState=function(){this.ringManipulator.updateStateEnabled(c.DelayedFocused,this.getFocused())};b.prototype.updateDragState=function(){this.ringManipulator.updateStateEnabled(c.Unlocked,!(p.isSome(this._scaleRotateDragData)&&"none"!==this._scaleRotateDragData.mode));if(p.isSome(this._scaleRotateDragData))switch(this._scaleRotateDragData.mode){case "rotate":this.ringManipulator.updateStateEnabled(c.ScaleIn|
c.ScaleOut,!1);this.ringManipulator.updateStateEnabled(c.RotateLeft,0>this._scaleRotateDragData.angleDir);this.ringManipulator.updateStateEnabled(c.RotateRight,0<=this._scaleRotateDragData.angleDir);break;case "scale":this.ringManipulator.updateStateEnabled(c.RotateLeft|c.RotateRight,!1),this.ringManipulator.updateStateEnabled(c.ScaleIn,0>this._scaleRotateDragData.scaleDir),this.ringManipulator.updateStateEnabled(c.ScaleOut,0<=this._scaleRotateDragData.scaleDir)}else this.ringManipulator.updateStateEnabled(c.ScaleIn|
c.ScaleOut|c.RotateLeft|c.RotateRight,!1)};b.prototype.updateManipulatorTransform=function(){var a=w.mat4.identity(k.sm4d.get());w.mat4.rotate(a,a,this.tool.symbolRotationAngle,y.vec3f64.fromValues(0,0,1));var b=this.getScale(),b=w.mat4.fromScaling(k.sm4d.get(),n.vec3.set(k.sv3d.get(),b,b,b)),c=w.mat4.identity(k.sm4d.get());w.mat4.multiply(c,b,a);this.ringManipulator.modelTransform=c};b.prototype.createRingManipulator=function(){for(var a=function(a,b,c){for(var d=[],e=Math.ceil(f.GEOMETRY_SEGMENTS*
(b-a)/(2*Math.PI)),g=0;g<e+1;g++){var h=a+g*(b-a)/e;d.push(y.vec3f64.fromValues(c*Math.cos(h),c*Math.sin(h),0))}return d},b=function(b){return a(0,2*Math.PI,b)},g=function(a,b){return new H(C.createPathExtrusionGeometry([[-b/2,0],[b/2,0],[b/2,f.RING_HEIGHT/2],[-b/2,f.RING_HEIGHT/2]],a,[],[],!1),"graphic-transform-ring")},k=b(f.RING_RADIUS),h=g(k,f.RING_THICKNESS),p=[],n=[],e=[],t=0;2>t;t++){var m=t*Math.PI-Math.PI/4,l=Math.PI/2-f.ROTATE_INDICATOR_ARC_LENGTH,u=m+l,m=m+Math.PI/2-l,l=a(u,m,f.INNER_INDICATOR_RADIUS),
v=g(l,f.INDICATOR_THICKNESS);e.push(l);e.push(a(u,m,f.OUTER_INDICATOR_RADIUS-f.RING_THICKNESS/2));p.push(v);n.push(v);for(v=0;2>v;v++){var r=0===v,q=O.mat4f64.create();if(r){w.mat4.scale(q,q,[1,-1,1]);w.mat4.rotate(q,q,-u,[0,0,1]);var x=Math.round(f.ROTATE_INDICATOR_ARROW_PLACEMENT_PERCENTAGE*(l.length-1))}else w.mat4.rotate(q,q,m,[0,0,1]),x=Math.round((1-f.ROTATE_INDICATOR_ARROW_PLACEMENT_PERCENTAGE)*(l.length-1));q[12]=l[x][0];q[13]=l[x][1];q[14]=l[x][2];x=C.createExtrudedTriangle(f.ROTATE_INDICATOR_ARROW_TIP_LENGTH,
0,f.ROTATE_INDICATOR_ARROW_TIP_RADIUS,f.RING_HEIGHT);C.transformInPlace(x,q);q=new H(x,"graphic-transform-ring-rotate");(r?p:n).push(q)}}v=[];for(t=0;2>t;t++)m=t*Math.PI-Math.PI/4,l=Math.PI/2-f.SCALE_INDICATOR_ARC_LENGTH,u=m+l,m=m+Math.PI/2-l,l=a(u,m,f.OUTER_INDICATOR_RADIUS),v.push(g(l,f.INDICATOR_THICKNESS));t=b(f.RING_RADIUS+f.SCALE_INDICATOR_OFFSET1);u=b(f.RING_RADIUS+f.SCALE_INDICATOR_OFFSET2);t=g(t,f.INDICATOR_THICKNESS);u=g(u,f.INDICATOR_THICKNESS);m=b(f.RING_RADIUS-f.SCALE_INDICATOR_OFFSET1);
l=b(f.RING_RADIUS-f.SCALE_INDICATOR_OFFSET2);b=g(m,f.INDICATOR_THICKNESS);g=g(l,f.INDICATOR_THICKNESS);m=this.createMaterial();l=this.createMaterial(.66);q=this.createMaterial(.5);r=this.createMaterial(.33);h=[{geometry:h,material:m,stateMask:c.DelayedFocused},{geometry:h,material:q,stateMask:0}];this.mode&&"scale"!==this.mode||(h=h.concat([{geometry:v,material:m,stateMask:c.DelayedFocused|c.Unlocked},{geometry:t,material:l,stateMask:c.DelayedFocused|c.ScaleIn},{geometry:u,material:r,stateMask:c.DelayedFocused|
c.ScaleIn},{geometry:b,material:l,stateMask:c.DelayedFocused|c.ScaleOut},{geometry:g,material:r,stateMask:c.DelayedFocused|c.ScaleOut}]));this.mode&&"rotate"!==this.mode||(h=h.concat([{geometry:n,material:m,stateMask:c.DelayedFocused|c.Unlocked},{geometry:p,material:m,stateMask:c.DelayedFocused|c.RotateLeft},{geometry:n,material:m,stateMask:c.DelayedFocused|c.RotateRight}]));k=[k].concat(e);return new R.Manipulator3D({view:this.tool.view,renderObjects:h,autoScaleRenderObjects:!1,worldOriented:!0,
radius:f.RING_THICKNESS,focusMultiplier:1,touchMultiplier:1.5,elevationInfo:Q.getGraphicEffectiveElevationInfo(this.tool.graphicState.graphic),collisionType:{type:"ribbon",paths:k,direction:y.vec3f64.fromValues(0,0,1)}})};b.prototype.createMaterial=function(a){void 0===a&&(a=1);var b=f.HANDLE_COLOR.concat([a]);a=new T({color:b,transparent:1!==a,cullFace:2},"graphic-transform");a.renderOccluded=2;return a};b.prototype.applySymbolData=function(a,b,c,f){var d=this;a.symbolLayers.forEach(function(a,g){var e=
b.symbolLayers[g];g=e.heading;e=e.size;"object"===a.type&&(a.heading=(p.isSome(g)?g:0)-P.toDegree(c),p.isSome(e)&&"width"in e&&(e.width=d.enforceNonZeroSize(e.width),e.height=d.enforceNonZeroSize(e.height),e.depth=d.enforceNonZeroSize(e.depth),a.width=e.width*f,a.depth=e.depth*f,a.height=e.height*f))})};b.prototype.enforceNonZeroSize=function(a){return a||this.tool.view.state.camera.computeRenderPixelSizeAt(this.ringManipulator.renderLocation)};Object.defineProperty(b.prototype,"test",{get:function(){return{ringManipulator:this.ringManipulator}},
enumerable:!0,configurable:!0});return b}();E.GraphicScaleRotateTransform=D;var Z=y.vec3f64.create(),aa=G.createScreenPointArray()});