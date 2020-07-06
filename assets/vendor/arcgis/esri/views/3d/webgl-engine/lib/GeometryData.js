// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","./ComponentUtils","./geometryDataUtils","./Util"],function(d,e,n,m,c){Object.defineProperty(e,"__esModule",{value:!0});d=function(){function a(f,b,h,k){void 0===b&&(b=a.DefaultIndices);void 0===h&&(h=a.DefaultOffsets);void 0===k&&(k="triangle");var g={},l;for(l in f){var d=f[l],e=d.size;g[l]={data:d.data,size:e,offsetIdx:0,strideIdx:e}}if(b===a.DefaultIndices){b=c.getFirstObjectValue(g);b=null==b?0:b.data.length/b.size;f=m.generateDefaultIndexArray(b);b={};for(var p in g)b[p]=
f}this._id=m.getNewId();this._vertexAttributes=g;this._indices=b;this._componentOffsets=n.createOffsets(h);this._primitiveType=k}Object.defineProperty(a.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"vertexAttributes",{get:function(){return this._vertexAttributes},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"indices",{get:function(){return this._indices},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"componentOffsets",{get:function(){return this._componentOffsets},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"indexCount",{get:function(){var a=c.getFirstObjectValue(this._indices);return null==a?0:a.length},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"primitiveType",{get:function(){return this._primitiveType},enumerable:!0,configurable:!0});a.prototype.getVertexAttr=function(){return this.vertexAttributes};a.prototype.toRenderData=function(){return{id:this._id.toString(),
indices:this._indices,vertexAttr:this._vertexAttributes}};a.prototype.getIndices=function(a){return this._indices[a]};a.prototype.getAttribute=function(a){return this._vertexAttributes[a]};a.prototype.estimateGpuMemoryUsage=function(){var a=0;this._indices[c.VertexAttrConstants.POSITION]&&(a+=12*this._indices[c.VertexAttrConstants.POSITION].length);this._indices[c.VertexAttrConstants.NORMAL]&&(a+=12*this._indices[c.VertexAttrConstants.NORMAL].length);this._indices[c.VertexAttrConstants.UV0]&&(a+=
8*this._indices[c.VertexAttrConstants.UV0].length);this._indices[c.VertexAttrConstants.COLOR]&&(a+=4*this._indices[c.VertexAttrConstants.COLOR].length);return a};a.DefaultIndices={};a.DefaultOffsets=new Uint32Array(0);return a}();e.GeometryData=d});