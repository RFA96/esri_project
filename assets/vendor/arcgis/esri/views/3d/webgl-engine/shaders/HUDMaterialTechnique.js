// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/assignHelper ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/Transform.glsl ../core/shaderLibrary/attributes/VerticalOffset.glsl ../core/shaderLibrary/hud/HUD.glsl ../core/shaderLibrary/hud/HUDOcclusionPass.glsl ../core/shaderLibrary/output/OutputHighlight.glsl ../core/shaderLibrary/shading/VisualVariables.glsl ../core/shaderLibrary/util/Camera.glsl ../core/shaderLibrary/util/ScreenSizePerspective.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ./HUDMaterial.glsl ./HUDMaterial.glsl ../../../webgl/Program ../../../webgl/renderState ../../../webgl/renderState".split(" "),
function(p,g,h,d,f,q,r,t,k,u,v,w,l,x,y,z,a,A,B,C,D,m,e){Object.defineProperty(g,"__esModule",{value:!0});f=function(a){function b(){return null!==a&&a.apply(this,arguments)||this}h(b,a);b.prototype.initializeProgram=function(n){var a=b.shader.get(),c=this.configuration,a=a.build({output:c.output,viewingMode:n.viewingMode,occlusionTestEnabled:c.occlusionTestEnabled,signedDistanceFieldEnabled:c.sdf,slicePlaneEnabled:c.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!0,debugDrawBorder:c.debugDrawBorder,
binaryHighlightOcclusionEnabled:c.binaryHighlightOcclusion,screenCenterOffsetUnitsEnabled:c.screenCenterOffsetUnitsEnabled,screenSizePerspectiveEnabled:c.screenSizePerspective,verticalOffsetEnabled:c.verticalOffset,vvSize:c.vvSize,vvColor:c.vvColor,vvInstancingEnabled:!1});return new D(n.rctx,a.generateSource("vertex"),a.generateSource("fragment"),A.Default3D)};b.prototype.bindPass=function(b,a,c){this.program.setUniform1f("cameraGroundRelative",c.cameraAboveGround?1:-1);this.program.setUniform1f("perDistancePixelRatio",
Math.tan(c.fovY/2)/(c.viewport[2]/2));this.program.setUniformMatrix4fv("viewNormal",c.viewInvTransp);this.program.setUniform1f("polygonOffset",a.shaderPolygonOffset);t.VerticalOffset.bindUniforms(this.program,a,c);x.ScreenSizePerspective.bindUniforms(this.program,a);l.Viewport.bindUniforms(this.program,c);6===this.configuration.output?u.HUDOcclusion.bindUniforms(this.program):(k.HUD.bindUniforms(this.program,c),C.HUDMaterial.bindUniforms(this.program,a,c),w.VisualVariables.bindUniforms(this.program,
a),this.configuration.occlusionTestEnabled&&k.HUD.bindVisibilityTexture(b,this.program,c));4===this.configuration.output&&v.OutputHighlight.bindOutputHighlight(b,this.program,c)};b.prototype.bindDraw=function(a){r.Transform.bindUniforms(this.program,a);l.Camera.bindUniforms(this.program,a);q.Slice.bindUniformsWithOrigin(this.program,this.configuration,a)};b.prototype.initializePipeline=function(){return 4===this.configuration.output?e.makePipelineState({blending:m.separateBlendingParams(1,1,771,771),
polygonOffset:this.configuration.polygonOffsetEnabled&&{factor:0,units:-4},depthTest:{func:513},colorWrite:e.defaultColorWriteParams}):6===this.configuration.output?e.makePipelineState({depthTest:{func:515},depthWrite:e.defaultDepthWriteParams,colorWrite:e.defaultColorWriteParams}):e.makePipelineState({blending:m.simpleBlendingParams(1,771),polygonOffset:this.configuration.polygonOffsetEnabled&&{factor:0,units:-4},depthTest:{func:this.configuration.depthEnabled?515:519},depthWrite:this.configuration.depthEnabled?
e.defaultDepthWriteParams:void 0,colorWrite:e.defaultColorWriteParams})};Object.defineProperty(b.prototype,"primitiveType",{get:function(){return 6===this.configuration.output?0:4},enumerable:!0,configurable:!0});b.shader=new y.ReloadableShaderModule(B,"./HUDMaterial.glsl",p);return b}(z.ShaderTechnique);g.HUDMaterialTechnique=f;f=function(e){function b(){var a=null!==e&&e.apply(this,arguments)||this;a.output=0;a.occlusionTestEnabled=!0;a.sdf=!1;a.vvSize=!1;a.vvColor=!1;a.verticalOffset=!1;a.screenSizePerspective=
!1;a.screenCenterOffsetUnitsEnabled=0;a.debugDrawBorder=!0;a.binaryHighlightOcclusion=!0;a.slicePlaneEnabled=!1;a.polygonOffsetEnabled=!1;a.depthEnabled=!0;return a}h(b,e);d([a.parameter({count:7})],b.prototype,"output",void 0);d([a.parameter()],b.prototype,"occlusionTestEnabled",void 0);d([a.parameter()],b.prototype,"sdf",void 0);d([a.parameter()],b.prototype,"vvSize",void 0);d([a.parameter()],b.prototype,"vvColor",void 0);d([a.parameter()],b.prototype,"verticalOffset",void 0);d([a.parameter()],
b.prototype,"screenSizePerspective",void 0);d([a.parameter({count:2})],b.prototype,"screenCenterOffsetUnitsEnabled",void 0);d([a.parameter()],b.prototype,"debugDrawBorder",void 0);d([a.parameter()],b.prototype,"binaryHighlightOcclusion",void 0);d([a.parameter()],b.prototype,"slicePlaneEnabled",void 0);d([a.parameter()],b.prototype,"polygonOffsetEnabled",void 0);d([a.parameter()],b.prototype,"depthEnabled",void 0);return b}(a.ShaderTechniqueConfiguration);g.HUDMaterialTechniqueConfiguration=f});