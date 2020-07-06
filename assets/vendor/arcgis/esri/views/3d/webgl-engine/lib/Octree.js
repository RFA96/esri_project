// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/ObjectPool ../../../../core/PooledArray ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../support/geometryUtils ./Util".split(" "),function(G,R,O,v,n,f,p,H){function z(c,a,b){b=b||c;b[0]=c[0]+a;b[1]=c[1]+a;b[2]=c[2]+a;return b}function A(c,a,b){return!p.frustum.intersectsSphere(b.planes,p.sphere.wrap(a,c))}function P(c,a,b){if(!w.length)for(var d=0;8>d;++d)w.push({index:0,distance:0});for(d=0;8>d;++d){var e=I[d];w.data[d].index=
d;w.data[d].distance=x(c,a,e)}w.sort(function(a,b){return a.distance-b.distance});b.clear();for(d=0;8>d;++d)b.push(w.data[d].index)}function C(c,a){for(var b=Infinity,d=null,e=0;8>e;++e){var q=x(c,a,J[e]);q<b&&(b=q,d=J[e])}return d}function x(c,a,b){return a*(c[0]*b[0]+c[1]*b[1]+c[2]*b[2])}function K(c){if(Array.isArray(c))return c;D[0]=c;return D}G=function(){function c(a,b){this._maximumObjectsPerNode=10;this._maximumDepth=20;this._degenerateObjects=new Set;this._objectCount=0;this._objectToBoundingSphere=
a;b&&(void 0!==b.maximumObjectsPerNode&&(this._maximumObjectsPerNode=b.maximumObjectsPerNode),void 0!==b.maximumDepth&&(this._maximumDepth=b.maximumDepth));this._root=new g(null,f.vec3f64.fromValues(0,0,0),0)}Object.defineProperty(c.prototype,"center",{get:function(){return this._root.center},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"size",{get:function(){return 2*this._root.halfSize},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"root",{get:function(){return this._root.node},
enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"maximumObjectsPerNode",{get:function(){return this._maximumObjectsPerNode},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"maximumDepth",{get:function(){return this._maximumDepth},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"objectCount",{get:function(){return this._objectCount},enumerable:!0,configurable:!0});c.prototype.destroy=function(){this._degenerateObjects.clear();this._root=null;g.clearPool();
D[0]=null;t.prune();w.prune();E.prune()};c.prototype.add=function(a,b){a=K(a);b=null==b?a.length:b;this._objectCount+=b;this._grow(a,b);for(var d=g.acquire(),e=0;e<b;e++){var c=a[e];this._isDegenerate(c)?this._degenerateObjects.add(c):(d.init(this._root),this._add(c,d))}g.release(d)};c.prototype.remove=function(a,b){a=K(a);this._objectCount-=a.length;for(var d=g.acquire(),e=0;e<a.length;e++){var c=a[e],k=b||this._boundingSphereFromObject(c,L);this._isValidRadius(k.radius)?(d.init(this._root),this._remove(c,
k,d)):this._degenerateObjects.delete(c)}g.release(d);this._shrink()};c.prototype.update=function(a,b){if(this._isValidRadius(b.radius)||!this._isDegenerate(a))this.remove(a,b),this.add(a)};c.prototype.forEachAlongRay=function(a,b,d){var e=this,c=p.ray.wrap(a,b);this._forEachNode(this._root,function(a){if(!e._intersectsNode(c,a))return!1;a=a.node;a.terminals.forEach(function(a){e._intersectsObject(c,a)&&d(a)});null!==a.residents&&a.residents.forEach(function(a){e._intersectsObject(c,a)&&d(a)});return!0})};
c.prototype.forEachAlongRayWithVerticalOffset=function(a,b,d,e){var c=this,k=p.ray.wrap(a,b);this._forEachNode(this._root,function(a){if(!c._intersectsNodeWithOffset(k,a,e))return!1;a=a.node;a.terminals.forEach(function(a){c._intersectsObjectWithOffset(k,a,e)&&d(a)});null!==a.residents&&a.residents.forEach(function(a){c._intersectsObjectWithOffset(k,a,e)&&d(a)});return!0})};c.prototype.forEach=function(a){this._forEachNode(this._root,function(b){b=b.node;b.terminals.forEach(a);null!==b.residents&&
b.residents.forEach(a);return!0});this._degenerateObjects.forEach(a)};c.prototype.forEachDegenerateObject=function(a){this._degenerateObjects.forEach(a)};c.prototype.findClosest=function(a,b,d,c,q){return this._findClosest(a,"front-to-back"===b?1:-1,d,c,q)};c.prototype.forEachInDepthRange=function(a,b,d,c,q,k,h,f){this._forEachInDepthRange(a,b,"front-to-back"===d?1:-1,c,q,k,h,f)};c.prototype.forEachNode=function(a){this._forEachNode(this._root,function(b){return a(b.node,b.center,2*b.halfSize)})};
c.prototype._intersectsNode=function(a,b){z(b.center,2*-b.halfSize,l);z(b.center,2*b.halfSize,m);return H.rayBoxTest(a.origin,a.direction,l,m)};c.prototype._intersectsNodeWithOffset=function(a,b,d){z(b.center,2*-b.halfSize,l);z(b.center,2*b.halfSize,m);d.applyToMinMax(l,m);return H.rayBoxTest(a.origin,a.direction,l,m)};c.prototype._intersectsObject=function(a,b){var d=this._objectToBoundingSphere.getRadius(b);return 0<d?p.sphere.intersectsRay(p.sphere.wrap(d,this._objectToBoundingSphere.getCenter(b)),
a):!0};c.prototype._intersectsObjectWithOffset=function(a,b,d){var c=this._objectToBoundingSphere.getRadius(b);return 0<c?p.sphere.intersectsRay(d.applyToBoundingSphere(c,this._objectToBoundingSphere.getCenter(b)),a):!0};c.prototype._forEachNode=function(a,b){a=g.acquire().init(a);for(var d=[a];0!==d.length;){a=d.pop();if(b(a)&&!a.isLeaf())for(var c=0;c<a.node.children.length;c++)a.node.children[c]&&d.push(g.acquire().init(a).advance(c));g.release(a)}};c.prototype._forEachNodeDepthOrdered=function(a,
b,d,c){void 0===c&&(c=1);a=g.acquire().init(a);var e=[a];for(P(d,c,E);0!==e.length;){a=e.pop();if(b(a)&&!a.isLeaf())for(d=7;0<=d;--d)c=E.data[d],c>=a.node.children.length||a.node.children[c]&&e.push(g.acquire().init(a).advance(c));g.release(a)}};c.prototype._findClosest=function(a,b,c,e,q){var d=this,h=Infinity,f=Infinity,g=null,l=C(a,b),m=0,p=function(q){++m;if(!e||e(q)){var k=d._objectToBoundingSphere.getCenter(q),u=d._objectToBoundingSphere.getRadius(q);if(!c||!A(k,u,c)){var k=x(a,b,k),l=k-u;l<
h&&(h=l,f=k+u,g=q)}}};this._forEachNodeDepthOrdered(this._root,function(d){if(null!=q&&m>=q||c&&A(d.center,d.halfSize*M,c))return!1;n.vec3.scale(r,l,d.halfSize);n.vec3.add(r,r,d.center);if(x(a,b,r)>f)return!1;d=d.node;d.terminals.forEach(function(a){p(a)});null!==d.residents&&d.residents.forEach(function(a){p(a)});return!0},a,b);return g};c.prototype._forEachInDepthRange=function(a,b,d,c,q,k,h,f){var e=this,g=-Infinity,u=Infinity,l={setRange:function(a){1===d?(g=Math.max(g,a.near),u=Math.min(u,a.far)):
(g=Math.max(g,-a.far),u=Math.min(u,-a.near))}};l.setRange(c);var m=x(b,d,a),p=C(b,d),w=C(b,-1*d),t=0,v=function(a){++t;if(!h||h(a)){var c=e._objectToBoundingSphere.getCenter(a),f=e._objectToBoundingSphere.getRadius(a),n=x(b,d,c)-m;n-f>u||n+f<g||k&&A(c,f,k)||q(a,l)}};this._forEachNodeDepthOrdered(this._root,function(a){if(null!=f&&t>=f||k&&A(a.center,a.halfSize*M,k))return!1;n.vec3.scale(r,p,a.halfSize);n.vec3.add(r,r,a.center);if(x(b,d,r)-m>u)return!1;n.vec3.scale(r,w,a.halfSize);n.vec3.add(r,r,a.center);
if(x(b,d,r)-m<g)return!1;a=a.node;a.terminals.forEach(function(a){v(a)});null!==a.residents&&a.residents.forEach(function(a){v(a)});return!0},b,d)};c.prototype._remove=function(a,b,c){t.clear();b=c.advanceTo(b,function(a,b){t.push(a.node);t.push(b)})?c.node.terminals:c.node.residents;b.removeUnordered(a);if(0===b.length)for(a=t.length-2;0<=a&&this._purge(t.data[a],t.data[a+1]);a-=2);};c.prototype._nodeIsEmpty=function(a){if(0!==a.terminals.length)return!1;if(null!==a.residents)return 0===a.residents.length;
for(var b=0;b<a.children.length;b++)if(a.children[b])return!1;return!0};c.prototype._purge=function(a,b){0<=b&&(a.children[b]=null);return this._nodeIsEmpty(a)?(null===a.residents&&(a.residents=new v({shrink:!0})),!0):!1};c.prototype._add=function(a,b){b.advanceTo(this._boundingSphereFromObject(a,L))?b.node.terminals.push(a):(b.node.residents.push(a),b.node.residents.length>this._maximumObjectsPerNode&&b.depth<this._maximumDepth&&this._split(b))};c.prototype._split=function(a){var b=a.node.residents;
a.node.residents=null;for(var c=0;c<b.length;c++){var e=g.acquire().init(a);this._add(b.data[c],e);g.release(e)}};c.prototype._grow=function(a,b){var c=this;0!==b&&(a=this._boundingSphereFromObjects(a,b,function(a,b){return c._boundingSphereFromObject(a,b)},y),this._isValidRadius(a.radius)&&!this._fitsInsideTree(a)&&(this._nodeIsEmpty(this._root.node)?(n.vec3.copy(this._root.center,a.center),this._root.halfSize=1.25*a.radius):(b=g.acquire(),this._rootBoundsForRootAsSubNode(a,b),this._placingRootViolatesMaxDepth(b)?
this._rebuildTree(a,b):this._growRootAsSubNode(b),g.release(b))))};c.prototype._rebuildTree=function(a,b){var c=this;n.vec3.copy(F.center,b.center);F.radius=b.halfSize;a=this._boundingSphereFromObjects([a,F],2,function(a){return a},Q);b=g.acquire().init(this._root);this._root.initFrom(null,a.center,1.25*a.radius);this._forEachNode(b,function(a){c.add(a.node.terminals.data,a.node.terminals.length);null!==a.node.residents&&c.add(a.node.residents.data,a.node.residents.length);return!0});g.release(b)};
c.prototype._placingRootViolatesMaxDepth=function(a){var b=0;this._forEachNode(this._root,function(a){b=Math.max(b,a.depth);return!0});return b+Math.log(a.halfSize/this._root.halfSize)*Math.LOG2E>this._maximumDepth};c.prototype._rootBoundsForRootAsSubNode=function(a,b){var c=a.radius,e=a.center;a=-Infinity;for(var f=this._root.center,k=this._root.halfSize,h=0;3>h;h++){var g=Math.max(0,Math.ceil((f[h]-k-(e[h]-c))/(2*k))),l=Math.max(0,Math.ceil((e[h]+c-(f[h]+k))/(2*k)))+1;a=Math.max(a,Math.pow(2,Math.ceil(Math.log(g+
l)*Math.LOG2E)));B[h].min=g;B[h].max=l}for(h=0;3>h;h++)g=B[h].min,l=B[h].max,c=(a-(g+l))/2,g+=Math.ceil(c),l+=Math.floor(c),N[h]=f[h]-k-g*k*2+(l+g)*k;return b.initFrom(null,N,a*k,0)};c.prototype._growRootAsSubNode=function(a){var b=this._root.node;n.vec3.copy(y.center,this._root.center);y.radius=this._root.halfSize;this._root.init(a);a.advanceTo(y,null,!0);a.node.children=b.children;a.node.residents=b.residents;a.node.terminals=b.terminals};c.prototype._shrink=function(){for(;;){var a=this._findShrinkIndex();
if(-1===a)break;this._root.advance(a);this._root.depth=0}};c.prototype._findShrinkIndex=function(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;for(var a=null,b=this._root.node.children,c=0,e=0;e<b.length&&null==a;)c=e++,a=b[c];for(;e<b.length;)if(b[e++])return-1;return c};c.prototype._isDegenerate=function(a){a=this._objectToBoundingSphere.getRadius(a);return!this._isValidRadius(a)};c.prototype._isValidRadius=function(a){return!isNaN(a)&&-Infinity!==a&&Infinity!==a&&0<a};
c.prototype._fitsInsideTree=function(a){var b=this._root.center,c=this._root.halfSize,e=a.center;return a.radius<=c&&e[0]>=b[0]-c&&e[0]<=b[0]+c&&e[1]>=b[1]-c&&e[1]<=b[1]+c&&e[2]>=b[2]-c&&e[2]<=b[2]+c};c.prototype._boundingSphereFromObject=function(a,b){n.vec3.copy(b.center,this._objectToBoundingSphere.getCenter(a));b.radius=this._objectToBoundingSphere.getRadius(a);return b};c.prototype._boundingSphereFromObjects=function(a,b,c,e){if(1===b){var d=c(a[0],y);n.vec3.copy(e.center,d.center);e.radius=
d.radius}else{l[0]=Infinity;l[1]=Infinity;l[2]=Infinity;m[0]=-Infinity;m[1]=-Infinity;m[2]=-Infinity;for(var f=0;f<b;f++)if(d=c(a[f],y),this._isValidRadius(d.radius)){var h=l,g=d.center,p=d.radius;h[0]=Math.min(h[0],g[0]-p);h[1]=Math.min(h[1],g[1]-p);h[2]=Math.min(h[2],g[2]-p);h=m;g=d.center;d=d.radius;h[0]=Math.max(h[0],g[0]+d);h[1]=Math.max(h[1],g[1]+d);h[2]=Math.max(h[2],g[2]+d)}n.vec3.lerp(e.center,l,m,.5);e.radius=Math.max(m[0]-l[0],m[1]-l[1],m[2]-l[2])/2}return e};return c}();var g=function(){function c(a,
b,c){void 0===c&&(c=0);this.center=f.vec3f64.create();this.initFrom(a,b,c,0)}c.prototype.init=function(a){return this.initFrom(a.node,a.center,a.halfSize,a.depth)};c.prototype.initFrom=function(a,b,d,e){void 0===a&&(a=null);void 0===d&&(d=this.halfSize);void 0===e&&(e=this.depth);this.node=a||c.createEmptyNode();b&&n.vec3.copy(this.center,b);this.halfSize=d;this.depth=e;return this};c.prototype.advance=function(a){var b=this.node.children[a];b||(b=c.createEmptyNode(),this.node.children[a]=b);this.node=
b;this.halfSize/=2;this.depth++;a=I[a];this.center[0]+=a[0]*this.halfSize;this.center[1]+=a[1]*this.halfSize;this.center[2]+=a[2]*this.halfSize;return this};c.prototype.advanceTo=function(a,b,c){for(void 0===c&&(c=!1);;){if(this.isTerminalFor(a))return b&&b(this,-1),!0;if(this.isLeaf()&&!c)return b&&b(this,-1),!1;this.isLeaf()&&(this.node.residents=null);var d=this._childIndex(a);b&&b(this,d);this.advance(d)}};c.prototype.isLeaf=function(){return null!=this.node.residents};c.prototype.isTerminalFor=
function(a){return a.radius>this.halfSize/2};c.prototype._childIndex=function(a){a=a.center;for(var b=this.center,c=0,e=0;3>e;e++)b[e]<a[e]&&(c|=1<<e);return c};c.createEmptyNode=function(){return{children:[null,null,null,null,null,null,null,null],terminals:new v({shrink:!0}),residents:new v({shrink:!0})}};c.acquire=function(){return c._pool.acquire()};c.release=function(a){c._pool.release(a)};c.clearPool=function(){c._pool.prune()};c._pool=new O(c);return c}(),I=[f.vec3f64.fromValues(-1,-1,-1),f.vec3f64.fromValues(1,
-1,-1),f.vec3f64.fromValues(-1,1,-1),f.vec3f64.fromValues(1,1,-1),f.vec3f64.fromValues(-1,-1,1),f.vec3f64.fromValues(1,-1,1),f.vec3f64.fromValues(-1,1,1),f.vec3f64.fromValues(1,1,1)],J=[f.vec3f64.fromValues(-1,-1,-1),f.vec3f64.fromValues(-1,-1,1),f.vec3f64.fromValues(-1,1,-1),f.vec3f64.fromValues(-1,1,1),f.vec3f64.fromValues(1,-1,-1),f.vec3f64.fromValues(1,-1,1),f.vec3f64.fromValues(1,1,-1),f.vec3f64.fromValues(1,1,1)],M=Math.sqrt(3),D=[null],N=f.vec3f64.create(),r=f.vec3f64.create(),l=f.vec3f64.create(),
m=f.vec3f64.create(),t=new v,L={center:f.vec3f64.create(),radius:0},y={center:f.vec3f64.create(),radius:0},F={center:f.vec3f64.create(),radius:0},Q={center:f.vec3f64.create(),radius:0},B=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],w=new v,E=new v;return G});