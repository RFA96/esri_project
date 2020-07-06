// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/accessorSupport/decorators ../../layers/support/fieldUtils ../visualVariables/ColorVariable ../visualVariables/OpacityVariable ../visualVariables/RotationVariable ../visualVariables/SizeVariable ../visualVariables/VisualVariable ../visualVariables/VisualVariableFactory".split(" "),function(x,d,l,e,m,n,f,h,p,q,r,t,u,
v){Object.defineProperty(d,"__esModule",{value:!0});var w={base:u,key:"type",typeMap:{opacity:q,color:p,rotation:r,size:t}};d.VisualVariablesMixin=function(d){return function(d){function a(){var b=null!==d&&d.apply(this,arguments)||this;b._vvFactory=new v;return b}l(a,d);Object.defineProperty(a.prototype,"visualVariables",{set:function(b){this._vvFactory.visualVariables=b;this._set("visualVariables",this._vvFactory.visualVariables)},enumerable:!0,configurable:!0});a.prototype.readVisualVariables=
function(b,c,k){return this._vvFactory.readVariables(b,c,k)};a.prototype.writeVisualVariables=function(b,c,k,a){c[k]=this._vvFactory.writeVariables(b,a)};Object.defineProperty(a.prototype,"arcadeRequiredForVisualVariables",{get:function(){if(!this.visualVariables)return!1;for(var b=0,c=this.visualVariables;b<c.length;b++)if(c[b].arcadeRequired)return!0;return!1},enumerable:!0,configurable:!0});a.prototype.hasVisualVariables=function(b,c){return b?!!this.getVisualVariablesForType(b,c):!!(this.getVisualVariablesForType("size",
c)||this.getVisualVariablesForType("color",c)||this.getVisualVariablesForType("opacity",c)||this.getVisualVariablesForType("rotation",c))};a.prototype.getVisualVariablesForType=function(b,c){var a=this.visualVariables;if(a&&(a=a.filter(function(a){return a.type===b&&("string"===typeof c?a.target===c:!1===c?!a.target:!0)}),!a||0!==a.length))return a};a.prototype.collectVVRequiredFields=function(a,c){return n(this,void 0,void 0,function(){var b,d,f,g;return m(this,function(e){switch(e.label){case 0:b=
[],this.visualVariables&&(b=b.concat(this.visualVariables)),d=0,f=b,e.label=1;case 1:if(!(d<f.length))return[3,4];g=f[d];if(!g)return[3,3];g.field&&h.collectField(a,c,g.field);g.normalizationField&&h.collectField(a,c,g.normalizationField);return g.valueExpression?[4,h.collectArcadeFieldNames(a,c,g.valueExpression)]:[3,3];case 2:e.sent(),e.label=3;case 3:return d++,[3,1];case 4:return[2]}})})};e([f.property({types:[w],value:null,json:{write:!0}})],a.prototype,"visualVariables",null);e([f.reader("visualVariables",
["visualVariables","rotationType","rotationExpression"])],a.prototype,"readVisualVariables",null);e([f.writer("visualVariables")],a.prototype,"writeVisualVariables",null);return a=e([f.subclass("esri.renderers.mixins.VisualVariablesMixin")],a)}(f.declared(d))}});