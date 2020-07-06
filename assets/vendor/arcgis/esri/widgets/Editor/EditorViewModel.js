// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/arrayUtils ../../core/Collection ../../core/Error ../../core/Evented ../../core/HandleOwner ../../core/Logger ../../core/watchUtils ../../core/accessorSupport/decorators ../../layers/GraphicsLayer ../../layers/graphics/editingSupport ../Attachments/AttachmentsViewModel ./CreateWorkflow ./UpdateWorkflow ../FeatureForm/FeatureFormViewModel ../FeatureTemplates/FeatureTemplatesViewModel ../Sketch/SketchViewModel ../Spinner/SpinnerViewModel".split(" "),
function(L,M,r,e,t,g,f,k,u,v,w,x,y,l,d,z,A,B,C,D,E,F,G,H){function h(d,b,a){I.error(new v(d,b,a))}function J(d){return d&&A.isEditableLayer(d.layer)}function K(d,b){return d&&k.find(d,function(a){return a.layer===b})}var I=y.getLogger("esri.widgets.Editor.EditorViewModel"),q=["create","update"];return function(p){function b(a){a=p.call(this,a)||this;a._sketchGraphicsLayer=new z({listMode:"hide"});a.activeWorkflow=null;a.activityQueue=[];a.failures=[];a.attachmentsViewModel=new B({abilities:{editing:!0}});
a.featureFormViewModel=new E;a.featureTemplatesViewModel=new F;a.layerInfos=null;a.sketchViewModel=new G({layer:a._sketchGraphicsLayer});a.spinnerViewModel=new H;return a}r(b,p);b.prototype.initialize=function(){var a=this;this.handles.add([l.on(this,"activeWorkflow","cancel",function(){return a.emit("workflow-cancel")}),l.on(this,"activeWorkflow","commit",function(){return a.emit("workflow-commit")}),l.on(this,"view.allLayerViews","change",function(){return a.notifyChange("editableItems")}),l.watch(this,
"editableItems",function(){var c=a.activeWorkflow;if(c){var b=c.stepId;"create"===c.type?(a.refreshCreationTemplates(),"awaiting-feature-creation-info"!==b||a.canCreate||a._cancelWorkflow()):"update"===c.type&&("awaiting-feature-to-update"===b&&!a.canUpdate||"awaiting-update-feature-candidate"===b&&!c.data.candidates.some(function(c){var b=a.editableItems.find(function(a){return a.layer===c.layer});return b&&-1<b.supports.indexOf("update")}))&&a._cancelWorkflow()}})])};b.prototype.destroy=function(){this.view=
null;this._cancelWorkflow()};Object.defineProperty(b.prototype,"allowedWorkflows",{get:function(){return this._get("allowedWorkflows")},set:function(a){a&&0!==a.length||(a=q.slice());this._set("allowedWorkflows",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"canCreate",{get:function(){return this.editableItems.some(function(a){return-1<a.supports.indexOf("create")})},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"canUpdate",{get:function(){return this.editableItems.some(function(a){return-1<
a.supports.indexOf("update")})},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"editableItems",{get:function(){var a=this,c=this.get("view.allLayerViews");if(!c)return new u;this.handles.remove("layer-view-property-watchers");var b=function(){return a.notifyChange("editableItems")};return c.filter(J).map(function(c){a.handles.add(l.watch(c,["suspended","suspendInfo"],b),"layer-view-property-watchers");var n=c.layer,d=c.suspendInfo;c=[];var m=a.allowedWorkflows,e=n.capabilities,
g=e.data,e=e.operations,f=K(a.layerInfos,n),g=g.supportsAttachment&&(!f||!1!==f.allowAttachments),m=m.filter(function(a){return f?!1!==f.enabled&&("create"===a&&!1!==f.addEnabled||"update"===a&&!1!==f.updateEnabled):!0}),d=d.layerInvisible||d.layerNotLoaded||d.outsideScaleRange||d.viewNotReady;!d&&k.find(m,function(a){return"create"===a})&&e.supportsAdd&&c.push("create");!d&&k.find(m,function(a){return"update"===a})&&e.supportsUpdate&&c.push("update");!d&&!1!==(f&&f.deleteEnabled)&&e.supportsDelete&&
c.push("delete");return{hasAttachments:g,layer:n,supports:c}}).reverse()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){if(!this.get("view.ready")||0===this.editableItems.length)return"disabled";var a=this.attachmentsViewModel.mode;return"add"===a?"adding-attachment":"edit"===a?"editing-attachment":(a=this.activeWorkflow)?a.stepId:"ready"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"syncing",{get:function(){return 0<this.activityQueue.length},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"view",{set:function(a){this.sketchViewModel.view=a;this.spinnerViewModel.view=a;this._set("view",a)},enumerable:!0,configurable:!0});b.prototype.startCreateWorkflowAtFeatureTypeSelection=function(){return f(this,void 0,void 0,function(){var a;return g(this,function(c){switch(c.label){case 0:return this.canCreate?[4,this._cancelWorkflow()]:(h("editing:unsupported-workflow","Create workflow is unsupported or disabled."),[2]);case 1:return c.sent(),
a=this._createCreateWorkflow(),[4,a.start()];case 2:return c.sent(),this._set("activeWorkflow",a),[2]}})})};b.prototype.startCreateWorkflowAtFeatureCreation=function(a){return f(this,void 0,void 0,function(){var c;return g(this,function(b){switch(b.label){case 0:return this.canCreate?[4,this._cancelWorkflow()]:(h("editing:unsupported-workflow","Update workflow is unsupported or disabled."),[2]);case 1:return b.sent(),c=this._createCreateWorkflow("awaiting-feature-to-create"),c.data.creationInfo=a,
[4,c.start()];case 2:return b.sent(),this._set("activeWorkflow",c),[2]}})})};b.prototype.startCreateWorkflowAtFeatureEdit=function(a){return f(this,void 0,void 0,function(){var c;return g(this,function(b){switch(b.label){case 0:return this.canCreate?[4,this._cancelWorkflow()]:(h("editing:unsupported-workflow","Update workflow is unsupported or disabled."),[2]);case 1:return b.sent(),c=this._createCreateWorkflow("editing-new-feature"),c.data.edits.feature=a,[4,c.start()];case 2:return b.sent(),this._set("activeWorkflow",
c),[2]}})})};b.prototype.startUpdateWorkflowAtFeatureSelection=function(){return f(this,void 0,void 0,function(){var a;return g(this,function(c){switch(c.label){case 0:return this.canUpdate?[4,this._cancelWorkflow()]:(h("editing:unsupported-workflow","Update workflow is unsupported or disabled."),[2]);case 1:return c.sent(),a=this._createUpdateWorkflow(),[4,a.start()];case 2:return c.sent(),this._set("activeWorkflow",a),[2]}})})};b.prototype.startUpdateWorkflowAtMultipleFeatureSelection=function(a){return f(this,
void 0,void 0,function(){var c;return g(this,function(b){switch(b.label){case 0:return this.canUpdate?[4,this._cancelWorkflow()]:(h("editing:unsupported-workflow","Update workflow is unsupported or disabled."),[2]);case 1:return b.sent(),c=this._createUpdateWorkflow("awaiting-update-feature-candidate"),c.data.candidates=a,[4,c.start()];case 2:return b.sent(),this._set("activeWorkflow",c),[2]}})})};b.prototype.startUpdateWorkflowAtFeatureEdit=function(a){return f(this,void 0,void 0,function(){var c;
return g(this,function(b){switch(b.label){case 0:return this.canUpdate?[4,this._cancelWorkflow()]:(h("editing:unsupported-workflow","Update workflow is unsupported or disabled."),[2]);case 1:return b.sent(),c=this._createUpdateWorkflow("editing-existing-feature"),c.data.edits.feature=a,[4,c.start()];case 2:return b.sent(),this._set("activeWorkflow",c),[2]}})})};b.prototype.deleteFeatureFromWorkflow=function(){return f(this,void 0,void 0,function(){var a;return g(this,function(c){switch(c.label){case 0:return a=
this.activeWorkflow,a&&"create"!==a.type?[4,this._delete(a.data.edits.feature)]:(h("editing:unsupported-workflow","Deleting requires an active update workflow."),[2]);case 1:return c.sent(),[4,a.reset()];case 2:return c.sent(),[2]}})})};b.prototype.cancelWorkflow=function(a){return f(this,void 0,void 0,function(){return g(this,function(c){return[2,this._cancelWorkflow(t({warn:!0},a))]})})};b.prototype.refreshCreationTemplates=function(){this.featureTemplatesViewModel.layers=this.editableItems.filter(function(a){return-1<
a.supports.indexOf("create")}).map(function(a){return a.layer}).toArray()};b.prototype._cancelWorkflow=function(a){return f(this,void 0,void 0,function(){var c,b;return g(this,function(d){switch(d.label){case 0:c=this.activeWorkflow;if(!c)return a&&a.warn&&h("editing:no-active-workflow","There is no active workflow to cancel."),[2];b=!a||!1!==a.force;if(!b)return[3,2];this.emit("workflow-cancel");this._set("activeWorkflow",null);return[4,c.cancel(a)];case 1:return d.sent(),[2];case 2:return[4,c.cancel(a)];
case 3:return d.sent(),this._set("activeWorkflow",null),[2]}})})};b.prototype._createCreateWorkflow=function(a){var c=this;return C.create(this,a,function(a){return c._create(a)})};b.prototype._createUpdateWorkflow=function(a){var c=this;return D.create(this,a,function(a){return c._update(a)})};b.prototype._create=function(a){return f(this,void 0,void 0,function(){return g(this,function(c){switch(c.label){case 0:return[4,this._applyEdits(a.layer,{addFeatures:[a]})];case 1:return c.sent(),[2]}})})};
b.prototype._delete=function(a){return f(this,void 0,void 0,function(){return g(this,function(c){switch(c.label){case 0:return[4,this._applyEdits(a.layer,{deleteFeatures:[a]})];case 1:return c.sent(),[2]}})})};b.prototype._update=function(a){return f(this,void 0,void 0,function(){return g(this,function(c){switch(c.label){case 0:return[4,this._applyEdits(a.layer,{updateFeatures:[a]})];case 1:return c.sent(),[2]}})})};b.prototype._applyEdits=function(a,c){return f(this,void 0,void 0,function(){var b;
return g(this,function(d){switch(d.label){case 0:return[4,this._queueOperation(function(){return a.applyEdits(c)})];case 1:return d.sent(),[4,this.view.whenLayerView(a)];case 2:return b=d.sent(),[4,l.whenFalseOnce(b,"updating")];case 3:return d.sent(),[2]}})})};b.prototype._queueOperation=function(a){var b=this;this.activityQueue.push(a);this.notifyChange("syncing");var d=function(a,b){a=b.indexOf(a);-1<a&&b.splice(a,1)};return a().then(function(a){var b=a.deleteFeatureResults,c=a.updateFeatureResults;
if(a=k.find(a.addFeatureResults,function(a){return!!a.error})||k.find(c,function(a){return!!a.error})||k.find(b,function(a){return!!a.error}))throw a.error;}).catch(function(c){h("editing:operation-error","An error occurred.",{error:c});var e={error:c,retry:function(){d(e,b.failures);return b._queueOperation(a)},cancel:function(){d(e,b.failures)}};b._set("failures",b.failures.concat([e]))}).then(function(){d(a,b.activityQueue);b.notifyChange("syncing")})};e([d.property({readOnly:!0})],b.prototype,
"activeWorkflow",void 0);e([d.property({readOnly:!0})],b.prototype,"activityQueue",void 0);e([d.property({value:q.slice()})],b.prototype,"allowedWorkflows",null);e([d.property({readOnly:!0,dependsOn:["editableItems"]})],b.prototype,"canCreate",null);e([d.property({readOnly:!0,dependsOn:["editableItems"]})],b.prototype,"canUpdate",null);e([d.property({dependsOn:["allowedWorkflows","layerInfos","view.allLayerViews","view.ready"],readOnly:!0})],b.prototype,"editableItems",null);e([d.property({readOnly:!0})],
b.prototype,"failures",void 0);e([d.property()],b.prototype,"attachmentsViewModel",void 0);e([d.property()],b.prototype,"featureFormViewModel",void 0);e([d.property()],b.prototype,"featureTemplatesViewModel",void 0);e([d.property()],b.prototype,"layerInfos",void 0);e([d.property()],b.prototype,"sketchViewModel",void 0);e([d.property()],b.prototype,"spinnerViewModel",void 0);e([d.property({dependsOn:["attachmentsViewModel.mode","editableItems","activeWorkflow.stepId","view.ready"]})],b.prototype,"state",
null);e([d.property({readOnly:!0})],b.prototype,"syncing",null);e([d.property()],b.prototype,"view",null);return b=e([d.subclass("esri.widgets.Editor.EditorViewModel")],b)}(d.declared(x.HandleOwnerMixin(w.EventedAccessor)))});