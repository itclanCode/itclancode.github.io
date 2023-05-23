(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{1166:function(t,s,a){"use strict";a(787)},1733:function(t,s,a){"use strict";a.r(s);var e={data:function(){return{count:0}},methods:{handleIncrease:function(){this.count++}}},n=(a(1166),a(12)),v=Object(n.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vuejs中组件的两种不同的编写风格-选项式api及组合式api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuejs中组件的两种不同的编写风格-选项式api及组合式api"}},[t._v("#")]),t._v(" vuejs中组件的两种不同的编写风格-选项式API及组合式API")]),t._v(" "),a("h2",{attrs:{id:"快速导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[t._v("#")]),t._v(" 快速导航")]),t._v(" "),a("TOC"),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("随着"),a("code",[t._v("vue3")]),t._v("的逐渐稳定,以及周边生态的完善,现在"),a("code",[t._v("vue3")]),t._v("已经成为默认的使用方式了的")]),t._v(" "),a("p",[t._v("所以,对于一个前端开发者,"),a("code",[t._v("Vue2")]),t._v("与"),a("code",[t._v("Vue3")]),t._v("都得要会,在"),a("code",[t._v("vue3")]),t._v("中新增很多东西,比如:"),a("code",[t._v("Fragment")]),t._v(","),a("code",[t._v("Teleport")]),t._v(","),a("code",[t._v("Suspense")]),t._v(",也去掉了"),a("code",[t._v("vue2")]),t._v("中一些特性,比如:移除"),a("code",[t._v("keyCode")]),t._v("支持作为"),a("code",[t._v("v-on")]),t._v("的修饰符等")]),t._v(" "),a("p",[t._v("在编程风格上也有一些区别")]),t._v(" "),a("h2",{attrs:{id:"选项式api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项式api"}},[t._v("#")]),t._v(" 选项式API")]),t._v(" "),a("p",[t._v("选项式"),a("code",[t._v("API")]),t._v("也可以成为配置项"),a("code",[t._v("API")]),t._v(",它是将组件的实例选项对象来描述组件的逻辑,比如:组件的"),a("code",[t._v("data")]),t._v(","),a("code",[t._v("methods")]),t._v(",还有生命周期钩子"),a("code",[t._v("mounted")]),t._v(",以及"),a("code",[t._v("watch")]),t._v("监听器")]),t._v(" "),a("p",[t._v("组件所定义的属性都会暴露在函数内部的"),a("code",[t._v("this")]),t._v("上,它会指向当前组件的实例,在生命周期以及方法内,可以通过"),a("code",[t._v("this")]),t._v("进行访问读取")]),t._v(" "),[a("div",{staticClass:"base-vue3-code-style"},[a("el-button",{attrs:{type:"danger"},on:{click:t.handleIncrease}},[t._v("选项式API累加")]),t._v(" "),a("p",[t._v(t._s(t.count))])],1)],t._v(" "),a("p",[t._v("如下选项式"),a("code",[t._v("API")]),t._v("示例代码如下所示")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("base-vue3-code-style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("danger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handleIncrease"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("选项式API累加"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{count}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("methods")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义方法,修改data下面的数据  ")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleIncrease")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scoped")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".base-vue3-code-style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br")])]),a("p",[t._v("对于选项式"),a("code",[t._v("API")]),t._v(",是"),a("code",[t._v("vue2.0")]),t._v("书写规范,响应式数据与页面显示相关的,就挂载在"),a("code",[t._v("data")]),t._v("下,绑定方法就放在"),a("code",[t._v("methods")]),t._v("里面,它是约定俗成的")]),t._v(" "),a("p",[t._v("一些选项配置参数,是可进行配置的")]),t._v(" "),a("h2",{attrs:{id:"组合式api-composition-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合式api-composition-api"}},[t._v("#")]),t._v(" 组合式API(composition API)")]),t._v(" "),a("p",[t._v("组合式API(Composition API)是一系列API的集合")]),t._v(" "),a("p",[t._v("通过组合式"),a("code",[t._v("API")]),t._v(",可以通过从"),a("code",[t._v("vue")]),t._v("中导入特定的"),a("code",[t._v("API")]),t._v("(比如"),a("code",[t._v("ref")]),t._v("(普通数据类型),"),a("code",[t._v("reactive(只适用于对象)")]),t._v("),函数来描述组件的逻辑,实现我们想要的功能")]),t._v(" "),a("p",[t._v("通常,组合式会与"),a("code",[t._v("<script setup><\/script>")]),t._v("进行搭配使用")]),t._v(" "),a("p",[t._v("这个"),a("code",[t._v("setup")]),t._v("是一个标识,就像"),a("code",[t._v('type="text/javascript"')]),t._v("一样,告诉"),a("code",[t._v("vue")]),t._v("需要在编译时进行一些处理")]),t._v(" "),a("p",[t._v("让我们可以简洁的使用组合式"),a("code",[t._v("API")]),t._v(",比如:"),a("code",[t._v("<script setup><\/script>")]),t._v("中的导入和顶层变量或函数都能够直接在模板中使用")]),t._v(" "),a("p",[t._v("而非声明选项的方式编写"),a("code",[t._v("vue")]),t._v("组件,组合式API只是一种概括性的技术术语,因为它把一些API进行组合的使用")]),t._v(" "),a("p",[t._v("[1]. 响应式API:例如:"),a("code",[t._v("ref()")]),t._v("和"),a("code",[t._v("reactive()")]),t._v(",可以直接创建基础数据类型响应式,和对象数据类型响应式")]),t._v(" "),a("p",[t._v("[2]. 生命周期钩子: 例如"),a("code",[t._v("onMounted()")]),t._v(","),a("code",[t._v("onUnmounted()")]),t._v(",可以在组件的生命周期阶段添加逻辑")]),t._v(" "),a("p",[t._v("[3]. 依赖注入:使用"),a("code",[t._v("provide()")]),t._v("和"),a("code",[t._v("inject()")]),t._v(",可以在使用响应式"),a("code",[t._v("API")]),t._v("时,利用"),a("code",[t._v("Vue")]),t._v("的依赖注入系统")]),t._v(" "),[a("div",{staticClass:"base-vue3-code-style"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleIncrease}},[t._v("组合式API累加")]),t._v(" "),a("p",[t._v(t._s(t.count))])],1)],t._v(" "),a("script",{attrs:{setup:""}},[t._v('\n  import  {ref} from "vue";\n  // 响应式数据状态,初始化数据\n  const count = ref(0);  \n  // 用来修改状态,触发更新元素,注意的是需要在逻辑中,需要使用`.value`进行访问\n  function handleIncrease() {\n    count.value++;\n  }\n')]),t._v(" "),a("p",[t._v("具体代码如下所示")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("base-vue3-code-style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("primary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handleIncrease"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("组合式API累加"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{count}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入ref API")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 响应式数据状态,初始化数据,ref接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用来修改状态,触发更新元素,注意的是需要在逻辑中,需要使用`.value`进行访问")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleIncrease")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[t._v("[1]. 需要从"),a("code",[t._v("vue")]),t._v("中引入"),a("code",[t._v("ref")]),t._v("这个"),a("code",[t._v("API")]),t._v("函数")]),t._v(" "),a("p",[t._v("[2]. 在组件的逻辑代码中,需要使用"),a("code",[t._v("xxx.value")]),t._v("取值,并修改")]),t._v(" "),a("p",[t._v("[3]. 模板中不需要写"),a("code",[t._v("xxx.value")]),t._v(",在函数中定义的响应式变量数据可以直接在模板中使用")]),t._v(" "),a("p",[t._v("从选项式"),a("code",[t._v("API")]),t._v("和组合式API两种代码编写风格当中对比可以看出,若使用选项式API,那么页面中绑定的响应式数据需要挂载在"),a("code",[t._v("data")]),t._v("配置选项下,而绑定方法")]),t._v(" "),a("p",[t._v("则需要放在"),a("code",[t._v("methods")]),t._v("配置选项下,写法都是固定的,在选项式API中,逻辑内想要访问属性和方法,更多依赖的是"),a("code",[t._v("this")]),t._v(",达到访问组件实例下的数据和方法,而在组合式API,是具体需要什么,就从"),a("code",[t._v("vue")]),t._v("当中引入解决什么问题功能的"),a("code",[t._v("API")]),t._v(",做到真正的按需引入")]),t._v(" "),a("p",[t._v("想要一个基础的数据具备响应式能力,那么需要使用"),a("code",[t._v("ref")]),t._v("函数包裹起来,此时,它就具备响应式的能力")]),t._v(" "),a("p",[t._v("而组件式代码内,是没有"),a("code",[t._v("this")]),t._v("绑定的,"),a("code",[t._v("this")]),t._v(" 会是 "),a("code",[t._v("undefined")]),t._v(",你可以在选项式 "),a("code",[t._v("API")]),t._v(" 中访问组合式 "),a("code",[t._v("API")]),t._v(" 暴露的值，但反过来却不行")]),t._v(" "),a("p",[t._v("如下这张图很好对比了选项式"),a("code",[t._v("API")]),t._v("与组件式"),a("code",[t._v("API")]),t._v("的区别")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eccd93f7981e47d88cf0c3624e7825fb~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"佳豪瑞森装饰"}})]),t._v(" "),a("h2",{attrs:{id:"两种风格的对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两种风格的对比"}},[t._v("#")]),t._v(" 两种风格的对比")]),t._v(" "),a("p",[a("code",[t._v("vue2")]),t._v("已经稳定很多年,各周边生态已非常完善,选项式"),a("code",[t._v("API")]),t._v(",和组件式"),a("code",[t._v("API")]),t._v(",两种不同风格代码没有哪一个好与不好")]),t._v(" "),a("p",[t._v("只有自己熟悉与不熟悉,"),a("code",[t._v("Vue3")]),t._v("更是对"),a("code",[t._v("vue2")]),t._v("的一种升级和拓展")]),t._v(" "),a("p",[t._v("在底层系统上,提供了两套不同的接口供开发者自由的选择和使用")]),t._v(" "),a("p",[t._v("选项式"),a("code",[t._v("API")]),t._v("是以组件实例为中心,构造器函数,即"),a("code",[t._v("this")]),t._v("为核心,对于熟悉面向对象语言的开发者来说,与类的使用变得更和谐")]),t._v(" "),a("p",[t._v("它是将与组件的相关细节抽象出来,比如数据,方法,并通过一些约定的规则,将数据,方法,进行分离,保持各自独立,按照选项式的方式来组织我们的代码")]),t._v(" "),a("p",[t._v("对于新手初学者是非常友好的")]),t._v(" "),a("p",[t._v("而组合式"),a("code",[t._v("API")]),t._v("的核心是直接在函数作用域内定义响应式状态变量,不会跟选项式API那样,需要挂载到"),a("code",[t._v("data")]),t._v("实例选项下")]),t._v(" "),a("p",[t._v("它是直接从函数中得到状态,通过直接从"),a("code",[t._v("vue")]),t._v("当中引入相对应的响应式API函数,对基数数据类型和非基础数据类型进行包装")]),t._v(" "),a("p",[t._v("实现数据的响应式")]),t._v(" "),a("p",[t._v("这种编程方式更加自由,代码的执行效率也会更高,它的灵活性使得组织和重用逻辑的模式变得非常强大")]),t._v(" "),a("p",[t._v("如果说"),a("code",[t._v("vue2")]),t._v("是带着紧箍咒的野马,那么"),a("code",[t._v("vue3")]),t._v("就是脱离了紧箍咒的野马,变得更加自由")]),t._v(" "),a("h2",{attrs:{id:"学习建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习建议"}},[t._v("#")]),t._v(" 学习建议")]),t._v(" "),a("p",[t._v("[1]. "),a("code",[t._v("Vue2")]),t._v("与"),a("code",[t._v("Vue3")]),t._v("也是可以混用的,但是选择自己喜欢熟悉的一种方式编码就可以了的,无非就是多一种风格的编码")]),t._v(" "),a("p",[t._v("[2].在生产项目中,当您不需要使用构建工具,或者打算要在低复杂度的场景中使用"),a("code",[t._v("vue")]),t._v("，比如,渐进增强的应用场景,那么官方推荐您采用选项式API,也就是"),a("code",[t._v("vue2")]),t._v("的编程风格")]),t._v(" "),a("p",[t._v("[3]. 当您打算用"),a("code",[t._v("vue")]),t._v("构建完整的单页面应用,那么官方推荐采用"),a("code",[t._v("组合式API+单文件组件")]),t._v("方式去构建您自己的项目")]),t._v(" "),a("h2",{attrs:{id:"低版本的vue2-7如何使用vue3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#低版本的vue2-7如何使用vue3"}},[t._v("#")]),t._v(" 低版本的Vue2.7如何使用vue3")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("vue3")]),t._v("和"),a("code",[t._v("vue2.7")]),t._v("以上的版本,都是可以使用组合式API,对于低版本"),a("code",[t._v("vue2.7")]),t._v("以下的,可以使用官方维护的插件\n"),a("code",[t._v("@vue/composition-api")])]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("vue3")]),t._v("中,组合式"),a("code",[t._v("API")]),t._v("基本都会配合"),a("code",[t._v("<script setup><\/script>")]),t._v("语法在单文件组件中使用")]),t._v(" "),a("h2",{attrs:{id:"组合式api并不是函数式编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合式api并不是函数式编程"}},[t._v("#")]),t._v(" 组合式API并不是函数式编程")]),t._v(" "),a("p",[t._v("组合式API的风格是基于函数的组合,但它不是函数式编程")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("温馨提示")]),t._v(" "),a("p",[t._v("函数式编程:可以把函数当做数据,参数进行传递,函数是第一公民,纯UI函数,如果你用过"),a("code",[t._v("React")]),t._v("的话,那就知道这个的")]),t._v(" "),a("p",[t._v("纯函数:无状态的世界,有输入和输出,"),a("code",[t._v("React")]),t._v("中的高阶函数,以及数组当中的"),a("code",[t._v("map")]),t._v(","),a("code",[t._v("reduce")]),t._v("都是一种函数式编程")])]),t._v(" "),a("p",[t._v("组合式API是已"),a("code",[t._v("Vue")]),t._v("中数据可变的,细粒度的响应式系统为基础的,而函数式编程通常强调的是数据不可变,也就是单向数据流向的")]),t._v(" "),a("h2",{attrs:{id:"为什么要有组合式api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有组合式api"}},[t._v("#")]),t._v(" 为什么要有组合式API")]),t._v(" "),a("h3",{attrs:{id:"_1-更好的逻辑复用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-更好的逻辑复用"}},[t._v("#")]),t._v(" 1. 更好的逻辑复用")]),t._v(" "),a("p",[t._v("组合式"),a("code",[t._v("API")]),t._v("能够通过组合函数来实现更加简洁高效的逻辑复用,在选项式"),a("code",[t._v("API")]),t._v("中我们主要的逻辑复用机制是"),a("code",[t._v("mixins")]),t._v(",而有了组合式API,\n可以解决"),a("code",[t._v("mixins")]),t._v("中的所有缺陷")]),t._v(" "),a("h3",{attrs:{id:"_2-更灵活组织代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-更灵活组织代码"}},[t._v("#")]),t._v(" 2. 更灵活组织代码")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("vue2.0")]),t._v("选项式"),a("code",[t._v("API")]),t._v("编程里,必须要遵从"),a("code",[t._v("vue")]),t._v("的使用规范,去组织自己的代码,响应式数据放在"),a("code",[t._v("data")]),t._v("下,而方法则放在"),a("code",[t._v("methods")]),t._v("里面")]),t._v(" "),a("p",[t._v("然而,在选项式API在单个文件组件的逻辑复杂到一定程度时,会出现一些问题,这些问题主要是在多个逻辑关注点上")]),t._v(" "),a("p",[t._v("得在文件组件中,来回上下翻滚查看代码片段")]),t._v(" "),a("p",[t._v("处理相同的逻辑关注点的代码被强制拆分在不同的选项中,位于文件的不同部分")]),t._v(" "),a("p",[t._v("在一个如有几百行的大组件中,要读懂代码中的一个逻辑关注点,是需要来回在当前文件上下滚动的,而如果想要将一个逻辑关注点")]),t._v(" "),a("p",[t._v("抽取重构到一个可复用的工具函数中,需要从文件的多个不同部分找到所需要的正确的片段,而如果是使用组合式API重构这个组件")]),t._v(" "),a("p",[t._v("代码逻辑的组织就会变得非常清晰")]),t._v(" "),a("p",[t._v("现在与同一个逻辑关注点相关的代码被归为了一组,我们无需再为一个逻辑关注点在不通的选项块之间来回滚动切换")]),t._v(" "),a("p",[t._v("另外,还可以将这一组代码移到一个外部文件中,不在需要为了抽象而重新组织代码,大大降低了重构的成本")]),t._v(" "),a("p",[t._v("这在一些大型项目中是非常重要的,有利于项目的维护和迭代")]),t._v(" "),a("h2",{attrs:{id:"更好的类型推导"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更好的类型推导"}},[t._v("#")]),t._v(" 更好的类型推导")]),t._v(" "),a("p",[t._v("组合式API主要利用基本的变量和函数,它们本身就是类型友好的,用组合式API重写的代码可以享受到完整的类型推导,不需要书写太多类型标注")]),t._v(" "),a("p",[t._v("大多时候,用"),a("code",[t._v("Ts")]),t._v("书写的组合式API代码和用"),a("code",[t._v("js")]),t._v("写的都差不多")]),t._v(" "),a("h2",{attrs:{id:"更小的生产包体积"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更小的生产包体积"}},[t._v("#")]),t._v(" 更小的生产包体积")]),t._v(" "),a("p",[t._v("使用组合式API相比选项式API更加高效,因为组合式API,不会自动的引入生命周期,是纯函数,对代码压缩也更友好")]),t._v(" "),a("p",[t._v("这也是"),a("code",[t._v("<script setup><\/script>")]),t._v("形式书写的组件模板被编译为一个内联函数,和"),a("code",[t._v("<script setup><\/script>")]),t._v("中的代码位于同一个作用域")]),t._v(" "),a("p",[t._v("不像选项式API需要依赖"),a("code",[t._v("this")]),t._v("上下文对象访问属性,被编译的模板可以直接访问"),a("code",[t._v("<script setup><\/script>")]),t._v("中定义的变量,无需与选项式API,实例对象中代理")]),t._v(" "),a("p",[t._v("使用组合式API,对代码的压缩更友好,因为本地变量的名字可以被压缩,但对象的属性名则不能")]),t._v(" "),a("h2",{attrs:{id:"关于组件式api的思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于组件式api的思考"}},[t._v("#")]),t._v(" 关于组件式API的思考")]),t._v(" "),a("p",[t._v("使用组合式API不像选项式API那样,会约定俗成的将指定的逻辑挂载在指定的选项配置对象下面,它的编程风格使用是固定的,确实是可以在编写"),a("code",[t._v("Vue")]),t._v("组件里")]),t._v(" "),a("p",[t._v("让开发者少思考,你只需要按照配方,一步一步先后顺序来就可以了的")]),t._v(" "),a("p",[t._v("而组合式API,它比较偏向原生"),a("code",[t._v("js")]),t._v(",不受框架的规则约束和限制,比较自由,洒脱,像编写普通的"),a("code",[t._v("javascript")]),t._v("那样来编写组件的代码")]),t._v(" "),a("p",[t._v("可以编写组织好的"),a("code",[t._v("javascript")]),t._v(",有能力编写组合式API代码")]),t._v(" "),a("p",[t._v("选项式API代码风格,一定程度上确实可以减少自己思考的时间,想要实现一个具体的功能,那么你需要按照框架的规则去组织自己的代码,没有选择的余地")]),t._v(" "),a("p",[t._v("这也会导致一个问题,脱离了框架,那么就不能干活的弊端")]),t._v(" "),a("p",[t._v("在一些比较大规模的项目中,选项式API代码风格想要重构的话,是非常费劲的,比较难以进行重构和提高代码质量,在这一方面,组合式API提供了更好的长期可维护性")]),t._v(" "),a("h2",{attrs:{id:"组合式api覆盖所有场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合式api覆盖所有场景"}},[t._v("#")]),t._v(" 组合式API覆盖所有场景")]),t._v(" "),a("p",[t._v("在官方介绍当中,组合式API基本上能够覆盖所有状态逻辑方面的需求,也就是说,使用"),a("code",[t._v("vue2")]),t._v("选项式API实现的功能")]),t._v(" "),a("p",[t._v("同样使用"),a("code",[t._v("vue3")]),t._v("依旧能够实现")]),t._v(" "),a("h2",{attrs:{id:"两种api编程方式可以混用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两种api编程方式可以混用"}},[t._v("#")]),t._v(" 两种API编程方式可以混用")]),t._v(" "),a("p",[t._v("选项式API和组合式API是可以进行混用的,如果在选项式API中想要使用组合式API,基于"),a("code",[t._v("Vue3")]),t._v("或"),a("code",[t._v("vue2.7")]),t._v("后的版本")]),t._v(" "),a("p",[t._v("可以通过"),a("code",[t._v("setup()")]),t._v("选项来使用组合式API")]),t._v(" "),a("p",[t._v("在官方文档中,谈到了,在一个基于选项式API开发很久,但又需要和基于组合式API的新代码或第三方库整合的项目中,就使用"),a("code",[t._v("setup()")]),t._v("这种方式的")]),t._v(" "),a("p",[t._v("换而言之,就是"),a("code",[t._v("vue2")]),t._v("的项目,依旧使用选项式API方式,"),a("code",[t._v("Vue3")]),t._v("的项目就选用组合式API，无非就是多了一种编写代码的风格")]),t._v(" "),a("p",[t._v("选项式API不会被废弃,是"),a("code",[t._v("vue")]),t._v("不可分割的一部分,选项式 API 是在组合式 API 的基础上实现的,对于中小型项目,使用选项式API是一个不错的选择")]),t._v(" "),a("p",[t._v("而组合式API比较适合大型复杂项目,这两种代码风格都是可以实现的,看自己对哪种更熟悉和青睐")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("选项式"),a("code",[t._v("API")]),t._v("与组合式"),a("code",[t._v("API")]),t._v("是"),a("code",[t._v("Vue")]),t._v("提供的两种不同的编程风格,在"),a("code",[t._v("vue2.7")]),t._v("版本之前都是使用"),a("code",[t._v("选项式API")]),t._v(",响应式数据需要挂载在"),a("code",[t._v("data")]),t._v("下,而方法需要挂载\n在"),a("code",[t._v("methods")]),t._v("下,而在组合式API当中,则只需要在"),a("code",[t._v("script")]),t._v("标签内添加"),a("code",[t._v("setup")]),t._v("标识后,表示具备组合式API的使用环境")]),t._v(" "),a("p",[t._v("具体使用什么,就需要从"),a("code",[t._v("vue")]),t._v("中引入对应的"),a("code",[t._v("API")]),t._v("函数,在"),a("code",[t._v("script")]),t._v("中定义的变量和函数可以直接在模板中使用,更多的是一种风格的变化,让前端更好的组织逻辑代码")]),t._v(" "),a("footer-FooterLink",{attrs:{isShareLink:!1,isDaShang:!0}}),t._v(" "),a("footer-FeedBack")],2)}),[],!1,null,"18f24879",null);s.default=v.exports},787:function(t,s,a){}}]);