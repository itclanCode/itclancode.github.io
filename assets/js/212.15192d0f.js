(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{2088:function(t,a,s){"use strict";s.r(a);var n=s(12),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"小程序-实现小程序与小程序之间的跳转"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小程序-实现小程序与小程序之间的跳转"}},[t._v("#")]),t._v(" 小程序-实现小程序与小程序之间的跳转")]),t._v(" "),n("h2",{attrs:{id:"快速导航"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[t._v("#")]),t._v(" 快速导航")]),t._v(" "),n("TOC"),t._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("p",[t._v("小程序与小程序之间互相可以跳转,形成流量的循环.在小程序中怎么实现的呢")]),t._v(" "),n("p",[t._v("小程序中提供了两种方式实现小程序与小程序之间的跳转")]),t._v(" "),n("div",{attrs:{align:"center"}},[n("img",{staticClass:"medium-zoom lazy",attrs:{width:"250",height:"250",loading:"lazy",src:s(732),alt:"效果展示"}}),t._v(" "),n("p",[t._v("扫码进入我的页面即可体验小程序的跳转")])]),t._v(" "),n("h2",{attrs:{id:"使用-api-方式跳转"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-api-方式跳转"}},[t._v("#")]),t._v(" 使用 API 方式跳转")]),t._v(" "),n("p",[t._v("如下示例代码所示")]),t._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[t._v("点击即可查看 wxml 代码")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("<"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindtap")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onJumpMin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("打开跳转到其他小程序方式1"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])])]),t._v(" "),n("p",[t._v("如下是逻辑代码")]),t._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[t._v("点击即可查看 js 代码")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onJumpMin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("navigateToMiniProgram")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("appId")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wx9fbad659d526c9bc'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要跳转到指定的小程序appid")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pages/home/home'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打开的页面")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("envVersion")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'release'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打开成功")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])])]),t._v(" "),n("p",[t._v("使用小程序跳转的 API 就上面几行代码")]),t._v(" "),n("h2",{attrs:{id:"使用标签方式跳转"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用标签方式跳转"}},[t._v("#")]),t._v(" 使用标签方式跳转")]),t._v(" "),n("p",[t._v("如下是"),n("code",[t._v("wxml")]),t._v("代码")]),t._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[t._v("点击即可跳转")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("navigator")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("target")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("miniProgram"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("open-type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navigate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("app-id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wx66d9cf3762c49a1a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pages/index/index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("version")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("release"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("打开绑定的小程序"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("navigator")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])])]),t._v(" "),n("p",[t._v("使用标签的方式跳转,非常简单,只需要在"),n("code",[t._v("wxml")]),t._v("中使用"),n("code",[t._v("target")]),t._v(","),n("code",[t._v("open-type")]),t._v(","),n("code",[t._v("app-id")]),t._v(","),n("code",[t._v("path")]),t._v(",指定相应的参数就可以实现跳转了的")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("在模拟器中无法实现跳转,请用真机扫码预览测试")]),t._v(" "),n("p",[t._v("无需声明跳转名单，不限跳转数量（众测中）")]),t._v(" "),n("ul",[n("li",[t._v("从 2020 年 4 月 24 日起，使用跳转其他小程序功能将无需在全局配置中声明跳转名单，调用此接口时将不再校验所跳转的 AppID 是否在 "),n("code",[t._v("navigateToMiniProgramAppIdList")]),t._v(" 中。")]),t._v(" "),n("li",[t._v("从 2020 年 4 月 24 日起，跳转其他小程序将不再受数量限制，使用此功能时请注意遵守运营规范。")])]),t._v(" "),n("p",[t._v("在老版本小程序中,是需要在"),n("code",[t._v("app.json")]),t._v("全局配置中设置白名单,如下所示:")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"navigateToMiniProgramAppIdList"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wx9fbad659d526c9bc"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wx66d9cf3762c49a1a"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])])]),t._v(" "),n("p",[t._v("小程序与小程序之前的跳转没有进行数量限制,无疑是想提高小程序与小程序之间流量互转,增加小程序的活跃度,但还是要注意小程序跳转的运营规范,避免触雷")]),t._v(" "),n("h2",{attrs:{id:"相关文档"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相关文档"}},[t._v("#")]),t._v(" 相关文档")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序 API 方式跳转"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序标签方式跳转"),n("OutboundLink")],1)])]),t._v(" "),n("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}}),t._v(" "),n("div",{attrs:{align:"center"}},[n("footer-ArticleAdvertiSpace",{attrs:{width:"600",height:"140"}})],1),t._v(" "),n("footer-FeedBack")],1)}),[],!1,null,null,null);a.default=e.exports},732:function(t,a,s){t.exports=s.p+"assets/img/min-code.00a3852c.png"}}]);