// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/arrayUtils ../../core/Error ../../core/Evented ../../core/HandleOwner ../../core/promiseUtils ../../core/accessorSupport/decorators".split(" "),function(r,t,k,d,u,f,e,l,m,n,p,q,c){return function(h){function b(a){a=h.call(this,a)||this;a._indexHistory=[];a._lastStepIndex=-1;a._stepIndex=
-1;a._handleKeys={afterCommit:"after-commit",beforeCommit:"before-commit"};a.data=null;a.started=!1;a.steps=null;a.type=null;return a}k(b,h);Object.defineProperty(b.prototype,"hasNextStep",{get:function(){var a=this.steps;return!!(a&&this._stepIndex<a.filter(function(a){return!a.parent}).length-1)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasPreviousStep",{get:function(){return 0<this._stepIndex},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"stepId",
{get:function(){var a=this.steps;return(a=a&&a[this._stepIndex])&&a.id},enumerable:!0,configurable:!0});b.prototype.cancel=function(a){void 0===a&&(a={force:!0});return e(this,void 0,void 0,function(){var b=this;return f(this,function(g){return!1!==a.force?[2,this._cancel()]:[2,q.create(function(a,g){b.emit("cancel-request",{controller:{allow:function(){b._cancel().then(a)},deny:function(){return g(new m("workflow:cancel-denied","Request to cancel workflow was denied."))}}})})]})})};b.prototype.commit=
function(){return e(this,void 0,void 0,function(){var a,b,c,d,e;return f(this,function(g){switch(g.label){case 0:return b=this.data,this.handles.remove(this._handleKeys.beforeCommit),c=b.edits.feature,d=c.clone(),b.edits.attributesModified||(e=c.layer.objectIdField,d.attributes=(a={},a[e]=c.getAttribute(e),a)),b.edits.geometryModified||(d.geometry=null),[4,this.afterCommit(d)];case 1:return g.sent(),this.handles.remove(this._handleKeys.afterCommit),[4,this.reset()];case 2:return g.sent(),this.emit("commit"),
[2]}})})};b.prototype.go=function(a){return e(this,void 0,void 0,function(){var b,c;return f(this,function(g){switch(g.label){case 0:return b=this.steps,c=l.findIndex(b,function(b){return b.id===a}),this._indexHistory.push(this._stepIndex),[4,this._go(c)];case 1:return g.sent(),[2]}})})};b.prototype.next=function(){return e(this,void 0,void 0,function(){return f(this,function(a){switch(a.label){case 0:return this._indexHistory.push(this._stepIndex),[4,this._go(this._stepIndex+1)];case 1:return a.sent(),
[2]}})})};b.prototype.previous=function(){return e(this,void 0,void 0,function(){return f(this,function(a){switch(a.label){case 0:return[4,this._go(this._indexHistory.pop())];case 1:return a.sent(),[2]}})})};b.prototype.reset=function(){return e(this,void 0,void 0,function(){return f(this,function(a){switch(a.label){case 0:return[4,this._cancel(!1)];case 1:return a.sent(),[4,this.start()];case 2:return a.sent(),[2]}})})};b.prototype.start=function(){return e(this,void 0,void 0,function(){var a;return f(this,
function(b){switch(b.label){case 0:return this._set("started",!0),a=-1===this._stepIndex?0:this._stepIndex,[4,this._go(a)];case 1:return b.sent(),[2]}})})};b.prototype._cancel=function(a){void 0===a&&(a=!0);return e(this,void 0,void 0,function(){return f(this,function(b){switch(b.label){case 0:if(!this.started)return[3,2];this._set("started",!1);return[4,this.steps[this._stepIndex].tearDown()];case 1:b.sent(),b.label=2;case 2:return this.handles.remove([this._handleKeys.afterCommit,this._handleKeys.beforeCommit]),
this._resetIndexing(a),a&&this.emit("cancel"),[2]}})})};b.prototype._go=function(a){void 0===a&&(a=-1);return e(this,void 0,void 0,function(){return f(this,function(b){switch(b.label){case 0:return-1>=a||a>=this.steps.length?[2]:this.started?-1<this._lastStepIndex?[4,this.steps[this._lastStepIndex].tearDown()]:[3,2]:(this._stepIndex=a,this._notifyStepProps(),[2]);case 1:b.sent(),b.label=2;case 2:return[4,this.steps[a].setUp()];case 3:return b.sent(),this._stepIndex=this._lastStepIndex=a,this._notifyStepProps(),
[2]}})})};b.prototype._resetIndexing=function(a){void 0===a&&(a=!0);this._lastStepIndex=this._stepIndex=-1;this._indexHistory.length=0;a&&this._notifyStepProps()};b.prototype._notifyStepProps=function(){this.notifyChange("stepId");this.notifyChange("hasPreviousStep");this.notifyChange("hasNextStep")};d([c.property()],b.prototype,"afterCommit",void 0);d([c.property()],b.prototype,"data",void 0);d([c.property()],b.prototype,"hasNextStep",null);d([c.property()],b.prototype,"hasPreviousStep",null);d([c.property()],
b.prototype,"started",void 0);d([c.property({readOnly:!0,dependsOn:["steps"]})],b.prototype,"stepId",null);d([c.property()],b.prototype,"steps",void 0);d([c.property()],b.prototype,"type",void 0);d([c.property()],b.prototype,"commit",null);return b=d([c.subclass("esri.widgets.Editor.Workflow")],b)}(c.declared(p.HandleOwnerMixin(n.EventedAccessor)))});