// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/Logger","./EventMatch"],function(f,g,k,l){Object.defineProperty(g,"__esModule",{value:!0});var h=k.getLogger("esri.views.input.InputHandler");f=function(){function b(a){this._manager=null;this._incoming={};this._outgoing={};this._outgoingEventTypes=this._incomingEventTypes=this._incomingEventMatches=null;this._hasSideEffects=a}Object.defineProperty(b.prototype,"incomingEventMatches",{get:function(){if(!this._incomingEventMatches){this._incomingEventMatches=
[];for(var a in this._incoming)for(var c=0,b=this._incoming[a];c<b.length;c++)this._incomingEventMatches.push(b[c].match)}return this._incomingEventMatches},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"incomingEventTypes",{get:function(){this._incomingEventTypes||(this._incomingEventTypes=this.incomingEventMatches.map(function(a){return a.eventType}));return this._incomingEventTypes},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"outgoingEventTypes",{get:function(){this._outgoingEventTypes||
(this._outgoingEventTypes=Object.keys(this._outgoing));return this._outgoingEventTypes},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasSideEffects",{get:function(){return this._hasSideEffects},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasPendingInputs",{get:function(){return!1},enumerable:!0,configurable:!0});b.prototype.onInstall=function(a){var c=this;this._manager?h.error("This InputHandler has already been registered with an InputManager"):(a.setEventCallback(function(a){return c._handleEvent(a)}),
a.setUninstallCallback(function(){return c._onUninstall()}),this._manager=a)};b.prototype.onUninstall=function(){};b.prototype.registerIncoming=function(a,c,b){var d=this;"function"===typeof c?(b=c,c=[]):c=c||[];a="string"===typeof a?new l.EventMatch(a,c):a;var e=function(){d._incomingEventTypes=null;d._incomingEventMatches=null};c=function(a){var c=d._incoming[a.match.eventType];c&&(a=c.indexOf(a),c.splice(a,1),e(),d._manager&&d._manager.updateDependencies())};b=new m(a,b,{onPause:c,onRemove:c,onResume:function(a){var c=
d._incoming[a.match.eventType];c&&-1===c.indexOf(a)&&(c.push(a),e(),d._manager&&d._manager.updateDependencies())}});c=this._incoming[a.eventType];c||(c=[],this._incoming[a.eventType]=c);c.push(b);e();this._manager&&this._manager.updateDependencies();return b};b.prototype.registerOutgoing=function(a){var c=this;if(this._outgoing[a])throw Error("There is already a callback registered for this outgoing InputEvent: "+a);var b=new n(a,{onEmit:function(a,b,e,f){c._manager.emit(a.eventType,b,e,f)},onRemove:function(a){delete c._outgoing[a.eventType];
c._manager.updateDependencies()}});this._outgoing[a]=b;this._outgoingEventTypes=null;this._manager&&this._manager.updateDependencies();return b};b.prototype.startCapturingPointer=function(a){this._manager.setPointerCapture(a,!0)};b.prototype.stopCapturingPointer=function(a){this._manager.setPointerCapture(a,!1)};b.prototype.refreshHasPendingInputs=function(){this._manager.refreshHasPendingInputs()};b.prototype._onUninstall=function(){this._manager?(this.onUninstall(),this._manager=null):h.error("This InputHandler is not registered with an InputManager")};
b.prototype._handleEvent=function(a){var c=this._incoming[a.type];if(c)for(var b=0;b<c.length;b++){var d=c[b];if(d.match.matches(a)&&(d.callback(a),a.shouldStopPropagation()))break}};return b}();g.InputHandler=f;var m=function(){function b(a,b,e){this.match=a;this._callback=b;this._handler=e}b.prototype.pause=function(){this._handler.onPause(this)};b.prototype.resume=function(){this._handler.onResume(this)};b.prototype.remove=function(){this._handler.onRemove(this)};Object.defineProperty(b.prototype,
"callback",{get:function(){return this._callback},enumerable:!0,configurable:!0});return b}(),n=function(){function b(a,b){this.eventType=a;this._removed=!1;this._handler=b}b.prototype.emit=function(a,b,e){if(!this._removed)this._handler.onEmit(this,a,b,e)};b.prototype.remove=function(){this._removed=!0;this._handler.onRemove(this)};return b}()});