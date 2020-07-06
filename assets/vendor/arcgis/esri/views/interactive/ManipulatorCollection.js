// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/tsSupport/decorateHelper","../../core/Collection","../../core/maybe"],function(d,g,m,l,h){Object.defineProperty(g,"__esModule",{value:!0});d=function(){function c(){this._isToolEditable=!0;this._manipulators=new l;this._nextManipulatorId=0;this._resourceContexts={manipulator3D:{}};this._attached=!1}Object.defineProperty(c.prototype,"isToolEditable",{set:function(a){this._isToolEditable=a},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"length",
{get:function(){return this._manipulators.length},enumerable:!0,configurable:!0});c.prototype.add=function(a,b){void 0===b&&(b=0);return this.addMany([a],b)[0]};c.prototype.addMany=function(a,b){var c=this;void 0===b&&(b=0);return a.map(function(a){var f=c._nextManipulatorId++;a={id:f,manipulator:a,visibilityPredicate:b,attached:!1};c._manipulators.add(a);c._attached&&c._updateManipulatorAttachment(a);return f})};c.prototype.remove=function(a){if("number"===typeof a){for(var b=0;b<this._manipulators.length;b++)if(this._manipulators.getItemAt(b).id===
a)return a=this._manipulators.splice(b,1)[0],this._detachManipulator(a),a.id;return null}for(b=0;b<this._manipulators.length;b++)if(this._manipulators.getItemAt(b).manipulator===a)return a=this._manipulators.splice(b,1)[0],this._detachManipulator(a),a.id;return null};c.prototype.removeAll=function(){var a=this;this._manipulators.forEach(function(b){a._detachManipulator(b)});this._manipulators.removeAll()};c.prototype.attach=function(){var a=this;this._manipulators.forEach(function(b){a._updateManipulatorAttachment(b)});
this._attached=!0};c.prototype.detach=function(){var a=this;this._manipulators.forEach(function(b){a._detachManipulator(b)});this._attached=!1};c.prototype.destroy=function(){this._manipulators.forEach(function(a){a=a.manipulator;a.destroy&&a.destroy()});this._manipulators.destroy();this._resourceContexts=null};c.prototype.on=function(a,b){return this._manipulators.on(a,function(a){b(a)})};c.prototype.forEach=function(a){for(var b=0,c=this._manipulators.items;b<c.length;b++)a(c[b])};c.prototype.toArray=
function(){var a=[];this.forEach(function(b){return a.push(b.manipulator)});return a};c.prototype.intersect=function(a,b){var c=null,k=Number.MAX_VALUE;this._manipulators.forEach(function(e){var f=e.id,d=e.manipulator;e.attached&&d.interactive&&(e=d.intersectionDistance(a,b),h.isSome(e)&&e<k&&(k=e,c=f))});return c};c.prototype.findById=function(a){if(h.isNone(a))return null;for(var b=0,c=this._manipulators.items;b<c.length;b++){var d=c[b];if(a===d.id)return d.manipulator}return null};c.prototype._updateManipulatorAttachment=
function(a){this._isManipulatorItemVisible(a)?this._attachManipulator(a):this._detachManipulator(a)};c.prototype._attachManipulator=function(a){a.attached||(a.manipulator.attach(this._resourceContexts),a.attached=!0)};c.prototype._detachManipulator=function(a){if(a.attached){var b=a.manipulator;b.grabbing=!1;b.dragging=!1;b.hovering=!1;b.selected=!1;b.detach(this._resourceContexts);a.attached=!1}};c.prototype._isManipulatorItemVisible=function(a){return 2===a.visibilityPredicate?!0:this._isToolEditable?
0===a.visibilityPredicate:1===a.visibilityPredicate};return c}();g.ManipulatorCollection=d});