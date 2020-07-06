// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ./core/tsSupport/assignHelper ./core/tsSupport/awaiterHelper ./core/tsSupport/generatorHelper ./config ./kernel ./core/Error ./core/global ./core/has ./core/lang ./core/promiseUtils ./core/string ./core/urlUtils ./support/requestUtils @dojo/framework/shim/Promise".split(" "),function(B,ga,K,n,z,x,u,I,y,C,M,D,R,f,S){function v(a,b){var c=D.createAbortController();return D.create(function(d,k){T(c.signal,a,b).then(d).catch(k)},function(){c.abort()})}function T(a,b,c){return n(this,
void 0,void 0,function(){var d,k,e,h,l,g,E,p;return z(this,function(t){switch(t.label){case 0:return d=f.isDataProtocol(b),(k=f.isBlobProtocol(b))||d||(b=f.normalize(b)),e={url:b,requestOptions:K({},c)},(h=f.getInterceptor(b))?[4,U(h,e)]:[3,2];case 1:l=t.sent();if(null!=l)return[2,{data:l,getHeader:J,requestOptions:e.requestOptions,url:e.url}];h.after||h.error||(h=null);t.label=2;case 2:b=e.url;c=e.requestOptions;if("image"===c.responseType){if(C("host-webworker"))throw w("request:invalid-parameters",
Error("responseType 'image' is not supported in Web Workers or Node environment"),e);}else if(d)throw w("request:invalid-parameters",Error("Data URLs are not supported for responseType \x3d "+c.responseType),e);if("head"===c.method){if(c.body)throw w("request:invalid-parameters",Error("body parameter cannot be set when method is 'head'"),e);if(d||k)throw w("request:invalid-parameters",Error("data and blob URLs are not supported for method 'head'"),e);}return[4,V()];case 3:t.sent();if(F)return[2,F.execute(b,
c)];g=D.createAbortController();D.onAbort(a,function(){return g.abort()});D.onAbort(c,function(){return g.abort()});E={controller:g,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:h,params:e,redoRequest:!1,useIdentity:x.request.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1};return[4,W(E)];case 4:return p=t.sent(),h&&h.after&&h.after(p),[2,p]}})})}function X(a){f.isBlobProtocol(a)||f.isDataProtocol(a)||(a=f.getOrigin(a))&&-1===v._corsServers.indexOf(a)&&v._corsServers.push(a)}
function Y(a){a=f.getOrigin(a);return!a||R.endsWith(a,".arcgis.com")||-1!==v._corsServers.indexOf(a)||f.isTrustedServer(a)}function w(a,b,c,d){var k="Error",e={url:c.url,requestOptions:c.requestOptions,getHeader:J,ssl:!1};if(b instanceof I)return b.details?(b.details=M.clone(b.details),b.details.url=c.url,b.details.requestOptions=c.requestOptions):b.details=e,b;if(b){c=d&&function(a){return d.headers.get(a)};var h=d&&d.status,l=b.message;l&&(k=l);c&&(e.getHeader=c);e.httpStatus=(null!=b.httpCode?
b.httpCode:b.code)||h||0;e.subCode=b.subcode;e.messageCode=b.messageCode;e.messages="string"===typeof b.details?[b.details]:b.details}a=new I(a,k,e);b&&"cancel"===b.dojoType&&(a.dojoType="cancel");return a}function V(){return n(this,void 0,void 0,function(){var a;return z(this,function(b){switch(b.label){case 0:return C("host-webworker")?F?[3,2]:[4,new Promise(function(a,b){B(["./core/workers/request"],a,b)})]:[3,3];case 1:F=b.sent(),b.label=2;case 2:return[3,6];case 3:if(v._abortableFetch)return[3,
6];if(!C("esri-abortable-fetch")||!C("esri-native-promise")&&(13>C("safari")||13>C("ios")))return[3,4];v._abortableFetch=y.fetch.bind(y);return[3,6];case 4:return a=v,[4,new Promise(function(a,b){B(["whatwg-fetch"],a,b)})];case 5:a._abortableFetch=b.sent().fetch,b.label=6;case 6:return[2]}})})}function G(){return n(this,void 0,void 0,function(){return z(this,function(a){switch(a.label){case 0:return u.id?[3,2]:[4,new Promise(function(a,c){B(["./identity/IdentityManager"],a,c)})];case 1:a.sent(),a.label=
2;case 2:return[2]}})})}function Z(a){return n(this,void 0,void 0,function(){var b,c,d,k,e,h,l,g;return z(this,function(f){switch(f.label){case 0:b=a.params.url;c=a.params.requestOptions;d=a.controller.signal;k=c.body;l=h=e=null;N&&"HTMLFormElement"in y&&(k instanceof FormData?e=k:k instanceof HTMLFormElement&&(h=k,e=new FormData(h)));"string"===typeof k&&(l=k);a.fetchOptions={cache:c.cacheBust&&!v._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:c.headers||{},method:"head"===
c.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:d};if(e||l)a.fetchOptions.body=e||l;"anonymous"===c.authMode&&(a.useIdentity=!1);a.hasToken=!!(/token=/i.test(b)||c.query&&c.query.token||e&&e.get&&e.get("token")||h&&h.elements.token);if(!a.useIdentity||a.hasToken||a.credentialToken||O(b)||D.isAborted(d))return[3,11];g=void 0;return"immediate"!==c.authMode?[3,3]:[4,G()];case 1:return f.sent(),[4,u.id.getCredential(b,{signal:d})];case 2:return g=f.sent(),a.credential=g,[3,10];case 3:return"no-prompt"!==
c.authMode?[3,9]:[4,G()];case 4:f.sent(),f.label=5;case 5:return f.trys.push([5,7,,8]),[4,u.id.getCredential(b,{prompt:!1,signal:d})];case 6:return g=f.sent(),a.credential=g,[3,8];case 7:return f.sent(),[3,8];case 8:return[3,10];case 9:u.id&&(g=u.id.findCredential(b)),f.label=10;case 10:g&&(a.credentialToken=g.token,a.useSSL=!!g.ssl),f.label=11;case 11:return[2]}})})}function O(a){return aa.some(function(b){return b.test(a)})}function ba(a){return n(this,void 0,void 0,function(){var b,c,d,k,e,h,l,
g,E,p,t,q,n,y,F,H,B,A,m,I,J,G,L;return z(this,function(r){switch(r.label){case 0:b=a.params.url;c=a.params.requestOptions;d=a.fetchOptions;k=f.isBlobProtocol(b)||f.isDataProtocol(b);e=c.responseType||"json";h=k?0:null!=c.timeout?c.timeout:x.request.timeout;l=!1;if(!k){a.useSSL&&(b=f.toHTTPS(b));c.cacheBust&&"default"===d.cache&&(b=f.addQueryParameter(b,"request.preventCache",Date.now()));g=K({},c.query);a.credentialToken&&(g.token=a.credentialToken);E=f.objectToQuery(g);C("esri-url-encodes-apostrophe")&&
(E=E.replace(/'/g,"%27"));p=b.length+1+E.length;t=void 0;l="post"===c.method||!!c.body||p>x.request.maxUrlLength;if(q=c.useProxy||!!f.getProxyRule(b))n=f.getProxyUrl(b),t=n.path,!l&&t.length+1+p>x.request.maxUrlLength&&(l=!0),n.query&&(g=K({},n.query,g));if("HEAD"===d.method&&(l||q)){if(l){if(p>x.request.maxUrlLength)throw w("request:invalid-parameters",Error("URL exceeds maximum length"),a.params);throw w("request:invalid-parameters",Error("cannot use POST request when method is 'head'"),a.params);
}if(q)throw w("request:invalid-parameters",Error("cannot use proxy when method is 'head'"),a.params);}l?(d.method="POST",c.body?b=f.addQueryParameters(b,g):(d.body=f.objectToQuery(g),d.headers["Content-Type"]="application/x-www-form-urlencoded")):b=f.addQueryParameters(b,g);q&&(a.useProxy=!0,b=t+"?"+b);g.token&&N&&d.body instanceof FormData&&(y=d.body,y.set?y.set("token",g.token):y.append("token",g.token));c.hasOwnProperty("withCredentials")?a.withCredentials=c.withCredentials:f.isTrustedServer(b)?
a.withCredentials=!0:u.id&&(F=u.id.findServerInfo(b))&&F.webTierAuth&&(a.withCredentials=!0);a.withCredentials&&(d.credentials="include")}H=0;B=!1;0<h&&(H=setTimeout(function(){B=!0;a.controller.abort()},h));r.label=1;case 1:return r.trys.push([1,18,19,20]),"image"!==c.responseType||"default"!==d.cache||"GET"!==d.method||l||ca(c.headers)||!k&&!a.useProxy&&x.request.proxyUrl&&!Y(b)?[3,3]:[4,P(b,a)];case 2:return m=r.sent(),[3,17];case 3:return[4,v._abortableFetch(b,d)];case 4:A=r.sent();a.useProxy||
X(b);if(!A.ok||"HEAD"===d.method)return[3,17];I=e;switch(I){case "array-buffer":return[3,5];case "blob":return[3,7];case "image":return[3,7]}return[3,9];case 5:return[4,A.arrayBuffer()];case 6:return m=r.sent(),[3,11];case 7:return[4,A.blob()];case 8:return m=r.sent(),[3,11];case 9:return[4,A.text()];case 10:return m=r.sent(),[3,11];case 11:H&&(clearTimeout(H),H=0);if("json"===e||"xml"===e||"document"===e)if(m)switch(e){case "json":m=JSON.parse(m);break;case "xml":m=Q(m,"application/xml");break;case "document":m=
Q(m,"text/html")}else m=null;J=A.headers.get("Content-Type");if(!/application\/json|text\/plain/i.test(J)||!(m instanceof ArrayBuffer&&750>=m.byteLength||m instanceof Blob&&750>=m.size))return[3,15];r.label=12;case 12:return r.trys.push([12,14,,15]),[4,(new Response(m)).json()];case 13:return G=r.sent(),G.error&&(m=G),[3,15];case 14:return r.sent(),[3,15];case 15:return"image"===e&&m instanceof Blob?[4,P(URL.createObjectURL(m),a,!0)]:[3,17];case 16:m=r.sent(),r.label=17;case 17:return[3,20];case 18:L=
r.sent();if("AbortError"===L.name){if(B)throw Error("Timeout exceeded");throw D.createAbortError("Request canceled");}if(!A&&L instanceof TypeError&&x.request.proxyUrl&&!c.body&&"post"!==c.method&&"head"!==c.method&&!a.useProxy)a.redoRequest=!0,f.addProxyRule({proxyUrl:x.request.proxyUrl,urlPrefix:f.removeFile(f.urlToObject(b).path)});else throw L;return[3,20];case 19:return H&&clearTimeout(H),[7];case 20:return[2,[A,m]]}})})}function U(a,b){return n(this,void 0,void 0,function(){var c,d,k;return z(this,
function(e){switch(e.label){case 0:if(null!=a.responseData)return[2,a.responseData];a.headers&&(b.requestOptions.headers=K({},b.requestOptions.headers,a.headers));a.query&&(b.requestOptions.query=K({},b.requestOptions.query,a.query));if(!a.before)return[3,5];d=c=void 0;e.label=1;case 1:return e.trys.push([1,3,,4]),[4,a.before(b)];case 2:return d=e.sent(),[3,4];case 3:return k=e.sent(),c=w("request:interceptor",k,b),[3,4];case 4:if(d instanceof Error||d instanceof I)c=w("request:interceptor",d,b);
if(c)throw a.error&&a.error(c),c;return[2,d];case 5:return[2]}})})}function ca(a){if(a)for(var b=0,c=Object.getOwnPropertyNames(a);b<c.length;b++)if(a[c[b]])return!0;return!1}function Q(a,b){var c;try{c=(new DOMParser).parseFromString(a,b)}catch(d){}if(!c||c.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return c}function W(a){return n(this,void 0,void 0,function(){var b,c,d,k,e,h,l,g,n,p,t;return z(this,function(q){switch(q.label){case 0:return[4,Z(a)];case 1:q.sent(),
q.label=2;case 2:q.trys.push([2,8,,9]),q.label=3;case 3:return[4,ba(a)];case 4:b=q.sent(),c=b[0],d=b[1],q.label=5;case 5:return[4,da(a,c,d)];case 6:if(!q.sent())return[3,3];q.label=7;case 7:return[3,9];case 8:throw k=q.sent(),e=w("request:server",k,a.params,c),e.details.ssl=a.useSSL,a.interceptor&&a.interceptor.error&&a.interceptor.error(e),e;case 9:return h=a.params.url,/\/sharing\/rest\/(accounts|portals)\/self/i.test(h)&&!a.hasToken&&!a.credentialToken&&d&&d.user&&d.user.username&&!f.isTrustedServer(h)&&
(l=f.getOrigin(h,!0))&&x.request.trustedServers.push(l),(g=a.credential)&&u.id&&(p=(n=u.id.findServerInfo(g.server))&&n.owningSystemUrl)&&(p=p.replace(/\/?$/,"/sharing"),(t=u.id.findCredential(p,g.userId))&&-1===u.id._getIdenticalSvcIdx(p,t)&&t.resources.unshift(p)),[2,{data:d,getHeader:c?function(a){return c.headers.get(a)}:J,requestOptions:a.params.requestOptions,ssl:a.useSSL,url:a.params.url}]}})})}function da(a,b,c){return n(this,void 0,void 0,function(){var d,k,e,f,l,g,n;return z(this,function(h){switch(h.label){case 0:if(a.redoRequest)return a.redoRequest=
!1,[2,!1];if(!b)return[2,!0];if(!b.ok)throw Error("Unable to load "+b.url+" status: "+b.status);c&&c.error&&(d=M.mixin(Error(),c.error));d&&(k=Number(d.code),e=d.hasOwnProperty("subcode")?Number(d.subcode):null,f=(f=d.messageCode)&&f.toUpperCase());l=a.params.requestOptions.authMode;return 403===k&&(4===e||d.message&&-1<d.message.toLowerCase().indexOf("ssl")&&-1===d.message.toLowerCase().indexOf("permission"))?a.useSSL?[3,6]:(a.useSSL=!0,[2,!1]):[3,1];case 1:return!a.useIdentity||"no-prompt"===l&&
498!==k||-1===ea.indexOf(k)||O(a.params.url)||!(403!==k||-1===fa.indexOf(f)&&(null==e||2===e&&a.credentialToken))?[3,6]:[4,G()];case 2:h.sent(),h.label=3;case 3:return h.trys.push([3,5,,6]),[4,u.id.getCredential(a.params.url,{error:w("request:server",d,a.params),prompt:"no-prompt"!==l,signal:a.controller.signal,token:a.credentialToken})];case 4:return g=h.sent(),a.credential=g,a.credentialToken=g.token,a.useSSL=a.useSSL||g.ssl,[2,!1];case 5:n=h.sent();if("no-prompt"===l)return a.credential=null,a.credentialToken=
null,[2,!1];d=n;return[3,6];case 6:if(d)throw d;return[2,!0]}})})}function P(a,b,c){void 0===c&&(c=!1);var d=b.controller.signal,f=new Image;f.crossOrigin=b.withCredentials?"use-credentials":"anonymous";f.alt="";f.src=a;return S.loadImageAsync(f,a,c,d)}var F,N="FormData"in y,ea=[499,498,403,401],fa=["COM_0056","COM_0057","SB_0008"],aa=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],J=function(){return null};v._abortableFetch=null;v._corsServers=["https://server.arcgisonline.com",
"https://services.arcgisonline.com"];return v});