// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../geometry ../../../core/Error ../../../core/mathUtils ../../../core/unitUtils ../../../geometry/SpatialReference ../../../geometry/support/aaBoundingRect ../../../layers/support/TileInfo ../support/projectionUtils".split(" "),function(r,z,x,n,g,y,t,u,p,q){var v=q.webMercator.x2lon,w=q.webMercator.y2lat;r=function(){function d(a){var b=d.checkUnsupported(a);if(b)throw b;this.spatialReference=a.spatialReference;this._isWebMercator=this.spatialReference.isWebMercator;
this._isWGS84Comparable=q.canProjectToWGS84ComparableLonLat(this.spatialReference);this.origin=[a.origin.x,a.origin.y];this.pixelSize=a.size[0];this.dpi=a.dpi;var e=a.lods.reduce(function(a,b,c){b.level<a.min&&(a.min=b.level,a.minIndex=c);a.max=Math.max(a.max,b.level);return a},{min:Infinity,minIndex:0,max:-Infinity}),c=a.lods[e.minIndex],l=Math.pow(2,c.level),b=c.resolution*l,c=c.scale*l;this.levels=Array(e.max+1);for(e=0;e<this.levels.length;e++)this.levels[e]={resolution:b,scale:c,tileSize:[b*
a.size[0],b*a.size[1]]},b/=2,c/=2}d.prototype.clone=function(){return new d(this.toTileInfo())};d.prototype.toTileInfo=function(){return new p({dpi:this.dpi,origin:{x:this.origin[0],y:this.origin[1],spatialReference:this.spatialReference},size:[this.pixelSize,this.pixelSize],spatialReference:this.spatialReference,lods:this.levels.map(function(a,b){return{level:b,scale:a.scale,resolution:a.resolution}})})};d.prototype.getExtent=function(a,b,e,c,d){void 0===c&&(c=u.create());var f=this.levels[a];a=
f.tileSize[0];f=f.tileSize[1];c[0]=this.origin[0]+e*a;c[2]=c[0]+a;c[3]=this.origin[1]-b*f;c[1]=c[3]-f;d&&(this._isWebMercator?(d[0]=v(c[0]),d[1]=w(c[1]),d[2]=v(c[2]),d[3]=w(c[3])):this._isWGS84Comparable&&(d[0]=g.deg2rad(c[0]),d[1]=g.deg2rad(c[1]),d[2]=g.deg2rad(c[2]),d[3]=g.deg2rad(c[3])));return c};d.prototype.getExtentGeometry=function(a,b,e,c){void 0===c&&(c=new x.Extent);this.getExtent(a,b,e,h);c.spatialReference=this.spatialReference;c.xmin=h[0];c.ymin=h[1];c.xmax=h[2];c.ymax=h[3];c.zmin=void 0;
c.zmax=void 0;return c};d.prototype.ensureMaxLod=function(a){if(null==a)return!1;for(var b=!1;this.levels.length<=a;){var b=this.levels[this.levels.length-1],e=b.resolution/2;this.levels.push({resolution:e,scale:b.scale/2,tileSize:[e*this.pixelSize,e*this.pixelSize]});b=!0}return b};d.prototype.capMaxLod=function(a){this.levels.length>a+1&&(this.levels.length=a+1)};d.prototype.getMaxLod=function(){return this.levels.length-1};d.prototype.scaleAtLevel=function(a){return this.levels[0].scale/Math.pow(2,
a)};d.prototype.levelAtScale=function(a){var b=this.levels[0].scale;return a>=b?0:Math.log(b/a)*Math.LOG2E};d.prototype.resolutionAtLevel=function(a){return this.levels[0].resolution/Math.pow(2,a)};d.prototype.compatibleWith=function(a){if(!(a instanceof d)){if(d.checkUnsupported(a))return!1;a=new d(a)}if(!a.spatialReference.equals(this.spatialReference)||a.pixelSize!==this.pixelSize)return!1;var b=Math.min(this.levels.length,a.levels.length)-1,e=this.levels[b].resolution,c=.5*e;if(!g.floatEqualAbsolute(a.origin[0],
this.origin[0],c)||!g.floatEqualAbsolute(a.origin[1],this.origin[1],c))return!1;c=.5*e/Math.pow(2,b)/this.pixelSize*12;return g.floatEqualAbsolute(e,a.levels[b].resolution,c)};d.prototype.rootTilesInExtent=function(a,b,e){var c=this.levels[0].tileSize;if(0===c[0]||0===c[1])return[];d.computeRowColExtent(a,c,this.origin,h);a=h[1];var l=h[3],f=h[0],g=h[2],k=g-f,m=l-a;k*m>e&&(e=Math.floor(Math.sqrt(e)),m>e&&(a=a+Math.floor(.5*m)-Math.floor(.5*e),l=a+e),k>e&&(f=f+Math.floor(.5*k)-Math.floor(.5*e),g=f+
e));e=[];for(k=a;k<l;k++)for(m=f;m<g;m++)e.push([0,k,m]);b&&(b[0]=this.origin[0]+f*c[0],b[1]=this.origin[1]-l*c[1],b[2]=this.origin[0]+g*c[0],b[3]=this.origin[1]-a*c[1]);return e};d.computeRowColExtent=function(a,b,e,c){var d=.001*(a[2]-a[0]+(a[3]-a[1]));c[0]=Math.floor((a[0]+d-e[0])/b[0]);c[2]=Math.ceil((a[2]-d-e[0])/b[0]);c[1]=Math.floor((e[1]-a[3]+d)/b[1]);c[3]=Math.ceil((e[1]-a[1]-d)/b[1])};d.isPowerOfTwo=function(a){a=a.lods;var b=a[0].resolution*Math.pow(2,a[0].level);return!a.some(function(a){return!g.floatEqualRelative(a.resolution,
b/Math.pow(2,a.level))})};d.hasGapInLevels=function(a){a=a.lods.map(function(a){return a.level});a.sort(function(a,b){return a-b});for(var b=1;b<a.length;b++)if(a[b]!==a[0]+b)return!0;return!1};d.tileSizeSupported=function(a){var b=a.size[1];return b===a.size[0]&&0===(b&b-1)&&128<=b&&512>=b};d.checkUnsupported=function(a){return a?1>a.lods.length?new n("tilingscheme:generic","Tiling scheme must have at least one level"):d.isPowerOfTwo(a)?d.hasGapInLevels(a)?new n("tilingscheme:gaps","Tiling scheme levels must not have gaps between min and max level"):
d.tileSizeSupported(a)?null:new n("tilingscheme:tile-size","Tiles must be square and size must be one of [128, 256, 512]"):new n("tilingscheme:power-of-two","Tiling scheme must be power of two"):new n("tilingscheme:tile-info-missing","Tiling scheme must have tiling information")};d.fromExtent=function(a,b){var e=a[2]-a[0],c=a[3]-a[1],g=y.getMetersPerUnitForSR(b),f=1.2*Math.max(e,c);a=new d(new p({size:[256,256],origin:{x:a[0]-.5*(f-e),y:a[3]+.5*(f-c)},lods:[{level:0,resolution:f/256,scale:1/(256/
96*.0254/(f*g))}],spatialReference:b}));a.ensureMaxLod(20);return a};d.makeWebMercatorAuxiliarySphere=function(a){var b=new d(d.WebMercatorAuxiliarySphereTileInfo);b.ensureMaxLod(a);return b};d.makeGCSWithTileSize=function(a,b,e){void 0===b&&(b=256);void 0===e&&(e=16);var c=256/b;a=new d(new p({size:[b,b],origin:{x:-180,y:90,spatialReference:a},spatialReference:a,lods:[{level:0,resolution:.703125*c,scale:2.95497598570834E8*c}]}));a.ensureMaxLod(e);return a};Object.defineProperty(d.prototype,"test",
{get:function(){return{isWebMercator:this._isWebMercator,isWGS84:this._isWGS84Comparable}},enumerable:!0,configurable:!0});d.WebMercatorAuxiliarySphereTileInfo=new p({size:[256,256],origin:{x:-2.0037508342787E7,y:2.0037508342787E7,spatialReference:t.WebMercator},spatialReference:t.WebMercator,lods:[{level:0,resolution:156543.03392800014,scale:5.91657527591555E8}]});d.WebMercatorAuxiliarySphere=d.makeWebMercatorAuxiliarySphere(19);return d}();var h=u.create();return r});