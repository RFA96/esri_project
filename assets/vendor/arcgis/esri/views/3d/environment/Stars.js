// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../request ../../../core/asyncUtils ../../../core/Error ../../../core/Logger ../../../core/promiseUtils ../../../core/watchUtils ../../../core/libs/gl-matrix-2/mat4 ../../../core/libs/gl-matrix-2/mat4f64 ./StarsTechnique ../support/buffer/glUtil ../support/buffer/InterleavedLayout ../webgl-engine/lib/DefaultVertexAttributeLocations ../../webgl/BufferObject ../../webgl/VertexArrayObject".split(" "),
function(u,n,v,w,x,y,p,z,q,A,f,k,B,C,D,E,F,G){var r=z.getLogger("esri.views.3d.environment.Stars");n=function(){function c(a){this.slot=14;this.numBinaryFloats=2;this.numBinaryUInt8=1;this.bytesPerStar=9;this._loadDataController=q.createAbortController();this._numStars=0;this._modelMatrix=k.mat4f64.create();this._destroyed=!1;this.view=a;this._loadDataPromise=this._loadBrightStarCatalogue()}Object.defineProperty(c.prototype,"canRender",{get:function(){return null!=this._vao},enumerable:!0,configurable:!0});
c.prototype.destroy=function(){this._destroyed=!0;this._loadDataController&&(this._loadDataController.abort(),this._loadDataController=null);this._dateHandle&&(this._dateHandle.remove(),this._dateHandle=null);this._vao&&(this._vao.dispose(),this._vao=null)};c.prototype.initializeRenderContext=function(a){var b=this;this._initContext=a;var d=a.rctx;this._starsTechnique=new B.StarsTechnique({rctx:d,viewingMode:"local"===this.view.viewingMode?1:0},null);this._dateHandle=A.init(this.view,"environment.lighting.date",
function(a){return b._update(a)});this._loadDataPromise.then(function(){if(!b._destroyed){b._numStars=b._starData.byteLength/b.bytesPerStar;var c=new Float32Array(b._starData,0,b._numStars*b.numBinaryFloats),g=new Uint8Array(b._starData,b._numStars*b.numBinaryFloats*4,b._numStars*b.numBinaryUInt8);b._vao=b._createVertexArrayObject(d,c,g);a.requestRender()}})};c.prototype.uninitializeRenderContext=function(){this.destroy()};c.prototype.render=function(a){if(a.slot!==this.slot||0!==a.pass)return!1;
var b=a.rctx,d=this._starsTechnique.program;b.bindProgram(d);this._starsTechnique.bindPass(b,a.camera);d.setUniformMatrix4fv("model",this._modelMatrix);this._starsTechnique.bindPipelineState(b);b.bindVAO(this._vao);d.assertCompatibleVertexAttributeLocations(this._vao);b.drawArrays(0,0,this._numStars);return!0};c.prototype._computeDayDuration=function(a){var b=new Date(a.getFullYear(),0,1,11,58,56),d=new Date(a.getFullYear()+1,0,1,11,58,55);return(+a-+b)/(+d-+b)};c.prototype._update=function(a){if(a){var b=
a.getHours()/12,d=a.getMinutes()/60*(2/24),c=a.getSeconds()/60*(2/1440),b=(b+d+c-.9972222)%2;a=2*this._computeDayDuration(a);d=this._modelMatrix;f.mat4.copy(d,H);f.mat4.rotateZ(d,d,-a*Math.PI);f.mat4.multiply(d,I,d);f.mat4.rotateZ(d,d,-b*Math.PI);this._initContext.requestRender()}};c.prototype._hexToRGB=function(a){return[parseInt(a.substring(0,2),16),parseInt(a.substring(2,4),16),parseInt(a.substring(4,6),16)]};c.prototype._unpackUint8Attributes=function(a){return 192<=a?[2.9,a-192]:160<=a?[2.5,
a-160]:128<=a?[2,a-128]:96<=a?[1.5,a-96]:64<=a?[1,a-64]:32<=a?[.7,a-32]:[.4,a]};c.prototype._createVertexArrayObject=function(a,b,d){for(var c=t.createBuffer(this._numStars),g=c.position,f=c.color,k=c.size,e=0;e<this._numStars;e++){var l=b[2*e+0],h=b[2*e+1];g.set(e,0,-Math.cos(l)*Math.sin(h));g.set(e,1,-Math.sin(l)*Math.sin(h));g.set(e,2,-Math.cos(h));l=this._unpackUint8Attributes(d[e]);h=this._hexToRGB(J[l[1]]);f.set(e,0,255*h[0]);f.set(e,1,255*h[1]);f.set(e,2,255*h[2]);f.set(e,3,255);k.set(e,l[0])}return new G(a,
E.Default3D,{geometry:C.glLayout(t)},{geometry:F.createVertex(a,35044,c.buffer)})};c.prototype._verifyStartData=function(a){if(!a)throw new p("stars:no-data-received","Failed to create stars because star catalogue is missing");a=a.byteLength/this.bytesPerStar;if(0!==a%1||5E4<a||5E3>a)throw new p("stars:invalid-data","Failed to create stars because star catalogue data is invalid");};c.prototype._loadBrightStarCatalogue=function(){return w(this,void 0,void 0,function(){var a,b,d;return v(this,function(c){switch(c.label){case 0:return m?
(this._starData=m,[2]):[4,y.result(x(u.toUrl("./resources/stars.wsv"),{responseType:"array-buffer",signal:this._loadDataController.signal}))];case 1:a=c.sent();this._loadDataController=null;if(!1===a.ok){if(q.isAbortError(a.error))throw a.error;r.error("loadBrightStarCatalogue",a.error.message);return[2]}b=a.value;d=b.data;try{this._verifyStartData(d)}catch(g){throw r.error("loadBrightStarCatalogue",g),g;}this._starData=m=d;return[2]}})})};return c}();var J="9bb2ff;9eb5ff;aabfff;bbccff;ccd8ff ;dae2ff;e4e9ff;eeefff;f8f6ff;fff9fb;fff5ef;fff1e5;ffeddb;ffe9d2;ffe6ca;ffe3c3;ffe0bb;ffddb4;ffdaad;ffd6a5;ffd29c;ffcc8f;ffc178;ffa94b;ff7b00".split(";"),
I=k.mat4f64.fromValues(1,0,0,0,0,.9174771405229186,.39778850739794974,0,0,-.39778850739794974,.9174771405229186,0,0,0,0,1),H=k.mat4f64.fromValues(1,0,0,0,0,.9174771405229186,-.39778850739794974,0,0,.39778850739794974,.9174771405229186,0,0,0,0,1),t=D.newLayout().vec3f("position").vec4u8("color").f32("size"),m=null;return n});