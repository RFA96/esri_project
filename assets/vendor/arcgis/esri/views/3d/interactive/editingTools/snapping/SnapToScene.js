// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/generatorHelper ../../../../../core/tsSupport/awaiterHelper ../../../../../core/tsSupport/assignHelper ../../../../../core/maybe ../../../../../support/elevationInfoUtils ../manipulatorDragUtils".split(" "),function(e,f,l,m,n,p,g,c,h,k){Object.defineProperty(f,"__esModule",{value:!0});e=function(){function b(){this.lastDragEvent=this.elevationInfo=this.view=
null;this.next=new k.EventPipeline;this._enabled=!1}Object.defineProperty(b.prototype,"enabled",{get:function(){return this._enabled},set:function(a){if(this._enabled!==a&&c.isSome(this.lastDragEvent)){var b=this.lastDragEvent.mapEnd,d=this.snap(this.lastDragEvent.screenEnd);c.isSome(d)&&this.next.execute({action:"update",mapStart:this.lastDragEvent.mapStart,mapEnd:!0===a?d:b,screenStart:this.lastDragEvent.screenEnd,screenEnd:this.lastDragEvent.screenEnd})}this._enabled=a},enumerable:!0,configurable:!0});
b.prototype.snap=function(a){a=c.isSome(this.view)?this.view.toMap(a,{exclude:[]}):null;c.isSome(a)&&c.isSome(this.view)&&(a.z=h.getZForElevationMode(a,this.view,this.elevationInfo));return a};b.prototype.createDragEventPipelineStep=function(a,b){var d=this;this.view=a;this.elevationInfo=b;this.lastDragEvent=null;return function(a){d.lastDragEvent="end"!==a.action?g({},a):null;if(d._enabled){var b=d.snap(a.screenEnd);return c.isSome(b)?{action:a.action,mapStart:a.mapStart,mapEnd:b,screenStart:a.screenStart,
screenEnd:a.screenEnd}:null}return{action:a.action,mapStart:a.mapStart,mapEnd:a.mapEnd,screenStart:a.screenStart,screenEnd:a.screenEnd}}};return b}();f.SnapToScene=e});