(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{1649:function(t,e,n){"use strict";n(945)},1823:function(t,e,n){"use strict";n.r(e);n(393);var l={name:"deleteChildELem",data:function(){return{lists:["coder.itclan.cn","itclan.cn","tv.itclan.cn","short.itclan.cn","aikelaidev.cn"]}},methods:{handleDelete:function(){var t=document.getElementById("ul");if(t.hasChildNodes())for(var e=t.childNodes.length,n=0;n<e;n++)t.removeChild(t.childNodes[0])},handleDelteItem:function(t){this.lists.splice(t,1)}}},i=(n(1649),n(12)),c=Object(i.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("div",[n("ul",{attrs:{id:"ul"}},t._l(t.lists,(function(e,l){return n("li",{key:l},[n("span",[t._v(t._s(e))]),n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.handleDelteItem(l)}}},[t._v("删除")])],1)})),0)]),t._v(" "),n("div",{staticClass:"deletAllBtn"},[n("el-button",{attrs:{type:"primary"},on:{click:t.handleDelete}},[t._v("删除所有元素")])],1)])}),[],!1,null,"014d4b44",null);e.default=c.exports},945:function(t,e,n){}}]);