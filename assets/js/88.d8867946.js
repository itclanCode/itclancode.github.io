(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1454:function(e,t,o){"use strict";o(896)},1925:function(e,t,o){"use strict";o.r(t);o(13),o(31),o(36),o(1449),o(895),o(60),o(58);var r={name:"uploadImg",data:function(){return{imageUrl:""}},methods:{handleAvatarSuccess:function(e,t){if(console.log(e),console.log(t),"20000"!=e.code)return this.$message({type:"error",message:e.msg}),!1},beforeAvatarUpload:function(e){var t=this;console.log(e);var o=e.size/1024<500;o||this.$message({message:"图片大小不能超过500K",type:"error"});var r=new Promise((function(t,o){var r=new Image,a=window.URL||window.webkitURl;r.onload=function(){e.width=r.with,e.height=r.height,1920===r.width&&1080===r.height?t():o(new Error("error"))},r.src=a.createObjectURL(e)})).then((function(){return e}),(function(){return t.$message({message:"上传图片尺寸必须为1920*1080",type:"error"}),Promise.reject(new Error("error"))}));return o&&r},handlePictureCardPreview:function(){console.log("预览图片")},handleRemove:function(){console.log("移除文件")},hanleOnChange:function(){}}},a=(o(1454),o(12)),s=Object(a.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"uploader"},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":this.handleAvatarSuccess,"before-upload":this.beforeAvatarUpload}},[this.imageUrl?t("img",{staticClass:"avatar",attrs:{src:this.imageUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon uploader-icon"})])],1)}),[],!1,null,"39ac54ce",null);t.default=s.exports},896:function(e,t,o){}}]);