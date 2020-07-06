// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/Evented ../../../../core/mathUtils ../../../../core/maybe ./TextRenderer ./Texture ../../../webgl/Texture ../../../webgl/capabilities/isWebGL2Context".split(" "),function(n,p,f,b,d,e,g,h,k){var l={canvas:null};return function(){function a(a,m,c,b){this._idHint=b;this._glTexture=null;this.events=new f;this._requiresPowerOfTwo=!k.default(a.gl);this._renderer=new e.default(m,c)}Object.defineProperty(a.prototype,"id",{get:function(){null==this._id&&(this._id=g.idGen.gen(this._idHint));
return this._id},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"width",{get:function(){return this._renderer.renderedWidth},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"height",{get:function(){return this._renderer.renderedHeight},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"textureWidth",{get:function(){var a=this.width;return this._requiresPowerOfTwo?b.nextHighestPowerOfTwo(a):a},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"textureHeight",{get:function(){var a=this.height;return this._requiresPowerOfTwo?b.nextHighestPowerOfTwo(a):a},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"displayWidth",{get:function(){return this._renderer.displayWidth},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"displayHeight",{get:function(){return this._renderer.displayHeight},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"texcoordScale",{get:function(){return[this._renderer.renderedWidth/
this.textureWidth,this._renderer.renderedHeight/this.textureHeight]},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"requiresFrameUpdates",{get:function(){return!1},enumerable:!0,configurable:!0});a.prototype.createDescriptor=function(a){return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,flipped:!0,samplingMode:9987,hasMipmap:!0,preMultiplyAlpha:!0,maxAnisotropy:a.parameters.maxMaxAnisotropy}};a.prototype.load=function(a){if(d.isSome(this._glTexture))return this._glTexture;
var b=e.getTextHelperCanvas(l,this.textureWidth,this.textureHeight),c=b.getContext("2d");c.save();this._renderer.render(c,0,this.textureHeight-this._renderer.renderedHeight);this._glTexture=new h(a,this.createDescriptor(a),b);c.restore();return this._glTexture};a.prototype.unload=function(){d.isSome(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null);this.events.emit("unloaded")};return a}()});