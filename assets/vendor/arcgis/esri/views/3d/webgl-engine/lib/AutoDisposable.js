// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators"],function(e,a,f,g,d){Object.defineProperty(a,"__esModule",{value:!0});a.AutoDisposableMixin=function(b){return function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a._isDisposed=!1;return a}f(a,b);a.prototype.dispose=function(){for(var a=this.__proto__.__managedDisposables__||[],b=a.length-1;0<=b;b--){var c=a[b];this[c]&&
"function"===typeof this[c].dispose&&this[c].dispose();this[c]=null}this._isDisposed=!0};Object.defineProperty(a.prototype,"isDisposed",{get:function(){return this._isDisposed},enumerable:!0,configurable:!0});return a=g([d.subclass("esri.views.3d.webgl-engine.lib.AutoDisposableMixin")],a)}(d.declared(b))};e=function(a){function b(){return null!==a&&a.apply(this,arguments)||this}f(b,a);return b=g([d.subclass("esri.views.3d.webgl-engine.lib.AutoDisposable")],b)}(d.declared(a.AutoDisposableMixin(function(){return function(){}}())));
a.AutoDisposable=e;a.autoDispose=function(){return function(a,c){a.__managedDisposables__=a.__managedDisposables__||[];a.__managedDisposables__.push(c)}}});