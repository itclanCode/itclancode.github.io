(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{1061:function(s,a,t){"use strict";t(784)},1690:function(s,a,t){"use strict";t.r(a);var e={data:function(){return{num:1}},mounted:function(){this.num=localStorage.number||1},methods:{handleChange:function(s){console.log(s),localStorage.number=s}}},n=(t(1061),t(12)),r=Object(n.a)(e,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"js如何使用localstorage实现计数器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js如何使用localstorage实现计数器"}},[s._v("#")]),s._v(" JS如何使用localStorage实现计数器")]),s._v(" "),t("h2",{attrs:{id:"快速导航"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[s._v("#")]),s._v(" 快速导航")]),s._v(" "),t("TOC"),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("HTML5")]),s._v("之前,客户端本地存储只能依赖于"),t("code",[s._v("cookie")]),s._v(",它由服务器端在写入的时候就设置好的,"),t("code",[s._v("cookie")]),s._v("的效率也很低,而且使用不方便,安全性也不高")]),s._v(" "),t("p",[s._v("自从"),t("code",[s._v("html5")]),s._v("出来后,html5带来了全新的本地存储功能,一个是"),t("code",[s._v("localStorage")]),s._v(",另一个是"),t("code",[s._v("sessionStorage")])]),s._v(" "),t("p",[s._v("前者是只要在前端一写入,就会一直存在,除非手动清除,后者是关闭浏览器的时候就会清除")]),s._v(" "),t("p",[s._v("在开发的时候,很多地方都会用到"),t("code",[s._v("localStorage")]),s._v(",和"),t("code",[s._v("sessionStorage")]),s._v("比如:表格的分页,一刷新保持当前页的状态,三级路由"),t("code",[s._v("Tab")]),s._v("的一个切换激活状态,用到的就是"),t("code",[s._v("localStorage")]),s._v(","),t("code",[s._v("sessionStorage")]),s._v("可以用来监测用户是否刷新进入页面")]),s._v(" "),t("p",[s._v("今天使用"),t("code",[s._v("localStorage")]),s._v("实现一个计数器的功能")]),s._v(" "),t("h2",{attrs:{id:"具体示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体示例"}},[s._v("#")]),s._v(" 具体示例")]),s._v(" "),[t("div",{staticClass:"wrap"},[t("div",{staticClass:"content"},[t("el-input-number",{attrs:{min:1,label:"描述文字"},on:{change:s.handleChange},model:{value:s.num,callback:function(a){s.num=a},expression:"num"}})],1)])],s._v(" "),t("p",[s._v("以上的加减计数器,使用了"),t("code",[s._v("localStorage")]),s._v(",无论是关闭浏览器,还是重新打开一个新的窗口,"),t("code",[s._v("localStorage")]),s._v("设置的值,都会永久存储在硬盘里,除非手动删除")]),s._v(" "),t("p",[s._v("一直都是在的,这个在实际开发中,有些地方式有这个需求的,比如:购物车,还有表格分页等等,如果你想持久的保持某个数据状态,那么就可以使用"),t("code",[s._v("localStorage")])]),s._v(" "),t("p",[s._v("如下是简易代码")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("template"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wrap"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"content"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("el"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("input"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("number v"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("model"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"num"')]),s._v(" @change"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"handleChange"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("min"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("  label"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"描述文字"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("el"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("input"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("number"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("template"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("num")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mounted")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// this.num = localStorage.getItem('number') || 1;")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等价于")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" localStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("number "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("methods")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("handleChange")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("val")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//localStorage.setItem('number',val)")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等价于如下")]),s._v("\n        localStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("number "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wrap "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    text"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("align"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" center"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br")])]),t("p",[s._v("主要的核心代码是\n设置"),t("code",[s._v("localStorage")]),s._v("使用的是"),t("code",[s._v("localStorage.setItem('key',val)")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 常用")]),s._v("\nlocalStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setItem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'key'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或者,如下所示,这里的key是你自己设置的存储的字段,val是要具体存入localStorage的值")]),s._v("\nlocalStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("而获取"),t("code",[s._v("localStorage")]),s._v("使用的是"),t("code",[s._v("localStorage.getItem('key')")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 常用")]),s._v("\nlocalStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getItem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'key'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或者")]),s._v("\nlocalStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"前端浏览器本地存储的方法与区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端浏览器本地存储的方法与区别"}},[s._v("#")]),s._v(" 前端浏览器本地存储的方法与区别")]),s._v(" "),t("h3",{attrs:{id:"相同点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相同点"}},[s._v("#")]),s._v(" 相同点")]),s._v(" "),t("p",[s._v("在本地(浏览器端)存储数据")]),s._v(" "),t("h3",{attrs:{id:"不同点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同点"}},[s._v("#")]),s._v(" 不同点")]),s._v(" "),t("p",[t("code",[s._v("cookie")]),s._v("由服务端写入,而"),t("code",[s._v("localStorage")]),s._v(","),t("code",[s._v("sessionStorage")]),s._v("由前端写入")]),s._v(" "),t("h3",{attrs:{id:"生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[s._v("#")]),s._v(" 生命周期")]),s._v(" "),t("p",[t("code",[s._v("cookie")]),s._v("由服务器端在写入的时候就设置好的,而"),t("code",[s._v("localStorage")]),s._v("是写入就一直存在,除非手动清除,"),t("code",[s._v("sessionStorage")]),s._v("是页面关闭的时候就清除")]),s._v(" "),t("h3",{attrs:{id:"存储大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存储大小"}},[s._v("#")]),s._v(" 存储大小")]),s._v(" "),t("p",[t("code",[s._v("cookie")]),s._v("的存储空间比较小,大概"),t("code",[s._v("4KB")]),s._v(","),t("code",[s._v("sessionStorage")]),s._v(","),t("code",[s._v("localStorage")]),s._v("存储空间比较大,大概"),t("code",[s._v("5M")])]),s._v(" "),t("h3",{attrs:{id:"同源原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同源原则"}},[s._v("#")]),s._v(" 同源原则")]),s._v(" "),t("p",[t("code",[s._v("cookie")]),s._v(","),t("code",[s._v("sessionStorage")]),s._v(","),t("code",[s._v("LocalStorage")]),s._v("数据都遵循同源原则,其中"),t("code",[s._v("sessionStorage")]),s._v("还限制必须是同一个页面")]),s._v(" "),t("p",[s._v("在前端给后端发送请求的时候,会自动携带"),t("code",[s._v("cookie")]),s._v("中的数据,但是"),t("code",[s._v("sessionStorage")]),s._v("不会")]),s._v(" "),t("h3",{attrs:{id:"应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),t("p",[t("code",[s._v("Cookie")]),s._v("一般用于存储登录验证信息"),t("code",[s._v("sessionID")]),s._v("或者"),t("code",[s._v("token")]),s._v(","),t("code",[s._v("localStorage")]),s._v("常用语存储不易变动的数据,需要持久化的数据,减轻服务器的压力,"),t("code",[s._v("sessionStorage")]),s._v("可以用来监测用户是否刷新进入页面")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("localStorage")]),s._v("做持久化存储非常简单,用于存储大量的数据,这一点"),t("code",[s._v("cookie")]),s._v("是无法做到的")]),s._v(" "),t("footer-FooterLink",{attrs:{isShareLink:!1,isDaShang:!0}}),s._v(" "),t("footer-FeedBack")],2)}),[],!1,null,null,null);a.default=r.exports},784:function(s,a,t){}}]);