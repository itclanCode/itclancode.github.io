(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1328:function(e,t,a){"use strict";a(795)},1654:function(e,t,a){"use strict";a.r(t);a(391),a(74),a(178),a(179);var o={name:"checkboxTable",data:function(){return{formParams:{checkAll:!0,checkeddotNames:[],code:""},dot_info:[{code:"click",name:"画报点击"},{code:"show",name:"画报展现"},{code:"opt_bizhi",name:"设置壁纸"},{code:"h5",name:"设置H5"},{code:"video",name:"视频播放"}],isIndeterminate:!1,tableData:[{date:"2021-04-05",dot_info:["click","show","opt_bizhi","h5","video"],name:"画报点击",click:{uv:"1111",pv:"2222",refers:[{pic_name:"click-xxxx1.jpg",pv:2e3,uv:1e3}]},show:{uv:"3333",pv:"4444",refers:[{pic_name:"show-xxxx2.jpg",pv:2e3,uv:1e3}]},opt_bizhi:{uv:111,pv:222,refers:[{pv:222,uv:333,pic_name:"设置壁纸-xxx.jpg"}]},h5:{uv:2222,pv:333445,refers:[{pv:44554,uv:3442,pic_name:"h5-xxx.jpg"}]},video:{uv:6666,pv:88888,refers:[{pv:23442,uv:244345,pic_name:"视频-xxxx.jpg"}]}},{date:"2021-04-06",dot_info:["click","show","opt_bizhi","h5","video"],name:"画报展现",click:{pv:1234,uv:2323,refers:[{pic_name:"xxxx2.jpg",pv:"2222",uv:"5555"}]},show:{pv:1234,uv:2323,refers:[{pic_name:"xxxx2.jpg",pv:"2222",uv:"5555"}]},opt_bizhi:{pv:1234,uv:2323,refers:[{pic_name:"xxxx2.jpg",pv:"2222",uv:"5555"}]},h5:{pv:1234,uv:2323,refers:[{pic_name:"xxxx2.jpg",pv:"2222",uv:"5555"}]},video:{pv:1234,uv:2323,refers:[{pic_name:"xxxx2.jpg",pv:"2222",uv:"5555"}]}},{date:"2021-04-07",dot_info:["click","show","opt_bizhi","h5","video"],name:"设置壁纸",click:{pv:1234,uv:2323,refers:[{pic_name:new Date+"xxxx2.jpg",pv:"2222",uv:"5555"}]},show:{pv:1234,uv:2323,refers:[{pic_name:new Date+"xxxx2.jpg",pv:"2222",uv:"5555"}]},opt_bizhi:{pv:1234,uv:2323,refers:[{pic_name:new Date+"xxxx2.jpg",pv:"2222",uv:"5555"}]},h5:{pv:1234,uv:2323,refers:[{pic_name:new Date+"xxxx2.jpg",pv:"2222",uv:"5555"}]},video:{pv:1234,uv:2323,refers:[{pic_name:new Date+"xxxx2.jpg",pv:"2222",uv:"5555"}]}},{date:"2021-04-08",dot_info:["click","show","opt_bizhi","h5","video"],name:"设置H5",click:{pv:1234,uv:2323,refers:[{pic_name:new Date+"xxxx2.jpg",pv:"2222",uv:"5555"}]},show:{pv:1234,uv:2323,refers:[{pic_name:new Date+"xxxx2.jpg",pv:"2222",uv:"5555"}]},opt_bizhi:{pv:1234,uv:2323,refers:[{pic_name:new Date+"xxxx2.jpg",pv:"2222",uv:"5555"}]},h5:{pv:1234,uv:2323,refers:[{pic_name:new Date+"xxxx2.jpg",pv:"2222",uv:"5555"}]},video:{pv:1234,uv:2323,refers:[{pic_name:new Date+"xxxx2.jpg",pv:"2222",uv:"5555"}]}},{date:"2021-04-09",dot_info:["click","show","opt_bizhi","h5","video"],name:"视频播放",click:{pv:1234,uv:2323,refers:[{pic_name:new Date+"xxxx2.jpg",pv:"2222",uv:"5555"}]},show:{pv:1234,uv:2323,refers:[{pic_name:new Date+"xxxx2.jpg",pv:"2222",uv:"5555"}]},opt_bizhi:{pv:1234,uv:2323,refers:[{pic_name:new Date+"xxxx2.jpg",pv:"2222",uv:"5555"}]},h5:{pv:1234,uv:2323,refers:[{pic_name:new Date+"xxxx2.jpg",pv:"2222",uv:"5555"}]},video:{pv:1234,uv:2323,refers:[{pic_name:new Date+"xxxx2.jpg",pv:"2222",uv:"5555"}]}}],dialogTableVisible:!1,refers:[],pic_name:"",pv:"",uv:""}},computed:{checkOptionsData:function(){return this.dot_info}},beforeUpdate:function(){var e=this;this.$nextTick((function(){e.$refs.table.doLayout()}))},mounted:function(){this.formParams.checkeddotNames=this.dot_info.map((function(e){return e.code}))},methods:{handleCheckAllChange:function(){this.formParams.checkAll?this.formParams.checkeddotNames=this.dot_info.map((function(e){return e.code})):(this.formParams.checkeddotNames=[],this.formParams.code=""),this.isIndeterminate=!1},handleCheckeddotNamesChange:function(e){console.log(e),this.formParams.checkeddotNames.length==this.dot_info.length?this.formParams.checkAll=!0:this.formParams.checkAll=!1,this.formParams.code=this.formParams.checkeddotNames.join(",")},handleLook:function(e){var t=JSON.parse(JSON.stringify(e));if(console.log(t),t.length){this.refers=t,console.log(t[0]);var a=t[0],o=a.pic_name,n=a.pv,i=a.uv;this.pic_name=o,this.pv=n,this.uv=i,console.log(this.pic_name,this.pv,this.uv)}else this.refers=[];this.dialogTableVisible=!0}}},n=(a(1328),a(12)),i=Object(n.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"el-checkbox-wrap"},[a("div",{staticClass:"select-all"},[a("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.formParams.checkAll,callback:function(t){e.$set(e.formParams,"checkAll",t)},expression:"formParams.checkAll"}},[e._v("全选\n                ")])],1),e._v(" "),a("div",[a("el-checkbox-group",{on:{change:e.handleCheckeddotNamesChange},model:{value:e.formParams.checkeddotNames,callback:function(t){e.$set(e.formParams,"checkeddotNames",t)},expression:"formParams.checkeddotNames"}},e._l(e.checkOptionsData,(function(t){return a("el-checkbox",{key:t.code,attrs:{label:t.code}},[e._v("\n                    "+e._s(t.name)+"\n                ")])})),1)],1)]),e._v(" "),a("div",{staticClass:"table-content"},[a("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData,resizable:"",height:"100%",border:""}},[e.formParams.checkeddotNames.length?a("el-table-column",{attrs:{fixed:"",align:"center",label:"日期",showOverflowTooltip:!0},scopedSlots:e._u([{key:"default",fn:function(t){return[a("p",[e._v("\n                "+e._s(t.row.date)+"\n                ")])]}}],null,!1,3220237230)}):e._e(),e._v(" "),e._l(e.dot_info,(function(t,o){return[e.formParams.checkeddotNames.includes(t.code)?a("el-table-column",{key:o+Math.random(),attrs:{align:"center",label:t.name,showOverflowTooltip:!0}},[a("el-table-column",{attrs:{align:"center",label:"pv",width:"auto",showOverflowTooltip:!0},scopedSlots:e._u([{key:"default",fn:function(o){return[a("p",[e._v("\n                    "+e._s(o.row[t.code]&&o.row[t.code].pv)+"\n                    ")])]}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"uv",width:"auto",showOverflowTooltip:!0},scopedSlots:e._u([{key:"default",fn:function(o){return[a("p",[e._v("\n                    "+e._s(o.row[t.code]&&o.row[t.code].uv)+"\n                    ")])]}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"refer",width:"auto"},scopedSlots:e._u([{key:"default",fn:function(o){return[a("p",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleLook(o.row[t.code].refers,o.$index)}}},[e._v("查看\n                    ")])],1)]}}],null,!0)})],1):e._e()]}))],2)],1),e._v(" "),a("el-dialog",{attrs:{title:"查看refer",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("el-table",{attrs:{data:e.refers,border:""}},[a("el-table-column",{attrs:{align:"center",prop:"pic_name",label:"refer",showOverflowTooltip:!0}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"pv",label:"pv",showOverflowTooltip:!0}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"uv",label:"uv",showOverflowTooltip:!0}})],1)],1)],1)}),[],!1,null,"ead3518a",null);t.default=i.exports},795:function(e,t,a){}}]);