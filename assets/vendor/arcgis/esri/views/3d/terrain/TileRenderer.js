// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/mathUtils ../../../core/maybe ../../../core/libs/gl-matrix-2/vec2 ../../../core/libs/gl-matrix-2/vec2f64 ../../2d/engine/vectorTiles/tileRendererHelper3D ../../2d/engine/vectorTiles/VectorTile ../support/StreamDataLoader ./BlendLayersTechnique ./terrainUtils ./TileTexture ./support/FBOPool ../webgl-engine/lib/DefaultVertexBufferLayouts ../webgl-engine/lib/glUtil3D ../../webgl/Util".split(" "),function(K,L,D,p,z,A,E,F,B,w,G,t,H,I,v,J){function x(c,a,b){b.layerIndex=
a;var e=c.layerInfo[1][a];return e.data?(z.vec2.set(b.offset,0,0),b.tile=c,b.scale=1,b.sourceLod=c.lij,b.sourceLayerInfo=e,b):(c=e.upsampleInfo)?(a=c.tile.layerInfo[1][a],b.tile=c.tile,z.vec2.copy(b.offset,c.offset),b.scale=c.scale,b.sourceLod=c.tile.lij,b.sourceLayerInfo=a,b):null}var C=[],y={tile:null,sourceLayerInfo:null,sourceLod:null,offset:[0,0],scale:1,layerIndex:0};return function(){function c(a,b,e,d){this._context=a;this.tileSize=b;this._setNeedsRender=d;this._blackTex=this._backgroundTexture=
null;this._context.capabilities.textureFilterAnisotropic&&(this._maxAnisotropy=this._context.parameters.maxMaxAnisotropy);this._vaoQuad=v.createQuadVAO(this._context,I.Pos2Tex);a=new w.BlendLayersTechniqueConfiguration;a.mode=2;this._blendLayersTechnique=e.acquireAndReleaseExisting(w.BlendLayersTechnique,a,this._blendLayersTechnique);a.mode=1;this._applyOpacityTechnique=e.acquireAndReleaseExisting(w.BlendLayersTechnique,a,this._applyOpacityTechnique);this._blackTex=new t.TileTexture(v.createColorTexture(this._context,
[0,0,0,1]));this._fboPool=new H.FBOPool(this._context)}c.prototype.dispose=function(){this._fboPool&&(this._fboPool.clear(),this._fboPool=null);this._vaoQuad&&(this._vaoQuad.dispose(),this._vaoQuad=null);p.isSome(this._backgroundTexture)&&(this._backgroundTexture.release(),this._backgroundTexture=null);this._blackTex&&(this._blackTex.release(),this._blackTex=null);this._blendLayersTechnique&&(this._blendLayersTechnique.dispose(),this._blendLayersTechnique=null);this._applyOpacityTechnique&&(this._applyOpacityTechnique.dispose(),
this._applyOpacityTechnique=null)};c.prototype.updateTileTexture=function(a){for(var b=a.layerInfo[1],e=0;e<b.length;e++)b[e].pendingUpdates&=-65;if(a.renderData){for(var d=a.surface,c=d.baseOpacity,e=0,f=this.tileSize,m=!1,u=1,h=b.length,g=0;g<b.length&&!m;g++){var k=d.layerViewByIndex(g,1),q=k.fullOpacity,u=k.view.pixelRatio;C[g]=q;this._isBaseLayer(k.layer)&&h>=b.length&&(h=g);if(0!==q){var r=x(a,g,y);r&&(G.isVectorTileLayerView(k)?f=Math.max(f,this.tileSize*k.view.pixelRatio):1===c&&1===q&&(k.isOpaque||
this._dataToTexture(r)&&p.isSome(r.sourceLayerInfo.data)&&r.sourceLayerInfo.data.descriptor.isOpaque)&&(m=!0),e++)}}this._cleanupFBOPool(u,b.length);c=f;f=D.nextHighestPowerOfTwo(c);b=f*f;d=c*c;b===d?f=c:(c=f/2,f=b-d<d-c*c?f:c);b=f/this.tileSize;--g;0===e&&this._backgroundTexture?this._useBackgroundTexture(a):1===e&&m?this._useLayerTexture(a,g):this._composeMapLayers(a,g,h,m,C,f,b);this._setNeedsRender()}};c.prototype.setBackground=function(a){p.isSome(this._backgroundTexture)&&this._backgroundTexture.release();
this._backgroundTexture=a instanceof HTMLImageElement?this._buildTexture(a):new t.TileTexture(v.createColorTexture(this._context,a))};c.prototype._buildTexture=function(a){if(p.isNone(a))return null;var b={target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9987,maxAnisotropy:this._maxAnisotropy,flipped:!0,hasMipmap:!0},c=this._context,d;if("number"===typeof a)b.width=b.height=a,d=new t.TileTexture(c,b);else if(a instanceof B.ImageWithType)b.isOpaque="image/jpeg"===a.type,d=new t.TileTexture(c,
b,a.image),a.release();else try{d=new t.TileTexture(c,b,a)}catch(l){d=new t.TileTexture(v.createEmptyTexture(c)),console.warn("TileRenderer: failed to execute 'texImage2D', cross-origin image may not be loaded.")}c.bindTexture(d.texture);d.generateMipmap();return d};c.prototype._drawRasterData=function(a,b,c,d,l){void 0===l&&(l=1);if(!p.isNone(b)){var f=this._context,e=a.program,u=this._vaoQuad;f.setPipelineState(a.pipeline);f.bindProgram(e);f.bindVAO(u);e.assertCompatibleVertexAttributeLocations(u);
f.bindTexture(b,0);e.setUniform1i("tex",0);e.setUniform1f("scale",c);e.setUniform2f("offset",d[0],d[1]);e.setUniform1f("opacity",l);f.drawArrays(5,0,J.vertexCount(u,"geometry"))}};c.prototype._drawVectorData=function(a,b,c,d,l,f,m){var e=b.sourceLayerInfo.data;if(p.isNone(e))return m;var h=this._context,g=b.tile.surface.layerViewByIndex(b.layerIndex,1),k;h.setPipelineState(a.pipeline);var q=1>d;q?(k=this._fboPool.acquire(l),h.bindFramebuffer(k),h.setClearColor(1,1,1,0),h.clearSafe(16640)):m&&h.clearSafe(256);
E.renderVectorTile(h,b.sourceLod,e,g.painter,g.layer.styleRepository,g.schemaHelper,Math.round(1/b.scale),b.offset,this.tileSize,c);return q?(h.bindFramebuffer(f),this._drawRasterData(a,k.colorTexture,1,[0,0],d),this._fboPool.release(k),m):!0};c.prototype._useBackgroundTexture=function(a){a.renderData.releaseTexture();a.renderData.opacity=a.surface.baseOpacity;a.renderData.setTextureReference(this._backgroundTexture,0,0,1)};c.prototype._useLayerTexture=function(a,b){a.renderData.releaseTexture();
b=x(a,b,y);if(this._dataToTexture(b)){var c=b.offset;a.renderData.setTextureReference(b.sourceLayerInfo.data,c[0],c[1],b.scale)}a.renderData.opacity=a.surface.baseOpacity};c.prototype._composeMapLayers=function(a,b,c,d,l,f,m){var e=this;a.renderData.releaseTexture();var h=a.renderData.ensureTexture(f,function(){return e._buildTexture(f)});if(!p.isNone(h)){var g=this._context,k=this._fboPool.acquire(f);g.bindFramebuffer(k);g.setViewport(0,0,f,f);g.setClearColor(0,0,0,0);g.setClearDepth(1);g.clearSafe(16640);
var q=!1;!d&&p.isSome(this._backgroundTexture)&&this._drawRasterData(this._blendLayersTechnique,this._backgroundTexture.texture,1,A.vec2f64.ZEROS);d=a.surface.baseOpacity;for(var r=!1;0<=b;b--){var n=x(a,b,y);n&&(b<c&&1>d&&!r&&(this._drawRasterData(this._applyOpacityTechnique,this._blackTex.texture,1,A.vec2f64.ZEROS,d),r=!0),0!==l[b]&&(n&&n.sourceLayerInfo&&n.sourceLayerInfo.data instanceof F.VectorTile?q=this._drawVectorData(this._blendLayersTechnique,n,m,l[b],f,k,q):this._dataToTexture(n)&&p.isSome(n.sourceLayerInfo.data)&&
this._drawRasterData(this._blendLayersTechnique,n.sourceLayerInfo.data.texture,n.scale,n.offset,l[b])))}g.bindTexture(h.texture);c=h.descriptor;g.gl.copyTexImage2D(g.gl.TEXTURE_2D,0,c.pixelFormat,0,0,c.width,c.height,0);h.generateMipmap();g.bindFramebuffer(null);this._fboPool.release(k);a.renderData.opacity=r?1:d;a.renderData.setTextureReference(h,0,0,1)}};c.prototype._dataToTexture=function(a){var b=a&&a.sourceLayerInfo&&a.sourceLayerInfo.data;(b instanceof HTMLImageElement||b instanceof B.ImageWithType||
b instanceof HTMLCanvasElement)&&this._rasterDataToTexture(a);return a&&a.sourceLayerInfo&&a.sourceLayerInfo.data instanceof t.TileTexture};c.prototype._rasterDataToTexture=function(a){var b=a.sourceLayerInfo;b.data=this._buildTexture(b.data);a.tile.setMemoryDirty()};c.prototype._isBaseLayer=function(a){return a.parent&&"esri.Basemap"===a.parent.declaredClass&&-1<a.parent.baseLayers.indexOf(a)};c.prototype._cleanupFBOPool=function(a,b){if(a!==this._lastPixelRatio||b!==this._lastNumLayers)this._fboPool.clear(),
this._lastPixelRatio=a,this._lastNumLayers=b};return c}()});