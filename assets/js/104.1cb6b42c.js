(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1521:function(t,o,e){"use strict";e(897)},1655:function(t,o,e){"use strict";e.r(o);e(28),e(177);var s=e(259),n={components:{Notify:s.a},name:"customAlertBox",data:function(){return{show:!1,isMobile:!0,isMobileAlert:!0}},mounted:function(){this.isPC()},methods:{openSuccessPop:function(){this.$message({showClose:!0,message:"这是一条成功消息",type:"success"})},openMessageBox:function(){var t=this;this.$alert("你好哈,我是一个弹窗","itclanCoder",{confirmButtonText:"确定",callback:function(o){t.$message({type:"info",message:"action: ".concat(o)})}})},showPopup:function(){this.show=!0},showNotify:function(){Object(s.a)({type:"danger",message:"通知内容"})},isPC:function(){if(!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))return this.isMobile=!1,this.isMobileAlert=!0,console.log("mobile do not load model")}}},i=(e(1521),e(12)),a=Object(i.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"wrap"},[t.isMobile?e("div",{staticClass:"wrap-content"},[e("el-button",{attrs:{plain:!0},on:{click:t.openSuccessPop}},[t._v("点击弹出成功提示框")]),t._v(" "),e("el-button",{attrs:{type:"text"},on:{click:t.openMessageBox}},[t._v("点击打开 Message Box")])],1):t._e(),t._v(" "),t.isMobileAlert?e("div",{staticClass:"wrap-content"},[e("van-button",{attrs:{type:"primary"},on:{click:t.showPopup}},[t._v("展示弹出层")]),t._v(" "),e("van-button",{attrs:{type:"warning"},on:{click:t.showNotify}},[t._v("展示提示框")])],1):t._e(),t._v(" "),e("van-popup",{style:{height:"30%"},attrs:{position:"bottom"},model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[t._v("底部弹出内容")])],1)}),[],!1,null,"553dea04",null);o.default=a.exports},897:function(t,o,e){}}]);