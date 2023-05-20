(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{1987:function(t,s,a){"use strict";a.r(s);var e=a(12),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vuejs中的ref函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuejs中的ref函数"}},[t._v("#")]),t._v(" VueJs中的ref函数")]),t._v(" "),a("h2",{attrs:{id:"快速导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[t._v("#")]),t._v(" 快速导航")]),t._v(" "),a("TOC"),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("Vue2.0")]),t._v("里面,与页面相关显示的数据是挂载在"),a("code",[t._v("data")]),t._v("下,而在"),a("code",[t._v("vue3.0")]),t._v("里,想要一个数据")]),t._v(" "),a("p",[t._v("具备响应式,那么需要引入响应式API函数,通过API函数加工处理后,才具备响应式,两者之间在底层实现数据的响应式上")]),t._v(" "),a("p",[t._v("也存在着差异")]),t._v(" "),a("h2",{attrs:{id:"ref可将数据变成响应式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref可将数据变成响应式"}},[t._v("#")]),t._v(" ref可将数据变成响应式")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("setup")]),t._v("里面使用"),a("code",[t._v("let")]),t._v("定义的变量不是响应式的数据,它只是一个普通的字符串")]),t._v(" "),a("p",[t._v("数据虽然是可以修改,但是页面没有更新,"),a("code",[t._v("Vue")]),t._v("没有捕获到,如果想要定义的数据是响应式的,可以监测和捕获到,那么就需要从"),a("code",[t._v("vue")]),t._v("当中引用"),a("code",[t._v("ref")]),t._v("函数\n变成一个引用实例对象(引用对象)")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ref "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"itclanCoder"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在逻辑内部访问,需要使用xxx.value")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        age\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[t._v("在模板里直接使用变量名就可以,但是更改数据时,却要使用"),a("code",[t._v("xxx.value")])]),t._v(" "),a("h2",{attrs:{id:"ref函数-处理对象类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref函数-处理对象类型"}},[t._v("#")]),t._v(" ref函数-处理对象类型")]),t._v(" "),a("p",[t._v("当"),a("code",[t._v("ref")]),t._v("处理对象数据类型时")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" job "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frontend'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("salary")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'25k'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("salary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[a("strong",[t._v("作用")]),t._v(": 定义一个响应式的数据")]),t._v(" "),a("p",[a("strong",[t._v("语法")]),t._v(": const xxx = ref(initValue)")]),t._v(" "),a("p",[t._v("创建一个包含响应式数据的引用对象,在"),a("code",[t._v("JS")]),t._v("中操作数据"),a("code",[t._v("xxx.value")]),t._v(",模板中读取数据,不需要"),a("code",[t._v("xxx.value")]),t._v(",直接是"),a("code",[t._v("<div>"+t._s(t.xxx)+"</div>")])]),t._v(" "),a("p",[t._v("[1]. 接收的数据可以是:基本类型,也可以使对象类型\n[2]. 基本类型的数据:响应式依然是靠("),a("code",[t._v("Object.defineProperty()")]),t._v("的"),a("code",[t._v("get")]),t._v("与"),a("code",[t._v("set")]),t._v("完成的)\n[3]. 对象类型的数据:内部借助了"),a("code",[t._v("vue3")]),t._v("的一个新函数"),a("code",[t._v("reactive")]),t._v("函数")]),t._v(" "),a("h2",{attrs:{id:"为什么需要ref-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要ref-函数"}},[t._v("#")]),t._v(" 为什么需要ref()函数")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("setup")]),t._v("、"),a("code",[t._v("computed")]),t._v("、合成函数中，都有可能返回值类型。而值类型的返回，往往容易丢失响应式")]),t._v(" "),a("p",[a("code",[t._v("Vue3")]),t._v("对响应式的处理方式有些改变，使用了"),a("code",[t._v("Proxy")]),t._v("。而这种方式对值类型的响应式却无能为力，所以在"),a("code",[t._v("Vue3")]),t._v("中只能通过"),a("code",[t._v("ref")]),t._v("这种方式来解决值类型响应式的问题")]),t._v(" "),a("h2",{attrs:{id:"为什么逻辑中修改变量数据需要-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么逻辑中修改变量数据需要-value"}},[t._v("#")]),t._v(" 为什么逻辑中修改变量数据需要"),a("code",[t._v(".value")])]),t._v(" "),a("p",[a("code",[t._v("ref")]),t._v("是一个对象（不丢失响应式），"),a("code",[t._v("value")]),t._v("是存储值,通过"),a("code",[t._v(".value")]),t._v("属性的"),a("code",[t._v("get")]),t._v("和"),a("code",[t._v("set")]),t._v("实现响应式")]),t._v(" "),a("p",[t._v("只有"),a("code",[t._v("ref")]),t._v("用于模板、"),a("code",[t._v("reactive")]),t._v("时不需要"),a("code",[t._v(".value")]),t._v(",其他情况都时需要的,对于刚开始,确实是有些不适应,与"),a("code",[t._v("Vue2")]),t._v("的使用是存在差异的")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[a("code",[t._v("ref")]),t._v("函数主要处理基本数据类型数据,让它具备响应式数据的能力,该对象只有一个指向内部值的属性"),a("code",[t._v(".value")])]),t._v(" "),a("p",[t._v("可以被"),a("code",[t._v("vue")]),t._v("监测和追踪")]),t._v(" "),a("footer-FooterLink",{attrs:{isShareLink:!1,isDaShang:!0}}),t._v(" "),a("footer-FeedBack")],1)}),[],!1,null,null,null);s.default=n.exports}}]);