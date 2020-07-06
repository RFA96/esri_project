// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/mathUtils ../../../../core/screenUtils ../../../../core/accessorSupport/decorators ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/Point ../geometryUtils ../PropertiesPool ./PointOfInterest".split(" "),function(m,n,q,g,r,t,d,f,c,u,v,w,x){Object.defineProperty(n,"__esModule",{value:!0});var y=Array;m=function(c){function a(b){b=
c.call(this,b)||this;b.propertiesPool=new w.default({locationOnSurface:u,renderLocationOnSurface:y},b);b.centerOnSurface=null;return b}q(a,c);a.prototype.destroy=function(){this.propertiesPool.destroy();this.propertiesPool=null};Object.defineProperty(a.prototype,"locationOnSurface",{get:function(){var b=this.propertiesPool.get("locationOnSurface");this.renderCoordsHelper.fromRenderCoords(this.renderLocationOnSurface,b,this.state.spatialReference);return b},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"renderLocationOnSurface",{get:function(){var b=this.centerOnSurface.renderLocation,k=this.renderCoordsHelper,a=this.calculateScreenHorizontalEdgeOnSurface(z);f.vec3.subtract(l,b,this.state.camera.eye);f.vec3.normalize(l,l);k.worldUpAtPosition(b,p);var e=Math.abs(Math.acos(f.vec3.dot(p,l))-.5*Math.PI),k=this.propertiesPool.get("renderLocationOnSurface"),e=1-r.clamp(e/(.5*Math.PI),0,1);f.vec3.lerp(k,b,a,e*e*e);return k},enumerable:!0,configurable:!0});a.prototype.calculateScreenHorizontalEdgeOnSurface=
function(b){var a=this.state.camera,c=this.renderCoordsHelper.getAltitude(this.centerOnSurface.renderLocation),e=this.renderCoordsHelper.getAltitude(a.eye)>=c,d=a.getRenderCenter(t.createRenderScreenPointArray3());d[1]=e?a.padding[2]:a.fullHeight-a.padding[0];a.unprojectPoint(d,h);f.vec3.subtract(h,h,a.eye);e=f.vec3.normalize(h,h);if(this.renderCoordsHelper.intersectManifold(v.ray.wrap(a.eye,e),c,b))return b;f.vec3.copy(b,a.eye);this.renderCoordsHelper.setAltitude(c,b);return b};a.prototype.updateRenderLocation=
function(){};g([d.property({constructOnly:!0})],a.prototype,"centerOnSurface",void 0);g([d.property({readOnly:!0,dependsOn:["renderLocationOnSurface"]})],a.prototype,"locationOnSurface",null);g([d.property({readOnly:!0,dependsOn:["centerOnSurface.renderLocation"]})],a.prototype,"renderLocationOnSurface",null);g([d.property({readOnly:!0,aliasOf:"centerOnSurface.updating"})],a.prototype,"updating",void 0);return a=g([d.subclass("esri.views.3d.support.CenterOnSurface")],a)}(d.declared(x.PointOfInterest));
n.Focus=m;var l=c.vec3f64.create(),p=c.vec3f64.create(),h=c.vec3f64.create(),z=c.vec3f64.create();n.default=m});