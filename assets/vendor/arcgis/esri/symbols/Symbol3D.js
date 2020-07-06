// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Collection ../core/collectionUtils ../core/jsonMap ../core/Logger ../core/urlUtils ../core/Warning ../core/accessorSupport/decorators ../portal/Portal ./ExtrudeSymbol3DLayer ./FillSymbol3DLayer ./IconSymbol3DLayer ./LineSymbol3DLayer ./ObjectSymbol3DLayer ./PathSymbol3DLayer ./Symbol ./Symbol3DLayer ./TextSymbol3DLayer ./WaterSymbol3DLayer ./support/StyleOrigin ./support/Thumbnail".split(" "),function(J,
K,u,e,n,p,v,w,f,h,c,x,y,z,A,B,C,D,E,k,F,G,l,H){var m={icon:A,object:C,line:B,path:D,fill:z,extrude:y,text:F,water:G},I=n.ofType({base:k,key:"type",typeMap:m}),q=v.strict()({PointSymbol3D:"point-3d",PolygonSymbol3D:"polygon-3d",LineSymbol3D:"line-3d",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d"}),r=w.getLogger("esri.symbols.Symbol3D");return function(t){function b(a){a=t.call(this,a)||this;a.styleOrigin=null;a.thumbnail=null;a.type=null;var b=a.__accessor__&&a.__accessor__.metadatas&&a.__accessor__.metadatas.symbolLayers;
a._set("symbolLayers",new (b&&b.type||n));return a}u(b,t);Object.defineProperty(b.prototype,"color",{get:function(){return null},set:function(a){r.error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.")},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"symbolLayers",{set:function(a){p.referenceSetter(a,this._get("symbolLayers"))},enumerable:!0,configurable:!0});b.prototype.readSymbolLayers=function(a,b,d){b=[];
for(var g=0;g<a.length;g++){var c=a[g],e=k.typeJSONDictionary.read(c.type),f=e&&m[e];f?(c=new f,c.read(a[g],d),b.push(c)):(r.warn("Unknown symbol layer type: "+e),d&&d.messages&&d.messages.push(new h("symbol-layer:unsupported","Symbol layers of type '"+(e||c.type||"unknown")+"' are not supported",{definition:c,context:d})))}return b};b.prototype.readStyleOrigin=function(a,b,d){if(a.styleUrl&&a.name)return b=f.fromJSON(a.styleUrl,d),new l({styleUrl:b,name:a.name});if(a.styleName&&a.name)return new l({portal:d&&
d.portal||x.getDefault(),styleName:a.styleName,name:a.name});d&&d.messages&&d.messages.push(new h("symbol3d:incomplete-style-origin","Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property",{context:d,definition:a}))};b.prototype.writeStyleOrigin=function(a,b,d,c){a.styleUrl&&a.name?(d=f.toJSON(a.styleUrl,c),f.isAbsolute(d)&&(d=f.normalize(d)),b.styleOrigin={styleUrl:d,name:a.name}):a.styleName&&a.name&&(a.portal&&c&&c.portal&&!f.hasSamePortal(a.portal.restUrl,c.portal.restUrl)?
c&&c.messages&&c.messages.push(new h("symbol:cross-portal","The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.",{symbol:this})):b.styleOrigin={styleName:a.styleName,name:a.name})};b.prototype.normalizeCtorArgs=function(a){return a instanceof k||a&&m[a.type]?{symbolLayers:[a]}:Array.isArray(a)?{symbolLayers:a}:a};e([c.property({json:{read:!1,write:!1}})],b.prototype,"color",null);e([c.property({type:I,nonNullable:!0,json:{write:!0}}),
c.cast(p.castForReferenceSetter)],b.prototype,"symbolLayers",null);e([c.reader("symbolLayers")],b.prototype,"readSymbolLayers",null);e([c.property({type:l})],b.prototype,"styleOrigin",void 0);e([c.reader("styleOrigin")],b.prototype,"readStyleOrigin",null);e([c.writer("styleOrigin",{"styleOrigin.styleUrl":{type:String},"styleOrigin.styleName":{type:String},"styleOrigin.name":{type:String}})],b.prototype,"writeStyleOrigin",null);e([c.property({type:H.default,json:{read:!1}})],b.prototype,"thumbnail",
void 0);e([c.property({type:q.apiValues,readOnly:!0,json:{type:q.jsonValues,read:!1}})],b.prototype,"type",void 0);return b=e([c.subclass("esri.symbols.Symbol3D")],b)}(c.declared(E))});