(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1483:function(t,e,i){"use strict";i(868)},1664:function(t,e,i){"use strict";i.r(e);i(54);var a=i(390),l=i.n(a),n=i(756),s={name:"multiEllipsis",data:function(){return{width:250,lineClamp:2,displayValue:"-webkit-box",overflowValue:"hidden",textOverflowValue:"ellipsis",whiteSpaceValue:"nowrap",boxOrientValue:"vertical",tableAttrData:n.a,tabcolums:n.c}},watch:{width:function(){this.updateCss()},lineClamp:function(){this.updateCss()}},methods:{styleToString:function(t){var e="";for(var i in t)e+="".concat(i,": ").concat(t[i],";\n");return e},updateCss:function(){this.$refs.css.innerHTML=l.a.highlight("width: ".concat(this.width,"px;\ndisplay: -webkit-box;\noverflow: hidden;\ntext-overflow: ellipsis;\n-webkit-box-orient: vertical;\n-webkit-line-clamp: ").concat(this.lineClamp,";"),l.a.languages.css)}},mounted:function(){this.updateCss()}},r=(i(1483),i(12)),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("div",{staticClass:"effect-display-wrap",style:{width:t.width+"px",overflow:t.overflowValue,textOverflow:t.textOverflowValue,boxOrient:t.boxOrientValue,lineClamp:t.lineClamp,display:t.displayValue}},[t._v("\n      多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号,多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号,line-clamp指定显示多少列,弹性和模型，word-break:break-all允许在单词内换行\n      box-sizing:border-box:增加padding与border不把它计算到里面去,多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号,多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号，多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号\n    ")])]),t._v(" "),i("div",{staticClass:"language-css extra-class"},[i("pre",{staticClass:"language-css",staticStyle:{"margin-bottom":"30px"}},[i("code",{ref:"css"})])]),t._v(" "),i("div",{staticClass:"attr-operate-wrap"},[i("div",{staticClass:"attr-inner-content"},[i("div",{staticClass:"text-width"},[t._v("宽度:")]),t._v(" "),i("el-slider",{staticClass:"slider",attrs:{min:200,max:705,"show-input":"","input-size":"mini"},model:{value:t.width,callback:function(e){t.width=e},expression:"width"}})],1),t._v(" "),i("div",{staticClass:"attr-inner-content"},[i("div",{staticClass:"text-width"},[t._v("显示行数:")]),t._v(" "),i("el-slider",{staticClass:"slider",attrs:{min:1,max:10,"show-input":"","input-size":"mini"},model:{value:t.lineClamp,callback:function(e){t.lineClamp=e},expression:"lineClamp"}})],1)]),t._v(" "),i("div",{staticClass:"attr-table-desc"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableAttrData}},t._l(t.tabcolums,(function(t){return i("el-table-column",{key:t.prop,attrs:{prop:t.prop,label:t.label,align:"center","header-align":"center"}})})),1)],1)])}),[],!1,null,"15c87fd1",null);e.default=o.exports},756:function(t,e,i){"use strict";i.d(e,"a",(function(){return l})),i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n}));var a=[{attr:"width",type:"Number",value:"500",descption:"宽度值必须固定"},{attr:"overflow",type:"String",value:"hidden/visible/scroll/auto",descption:"hidden-内容溢出隐藏 | visible(默认-不会被裁剪) | scroll/auto(内容溢出-水平垂直方向会出现滚动条)"},{attr:"text-overflow",type:"String",value:"ellipsis",descption:"多出部分省略号显示"},{attr:"white-space",type:"String",value:"nowrap",descption:"不换行"}],l=[{attr:"width",type:"Number",value:"500",descption:"宽度值必须固定"},{attr:"display",type:"String",value:"-webkit-box(-m/-moz)",descption:"老版本-声明盒子弹性收缩,必须要加上浏览器前缀,chrome(-webkit),IE(-moz),firefox(-moz)"},{attr:"overflow",type:"String",value:"hidden/visible/scroll/auto",descption:"hidden-内容溢出隐藏"},{attr:"text-overflow",type:"String",value:"ellipsis",descption:"多出部分省略号显示"},{attr:"box-orient",type:"String",value:"vertical",descption:"vertical垂直方向/horizontal水平方向"},{attr:"line-clamp",type:"Number",value:2,descption:"控制显示行数"}],n=[{prop:"attr",label:"属性"},{prop:"type",label:"类型"},{prop:"value",label:"值",width:"200px"},{prop:"descption",label:"说明"}]},868:function(t,e,i){}}]);