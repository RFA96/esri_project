// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/paramHelper ../core/tsSupport/assignHelper ../request ../core/accessorSupport/decorators ./Task ./operations/find ./support/FindParameters ./support/FindResult".split(" "),function(q,r,h,e,t,f,k,d,l,m,n,p){return function(g){function b(a){a=g.call(this,a)||this;a.gdbVersion=null;a.url=null;return a}h(b,g);b.prototype.execute=function(a,b){a=this._normalizeParams(a);var c=m.findToFindRESTParameters(a);
a=this._parseUrl(this.url);a.path+="/find";c=this._encode(f({},a.query,{f:"json"},c));this.gdbVersion&&(c.gdbVersion=this.gdbVersion);c={query:c};if(this.requestOptions||b)c=f({},this.requestOptions,b,c);return k(a.path,c).then(this._handleExecuteResponse)};b.prototype._handleExecuteResponse=function(a){a=a.data;a.results=a.results||[];var b={results:[]};b.results=a.results.map(function(a){return p.fromJSON(a)});return b};b.prototype._normalizeParams=function(a){return a=n.from(a)};e([d.property()],
b.prototype,"gdbVersion",void 0);e([d.property()],b.prototype,"url",void 0);return b=e([d.subclass("esri.tasks.FindTask")],b)}(d.declared(l))});