(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1552:function(t,i,e){"use strict";e(898)},1697:function(t,i,e){"use strict";e.r(i);e(674),e(178),e(13),e(54);var o=e(390),s=e.n(o),a={top:"bottom",right:"left",bottom:"top",left:"right",topRight:"right",bottomRight:"bottom",bottomLeft:"left",topLeft:"top",code:""},h={top:{top:!1,right:"width-right",bottom:"height",left:"width-left"},right:{top:"height-top",right:!1,bottom:"height-bottom",left:"width"},bottom:{top:"height",right:"width-right",bottom:!1,left:"width-left"},left:{top:"height-top",right:"width",bottom:"height-bottom",left:!1},topRight:{top:!1,right:"width",bottom:"height",left:!1},bottomRight:{top:!1,right:!1,bottom:"height",left:"width"},bottomLeft:{top:"height",right:!1,bottom:!1,left:"width"},topLeft:{top:"height",right:"width",bottom:!1,left:!1}},r={name:"createTriangle",data:function(){return{type:"iso",choosenColor:"#42b983",direction:"top",width:100,height:100,left:50,right:50,top:50,bottom:50,showEqu:!0,lengths:"",colors:"",widthDisable:!1,heightDisable:!1,leftDisable:!1,rightDisable:!1,topDisable:!1,bottomDisable:!1}},watch:{direction:function(t){this.changeSetup(),this.changeSize(),this.updateCSS()},type:function(){this.changeSetup(),this.changeSize(),this.updateCSS()}},methods:{update:function(){this.changeSize(),this.updateCSS()},setActive:function(t){return t==this.direction?"active":""},changeSize:function(){"top"==this.direction||"bottom"==this.direction||"left"==this.direction||"right"==this.direction?(this.widthDisable?this.width=1*this.left+1*this.right:(this.left=1*this.width/2,this.right=1*this.width/2),this.heightDisable?this.height=1*this.top+1*this.bottom:(this.top=1*this.height/2,this.bottom=1*this.height/2)):"iso"==this.type&&(this.left=1*this.width/2,this.right=1*this.width/2,this.top=1*this.height/2,this.bottom=1*this.height/2)},updateCSS:function(){var t={top:0,right:0,bottom:0,left:0},i={top:"transparent",right:"transparent",bottom:"transparent",left:"transparent"},e=h[this.direction];for(var o in i[a[this.direction]]=this.choosenColor,e)if(!1===e[o])t[o]="0";else switch(this.type){case"equ":if("top"==this.direction||"bottom"==this.direction){var r=(Math.sqrt(3)/2*this.width).toFixed(1);switch(e[o]){case"width":case"height":t[o]=r+"px";break;case"width-left":case"width-right":t[o]=this.width/2+"px"}}else if("left"==this.direction||"right"==this.direction){r=(Math.sqrt(3)/2*this.height).toFixed(1);switch(e[o]){case"width":case"height":t[o]=r+"px";break;case"height-top":case"height-bottom":t[o]=this.height/2+"px"}}break;case"iso":switch(e[o]){case"width":t[o]=this.width+"px";break;case"height":t[o]=this.height+"px";break;case"width-left":case"width-right":t[o]=this.width/2+"px";break;case"height-top":case"height-bottom":t[o]=this.height/2+"px"}break;case"sca":switch(e[o]){case"width":t[o]=this.width+"px";break;case"height":t[o]=this.height+"px";break;case"width-left":t[o]=this.left+"px";break;case"width-right":t[o]=this.right+"px";break;case"height-top":t[o]=this.top+"px";break;case"height-bottom":t[o]=this.bottom+"px"}}this.lengths=this.toArray(t).join(" "),this.colors=this.toArray(i).join(" ");var n=".triangle {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: ".concat(this.lengths,";\n  border-color: ").concat(this.colors,";\n}"),c=s.a.highlight(n,s.a.languages.css);this.$refs["code-container"].innerHTML=c},changeSetup:function(){switch("topRight"==this.direction||"bottomRight"==this.direction||"bottomLeft"==this.direction||"topLeft"==this.direction?("equ"==this.type&&(this.type="iso"),this.showEqu=!1):this.showEqu=!0,this.type){case"equ":"top"==this.direction||"bottom"==this.direction?(this.widthDisable=!1,this.heightDisable=!0,this.leftDisable=!0,this.rightDisable=!0,this.topDisable=!0,this.bottomDisable=!0):"left"==this.direction||"right"==this.direction?(this.widthDisable=!0,this.heightDisable=!1,this.leftDisable=!0,this.rightDisable=!0,this.topDisable=!0,this.bottomDisable=!0):(this.widthDisable=!1,this.heightDisable=!1,this.leftDisable=!0,this.rightDisable=!0,this.topDisable=!0,this.bottomDisable=!0);break;case"iso":this.widthDisable=!1,this.heightDisable=!1,this.leftDisable=!0,this.rightDisable=!0,this.topDisable=!0,this.bottomDisable=!0;break;case"sca":"top"==this.direction||"bottom"==this.direction?(this.widthDisable=!0,this.heightDisable=!1,this.leftDisable=!1,this.rightDisable=!1,this.topDisable=!0,this.bottomDisable=!0):"left"==this.direction||"right"==this.direction?(this.widthDisable=!1,this.heightDisable=!0,this.leftDisable=!0,this.rightDisable=!0,this.topDisable=!1,this.bottomDisable=!1):(this.widthDisable=!1,this.heightDisable=!1,this.leftDisable=!0,this.rightDisable=!0,this.topDisable=!0,this.bottomDisable=!0)}},toArray:function(t){var i=[];for(var e in t)i.push(t[e]);return i}},mounted:function(){this.changeSetup(),this.changeSize(),this.updateCSS()}},n=(e(1552),e(12)),c=Object(n.a)(r,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"createTriangle-container"},[e("div",[e("section",{staticClass:"tool-flex"},[e("div",[e("h4",[t._v(t._s("方向"))]),t._v(" "),e("div",{staticClass:"direction-contianer"},[e("div",{staticClass:"placeholder"}),t._v(" "),e("div",{staticClass:"square rotate"},[e("label",{staticClass:"direction-label",class:t.setActive("top"),attrs:{for:"top"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",id:"top",value:"top"},domProps:{checked:t._q(t.direction,"top")},on:{change:function(i){t.direction="top"}}})]),t._v(" "),e("label",{staticClass:"direction-label",class:t.setActive("right"),attrs:{for:"right"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",id:"right",value:"right"},domProps:{checked:t._q(t.direction,"right")},on:{change:function(i){t.direction="right"}}})]),t._v(" "),e("label",{staticClass:"direction-label",class:t.setActive("left"),attrs:{for:"left"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",id:"left",value:"left"},domProps:{checked:t._q(t.direction,"left")},on:{change:function(i){t.direction="left"}}})]),t._v(" "),e("label",{staticClass:"direction-label",class:t.setActive("bottom"),attrs:{for:"bottom"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",id:"bottom",value:"bottom"},domProps:{checked:t._q(t.direction,"bottom")},on:{change:function(i){t.direction="bottom"}}})])]),t._v(" "),e("div",{staticClass:"square"},[e("label",{staticClass:"direction-label",class:t.setActive("topLeft"),attrs:{for:"topLeft"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",id:"topLeft",value:"topLeft"},domProps:{checked:t._q(t.direction,"topLeft")},on:{change:function(i){t.direction="topLeft"}}})]),t._v(" "),e("label",{staticClass:"direction-label",class:t.setActive("topRight"),attrs:{for:"topRight"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",id:"topRight",value:"topRight"},domProps:{checked:t._q(t.direction,"topRight")},on:{change:function(i){t.direction="topRight"}}})]),t._v(" "),e("label",{staticClass:"direction-label",class:t.setActive("bottomLeft"),attrs:{for:"bottomLeft"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",id:"bottomLeft",value:"bottomLeft"},domProps:{checked:t._q(t.direction,"bottomLeft")},on:{change:function(i){t.direction="bottomLeft"}}})]),t._v(" "),e("label",{staticClass:"direction-label",class:t.setActive("bottomRight"),attrs:{for:"bottomRight"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",id:"bottomRight",value:"bottomRight"},domProps:{checked:t._q(t.direction,"bottomRight")},on:{change:function(i){t.direction="bottomRight"}}})])])])]),t._v(" "),e("div",[e("h4",[t._v(t._s("颜色"))]),t._v(" "),e("el-color-picker",{on:{change:t.update},model:{value:t.choosenColor,callback:function(i){t.choosenColor=i},expression:"choosenColor"}})],1)]),t._v(" "),e("section",[e("h4",[t._v(t._s("类型"))]),t._v(" "),t.showEqu?e("el-radio",{attrs:{label:"equ"},model:{value:t.type,callback:function(i){t.type=i},expression:"type"}},[t._v(t._s("等边"))]):t._e(),t._v(" "),e("el-radio",{attrs:{label:"iso"},model:{value:t.type,callback:function(i){t.type=i},expression:"type"}},[t._v(t._s("等腰"))]),t._v(" "),e("el-radio",{attrs:{label:"sca"},model:{value:t.type,callback:function(i){t.type=i},expression:"type"}},[t._v(t._s("不等边"))])],1),t._v(" "),e("section",{staticClass:"size-section"},[e("h4",[t._v("\n          "+t._s("大小")+"\n          "),e("span",[t._v(t._s("（更改值后请敲回车）"))])]),t._v(" "),e("p",[t._v(t._s("宽度"))]),t._v(" "),e("el-input-number",{attrs:{disabled:t.widthDisable,min:0,max:300,size:"mini"},on:{change:t.update},model:{value:t.width,callback:function(i){t.width=i},expression:"width"}}),t._v(" "),e("div",{staticClass:"tool-flex"},[e("div",[e("p",[t._v(t._s("左"))]),t._v(" "),e("el-input-number",{attrs:{disabled:t.leftDisable,min:0,max:150,size:"mini"},on:{change:t.update},model:{value:t.left,callback:function(i){t.left=i},expression:"left"}})],1),t._v(" "),e("div",[e("p",[t._v(t._s("右"))]),t._v(" "),e("el-input-number",{attrs:{disabled:t.rightDisable,min:0,max:150,size:"mini"},on:{change:t.update},model:{value:t.right,callback:function(i){t.right=i},expression:"right"}})],1)]),t._v(" "),e("p",[t._v(t._s("高度"))]),t._v(" "),e("el-input-number",{attrs:{disabled:t.heightDisable,min:0,max:300,size:"mini"},on:{change:t.update},model:{value:t.height,callback:function(i){t.height=i},expression:"height"}}),t._v(" "),e("div",{staticClass:"tool-flex"},[e("div",[e("p",[t._v(t._s("上"))]),t._v(" "),e("el-input-number",{attrs:{disabled:t.topDisable,min:0,max:150,size:"mini"},on:{change:t.update},model:{value:t.top,callback:function(i){t.top=i},expression:"top"}})],1),t._v(" "),e("div",[e("p",[t._v(t._s("下"))]),t._v(" "),e("el-input-number",{attrs:{disabled:t.bottomDisable,min:0,max:150,size:"mini"},on:{change:t.update},model:{value:t.bottom,callback:function(i){t.bottom=i},expression:"bottom"}})],1)])],1)]),t._v(" "),e("div",{staticClass:"triangle-container"},[e("div",{staticClass:"triangle-demo",style:{borderWidth:t.lengths,borderColor:t.colors}})])]),t._v(" "),e("div",{staticStyle:{width:"100%"}},[e("h3",[t._v("CSS")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{staticClass:"language-css"},[e("code",{ref:"code-container"})])])])])}),[],!1,null,"835f3d74",null);i.default=c.exports},674:function(t,i,e){"use strict";var o=e(10),s=e(8),a=e(11),h=e(110),r=e(393),n=e(675),c=e(14),l=s.RangeError,d=s.String,b=Math.floor,p=a(n),g=a("".slice),m=a(1..toFixed),f=function(t,i,e){return 0===i?e:i%2==1?f(t,i-1,e*t):f(t*t,i/2,e)},u=function(t,i,e){for(var o=-1,s=e;++o<6;)s+=i*t[o],t[o]=s%1e7,s=b(s/1e7)},v=function(t,i){for(var e=6,o=0;--e>=0;)o+=t[e],t[e]=b(o/i),o=o%i*1e7},w=function(t){for(var i=6,e="";--i>=0;)if(""!==e||0===i||0!==t[i]){var o=d(t[i]);e=""===e?o:e+p("0",7-o.length)+o}return e};o({target:"Number",proto:!0,forced:c((function(){return"0.000"!==m(8e-5,3)||"1"!==m(.9,0)||"1.25"!==m(1.255,2)||"1000000000000000128"!==m(0xde0b6b3a7640080,0)}))||!c((function(){m({})}))},{toFixed:function(t){var i,e,o,s,a=r(this),n=h(t),c=[0,0,0,0,0,0],b="",m="0";if(n<0||n>20)throw l("Incorrect fraction digits");if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return d(a);if(a<0&&(b="-",a=-a),a>1e-21)if(e=(i=function(t){for(var i=0,e=t;e>=4096;)i+=12,e/=4096;for(;e>=2;)i+=1,e/=2;return i}(a*f(2,69,1))-69)<0?a*f(2,-i,1):a/f(2,i,1),e*=4503599627370496,(i=52-i)>0){for(u(c,0,e),o=n;o>=7;)u(c,1e7,0),o-=7;for(u(c,f(10,o,1),0),o=i-1;o>=23;)v(c,1<<23),o-=23;v(c,1<<o),u(c,1,1),v(c,2),m=w(c)}else u(c,0,e),u(c,1<<-i,0),m=w(c)+p("0",n);return m=n>0?b+((s=m.length)<=n?"0."+p("0",n-s)+m:g(m,0,s-n)+"."+g(m,s-n)):b+m}})},675:function(t,i,e){"use strict";var o=e(8),s=e(110),a=e(29),h=e(55),r=o.RangeError;t.exports=function(t){var i=a(h(this)),e="",o=s(t);if(o<0||o==1/0)throw r("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(i+=i))1&o&&(e+=i);return e}},898:function(t,i,e){}}]);