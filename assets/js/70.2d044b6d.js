(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1593:function(t,i,n){"use strict";n(917)},1768:function(t,i,n){"use strict";n.r(i);var a=n(760),e=n.n(a),o={name:"RightBar",data:function(){return{isRightBar:!1,rightbar:e.a.mobileslides}},mounted:function(){window.addEventListener("scroll",this.scroll)},destroyed:function(){window.removeEventListener("scroll",this.scroll)},methods:{scroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.scrollTop=t,this.scrollTop>60?this.isRightBar=!0:this.isRightBar=!1},handleAd:function(t){this.$dialog.confirm({title:"温馨提示",message:"亲,这里接受广告主投放,可前往了解一下",theme:"round-button",showCancelButton:!0,cancelButtonColor:"#ccc"}).then((function(){window.open(t,"_blank")})).catch((function(){}))},handleKeQun:function(t){this.$dialog.confirm({title:"温馨提示",message:"亲,在这里可以加各种群,发广告,发名片,开始你的探索吧",theme:"round-button",showCancelButton:!0,cancelButtonColor:"#ccc"}).then((function(){window.open(t,"_blank")})).catch((function(){}))},handleFaKa:function(t){this.$dialog.confirm({title:"温馨提示",message:"亲,您将前往发卡商城,开始寻找对您有价值的商品吧",theme:"round-button",showCancelButton:!0,cancelButtonColor:"#ccc"}).then((function(){window.open(t,"_blank")})).catch((function(){}))},handleKelaiTV:function(t){this.$dialog.confirm({title:"温馨提示",message:"亲,您将前往客来影视TV,更多好电影,电视剧等你看哦",theme:"round-button",showCancelButton:!0,cancelButtonColor:"#ccc"}).then((function(){window.open(t,"_blank")})).catch((function(){}))},handleShange:function(t){this.$dialog.confirm({title:"打赏鼓励",message:"如果您喜欢本站或本站内容对您有所帮助,您的支持就是我的动力",theme:"round-button",showCancelButton:!0,cancelButtonColor:"#ccc"}).then((function(){window.open(t,"_blank")})).catch((function(){}))}}},r=(n(1593),n(12)),c=Object(r.a)(o,(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isRightBar,expression:"isRightBar"}],staticClass:"right-bar-wrap"},[n("div",[n("a",{attrs:{href:"#"}},[n("img",{attrs:{width:"30",height:"30",src:t.rightbar.topImg,alt:"置顶"}})])]),t._v(" "),n("div",[n("a",{attrs:{href:"/latestarticle/"}},[n("img",{attrs:{width:"30",height:"30",src:t.rightbar.newImg,alt:"最新"}})])]),t._v(" "),n("div",{on:{click:function(i){return t.handleKeQun("https://kequn.itclan.cn/app/index.php?i=2&c=entry&do=index&m=dc_sqjd&state=index&rand=68drdo&spread=0#/")}}},[n("img",{attrs:{width:"30",height:"30",src:t.rightbar.keQunImg,alt:"社群"}})]),t._v(" "),n("div",[n("img",{staticClass:"medium-zoom lazy",attrs:{width:"30",height:"30",loading:"lazy",src:t.rightbar.buyImg,alt:"小程序码"}})]),t._v(" "),n("div",[n("img",{staticClass:"medium-zoom lazy",attrs:{width:"30",height:"30",loading:"lazy",src:t.rightbar.codeImg,alt:"二维码"}})]),t._v(" "),n("div",[n("img",{staticClass:"medium-zoom lazy",attrs:{width:"30",height:"30",loading:"lazy",src:t.rightbar.publicodeImg,alt:"公众号"}})]),t._v(" "),n("div",{on:{click:function(i){return t.handleAd("http://itclancoder.mikecrm.com/z1zXWvz")}}},[n("img",{attrs:{width:"30",height:"30",src:t.rightbar.adImg,alt:"广告"}})]),t._v(" "),n("div",{on:{click:function(i){return t.handleFaKa("https://faka.itclan.cn")}}},[n("img",{attrs:{width:"30",height:"30",src:t.rightbar.fkImg,alt:"发卡"}})]),t._v(" "),n("div",{on:{click:function(i){return t.handleKelaiTV("https://video.itclan.cn")}}},[n("img",{attrs:{width:"30",height:"30",src:t.rightbar.videotvImg,alt:"客来影视"}})]),t._v(" "),n("div",{on:{click:function(i){return t.handleShange("https://pay.aikelaidev.cn/paypage/?merchant=35bdYxSx7dCUrVUBqFQjdqqlzhWryCA7lqOn9VhakWHC")}}},[n("img",{attrs:{width:"30",height:"30",src:t.rightbar.shangImg,alt:"赏"}})]),t._v(" "),n("div",[n("a",{attrs:{href:"#bottom"}},[n("img",{attrs:{width:"30",height:"30",src:t.rightbar.bottomImg,alt:"置底"}})])])])])}),[],!1,null,"7c1e9936",null);i.default=c.exports},760:function(t,i){t.exports={pcslides:[{title:"关注公众号",desc:"一个走心,有温度的号,同千万同行一起交流学习",imgUrl:"/images/rightbar/itclancoder-code.jpg"},{title:"加作者微信",desc:"扫二维码 备注 【加群】",imgUrl:"/images/rightbar/aikelaikaifa-code.jpg"},{title:"扫码易购",desc:"福利推荐",imgUrl:"/images/rightbar/itclanShopCode.jpg"}],mobileslides:{topImg:"/images/rightbar/up-arrow.png",newImg:"/images/rightbar/new.png",buyImg:"/images/rightbar/itclanShopCode.jpg",codeImg:"/images/rightbar/aikelaikaifa-code.jpg",publicodeImg:"/images/rightbar/itclancoder-code.jpg",adImg:"/images/rightbar/ad.svg",fkImg:"/images/rightbar/fk.png",videotvImg:"/images/rightbar/videotv.svg",shangImg:"/images/rightbar/shang.svg",bottomImg:"/images/rightbar/down-arrow.png",keQunImg:"/images/rightbar/kequn.svg"}}},917:function(t,i,n){}}]);