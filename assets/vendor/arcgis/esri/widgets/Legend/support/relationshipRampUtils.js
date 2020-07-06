// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../symbols/support/gfxUtils","../../../symbols/support/previewSymbol3D"],function(r,f,g,m){function n(a){if(a){var b=a.type;return-1<b.indexOf("3d")?m.getSymbolLayerFill(a.symbolLayers.getItemAt(0)):"simple-line"===b||"simple-marker"===a.type&&("x"===a.style||"cross"===a.style)?(a=g.getStroke(a))&&a.color:g.getFill(a)}}function p(a,b){var c=b.HH.label,d=b.LL.label,e=b.HL.label;b=b.LH.label;switch(a){case "HH":return{top:c,bottom:d,left:e,right:b};case "HL":return{top:e,
bottom:b,left:d,right:c};case "LL":return{top:d,bottom:c,left:b,right:e};case "LH":return{top:b,bottom:e,left:c,right:d};default:return{top:c,bottom:d,left:e,right:b}}}function k(a){var b=l[a];a&&null==b&&(b=l.HH);return b||0}Object.defineProperty(f,"__esModule",{value:!0});var l={HH:315,HL:45,LL:135,LH:225},q={2:[["HL","HH"],["LL","LH"]],3:[["HL","HM","HH"],["ML","MM","MH"],["LL","LM","LH"]],4:[["HL","HM1","HM2","HH"],["M2L","M2M1","M2M2","M2H"],["M1L","M1M1","M1M2","M1H"],["LL","LM1","LM2","LH"]]};
f.getRelationshipRampElement=function(a){var b=a.focus,c=a.numClasses,d=q[c],e={};a.infos.forEach(function(a){e[a.value]={label:a.label,fill:n(a.symbol)}});a=[];for(var f=0;f<c;f++){for(var g=[],h=0;h<c;h++)g.push(e[d[f][h]].fill);a.push(g)}d=p(b,e);return{type:"relationship-ramp",numClasses:c,focus:b,colors:a,labels:d,rotation:k(b)}};f.getRotationAngleForFocus=k});