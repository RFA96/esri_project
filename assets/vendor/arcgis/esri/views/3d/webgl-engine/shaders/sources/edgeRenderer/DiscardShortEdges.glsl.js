// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../../core/shaderModules/interfaces"],function(h,b,c,d){Object.defineProperty(b,"__esModule",{value:!0});b.DiscardShortEdges=function(a,b){a=a.vertex;switch(b.mode){case 1:a.code.add(d.glsl(e||(e=c(["\n        #define discardShortEdges(unpackedAttributes, lineLengthPixels) { if (lineLengthPixels \x3c\x3d 3.0) { gl_Position \x3d vec4(10.0, 10.0, 10.0, 1.0); return; }}\n      "],["\n        #define discardShortEdges(unpackedAttributes, lineLengthPixels) { if (lineLengthPixels \x3c\x3d 3.0) { gl_Position \x3d vec4(10.0, 10.0, 10.0, 1.0); return; }}\n      "]))));
break;case 2:a.code.add(d.glsl(f||(f=c(["\n        #define discardShortEdges(unpackedAttributes, lineLengthPixels) { if (unpackedAttributes.type \x3c\x3d 0.0 \x26\x26 lineLengthPixels \x3c\x3d 3.0) { gl_Position \x3d vec4(10.0, 10.0, 10.0, 1.0); return; }}\n      "],["\n        #define discardShortEdges(unpackedAttributes, lineLengthPixels) { if (unpackedAttributes.type \x3c\x3d 0.0 \x26\x26 lineLengthPixels \x3c\x3d 3.0) { gl_Position \x3d vec4(10.0, 10.0, 10.0, 1.0); return; }}\n      "]))));break;
case 0:a.code.add(d.glsl(g||(g=c(["\n        #define discardShortEdges(unpackedAttributes, lineLengthPixels) {}\n      "],["\n        #define discardShortEdges(unpackedAttributes, lineLengthPixels) {}\n      "]))))}};var e,f,g});