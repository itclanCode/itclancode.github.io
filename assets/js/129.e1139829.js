(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{1580:function(n,t,i){"use strict";i(923)},1727:function(n,t,i){"use strict";i.r(t);i(89);var o={name:"clickimgSuiji",data:function(){return{num:0,numbers:[],timer:null,onOff:!0,color:"red"}},mounted:function(){this.addNum(),this.randomNum()},methods:{addNum:function(){for(var n=1;n<=100;n++)this.numbers.push(n)},randomNum:function(){var n=this;this.timer=setInterval((function(){n.num=Math.floor(Math.random()*(n.numbers.length-1))+1}),100)},handleBtnCLick:function(){this.onOff?(this.color="#000",clearInterval(this.timer)):(this.color="red",this.randomNum()),this.onOff=!this.onOff},handleChange:function(){window.open("https://game.itclan.cn/h5/58-imgchange/","blank")}}},e=(i(1580),i(12)),r=Object(e.a)(o,(function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{attrs:{id:"wrap"}},[i("p",{staticClass:"text",style:{color:n.color}},[n._v(n._s(n.num))]),n._v(" "),i("p",[i("el-button",{attrs:{type:1==n.onOff?"primary":"danger"},on:{click:n.handleBtnCLick}},[n._v(n._s(1==n.onOff?"暂停":"开始"))]),n._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:n.handleChange}},[n._v("切换图片")])],1)])}),[],!1,null,"296027fc",null);t.default=r.exports},923:function(n,t,i){}}]);