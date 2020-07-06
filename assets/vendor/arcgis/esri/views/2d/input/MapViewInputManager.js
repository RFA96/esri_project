// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/Handles ../../../core/watchUtils ../../../core/accessorSupport/decorators ./handlers/DoubleClickZoom ./handlers/DoubleTapDragZoom ./handlers/DragPan ./handlers/DragRotate ./handlers/GamepadNavigation ./handlers/KeyPan ./handlers/KeyRotate ./handlers/KeyZoom ./handlers/MouseWheelZoom ./handlers/PinchAction ../../input/BrowserEventSource ../../input/InputManager ../../input/handlers/PreventContextMenu ../../input/recognizers/DoubleTapDrag ../../input/recognizers/Drag ../../input/recognizers/ImmediateDoubleClick ../../input/recognizers/PointerClickHoldAndDrag ../../input/recognizers/SingleAndDoubleClick".split(" "),
function(I,J,k,g,l,m,d,b,h,n,p,q,r,t,u,v,w,x,y,e,z,A,B,C,D,E){var F={left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown"},G={zoomIn:["\x3d","+"],zoomOut:["-","_"]},H={clockwiseOption1:"a",clockwiseOption2:"A",counterClockwiseOption1:"d",counterClockwiseOption2:"D",resetOption1:"n",resetOption2:"N"};return function(f){function a(){var a=null!==f&&f.apply(this,arguments)||this;a._handles=new m;return a}k(a,f);a.prototype.initialize=function(){var a=this;this._handles.add([d.whenNot(this.view,
"ready",function(){return a._disconnect()}),d.when(this.view,"ready",function(){return a._connect()})])};a.prototype.destroy=function(){this._handles&&(this._handles.removeAll(),this._handles=null);this._disconnect()};a.prototype._disconnect=function(){this._inputManager&&(this.view.viewEvents.disconnect(),this._inputManager.destroy(),this._inputManager=null,this._source.destroy(),this._source=null)};a.prototype._connect=function(){var a=this,b=new y.BrowserEventSource(this.view.surface,this.view.input),
c=[new C.ImmediateDoubleClick,new D.PointerClickHoldAndDrag,new E.SingleAndDoubleClick,new B.Drag(this.view.navigation),new A.DoubleTapDrag],c=new e.InputManager({eventSource:b,recognizers:c});c.installHandlers("prevent-context-menu",[new z.PreventContextMenu],e.ViewEventPriorities.INTERNAL);c.installHandlers("navigation",[new x.PinchRotateAndZoom(this.view),new r.GamepadNavigation(this.view),new w.MouseWheelZoom(this.view),new h.DoubleClickZoom(this.view),new h.DoubleClickZoom(this.view,["Ctrl"]),
new p.DragPan(this.view,"primary"),new t.KeyPan(this.view,F),new v.KeyZoom(this.view,G),new u.KeyRotate(this.view,H),new q.DragRotate(this.view,"secondary"),new n.DoubleTapDragZoom(this.view,"touch")],e.ViewEventPriorities.INTERNAL);this.view.viewEvents.connect(c);this._source=b;this._inputManager=c;d.init(this.view.navigation,"browserTouchPanEnabled",function(b){a._source.browserTouchPanningEnabled=!b})};Object.defineProperty(a.prototype,"test",{get:function(){return{inputManager:this._inputManager}},
enumerable:!0,configurable:!0});g([b.property()],a.prototype,"view",void 0);return a=g([b.subclass("esri.views.2d.input.MapViewInputManager")],a)}(b.declared(l))});