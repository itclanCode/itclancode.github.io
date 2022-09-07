(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{1768:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"移动端页面滑动事件穿透问题-父子窗体滑动相互影响-及解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端页面滑动事件穿透问题-父子窗体滑动相互影响-及解决方案"}},[t._v("#")]),t._v(" 移动端页面滑动事件穿透问题(父子窗体滑动相互影响)及解决方案")]),t._v(" "),a("h2",{attrs:{id:"快速导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[t._v("#")]),t._v(" 快速导航")]),t._v(" "),a("TOC"),t._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")])])]),t._v(" "),a("p",[t._v("在做 h5 移动端页面时,在一个可滚动的列表页面中打开弹窗,底部的页面理论上是不可滚动的,但是当滑动弹窗时,底部页面会跟随滚动,这就是所谓的页面滚动穿透问题")]),t._v(" "),a("p",[t._v("或者说,在移动端页面,写了一个弹框,当弹框内容比较长,弹框内有滑动效果,在滑动的时候,当你想滑动的是弹框内的窗体内容,但是偶尔外层窗体也会跟着滑动,两个窗体之间会相互影响")]),t._v(" "),a("p",[t._v("这样用户体验非常不好")]),t._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"产生的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#产生的原因"}},[t._v("#")]),t._v(" 产生的原因")])])]),t._v(" "),a("p",[t._v("弹框的窗体内滑动与外层父级窗体的滑动会有一个先后顺序,一般是弹框窗体滑动,滑动完之后,在滑动页面的时候,就会变成了父窗体滑动(这是浏览器的默认行为),但是这个时候,我不想父窗体滑动,希望用户操作的滑动跟父窗体没有关系,永远停留在自己写的弹框滑动操作中")]),t._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"具体解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体解决"}},[t._v("#")]),t._v(" 具体解决")])])]),t._v(" "),a("p",[t._v("阻止浏览器的默认行为,当然网上也介绍了很多种解决办法,并非千篇一律")]),t._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"具体步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体步骤"}},[t._v("#")]),t._v(" 具体步骤")])])]),t._v(" "),a("p",[t._v("主要是通过监控弹框的触摸事件和滑动事件")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("手指触摸开始时,"),a("code",[t._v("ontouchstart")]),t._v("记录一个数值("),a("code",[t._v("data.start")]),t._v("),手指触摸移动中"),a("code",[t._v("ontouchmove")]),t._v("也记录一个数值("),a("code",[t._v("data.move")]),t._v("),开始时的数值减去触摸中的数值,即"),a("code",[t._v("distanceY(data.start-data.move)")]),t._v(",与 0 做比较,用来判断是上拉还是下滑")])]),t._v(" "),a("li",[a("p",[t._v("若"),a("code",[t._v("distanceY>0")]),t._v("则为上拉,反之"),a("code",[t._v("distanceY<0")]),t._v("则为下拉")])]),t._v(" "),a("li",[a("p",[t._v("监控滑动事件("),a("code",[t._v("onscroll")]),t._v(")是为了获取整个弹窗窗体的长度("),a("code",[t._v("maxDistanceY")]),t._v(")以及当前滑动距离("),a("code",[t._v("scrollTop")]),t._v(")")])]),t._v(" "),a("li",[a("p",[t._v("滑动距离("),a("code",[t._v("scrollTop<=0")]),t._v("),则表示已经下滑到底了,这时可以阻止浏览器默认行为,也就是继续滑动的时候,不让父窗体滑动,反之"),a("code",[t._v("scrollTop>0")]),t._v("的时候,也就是下滑的时候开启浏览器默认行为(如果不开启的话,弹框就会划不动了)")])]),t._v(" "),a("li",[a("p",[t._v("用"),a("code",[t._v("maxDistanceY(e.target.scrollHeight-e.target.offsetHeight)")]),t._v("表示整个滑动的距离(也可以理解为弹框滑动窗体的长度),当"),a("code",[t._v("scrollTop>=maxDistanceY")]),t._v("时则表示已经下滑到底了,这时候又要阻止浏览器默认行为了")])])]),t._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"归纳一下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#归纳一下"}},[t._v("#")]),t._v(" 归纳一下")])])]),t._v(" "),a("ol",[a("li",[t._v("上拉到底,阻止浏览器默认行为")]),t._v(" "),a("li",[t._v("下滑到底,阻止浏览器默认行为")]),t._v(" "),a("li",[t._v("只有阻止了浏览器默认行为,在弹框内滑动第二屏的时候,才不会跟父窗体相互影响")])]),t._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"实现代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现代码"}},[t._v("#")]),t._v(" 实现代码")]),t._v("\n::: detail 点击即可查看代码")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopPration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scrollTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" distanceY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" maxDistanceY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("move")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" touchMoveDiv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scrollPop'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  touchMoveDiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onscroll")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ev")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 滚动时")]),t._v("\n    scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    maxDistanceY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 手指触摸点击时")]),t._v("\n  touchMoveDiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ontouchstart")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ev")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 手指触摸滑动时")]),t._v("\n  touchMoveDiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ontouchmove")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ev")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("move "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    distanceY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("move"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("distanceY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" maxDistanceY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("distanceY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("scrollTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br")])]),a("p",[t._v(":::")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("解决这个问题,也可以用一些成熟现成的方案,比如:"),a("code",[t._v("[iscroll](https://iiunknown.gitbooks.io/iscroll-5-api-cn/)")]),t._v(","),a("code",[t._v("[batter-scroll滚动](https://better-scroll.github.io/docs/zh-CN/)")]),t._v(","),a("code",[t._v("alloytouch")])]),t._v(" "),a("h2",{attrs:{id:"其他参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他参考文档"}},[t._v("#")]),t._v(" 其他参考文档")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/zuopf769/notebook/blob/master/fe/%E7%A7%BB%E5%8A%A8%E7%AB%AFtochscroll%E6%BB%9A%E5%8A%A8/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("弹层滚动导致底部页面整体滚动 bug 的解决思路"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);