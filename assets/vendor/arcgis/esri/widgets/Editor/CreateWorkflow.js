// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/generatorHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/awaiterHelper ../../core/tsSupport/declareExtendsHelper ../../core/accessorSupport/decorators ./CreateWorkflowData ./Edits ./Workflow ./workflowUtils".split(" "),function(w,x,h,p,f,q,m,r,t,u,n){function v(b){if(1!==b.length)return null;b=b[0];if("items"in b){if(1===b.items.length)return b.items[0]}else return b;return null}return function(b){function e(d){d=b.call(this,d)||this;d.type=
"create";return d}q(e,b);g=e;e.create=function(d,b,a){d=new r({edits:new t,viewModel:d});a=new g({data:d,afterCommit:a});a._set("steps",this._createWorkflowSteps(a,b));return a};e._createWorkflowSteps=function(d,b){void 0===b&&(b="awaiting-feature-creation-info");var a=d.data,k=d.handles,e={"awaiting-feature-creation-info":function(){return{id:"awaiting-feature-creation-info",setUp:function(){return f(this,void 0,void 0,function(){return h(this,function(c){a.creationInfo=null;k.add(a.viewModel.featureTemplatesViewModel.on("select",
function(c){c=c.item;a.creationInfo={layer:c.layer,template:c.template};a.viewModel.activeWorkflow.next()}),this.id);return[2]})})},tearDown:function(){return f(this,void 0,void 0,function(){return h(this,function(a){k.remove(this.id);return[2]})})}}},"awaiting-feature-to-create":function(){return{id:"awaiting-feature-to-create",setUp:function(){return f(this,void 0,void 0,function(){var c,b=this;return h(this,function(d){c=function(){k.add(n.setUpFeatureAdd(a.viewModel.sketchViewModel,a.creationInfo,
a.viewModel.view,function(c){a.edits.feature=c;a.viewModel.activeWorkflow.next()},function(){k.remove(b.id);c()}),b.id)};c();return[2]})})},tearDown:function(){return f(this,void 0,void 0,function(){return h(this,function(a){k.remove(this.id);return[2]})})}}},"editing-new-feature":function(){return{id:"editing-new-feature",setUp:function(){return f(this,void 0,void 0,function(){var c,b,d,e,f,g,l,m;return h(this,function(h){switch(h.label){case 0:return c=a.edits.feature,b=a.viewModel,e=(d=n.findLayerInfo(b.layerInfos,
c.layer))&&d.fieldConfig,b.featureFormViewModel.set({feature:c,fieldConfig:e}),f=n.getVisualVariableAttributes(c),[4,n.setUpGeometryUpdate(c,f,b.sketchViewModel,b.view,function(c){var d=c.geometry;c=c.attributes;if(f.rotation){var e=f.rotation.field;b.featureFormViewModel.setValue(e,c[e])}f.size&&(e=f.size.field,b.featureFormViewModel.setValue(e,c[e]));a.edits.updateAttributes(c);a.edits.updateGeometry(d)})];case 1:return g=h.sent(),l=g.interactive,m=g.visual,k.add([a.viewModel.featureFormViewModel.on("value-change",
function(){a.edits.updateAttributes(a.viewModel.featureFormViewModel.getValues());c.attributes=a.edits.feature.attributes}),l,m],this.id),[2]}})})},tearDown:function(){return f(this,void 0,void 0,function(){return h(this,function(c){a.edits.feature=null;a.viewModel.featureFormViewModel.set({feature:null,fieldConfig:null});k.remove(this.id);return[2]})})}}}},g=!1;d=["awaiting-feature-creation-info","awaiting-feature-to-create","editing-new-feature"].filter(function(a){return g?!0:g=a===b}).map(function(a){return e[a]()});
a.viewModel.refreshCreationTemplates();var l=v(a.viewModel.featureTemplatesViewModel.items);"awaiting-feature-creation-info"===d[0].id&&l&&(a.creationInfo={layer:l.layer,template:l.template},d.shift());return d};var g;return e=g=p([m.subclass("esri.widgets.Editor.CreateWorkflow")],e)}(m.declared(u))});