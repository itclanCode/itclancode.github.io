(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{2038:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"移动端web如何禁止长按选择文字以及弹出菜单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端web如何禁止长按选择文字以及弹出菜单"}},[s._v("#")]),s._v(" 移动端web如何禁止长按选择文字以及弹出菜单")]),s._v(" "),a("p",[s._v("在做移动端页面时,当用户用手机打开网站,当在上面用手指进行一些用户操作时")]),s._v(" "),a("p",[s._v("如果没有做任何处理,当用户点击屏幕,且有长按的动作时,屏幕会弹出一菜单,以及选中的效果,这个是非常不好的体验,那怎么禁用呢，用css几行代码就可以解决")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*如果是禁用长按选择文字功能，用css*/")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("webkit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("touch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("callout"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("webkit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("select"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("khtml"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("select"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("moz"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("select"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ms"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("select"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n        user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("select"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这是input")]),s._v("\n   input "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("      \n             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("webkit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("select"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*webkit浏览器*/")]),s._v("     \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果是想禁用长按弹出菜单, 用js的话,阻止默认事件  ")]),s._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'contextmenu'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n        e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("preventDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}}),s._v(" "),a("footer-FeedBack")],1)}),[],!1,null,null,null);t.default=e.exports}}]);