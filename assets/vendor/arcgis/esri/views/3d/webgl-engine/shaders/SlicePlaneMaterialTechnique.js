// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/assignHelper ../core/shaderLibrary/Transform.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ./SlicePlaneMaterial.glsl ../../../webgl/Program ../../../webgl/renderState ../../../webgl/renderState".split(" "),function(g,d,h,e,u,k,l,m,n,p,q,r,f){Object.defineProperty(d,"__esModule",{value:!0});
e=function(c){function a(){return null!==c&&c.apply(this,arguments)||this}h(a,c);a.prototype.initializeProgram=function(t){var b=a.shader.get().build();return new q(t.rctx,b.generateSource("vertex"),b.generateSource("fragment"),n.Default3D)};a.prototype.bindPass=function(a,b){this.program.setUniform4fv("backgroundColor",b.backgroundColor);this.program.setUniform4fv("gridColor",b.gridColor);this.program.setUniform1f("gridWidth",b.gridWidth)};a.prototype.bindDraw=function(a){k.Transform.bindUniforms(this.program,
a)};a.prototype.initializePipeline=function(){return f.makePipelineState({blending:r.separateBlendingParams(1,1,771,771),depthTest:{func:513},colorWrite:f.defaultColorWriteParams})};a.shader=new l.ReloadableShaderModule(p,"./SlicePlaneMaterial.glsl",g);return a}(m.ShaderTechnique);d.SlicePlaneMaterialTechnique=e});