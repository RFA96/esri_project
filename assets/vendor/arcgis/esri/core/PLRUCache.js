// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","./mathUtils","./maybe"],function(f,h,k,l){Object.defineProperty(h,"__esModule",{value:!0});f=function(){function c(a){this._size=a;this._levels=k.log2(this._size);this._index=new Uint8Array(Math.ceil(a/8));this._data=Array(a);this._lookupTable=new Map}c.prototype.with=function(a,b){return this.has(b)?this.get(b):this.set(b,a(b))};c.prototype.has=function(a){return this._lookupTable.has(a)};c.prototype.get=function(a){a=this._lookupTable.get(a);a=this._getData(a);return"object"===
typeof a?a:null};c.prototype.set=function(a,b){var d=this._freeIndex();a=this._data[d]=l.isSome(b)?b:a;this._lookupTable.set("object"===typeof a?a.cacheKey:a,d);return b};c.prototype.clear=function(){for(var a=0;a<this._index.length;a++)this._index[a]=0;for(a=0;a<this._data.length;a++)this._data[a]=null;this._lookupTable.clear()};c.prototype._getData=function(a){for(var b=Math.floor(((1<<this._levels)-1+a)/2),d=this._levels-1;0<=d;d--){var c=this._index,e=Math.floor(b/8);c[e]|=1<<b-8*e;b=Math.floor(b/
2)}return this._data[a]};c.prototype._freeIndex=function(){for(var a=0,b=0,d=0;d<this._levels;d++){var b=this._index,c=Math.floor(a/8),e=a-8*c,f=b[c],g=1<<e,e=(f&g)>>e;b[c]=f&~g|g*(1-e);b=e;a=2*a+1+b}a-=(1<<this._levels)-1;(d=this._data[a])&&this._lookupTable.delete("object"===typeof d?d.cacheKey:d);return a};return c}();h.PLRUCache=f});