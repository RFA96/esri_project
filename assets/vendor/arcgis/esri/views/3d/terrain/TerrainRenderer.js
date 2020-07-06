// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/assignHelper ../../../core/tsSupport/decorateHelper ../../../Color ../../../core/Accessor ../../../core/compilerUtils ../../../core/maybe ../../../core/ObjectPool ../../../core/PooledArray ../../../core/accessorSupport/decorators ../../../core/libs/gl-matrix-2/mat4 ../../../core/libs/gl-matrix-2/mat4f64 ../../../core/libs/gl-matrix-2/vec2f64 ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../../../core/libs/gl-matrix-2/vec4 ../../../core/libs/gl-matrix-2/vec4f64 ../../../geometry/support/aaBoundingBox ../support/imageUtils ../support/buffer/BufferView ./OverlayRenderer ./PatchGeometryFactory ./PatchRenderData ./TileRenderer ./tileUtils ../webgl-engine/core/shaderLibrary/Slice.glsl ../webgl-engine/lib/glUtil3D ../webgl-engine/lib/intersectorUtils ../webgl-engine/lib/screenSizePerspectiveUtils ../webgl-engine/lib/tracer ../webgl-engine/materials/internal/MaterialUtil ../webgl-engine/shaders/TerrainTechnique".split(" "),
function(m,oa,W,pa,x,X,Y,Z,E,O,y,p,aa,P,ba,n,t,Q,v,I,ca,da,R,S,ea,fa,A,ga,ha,J,ia,K,L,M){function T(n,b,a){Q.vec4.set(a,n[0]*b[2]+b[0],n[1]*b[3]+b[1],n[2]*b[2],n[3]*b[3])}var N=ba.vec2f64.create(),F=I.create(),q=v.vec4f64.create(),w=v.vec4f64.create(),C=v.vec4f64.create(),ja=function(){return function(){this.extent=v.vec4f64.create();this.maxLevel=this.minLevel=0;this.callback=null}}();m=function(m){function b(a){a=m.call(this,a)||this;a.type="Terrain";a.isGround=!0;a.tileSize=256;a.rctx=null;a.renderDataPool=
new O(ea.PatchRenderData);a.patchGroups=new y({allocator:function(a){return a||{root:null,origin:null,patches:new y}},deallocator:function(a){a.root=null;a.origin=null;a.patches.clear();return a}});a.patchGroupsDirty=!0;a.patchGroupsMap=new Map;a.tileIterator=new A.IteratorPreorder;a.highestVisibleLODTile=null;a.visible=!0;a._opaque=!0;a._skirtScale=1;a._renderingDisabled=!1;a._renderOrder=1;a._velvetOverground=!0;a._wireframe=!1;a.castShadows=!0;a.emptyTex=null;a.tileRenderer=null;a.tileBackgroundInitialized=
!1;a.tileBackgroundUpdating=!1;a.stencilEnabledLayerExtents=[];a.numTrianglesRendered=0;a.numTilesRendered=0;a.numTilesCulled=0;a.numOriginsRendered=0;a.clippingExtent=null;a.needsHighlight=!1;a.renderOccludedFlags=1;a.visibleScaleRangeQueries=new y({initialSize:10});a.visibleScaleRangeQueriesInvPtr=0;a.visibleScaleRangeQueryQueue=new y({initialSize:30});a.visibleScaleRangeQueryPool=new O(ja,!1);return a}W(b,m);b.prototype.destroy=function(){S.clearCaches()};b.prototype.install=function(a){a.addRenderPlugin([2,
7,9],this)};b.prototype.uninstall=function(a){a.removeRenderPlugin(this)};Object.defineProperty(b.prototype,"updating",{get:function(){return!this.tileBackgroundInitialized||this.tileBackgroundUpdating},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"canRender",{get:function(){return this.visible&&!!this.rootTiles&&this.tileBackgroundInitialized&&!this._renderingDisabled},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"overlayEnabled",{get:function(){return this.shaderTechniqueConfig.overlayEnabled},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"renderingDisabled",{set:function(a){this._renderingDisabled=!!a;this.setNeedsRender()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"opaque",{get:function(){return this._opaque&&!this.shaderTechniqueConfig.slicePlaneEnabled},set:function(a){this._opaque!==a&&(this._opaque=a,this.setNeedsRender())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"skirtScale",{set:function(a){this._skirtScale=a;
this.setNeedsRender()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"renderPatchBorders",{set:function(a){this.shaderTechniqueConfig.tileBorders!==a&&(this.shaderTechniqueConfig.tileBorders=a,this.setNeedsRender())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"cullBackFaces",{set:function(a){this.shaderTechniqueConfig.backfaceCullingEnabled!==a&&(this.shaderTechniqueConfig.backfaceCullingEnabled=a,this.setNeedsRender())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"renderOrder",{get:function(){return this._renderOrder},set:function(a){this._renderOrder=a;this.setNeedsRender()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"velvetOverground",{set:function(a){this._velvetOverground!==a&&(this._velvetOverground=a,this.setNeedsRender())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"intersectionHandlerId",{get:function(){return J.TERRAIN_ID},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"slicePlane",
{get:function(){return this.shaderTechniqueConfig.slicePlaneEnabled},set:function(a){this.shaderTechniqueConfig.slicePlaneEnabled!==a&&(this.shaderTechniqueConfig.slicePlaneEnabled=a,this.setNeedsRender())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"textureFadingEnabled",{set:function(a){this.shaderTechniqueConfig.textureFadingEnabled!==a&&(this.shaderTechniqueConfig.textureFadingEnabled=a,this.setNeedsRender())},enumerable:!0,configurable:!0});b.prototype.setDebugScreenSizePerspective=
function(a){this.shaderTechniqueConfig.screenSizePerspective!==a&&(this.shaderTechniqueConfig.screenSizePerspective=a,this.setNeedsRender())};b.prototype.setRootTiles=function(a){this.rootTiles=a;this.setNeedsRender()};b.prototype.setNeedsHighlight=function(a){this.needsHighlight=a;this.setNeedsRender()};b.prototype.setRenderOccludedOverlay=function(a){this.renderOccludedFlags=a?R.overlayRenderOccludedFlag:1;this.setNeedsRender()};b.prototype.setStencilEnabledLayerExtents=function(a){this.stencilEnabledLayerExtents=
a;this.setNeedsRender()};b.prototype.setTileSize=function(a){this.tileSize=a;this.tileRenderer&&(this.tileRenderer.tileSize=a);this.setNeedsRender()};b.prototype.loadTile=function(a){a.renderData||(a.renderData=this.renderDataPool.acquire(),a.renderData.init(a),a.renderData.localOrigin=this._getLocalOriginOfTile(a));this.updateTileGeometry(a);this.updateTileTexture(a)};b.prototype.queryVisibleLevelRange=function(a,c,d,b){var g=this.visibleScaleRangeQueryPool.acquire();Q.vec4.copy(g.extent,a);g.minLevel=
c?c:-Number.MAX_VALUE;g.maxLevel=null!=d?d:Number.MAX_VALUE;g.callback=b;this.visibleScaleRangeQueryQueue.push(g);this.setNeedsRender()};b.prototype.updateTileTexture=function(a){this.tileRenderer&&this.tileBackgroundInitialized&&(this.tileRenderer.updateTileTexture(a),a.resetPendingUpdate(64))};b.prototype.updateTileGeometry=function(a){for(var c=0,b=a.layerInfo[0];c<b.length;c++)b[c].pendingUpdates&=-33;a.resetPendingUpdate(32);a.renderData.updateGeometry(this.rctx,this._wireframe)&&this.setNeedsRender()};
b.prototype.unloadTile=function(a){a.renderData&&(a.renderData.releaseTexture(),this.releaseTileGeometry(a.renderData),a.renderData=null,a.setMemoryDirty(),this.setNeedsRender())};b.prototype._getLocalOriginOfTile=function(a){var c=Math.max(0,7*Math.floor((a.lij[0]-3)/7));if("spherical"===this.manifold&&0===c)return t.vec3f64.ZEROS;for(;a.parent&&a.lij[0]>c;)a=a.parent;return a.centerAtSeaLevel};b.prototype.setVisibility=function(a){this.visible=a;this.setNeedsRender()};b.prototype.getStats=function(){return{numTilesRendered:this.numTilesRendered,
numTilesCulled:this.numTilesCulled,numTrianglesRendered:this.numTrianglesRendered,numOriginsRendered:this.numOriginsRendered}};b.prototype.setWireframe=function(a){var c=this;this._wireframe!==a&&(this._wireframe=a,this.rootTiles&&(A.traverseTilesPreorder(this.rootTiles,function(b){b.renderData&&b.renderData.updateGeometry(c.rctx,a)}),this.setNeedsRender()))};b.prototype.setNeedsRender=function(a){void 0===a&&(a=1);this.patchGroupsDirty=!0;this.initContext.requestRender(a)};b.prototype.setTileBackground=
function(a){this.tileBackground=a;this._updateTileBackground()};b.prototype.initializeRenderContext=function(a){var c=this;this.initContext=a;this.rctx=a.rctx;this.shaderTechniques=a.shaderTechniqueRep;this.shaderTechniqueConfig=new M.TerrainTechniqueConfiguration;this.tileRenderer=new fa(this.rctx,this.tileSize,this.shaderTechniques,function(){return c.setNeedsRender()});this.tileBackground&&this._updateTileBackground();this.emptyTex=ha.createEmptyTexture(this.rctx)};b.prototype.uninitializeRenderContext=
function(){null!=this.emptyTex&&(this.emptyTex.dispose(),this.emptyTex=null);this.tileRenderer&&(this.tileRenderer.dispose(),this.tileRenderer=null)};b.prototype.intersect=function(a,c,b,f){if(this.rootTiles&&(!a.options.selectOpaqueTerrainOnly||!a.options.selectionMode||this._opaque)){var g=ka,d=la;n.vec3.subtract(g,f,b);n.vec3.set(d,1/g[0],1/g[1],1/g[2]);var l=a.results.min,h=a.results.max,p=a.results.ground,t=0===a.options.store,x=!!a.results.ground.target,r=null,U=this.clippingExtent,k=this.tileIterator;
k.reset(this.rootTiles);for(var u=J.getVerticalOffsetTerrain(a.verticalOffset),m=function(){var e=k.next();if(null===e.renderData||x&&v._useStencilForTile(e))return"continue";if(a.options.invisibleTerrain){if(!e.visible&&U&&!e.intersectsExtent(U))return"continue"}else if(!e.visible)return"continue";var z=e.renderData.geometryInfo,m=e.renderData.localOrigin,B=-v._skirtScale*z.skirtLength;I.set(F,z.boundingBox);E.isSome(u)&&(u.localOrigin=m,u.applyToAABB(F));if(0!==B){var D=e.up;I.expandWithOffset(F,
B*D[0],B*D[1],B*D[2])}n.vec3.subtract(G,b,m);if(!L.intersectAabbInvDirBefore(F,G,d,a.tolerance,t&&null!=l.dist?l.dist:Infinity))return"continue";var q=function(a,c,b,d){a.set(void 0,A.tile2str(c),b,d,P.mat4f64.IDENTITY,void 0);a.intersector=ma;a.target={type:"external",metadata:{tile:c}}},D=function(d,k){0<=d&&(a.options.backfacesTerrain||0>n.vec3.dot(k,g))&&(a.options.invisibleTerrain||!a.options.selectionMode||null==c||c(b,f,d))&&((null==p.dist||d<p.dist)&&q(p,e,d,k),a.options.storeTerrainResults&&
(2===a.options.store&&(E.isNone(r)?(r=new J.IntersectorResult(a.ray),q(r,e,d,k),a.results.all.push(r)):d<r.dist&&q(r,e,d,k)),(null==l.dist||d<l.dist)&&q(l,e,d,k),0!==a.options.store&&(null==h.dist||d>h.dist)&&q(h,e,d,k)))},w=na;n.vec3.subtract(w,f,m);var m=z.indices,y=z.vertexAttributes,C={data:y.getField("position",da.BufferViewVec3f).typedBuffer,size:3,offsetIdx:0,strideIdx:y.stride/4},z=z.numWithoutSkirtIndices/3;L.intersectTriangles(G,w,0,z,m,C,null,u,D);0!==B&&S.intersectSkirts(G,w,z,m.length/
3,m,y,"spherical"===v.manifold?function(a){return n.vec3.scale(a,a,B/n.vec3.length(a))}:function(a){return n.vec3.set(a,0,0,B)},u,D)},v=this;!k.done;)m()}};b.prototype.render=function(a){if(9===a.slot){if(0===(a.renderOccludedMask&R.overlayRenderOccludedFlag))return!1}else if(a.slot!==(this.opaque?2:7))return!1;K.trace("# BEGIN RENDER TERRAIN");var c=a.pass,b=1===a.scenelightingData.globalFactor,f=this._updatePatchGroups();switch(c){case 0:c=a.shadowMap&&a.shadowMap.enabled;this.shaderTechniqueConfig.receiveShadows!==
c&&(this.shaderTechniqueConfig.receiveShadows=c);c=!this.overlayRenderer.isEmpty();this.shaderTechniqueConfig.overlayEnabled!==c&&(this.shaderTechniqueConfig.overlayEnabled=c);this._renderMaterialPass(a,0,f,9===a.slot?"occluded":"colorAndWater");break;case 3:this.castShadows&&b&&this._renderAuxiliaryPass(a,3,f,"none");break;case 1:this._renderAuxiliaryPass(a,1,f,"none");break;case 2:this._renderAuxiliaryPass(a,2,f,"none");break;case 4:this.needsHighlight&&(this._renderAuxiliaryPass(a,4,f,"highlight"),
a.rctx.clearSafe(256))}K.trace("# END RENDER TERRAIN");0!==this.visibleScaleRangeQueryQueue.length&&this.setNeedsRender();return!0};b.prototype._renderMaterialPass=function(a,c,b,f){var d=this,e=a.rctx,l=a.camera;this._setTerrainTechnique(c,"occluded"===f);var h=this.shaderTechnique.program;a.rctx.bindProgram(h);e.bindProgram(h);a.shadowMap&&a.shadowMap.bind(h,7);a.ssaoHelper&&a.ssaoHelper.setUniforms(h,6);h.setUniform1i("tex",0);h.setUniform1i("texOld",1);this._bindOverlayUniforms(h);h.setUniformMatrix4fv("viewNormal",
l.viewInverseTransposeMatrix);h.setUniformMatrix4fv("proj",l.projectionMatrix);a.scenelightingData.setUniforms(h,!0);c=l.viewMatrix;n.vec3.set(H,c[12],c[13],c[14]);n.vec3.normalize(H,H);h.setUniform3fv("viewDirection",H);this.numOriginsRendered=this.numTrianglesRendered=this.numTilesCulled=this.numTilesRendered=0;this._prepareScaleRangeQueries();this.opaque?this._renderPatchGroups(a,h,b,f):a.offscreenRenderingHelper.renderToTargets(function(){return d._renderPatchGroups(a,h,b,f)},a.offscreenRenderingHelper.tmpColor,
a.offscreenRenderingHelper.mainDepth,[0,0,0,0]);this._processScaleRangeQueries()};b.prototype._renderAuxiliaryPass=function(a,c,b,f){this._setTerrainTechnique(c,"occluded"===f);c=this.shaderTechnique.program;a.rctx.bindProgram(c);if(4===a.pass){var d=a.offscreenRenderingHelper;a.rctx.bindTexture(d.depthTexture,6);c.setUniform1i("depthTex",6);c.setUniform4f("highlightViewportPixelSz",0,0,1/d.width,1/d.height)}else if(c.setUniformMatrix4fv("viewNormal",a.camera.viewInverseTransposeMatrix),1===a.pass||
3===a.pass)N[0]=a.camera.near,N[1]=a.camera.far,c.setUniform2fv("nearFar",N);this._renderPatchGroupsAuxiliary(a,c,b,f)};b.prototype._updateTileBackground=function(){var a=this;if(this.tileRenderer){this.tileBackgroundUpdating=!0;var c=function(){a.tileBackgroundInitialized=!0;a.tileBackgroundUpdating=!1;a.rootTiles&&A.traverseTilesPreorder(a.rootTiles,function(c){return a.tileRenderer.updateTileTexture(c)});a.setNeedsRender()};if("string"===typeof this.tileBackground){var b=this.tileBackground;ca.requestImage(b).then(function(d){b===
a.tileBackground&&a.tileRenderer&&(a.tileRenderer.setBackground(d),c())})}else{var f=this.tileBackground?X.toUnitRGBA(this.tileBackground):[0,0,0,0];this.tileRenderer.setBackground(f);c()}}};b.prototype._updatePatchGroups=function(){var a=this,c=this.patchGroups;if(!this.patchGroupsDirty)return c;this.highestVisibleLODTile=null;this._renderCollectOrigins(c);if(0!==this.renderOrder){for(var b=0;b<c.length;b++)A.sortTiles(this.renderOrder,c.data[b].patches);c.sort(function(c,b){var d=a.renderOrder;
c=0===c.patches.length?-d:0===b.patches.length?d:A.compareTiles(c.patches.data[0],b.patches.data[0],d);return c})}this.patchGroupsDirty=!1;return c};b.prototype._renderCollectOrigins=function(a){var c=this.rootTiles,b="spherical"===this.manifold;a.clear();for(var f=0;f<c.length;f++){var g=c[f],e=a.pushNew();e.root=g;e.origin=b?t.vec3f64.ZEROS:g.centerAtSeaLevel;e.patches.clear();this._renderCollectOriginsForRoot(a,e)}a.filterInPlace(function(a){return 0<a.patches.length})};b.prototype._renderCollectOriginsForRoot=
function(a,c){var b=this.tileIterator;b.resetOne(c.root);var f=this.patchGroupsMap;f.clear();for(f.set(c.origin,c);!b.done;){c=b.next();var g=c.renderData;if(g&&!c.visible)this.numTilesCulled++,b.skipSubtree();else{if(0===c.lij[0]%7){var e=a.pushNew();e.root=c;e.origin=c.centerAtSeaLevel;f.set(c.centerAtSeaLevel,e);e.patches.clear()}if(!c.rendered)this.numTilesCulled++;else if(g){(e=f.get(g.localOrigin))&&e.patches.push(c);if(!this.highestVisibleLODTile||c.vlevel>this.highestVisibleLODTile.vlevel)this.highestVisibleLODTile=
c;b.skipSubtree()}}}};b.prototype._scaleQueriesForTile=function(a){var c=a.extent;a=a.lij[0];for(var b=0;b<this.visibleScaleRangeQueriesInvPtr;){var f=this.visibleScaleRangeQueries.data[b],g=f.extent;a>=f.minLevel&&a<=f.maxLevel&&g[0]<=c[2]&&g[2]>=c[0]&&g[1]<=c[3]&&g[3]>=c[1]?(this.visibleScaleRangeQueries.swapElements(b,this.visibleScaleRangeQueriesInvPtr-1),this.visibleScaleRangeQueriesInvPtr--):b++}};b.prototype._useStencilForTile=function(a){for(var c=0,b=this.stencilEnabledLayerExtents;c<b.length;c++)if(a.intersectsExtent(b[c]))return!0;
return!1};b.prototype._renderPatchGroupsAuxiliary=function(a,c,b,f){this.shaderTechnique.bindPipelineState(a.rctx);var d=0<this.stencilEnabledLayerExtents.length;c.setUniformMatrix4fv("proj",a.camera.projectionMatrix);c.setUniform1f("skirtScale",this._skirtScale);"none"!==f&&this._bindOverlayUniforms(c);for(var e=0;e<b.length;e++){var l=b.data[e];this._bindViewForPatchGroup(c,l,a.camera.eye,a.camera.viewMatrix);for(var h=0;h<l.patches.length;h++)this._renderPatch(a.rctx,c,l.patches.data[h],4,d,f)}a.rctx.bindVAO(null)};
b.prototype._renderPatchGroups=function(a,c,b,f){var d=a.rctx,e=a.camera,l=e.viewMatrix;this.shaderTechnique.bindPipelineState(d);if(this.shaderTechniqueConfig.screenSizePerspective&&this.pointsOfInterest){var h=ia.getSettings("spherical"===this.manifold?"global":"local");h.update({distance:this.pointsOfInterest.centerOnSurfaceFrequent.distance,fovY:e.fovY});L.bindScreenSizePerspective(h,c,"screenSizePerspective")}var h=0<this.stencilEnabledLayerExtents.length,m="occluded"===f;m&&(d.bindTexture(this.emptyTex,
0),c.setUniform1f("blend",1),c.setUniform4fv("texOffsetAndScale",v.vec4f64.ZEROS));c.setUniform1f("skirtScale",m?0:this._skirtScale);for(var n=this._wireframe?1:4,p=0;p<b.length;p++){var r=b.data[p],q=r.patches;if(0!==q.length)for(this._bindViewForPatchGroup(c,r,e.eye,l),ga.Slice.bindUniforms(c,this.shaderTechnique.configuration,a.sliceHelper&&a.sliceHelper.plane,r.origin),a.shadowMap&&a.shadowMap.bindView(c,r.origin),this.numOriginsRendered++,r=0;r<q.length;r++){var k=q.data[r];if(!E.isNone(k.renderData.textureReference)){K.trace("# RENDER TILE "+
A.tile2str(k)+", screenDepth:"+k.screenDepth);if(!m){this._scaleQueriesForTile(k);T(k.renderData.geometryInfo.uvOffsetAndScale,k.renderData.texOffsetAndScale,C);c.setUniform4fv("texOffsetAndScale",C);d.bindTexture(k.renderData.textureReference.texture,0);var u=k.renderData.oldTextureReference;if(this.shaderTechniqueConfig.textureFadingEnabled&&E.isSome(u)){this.setNeedsRender();var t=k.renderData.textureFadeFactor;T(k.renderData.geometryInfo.uvOffsetAndScale,k.renderData.oldTexOffsetAndScale,C);c.setUniform1f("textureFadeFactor",
t);c.setUniform4fv("oldTexOffsetAndScale",C);d.bindTexture(u.texture,1)}else c.setUniform1f("textureFadeFactor",1),d.bindTexture(this.emptyTex,1);c.setUniform1f("opacity",k.renderData.opacity)}u=this._renderPatch(d,c,k,n,h,f);k.renderOrder=this.numTilesRendered;this.numTilesRendered++;this.numTrianglesRendered+=u/3}}}d.bindVAO(null)};b.prototype._renderPatch=function(a,c,b,f,g,e){"none"!==e&&(this._bindOverlayTextures(c,b.renderData.overlays,e),c.setUniform1f("overlayOpacity",b.renderData.overlayOpacity));
g&&(this._useStencilForTile(b)?this.stencilShaderTechnique.bindPipelineState(a):this.shaderTechnique.bindPipelineState(a));g=0===this._skirtScale?b.renderData.geometryInfo.numWithoutSkirtIndices:b.renderData.vao.indexBuffer.size;a.bindVAO(b.renderData.vao);c.assertCompatibleVertexAttributeLocations(b.renderData.vao);a.drawElements(f,g,b.renderData.vao.indexBuffer.indexType,0);return g};b.prototype._bindViewForPatchGroup=function(a,b,d,f){a.setUniform3fv("origin",b.origin);aa.mat4.translate(V,f,b.origin);
a.setUniformMatrix4fv("view",V);a.setUniform3f("camPos",d[0]-b.origin[0],d[1]-b.origin[1],d[2]-b.origin[2])};b.prototype._bindOverlayUniforms=function(a){a.setUniform1i("ovInnerColorTex",2);a.setUniform1i("ovOuterColorTex",3);a.setUniform1i("ovInnerWaterTex",4);a.setUniform1i("ovOuterWaterTex",5)};b.prototype._bindOverlayTextures=function(a,b,d){for(var c=0;2>c;c++){var g=2*c,e=b[c],l=void 0,h=void 0;switch(d){case "colorAndWater":l=e.renderTargetIds.color;h=e.renderTargetIds.water;break;case "highlight":l=
e.renderTargetIds.highlight;break;case "occluded":l=e.renderTargetIds.occluded;break;case "none":break;default:Z.neverReached(d)}l?(q[g]=e.texOffset[0],q[g+1]=e.texOffset[1],w[g]=e.texScale[0],w[g+1]=e.texScale[1],g=this.overlayRenderer.getRenderTargetTexture(l),this.rctx.bindTexture(g,2+c),h?(h=this.overlayRenderer.getRenderTargetTexture(h),this.rctx.bindTexture(h,4+c)):this.rctx.bindTexture(this.emptyTex,4+c)):(q[g]=0,q[g+1]=0,w[g]=0,w[g+1]=0,this.rctx.bindTexture(this.emptyTex,2+c),this.rctx.bindTexture(this.emptyTex,
4+c))}a.setUniform4fv("overlayTexOffset",q);a.setUniform4fv("overlayTexScale",w)};b.prototype._setTerrainTechnique=function(a,b){this.shaderTechniqueConfig.output=a;0===a&&(a="spherical"===this.manifold,this.shaderTechniqueConfig.overlayEnabled=this.overlayEnabled,this.shaderTechniqueConfig.atmosphere=a&&this._velvetOverground);this.shaderTechniqueConfig.renderOccluded=b;this.shaderTechniqueConfig.stencilEnabled=!1;this.shaderTechnique=this.shaderTechniques.acquireAndReleaseExisting(M.TerrainTechnique,
this.shaderTechniqueConfig,this.shaderTechnique);this.shaderTechniqueConfig.stencilEnabled=!0;this.stencilShaderTechnique=this.shaderTechniques.acquireAndReleaseExisting(M.TerrainTechnique,this.shaderTechniqueConfig,this.stencilShaderTechnique)};b.prototype.releaseTileGeometry=function(a){a.releaseGeometry()&&this.setNeedsRender();this.renderDataPool.release(a)};b.prototype._prepareScaleRangeQueries=function(){for(var a=this.visibleScaleRangeQueries,b=this.visibleScaleRangeQueryQueue;a.length<a.data.length&&
0<b.length;){var d=b.pop();a.push(d)}this.visibleScaleRangeQueriesInvPtr=a.length};b.prototype._processScaleRangeQueries=function(){for(var a=this.visibleScaleRangeQueries,b=this.visibleScaleRangeQueryPool,d=0;d<a.length;d++){var f=a.data[d];b.release(f);f.callback(d>=this.visibleScaleRangeQueriesInvPtr);f.callback=null}a.clear()};Object.defineProperty(b.prototype,"test",{get:function(){return{tileRenderer:this.tileRenderer}},enumerable:!0,configurable:!0});x([p.property()],b.prototype,"tileBackgroundInitialized",
void 0);x([p.property()],b.prototype,"tileBackgroundUpdating",void 0);x([p.property({constructOnly:!0})],b.prototype,"manifold",void 0);x([p.property({constructOnly:!0})],b.prototype,"overlayRenderer",void 0);x([p.property({readOnly:!0,dependsOn:["tileBackgroundInitialized","tileBackgroundUpdating"]})],b.prototype,"updating",null);return b=x([p.subclass("esri.views.3d.terrain.TerrainRenderer")],b)}(p.declared(Y));var V=P.mat4f64.create(),H=t.vec3f64.create(),ka=t.vec3f64.create(),la=t.vec3f64.create(),
G=t.vec3f64.create(),na=t.vec3f64.create(),ma="TerrainRenderer";return m});