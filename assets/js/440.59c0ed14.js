(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{2114:function(t,e,s){"use strict";s.r(e);var a=s(12),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"vue-基础面试题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-基础面试题"}},[t._v("#")]),t._v(" vue 基础面试题")]),t._v(" "),s("TOC"),t._v(" "),s("h2",{attrs:{id:"第-1-题-说一说-vue-中的模板编译原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-1-题-说一说-vue-中的模板编译原理"}},[t._v("#")]),t._v(" 第 1 题-说一说 vue 中的模板编译原理")]),t._v(" "),s("p",[t._v("将"),s("code",[t._v("template转换成render函数")]),t._v(",在开发时尽量不要使用"),s("code",[t._v("template")]),t._v(",因为将"),s("code",[t._v("template")]),t._v("转换成"),s("code",[t._v("render")]),t._v("方法需要在运行时进行编译操作会有性能损耗,同时引用带有"),s("code",[t._v("compiler")]),t._v("包的"),s("code",[t._v("vue")]),t._v("体积也会变大,默认"),s("code",[t._v(".vue")]),t._v("文件中的"),s("code",[t._v("template")]),t._v("处理是通过"),s("code",[t._v("vue-loader")]),t._v("来进行处理的并不是通过运行时的编译")]),t._v(" "),s("ol",[s("li",[t._v("将"),s("code",[t._v("template")]),t._v("模板转换成"),s("code",[t._v("ast")]),t._v("语法树-"),s("code",[t._v("parserHTML")])]),t._v(" "),s("li",[t._v("对静态语法做静态标记-"),s("code",[t._v("markUp")])]),t._v(" "),s("li",[t._v("重新生成代码")])]),t._v(" "),s("h2",{attrs:{id:"第-2-题-proxy-与-object-defineproperty-优劣对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-2-题-proxy-与-object-defineproperty-优劣对比"}},[t._v("#")]),t._v(" 第 2 题-Proxy 与 Object.defineProperty 优劣对比")]),t._v(" "),s("p",[t._v("Proxy 的优势如下")]),t._v(" "),s("ol",[s("li",[t._v("Proxy 可以直接监听对象而非属性")]),t._v(" "),s("li",[t._v("proxy 可以直接监听数组的变化")]),t._v(" "),s("li",[t._v("proxy 有多达 13 种拦截方法,不限于"),s("code",[t._v("apply")]),t._v(","),s("code",[t._v("ownKeys")]),t._v(","),s("code",[t._v("deleteProperty")]),t._v(","),s("code",[t._v("has")]),t._v("等"),s("code",[t._v("Object.defineProperty")]),t._v("不具备的")]),t._v(" "),s("li",[t._v("Proxy 返回的是一个新对象,我们可以只操作新对象达到目的,而"),s("code",[t._v("Object.defineProperty")]),t._v("只能遍历对象属性直接修改")]),t._v(" "),s("li",[t._v("Proxy 作为新标准将受到浏览器厂商重点持续的性能优化")])]),t._v(" "),s("h2",{attrs:{id:"第-3-题-vue3-x-响应式数据原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-3-题-vue3-x-响应式数据原理"}},[t._v("#")]),t._v(" 第 3 题-Vue3.x 响应式数据原理")]),t._v(" "),s("p",[s("code",[t._v("vue3.x")]),t._v("改用"),s("code",[t._v("proxy")]),t._v("替代"),s("code",[t._v("Object.defineProperty")]),t._v("因为"),s("code",[t._v("Proxy")]),t._v("可以直接监听对象和数组的变化,并且有多达 13 种拦截方法,作为新标准将受到浏览器厂商重点持续的性能优化")]),t._v(" "),s("p",[t._v("Proxy 只会代理对象的第一层,那么 vue3 又是怎样处理这个问题呢")]),t._v(" "),s("p",[t._v("判断当前"),s("code",[t._v("Reflect.get")]),t._v("的返回值是否为"),s("code",[t._v("Object")]),t._v(",如果是则在通过"),s("code",[t._v("reactive方法")]),t._v("做代理,这样就实现了深度观测")]),t._v(" "),s("p",[t._v("监听数组的时候可能触发多次"),s("code",[t._v("get/set")]),t._v("那么如何放置触发多次呢")]),t._v(" "),s("p",[t._v("可以判断"),s("code",[t._v("key")]),t._v("是否为当前代理对象"),s("code",[t._v("target自身属性")]),t._v("，也可以判断旧值与新值是否相等,只有满足上面两个条件之一时，才有可能执行 trigger")]),t._v(" "),s("h2",{attrs:{id:"第-4-题-vue-组件间通信有哪几种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-4-题-vue-组件间通信有哪几种方式"}},[t._v("#")]),t._v(" 第 4 题-Vue 组件间通信有哪几种方式?")]),t._v(" "),s("p",[t._v("Vue 组件间通信主要指以下 3 类通信: 父子组件通信,隔代组件通信,兄弟组件通信,下面分别介绍每种通信方式以及适用于哪类组件间通信")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("props/$emit")]),t._v("适用于父子组件通信,这种方法是"),s("code",[t._v("vue")]),t._v("组件的基础")]),t._v(" "),s("li",[s("code",[t._v("ref")]),t._v("与"),s("code",[t._v("$parent/$children")]),t._v("适用于父子组件通信")]),t._v(" "),s("li",[s("code",[t._v("ref")]),t._v("与"),s("code",[t._v("$parent/$children")]),t._v("适用父子组件通信")]),t._v(" "),s("li",[s("code",[t._v("ref")]),t._v(":如果在普通的"),s("code",[t._v("DOM")]),t._v("元素上使用,引用指向的就是"),s("code",[t._v("DOM")]),t._v("元素,如果用在子组件上,引用的就指向组件的实例")]),t._v(" "),s("li",[s("code",[t._v("$parent/$children")]),t._v(":访问父/子实例")]),t._v(" "),s("li",[s("code",[t._v("EventBus($emit/$on)")]),t._v(":适用于父子,隔代,兄弟组件通信\n这种方法通过一个空的"),s("code",[t._v("vue")]),t._v("实例作为中央事件总线(事件中心),用它来触发事件和监听事件,从而实现任何组件间的通信,包括父子,隔代,兄弟组件")]),t._v(" "),s("li",[s("code",[t._v("$attrs/$listeners")]),t._v("适用于隔代组件通信")]),t._v(" "),s("li",[s("code",[t._v("$attrs")]),t._v(": 包含了父作用域中不被"),s("code",[t._v("prop")]),t._v("所识别(且获取)的特性绑定(class 和 style 除外),当一个组件没有声明任何"),s("code",[t._v("prop")]),t._v("时,这里会包含所有父作用域的绑定("),s("code",[t._v("class")]),t._v("和"),s("code",[t._v("style")]),t._v("除外),并且可以通过"),s("code",[t._v('v-bind="$attrs"')]),t._v("传入内部组件,通常配合"),s("code",[t._v("inheritAttrs")]),t._v("选项一起使用")]),t._v(" "),s("li",[s("code",[t._v("$listeners")]),t._v(":包含了父作用域中的(不含"),s("code",[t._v(".native")]),t._v("修饰器的)"),s("code",[t._v("v-on")]),t._v("事件监听器,它可以通过"),s("code",[t._v('v-on="$listeners"')]),t._v("传入内部组件")]),t._v(" "),s("li",[s("code",[t._v("provide/inject")]),t._v("适用于隔代组件通信\n祖先组件通过 provider 来提供变量,然后在子孙组件中通过"),s("code",[t._v("inject")]),t._v("来注入变量,"),s("code",[t._v("provide/inject API")]),t._v("主要解决跨级组件间通信的问题,不过它的使用场景,主要是子组件获取上级组件的状态,跨级组件间建立一种主动提供与依赖注入的关系")]),t._v(" "),s("li",[s("code",[t._v("vuex")]),t._v("适用于父子,隔代,兄弟组件通信\n"),s("code",[t._v("Vuex")]),t._v("是一个专为"),s("code",[t._v("vue.js")]),t._v("应用程序开发的状态管理模式,每一个"),s("code",[t._v("vuex")]),t._v("应用的核心就是"),s("code",[t._v("store")]),t._v("(仓库),"),s("code",[t._v("store")]),t._v("基本上就是一个容器,它包含着你应用中大部分的状态("),s("code",[t._v("state")]),t._v(")")])]),t._v(" "),s("h2",{attrs:{id:"第-5-题-组件中写name选项有哪些好处及作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-5-题-组件中写name选项有哪些好处及作用"}},[t._v("#")]),t._v(" 第 5 题-组件中写"),s("code",[t._v("name")]),t._v("选项有哪些好处及作用")]),t._v(" "),s("ol",[s("li",[t._v("可以通过名字找到对应的组件(递归组件)")]),t._v(" "),s("li",[t._v("可以通过"),s("code",[t._v("name")]),t._v("属性来实现缓存功能("),s("code",[t._v("keep-alive")]),t._v(")")]),t._v(" "),s("li",[t._v("可以通过"),s("code",[t._v("name")]),t._v("来识别组件(跨级组件通信时非常重要)")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("extend")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"第-6-题-keep-alive-平时在哪里使用-原理是"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-6-题-keep-alive-平时在哪里使用-原理是"}},[t._v("#")]),t._v(" 第 6 题-keep-alive 平时在哪里使用?原理是?")]),t._v(" "),s("p",[s("code",[t._v("keep-alive")]),t._v("主要是组件缓存,采用"),s("code",[t._v("LRU")]),t._v("算法")]),t._v(" "),s("p",[t._v("常用的两个属性"),s("code",[t._v("include/exculde")]),t._v(",允许组件有条件的进行缓存\n两个生命周期"),s("code",[t._v("actived/deactivated")]),t._v("用来得知当前组件是否处于活跃状态")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("abstract")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 抽象组件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" patternTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 要缓存的有哪些")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("exclude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" patternTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 要排除的有哪些")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("max")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//最大缓存数量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过key 找到缓存，获取实例")]),t._v("\n    vnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentInstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentInstance\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将key删除掉")]),t._v("\n    keys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 放到末尾")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vnode "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 没有缓存过")]),t._v("\n    keys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//存储key")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" keys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果超过最大缓存数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除最早缓存的")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pruneCacheEntry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_vnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nvnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keepAlive "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标记走了缓存")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("h2",{attrs:{id:"第-7-题-vue-minxin-的使用场景和原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-7-题-vue-minxin-的使用场景和原理"}},[t._v("#")]),t._v(" 第 7 题-Vue.minxin 的使用场景和原理?")]),t._v(" "),s("p",[s("code",[t._v("Vue.mixin")]),t._v("的作用就是抽离公共的业务逻辑,原理类似"),s("code",[t._v("对象的继承")]),t._v(",当组件初始化时会调用"),s("code",[t._v("mergeOptions")]),t._v('方法进行合并,采用策略模式针对不同的属性进行合并,如果混入的数据和本身组件中的数据冲突,会采用"就近原则"以组件的数据为准')]),t._v(" "),s("h2",{attrs:{id:"第-8-题-vue-router-有几种钩子函数-具体是什么及执行流程是怎样的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-8-题-vue-router-有几种钩子函数-具体是什么及执行流程是怎样的"}},[t._v("#")]),t._v(" 第 8 题-vue-router 有几种钩子函数?具体是什么及执行流程是怎样的?")]),t._v(" "),s("p",[t._v("路由钩子的执行流程,钩子函数种类有: 全局守卫,路由守卫,组件守卫")]),t._v(" "),s("p",[t._v("完整的导航解析流程")]),t._v(" "),s("ol",[s("li",[t._v("导航被触发")]),t._v(" "),s("li",[t._v("在失活的组件里调用"),s("code",[t._v("beforeRouteLeave")]),t._v("守卫")]),t._v(" "),s("li",[t._v("调用全局的"),s("code",[t._v("beforeEach")]),t._v("守卫")]),t._v(" "),s("li",[t._v("在复用组件里调用"),s("code",[t._v("beforeRouteUpdate")]),t._v("守卫")]),t._v(" "),s("li",[t._v("调用路由配置里的"),s("code",[t._v("beforeEneter")]),t._v("守卫")]),t._v(" "),s("li",[t._v("解析异步路由组件")]),t._v(" "),s("li",[t._v("在被激活的组件里调用"),s("code",[t._v("beforeRouteEnter")]),t._v("守卫")]),t._v(" "),s("li",[t._v("调用全局"),s("code",[t._v("beforeResolve")]),t._v("守卫")]),t._v(" "),s("li",[t._v("导航被确认")]),t._v(" "),s("li",[t._v("调用全局的"),s("code",[t._v("afterEach")]),t._v("钩子")]),t._v(" "),s("li",[t._v("DOM 更新")]),t._v(" "),s("li",[t._v("用创建好的实例调用"),s("code",[t._v("beforeRouterEnter")]),t._v("守卫中传给"),s("code",[t._v("next")]),t._v("的回调函数")])]),t._v(" "),s("h2",{attrs:{id:"第-9-题-vue-router-两种模式的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-9-题-vue-router-两种模式的区别"}},[t._v("#")]),t._v(" 第 9 题-vue-router 两种模式的区别")]),t._v(" "),s("p",[s("code",[t._v("vue-router")]),t._v("有 3 种路由模式:"),s("code",[t._v("hash")]),t._v(","),s("code",[t._v("history")]),t._v(","),s("code",[t._v("abstract")])]),t._v(" "),s("ol",[s("li",[t._v("hash 模式: "),s("code",[t._v("hash")]),t._v("+"),s("code",[t._v("hashChange")])])]),t._v(" "),s("p",[s("strong",[t._v("特点")]),t._v(":"),s("code",[t._v("hash")]),t._v("虽然在"),s("code",[t._v("url")]),t._v("中,但不被包括在"),s("code",[t._v("HTTP")]),t._v("请求中,用来指导浏览器动作,对服务端安全无用,"),s("code",[t._v("hash")]),t._v("不会重加载页面,通过监听"),s("code",[t._v("hash(#)")]),t._v("的变化来执行"),s("code",[t._v("js")]),t._v("代码,从而实现页面的改变")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("‘hashchange‘"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("urlChange")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[s("code",[t._v("history")]),t._v("模式: "),s("code",[t._v("historyApi")]),t._v("+"),s("code",[t._v("popState")])])]),t._v(" "),s("p",[t._v("HTML5 推出的"),s("code",[t._v("history API")]),t._v(",由"),s("code",[t._v("pushState()")]),t._v("记录操作历史,监听"),s("code",[t._v("popstate")]),t._v("事件来监听到状态变更")]),t._v(" "),s("p",[t._v("因为只要刷新这个"),s("code",[t._v("url")]),t._v(",就会请求服务器,然而服务器上根本没有这个资源,所以就会报"),s("code",[t._v("404")]),t._v(",解决方案就配置一下服务器端")]),t._v(" "),s("p",[s("strong",[t._v("说明")]),t._v(":")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("hash")]),t._v(":使用"),s("code",[t._v("url hash")]),t._v("值来作路由,支持所有浏览器,包括不支持"),s("code",[t._v("HTML5 History API")]),t._v("的浏览器")]),t._v(" "),s("li",[s("code",[t._v("history")]),t._v(": 依赖"),s("code",[t._v("HTML5 History API")]),t._v("和服务器配置,具体可查看"),s("code",[t._v("HTML5 History")]),t._v("模式")]),t._v(" "),s("li",[s("code",[t._v("abstract")]),t._v(": 支持所有"),s("code",[t._v("JavaScript运行坏境")]),t._v(",如"),s("code",[t._v("Node.js")]),t._v("服务器端,如果发现没有浏览器的"),s("code",[t._v("API")]),t._v(",路由就会自动强制进行着模式")])]),t._v(" "),s("h2",{attrs:{id:"第-10-题-nexttick在哪里使用-原理是"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-10-题-nexttick在哪里使用-原理是"}},[t._v("#")]),t._v(" 第 10 题-"),s("code",[t._v("nextTick在哪里使用?原理是?")])]),t._v(" "),s("p",[s("code",[t._v("nextTick")]),t._v("的回调是在下次 DOM 更新循环结束之后执行的延迟回调,在修改数据之后立即使用这个方法,获取更新后的"),s("code",[t._v("DOM")]),t._v(","),s("code",[t._v("nextTick")]),t._v("主要使用了"),s("code",[t._v("宏任务和微任务")]),t._v(",原理就是异步方法("),s("code",[t._v("promise")]),t._v(","),s("code",[t._v("multationObserver,setImmediate,setTimeout")]),t._v(")")]),t._v(" "),s("p",[s("code",[t._v("vue")]),t._v("多次更新数据,最终会进行批处理更新,内部调用就是"),s("code",[t._v("nextTick")]),t._v("实现了延迟更新,用户自定义的"),s("code",[t._v("nextTick")]),t._v("中的回调会被延迟更新完成后调用,从而可以获取更新后的"),s("code",[t._v("DOM")])]),t._v(" "),s("h2",{attrs:{id:"第-11-题-vue-为什么需要虚拟-dom-虚拟-dom-的优劣如何"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-11-题-vue-为什么需要虚拟-dom-虚拟-dom-的优劣如何"}},[t._v("#")]),t._v(" 第 11 题-Vue 为什么需要虚拟 DOM?虚拟 DOM 的优劣如何?")]),t._v(" "),s("p",[s("code",[t._v("Virtual DOM")]),t._v("就是用"),s("code",[t._v("js对象描述真实的DOM")]),t._v(",是对真实"),s("code",[t._v("DOM")]),t._v("的抽象,由于直接操作"),s("code",[t._v("DOM")]),t._v("性能低,但是"),s("code",[t._v("js")]),t._v("层的操作效率高,可以将"),s("code",[t._v("DOM")]),t._v("操作转化成对象操作,最终通过"),s("code",[t._v("diff算法比对差异进行更新DOM")]),t._v("(减少了对真实 DOM 的操作),虚拟"),s("code",[t._v("DOM")]),t._v("不依赖真实平台坏境从而可以实现跨平台")]),t._v(" "),s("p",[t._v("虚拟"),s("code",[t._v("DOM")]),t._v("的实现就是普通对象包含"),s("code",[t._v("tag")]),t._v(","),s("code",[t._v("data")]),t._v(","),s("code",[t._v("children")]),t._v("等属性对真实节点的描述(本质上就是"),s("code",[t._v("js")]),t._v("和"),s("code",[t._v("DOM")]),t._v("之间的一个缓存)")]),t._v(" "),s("p",[s("code",[t._v("virtualDOM")]),t._v("映射到真实"),s("code",[t._v("DOM")]),t._v("要经历"),s("code",[t._v("VNode")]),t._v("的"),s("code",[t._v("create,diff,patch")]),t._v("等阶段")])],1)}),[],!1,null,null,null);e.default=v.exports}}]);