// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../Color ../core/lang ../core/screenUtils ../core/accessorSupport/decorators ./Font ./Symbol".split(" "),function(p,q,m,b,g,e,f,d,k,n){return function(l){function a(c,a,d){c=l.call(this,c)||this;c.backgroundColor=null;c.borderLineColor=null;c.borderLineSize=null;c.font=new k;c.horizontalAlignment="center";c.kerning=!0;c.haloColor=null;c.haloSize=null;c.rightToLeft=null;c.rotated=!1;c.text="";c.type="text";
c.verticalAlignment=null;c.xoffset=0;c.yoffset=0;c.angle=0;c.width=null;c.lineWidth=192;c.lineHeight=1;return c}m(a,l);h=a;a.prototype.normalizeCtorArgs=function(c,a,d){if(c&&"string"!==typeof c)return c;var b={};c&&(b.text=c);a&&(b.font=a);d&&(b.color=d);return b};a.prototype.writeLineWidth=function(c,a,b,d){d&&"string"!==typeof d||(a[b]=c)};a.prototype.castLineWidth=function(c){return f.toPt(c)};a.prototype.writeLineHeight=function(c,a,d,b){b&&"string"!==typeof b||(a[d]=c)};a.prototype.clone=function(){return new h({angle:this.angle,
backgroundColor:e.clone(this.backgroundColor),borderLineColor:e.clone(this.borderLineColor),borderLineSize:this.borderLineSize,color:e.clone(this.color),font:this.font&&this.font.clone(),haloColor:e.clone(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,lineHeight:this.lineHeight,lineWidth:this.lineWidth,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,
yoffset:this.yoffset})};a.prototype.hash=function(){return(this.backgroundColor&&this.backgroundColor.hash())+"."+this.borderLineColor+"."+this.borderLineSize+"."+this.color.hash()+"."+(this.font&&this.font.hash())+"."+(this.haloColor&&this.haloColor.hash())+"."+this.haloSize+"."+this.horizontalAlignment+"."+this.kerning+"."+this.rightToLeft+"."+this.rotated+"."+this.text+"."+this.verticalAlignment+"."+this.width+"."+this.xoffset+"."+this.yoffset+"."+this.lineHeight+"."+this.lineWidth+"."+this.angle};
var h;b([d.property({type:g,json:{write:!0}})],a.prototype,"backgroundColor",void 0);b([d.property({type:g,json:{write:!0}})],a.prototype,"borderLineColor",void 0);b([d.property({type:Number,json:{write:!0}})],a.prototype,"borderLineSize",void 0);b([d.property({type:k,json:{write:!0}})],a.prototype,"font",void 0);b([d.property({type:["left","right","center","justify"],json:{write:!0}})],a.prototype,"horizontalAlignment",void 0);b([d.property({type:Boolean,json:{write:!0}})],a.prototype,"kerning",
void 0);b([d.property({type:g,json:{write:!0}})],a.prototype,"haloColor",void 0);b([d.property({type:Number,cast:f.toPt,json:{write:!0}})],a.prototype,"haloSize",void 0);b([d.property({type:Boolean,json:{write:!0}})],a.prototype,"rightToLeft",void 0);b([d.property({type:Boolean,json:{write:!0}})],a.prototype,"rotated",void 0);b([d.property({type:String,json:{write:!0}})],a.prototype,"text",void 0);b([d.property({type:String,readOnly:!0})],a.prototype,"type",void 0);b([d.property({type:["baseline",
"top","middle","bottom"],json:{write:!0}})],a.prototype,"verticalAlignment",void 0);b([d.property({type:Number,cast:f.toPt,json:{write:!0}})],a.prototype,"xoffset",void 0);b([d.property({type:Number,cast:f.toPt,json:{write:!0}})],a.prototype,"yoffset",void 0);b([d.property({type:Number,json:{read:function(a){return a&&-1*a},write:function(a,b){return b.angle=a&&-1*a}}})],a.prototype,"angle",void 0);b([d.property({type:Number,json:{write:!0}})],a.prototype,"width",void 0);b([d.property({type:Number})],
a.prototype,"lineWidth",void 0);b([d.writer("lineWidth")],a.prototype,"writeLineWidth",null);b([d.cast("lineWidth")],a.prototype,"castLineWidth",null);b([d.property({type:Number})],a.prototype,"lineHeight",void 0);b([d.writer("lineHeight")],a.prototype,"writeLineHeight",null);return a=h=b([d.subclass("esri.symbols.TextSymbol")],a)}(d.declared(n))});