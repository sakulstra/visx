(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{"9Qsi":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("aWzz"),i=n.n(a),r=n("ERkP"),l=n.n(r);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e){var t=e.flex,n=void 0===t?"1":t,a=e.label,i=e.margin,r=void 0===i?"5px 0":i,s=e.align,c=void 0===s?"left":s,u=e.children,f=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["flex","label","margin","align","children"]);return l.a.createElement("div",o({className:"visx-legend-label",style:{justifyContent:c,display:"flex",flex:n,margin:r}},f),u||a)}s.propTypes={align:i.a.string,label:i.a.node,flex:i.a.oneOfType([i.a.string,i.a.number]),margin:i.a.oneOfType([i.a.string,i.a.number]),children:i.a.node}},ASUk:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("ERkP"),i=n.n(a),r=n("ssgm");function l(e){return i.a.createElement(r.a,e)}},Iian:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("aWzz"),i=n.n(a),r=n("ERkP"),l=n.n(r);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e){var t=e.flexDirection,n=void 0===t?"row":t,a=e.alignItems,i=void 0===a?"center":a,r=e.margin,s=void 0===r?"0":r,c=e.display,u=void 0===c?"flex":c,f=e.children,p=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["flexDirection","alignItems","margin","display","children"]);return l.a.createElement("div",o({className:"visx-legend-item",style:{display:u,alignItems:i,flexDirection:n,margin:s}},p),f)}s.propTypes={alignItems:i.a.string,margin:i.a.oneOfType([i.a.string,i.a.number]),children:i.a.node,display:i.a.string}},a7GN:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("ERkP"),i=n.n(a),r=n("O94r"),l=n.n(r),o=n("5Nbk"),s=n("pn27");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var u=function(){return{dy:"0.25em",fill:"#222",fontFamily:"Arial",fontSize:10,textAnchor:"middle"}};function f(e){var t=e.axisClassName,n=e.labelOffset,a=void 0===n?8:n,r=e.tickLabelProps,f=void 0===r?u:r,p=e.tickLength,d=void 0===p?8:p,m=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["axisClassName","labelOffset","tickLabelProps","tickLength"]);return i.a.createElement(o.a,c({axisClassName:l()("visx-axis-bottom",t),labelOffset:a,orientation:s.a.bottom,tickLabelProps:f,tickLength:d},m))}},"dk/h":function(e){e.exports=JSON.parse('{"name":"@visx/demo-barstack","description":"Standalone visx stacked bar demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/axis":"latest","@visx/event":"latest","@visx/grid":"latest","@visx/group":"latest","@visx/legend":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","@visx/tooltip":"latest","d3-time-format":"2.2.3","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","barstack"]}')},i2lw:function(e,t,n){"use strict";function a(e){var t=e.scale,n=e.labelFormat;return function(e,a){return{datum:e,index:a,text:""+n(e,a),value:t(e)}}}n.d(t,"a",(function(){return a}))},ssgm:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n("aWzz"),i=n.n(a),r=n("ERkP"),l=n.n(r),o=n("O94r"),s=n.n(o),c=n("Iian"),u=n("9Qsi");function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){var t=e.fill,n=e.width,a=e.height,i=e.style;return l.a.createElement("div",{style:f({width:n,height:a,background:t},i)})}p.propTypes={fill:i.a.string,width:i.a.oneOfType([i.a.string,i.a.number]),height:i.a.oneOfType([i.a.string,i.a.number])};var d=n("JmwF");function m(e){var t=e.fill,n=e.width,a=e.height,i=e.style,r="string"===typeof n||"undefined"===typeof n?0:n,o="string"===typeof a||"undefined"===typeof a?0:a,s=Math.max(r,o),c=s/2;return l.a.createElement("svg",{width:s,height:s},l.a.createElement(d.a,{top:c,left:c},l.a.createElement("circle",{r:c,fill:t,style:i})))}function h(e){var t=e.fill,n=e.width,a=e.height,i=e.style,r="string"===typeof a||"undefined"===typeof a?0:a,o="number"===typeof(null==i?void 0:i.strokeWidth)?null==i?void 0:i.strokeWidth:2;return l.a.createElement("svg",{width:n,height:a},l.a.createElement(d.a,{top:r/2-o/2},l.a.createElement("line",{x1:0,x2:n,y1:0,y2:0,stroke:t,strokeWidth:o,style:i})))}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}m.propTypes={fill:i.a.string,width:i.a.oneOfType([i.a.string,i.a.number]),height:i.a.oneOfType([i.a.string,i.a.number])},h.propTypes={fill:i.a.string,width:i.a.oneOfType([i.a.string,i.a.number]),height:i.a.oneOfType([i.a.string,i.a.number])};var y=function(){};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e){var t=e.shape,n=void 0===t?p:t,a=e.width,i=e.height,r=e.margin,o=e.label,s=e.item,c=e.itemIndex,u=e.fill,f=e.size,d=e.shapeStyle;return l.a.createElement("div",{className:"visx-legend-shape",style:{display:"flex",width:f?f(v({},o)):a,height:f?f(v({},o)):i,margin:r}},function(e){var t=e.shape,n=void 0===t?"rect":t,a=e.fill,i=void 0===a?y:a,r=e.size,o=void 0===r?y:r,s=e.width,c=e.height,u=e.label,f=e.item,d=e.itemIndex,v=e.shapeStyle,b=void 0===v?y:v,x={width:s,height:c,item:f,itemIndex:d,label:u,fill:i(g({},u)),size:o(g({},u)),style:b(g({},u))};return"string"===typeof n?"circle"===n?l.a.createElement(m,x):"line"===n?l.a.createElement(h,x):l.a.createElement(p,x):l.a.isValidElement(n)?l.a.cloneElement(n,x):n?l.a.createElement(n,x):null}({shape:n,item:s,itemIndex:c,label:o,width:a,height:i,fill:u,shapeStyle:d}))}function x(e){return e&&"object"===typeof e&&"value"in e&&"undefined"!==typeof e.value?e.value:e}function O(e){return String(x(e))}b.propTypes={itemIndex:i.a.number.isRequired,margin:i.a.oneOfType([i.a.string,i.a.number]),fill:i.a.func,size:i.a.func,shapeStyle:i.a.func,width:i.a.oneOfType([i.a.string,i.a.number]),height:i.a.oneOfType([i.a.string,i.a.number])};var k=n("i2lw");function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var T={display:"flex"};function j(e){var t=e.className,n=e.style,a=void 0===n?T:n,i=e.scale,r=e.shape,o=e.domain,f=e.fill,p=void 0===f?O:f,d=e.size,m=void 0===d?O:d,h=e.labelFormat,g=void 0===h?x:h,y=e.labelTransform,v=void 0===y?k.a:y,j=e.shapeWidth,E=void 0===j?15:j,S=e.shapeHeight,P=void 0===S?15:S,N=e.shapeMargin,z=void 0===N?"2px 4px 2px 0":N,D=e.shapeStyle,I=e.labelAlign,L=void 0===I?"left":I,M=e.labelFlex,R=void 0===M?"1":M,C=e.labelMargin,W=void 0===C?"0 4px":C,V=e.itemMargin,A=void 0===V?"0":V,F=e.direction,_=void 0===F?"column":F,J=e.itemDirection,H=void 0===J?"row":J,q=e.legendLabelProps,G=e.children,Q=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["className","style","scale","shape","domain","fill","size","labelFormat","labelTransform","shapeWidth","shapeHeight","shapeMargin","shapeStyle","labelAlign","labelFlex","labelMargin","itemMargin","direction","itemDirection","legendLabelProps","children"]),Y=o||("domain"in i?i.domain():[]),B=v({scale:i,labelFormat:g}),K=Y.map(B);return G?l.a.createElement(l.a.Fragment,null,G(K)):l.a.createElement("div",{className:s()("visx-legend",t),style:w({},a,{flexDirection:_})},K.map((function(e,t){return l.a.createElement(c.a,w({key:"legend-"+e.text+"-"+t,margin:A,flexDirection:H},Q),l.a.createElement(b,{shape:r,height:P,width:E,margin:z,item:Y[t],itemIndex:t,label:e,fill:p,size:m,shapeStyle:D}),l.a.createElement(u.a,w({label:e.text,flex:R,margin:W,align:L},q)))})))}j.propTypes={children:i.a.func,className:i.a.string,domain:i.a.array,shapeWidth:i.a.oneOfType([i.a.string,i.a.number]),shapeHeight:i.a.oneOfType([i.a.string,i.a.number]),shapeMargin:i.a.oneOfType([i.a.string,i.a.number]),labelAlign:i.a.string,labelFlex:i.a.oneOfType([i.a.string,i.a.number]),labelMargin:i.a.oneOfType([i.a.string,i.a.number]),itemMargin:i.a.oneOfType([i.a.string,i.a.number]),fill:i.a.func,size:i.a.func,shapeStyle:i.a.func}},wReH:function(e,t,n){"use strict";n.d(t,"c",(function(){return L})),n.d(t,"a",(function(){return M})),n.d(t,"b",(function(){return Y}));var a=n("fGyu"),i=n("zjfJ"),r=n("ERkP"),l=n.n(r),o=n("gCxp"),s=n("JmwF"),c=n("aWzz"),u=n.n(c),f=n("O94r"),p=n.n(f),d=n("Ifh9"),m=n("eMuC");function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e){var t=e.top,n=e.left,a=e.xScale,i=e.yScale,r=e.width,o=e.height,c=e.className,u=e.stroke,f=e.strokeWidth,g=e.strokeDasharray,y=e.numTicksRows,v=e.numTicksColumns,b=e.rowLineStyle,x=e.columnLineStyle,O=e.xOffset,k=e.yOffset,w=e.rowTickValues,T=e.columnTickValues,j=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["top","left","xScale","yScale","width","height","className","stroke","strokeWidth","strokeDasharray","numTicksRows","numTicksColumns","rowLineStyle","columnLineStyle","xOffset","yOffset","rowTickValues","columnTickValues"]);return l.a.createElement(s.a,{className:p()("visx-grid",c),top:t,left:n},l.a.createElement(d.a,h({className:c,scale:i,width:r,stroke:u,strokeWidth:f,strokeDasharray:g,numTicks:y,lineStyle:b,offset:k,tickValues:w},j)),l.a.createElement(m.a,h({className:c,scale:a,height:o,stroke:u,strokeWidth:f,strokeDasharray:g,numTicks:v,lineStyle:x,offset:O,tickValues:T},j)))}g.propTypes={rowTickValues:u.a.array,columnTickValues:u.a.array};var y=n("a7GN"),v=n("s2H9"),b=n.n(v),x=n("cc+0"),O=n("67po"),k=n("D+es"),w=n("mHfT"),T=n("+fu8"),j=n("QnoR"),E=n("dPyl"),S=n("ASUk"),P=n("jpI8"),N=l.a.createElement;function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I,L="#a44afe",M="#eaedff",R={top:40,right:0,bottom:0,left:0},C=D(D({},T.b),{},{minWidth:60,backgroundColor:"rgba(0,0,0,0.9)",color:"white"}),W=b.a.slice(0,12),V=Object.keys(W[0]).filter((function(e){return"date"!==e})),A=W.reduce((function(e,t){var n=V.reduce((function(e,n){return e+=Number(t[n])}),0);return e.push(n),e}),[]),F=Object(w.b)("%Y-%m-%d"),_=Object(w.a)("%b %d"),J=function(e){return _(F(e))},H=function(e){return e.date},q=Object(x.a)({domain:W.map(H),padding:.2}),G=Object(O.a)({domain:[0,Math.max.apply(Math,Object(a.a)(A))],nice:!0}),Q=Object(k.a)({domain:V,range:["#6c5efb","#c998ff",L]});function Y(e){var t=e.width,n=e.height,a=e.events,i=void 0!==a&&a,r=e.margin,l=void 0===r?R:r,c=Object(j.a)(),u=c.tooltipOpen,f=c.tooltipLeft,p=c.tooltipTop,d=c.tooltipData,m=c.hideTooltip,h=c.showTooltip,v=Object(E.a)({scroll:!0}),b=v.containerRef,x=v.TooltipInPortal;if(t<10)return null;var O=t,k=n-l.top-100;return q.rangeRound([0,O]),G.range([k,0]),t<10?null:N("div",{style:{position:"relative"}},N("svg",{ref:b,width:t,height:n},N("rect",{x:0,y:0,width:t,height:n,fill:M,rx:14}),N(g,{top:l.top,left:l.left,xScale:q,yScale:G,width:O,height:k,stroke:"black",strokeOpacity:.1,xOffset:q.bandwidth()/2}),N(s.a,{top:l.top},N(o.a,{data:W,keys:V,x:H,xScale:q,yScale:G,color:Q},(function(e){return e.map((function(e){return e.bars.map((function(t){return N("rect",{key:"bar-stack-".concat(e.index,"-").concat(t.index),x:t.x,y:t.y,height:t.height,width:t.width,fill:t.color,onClick:function(){i&&alert("clicked: ".concat(JSON.stringify(t)))},onMouseLeave:function(){I=window.setTimeout((function(){m()}),300)},onMouseMove:function(e){I&&clearTimeout(I);var n=Object(P.a)(e),a=t.x+t.width/2;h({tooltipData:t,tooltipTop:null===n||void 0===n?void 0:n.y,tooltipLeft:a})}})}))}))}))),N(y.a,{top:k+l.top,scale:q,tickFormat:J,stroke:L,tickStroke:L,tickLabelProps:function(){return{fill:L,fontSize:11,textAnchor:"middle"}}})),N("div",{style:{position:"absolute",top:l.top/2-10,width:"100%",display:"flex",justifyContent:"center",fontSize:"14px"}},N(S.a,{scale:Q,direction:"row",labelMargin:"0 15px 0 0"})),u&&d&&N(x,{top:p,left:f,style:C},N("div",{style:{color:Q(d.key)}},N("strong",null,d.key)),N("div",null,d.bar.data[d.key],"\u2109"),N("div",null,N("small",null,J(H(d.bar.data))))))}try{Y.displayName="Example",Y.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}},events:{defaultValue:{value:!1},description:"",name:"events",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-barstack/Example.tsx#Example"]={docgenInfo:Y.__docgenInfo,name:"Example",path:"src/sandboxes/visx-barstack/Example.tsx#Example"})}catch(B){}}}]);