(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{1947:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"vuejs中如何使用provide与inject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuejs中如何使用provide与inject"}},[s._v("#")]),s._v(" VueJs中如何使用provide与inject")]),s._v(" "),a("h2",{attrs:{id:"快速导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[s._v("#")]),s._v(" 快速导航")]),s._v(" "),a("TOC"),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("vue2.0")]),s._v("里面"),a("code",[s._v("provide")]),s._v("与"),a("code",[s._v("inject")]),s._v("是以选项式(配置)API的方式在组件中进行使用的,解决的是跨组件(祖孙)间通信的一种方式")]),s._v(" "),a("p",[s._v("也就是父子组件间的通信,父组件上市通过自定义属性,而子组件间通过"),a("code",[s._v("props")]),s._v("这种方式接收,如果想要一层一层的传递,这种方式就会比较麻烦,不灵活")]),s._v(" "),a("p",[a("code",[s._v("provide")]),s._v("与"),a("code",[s._v("inject")]),s._v("就是解决:怎么从祖组件的数据,传递到孙组件,实现跨级组件传递数据的")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("vue3.0")]),s._v("里面,同样提供了"),a("code",[s._v("provide")]),s._v("与"),a("code",[s._v("inject")]),s._v(",使用起来更简单方便,单纯的从概念上去看,是比较抽象,难以理解的")]),s._v(" "),a("p",[s._v("还是要从具体的实例出发")]),s._v(" "),a("h2",{attrs:{id:"provide-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provide-函数"}},[s._v("#")]),s._v(" provide()函数")]),s._v(" "),a("p",[s._v("定义:提供一个值，可以被后代组件注入")]),s._v(" "),a("p",[s._v("实现: 父组件有一个"),a("code",[s._v("provide")]),s._v(",选项来提供数据,后代组件中有一个"),a("code",[s._v("inject")]),s._v("选项来开始使用父组件传递过来的数据")]),s._v(" "),a("p",[a("code",[s._v("provide(第一个参数,第二个参数)")]),s._v("接收两个参数,第一个参数是要注入的"),a("code",[s._v("key")]),s._v(",它可以是一个字符串或一个"),a("code",[s._v("symbol")]),s._v(",第二个参数是要注入的值(具体要传递给子孙组件的数据)")]),s._v(" "),a("p",[a("code",[s._v("provide")]),s._v("是"),a("code",[s._v("vue")]),s._v("官方提供的"),a("code",[s._v("componsition API")])]),s._v(" "),a("p",[s._v("具体示例代码如下所示")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("reactive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("provide"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reactive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'itclanCoder'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("website")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://coder.itclan.cn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("provide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'person'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("通过上面的"),a("code",[s._v("provide")]),s._v("提供一个值,就可以了的,那怎么样把这个数据传递到子孙组件,那么就需要用到"),a("code",[s._v("inject")]),s._v("了的")]),s._v(" "),a("h2",{attrs:{id:"inject-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inject-函数"}},[s._v("#")]),s._v(" inject()函数")]),s._v(" "),a("p",[s._v("定义: 注入一个由祖先(父)组件或整个应用提供的值")]),s._v(" "),a("p",[s._v("实现: 接收父(祖)组件传递过来的值")]),s._v(" "),a("p",[a("code",[s._v("inject(第一个参数,第二个参数(可选))")]),s._v(":第一个参数是注入的"),a("code",[s._v("key")]),s._v(",来自父(祖)组件,它们两者是需要保持一致的")]),s._v(" "),a("p",[a("code",[s._v("Vue")]),s._v("会遍历父组件链,通过匹配"),a("code",[s._v("key")]),s._v("来确定所提供的值,如果父组件链上多个组件对同一个"),a("code",[s._v("key")]),s._v("提供了之,那么离得更近的将会覆盖链上更远的组件所提供的值")]),s._v(" "),a("p",[s._v("如果没有能通过"),a("code",[s._v("key")]),s._v("匹配到的值,"),a("code",[s._v("inject()")]),s._v("函数将返回"),a("code",[s._v("undefined")]),s._v(",除非提供一个默认值")]),s._v(" "),a("p",[s._v("第二个参数是可选的,即没有匹配到"),a("code",[s._v("key")]),s._v("时,使用默认值,它也可以是一个函数,用来返回某些创建起来比较复杂的值,如果默认值本身就是一个函数")]),s._v(" "),a("p",[s._v("那么必须将"),a("code",[s._v("false")]),s._v("作为第三个参数传入,表明这个函数就是默认值,而不是一个工厂函数")]),s._v(" "),a("p",[s._v("与注册生命周期钩子的API类似,"),a("code",[s._v("inject()")]),s._v("必须在组件的"),a("code",[s._v("setup()")]),s._v("阶段同步调用")]),s._v(" "),a("p",[s._v("具体示例代码")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("inject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("toRefs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("inject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'person'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 若是使用解构,则会丢失响应式,修改数据时,页面不会更新,具体解决,可以引入toRef或toRefs函数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("website"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toRefs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("在孙组件中的模板即可以读取,从父组件传递过来的数据也是支持响应式的")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("{{person.name}}---{{person.website}}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("若使用解构时,则模板中可直接使用变量")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("{{name}}--{{website}}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("如果是解构变量,想要数据响应式,那么需要使用"),a("code",[s._v("toRef()")]),s._v("或"),a("code",[s._v("toRefs()")]),s._v("将数据进行转化为响应式")])]),s._v(" "),a("p",[s._v("如下是完整的示例")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" inject "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" fooSymbol "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./injectionSymbols'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注入值的默认方式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("inject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注入响应式的值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("inject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'count'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过 Symbol 类型的 key 注入")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" foo2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("inject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fooSymbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注入一个值，若为空则使用提供的默认值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("inject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注入一个值，若为空则使用提供的工厂函数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" baz "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("inject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注入时为了表明提供的默认值是个函数，需要传入第三个参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" fn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("inject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'function'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("基本上用第一种注入默认值的方式,使用是最多的,接收父组件提供传递过来的值")]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[a("code",[s._v("provide()")]),s._v("与"),a("code",[s._v("inject()")]),s._v("的使用比较简单,就是解决跨组件间通信的一种方式,对于层级嵌套比较深的组件,若子孙组件想要使用父组件中的数据")]),s._v(" "),a("p",[s._v("那么就可以使用这种方式进行传递数据的,这在平时的一些业务开发中,还是有些用的,而在面试当中也是一个高频面试问题,怎么解决跨级组件,非父子组件通信")]),s._v(" "),a("footer-FooterLink",{attrs:{isShareLink:!1,isDaShang:!0}}),s._v(" "),a("footer-FeedBack")],1)}),[],!1,null,null,null);t.default=e.exports}}]);