(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1351:function(e,a,c){"use strict";c(803)},1702:function(e,a,c){"use strict";c.r(a);c(86),c(253);var o={name:"checkbox",data:function(){return{formParams:{isIndeterminate:!1,checkAll:!0,checkeddotNames:[],code:""},dot_info:[{code:"1",name:"画报点击"},{code:"2",name:"画报展现"},{code:"3",name:"设置壁纸"},{code:"4",name:"设置H5"},{code:"5",name:"视频播放"}]}},computed:{checkOptionsData:function(){return this.dot_info}},mounted:function(){this.formParams.checkeddotNames=this.dot_info.map((function(e){return e.code}))},methods:{handleCheckAllChange:function(){this.formParams.checkAll?this.formParams.checkeddotNames=this.dot_info.map((function(e){return e.code})):(this.formParams.checkeddotNames=[],this.formParams.code=""),this.isIndeterminate=!1},handleCheckeddotNamesChange:function(e){console.log(e),this.formParams.checkeddotNames.length==this.dot_info.length?this.formParams.checkAll=!0:this.formParams.checkAll=!1,this.formParams.code=this.formParams.checkeddotNames.join(",")}}},t=(c(1351),c(12)),n=Object(t.a)(o,(function(){var e=this,a=e.$createElement,c=e._self._c||a;return c("div",{staticClass:"el-checkbox-wrap"},[c("div",{staticClass:"select-all"},[c("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.formParams.checkAll,callback:function(a){e.$set(e.formParams,"checkAll",a)},expression:"formParams.checkAll"}},[e._v("全选\n        ")])],1),e._v(" "),c("div",[c("el-checkbox-group",{on:{change:e.handleCheckeddotNamesChange},model:{value:e.formParams.checkeddotNames,callback:function(a){e.$set(e.formParams,"checkeddotNames",a)},expression:"formParams.checkeddotNames"}},e._l(e.checkOptionsData,(function(a){return c("el-checkbox",{key:a.code,attrs:{label:a.code}},[e._v("\n            "+e._s(a.name)+"\n          ")])})),1)],1)])}),[],!1,null,"5fe5d086",null);a.default=n.exports},803:function(e,a,c){}}]);