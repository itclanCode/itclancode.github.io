(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{1583:function(t,e,n){"use strict";n(932)},1723:function(t,e,n){"use strict";n.r(e);n(391),n(89);var r={name:"Clipboard",props:["html"],data:function(){return{dateYear:(new Date).getFullYear(),runTimeText:"",timer:""}},mounted:function(){this.timer=setInterval(this.runTime,1e3)},methods:{runTime:function(){var t=new Date("01/06/2020 5:22:00"),e=((new Date).getTime()-t.getTime())/864e5,n=Math.floor(e),r=24*(e-n),a=Math.floor(r),i=60*(r-a),s=Math.floor(60*(r-a)),o=Math.floor(60*(i-s));this.runTimeText="本站已经稳定运行: "+n+"天"+a+"小时"+s+"分"+o+"秒"}},created:function(){},beforeDestroy:function(){clearInterval(this.timer)}},a=(n(1583),n(12)),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[n("span",[t._v("MIT Licensed | "+t._s(t.dateYear)+"-present")]),t._v(" "),n("a",{attrs:{href:"/about/",target:"_blank"}},[t._v("随笔川迹")]),t._v(" "),t._m(0),t._v(" "),n("span",[t._v(t._s(t.runTimeText))])]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.html)}})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://beian.miit.gov.cn/#/Integrated/index",target:"_blank"}},[e("img",{attrs:{src:"/icons/icp.png",width:"20",height:"20",alt:"公网备案"}}),this._v("京ICP备16017996号\n    ")])}],!1,null,"6948a0b4",null);e.default=i.exports},932:function(t,e,n){}}]);