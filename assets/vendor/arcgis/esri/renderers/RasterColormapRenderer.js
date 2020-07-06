// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/paramHelper ../core/JSONSupport ../core/accessorSupport/decorators ./support/ColormapInfo ./support/colorRampUtils".split(" "),function(m,n,h,e,p,k,d,f,l){return function(g){function b(a){a=g.call(this,a)||this;a.type="raster-colormap";return a}h(b,g);c=b;b.createFromColormap=function(a){if(!a)return null;var b=5===a[0].length;a=a.sort(function(a){return a[0]-a[1]});b=b?a.map(function(a){return f.fromJSON({value:a[0],
color:a.slice(1,5),label:String(a[0])})}):a.map(function(a){return f.fromJSON({value:a[0],color:a.slice(1,4).concat([255]),label:String(a[0])})});return new c({colormapInfos:b})};b.createFromColorramp=function(a){a=l.convertColorRampToColormap(a,256);return c.createFromColormap(a)};b.prototype.clone=function(){return new c({colormapInfos:this.colormapInfos.map(function(a){return a.toJSON()})})};b.prototype.extractColormap=function(){return this.colormapInfos.map(function(a){return[a.value,a.color.r,
a.color.g,a.color.b,1<a.color.a?a.color.a:255*a.color.a&255]}).sort(function(a,b){return a[0]-b[0]})};var c;e([d.property({type:[f],json:{write:!0}})],b.prototype,"colormapInfos",void 0);e([d.enumeration.serializable()({rasterColormap:"raster-colormap"})],b.prototype,"type",void 0);return b=c=e([d.subclass("esri.renderers.RasterColormapRenderer")],b)}(d.declared(k.JSONSupport))});