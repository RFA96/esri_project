//>>built
define(["../util/oo","../stencil/Path"],function(g,h){return g.declare(h,function(d){this.stencil.connectMult([[this.stencil,"select",this,"select"],[this.stencil,"deselect",this,"deselect"],[this.stencil,"render",this,"render"],[this.stencil,"onDelete",this,"destroy"]]);this.connect("onBeforeRender",this,function(){var a=this.stencil.points[this.idx1],b=this.stencil.points[this.idx2];this.stencil.getRadius()>=this.minimumSize?this.points=this.arrowHead(b.x,b.y,a.x,a.y,this.style):this.points=[]})},
{idx1:0,idx2:1,subShape:!0,minimumSize:30,arrowHead:function(d,a,b,e,c){a={start:{x:d,y:a},x:b,y:e};d=this.util.angle(a);var f=this.util.length(a);a=c.arrows.length;c=c.arrows.width/2;f<a&&(a=f/2);f=this.util.pointOnCircle(b,e,-a,d-c);c=this.util.pointOnCircle(b,e,-a,d+c);return[{x:b,y:e},f,c]}})});