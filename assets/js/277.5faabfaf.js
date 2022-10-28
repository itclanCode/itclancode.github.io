(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{1915:function(s,t,a){"use strict";a.r(t);var e=a(12),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"vuejs中路由器的两种模式-哈希模式与历史模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuejs中路由器的两种模式-哈希模式与历史模式"}},[s._v("#")]),s._v(" vuejs中路由器的两种模式-哈希模式与历史模式")]),s._v(" "),a("h2",{attrs:{id:"快速导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[s._v("#")]),s._v(" 快速导航")]),s._v(" "),a("TOC"),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("路由器分别有两种模式,一种是"),a("code",[s._v("hash")]),s._v("模式,另一种是"),a("code",[s._v("history")]),s._v("模式,在使用"),a("code",[s._v("vue-cli")]),s._v("以及"),a("code",[s._v("vue-router")]),s._v("默认搭建的"),a("code",[s._v("vue")]),s._v("项目,如果不做特殊的配置,默认就是"),a("code",[s._v("hash")]),s._v("模式")]),s._v(" "),a("p",[s._v("这两种模式各有自己的优势,但他们的使用区别,却多多少少都会在面试当中被问到")]),s._v(" "),a("p",[s._v("今天就一起来学习下")]),s._v(" "),a("h2",{attrs:{id:"哈希模式-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈希模式-hash"}},[s._v("#")]),s._v(" 哈希模式(hash)")]),s._v(" "),a("p",[a("code",[s._v("vue-router")]),s._v("默认"),a("code",[s._v("hash")]),s._v("模式,使用"),a("code",[s._v("url")]),s._v("的哈希("),a("code",[s._v("hash")]),s._v(")来模拟一个完整的"),a("code",[s._v("URL")]),s._v(",当"),a("code",[s._v("URL")]),s._v("改变时,页面不会重新加载")]),s._v(" "),a("p",[s._v("如下所示")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("localhost"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("#home\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("特点")]),s._v(": "),a("code",[s._v("#")]),s._v("号后面的参数不会传送给服务器,兼容性好,不会作为路径的一部分发送给服务器,也就是它不会包括在"),a("code",[s._v("HTTP")]),s._v("请求体中,对后端完全没有影响,只是我们前端同学自己玩")]),s._v(" "),a("p",[s._v("页面刷新时,会停留在当前页面,不会重新加载")]),s._v(" "),a("p",[s._v("如果觉得"),a("code",[s._v("hash")]),s._v("路径很丑,不简洁,我们可以用路由的"),a("code",[s._v("history")]),s._v("模式,这种模式充分利用"),a("code",[s._v("history.pushState API")]),s._v("或"),a("code",[s._v("replaceState")]),s._v(",来完成,"),a("code",[s._v("url")]),s._v("跳转而无需重新加载页面")]),s._v(" "),a("h2",{attrs:{id:"历史模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#历史模式"}},[s._v("#")]),s._v(" 历史模式")]),s._v(" "),a("p",[a("code",[s._v("history")]),s._v("模式:在实例化配置对象中添加"),a("code",[s._v("mode")]),s._v("模式,值为"),a("code",[s._v("history")]),s._v("就可以了的\n经过改造后,"),a("code",[s._v("hash")]),s._v("模式就会变成"),a("code",[s._v("history")]),s._v("模式")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("mode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'history'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("routes")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("这两种方式的使用都是没啥问题的,如果你在意浏览器"),a("code",[s._v("url")]),s._v("的颜值,"),a("code",[s._v("#")]),s._v("符号掺杂在"),a("code",[s._v("url")]),s._v("里看起来确实有些不优雅")]),s._v(" "),a("p",[s._v("如果你想"),a("code",[s._v("url")]),s._v("更好看,那么就使用"),a("code",[s._v("history")]),s._v("模式")]),s._v(" "),a("p",[s._v("但是:在"),a("code",[s._v("hash")]),s._v("模式下,使用"),a("code",[s._v("hash")]),s._v("符号之前的内容会被包含在请求体中,"),a("code",[s._v("#")]),s._v("号后面的不会发送给服务器")]),s._v(" "),a("p",[s._v("而"),a("code",[s._v("history")]),s._v("模式下,前端的"),a("code",[s._v("URL")]),s._v("必须和实际向后端发起请求的"),a("code",[s._v("URL")]),s._v("保持一致")]),s._v(" "),a("p",[s._v("如:"),a("code",[s._v("https://itclan.cn/fontend/id")]),s._v(",如果后端缺少没有对"),a("code",[s._v("/fontend/id")]),s._v("的路由处理,那么它将返回"),a("code",[s._v("404")]),s._v("错误")]),s._v(" "),a("p",[s._v("如果你想要支持"),a("code",[s._v("history")]),s._v("模式,那么需要后端同学支持,想要彻底解决404的问题,需要与后端同学协商,"),a("strong",[s._v("因为需要后端与前端路由做匹配")])]),s._v(" "),a("p",[s._v("在服务端增加一个覆盖所有情况的时候的候选资源,如果"),a("code",[s._v("url")]),s._v("匹配不到任何静态资源,应该返回一个首页页面")]),s._v(" "),a("p",[s._v("如果出现404,容易让用户觉得这是一个Bug")]),s._v(" "),a("h2",{attrs:{id:"如何解决前台刷新页面404问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何解决前台刷新页面404问题"}},[s._v("#")]),s._v(" 如何解决前台刷新页面404问题")]),s._v(" "),a("p",[s._v("解决这个问题:如果你用的是"),a("code",[s._v("Node")]),s._v("做后端服务,那么在"),a("code",[s._v("Node")]),s._v("后台中可以加入一个中间件比如："),a("code",[s._v("connect-history-api-fallback")]),s._v("即可解决这种404问题")]),s._v(" "),a("p",[s._v("如果是"),a("code",[s._v("java")]),s._v("或"),a("code",[s._v("php")]),s._v(",找后端同学,让后端路由与前端路由做匹配,或是用"),a("code",[s._v("Ngnix")]),s._v("做中间代理")]),s._v(" "),a("p",[s._v("如下这段简易的"),a("code",[s._v("Node")]),s._v("服务代码，可以命名为"),a("code",[s._v("server.js")]),s._v(",同时安装"),a("code",[s._v("express")]),s._v("以及"),a("code",[s._v("connect-history-api-fallback")]),s._v("中间件")]),s._v(" "),a("p",[s._v("启动后端服务执行命令"),a("code",[s._v("node server.js")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" express "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'express'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" history "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'connect-history-api-fallback'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("express")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("express"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("static")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/static'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5005")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("err")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("（！err）consle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'服务器启动成功了'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("把前端打包生成的"),a("code",[s._v("dist")]),s._v("文件内的代码,放到"),a("code",[s._v("static")]),s._v("中,通过这一操作,即可解决刷新页面,"),a("code",[s._v("404")]),s._v("的问题")]),s._v(" "),a("h2",{attrs:{id:"对单页面spa的应用理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对单页面spa的应用理解"}},[s._v("#")]),s._v(" 对单页面spa的应用理解")]),s._v(" "),a("p",[s._v("我们的前端使用的"),a("code",[s._v("vue-router")]),s._v("中的两种模式,就是单页面应用,整个应用只有一个"),a("code",[s._v("router")]),s._v("路由器,是可以通过"),a("code",[s._v("$router")]),s._v("属性获取到")]),s._v(" "),a("p",[s._v("也就是说,整个应用只有一个完整的页面,同时,点击页面中的导航链接,不会刷新页面,只会是页面的局部更新")]),s._v(" "),a("p",[s._v("而我们页面中的数据,往往需要通过"),a("code",[s._v("ajax")]),s._v("请求来获取")]),s._v(" "),a("p",[s._v("现在开发的新项目,都是前后端分离,基本上都是单页面应用")]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("前端路由,有两种模式,一种是"),a("code",[s._v("hash")]),s._v("模式,另一种是"),a("code",[s._v("history")]),s._v("模式,其中"),a("code",[s._v("hash")]),s._v("模式是默认模式,"),a("code",[s._v("#")]),s._v("后面的不会发送给服务端,不会重新刷新加载页面,而"),a("code",[s._v("history")]),s._v("模式,"),a("code",[s._v("url")]),s._v("虽然比较好看,但是想要完整支持,需要后端同学提供支持,后端路由与前端的路由需要做匹配")]),s._v(" "),a("p",[s._v("否则部署到线上,一刷新页面,会出现"),a("code",[s._v("404")]),s._v("的问题")]),s._v(" "),a("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}}),s._v(" "),a("footer-FeedBack")],1)}),[],!1,null,null,null);t.default=n.exports}}]);