(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{1659:function(t,e,l){"use strict";l(953)},1834:function(t,e,l){"use strict";l.r(e);var n={name:"readXieyi",data:function(){return{regStatus:!0,textarea:"一般注册页面的用户协议放在一个文本域的textarea控件内的,我们可以监听文本域的onscroll滚动事件,并借助滚动高度(scrollHeight)来判断用户是否阅读完文本域中的协议,然后来激活启动用户注册按钮,一般注册页面的用户协议放在一个文本域的textarea控件内的,我们可以监听文本域的onscroll滚动事件,并借助滚动高度(scrollHeight)来判断用户是否阅读完文本域中的协议,然后来激活启动用户注册按钮,一般注册页面的用户协议放在一个文本域的textarea控件内的,我们可以监听文本域的onscroll滚动事件,并借助滚动高度(scrollHeight)来判断用户是否阅读完文本域中的协议,然后来激活启动用户注册按钮,一般注册页面的用户协议放在一个文本域的textarea控件内的,我们可以监听文本域的onscroll滚动事件,并借助滚动高度(scrollHeight)来判断用户是否阅读完文本域中的协议,然后来激活启动用户注册按钮"}},mounted:function(){this.init()},methods:{init:function(){var t=this,e=document.getElementById("inputTextarea");e.addEventListener("scroll",(function(){console.log("scrollTop",e.scrollTop,"clientHeight",e.clientHeight,"scrollHeight",e.scrollHeight),Math.ceil(e.scrollTop)+e.clientHeight>=e.scrollHeight?t.regStatus=!1:t.regStatus=!0}))},handleJump:function(){window.open("https://tv.itclan.cn","_blank")}}},a=(l(1659),l(12)),r=Object(a.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"wrap"},[l("el-input",{attrs:{id:"inputTextarea",type:"textarea",readonly:!0,rows:8,placeholder:"请输入内容"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1),t._v(" "),l("br"),t._v(" "),l("div",[l("el-button",{ref:"regBtn",attrs:{type:"primary",disabled:t.regStatus},on:{click:t.handleJump}},[t._v("注册")])],1)])}),[],!1,null,"97dc9748",null);e.default=r.exports},953:function(t,e,l){}}]);