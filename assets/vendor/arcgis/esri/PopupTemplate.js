// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ./core/tsSupport/assignHelper ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./core/tsSupport/generatorHelper ./core/tsSupport/awaiterHelper ./core/arrayUtils ./core/Collection ./core/JSONSupport ./core/lang ./core/Logger ./core/promiseUtils ./core/SetUtils ./core/accessorSupport/decorators ./core/accessorSupport/ensureType ./layers/support/fieldUtils ./popup/content ./popup/ExpressionInfo ./popup/FieldInfo ./popup/LayerOptions ./popup/RelatedRecordsInfo ./popup/content/AttachmentsContent ./popup/content/Content ./popup/content/FieldsContent ./popup/content/MediaContent ./popup/content/TextContent ./popup/content/support/mediaInfoTypes ./support/actions/ActionBase ./support/actions/ActionButton ./support/actions/ActionToggle".split(" "),
function(P,Q,R,w,f,h,k,x,l,y,g,z,u,A,e,B,v,C,D,E,F,G,m,H,n,p,q,I,J,K,L){var M=l.ofType({key:"type",defaultKeyValue:"button",base:J,typeMap:{button:K,toggle:L}}),N={base:H,key:"type",typeMap:{media:p,text:q,attachments:m,fields:n}},O=z.getLogger("esri.PopupTemplate");return function(r){function b(){var a=null!==r&&r.apply(this,arguments)||this;a.actions=null;a.content="";a.expressionInfos=null;a.fieldInfos=null;a.layerOptions=null;a.lastEditInfoEnabled=!0;a.outFields=null;a.overwriteActions=!1;a.title=
"";a.relatedRecordsInfo=null;return a}w(b,r);t=b;b.prototype.castContent=function(a){if(Array.isArray(a))return a.map(function(a){return B.ensureOneOfType(N,a)});if("string"===typeof a||"function"===typeof a||a instanceof HTMLElement||u.isPromiseLike(a))return a;O.error("content error","unsupported content value",{value:a});return null};b.prototype.readContent=function(a,c){a=c.popupElements;return Array.isArray(a)&&0<a.length?this._readPopupInfoElements(c):this._readPopupInfo(c)};b.prototype.writeContent=
function(a,c){var d=this;"string"===typeof a?c.description=a:Array.isArray(a)&&(c.popupElements=a.map(function(a){return a&&a.toJSON()}),c.popupElements.forEach(function(a){"attachments"===a.type?d._writeAttachmentContent(c):"media"===a.type?d._writeMediaContent(a,c):"text"===a.type&&d._writeTextContent(a,c)}))};b.prototype.writeFieldInfos=function(a,c){var d=this.content,d=Array.isArray(d)?d:null;if(a){var b=d?d.some(function(a){return"fields"===a.type&&(!a.fieldInfos||0===a.fieldInfos.length)}):
!1;c.fieldInfos=a.filter(Boolean).map(function(a){a=a.toJSON();b||(a.visible=!1);return a})}if(d)for(a=0;a<d.length;a++){var e=d[a];"fields"===e.type&&this._writeFieldsContent(e,c)}};b.prototype.writeLayerOptions=function(a,c){c.layerOptions=!a||null===a.showNoDataRecords&&null===a.returnTopmostRaster?null:a.toJSON()};b.prototype.writeTitle=function(a,c){c.title=a||""};b.prototype.clone=function(){var a=this.actions,a=a?g.clone(a.toArray()):[];return new t({actions:a,content:Array.isArray(this.content)?
g.clone(this.content):this.content,expressionInfos:Array.isArray(this.expressionInfos)?g.clone(this.expressionInfos):null,fieldInfos:Array.isArray(this.fieldInfos)?g.clone(this.fieldInfos):null,layerOptions:this.layerOptions?g.clone(this.layerOptions):null,lastEditInfoEnabled:this.lastEditInfoEnabled,outFields:Array.isArray(this.outFields)?g.clone(this.outFields):null,overwriteActions:this.overwriteActions,title:this.title,relatedRecordsInfo:this.relatedRecordsInfo?g.clone(this.relatedRecordsInfo):
null})};b.prototype.collectRequiredFields=function(a,c){return k(this,void 0,void 0,function(){return h(this,function(d){switch(d.label){case 0:return[4,this._collectExpressionInfoFields(a,c,this.expressionInfos)];case 1:return d.sent(),v.collectFields(a,c,(this.outFields||[]).concat(this._getActionsFields(this.actions),this._getTitleFields(this.title),this._getContentFields(this.content))),[2]}})})};b.prototype.getRequiredFields=function(a){return k(this,void 0,void 0,function(){var c;return h(this,
function(d){switch(d.label){case 0:return c=new Set,[4,this.collectRequiredFields(c,a)];case 1:return d.sent(),[2,A.valuesOfSet(c).sort()]}})})};b.prototype._writeFieldsContent=function(a,c){Array.isArray(a.fieldInfos)&&a.fieldInfos.length&&(a=g.clone(a.fieldInfos),Array.isArray(c.fieldInfos)?a.forEach(function(a){var d=x.find(c.fieldInfos,function(c){return c.fieldName.toLowerCase()===a.fieldName.toLowerCase()});d?d.visible=!0:c.fieldInfos.push(a)}):c.fieldInfos=a)};b.prototype._writeAttachmentContent=
function(a){a.showAttachments||(a.showAttachments=!0)};b.prototype._writeTextContent=function(a,c){!c.description&&a.text&&(c.description=a.text)};b.prototype._writeMediaContent=function(a,c){Array.isArray(a.mediaInfos)&&a.mediaInfos.length&&(a=g.clone(a.mediaInfos),Array.isArray(c.mediaInfos)?c.mediaInfos=c.mediaInfos.concat(a):c.mediaInfos=a)};b.prototype._readPopupInfoElements=function(a){var c=a.description,d=a.mediaInfos,b=!1,e=!1;return a.popupElements.map(function(a){if("media"===a.type)return a.mediaInfos||
!d||e||(a.mediaInfos=d,e=!0),p.fromJSON(a);if("text"===a.type)return a.text||!c||b||(a.text=c,b=!0),q.fromJSON(a);if("attachments"===a.type)return m.fromJSON(a);if("fields"===a.type)return n.fromJSON(a)}).filter(Boolean)};b.prototype._readPopupInfo=function(a){var c=a.description,d=a.mediaInfos;a=a.showAttachments;var b=[];c?b.push(new q({text:c})):b.push(new n);Array.isArray(d)&&d.length&&b.push(p.fromJSON({mediaInfos:d}));a&&b.push(m.fromJSON({displayType:"list"}));return b.length?b:c};b.prototype._getContentElementFields=
function(a){var c=this;if(!a||"attachments"===a.type)return[];if("fields"===a.type)return this._getFieldInfoFields(a.fieldInfos||this.fieldInfos);if("media"===a.type)return(a.mediaInfos||[]).reduce(function(a,b){return a.concat(c._getMediaInfoFields(b))},[]);if("text"===a.type)return this._extractFieldNames(a.text)};b.prototype._getMediaInfoFields=function(a){var c=a.caption,b=a.value||{},e=b.fields,f=void 0===e?[]:e,e=b.normalizeField,g=b.tooltipField,h=b.sourceURL,b=b.linkURL;a=this._extractFieldNames(a.title).concat(this._extractFieldNames(c),
this._extractFieldNames(h),this._extractFieldNames(b),f);e&&a.push(e);g&&a.push(g);return a};b.prototype._getContentFields=function(a){var c=this;return"string"===typeof a?this._extractFieldNames(a):Array.isArray(a)?a.reduce(function(a,b){return a.concat(c._getContentElementFields(b))},[]):[]};b.prototype._collectExpressionInfoFields=function(a,b,d){return k(this,void 0,void 0,function(){return h(this,function(c){switch(c.label){case 0:return d?[4,u.all(d.map(function(c){return v.collectArcadeFieldNames(a,
b,c.expression)}))]:[2];case 1:return c.sent(),[2]}})})};b.prototype._getFieldInfoFields=function(a){return a?a.filter(function(a){return"undefined"===typeof a.visible?!0:!!a.visible}).map(function(a){return a.fieldName}).filter(function(a){return-1===a.indexOf("relationships/")&&-1===a.indexOf("expression/")}):[]};b.prototype._getActionsFields=function(a){var b=this;return a?a.toArray().reduce(function(a,c){return a.concat(b._getActionFields(c))},[]):[]};b.prototype._getActionFields=function(a){var b=
a.className,d=a.type,d="button"===d||"toggle"===d?a.image:"";return this._extractFieldNames(a.title).concat(this._extractFieldNames(b),this._extractFieldNames(d))};b.prototype._getTitleFields=function(a){return"string"===typeof a?this._extractFieldNames(a):[]};b.prototype._extractFieldNames=function(a){if(!a||"string"!==typeof a)return[];a=a.match(/{[^}]*}/g);if(!a)return[];var b=/\{(\w+):.+\}/;return(a=a.filter(function(a){return!(0===a.indexOf("{relationships/")||0===a.indexOf("{expression/"))}).map(function(a){return a.replace(b,
"{$1}")}))?a.map(function(a){return a.slice(1,-1)}):[]};var t;f([e.property({type:M})],b.prototype,"actions",void 0);f([e.property()],b.prototype,"content",void 0);f([e.cast("content")],b.prototype,"castContent",null);f([e.reader("content",["description","popupElements","mediaInfos","showAttachments"])],b.prototype,"readContent",null);f([e.writer("content",{popupElements:{type:l.ofType(C.types)},showAttachments:{type:Boolean},mediaInfos:{type:l.ofType(I.types)},description:{type:String}})],b.prototype,
"writeContent",null);f([e.property({type:[D],json:{write:!0}})],b.prototype,"expressionInfos",void 0);f([e.property({type:[E]})],b.prototype,"fieldInfos",void 0);f([e.writer("fieldInfos")],b.prototype,"writeFieldInfos",null);f([e.property({type:F})],b.prototype,"layerOptions",void 0);f([e.writer("layerOptions")],b.prototype,"writeLayerOptions",null);f([e.property({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],b.prototype,"lastEditInfoEnabled",
void 0);f([e.property()],b.prototype,"outFields",void 0);f([e.property()],b.prototype,"overwriteActions",void 0);f([e.property({json:{type:String}})],b.prototype,"title",void 0);f([e.writer("title")],b.prototype,"writeTitle",null);f([e.property({type:G,json:{write:!0}})],b.prototype,"relatedRecordsInfo",void 0);return b=t=f([e.subclass("esri.PopupTemplate")],b)}(e.declared(y.JSONSupport))});