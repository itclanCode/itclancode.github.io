(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{1613:function(t,n,e){"use strict";e(932)},1787:function(t,n,e){"use strict";e.r(n);var s={name:"arrPushPop",data:function(){return{input:"",lists:[{name:"itclanCoder",url:"https://coder.itclan.cn"},{name:"客来影视TV",url:"https://video.itclan.cn"},{name:"短链接生成",url:"https://short.itclan.cn"},{name:"IT资源导航",url:"https://nav.itclan.cn"}]}},methods:{handleAdd:function(){this.input?(this.lists.push({name:this.input}),this.input=""):this.$message.error("输入框内容不能为空")},handleDelete:function(){this.lists.pop()}}},i=(e(1613),e(12)),a=Object(i.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrap"},[e("div",{staticClass:"content"},[e("el-input",{staticClass:"input-with",attrs:{placeholder:"请输入内容"},model:{value:t.input,callback:function(n){t.input=n},expression:"input"}}),t._v(" "),e("el-button",{attrs:{slot:"append"},on:{click:t.handleAdd},slot:"append"},[t._v("添加")]),t._v(" "),e("el-button",{attrs:{type:"danger"},on:{click:t.handleDelete}},[t._v("删除")])],1),t._v(" "),e("div",[e("ul",t._l(t.lists,(function(n,s){return e("li",{key:s},[e("a",{attrs:{href:n.url||"https://itclan.cn"}},[t._v(t._s(n.name))])])})),0)])])}),[],!1,null,"6a0840b0",null);n.default=a.exports},932:function(t,n,e){}}]);