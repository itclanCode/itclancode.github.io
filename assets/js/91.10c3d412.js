(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{699:function(e,t,n){},736:function(e,t,n){"use strict";n(699)},989:function(e,t,n){"use strict";n.r(t);n(174);var a={name:"tableComp",props:{tableColist:[],tableData:[],pageSize:{type:Number,default:10},pageNo:{type:Number,default:1},total:[Number]},data:function(){return{pageSizeList:[10,25,40,50],onlineStatusEnum:{1:"待发布",2:"待上线",3:"已上线",100:"已结束"},levelEnum:{p0:"P0（紧急项目）",p1:"P1（日常项目）",p2:"P2（兜底项目）"}}},methods:{handleEdit:function(e,t){this.$emit("edit",e,t)},handleOnline:function(e,t){this.$emit("online",e,t)},handleOffline:function(e,t){this.$emit("offline",e,t)},handleLook:function(e,t){this.$emit("look",e,t)},handleCopy:function(){this.$emit("copy")},handleSizeChange:function(e){console.log(e),this.$emit("pageSizeChange",e)},handleCurrentChange:function(e){console.log("跳转当当前页",e),this.$emit("pageCurrentChange",e)},labelHead:function(e,t){var n=t.column,a=n.label.length;return n.minWidth=16*a,e("div",{class:"table-head",style:{width:"100%"}},[n.label])}}},i=(n(736),n(12)),l=Object(i.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-wrap"},[n("div",{staticClass:"table-container"},[n("el-table",{attrs:{data:e.tableData,resizable:"",border:"",height:"100%","row-key":"id"}},[e._l(e.tableColist,(function(t,a){return n("el-table-column",{key:a,attrs:{prop:t.prop,label:t.label,size:t.medium,align:t.align,width:t.width,showOverflowTooltip:t.showOverflowTooltip,"scoped-slot":e.labelHead,"class-name":t.dropHandle?"drop_handle":""},scopedSlots:e._u([{key:"default",fn:function(a){return["status"===t.prop?n("p",[e._v("\n            "+e._s(e.onlineStatusEnum[a.row[t.prop]])+"\n          ")]):"pid_names"===t.prop?n("p",[e._v("\n            "+e._s(a.row[t.prop])+"\n          ")]):"level"===t.prop?n("p",[e._v("\n            "+e._s(e.levelEnum[a.row[t.prop]])+"\n          ")]):"pv_max"==t.prop?n("p",[e._v("\n            "+e._s(a.row[t.prop])+"万\n          ")]):"areas"==t.prop?n("p",[e._v("\n            "+e._s(""==a.row[t.prop]?"全部":a.row[t.prop])+"\n          ")]):n("p",[e._v(e._s(a.row[t.prop]))])]}}],null,!0)})})),e._v(" "),n("el-table-column",{attrs:{label:"管理","min-width":"290",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[100==t.row.status?n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return e.handleLook(t.row,t.$index)}}},[e._v("查看")]):e._e(),e._v(" "),n("el-button",{attrs:{disabled:100===t.row.status,type:"primary",size:"mini"},on:{click:function(n){return e.handleEdit(t.row,t.$index)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{disabled:1!=t.row.status,size:"mini",type:"success"},on:{click:function(n){return e.handleOnline(t.row,t.$index)}}},[e._v("上线")]),e._v(" "),n("el-button",{attrs:{disabled:3!=t.row.status,size:"mini",type:"danger"},on:{click:function(n){return e.handleOffline(t.row,t.$index)}}},[e._v("下线")])]}}])})],2)],1),e._v(" "),n("div",{staticClass:"pagination-container"},[0!=e.tableData.length?n("el-pagination",{attrs:{"current-page":e.pageNo,"page-sizes":e.pageSizeList,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1)])}),[],!1,null,"6602b997",null);t.default=l.exports}}]);