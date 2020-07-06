// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ./graphicUtils ../../webgl-engine/lib/ComponentUtils".split(" "),function(m,x,y,r,t,u,n,g,v,w,p){m=function(){function b(a,c,f){this.graphics3DSymbolLayer=a;this.renderGeometries=c;this.boundingBox=
f;this.type="draped";this.stage=null;this._addedToStage=this._visible=!1;this._layerView=null;this.isElevationSource=!1}b.prototype.initialize=function(a,c,f){this.stage=a;this._layerView=f;this._overlayRenderer=this._layerView.view.basemapTerrain.overlayManager.renderer};b.prototype.setVisibility=function(a){if(null!=this.stage){if(this._visible!==a){if((this._visible=a)&&!this._addedToStage)return this._addedToStage=!0,this._overlayRenderer.addGeometries(this.renderGeometries,this._layerView,0),
!0;if(!a&&!this._addedToStage)return!1;for(var c=0,f=this.renderGeometries;c<f.length;c++){var b=f[c],d=b.instanceParameters.componentVisibilities,d=a?p.unhideAllComponents(d):p.hideAllComponents(d);b.instanceParameters.componentVisibilities=d}this._overlayRenderer.updateGeometries(this.renderGeometries,this._layerView,1);return!0}return!1}};b.prototype.destroy=function(){this.stage&&this._addedToStage&&this._overlayRenderer.removeGeometries(this.renderGeometries,this._layerView,1);this._visible=
this._addedToStage=!1;this.stage=null};b.prototype.getBSRadius=function(){return this.renderGeometries.reduce(function(a,c){return Math.max(a,c.bsRadius)},0)};b.prototype.getCenterObjectSpace=function(a){void 0===a&&(a=n.vec3f64.create());return u.vec3.set(a,0,0,0)};b.prototype.getBoundingBoxObjectSpace=function(a){void 0===a&&(a=g.create());return g.empty(a)};b.prototype.addObjectState=function(a,c){var b=this;0===a&&(this.renderGeometries.forEach(function(a){var d=a.addHighlight();c.addRenderGeometry(a,
d,b)}),this._addedToStage&&this._overlayRenderer.updateHighlights(this.renderGeometries,this._layerView))};b.prototype.removeObjectState=function(a){this.renderGeometries.forEach(function(c){a.removeRenderGeometry(c)})};b.prototype.removeRenderGeometryObjectState=function(a,c){a.removeHighlight(c);this._addedToStage&&this._overlayRenderer.updateHighlights(this.renderGeometries,this._layerView)};b.prototype.computeAttachmentOrigin=function(a){for(var c=0,b=this.renderGeometries;c<b.length;c++)b[c].computeAttachmentOrigin(h)&&
(a.draped.origin[0]+=h[0],a.draped.origin[1]+=h[1],a.draped.num++)};b.prototype.getProjectedBoundingBox=function(a,c,b,e,d){return t(this,void 0,void 0,function(){var f,m,k,n;return r(this,function(l){switch(l.label){case 0:g.empty(d);for(f=0;f<this.renderGeometries.length;f++)m=this.renderGeometries[f],this._getRenderGeometryProjectedBoundingRect(m,a,q,b),g.expand(d,q);if(!c)return[3,5];g.center(d,h);k=void 0;n=w.demResolutionForBoundingBox(d,c);l.label=1;case 1:return l.trys.push([1,3,,4]),[4,c.service.queryElevation(h[0],
h[1],e,n)];case 2:return k=l.sent(),[3,4];case 3:return l.sent(),k=null,[3,4];case 4:null!=k&&(d[2]=Math.min(d[2],k),d[5]=Math.max(d[5],k)),l.label=5;case 5:return[2,d]}})})};b.prototype._getRenderGeometryProjectedBoundingRect=function(a,c,b,h){if(this.boundingBox)g.set(e,this.boundingBox);else{var d=a.center;a=a.bsRadius;e[0]=d[0]-a;e[1]=d[1]-a;e[2]=d[2]-a;e[3]=d[0]+a;e[4]=d[1]+a;e[5]=d[2]+a}c(e,0,2);this.calculateRelativeScreenBounds&&h.push({location:g.center(e),screenSpaceBoundingRect:this.calculateRelativeScreenBounds()});
return g.toRect(e,b)};return b}();var q=v.create(),e=g.create(),h=n.vec3f64.create();return m});