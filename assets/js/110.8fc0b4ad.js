(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1561:function(i,t,e){"use strict";e(887)},1731:function(i,t,e){"use strict";e.r(t);e(29),e(252),e(64),e(14),e(87);var a={name:"ArticleAdvertiSpace",props:["width","height"],data:function(){return{carouses:[{imgUrl:"https://s1.ax1x.com/2022/06/24/jiTfOO.png",text:"测算",id:"2",href:"https://cesuan.itclan.cn/"}],centerDialogVisible:!1,isDiaLog:!0}},methods:{linkFun:function(){var i=this;if(!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))return this.isDiaLog=!1,this.$message({message:"如需合作,请您联系站长,期待我们合作愉快",type:"error",center:!0,duration:5e3}),console.log("移动端下不显示dialog");this.carouses.forEach((function(t){"javascript:;"!=t.href?t.href=t.href:i.centerDialogVisible=!0}))}}},n=(e(1561),e(12)),r=Object(n.a)(a,(function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("div",{staticClass:"carousel"},[e("el-carousel",{attrs:{trigger:"click",height:"150px"}},i._l(i.carouses,(function(t){return e("el-carousel-item",{key:t.id},[e("a",{attrs:{href:t.href,target:"_blank"},on:{click:i.linkFun}},[e("img",{attrs:{src:t.imgUrl,width:i.width,height:i.height,alt:""}})])])})),1)],1),i._v(" "),i.isDiaLog?e("el-dialog",{attrs:{title:"提示",visible:i.centerDialogVisible,closeOnClickModal:!1,width:"30%",center:""},on:{"update:visible":function(t){i.centerDialogVisible=t}}},[e("span",[i._v("如需合作:请您联系站长,添加微信:suibichuanji,期待我们合作愉快")]),i._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(t){i.centerDialogVisible=!1}}},[i._v("取 消")]),i._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(t){i.centerDialogVisible=!1}}},[i._v("确 定")])],1)]):i._e()],1)}),[],!1,null,"5aa9a9ba",null);t.default=r.exports},887:function(i,t,e){}}]);