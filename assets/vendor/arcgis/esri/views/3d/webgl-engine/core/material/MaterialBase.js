// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(f,e){Object.defineProperty(e,"__esModule",{value:!0});f=function(){function a(){this._dirty=!0}a.prototype._setDirty=function(){this._dirty=!0};a.prototype._setClean=function(){this._dirty=!1;for(var a=0,b=this.__proto__.__parameterBlocks||[];a<b.length;a++)this[b[a]]._setClean()};Object.defineProperty(a.prototype,"dirty",{get:function(){return this._dirty||this._checkParameterBlocksDirty()},enumerable:!0,configurable:!0});a.prototype._checkParameterBlocksDirty=
function(){for(var a=0,b=this.__proto__.__parameterBlocks||[];a<b.length;a++)if(this[b[a]].dirty)return!0;return!1};return a}();e.MaterialBase=f;f=function(){function a(){this._dirty=!0}a.prototype._setDirty=function(){this._dirty=!0};a.prototype._setClean=function(){this._dirty=!1};Object.defineProperty(a.prototype,"dirty",{get:function(){return this._dirty},enumerable:!0,configurable:!0});return a}();e.MaterialParameterBlock=f;e.parameter=function(a){void 0===a&&(a={});return function(d,b){d.__materialParameters=
d.__materialParameters||[];d.__materialParameters.push(b);var c="_"+b;if(a.vectorOps){var e=a.vectorOps;Object.defineProperty(d,b,{get:function(){return this[c]},set:function(a){if(this[c]){if(e.equals(this[c],a))return;e.copy(this[c],a)}else this[c]=a;this._setDirty()}})}else Object.defineProperty(d,b,{get:function(){return this[c]},set:function(b){this[c]!==b&&(a.dispose&&this[c]&&this[c].dispose(),this[c]=b,this._setDirty())}})}};e.parameterBlock=function(){return function(a,d){a.__parameterBlocks=
a.__parameterBlocks||[];a.__parameterBlocks.push(d);var b="_"+d;Object.defineProperty(a,d,{get:function(){return this[b]},set:function(a){this[b]!==a&&(this[b]=a,this._setDirty())}})}}});