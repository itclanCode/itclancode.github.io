(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{1632:function(e,t,n){"use strict";n(930)},1810:function(e,t,n){"use strict";n.r(t);n(386),n(85);var r={name:"Clipboard",props:["html"],data:function(){return{dateYear:(new Date).getFullYear(),runTimeText:"",timer:""}},mounted:function(){this.timer=setInterval(this.runTime,1e3)},methods:{runTime:function(){var e=new Date("01/06/2020 5:22:00"),t=((new Date).getTime()-e.getTime())/864e5,n=Math.floor(t),r=24*(t-n),a=Math.floor(r),i=60*(r-a),o=Math.floor(60*(r-a)),s=Math.floor(60*(i-o));this.runTimeText="本站已经稳定运行: "+n+"天"+a+"小时"+o+"分"+s+"秒"}},created:function(){},beforeDestroy:function(){clearInterval(this.timer)}},a=(n(1632),n(12)),i=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[n("span",[e._v("MIT Licensed | "+e._s(e.dateYear)+"-present")]),e._v(" "),n("a",{attrs:{href:"/about/",target:"_blank"}},[e._v("随笔川迹")]),e._v(" "),n("span",[e._v(e._s(e.runTimeText))])]),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.html)}})])}),[],!1,null,"4a3469cd",null);t.default=i.exports},930:function(e,t,n){}}]);