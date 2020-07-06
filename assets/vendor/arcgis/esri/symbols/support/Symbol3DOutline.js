// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../Color ../../core/JSONSupport ../../core/maybe ../../core/screenUtils ../../core/accessorSupport/decorators ./materialUtils".split(" "),function(b,c,h,e,g,k,l,m,d,f){Object.defineProperty(c,"__esModule",{value:!0});b=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.color=new g([0,0,0,1]);a.size=m.px2pt(1);a.stipplePattern=null;a.stippleOffColor=null;return a}h(a,b);c=
a;a.prototype.clone=function(){return new c({color:l.isSome(this.color)?this.color.clone():null,size:this.size,stipplePattern:this.stipplePattern?this.stipplePattern.slice():null,stippleOffColor:this.stippleOffColor?this.stippleOffColor.clone():null})};var c;e([d.property(f.colorAndTransparencyProperty)],a.prototype,"color",void 0);e([d.property(f.screenSizeProperty)],a.prototype,"size",void 0);e([d.property(f.stipplePatternProperty)],a.prototype,"stipplePattern",void 0);e([d.property({type:g})],
a.prototype,"stippleOffColor",void 0);return a=c=e([d.subclass("esri.symbols.support.Symbol3DOutline")],a)}(d.declared(k.JSONSupport));c.Symbol3DOutline=b;c.default=b});