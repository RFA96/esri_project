// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../../core/libs/gl-matrix-2/mat3f32 ../../../../../core/libs/gl-matrix-2/vec4f32 ../../../../webgl ../definitions ../enums ../number ./WGLBrush".split(" "),function(y,z,D,E,A,q,v,w,F,G){Object.defineProperty(z,"__esModule",{value:!0});var B=1/65536,C=[1,1,1,1];y=function(t){function m(){var a=null!==t&&t.apply(this,arguments)||this;a._fillVertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:4,normalized:!1,
divisor:0}]};a._fillVertexAttributesDD={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:8,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:4,stride:8,normalized:!0,divisor:0}]};a._outlineVertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:8,normalized:!1,divisor:0},{name:"a_offset",count:2,type:5120,offset:4,stride:8,normalized:!1,divisor:0},{name:"a_xnormal",count:2,type:5120,offset:6,stride:8,normalized:!1,divisor:0}]};a._outlineVertexAttributesDD=
{geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:12,normalized:!1,divisor:0},{name:"a_offset",count:2,type:5120,offset:4,stride:12,normalized:!1,divisor:0},{name:"a_xnormal",count:2,type:5120,offset:6,stride:12,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:8,stride:12,normalized:!0,divisor:0}]};a._color=A.vec4f32.create();a._outlineColor=A.vec4f32.create();a._fillProgramOptions={id:!1,dd:!1,pattern:!1};a._outlineProgramOptions={id:!1,dd:!1};a._patternMatrix=E.mat3f32.create();
return a}D(m,t);m.prototype.dispose=function(){};m.prototype.drawMany=function(a,e){var b=a.displayLevel,k=a.drawPhase,c=a.renderPass,n=a.styleLayerId,f=a.styleLayer,h=f.getPaintValue("fill-pattern",b),g=f.hasDataDrivenColor?C:f.getPaintValue("fill-color",b),l=f.hasDataDrivenOpacity?1:f.getPaintValue("fill-opacity",b),p=l*g[3],d=void 0!==h||1>p||f.hasDataDrivenFill;if(!d||"opaque"!==c){this._color[0]=p*g[0];this._color[1]=p*g[1];this._color[2]=p*g[2];this._color[3]=p;var u;k===w.WGLDrawPhase.HITTEST&&
(u=F.u32to4Xu8(n));k=f.getPaintValue("fill-translate",b);b=f.getPaintValue("fill-translate-anchor",b);this._drawFill(a,n,f,e,k,b,h,d,u);this._drawOutline(a,n,f,e,k,b,h,u,l)}};m.prototype._drawFill=function(a,e,b,k,c,n,f,h,g){var l=a.context,p=a.displayLevel,d=a.drawPhase,u=a.renderPass,m=a.spriteMosaic,q=a.state;if(h||"translucent"!==u){h=void 0!==f;var u=a.pixelRatio>v.VTL_HIGH_RES_CUTOFF?2:1,t=b.hasDataDrivenFill;a=a.painter.getVectorTileProgramCach();var r,x=d===w.WGLDrawPhase.HITTEST,d=this._fillProgramOptions;
d.id=x;d.dd=t;d.pattern=h;d=a.getProgram(1,(x?1:0)<<2|(t?1:0)<<1|(h?1:0),d);l.bindProgram(d);if(h){r=m.getMosaicItemPosition(f,!0);if(!r){l.bindProgram();return}d.setUniform2f("u_pattern_tl",r.tl[0],r.tl[1]);d.setUniform2f("u_pattern_br",r.br[0],r.br[1]);d.setUniform1i("u_texture",v.VTL_TEXTURE_BINDING_UNIT_SPRITES);m.bind(l,9729,r.page,v.VTL_TEXTURE_BINDING_UNIT_SPRITES)}d.setUniformMatrix3fv("u_displayMat3",1===n?q.displayMat3:q.displayViewMat3);d.setUniform2fv("u_fillTranslation",c);d.setUniform1f("u_depth",
b.z+B);d.setUniform4fv("u_color",this._color);x&&d.setUniform4f("u_id",g[0],g[1],g[2],g[3]);for(b=0;b<k.length;b++)if(c=k[b],c.layerData[e]&&(f=this._getFillVAO(l,c,t,a)))n=c.layerData[e],l.bindVAO(f),d.setUniformMatrix3fv("u_dvsMat3",c.transforms.dvs),h&&(f=c.coordRange[0]/(u*c.size[0]*Math.max(Math.pow(2,Math.round(p)-c.key.level),1)),g=1/(r.size[1]*f),this._patternMatrix[0]=1/(r.size[0]*f),this._patternMatrix[4]=g,d.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)),l.setStencilFunction(514,
c.stencilRef,255),l.drawElements(4,n.triangleElementCount,5125,12*n.triangleElementStart),c.triangleCount+=n.triangleElementCount/3}};m.prototype._drawOutline=function(a,e,b,k,c,n,f,h,g){var l=a.context,p=a.displayLevel,d=a.drawPhase,m=a.pixelRatio,q=a.state;if("opaque"!==a.renderPass&&(f=void 0!==f,b.getPaintValue("fill-antialias",p)&&!f||b.hasDataDrivenOutlineColor)){a=a.painter.getVectorTileProgramCach();f=b.hasDataDrivenOutline;if(b.outlineUsesFillColor){if(1!==this._color[3])return;this._outlineColor[0]=
this._color[0];this._outlineColor[1]=this._color[1];this._outlineColor[2]=this._color[2];this._outlineColor[3]=this._color[3]}else p=b.hasDataDrivenOutlineColor?C:b.getPaintValue("fill-outline-color",p),g*=p[3],this._outlineColor[0]=g*p[0],this._outlineColor[1]=g*p[1],this._outlineColor[2]=g*p[2],this._outlineColor[3]=g;m=.75/m;g=d===w.WGLDrawPhase.HITTEST;d=this._outlineProgramOptions;d.id=g;d.dd=f;d=a.getProgram(2,(g?1:0)<<1|(f?1:0),d);l.bindProgram(d);d.setUniformMatrix3fv("u_displayMat3",1===
n?q.displayMat3:q.displayViewMat3);d.setUniform2fv("u_fillTranslation",c);d.setUniform1f("u_depth",b.z+B);d.setUniform1f("u_outline_width",m);d.setUniform4fv("u_color",this._outlineColor);g&&d.setUniform4f("u_id",h[0],h[1],h[2],h[3]);for(b=0;b<k.length;b++)if(c=k[b],c.layerData[e]&&(n=c.layerData[e],h=this._getOutlineVAO(l,c,f,a)))l.bindVAO(h),d.setUniformMatrix3fv("u_dvsMat3",c.transforms.dvs),l.setStencilFunction(514,c.stencilRef,255),l.drawElements(4,n.outlineElementCount,5125,12*n.outlineElementStart),
c.triangleCount+=n.outlineElementCount/3}};m.prototype._getFillVAO=function(a,e,b,k){if(b){if(e.fillDDVertexArrayObject)return e.fillDDVertexArrayObject;b=e.fillDDVertexBuffer;var c=e.fillIndexBuffer;if(!b||!c)return null;e.fillDDVertexArrayObject=new q.VertexArrayObject(a,k.getProgramAttributes(1),this._fillVertexAttributesDD,{geometry:b},c);return e.fillDDVertexArrayObject}if(e.fillVertexArrayObject)return e.fillVertexArrayObject;b=e.fillVertexBuffer;c=e.fillIndexBuffer;if(!b||!c)return null;e.fillVertexArrayObject=
new q.VertexArrayObject(a,k.getProgramAttributes(1),this._fillVertexAttributes,{geometry:b},c);return e.fillVertexArrayObject};m.prototype._getOutlineVAO=function(a,e,b,k){if(b){if(e.outlineDDVertexArrayObject)return e.outlineDDVertexArrayObject;b=e.outlineDDVertexBuffer;var c=e.outlineIndexBuffer;if(!b||!c)return null;e.outlineDDVertexArrayObject=new q.VertexArrayObject(a,k.getProgramAttributes(2),this._outlineVertexAttributesDD,{geometry:b},c);return e.outlineDDVertexArrayObject}if(e.outlineVertexArrayObject)return e.outlineVertexArrayObject;
b=e.outlineVertexBuffer;c=e.outlineIndexBuffer;if(!b||!c)return null;e.outlineVertexArrayObject=new q.VertexArrayObject(a,k.getProgramAttributes(2),this._outlineVertexAttributes,{geometry:b},c);return e.outlineVertexArrayObject};return m}(G.default);z.WGLBrushVTLFill=y});