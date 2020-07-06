// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../Manipulator3D"],function(d,e,f){Object.defineProperty(e,"__esModule",{value:!0});d=function(){function c(){this._available=!0}Object.defineProperty(c.prototype,"location",{set:function(a){this.forEachManipulator3D(function(b){return b.location=a})},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"elevationAlignedLocation",{set:function(a){this.forEachManipulator3D(function(b){return b.elevationAlignedLocation=a})},enumerable:!0,configurable:!0});
Object.defineProperty(c.prototype,"elevationInfo",{set:function(a){this.forEachManipulator3D(function(b){return b.elevationInfo=a})},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"available",{get:function(){return this._available},set:function(a){this._available=a;this.forEachManipulator3D(function(b){return b.available=a})},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"grabbing",{get:function(){return this.someManipulator(function(a){return a.grabbing})},
enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"dragging",{get:function(){return this.someManipulator(function(a){return a.dragging})},enumerable:!0,configurable:!0});c.prototype.hasManipulator=function(a){return this.someManipulator(function(b){return b===a})};c.prototype.someManipulator=function(a){var b=!1;this.forEachManipulator(function(c){!b&&a(c)&&(b=!0)});return b};c.prototype.forEachManipulator3D=function(a){this.forEachManipulator(function(b,c){b instanceof f.Manipulator3D&&
a(b,c)})};return c}();e.Manipulation=d});