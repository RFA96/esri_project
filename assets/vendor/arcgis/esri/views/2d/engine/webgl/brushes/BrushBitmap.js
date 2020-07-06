// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../definitions ../VertexStream ./WGLBrush".split(" "),function(g,k,m,l,n,p){Object.defineProperty(k,"__esModule",{value:!0});var h={nearest:{defines:[],samplingMode:9728,mips:!1},bilinear:{defines:[],samplingMode:9729,mips:!1},bicubic:{defines:["bicubic"],samplingMode:9729,mips:!1},trilinear:{defines:[],samplingMode:9987,mips:!0}};g=function(e){function d(){var a=null!==e&&e.apply(this,arguments)||this;a._desc={path:"raster/bitmap",
attributes:{a_position:0,a_texcoord:1}};return a}m(d,e);d.prototype.dispose=function(){this._quad&&this._quad.dispose()};d.prototype.prepareState=function(a,b){a=a.context;a.setBlendingEnabled(!0);a.setBlendFunctionSeparate(1,771,1,771);a.setColorMask(!0,!0,!0,!0);a.setStencilWriteMask(0);a.setStencilTestEnabled(!0);a.setStencilFunction(514,b.stencilRef,255)};d.prototype.draw=function(a,b){var d=a.context,c=a.renderingOptions,f=a.painter;if(b.source){a.timeline.begin(this.name);this._quad||(this._quad=
new n(d,[0,0,1,0,0,1,1,1]));if("dynamic"===c.samplingMode)var c=a.state,e=b.resolution/b.pixelRatio/c.resolution,g=Math.round(a.pixelRatio)!==a.pixelRatio,c=c.rotation||1.05<e||.95>e||g||b.isSourceScaled||b.rotation?h.bilinear:h.nearest;else c=h[c.samplingMode];f=f.materialManager.getProgram(a,this._desc,c.defines);b.setSamplingProfile(c);b.bind(l.TEXTURE_BINDING_BITMAP);d.bindProgram(f);f.setUniformMatrix3fv("u_dvsMat3",b.transforms.dvs);f.setUniform1i("u_texture",l.TEXTURE_BINDING_BITMAP);f.setUniform2fv("u_coordScale",
b.coordScale);this._quad.draw();a.timeline.end(this.name)}};return d}(p.default);k.default=g});