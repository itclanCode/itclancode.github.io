(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{1867:function(t,s,a){"use strict";a.r(s);var r=a(12),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vuejs中的编程式导航vs声明式导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuejs中的编程式导航vs声明式导航"}},[t._v("#")]),t._v(" vuejs中的编程式导航Vs声明式导航")]),t._v(" "),a("h2",{attrs:{id:"快速导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[t._v("#")]),t._v(" 快速导航")]),t._v(" "),a("TOC"),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("vue")]),t._v("当中实现链接的跳转,通过使用的是"),a("code",[t._v("vue")]),t._v("提供的"),a("code",[t._v("router-link")]),t._v("标签,并结合"),a("code",[t._v("to")]),t._v("属性去跳转,这种可直接在模板中进行使用")]),t._v(" "),a("p",[t._v("我们称为它是声明式的导航,但有时,我们项目里,写的不是"),a("code",[t._v("router-link")]),t._v("而是一个"),a("code",[t._v("button")]),t._v("组件,或是需要有一定的异步逻辑处理,同样要实现跳转")]),t._v(" "),a("p",[t._v("那么这个时候,"),a("code",[t._v("router-link")]),t._v("就无法满足实现了的,这时候编程式导航就可以满足我们的需求的")]),t._v(" "),a("p",[t._v("它等价于"),a("code",[t._v("router-link")]),t._v(",是"),a("code",[t._v("vue")]),t._v("提供的一种通过调用"),a("code",[t._v("vue")]),t._v("实例"),a("code",[t._v("API")]),t._v("的方法实现的,它的概念名字比较抽象,你可以把编程式导航理解成,它是通过"),a("code",[t._v("js")]),t._v("的方式去实现类似"),a("code",[t._v("router-link")]),t._v("的功能不")]),t._v(" "),a("p",[t._v("不借助"),a("code",[t._v("router-link")]),t._v("的方式实现链接跳转，而是通过"),a("code",[t._v("Vue")]),t._v("实例的方法实现跳转")]),t._v(" "),a("p",[t._v("使路由的跳转更加灵活,自由")]),t._v(" "),a("h2",{attrs:{id:"具体的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体的实现"}},[t._v("#")]),t._v(" 具体的实现")]),t._v(" "),a("p",[t._v("其实,编程式导航非常简单,是使用"),a("code",[t._v("Vue")]),t._v("的两个实例方法"),a("code",[t._v("this.$router.push")]),t._v("和"),a("code",[t._v("this.$router.replace")]),t._v("实现的")]),t._v(" "),a("h3",{attrs:{id:"this-router-push-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-router-push-path"}},[t._v("#")]),t._v(" this.$router.push(path)")]),t._v(" "),a("p",[t._v("点击路由链接,可以返回到当前的路由界面,它是一种队列方式呈现的,先进先出")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'路由规则配置的名字'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义在路由规则的name名字,保持一致,而非定义组件时的name名字,")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("params")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果是query形式,那么这里就是query")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'11'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'itclan.cn'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h3",{attrs:{id:"this-router-replace-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-router-replace-path"}},[t._v("#")]),t._v(" this.$router.replace(path)")]),t._v(" "),a("p",[t._v("用心的路由去替换当前的路由,也就是没有历史记录,前进和后退,没法返回到当前路由界面,它是以栈的方式呈现的,先进后出")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'路由规则配置的名字'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("params")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'22'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'itclanCoder'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h3",{attrs:{id:"this-router-forward"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-router-forward"}},[t._v("#")]),t._v(" this.$router.forward")]),t._v(" "),a("p",[a("code",[t._v("this.$router.forward()")]),t._v("表示前进")]),t._v(" "),a("h3",{attrs:{id:"this-router-back"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-router-back"}},[t._v("#")]),t._v(" this.$router.back")]),t._v(" "),a("p",[a("code",[t._v("this.$router.back()")]),t._v(" // 表示后退")]),t._v(" "),a("h3",{attrs:{id:"this-router-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-router-go"}},[t._v("#")]),t._v(" this.$router.go")]),t._v(" "),a("p",[a("code",[t._v("this.$router.go(正数/负数)")]),t._v(",若为正数,则表示前进几步,若为负数,则后退几步")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("总得来说,在"),a("code",[t._v("vue")]),t._v("当中实现路由的跳转,有两种方式,一种是声明式"),a("code",[t._v("router-link")]),t._v("的方式,另一种就是通过"),a("code",[t._v("vue")]),t._v("的实例方法"),a("code",[t._v("this.$router.push")]),t._v("或"),a("code",[t._v("this.$router.replace")]),t._v("实现")]),t._v(" "),a("p",[t._v("前者具备历史的前进和后退,默认就是这种方式,而后者是替换当前的路由")]),t._v(" "),a("p",[t._v("非常简单")]),t._v(" "),a("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}}),t._v(" "),a("footer-FeedBack")],1)}),[],!1,null,null,null);s.default=e.exports}}]);