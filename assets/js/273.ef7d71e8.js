(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{1938:function(t,a,s){"use strict";s.r(a);var n=s(12),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"js实现自动刷新页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js实现自动刷新页面"}},[t._v("#")]),t._v(" JS实现自动刷新页面")]),t._v(" "),s("h2",{attrs:{id:"快速导航"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[t._v("#")]),t._v(" 快速导航")]),t._v(" "),s("TOC"),t._v(" "),s("jingdiantexiao-autoRefresh"),t._v(" "),s("h2",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"实例描述",lazy:""}},[s("p",[t._v("在一些具有实效特点的网站,可视化数据实时大屏,比如:股票价格,外汇牌价,全国疫情实时数据统计等\n定时地自动刷新网页,把最新的数据展示给用户,这样的效果在javaScript中如何实现呢\n在"),s("code",[t._v("JavaScript")]),t._v("里有一个"),s("code",[t._v("reload")]),t._v("函数可以实现这样的效果")])]),t._v(" "),s("Tab",{attrs:{label:"具体JavaScript代码",lazy:""}},[s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自动刷新函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("autoRefresh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用location的reload函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("autoRefresh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3秒钟,自动刷新一次")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])]),t._v(" "),s("Tab",{attrs:{label:"难点剖析",lazy:""}},[s("p",[t._v("实现这个效果,需要知道"),s("code",[t._v("reload()")]),t._v("函数的作用是让浏览器刷新当前网页,其次网页的自动刷新离不开一个定时器,也就是"),s("code",[t._v("setTimeout()")]),t._v("函数,这个函数\n属于"),s("code",[t._v("window")]),t._v("对象,它也是顶层对象,所以直接写函数名称就能被调用,不需要写完整的"),s("code",[t._v("window.setTimeout()")]),t._v(",接收两个参数,第一个是回调函数,具体要执行的代码，第二个是间隔的时间,单位为毫秒,上面示例中是3秒执行一次")])]),t._v(" "),s("Tab",{attrs:{label:"额外拓展",lazy:""}},[s("p",[t._v("有一种最简单的方式就是直接用一行代码就可以实现,使用"),s("code",[t._v("meta")]),t._v("标签即可实现,还可以实现自动跳转到某个指定的网站上")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta http"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("equiv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"refresh"')]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5;url=https://tv.itclan.cn/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])],1),t._v(" "),s("footer-FooterLink",{attrs:{isShareLink:!1,isDaShang:!0}}),t._v(" "),s("footer-FeedBack")],1)}),[],!1,null,null,null);a.default=e.exports}}]);