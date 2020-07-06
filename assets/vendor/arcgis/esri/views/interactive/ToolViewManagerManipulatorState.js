// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/MapUtils ../../core/mathUtils ../../core/maybe ../../core/screenUtils ./interactiveToolUtils".split(" "),function(p,q,u,r,g,k,t){Object.defineProperty(q,"__esModule",{value:!0});p=function(){function h(){this._pointerLocations=new Map;this._hoveredManipulators=new Map;this._grabbedManipulators=new Map;this._draggedManipulators=new Map;this._stopDrag=!1;this._cursor=this._revertToActiveTool=null}Object.defineProperty(h.prototype,"cursor",{get:function(){return this._cursor},
enumerable:!0,configurable:!0});h.prototype.handleInputEvent=function(a,d){var e=function(){return a.stopPropagation()};switch(a.type){case "pointer-move":"mouse"===a.pointerType&&this._pointerLocations.set(a.pointerId,{x:a.x,y:a.y,pointerType:a.pointerType});break;case "drag":0<this._grabbedManipulators.size&&(this._stopDrag=!0);this._stopDrag&&(e(),"end"===a.action&&(this._stopDrag=!1));break;case "pointer-down":if("mouse"===a.pointerType&&0!==a.button||a.native.shiftKey)break;var b=k.createScreenPointFromEvent(a),
c=this._intersect(b,a.pointerType,d.forEachTool);if(g.isNone(c))break;var f=this._findManipulatorByKey(c,d.forEachTool);g.isSome(f)&&f.interactive&&!f.grabbing&&(this._grabbedManipulators.set(a.pointerId,{key:c,start:b}),1===this._grabbedManipulators.size&&(this._revertToActiveTool=d.activeTool,d.setActiveTool(c.tool)),f.grabbing=!0,f.events.emit("grab-changed",{action:"start",screenPoint:b}),e());break;case "pointer-up":this._handlePointerEnd(a,d);break;case "pointer-drag":if("mouse"===a.pointerType&&
0!==a.button)break;var m=this._grabbedManipulators.get(a.pointerId),f=this._draggedManipulators.get(a.pointerId),c=g.applySome(m||f,function(a){return a.key}),n=this._findManipulatorByKey(c,d.forEachTool);if(g.isNone(n))break;b=k.createScreenPointFromEvent(a);b.x=r.clamp(b.x,0,d.view.width);b.y=r.clamp(b.y,0,d.view.height);m=g.expect(m||f).start;b={action:a.action,start:m,screenPoint:b};switch(a.action){case "start":case "update":if("update"===b.action||1===this._grabbedManipulators.size)n.dragging=
!0,f||(b.action="start"),n.events.emit("drag",b),this._draggedManipulators.set(a.pointerId,{key:g.expect(c),start:m});break;case "end":n.dragging=!1,f&&n.events.emit("drag",b),this._draggedManipulators.delete(a.pointerId),this._handlePointerEnd(a,d)}e();break;case "immediate-click":var b=k.createScreenPointFromEvent(a),c=this._intersect(b,a.pointerType,d.forEachTool),h=this._findToolAndManipulatorByKey(c,d.forEachTool,l);a.native.shiftKey||d.forEachTool(function(a){if((!h||l.tool!==a||!a.selectionManagementDisabled)&&
a.manipulators){var c=!1;a.manipulators.forEach(function(a){a=a.manipulator;a.selected&&(a.selected=!1,c=!0)});c&&a.manipulatorSelectionChanged&&a.manipulatorSelectionChanged()}});if(!h)break;f=l.manipulator;c=l.tool;if(!f.interactive)break;f.selectable&&!c.selectionManagementDisabled&&(f.selected=!f.selected,c.manipulatorSelectionChanged&&c.manipulatorSelectionChanged());c=a.native.shiftKey;f.events.emit("immediate-click",{screenPoint:b,button:a.button,pointerType:a.pointerType,shiftKey:c,stopPropagation:e});
break;case "click":b=k.createScreenPointFromEvent(a);c=this._intersect(b,a.pointerType,d.forEachTool);f=this._findManipulatorByKey(c,d.forEachTool);if(g.isNone(f)||!f.interactive)break;c=a.native.shiftKey;f.events.emit(a.type,{screenPoint:b,button:a.button,pointerType:a.pointerType,shiftKey:c});e();break;case "double-click":b=k.createScreenPointFromEvent(a),c=this._intersect(b,a.pointerType,d.forEachTool),f=this._findManipulatorByKey(c,d.forEachTool),!g.isNone(f)&&f.interactive&&(c=a.native.shiftKey,
f.events.emit("double-click",{screenPoint:b,button:a.button,pointerType:a.pointerType,shiftKey:c,stopPropagation:e}))}this._updateCursor(d.forEachTool)};h.prototype._handlePointerEnd=function(a,d){var e=g.applySome(this._grabbedManipulators.get(a.pointerId),function(a){return a.key}),b=this._findManipulatorByKey(e,d.forEachTool);g.isSome(b)&&!b.dragging&&(e=g.isSome(d.creatingTool)&&d.creatingTool===g.expect(e).tool,1!==this._grabbedManipulators.size||0!==this._draggedManipulators.size||e||(d.setActiveTool(this._revertToActiveTool),
this._revertToActiveTool=null),b.grabbing&&(b.grabbing=!1,b.events.emit("grab-changed",{action:"end",screenPoint:k.createScreenPointFromEvent(a)})),this._grabbedManipulators.delete(a.pointerId))};h.prototype._cursorFromMap=function(a,d){var e=this,b=null;u.someMap(a,function(a){a=e._findManipulatorByKey(a.key,d);return g.isSome(a)&&a.interactive&&"cursor"in a&&a.cursor?(b=a.cursor,!0):!1});return b};h.prototype._updateCursor=function(a){this._cursor=0<this._grabbedManipulators.size?this._cursorFromMap(this._grabbedManipulators,
a)||"grabbing":0<this._hoveredManipulators.size?this._cursorFromMap(this._hoveredManipulators,a)||"pointer":null};h.prototype.clearPointers=function(a,d,e,b){var c=this;void 0===e&&(e=!0);var f=function(c){return c.tool===a&&(g.isNone(b)||c.manipulatorId===b)};this._grabbedManipulators.forEach(function(a,b){a=a.key;f(a)&&(c._grabbedManipulators.delete(b),b=c._findManipulatorByKey(a,d),g.isSome(b)&&(b.grabbing=!1,b.events.emit("grab-changed",{action:"end",screenPoint:null})))});this._draggedManipulators.forEach(function(a,
b){a=a.key;f(a)&&(c._draggedManipulators.delete(b),b=c._findManipulatorByKey(a,d),g.isSome(b)&&(b.dragging=!1,b.events.emit("drag",{action:"cancel",screenPoint:null,start:null})))});e&&this._hoveredManipulators.forEach(function(a,b){a=a.key;f(a)&&(c._hoveredManipulators.delete(b),b=c._findManipulatorByKey(a,d),g.isSome(b)&&(b.hovering=!1))});this._updateCursor(d)};h.prototype._intersect=function(a,d,e){var b=null;e(function(c){if(null==c.manipulators||!t.areToolManipulatorsEditable(c))return!1;var e=
c.manipulators.intersect(a,d);if(g.isNone(e))return!1;b={manipulatorId:e,tool:c};return!0});return b};h.prototype.updateHoveredStateFromKnownPointers=function(a){var d=this;this._pointerLocations.forEach(function(e,b){d._updateHoveredStateForPointerAtScreenPosition(k.createScreenPoint(e.x,e.y),b,e.pointerType,a)})};h.prototype.handleHoverEvent=function(a,d){"pointer-up"!==a.type&&"immediate-click"!==a.type&&"pointer-move"!==a.type||"mouse"!==a.pointerType||this._updateHoveredStateForPointerAtScreenPosition(k.createScreenPointFromEvent(a),
a.pointerId,a.pointerType,d)};h.prototype._updateHoveredStateForPointerAtScreenPosition=function(a,d,e,b){a=this._intersect(a,e,b);e=this._findManipulatorByKey(a,b);var c=g.applySome(this._hoveredManipulators.get(d),function(a){return a.key}),c=this._findManipulatorByKey(c,b);g.isSome(e)&&!e.interactive&&(e=null);c!==e&&(g.isSome(c)&&(c.hovering=!1),g.isSome(e)?(e.hovering=!0,this._hoveredManipulators.set(d,{key:g.expect(a)})):this._hoveredManipulators.delete(d),this._updateCursor(b))};h.prototype._findManipulatorByKey=
function(a,d){return this._findToolAndManipulatorByKey(a,d,l)?l.manipulator:null};h.prototype._findToolAndManipulatorByKey=function(a,d,e){if(g.isNone(a))return null;e.tool=null;e.manipulator=null;d(function(b){if(b!==a.tool||null==b.manipulators||!t.areToolManipulatorsEditable(b))return!1;var c=b.manipulators.findById(a.manipulatorId);return g.isSome(c)?(e.manipulator=c,e.tool=b,!0):!1});return null!=e.manipulator};return h}();q.default=p;var l={manipulator:null,tool:null}});