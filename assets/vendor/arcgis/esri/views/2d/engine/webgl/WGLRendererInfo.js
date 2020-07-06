// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../Color ../../../../core/has ../../../../core/maybe ../../../../core/screenUtils ../../../../core/unitUtils ../../../../core/libs/gl-matrix-2/mat4f32 ../../../../renderers/support/utils ./definitions ./Utils".split(" "),function(q,r,A,v,w,f,k,x,y,z,l,m){function p(d,a){var c=a.length;if(d<a[0].value||1===c)return a[0].size;for(var b=1;b<c;b++)if(d<a[b].value)return a[b-1].size+(d-a[b-1].value)/(a[b].value-a[b-1].value)*(a[b].size-
a[b-1].size);return a[c-1].size}function t(d,a,c){void 0===c&&(c=0);if(f.isNone(a))d[c+0]=0,d[c+1]=0,d[c+2]=0,d[c+3]=0;else{var b=a.g,n=a.b,e=a.a;d[c+0]=a.r*e/255;d[c+1]=b*e/255;d[c+2]=n*e/255;d[c+3]=e}}Object.defineProperty(r,"__esModule",{value:!0});var g=function(d,a,c){for(var b=c*=16,n=0;b<Math.min(c+16,d.length);b++,n++)d[b]=a[n]},h=y.mat4f32.create();q=function(){function d(){this.symbolLevels=[];this.vvColorValues=new Float32Array(8);this.vvColors=new Float32Array(32);this.vvOpacityValues=
new Float32Array(8);this.vvOpacities=new Float32Array(8);this.vvSizeMinMaxValue=new Float32Array(4);this.ddColors=new Float32Array(32);this.ddBackgroundColor=new Float32Array(4);this.ddActiveDots=new Float32Array(8);this.insideEffect=new Float32Array(16*l.MAX_FILTERS);this.insideOpacity=1;this.outsideEffect=new Float32Array(16*l.MAX_FILTERS);this.outsideOpacity=1;this.effectCount=0;this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1};
this._buf0=new Float32Array(2);this._buf1=new Float32Array(2);this.symbolLevels.push(0);for(var a=0;a<l.MAX_FILTERS;a++)g(this.insideEffect,h,a),g(this.outsideEffect,h,a)}Object.defineProperty(d.prototype,"insideOpacities",{get:function(){this._buf0[0]=1;this._buf0[1]=this.insideOpacity;return this._buf0},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"outsideOpacities",{get:function(){this._buf1[0]=0;this._buf1[1]=this.outsideOpacity;return this._buf1},enumerable:!0,configurable:!0});
d.prototype.getSizeVVFieldStops=function(a){var c=this._vvSizeFieldStops;switch(c.type){case "static":return c;case "level-dependent":return f.unwrapOr(c.levels[a],function(){var b=Infinity,d=0,e;for(e in c.levels){var g=parseFloat(e),u=Math.abs(a-g);u<b&&(b=u,d=g)}if(Infinity===b)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};b=Math.pow(2,(a-d)/2);d=f.expect(c.levels[d]);e=new Float32Array(d.values);e[2]*=b;e[3]*=b;return{sizes:f.unwrap(d.sizes),values:e}})}};
Object.defineProperty(d.prototype,"vvMaterialParameters",{get:function(){return this._vvMaterialParameters},enumerable:!0,configurable:!0});d.prototype.update=function(a){f.isSome(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,a)};d.prototype.setInfo=function(a,c,b){var d=this;f.isSome(b)?(b.forEach(function(a,b){return d._updateEffects(b,a)}),this.effectCount=b.length):this.effectCount=0;this._vvInfo=c;switch(a.type){case "dot-density":this._updateDotDensityInfo(a)}};d.prototype.getVariation=
function(){return{ddDotBlending:this.ddDotBlending,outsideLabelsVisible:this.outsideLabelsVisible,effectCount:this.effectCount,oesTextureFloat:w("esri-webgl-texture-float")}};d.prototype.getVariationHash=function(){return(this.ddDotBlending?1:0)|(this.outsideLabelsVisible?1:0)<<1|this.effectCount<<2};d.prototype._updateEffects=function(a,c){a+=1;if(f.isSome(c)&&c.filter&&c.filter.enabled){this.outsideLabelsVisible=c.excludedLabelsVisible;var b=c.parsedIncludedEffect;c=c.parsedExcludedEffect;f.isSome(b)?
(g(this.insideEffect,b.getColorMatrix(),a),this.insideOpacity=b.getOpacity()):(g(this.insideEffect,h,a),this.insideOpacity=1);f.isSome(c)?(g(this.outsideEffect,c.getColorMatrix(),a),this.outsideOpacity=c.getOpacity()):(g(this.outsideEffect,h,a),this.outsideOpacity=1)}else g(this.insideEffect,h,a),g(this.outsideEffect,h,a),this.outsideOpacity=this.insideOpacity=1};d.prototype._updateVisualVariables=function(a,c){var b=this._vvMaterialParameters;b.vvOpacityEnabled=!1;b.vvSizeEnabled=!1;b.vvColorEnabled=
!1;b.vvRotationEnabled=!1;if(a){var d=a.size;if(d){b.vvSizeEnabled=!0;if(d.minMaxValue){var e=d.minMaxValue,g=void 0,f=void 0;m.isDefined(e.minSize)&&m.isDefined(e.maxSize)&&(m.isNumber(e.minSize)&&m.isNumber(e.maxSize)?(g=k.pt2px(e.minSize),f=k.pt2px(e.maxSize)):(f=c.scale,g=k.pt2px(p(f,e.minSize.stops)),f=k.pt2px(p(f,e.maxSize.stops))));this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,g,f])}d.scaleStops&&(this.vvSizeScaleStopsValue=k.pt2px(p(c.scale,d.scaleStops.stops)));d.unitValue&&(this.vvSizeUnitValueToPixelsRatio=
x.getMetersPerUnitForSR(c.spatialReference)/z.meterIn[d.unitValue.unit]/c.resolution);d.fieldStops&&(this._vvSizeFieldStops=d.fieldStops)}if(c=a.color)b.vvColorEnabled=!0,this.vvColorValues.set(c.values),this.vvColors.set(c.colors);if(c=a.opacity)b.vvOpacityEnabled=!0,this.vvOpacityValues.set(c.values),this.vvOpacities.set(c.opacities);if(a=a.rotation)b.vvRotationEnabled=!0,b.vvRotationType=a.type}};d.prototype._updateDotDensityInfo=function(a){var c=a.attributes;this.ddDotValue=a.dotValue;this.ddDotScale=
a.referenceScale;this.ddDotSize=a.dotSize;this.ddDotBlending=a.dotBlendingEnabled;this.ddSeed=a.seed;for(var b=0;b<l.DOT_DENSITY_MAX_FIELDS;b++){var d=b>=c.length?new v([0,0,0,0]):c[b].color;t(this.ddColors,d,4*b)}for(b=0;8>b;b++)this.ddActiveDots[b]=b<a.attributes.length?1:0;t(this.ddBackgroundColor,a.backgroundColor)};return d}();r.WGLRendererInfo=q});