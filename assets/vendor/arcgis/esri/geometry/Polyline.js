// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/lang ../core/accessorSupport/decorators ./Extent ./Geometry ./Point ./SpatialReference ./support/extentUtils ./support/zmUtils".split(" "),function(e,v,p,k,m,g,q,r,h,t,u,n){e=function(e){function d(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];a=e.apply(this,a)||this;a.paths=[];a.type="polyline";return a}p(d,e);l=d;d.prototype.normalizeCtorArgs=function(a,b){var c=null,d,f,e=null;
a&&!Array.isArray(a)?(c=a.paths?a.paths:null,b||(a.spatialReference?b=a.spatialReference:a.paths||(b=a)),d=a.hasZ,f=a.hasM):c=a;c=c||[];b=b||t.WGS84;c.length&&c[0]&&null!=c[0][0]&&"number"===typeof c[0][0]&&(c=[c]);if(e=c[0]&&c[0][0])void 0===d&&void 0===f?(d=2<e.length,f=!1):void 0===d?d=!f&&3<e.length:void 0===f&&(f=!d&&3<e.length);return{paths:c,spatialReference:b,hasZ:d,hasM:f}};Object.defineProperty(d.prototype,"extent",{get:function(){var a=this.spatialReference,b=u.getPolylineExtent(this);
if(!b)return null;b=new q(b);b.spatialReference=a;return b},enumerable:!0,configurable:!0});d.prototype.writePaths=function(a,b){b.paths=m.clone(this.paths)};d.prototype.addPath=function(a){if(a){this.clearCache();var b=this.paths,c=b.length;if(Array.isArray(a[0]))b[c]=a.concat();else{for(var d=[],f=0,e=a.length;f<e;f++)d[f]=a[f].toArray();b[c]=d}return this}};d.prototype.clone=function(){var a=new l;a.spatialReference=this.spatialReference;a.paths=m.clone(this.paths);a.hasZ=this.hasZ;a.hasM=this.hasM;
return a};d.prototype.getPoint=function(a,b){if(!this._validateInputs(a,b))return null;a=this.paths[a][b];b=this.hasZ;var c=this.hasM;return b&&!c?new h(a[0],a[1],a[2],void 0,this.spatialReference):c&&!b?new h(a[0],a[1],void 0,a[2],this.spatialReference):b&&c?new h(a[0],a[1],a[2],a[3],this.spatialReference):new h(a[0],a[1],this.spatialReference)};d.prototype.insertPoint=function(a,b,c){if(!this._validateInputs(a,b,!0))return this;this.clearCache();n.updateSupportFromPoint(this,c);Array.isArray(c)||
(c=c.toArray());this.paths[a].splice(b,0,c);return this};d.prototype.removePath=function(a){if(!this._validateInputs(a,null))return null;this.clearCache();a=this.paths.splice(a,1)[0];var b=this.spatialReference;return a.map(function(a){return new h(a,b)})};d.prototype.removePoint=function(a,b){if(!this._validateInputs(a,b))return null;this.clearCache();return new h(this.paths[a].splice(b,1)[0],this.spatialReference)};d.prototype.setPoint=function(a,b,c){if(!this._validateInputs(a,b))return this;this.clearCache();
n.updateSupportFromPoint(this,c);Array.isArray(c)||(c=c.toArray());this.paths[a][b]=c;return this};d.prototype._validateInputs=function(a,b,c){void 0===c&&(c=!1);return null==a||0>a||a>=this.paths.length||null!=b&&(a=this.paths[a],c&&(0>b||b>a.length)||!c&&(0>b||b>=a.length))?!1:!0};d.prototype.toJSON=function(a){return this.write(null,a)};var l;k([g.property({dependsOn:["hasM","hasZ","paths"]})],d.prototype,"cache",void 0);k([g.property({dependsOn:["cache"],readOnly:!0})],d.prototype,"extent",null);
k([g.property({type:[[[Number]]],json:{write:{isRequired:!0}}})],d.prototype,"paths",void 0);k([g.writer("paths")],d.prototype,"writePaths",null);return d=l=k([g.subclass("esri.geometry.Polyline")],d)}(g.declared(r));e.prototype.toJSON.isDefaultToJSON=!0;return e});