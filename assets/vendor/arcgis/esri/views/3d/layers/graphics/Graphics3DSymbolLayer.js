// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../Color ../../../../core/arrayUtils ../../../../core/compilerUtils ../../../../core/Logger ../../../../core/mathUtils ../../../../core/maybe ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4f64 ./elevationAlignmentUtils ./ElevationContext ./featureExpressionInfoUtils ./graphicUtils ./Loadable ./symbolComplexity".split(" "),
function(n,f,w,H,I,x,y,z,A,t,g,B,C,p,u,q,r,D,E){function k(c,b){c=null!=c?b.attributes[c]:0;return null!=c&&isFinite(c)?c:0}Object.defineProperty(f,"__esModule",{value:!0});var c=new u,l=A.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayer");n=function(f){function b(a,d,m,b){var e=f.call(this)||this;e._elevationInfoOverride=null;e.complexity=null;e.logger=l;e._elevationOptions={supportsOffsetAdjustment:!1,supportsOnTheGround:!0};e.symbol=a;e.symbolLayer=d;e._context=m;e._renderPriority=
b.renderPriority;e._renderPriorityDelta=b.renderPriorityStep;e._elevationContext=new u;e.complexity=e.computeComplexity();e._updateDrivenProperties(b.ignoreDrivers);e._updateElevationContext();return e}w(b,f);b.prototype.getCachedSize=function(){return null};Object.defineProperty(b.prototype,"needsDrivenTransparentPass",{get:function(){return this._drivenProperties.opacity&&!this._drivenProperties.opacityAlwaysOpaque},enumerable:!0,configurable:!0});b.prototype._logGeometryCreationWarnings=function(a,
d,b,c){var m="polygons"in a?a.polygons:null;c+=" geometry failed to be created";var h=null;a.projectionSuccess?!d.length||1===d.length&&!d[0].length?h=c+" (no "+b+" were defined)":Array.isArray(d)&&Array.isArray(d[0])?d.some(function(a){return 1===a.length})?h=c+" ("+b+" should contain at least 2 vertices)":m&&0===m.length&&"rings"===b&&(h=c+" (filled "+b+" should use clockwise winding - try reversing the order of vertices)"):h=c+" ("+b+" should be defined as a 2D array)":h=c+" (failed to project geometry to view spatial reference)";
h&&l.warnOncePerTick(h)};b.prototype._validateGeometryType=function(a,d,b){if(y.includes(d,a.type))return!0;this.logger.warn("unsupported geometry type for "+b+(" symbol: "+a.type));return!1};b.prototype._validateGeometry=function(a){return"point"!==a.type||t.isFinite(a.x)&&t.isFinite(a.y)?!0:(l.warn("point coordinate is not a valid number, graphic skipped"),!1)};b.prototype._defaultElevationInfoNoZ=function(){return F};b.prototype._defaultElevationInfoZ=function(){return G};b.prototype._updateElevationContext=
function(){g.isSome(this._elevationInfoOverride)?(this._elevationContext.setFromElevationInfo(this._elevationInfoOverride),this._elevationContext.featureExpressionInfoContext=null):this._context.layer.elevationInfo?(this._elevationContext.setFromElevationInfo(this._context.layer.elevationInfo),this._elevationContext.featureExpressionInfoContext=this._context.featureExpressionInfoContext):this._elevationContext.setDefaults()};b.prototype.getDefaultElevationInfo=function(a){return a.hasZ?this._defaultElevationInfoZ():
this._defaultElevationInfoNoZ()};b.prototype.getGeometryElevationMode=function(a,d){void 0===d&&(d=this.getDefaultElevationInfo(a));return this._elevationContext.mode||d.mode};b.prototype.setElevationInfoOverride=function(a){this._elevationInfoOverride=a;this._updateElevationContext()};b.prototype.getGraphicElevationContext=function(a){var d=g.expect(a.geometry),b=this.getDefaultElevationInfo(d);c.setUnit(null!=this._elevationContext.unit?this._elevationContext.unit:b.unit);c.mode=this.getGeometryElevationMode(d,
b);c.setOffsetMeters(g.unwrapOr(this._elevationContext.meterUnitOffset,g.unwrapOr(b.offset,0)));c.featureExpressionInfoContext=this._elevationContext.featureExpressionInfoContext;this._elevationOptions.supportsOnTheGround||"on-the-ground"!==c.mode||(c.mode="relative-to-ground",c.setOffsetMeters(0),c.featureExpressionInfoContext=q.zeroContext);if(d=c.featureExpressionInfoContext&&c.featureExpressionInfoContext.arcade)a=q.createFeature(d.modules,a,this._context.layer),q.setContextFeature(c.featureExpressionInfoContext,
a);return c};b.prototype.prepareSymbolLayerPatch=function(a){};b.prototype.updateGeometry=function(a,d){return!1};b.prototype.onRemoveGraphic=function(a){};b.prototype._updateDrivenProperties=function(a){var d={color:!1,opacity:!1,opacityAlwaysOpaque:!0,size:!1};a||(a=this._context.renderer)&&"visualVariables"in a&&a.visualVariables&&a.visualVariables.forEach(function(a){switch(a.type){case "color":d.color=!0;if(a.stops)for(var b=0;b<a.stops.length;b++){var c=a.stops[b].color;c&&(d.opacity=!0,1>c.a&&
(d.opacityAlwaysOpaque=!1))}break;case "opacity":d.opacity=!0;d.opacityAlwaysOpaque=!1;break;case "size":d.size=!0}});this._drivenProperties=d};b.prototype._getLayerOpacity=function(){if(this._context.layerView&&"fullOpacity"in this._context.layerView)return this._context.layerView.fullOpacity;var a=this._context.layer.opacity;return null==a?1:a};b.prototype._getCombinedOpacity=function(a,d){void 0===d&&(d=v);var b=1;this.draped||(b*=this._getLayerOpacity());if(this._drivenProperties.opacity)return b;
g.isSome(a)?b*=a.a:d.hasIntrinsicColor||(b=0);return b};b.prototype._getCombinedOpacityAndColor=function(a,b){void 0===b&&(b=v);b=this._getCombinedOpacity(a,b);if(this._drivenProperties.color)return r.mixinColorAndOpacity(null,b);a=g.isSome(a)?x.toUnitRGB(a):B.vec3f64.ONES;return r.mixinColorAndOpacity(a,b)};b.prototype._getVertexOpacityAndColor=function(a,b,c){a=r.mixinColorAndOpacity(this._drivenProperties.color?a.color:null,this._drivenProperties.opacity?a.opacity:null);c&&(a[0]*=c,a[1]*=c,a[2]*=
c,a[3]*=c);return b?new b(a):a};b.prototype._getIdHint=function(a){void 0===a&&(a="");return this._context.layer.id+"_symbol"+a};b.prototype.isFastUpdatesEnabled=function(){return this._fastUpdates&&this._fastUpdates.enabled};b.prototype.computeComplexity=function(){return E.defaultSymbolLayerComplexity(this.symbol,this.symbolLayer)};b.prototype.destroy=function(){this.abortLoad()};b.prototype.globalPropertyChanged=function(a,b,c){switch(a){case "opacity":return this.layerOpacityChanged(b,c);case "elevationInfo":return a=
this._elevationContext.mode,this._updateElevationContext(),this.layerElevationInfoChanged(b,c,a)===p.SymbolUpdateType.RECREATE?!1:!0;case "slicePlaneEnabled":return this.slicePlaneEnabledChanged(b,c);case "physicalBasedRenderingEnabled":return this.physicalBasedRenderingChanged();case "pixelRatio":return this.pixelRatioChanged();default:return z.neverReachedSilent(a),!1}};b.prototype.updateGraphics3DGraphicElevationInfo=function(a,b,c){var d=this,e=p.SymbolUpdateType.UPDATE;a.forEach(function(a){var f=
b(a);g.isSome(f)?(a=d.getGraphicElevationContext(a.graphic),f.needsElevationUpdates=c(a.mode),f.elevationContext.set(a)):e=p.SymbolUpdateType.RECREATE});return e};b.prototype.applyRendererDiff=function(a,b){return!1};b.prototype.getFastUpdateAttrValues=function(a){if(!this._fastUpdates.enabled)return null;var b=this._fastUpdates.visualVariables,c=b.size?k(b.size.field,a):0,f=b.color?k(b.color.field,a):0;a=b.opacity?k(b.opacity.field,a):0;return C.vec4f64.fromValues(c,f,a,0)};Object.defineProperty(b.prototype,
"draped",{get:function(){return this._draped},enumerable:!0,configurable:!0});b.prototype.ensureDrapedStatus=function(a){if(null==this._draped)return this._draped=a,!0;a!==this.draped&&l.warnOnce("A symbol can only produce either draped or non-draped visualizations. Use two separate symbol instances for draped and non-draped graphics if necessary.");return!1};return b}(D.Loadable);f.Graphics3DSymbolLayer=n;f.getAttributeValue=k;var F={mode:"on-the-ground",offset:0,unit:"meters"},G={mode:"absolute-height",
offset:0,unit:"meters"},v={hasIntrinsicColor:!1};f.default=n});