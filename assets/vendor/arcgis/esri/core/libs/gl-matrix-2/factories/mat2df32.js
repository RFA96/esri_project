// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(k,c){function h(b,a,e,d){var f=a[d];a=a[d+1];b[d]=e[0]*f+e[2]*a+e[4];b[d+1]=e[1]*f+e[3]*a+e[5]}Object.defineProperty(c,"__esModule",{value:!0});c.create=function(){var b=new Float32Array(6);b[0]=1;b[3]=1;return b};c.clone=function(b){var a=new Float32Array(6);a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];return a};c.fromValues=function(b,a,e,d,f,c){var g=new Float32Array(6);g[0]=b;g[1]=a;g[2]=e;g[3]=d;g[4]=f;g[5]=c;return g};c.createView=function(b,
a){return new Float32Array(b,a,6)};c.transform=h;c.transformMany=function(b,a,e,d,f,c){void 0===d&&(d=0);void 0===f&&(f=0);void 0===c&&(c=2);for(f=f||a.length/c;d<f;d++)h(b,a,e,d*c)}});