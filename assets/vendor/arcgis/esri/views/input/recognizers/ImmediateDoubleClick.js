// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/clock ../InputHandler ./SingleAndDoubleClick ./support".split(" "),function(k,l,m,n,p,f,q){Object.defineProperty(l,"__esModule",{value:!0});k=function(g){function c(a,d,h,e,c){void 0===a&&(a=f.DefaultParameters.maximumDoubleClickDelay);void 0===d&&(d=f.DefaultParameters.maximumDoubleClickDistance);void 0===h&&(h=f.DefaultParameters.maximumDoubleTouchDelay);void 0===e&&(e=f.DefaultParameters.maximumDoubleTouchDistance);void 0===
c&&(c=n.default);var b=g.call(this,!1)||this;b.maximumDoubleClickDelay=a;b.maximumDoubleClickDistance=d;b.maximumDoubleTouchDelay=h;b.maximumDoubleTouchDistance=e;b._clock=c;b._pointerState=new Map;b._immediateDoubleClick=b.registerOutgoing("immediate-double-click");b.registerIncoming("pointer-down",b._handlePointerDown.bind(b));b.registerIncoming("pointer-up",function(a){b._handlePointerLoss(a,"pointer-up")});b.registerIncoming("pointer-capture-lost",function(a){b._handlePointerLoss(a,"pointer-capture-lost")});
b.registerIncoming("pointer-cancel",function(a){b._handlePointerLoss(a,"pointer-cancel")});return b}m(c,g);c.prototype.onUninstall=function(){this._pointerState.forEach(function(a){a.immediateDoubleClick&&a.immediateDoubleClick.timeoutHandle.remove()});g.prototype.onUninstall.call(this)};c.prototype._handlePointerDown=function(a){a=a.data;var d=a.native.pointerId;this._pointerState.has(d)||(this._pointerState.set(d,{downButton:a.native.button,immediateDoubleClick:null}),this.startCapturingPointer(a.native))};
c.prototype._handlePointerLoss=function(a,d){var c=a.data,e=this._pointerState.get(c.native.pointerId);if(e&&"pointer-up"===d&&e.downButton===c.native.button)if(d=e.immediateDoubleClick){d.timeoutHandle.remove();var f="touch"===a.data.native.pointerType?this.maximumDoubleTouchDistance:this.maximumDoubleClickDistance;q.manhattanDistance(d,a.data)>f?this._startImmediateDoubleClick(a,e):(this._immediateDoubleClick.emit(a.data,void 0,d.modifiers),this._removeState(c.native))}else this._startImmediateDoubleClick(a,
e)};c.prototype._startImmediateDoubleClick=function(a,c){var d=this;c.immediateDoubleClick={x:a.data.x,y:a.data.y,modifiers:a.modifiers,timeoutHandle:this._clock.setTimeout(function(){return d._removeState(a.data.native)},"touch"===a.data.native.pointerType?this.maximumDoubleTouchDelay:this.maximumDoubleClickDelay)}};c.prototype._removeState=function(a){this._pointerState.delete(a.pointerId);this.stopCapturingPointer(a);this.refreshHasPendingInputs()};return c}(p.InputHandler);l.ImmediateDoubleClick=
k});