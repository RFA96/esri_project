// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../has ../../lang ../../Logger ../metadata".split(" "),function(h,c,k,f,g,e){Object.defineProperty(c,"__esModule",{value:!0});g.getLogger("esri.core.accessorSupport.decorators.property");c.property=function(a){void 0===a&&(a={});return function(b,d){var c=b.constructor.prototype;c!==Function.prototype&&((b=Object.getOwnPropertyDescriptor(b,d))&&(b.get||b.set)?(a=f.clone(a),b.set&&(a.set=b.set),b.get&&(a.get=b.get)):b&&b.hasOwnProperty("value")&&(a=f.clone(a),a.value=b.value),
d=e.getPropertyMetadata(c,d),e.mergeProperty(d,a))}};c.propertyJSONMeta=function(a,b,c){a=e.getPropertyMetadata(a.constructor.prototype,c);a.json||(a.json={});a=a.json;void 0!==b&&(a.origins||(a.origins={}),a.origins[b]||(a.origins[b]={}),a=a.origins[b]);return a}});