// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/unitUtils ../../core/accessorSupport/decorators ../support/commonProperties".split(" "),function(l,m,g,d,h,e,c,k){return function(f){function b(a){a=f.call(this,a)||this;a.activeTool=null;a.activeViewModel=null;a.view=null;return a}g(b,f);Object.defineProperty(b.prototype,"areaUnit",{get:function(){return this.defaultUnit},set:function(a){void 0===a?this._clearOverride("areaUnit"):
this._override("areaUnit",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"linearUnit",{get:function(){return this.defaultUnit},set:function(a){void 0===a?this._clearOverride("linearUnit"):this._override("linearUnit",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){var a=this.activeViewModel;return a?a.state:"disabled"},enumerable:!0,configurable:!0});d([c.property({type:["area","distance","direct-line"]})],b.prototype,"activeTool",
void 0);d([c.property()],b.prototype,"activeViewModel",void 0);d([c.property({type:e.measurementAreaUnits,dependsOn:["defaultUnit"]})],b.prototype,"areaUnit",null);d([c.property(k.defaultUnitPropertyMetadata)],b.prototype,"defaultUnit",void 0);d([c.property({type:e.measurementLengthUnits,dependsOn:["defaultUnit"]})],b.prototype,"linearUnit",null);d([c.property({dependsOn:["activeViewModel","activeViewModel.state"],readOnly:!0})],b.prototype,"state",null);d([c.property()],b.prototype,"view",void 0);
return b=d([c.subclass("esri.widgets.Measurement.MeasurementViewModel")],b)}(c.declared(h))});