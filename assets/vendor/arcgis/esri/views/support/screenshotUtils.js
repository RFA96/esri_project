// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/tsSupport/assignHelper","../../core/compilerUtils","../../core/mathUtils"],function(P,k,F,I,J){function w(a,b){var d=a||{},h=d.format,e=d.quality,l=d.rotation,d=d.disableSlice,c=p(a,b.padding),f;f=b.width-c.left-c.right;b=b.height-c.top-c.bottom;c={x:0,y:0,width:f,height:b};if(a&&a.area){null!=a.area.x&&(c.x=Math.floor(a.area.x));null!=a.area.y&&(c.y=Math.floor(a.area.y));var g=null!=a.area.width?Math.floor(a.area.width):null,n=null!=a.area.height?Math.floor(a.area.height):
null;c.width=f-c.x;c.height=b-c.y;null!=g&&null!=n?(c.width=Math.min(c.width,g),c.height=Math.min(c.height,n)):null==g&&null!=n?(g=Math.min(c.width,g),c.height*=g/c.width,c.width=g):null!=g&&null==n&&(g=Math.min(c.height,n),c.width*=g/c.height,c.height=g)}c=K(c,a);g=Math.floor(Math.max(c.x,0));n=Math.floor(Math.max(c.y,0));f={x:g,y:n,width:Math.floor(Math.min(c.width,f-g)),height:Math.floor(Math.min(c.height,b-n))};b=f.width/f.height;c=c.width/c.height;c!==b&&(c>b?(b=Math.floor(f.width/c),f={x:f.x,
y:Math.floor(f.y+(f.height-b)/2),width:f.width,height:b}):(b=Math.floor(f.height*c),f={x:Math.floor(f.x+(f.width-b)/2),y:f.y,width:b,height:f.height}));c=L(a,f);b=c.width;c=c.height;a:switch(h){case "png":case "jpg":case "jpeg":break a;case null:case void 0:h=x;break a;default:I.neverReached(h),h=x}g=M[h];e=J.clamp(null!=e?e:g,0,100);return{format:h,quality:e,area:f,width:b,height:c,rotation:l,disableSlice:!!d,ignoreBackground:!(!a||!a.ignoreBackground),ignorePadding:!(!a||!a.ignorePadding)}}function y(a,
b){return a.toDataURL(N[b.format],b.quality/100)}function z(a,b,d){d||(q||(q=document.createElement("canvas"),q.width=1,q.height=1),d=q);return d.getContext("2d").createImageData(a,b)}function L(a,b){if(!a)return b;var d=a.width;a=a.height;if(null!=d&&null!=a)return{width:Math.floor(d),height:Math.floor(a)};if(null==d&&null==a)return b;b=b.width/b.height;return null==a?{width:Math.floor(d),height:Math.floor(d/b)}:{width:Math.floor(a*b),height:Math.floor(a)}}function K(a,b){if(!b||null==b.width||null==
b.height)return a;b=b.width/b.height;var d=a.width/a.height;if(d===b)return a;if(d<b)return b=Math.floor(a.height*b),a.x-=(b-a.width)/2,a.width=b,a;b=Math.floor(a.width/b);a.y-=(b-a.height)/2;a.height=b;return a}function p(a,b){return!b||a&&a.ignorePadding?O:b}Object.defineProperty(k,"__esModule",{value:!0});k.completeUserSettings=w;k.toRenderSettings=function(a,b){var d=w(a,b),h=d.area,e=d.width/h.width,l=p(d,b.padding),c=l.left+l.right,f=l.top+l.bottom;return{framebufferWidth:Math.floor((b.width-
c)*e+c),framebufferHeight:Math.floor((b.height-f)*e+f),region:{x:Math.floor(h.x*e)+l.left,y:Math.floor(h.y*e)+l.top,width:d.width,height:d.height},format:d.format,quality:d.quality,rotation:d.rotation,pixelRatio:e,layers:a&&a.layers?a.layers:[],disableSlice:d.disableSlice,ignoreBackground:d.ignoreBackground,ignorePadding:d.ignorePadding}};k.encodeResult=function(a,b,d,h){if(h.premultipliedAlpha)for(var e=a.data,l=e.length,c=0;c<l;c+=4){var f=e[c+3];0<f&&(f/=255,e[c+0]/=f,e[c+1]/=f,e[c+2]/=f)}d.width=
a.width;d.height=a.height;e=d.getContext("2d");e.putImageData(a,0,0);h.flipY&&(e.save(),e.globalCompositeOperation="copy",e.scale(1,-1),e.translate(0,-e.canvas.height),e.drawImage(e.canvas,0,0),e.restore());a=e.getImageData(0,0,a.width,a.height);b=y(d,b);d.width=0;d.height=0;return{dataUrl:b,data:a}};k.toDataUrl=y;k.createEmptyImageData=function(a,b,d){if(!a||!b)throw Error("Cannot construct image data without dimensions");if(t)try{return new ImageData(a,b)}catch(h){t=!1}return z(a,b,d)};k.wrapImageData=
function(a,b,d,h){if(!b||!d)throw Error("Cannot construct image data without dimensions");if(t)try{return new ImageData(a,b,d)}catch(e){t=!1}b=z(b,d,h);b.data.set(a,0);return b};k.resampleHermite=function(a,b,d,h,e,l,c,f){void 0===h&&(h=0);void 0===e&&(e=0);void 0===l&&(l=a.width-h);void 0===c&&(c=a.height-e);void 0===f&&(f=!1);var g=a.data,n=b.width,G=b.height,k=b.data;l/=n;c/=G;var q=Math.ceil(l/2),t=Math.ceil(c/2);a=a.width;for(var r=0;r<G;r++)for(var u=0;u<n;u++){for(var A=4*(u+(f?G-r-1:r)*n),
B=0,p=0,w=0,x=0,y=0,H=0,z=(r+.5)*c,C=Math.floor(r*c);C<(r+1)*c;C++)for(var D=Math.abs(z-(C+.5))/t,F=(u+.5)*l,D=D*D,E=Math.floor(u*l);E<(u+1)*l;E++){var m=Math.abs(F-(E+.5))/q,m=Math.sqrt(D+m*m);if(!(1<=m)){var m=2*m*m*m-3*m*m+1,v=4*(h+E+(e+C)*a),H=H+m*g[v+3],p=p+m;!d&&255>g[v+3]&&(m=m*g[v+3]/255);w+=m*g[v];x+=m*g[v+1];y+=m*g[v+2];B+=m}}k[A]=w/B;k[A+1]=x/B;k[A+2]=y/B;k[A+3]=H/p}return b};k.screenshotSuperSampleSettings=function(a,b,d){if(!b)return a;b=a.framebufferWidth;var h=a.framebufferHeight,e=
a.pixelRatio,l=a.region;d=p(a,d);var c=d.left+d.right,f=d.top+d.bottom,g=b-c,n=h-f,k=Math.min(8,Math.min((2048-c)/g,(2048-f)/n));return 1.5>k?a:F({},a,{framebufferWidth:Math.round(g*k)+c,framebufferHeight:Math.round(n*k)+f,pixelRatio:e*k,resample:{region:{x:Math.round((l.x-d.left)*k)+d.left,y:Math.round((l.y-d.top)*k)+d.top,width:Math.round(l.width*k),height:Math.round(l.height*k)},width:b,height:h}})};var q=null,t=!0,N={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"},x="jpg",M={png:100,jpg:98,
jpeg:98},O={top:0,right:0,bottom:0,left:0}});