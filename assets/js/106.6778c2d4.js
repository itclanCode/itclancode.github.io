(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1552:function(t,e,n){"use strict";n(895)},1699:function(t,e,n){"use strict";n.r(e);var c={name:"FeedBack",data:function(){return{msgpath:"https://coder.itclan.cn".concat(this.$route.path)}},methods:{handleShareCopy:function(){var t=this;this.$copyText(this.msgpath).then((function(e){t.$message({message:"恭喜您已成功复制到剪切板,试试与他人分享吧",type:"success",duration:4e3,center:!0})}),(function(t){alert("Can not copy")}))},handleFeedBack:function(t){this.$dialog.confirm({title:"温馨提示",message:"亲,您即将前往留言,是时候开始你真正的表达了",theme:"round-button",showCancelButton:!0,cancelButtonColor:"#ccc"}).then((function(){window.open(t,"_blank")})).catch((function(){}))},handleAnswer:function(t){this.$dialog.confirm({title:"温馨提示",message:"亲,此项为付费解答服务,我在等风,也在等你",theme:"round-button",showCancelButton:!0,cancelButtonColor:"#ccc"}).then((function(){window.open(t,"_blank")})).catch((function(){}))},handleColect:function(){this.$message({message:"键盘侠不止有ctrl+c,ctrl+v,还有ctrl+D",type:"success",duration:4e3,center:!0})}}},a=(n(1552),n(12)),o=Object(a.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feedback-box"},[n("div",{staticClass:"feedback-content"},[n("div",{on:{click:t.handleShareCopy}},[n("img",{attrs:{src:"/images/feedback/share.svg"}}),t._v("分享\n    ")]),t._v(" "),n("div",{on:{click:function(e){return t.handleFeedBack("http://itclancoder.mikecrm.com/WkvRFA4")}}},[n("img",{attrs:{src:"/images/feedback/liuyan.svg"}}),t._v("留言\n    ")]),t._v(" "),n("div",{on:{click:function(e){return t.handleAnswer("http://itclancoder.mikecrm.com/wkgblhv")}}},[n("img",{attrs:{src:"/images/feedback/jieda.svg"}}),t._v("解答\n    ")]),t._v(" "),n("div",{on:{click:t.handleColect}},[n("img",{attrs:{src:"/images/feedback/shoucang.svg"}}),t._v("收藏\n    ")])])])}),[],!1,null,"fd709896",null);e.default=o.exports},895:function(t,e,n){}}]);