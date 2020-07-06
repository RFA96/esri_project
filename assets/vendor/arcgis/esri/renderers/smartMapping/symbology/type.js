// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/extendsHelper ../../../Color ./support/colors ./support/SymbologyBase ./support/utils".split(" "),function(l,m,p,q,c,r,t,k){function n(a,b,d){var f=a.theme||"default";if(b=r[b]){var c=b.stops,e="mesh"!==a.geometryType&&a.worldScale?a.view:null;switch(a.geometryType){case "point":case "multipoint":return"point-cloud-class"===f?u({theme:f,name:b.name,tags:b.tags,colors:c}):v({name:b.name,tags:b.tags,theme:f,colors:c,
noDataColor:d.noDataColor,opacity:1,outline:d.outline,size:d.size},e);case "polyline":return w({name:b.name,tags:b.tags,theme:f,colors:c,noDataColor:d.noDataColor,opacity:1,width:d.width},e);case "polygon":return x({name:b.name,tags:b.tags,theme:f,colors:c,noDataColor:d.noDataColor,opacity:d.fillOpacity||1,outline:d.outline,size:"12px"},e);case "mesh":return y({name:b.name,tags:b.tags,theme:f,colors:c,noDataColor:d.noDataColor,opacity:d.fillOpacity||1})}}}function u(a){return{name:a.name,tags:a.tags.slice(),
theme:a.theme,colors:a.colors.map(function(a){return new c(a)})}}function v(a,b){return{name:a.name,tags:a.tags.slice(),theme:a.theme,colors:a.colors.map(function(a){return new c(a)}),noDataColor:new c(a.noDataColor),outline:{color:new c(a.outline.color),width:a.outline.width},size:b?k.toWorldScale(a.size,b):a.size,opacity:a.opacity}}function w(a,b){return{name:a.name,tags:a.tags.slice(),theme:a.theme,colors:a.colors.map(function(a){return new c(a)}),noDataColor:new c(a.noDataColor),width:b?k.toWorldScale(a.width,
b):a.width,opacity:a.opacity}}function x(a,b){return{name:a.name,tags:a.tags.slice(),theme:a.theme,colors:a.colors.map(function(a){return new c(a)}),noDataColor:new c(a.noDataColor),outline:{color:new c(a.outline.color),width:a.outline.width},opacity:a.opacity,size:b?k.toWorldScale(a.size,b):a.size}}function y(a){return{name:a.name,tags:a.tags.slice(),theme:a.theme,colors:a.colors.map(function(a){return new c(a)}),noDataColor:new c(a.noDataColor),opacity:a.opacity}}var h={color:[153,153,153,.25],
width:"1px"},e="tropical-bliss desert-blooms under-the-sea vibrant-rainbow ocean-bay prairie-summer pastel-chalk".split(" "),g="predominant-v1 predominant-v2 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ");l={light:{common:{noDataColor:"#aaaaaa",outline:h,size:"8px"},primary:"cat-dark",secondary:["cat-light"].concat(e).concat(g)},dark:{common:{noDataColor:"#aaaaaa",outline:{color:[26,
26,26,.25],width:"1px"},size:"8px"},primary:"cat-light",secondary:["cat-dark"].concat(e).concat(g)}};m={light:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"cat-dark",secondary:["cat-light"].concat(e).concat(g)},dark:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"cat-light",secondary:["cat-dark"].concat(e).concat(g)}};var h={light:{common:{noDataColor:"#aaaaaa",outline:h,fillOpacity:.8},primary:"cat-dark",secondary:["cat-light"].concat(e).concat(g)},dark:{common:{noDataColor:"#aaaaaa",
outline:{color:[153,153,153,.25],width:"1px"},fillOpacity:.8},primary:"cat-light",secondary:["cat-dark"].concat(e).concat(g)}},z={default:{name:"default",label:"Default",description:"Default theme for visualizing features by their type.",schemes:{point:l,polyline:m,polygon:h}},"point-cloud-class":{name:"point-cloud-class",label:"Point Cloud Class",description:"Default theme for visualizing point cloud data based on classification.",schemes:{point:{light:{primary:"point-cloud-class-scheme",secondary:[]},
dark:{primary:"point-cloud-class-scheme",secondary:[]}}}}};return new (function(a){function b(){return a.call(this,{themeDictionary:z})||this}q(b,a);b.prototype.getSchemes=function(a){var d=this.getRawSchemes({theme:a.theme||"default",basemap:a.basemap,geometryType:a.geometryType,basemapTheme:a.basemapTheme});if(d){var b=d.schemesInfo,c=d.basemapId,d=d.basemapTheme,e=b.common;return{primaryScheme:n(a,b.primary,e),secondarySchemes:b.secondary.map(function(d){return n(a,d,e)}).filter(Boolean),basemapId:c,
basemapTheme:d}}};b.prototype.getSchemeByName=function(a){return this.filterSchemesByName(a)};b.prototype.getSchemesByTag=function(a){return this.filterSchemesByTag(a)};b.prototype.cloneScheme=function(a){if(a)return a=p({},a),a.colors=a.colors.map(function(a){return new c(a)}),"noDataColor"in a&&a.noDataColor&&(a.noDataColor=new c(a.noDataColor)),"outline"in a&&a.outline&&(a.outline={color:a.outline.color&&new c(a.outline.color),width:a.outline.width}),a};return b}(t))});