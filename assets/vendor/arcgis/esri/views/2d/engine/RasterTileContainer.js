// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../geometry/support/aaBoundingRect ../engine ./RasterTile ./webgl/enums ./webgl/TileContainer".split(" "),function(c,e,g,n,h,k,l,f,m){Object.defineProperty(e,"__esModule",{value:!0});c=function(b){function a(){return null!==b&&b.apply(this,arguments)||this}g(a,b);a.prototype.createTile=function(d){var a=this._tileInfoView.getTileBounds(h.create(),d);return new l.RasterTile(d,a,this._tileInfoView.tileInfo.size)};
a.prototype.destroyTile=function(){};a.prototype.prepareRenderPasses=function(a){var d=this,c=a.registerRenderPass({name:"bitmap (tile)",brushes:[k.brushes.Raster],target:function(){return d.children.map(function(a){return a.bitmap})},drawPhase:f.WGLDrawPhase.MAP});return b.prototype.prepareRenderPasses.call(this,a).concat([c])};a.prototype.doRender=function(a){this.visible&&a.drawPhase===f.WGLDrawPhase.MAP&&b.prototype.doRender.call(this,a)};return a}(m.default);e.RasterTileContainer=c});