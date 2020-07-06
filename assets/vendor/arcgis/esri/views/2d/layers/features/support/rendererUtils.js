// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/Logger","../../../../../core/screenUtils","../../../engine"],function(y,h,w,t,u){Object.defineProperty(h,"__esModule",{value:!0});var v=u.definitions.WEBGL_MAX_INNER_STOPS,q=u.definitions.WEBGL_MAX_STOPS,x=w.getLogger("esri.renderers.visualVariables.support.utils");h.simplifyVVRenderer=function(b){if(!("visualVariables"in b&&b.visualVariables&&b.visualVariables.length))return b;b=b.clone();var h=b.visualVariables.map(function(b){if(("size"===b.type||
"color"===b.type||"opacity"===b.type)&&null!=b.stops){var a;var h=b.type;a=b.stops;if(!(a.length<=q))if(x.warn("Found "+a.length+" Visual Variable stops, but MapView only supports "+q+". Displayed stops will be simplified."),a.length>2*q){for(var r=a[0],f=a.slice(1),m=f.pop(),k=f[0].value,l=f[f.length-1].value,n=(l-k)/v,p=[];k<l;k+=n){for(var c=0;k>=f[c].value;)c++;var d=f[c],g=a[c-1],e=k-g.value,d=d.value===g.value?1:e/(d.value-g.value);"color"===h?(g=f[c],c=a[c-1],e=g.color.clone(),e.r=(1-d)*c.color.r+
d*e.r,e.g=(1-d)*c.color.g+d*e.g,e.b=(1-d)*c.color.b+d*e.b,e.a=(1-d)*c.color.a+d*e.a,p.push({value:k,color:e,label:g.label})):"size"===h?(g=f[c],e=a[c-1],c=t.toPt(g.size),e=t.toPt(e.size),p.push({value:k,size:(1-d)*e+d*c,label:g.label})):(g=f[c],p.push({value:k,opacity:(1-d)*a[c-1].opacity+d*g.opacity,label:g.label}))}a=[r].concat(p,[m])}else{h=a[0];a=a.slice(1);for(r=a.pop();a.length>v;){m=f=0;for(l=1;l<a.length;l++)n=Math.abs(a[l].value-a[l-1].value),n>m&&(m=n,f=l);a.splice(f,1)}a=[h].concat(a,[r])}b.stops=
a}return b});b.visualVariables=h;return b}});