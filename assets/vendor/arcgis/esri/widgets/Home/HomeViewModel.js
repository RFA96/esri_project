// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../Viewpoint ../../core/Error ../../core/Evented ../../core/promiseUtils ../../core/accessorSupport/decorators ../support/GoTo".split(" "),function(q,r,f,d,g,h,k,l,m,n,c,p){return function(e){function a(b){b=e.call(this,b)||this;b._initialViewpoint=null;b._goingHomeController=null;b.go=b.go.bind(b);return b}f(a,e);a.prototype.destroy=
function(){this._cancelGo();this.view=null};Object.defineProperty(a.prototype,"state",{get:function(){return this.get("view.ready")?this._goingHomeController?"going-home":"ready":"disabled"},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"view",{set:function(b){var a=this;this._initialViewpoint=null;this._set("view",b);b&&b.when().then(function(){a.view===b&&(a._initialViewpoint=b.viewpoint.clone(),a.notifyChange("viewpoint"))})},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"viewpoint",{get:function(){return this._get("viewpoint")||this._initialViewpoint},set:function(b){this._set("viewpoint",b)},enumerable:!0,configurable:!0});a.prototype.go=function(){return h(this,void 0,void 0,function(){var b;return g(this,function(a){switch(a.label){case 0:if(!this.get("view.ready"))throw new l("home:disabled-state","Cannot go when disabled.");this._cancelGo();this.emit("go");this._goingHomeController=b=n.createAbortController();a.label=1;case 1:return a.trys.push([1,4,,5]),[4,
this.view.when()];case 2:return a.sent(),[4,this.callGoTo({target:this.viewpoint,options:{signal:b.signal}})];case 3:return a.sent(),[3,5];case 4:return a.sent(),[3,5];case 5:return this._goingHomeController=null,[2]}})})};a.prototype.cancelGo=function(){this._cancelGo()};a.prototype._cancelGo=function(){var a=this._goingHomeController;a&&a.abort();this._goingHomeController=null};d([c.property()],a.prototype,"_goingHomeController",void 0);d([c.property({dependsOn:["_goingHomeController","view.ready"],
readOnly:!0})],a.prototype,"state",null);d([c.property()],a.prototype,"view",null);d([c.property({type:k})],a.prototype,"viewpoint",null);d([c.property()],a.prototype,"go",null);d([c.property()],a.prototype,"cancelGo",null);return a=d([c.subclass("esri.widgets.Home.HomeViewModel")],a)}(c.declared(p.GoToMixin(m.EventedAccessor)))});