// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../webgl ../enums ../Utils ./WGLGeometryBrush ../materialKey/MaterialKey".split(" "),function(h,l,n,u,p,q,r,t){Object.defineProperty(l,"__esModule",{value:!0});h=function(g){function e(){return null!==g&&g.apply(this,arguments)||this}n(e,g);e.prototype.dispose=function(){};e.prototype.getGeometryType=function(){return p.WGLGeometryType.LINE};e.prototype.drawGeometry=function(c,e,b,g,a){var d=c.context,h=c.painter,f=c.rendererInfo,
l=c.requiredLevel,n=b.indexFrom,p=b.indexCount;b=t.LineMaterialKey.load(b.materialKey);var k=q.createProgramDescriptor(b.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_offsetAndNormal",count:4,type:5120},{location:4,name:"a_accumulatedDistanceAndHalfWidth",count:2,type:5123},{location:5,name:"a_tlbr",count:4,type:5123},{location:6,name:"a_segmentDirection",count:4,
type:5120},{location:7,name:"a_aux",count:2,type:5123}]}),m=k.bufferLayouts,k=k.attributes;a=h.materialManager.getMaterialProgram(c,b,"materials/line",k,a);g=this._getVAO(d,m,k,g);m=1/c.pixelRatio;d.bindProgram(a);d.bindVAO(g);this._setSharedUniforms(a,c,e);b.textureBinding&&h.textureManager.bindTextures(d,a,b);a.setUniform1f("u_zoomFactor",Math.pow(2,l-e.key.level)/c.pixelRatio);a.setUniform1f("u_blur",0+m);a.setUniform1f("u_antialiasing",m);b.vvSizeMinMaxValue&&a.setUniform4fv("u_vvSizeMinMaxValue",
f.vvSizeMinMaxValue);b.vvSizeScaleStops&&a.setUniform1f("u_vvSizeScaleStopsValue",f.vvSizeScaleStopsValue);b.vvSizeFieldStops&&(c=f.getSizeVVFieldStops(e.key.level),a.setUniform1fv("u_vvSizeFieldStopsValues",c.values),a.setUniform1fv("u_vvSizeFieldStopsSizes",c.sizes));b.vvSizeUnitValue&&a.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",f.vvSizeUnitValueToPixelsRatio);b.vvColor&&(a.setUniform1fv("u_vvColorValues",f.vvColorValues),a.setUniform4fv("u_vvColors",f.vvColors));b.vvOpacity&&(a.setUniform1fv("u_vvOpacityValues",
f.vvOpacityValues),a.setUniform1fv("u_vvOpacities",f.vvOpacities));d.setFaceCullingEnabled(!0);d.setFrontFace(2305);d.setCullFace(1029);d.drawElements(4,p,5125,4*n);d.setFaceCullingEnabled(!1);d.bindVAO(null)};return e}(r.default);l.default=h});