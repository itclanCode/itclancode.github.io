(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1646:function(e,a,t){"use strict";t(959)},1817:function(e,a,t){"use strict";t.r(a);t(73),t(62);var l={name:"hideInputParams",data:function(){return{formParams:{id:"我是隐藏携带的参数",name:"",year:"",options:[{label:"2022",value:"2022"},{label:"2021",value:"2021"},{label:"2020",value:"2020"},{label:"2019",value:"2019"},{label:"2018",value:"2018"},{label:"2017",value:"2017"},{label:"2016",value:"2016"}]}}},methods:{handleSelect:function(e){console.log(e),this.formParams.year=e},onSubmit:function(){var e=this;console.log("submit!");var a=this.formParams,t=a.id,l=a.name,r=a.year;l&&r?this.$alert("id:".concat(t,",名字:").concat(l,",年份:").concat(r),"提交的数据",{confirmButtonText:"确定",callback:function(a){e.$message({type:"info",message:"action: ".concat(a)})}}):this.$message.error("名字或年份不能为空")}}},r=(t(1646),t(12)),o=Object(r.a)(l,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"wrap"},[t("el-form",{attrs:{inline:!0,model:e.formParams}},[t("el-form-item",[t("el-input",{attrs:{type:"hidden"},model:{value:e.formParams.id,callback:function(a){e.$set(e.formParams,"id",a)},expression:"formParams.id"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"姓名"}},[t("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.formParams.name,callback:function(a){e.$set(e.formParams,"name",a)},expression:"formParams.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"年份"}},[t("el-select",{attrs:{placeholder:"请选择年份"},on:{change:e.handleSelect},model:{value:e.formParams.year,callback:function(a){e.$set(e.formParams,"year",a)},expression:"formParams.year"}},e._l(e.formParams.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")])],1)],1)],1)}),[],!1,null,"1710eeb0",null);a.default=o.exports},959:function(e,a,t){}}]);