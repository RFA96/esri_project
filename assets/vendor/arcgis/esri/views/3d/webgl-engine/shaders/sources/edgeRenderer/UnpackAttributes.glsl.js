// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../../core/shaderModules/interfaces","./EdgeUtil.glsl"],function(p,f,a,b,n){Object.defineProperty(f,"__esModule",{value:!0});f.UnpackAttributes=function(d,e){var c=d.vertex;d.include(n.EdgeUtil,e);d.attributes.add("sideness","vec2");2===e.mode?c.code.add(b.glsl(g||(g=a(["\n      struct UnpackedAttributes {\n        vec2 sideness;\n        vec2 sidenessNorm;\n        float lineWidthPixels;\n        float extensionLengthPixels;\n        float type;\n      };\n    "],
["\n      struct UnpackedAttributes {\n        vec2 sideness;\n        vec2 sidenessNorm;\n        float lineWidthPixels;\n        float extensionLengthPixels;\n        float type;\n      };\n    "])))):c.code.add(b.glsl(h||(h=a(["\n      struct UnpackedAttributes {\n        vec2 sideness;\n        vec2 sidenessNorm;\n        float lineWidthPixels;\n        float extensionLengthPixels;\n      };\n  "],["\n      struct UnpackedAttributes {\n        vec2 sideness;\n        vec2 sidenessNorm;\n        float lineWidthPixels;\n        float extensionLengthPixels;\n      };\n  "]))));
switch(e.mode){case 2:c.code.add(b.glsl(k||(k=a(["\n        UnpackedAttributes unpackAttributes(ComponentData component) {\n          vec2 sidenessNorm \x3d sideness;\n          vec2 sideness \x3d sidenessNorm * 2.0 - 1.0;\n          float fType \x3d component.type;\n          float extensionLengthPixels \x3d component.extensionLength;\n          float lineWidth \x3d component.lineWidth;\n\n          if (fType \x3c\x3d 0.0) {\n            extensionLengthPixels *\x3d variantExtension * 2.0 - 1.0;\n          }\n\n          return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels, fType);\n        }\n      "],
["\n        UnpackedAttributes unpackAttributes(ComponentData component) {\n          vec2 sidenessNorm \x3d sideness;\n          vec2 sideness \x3d sidenessNorm * 2.0 - 1.0;\n          float fType \x3d component.type;\n          float extensionLengthPixels \x3d component.extensionLength;\n          float lineWidth \x3d component.lineWidth;\n\n          if (fType \x3c\x3d 0.0) {\n            extensionLengthPixels *\x3d variantExtension * 2.0 - 1.0;\n          }\n\n          return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels, fType);\n        }\n      "]))));
break;case 1:c.code.add(b.glsl(l||(l=a(["\n        UnpackedAttributes unpackAttributes(ComponentData component) {\n          vec2 sidenessNorm \x3d sideness;\n          vec2 sideness \x3d sidenessNorm * 2.0 - 1.0;\n          float extensionLengthPixels \x3d component.extensionLength;\n          extensionLengthPixels *\x3d variantExtension * 2.0 - 1.0;\n          float lineWidth \x3d component.lineWidth;\n\n          return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels);\n        }\n      "],
["\n        UnpackedAttributes unpackAttributes(ComponentData component) {\n          vec2 sidenessNorm \x3d sideness;\n          vec2 sideness \x3d sidenessNorm * 2.0 - 1.0;\n          float extensionLengthPixels \x3d component.extensionLength;\n          extensionLengthPixels *\x3d variantExtension * 2.0 - 1.0;\n          float lineWidth \x3d component.lineWidth;\n\n          return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels);\n        }\n      "]))));break;case 0:c.code.add(b.glsl(m||
(m=a(["\n        UnpackedAttributes unpackAttributes(ComponentData component) {\n          vec2 sidenessNorm \x3d sideness;\n          vec2 sideness \x3d sidenessNorm * 2.0 - 1.0;\n          float extensionLengthPixels \x3d component.extensionLength;\n          float lineWidth \x3d component.lineWidth;\n\n          return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels);\n        }\n      "],["\n        UnpackedAttributes unpackAttributes(ComponentData component) {\n          vec2 sidenessNorm \x3d sideness;\n          vec2 sideness \x3d sidenessNorm * 2.0 - 1.0;\n          float extensionLengthPixels \x3d component.extensionLength;\n          float lineWidth \x3d component.lineWidth;\n\n          return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels);\n        }\n      "]))))}};
var g,h,k,l,m});