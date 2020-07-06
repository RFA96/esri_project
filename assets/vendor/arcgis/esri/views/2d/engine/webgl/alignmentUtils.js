// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,d){Object.defineProperty(d,"__esModule",{value:!0});var b;(function(a){a[a.Left=-1]="Left";a[a.Center=0]="Center";a[a.Right=1]="Right"})(b=d.HAlign||(d.HAlign={}));var c;(function(a){a[a.Top=1]="Top";a[a.Center=0]="Center";a[a.Bottom=-1]="Bottom";a[a.Baseline=2]="Baseline"})(c=d.VAlign||(d.VAlign={}));d.getXAnchorDirection=function(a){switch(a){case "left":return b.Left;case "right":return b.Right;case "center":case "justify":return b.Center}};d.getYAnchorDirection=
function(a){switch(a){case "top":return c.Top;case "middle":return c.Center;case "baseline":return c.Baseline;case "bottom":return c.Bottom}};d.getAlignmentFromPlacement=function(a){switch(a){case "above-left":return[b.Right,c.Bottom];case "above-center":case "above-along":return[b.Center,c.Bottom];case "above-right":return[b.Left,c.Bottom];case "center-left":return[b.Right,c.Center];case "center-center":case "center-along":return[b.Center,c.Center];case "center-right":return[b.Left,c.Center];case "below-left":return[b.Right,
c.Top];case "below-center":case "below-along":return[b.Center,c.Top];case "below-right":return[b.Left,c.Top];case "always-horizontal":return[b.Center,c.Baseline];default:return console.debug("Found invalid placement type "+a),[b.Center,c.Center]}};d.getXDirection=function(a){switch(a){case b.Right:return-1;case b.Center:return 0;case b.Left:return 1;default:return console.debug("Found invalid horizontal alignment "+a),0}};d.getYDirection=function(a){switch(a){case c.Top:return 1;case c.Center:return 0;
case c.Bottom:case c.Baseline:return-1;default:return console.debug("Found invalid vertical alignment "+a),0}};d.getJustification=function(a){switch(a){case "left":return b.Left;case "right":return b.Right;case "center":case "justify":return b.Center}}});