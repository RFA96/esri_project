// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../geometry ../core/Error ../core/promiseUtils ../core/accessorSupport/decorators ../geometry/support/aaBoundingRect ./Layer ./support/TileInfo".split(" "),function(k,r,l,c,t,u,f,m,n,b,p,q,h){var e={id:"0/0/0",level:0,row:0,col:0,extent:null};return function(g){function a(){var a=null!==g&&g.apply(this,arguments)||this;a.tileInfo=h.create({spatialReference:f.SpatialReference.WebMercator,
size:256});a.fullExtent=new f.Extent(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,f.SpatialReference.WebMercator);a.spatialReference=f.SpatialReference.WebMercator;a.type="base-elevation";return a}l(a,g);a.prototype.getTileBounds=function(a,b,c,d){d=d||p.ZERO;e.level=a;e.row=b;e.col=c;e.extent=d;this.tileInfo.updateTileInfo(e);e.extent=null;return d};a.prototype.fetchTile=function(){throw new m("BaseElevationLayer:fetchtile-not-implemented","fetchTile() is not implemented");
};a.prototype.queryElevation=function(a,b){var c=this;return this._importElevationQuery().then(function(d){return(new d.ElevationQuery).query(c,a,b)})};a.prototype.createElevationSampler=function(a,b){var c=this;return this._importElevationQuery().then(function(d){return(new d.ElevationQuery).createSampler(c,a,b)})};a.prototype._importElevationQuery=function(){return n.create(function(a){k(["./support/ElevationQuery"],a)})};c([b.property({type:h})],a.prototype,"tileInfo",void 0);c([b.property({type:["show",
"hide"]})],a.prototype,"listMode",void 0);c([b.property()],a.prototype,"fullExtent",void 0);c([b.property()],a.prototype,"spatialReference",void 0);c([b.property({readOnly:!0,value:"base-elevation"})],a.prototype,"type",void 0);return a=c([b.subclass("esri.layers.BaseElevationLayer")],a)}(b.declared(q))});