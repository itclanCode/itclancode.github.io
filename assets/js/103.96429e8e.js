(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1797:function(t,n,e){"use strict";e(998)},1931:function(t,n,e){"use strict";e.r(n);var c={name:"FeedBack",data:function(){return{msgpath:"https://coder.itclan.cn".concat(this.$route.path)}},methods:{handleShareCopy:function(){var t=this;this.$copyText(this.msgpath).then((function(n){t.$message({message:"恭喜您已成功复制到剪切板,试试与他人分享吧",type:"success",duration:4e3,center:!0})}),(function(t){alert("Can not copy")}))},handleFeedBack:function(t){this.$dialog.confirm({title:"温馨提示",message:"亲,您即将前往留言,是时候开始你真正的表达了",theme:"round-button",showCancelButton:!0,cancelButtonColor:"#ccc"}).then((function(){window.open(t,"_blank")})).catch((function(){}))},handleAnswer:function(t){this.$dialog.confirm({title:"温馨提示",message:"亲,此项为付费解答服务,我在等风,也在等你",theme:"round-button",showCancelButton:!0,cancelButtonColor:"#ccc"}).then((function(){window.open(t,"_blank")})).catch((function(){}))},handleColect:function(){this.$message({message:"键盘侠不止有ctrl+c,ctrl+v,还有ctrl+D",type:"success",duration:4e3,center:!0})}}},o=(e(1797),e(12)),s=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"feedback-box"},[e("div",{staticClass:"feedback-content"},[e("div",{on:{click:t.handleShareCopy}},[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/feedback/1607598007853-icon-share.png"}}),t._v("分享\n    ")]),t._v(" "),e("div",{on:{click:function(n){return t.handleFeedBack("http://itclancoder.mikecrm.com/WkvRFA4")}}},[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/feedback/1607598092598-icon-experiense.png"}}),t._v("留言\n    ")]),t._v(" "),e("div",{on:{click:function(n){return t.handleAnswer("http://itclancoder.mikecrm.com/wkgblhv")}}},[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/feedback/1607598132714-icon-dspel.png"}}),t._v("解答\n    ")]),t._v(" "),e("div",{on:{click:t.handleColect}},[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/feedback/1607598161589-icon-collect.png"}}),t._v("收藏\n    ")])])])}),[],!1,null,"2482e860",null);n.default=s.exports},998:function(t,n,e){}}]);