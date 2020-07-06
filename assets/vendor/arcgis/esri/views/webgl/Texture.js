// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/tsSupport/assignHelper","../../core/has","../../core/mathUtils"],function(p,q,n,r,m){return function(){function c(a,b,l){this._glName=this._context=null;this._id=-1;this._descriptor=void 0;this._wrapModeDirty=this._samplingModeDirty=!1;this._boundToUnits=new Set;this._context=a;this._descriptor=n({target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1},b);this._id=++c._nextId;this.setData(l)}Object.defineProperty(c.prototype,
"id",{get:function(){return this._id},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"descriptor",{get:function(){return this._descriptor},enumerable:!0,configurable:!0});c.prototype.dispose=function(){var a=this;if(this._context&&this._context.gl){if(this._glName){var b=this._context.gl;this._boundToUnits.forEach(function(b){a._context.bindTexture(null,b)});b.deleteTexture(this._glName);
this._glName=null}this._context=null}};c.prototype.release=function(){this.dispose()};c.prototype.resize=function(a,b){var c=this._descriptor;if(c.width!==a||c.height!==b)c.width=a,c.height=b,this.setData(null)};c.prototype.setData=function(a){var b=this._context.gl;this._glName||(this._glName=b.createTexture());void 0===a&&(a=null);null===a&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);var l=this._context.getBoundTexture(0);this._context.bindTexture(this,
0);var d=this._descriptor;c._validateTexture(d);b.pixelStorei(b.UNPACK_ALIGNMENT,d.unpackAlignment);b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,d.flipped?1:0);b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.preMultiplyAlpha?1:0);var h=d.pixelFormat,g=d.internalFormat?d.internalFormat:h;if(a instanceof ImageData||a instanceof HTMLImageElement||a instanceof HTMLCanvasElement||a instanceof HTMLVideoElement){var f=a.width,e=a.height;a instanceof HTMLVideoElement&&(f=a.videoWidth,e=a.videoHeight);d.width&&d.height&&
console.assert(f===d.width&&e===d.height);b.texImage2D(b.TEXTURE_2D,0,g,h,d.dataType,a);d.hasMipmap&&this.generateMipmap();void 0===d.width&&(d.width=f);void 0===d.height&&(d.height=e)}else if(null!=d.width&&null!=d.height||console.error("Width and height must be specified!"),b.DEPTH24_STENCIL8&&g===b.DEPTH_STENCIL&&(g=b.DEPTH24_STENCIL8),f=d.width,e=d.height,null!=a&&"type"in a&&"compressed"===a.type){h=Math.round(Math.log(Math.max(f,e))/Math.LN2)+1;d.hasMipmap=d.hasMipmap&&h===a.levels.length;for(var k=
0;;++k){b.compressedTexImage2D(b.TEXTURE_2D,k,g,f,e,0,a.levels[Math.min(k,a.levels.length-1)]);if(1===f&&1===e||!d.hasMipmap)break;f=Math.max(1,f>>1);e=Math.max(1,e>>1)}}else if(a)b.texImage2D(b.TEXTURE_2D,0,g,f,e,0,h,d.dataType,a),d.hasMipmap&&this.generateMipmap();else for(k=0;;++k){b.texImage2D(b.TEXTURE_2D,k,g,f,e,0,h,d.dataType,null);if(1===f&&1===e||!d.hasMipmap)break;f=Math.max(1,f>>1);e=Math.max(1,e>>1)}c._applySamplingMode(b,this._descriptor);c._applyWrapMode(b,this._descriptor);c._applyAnisotropicFilteringParameters(this._context,
this._descriptor);this._context.bindTexture(l,0)};c.prototype.updateData=function(a,b,c,d,h,g){g||console.error("An attempt to use uninitialized data!");this._glName||console.error("An attempt to update uninitialized texture!");var f=this._context.gl,e=this._descriptor,l=this._context.getBoundTexture(0);this._context.bindTexture(this,0);(0>b||0>c||d>e.width||h>e.height||b+d>e.width||c+h>e.height)&&console.error("An attempt to update out of bounds of the texture!");f.pixelStorei(f.UNPACK_ALIGNMENT,
e.unpackAlignment);f.pixelStorei(f.UNPACK_FLIP_Y_WEBGL,e.flipped?1:0);f.pixelStorei(f.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.preMultiplyAlpha?1:0);g instanceof ImageData||g instanceof HTMLImageElement||g instanceof HTMLCanvasElement||g instanceof HTMLVideoElement?f.texSubImage2D(f.TEXTURE_2D,a,b,c,e.pixelFormat,e.dataType,g):f.texSubImage2D(f.TEXTURE_2D,a,b,c,d,h,e.pixelFormat,e.dataType,g);this._context.bindTexture(l,0)};c.prototype.generateMipmap=function(){var a=this._descriptor;a.hasMipmap||(a.hasMipmap=
!0,c._validateTexture(a));9729===a.samplingMode?(this._samplingModeDirty=!0,a.samplingMode=9985):9728===a.samplingMode&&(this._samplingModeDirty=!0,a.samplingMode=9984);a=this._context.getBoundTexture(0);this._context.bindTexture(this,0);var b=this._context.gl;b.generateMipmap(b.TEXTURE_2D);this._context.bindTexture(a,0)};c.prototype.setSamplingMode=function(a){a!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=a,c._validateTexture(this._descriptor),this._samplingModeDirty=!0)};c.prototype.setWrapMode=
function(a){a!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=a,c._validateTexture(this._descriptor),this._wrapModeDirty=!0)};c.prototype.applyChanges=function(){var a=this._context.gl,b=this._descriptor;this._samplingModeDirty&&(c._applySamplingMode(a,b),this._samplingModeDirty=!1);this._wrapModeDirty&&(c._applyWrapMode(a,b),this._wrapModeDirty=!1)};c.prototype.setBoundToUnit=function(a,b){b?this._boundToUnits.add(a):this._boundToUnits.delete(a)};c._validateTexture=function(a){(0>a.width||
0>a.height)&&console.error("Negative dimension parameters are not allowed!");m.isPowerOfTwo(a.width)&&m.isPowerOfTwo(a.height)||("number"===typeof a.wrapMode?33071!==a.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===a.wrapMode.s&&33071===a.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),a.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))};c._applySamplingMode=function(a,b){var c=
b.samplingMode,d=b.samplingMode;if(9985===c||9987===c)c=9729,b.hasMipmap||(d=9729);else if(9984===c||9986===c)c=9728,b.hasMipmap||(d=9728);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,c);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,d)};c._applyWrapMode=function(a,b){"number"===typeof b.wrapMode?(a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,b.wrapMode),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,b.wrapMode)):(a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,b.wrapMode.s),a.texParameteri(a.TEXTURE_2D,
a.TEXTURE_WRAP_T,b.wrapMode.t))};c._applyAnisotropicFilteringParameters=function(a,b){if(null!=b.maxAnisotropy){var c=a.capabilities.textureFilterAnisotropic;c&&(a=a.gl,a.texParameterf(a.TEXTURE_2D,c.TEXTURE_MAX_ANISOTROPY,b.maxAnisotropy))}};c._nextId=0;return c}()});