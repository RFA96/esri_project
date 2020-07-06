// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../shaderModules/interfaces"],function(l,a,b,c){Object.defineProperty(a,"__esModule",{value:!0});a.defaultMaskAlphaCutoff=.1;a.symbolAlphaCutoff=.001;a.DiscardOrAdjustAlpha=function(a,k){var d=a.fragment;switch(k.alphaDiscardMode){case 0:d.code.add(c.glsl(e||(e=b(["\n        void discardOrAdjustAlpha(inout vec4 color) {}\n      "],["\n        void discardOrAdjustAlpha(inout vec4 color) {}\n      "]))));break;
case 1:d.code.add(c.glsl(f||(f=b(["\n        void discardOrAdjustAlpha(inout vec4 color) {\n          color.a \x3d 1.0;\n        }\n      "],["\n        void discardOrAdjustAlpha(inout vec4 color) {\n          color.a \x3d 1.0;\n        }\n      "]))));break;case 2:d.uniforms.add("textureAlphaCutoff","float");d.code.add(c.glsl(g||(g=b(["\n        #define discardOrAdjustAlpha(color) { if (color.a \x3c textureAlphaCutoff) { discard; } else { color.a \x3d 1.0; } }\n      "],["\n        #define discardOrAdjustAlpha(color) { if (color.a \x3c textureAlphaCutoff) { discard; } else { color.a \x3d 1.0; } }\n      "]))));
break;case 3:a.fragment.uniforms.add("textureAlphaCutoff","float"),a.fragment.code.add(c.glsl(h||(h=b(["\n        #define discardOrAdjustAlpha(color) { if (color.a \x3c textureAlphaCutoff) { discard; } }\n      "],["\n        #define discardOrAdjustAlpha(color) { if (color.a \x3c textureAlphaCutoff) { discard; } }\n      "]))))}};var e,f,g,h});