// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../compilerUtils","../Logger"],function(O,c,r,K){function y(a){return null==a?a:new Date(a)}function z(a){return null==a?a:!!a}function A(a){return null==a?a:a.toString()}function B(a){return null==a?a:"number"===typeof a&&isNaN(a)?0:parseFloat(a)}function C(a){return null==a?a:Math.round(parseFloat(a))}function t(a){return a&&a.constructor&&void 0!==a.constructor._meta}function n(a,b){return null!=b&&a&&!(b instanceof a)}function D(a){return a&&("isCollection"in a||a._meta&&
a._meta.bases&&a._meta.bases.some(function(a){return"isCollection"in a}))}function E(a){return a&&a.Type?"function"===typeof a.Type?a.Type:a.Type.base:null}function L(a,b){if(!b||!b.constructor||!D(b.constructor))return u(a,b)?b:new a(b);var d=E(a.prototype.itemType),g=E(b.constructor.prototype.itemType);if(!d)return b;if(!g)return new a(b);if(d===g)return b;if((g=g._meta&&g._meta.bases)&&-1!==g.indexOf(d))return new a(b);u(a,b);return b}function u(a,b){return t(b)?(k.error("Accessor#set","Assigning an instance of '"+
(b.declaredClass||"unknown")+"' which is not a subclass of '"+p(a)+"'"),!0):!1}function F(a,b){return null==b?b:D(a)?L(a,b):n(a,b)?u(a,b)?b:new a(b):b}function p(a){return a&&a.prototype&&a.prototype.declaredClass||"unknown"}function M(a){switch(a){case Number:return B;case l:return C;case Boolean:return z;case String:return A;case Date:return y;default:return F.bind(null,a)}}function e(a,b){var d=M(a);return 1===arguments.length?d:d(b)}function f(a,b,d){return 1===arguments.length?f.bind(null,a):
b?Array.isArray(b)?b.map(function(b){return a(b,d)}):[a(b,d)]:b}function G(a,b,d){return 0!==b&&Array.isArray(d)?d.map(function(d){return G(a,b-1,d)}):a(d)}function q(a,b,d){if(2===arguments.length)return q.bind(null,a,b);if(!d)return d;d=G(a,b,d);for(var c=b,h=d;0<c&&Array.isArray(h);)c--,h=h[0];if(void 0!==h)for(h=0;h<c;h++)d=[d];return d}function H(a,b){if(2===arguments.length)return H(a).call(null,b);for(var d=new Set,c=a.filter(function(a){return"function"!==typeof a}),h=a.filter(function(a){return"function"===
typeof a}),e=0;e<a.length;e++){var m=a[e];"string"!==typeof m&&"number"!==typeof m||d.add(m)}var f=null,v=null;return function(a,b){if(null==a)return a;var g=typeof a,e="string"===g||"number"===g;if(e&&(d.has(a)||h.some(function(a){return"string"===g&&a===String||"number"===g&&a===Number}))||"object"===g&&h.some(function(b){return!n(a,b)}))return a;e&&c.length?(f||(f=c.map(function(a){return"string"===typeof a?"'"+a+"'":""+a}).join(", ")),k.error("Accessor#set","'"+a+"' is not a valid value for this property, only the following values are valid: "+
f)):"object"===typeof a&&h.length?(v||(v=h.map(function(a){return p(a)}).join(", ")),k.error("Accessor#set","'"+a+"' is not a valid value for this property, value must be one of "+v)):k.error("Accessor#set","'"+a+"' is not a valid value for this property");b&&(b.valid=!1);return null}}function I(a,b){if(2===arguments.length)return I(a).call(null,b);var d={},c=[],h=[],f;for(f in a.typeMap){var m=a.typeMap[f];d[f]=e(m);c.push(p(m));h.push(f)}var l="string"===typeof a.key?function(b){return b[a.key]}:
a.key;return function(b){if(a.base&&!n(a.base,b)||null==b)return b;var g=l(b)||a.defaultKeyValue,e=d[g];if(!e)return k.error("Accessor#set","Invalid property value, value needs to be one of "+("'"+c.join("', '")+"'")+", or a plain object that can autocast (having .type \x3d "+("'"+h.join("', '")+"'")+")"),null;if(!n(a.typeMap[g],b))return b;if("string"===typeof a.key&&!t(b)){var g={},f;for(f in b)f!==a.key&&(g[f]=b[f]);return e(g)}return e(b)}}function J(a){switch(a.type){case "native":return e(a.value);
case "array":return f(J(a.value));case "one-of":return N(a);default:r.neverReached(a)}return null}function N(a){var b=null;return function(d,c){if(w(d,a))return d;null==b&&(b=x(a));k.error("Accessor#set","Invalid property value, value needs to be of type "+b);c&&(c.valid=!1);return null}}function x(a){switch(a.type){case "native":switch(a.value){case Number:return"number";case String:return"string";case Boolean:return"boolean";case l:return"integer";case Date:return"date";default:return p(a.value)}case "array":return"array of "+
x(a.value);case "one-of":return a=a.values.map(function(a){return x(a)}),"one of "+a.slice(0,a.length-1)+" or "+a[a.length-1];default:r.neverReached(a)}return"unknown"}function w(a,b){if(null==a)return!0;switch(b.type){case "native":switch(b.value){case Number:case l:return"number"===typeof a;case Boolean:return"boolean"===typeof a;case String:return"string"===typeof a}return a instanceof b.value;case "array":return Array.isArray(a)?!a.some(function(a){return!w(a,b.value)}):!1;case "one-of":return b.values.some(function(b){return w(a,
b)})}}Object.defineProperty(c,"__esModule",{value:!0});var k=K.getLogger("esri.core.Accessor");c.ensureDate=y;c.ensureBoolean=z;c.ensureString=A;c.ensureNumber=B;c.ensureInteger=C;c.isClassedType=t;c.requiresType=n;c.ensureClass=F;c.ensureType=e;c.ensureArrayTyped=f;c.ensureArray=function(a,b){return 1===arguments.length?f(e.bind(null,a)):f(e.bind(null,a),b)};c.ensureNArrayTyped=q;c.ensureNArray=function(a,b,c){return 2===arguments.length?q(e.bind(null,a),b):q(e.bind(null,a),b,c)};c.isOneOf=function(a){return Array.isArray(a)?
!a.some(function(b){b=typeof b;return!("string"===b||"number"===b||"function"===b&&1<a.length)}):!1};c.ensureOneOf=H;c.ensureOneOfType=I;var l=function(){return function(){}}();c.Integer=l;c.types={native:function(a){return{type:"native",value:a}},array:function(a){return{type:"array",value:a}},oneOf:function(a){return{type:"one-of",values:a}}};c.isLongFormType=function(a){if(!(a&&"type"in a))return!1;switch(a.type){case "native":case "array":case "one-of":return!0;default:r.neverReachedSilent(a)}return!1};
c.ensureLongFormType=J;c.default=e});