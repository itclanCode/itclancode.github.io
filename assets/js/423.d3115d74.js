(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{2103:function(v,_,e){"use strict";e.r(_);var o=e(12),t=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"快速导航"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[v._v("#")]),v._v(" 快速导航")]),v._v(" "),e("TOC"),v._v(" "),e("h2",{attrs:{id:"第1题-说一说js数据类型有哪些-他们之间的区别是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第1题-说一说js数据类型有哪些-他们之间的区别是什么"}},[v._v("#")]),v._v(" 第1题-说一说JS数据类型有哪些,他们之间的区别是什么")]),v._v(" "),e("p",[v._v("数字("),e("code",[v._v("number")]),v._v("),布尔("),e("code",[v._v("boolean")]),v._v("),字符串"),e("code",[v._v("string")]),v._v(","),e("code",[v._v("null")]),v._v(","),e("code",[v._v("undefined")]),v._v(","),e("code",[v._v("Symbol")]),v._v(","),e("code",[v._v("Object")]),v._v(","),e("code",[v._v("function")])]),v._v(" "),e("p",[e("code",[v._v("JS")]),v._v("数据类型分为两种:")]),v._v(" "),e("h3",{attrs:{id:"类型不同"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类型不同"}},[v._v("#")]),v._v(" 类型不同")]),v._v(" "),e("ul",[e("li",[v._v("基本(简单)数据类型(7种):"),e("code",[v._v("Number")]),v._v(","),e("code",[v._v("String")]),v._v(","),e("code",[v._v("Boolean")]),v._v(","),e("code",[v._v("Null")]),v._v(","),e("code",[v._v("undefined")]),v._v(","),e("code",[v._v("Symbol")]),v._v(","),e("code",[v._v("BigInt")])]),v._v(" "),e("li",[v._v("引用(复杂/非)数据类型: "),e("code",[v._v("Object")]),v._v("，对象,数组,正则,日期,Math都属于"),e("code",[v._v("Object")])])]),v._v(" "),e("h3",{attrs:{id:"本质区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本质区别"}},[v._v("#")]),v._v(" 本质区别")]),v._v(" "),e("p",[e("strong",[v._v("存储方式")]),v._v(": 基本数据类型存储在栈中,而非基本数据类型存储在堆中\n"),e("strong",[v._v("存储大小")]),v._v(": 基本数据类型存储在栈中,占据的空间小,属于被频繁使用的数据,而引用数据类型是存储在堆内存中,占据空间大,引用数据类型在栈中存储了指针，该指正指向的实体的起始地止,当解释器寻找引用值时,会检索在栈中的地止,取得地止后从堆中获得实体")]),v._v(" "),e("p",[e("code",[v._v("Symbol")]),v._v("是"),e("code",[v._v("Es6")]),v._v("新出的一种数据类型,这种数据类型的特点就是没有重复的数据,可以作为"),e("code",[v._v("object")]),v._v("的"),e("code",[v._v("key")])]),v._v(" "),e("p",[v._v("数据的创建方法"),e("code",[v._v("Symbol()")]),v._v(",因为它的构造函数不够完整,所以不能使用"),e("code",[v._v("new Symbol()")]),v._v("创建数据,由于"),e("code",[v._v("Symbol()")]),v._v("创建数据具有唯一性,所以"),e("code",[v._v("Symbol()!==Symbol()")]),v._v(",同时使用"),e("code",[v._v("Symbol")]),v._v("数据作为"),e("code",[v._v("key")]),v._v("不能使用"),e("code",[v._v("for")]),v._v("获取到这个"),e("code",[v._v("key")])]),v._v(" "),e("p",[v._v("需要使用"),e("code",[v._v("Object.getOwnPropertySymbols(obj)")]),v._v("获得这个"),e("code",[v._v("obj")]),v._v("对象中"),e("code",[v._v("key")]),v._v("类型是"),e("code",[v._v("Symbol")]),v._v("的"),e("code",[v._v("key")]),v._v("值")]),v._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("let")]),v._v(" key "),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[v._v("Symbol")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[v._v("'key'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("let")]),v._v(" obj "),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[v._v("'symbol'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("let")]),v._v(" keyArray "),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" Object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[v._v("getOwnPropertySymbols")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("obk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 返回一个数组[Symbol['key']]")]),v._v("\nobj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("keyArray"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[v._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 'symbol'")]),v._v("\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br"),e("span",{staticClass:"line-number"},[v._v("4")]),e("br")])]),e("p",[e("code",[v._v("BigInt")]),v._v("也是"),e("code",[v._v("Es6")]),v._v("新出的一种数据类型,这种数据类型的特点就是数据涵盖的范围大,能够解决超出普通数据类型范围报错的问题")]),v._v(" "),e("h3",{attrs:{id:"使用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[v._v("#")]),v._v(" 使用方法")]),v._v(" "),e("ul",[e("li",[v._v("整数末尾直接+n: 4352342643634324n")]),v._v(" "),e("li",[v._v("调用"),e("code",[v._v("BigInt()")]),v._v('构造函数: BigInt("43342634634646434")')])]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("注意事项")]),v._v(" "),e("p",[e("code",[v._v("BigInt")]),v._v("和"),e("code",[v._v("Number")]),v._v("之间不能进行混合操作")])]),v._v(" "),e("p",[v._v("更多相关: "),e("RouterLink",{attrs:{to:"/fontend/js/understand-symbol/"}},[v._v("理解Es6中的Symbol类型")])],1),v._v(" "),e("h2",{attrs:{id:"第2题-说一下promise是什么以及它是怎么使用的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第2题-说一下promise是什么以及它是怎么使用的"}},[v._v("#")]),v._v(" 第2题-说一下promise是什么以及它是怎么使用的")]),v._v(" "),e("p",[e("code",[v._v("Promise")]),v._v("是异步微任务,解决了异步多层嵌套的问题,也就是解决回调地域的问题,让代码可读性更高,更容易维护")]),v._v(" "),e("p",[v._v("具体使用: "),e("code",[v._v("Promise")]),v._v("是"),e("code",[v._v("Es6")]),v._v("提供的一个构造函数，可以使用"),e("code",[v._v("Promise")]),v._v("构造函数"),e("code",[v._v("new")]),v._v("一个实例,"),e("code",[v._v("Promise")]),v._v("构造函数接收一个函数作为参数")]),v._v(" "),e("p",[v._v("这个函数有两个参数,分别是"),e("code",[v._v("resolve")]),v._v("和"),e("code",[v._v("reject")]),v._v(","),e("code",[v._v("resolve")]),v._v("将"),e("code",[v._v("Promise")]),v._v("的状态等待变为成功,将异步操作的结果作为参数传递过去,"),e("code",[v._v("reject")]),v._v("则将")]),v._v(" "),e("p",[v._v("状态由等待转变为失败,在异步操作失败时调用,将异步操作报出的报出的错误作为参数传递过去")]),v._v(" "),e("p",[v._v("实例创建完成后,可以使用"),e("code",[v._v("then")]),v._v("方法分别指定成功或失败的回调函数,也可以使用"),e("code",[v._v("catch")]),v._v("捕获失败,"),e("code",[v._v("then")]),v._v("和"),e("code",[v._v("catch")]),v._v("最终返回的也是一个"),e("code",[v._v("Promise")]),v._v(",所以可以链式调用")]),v._v(" "),e("p",[e("strong",[v._v("特点")]),v._v(":")]),v._v(" "),e("ol",[e("li",[v._v("对象的状态不受外界影响("),e("code",[v._v("Promise")]),v._v("对象代表一个异步操作,有三种状态)")])]),v._v(" "),e("p",[e("code",[v._v("pending")]),v._v(":执行中,"),e("code",[v._v("Resolved")]),v._v("(成功,又称"),e("code",[v._v("Fullfilled")]),v._v("),"),e("code",[v._v("rejected")]),v._v("(拒绝),其中"),e("code",[v._v("pending")]),v._v("为初始状态,"),e("code",[v._v("fulfilled")]),v._v("和"),e("code",[v._v("rejected")]),v._v("为结束状态,结束状态表示"),e("code",[v._v("Promise")]),v._v("的生命周期已经结束")]),v._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[v._v("一旦状态改变,就会在变,"),e("code",[v._v("Promise")]),v._v("对象的状态改变,只有两种可能(状态凝固了,就不会在变了,会一直保持这个结果)")])]),v._v(" "),e("p",[v._v("从"),e("code",[v._v("Pending")]),v._v("变为"),e("code",[v._v("Resolved")]),v._v(",从"),e("code",[v._v("Pending")]),v._v("变为"),e("code",[v._v("Rejected")])]),v._v(" "),e("p",[e("code",[v._v("resolve")]),v._v("方法的参数是"),e("code",[v._v("then")]),v._v("中回调函数的参数,"),e("code",[v._v("reject")]),v._v("方法中的参数"),e("code",[v._v("catch")]),v._v("中的参数,"),e("code",[v._v("then")]),v._v("方法和"),e("code",[v._v("catch")]),v._v("方法只要不报错,返回的都是一个"),e("code",[v._v("fulllfilled")]),v._v("状态的"),e("code",[v._v("promise")])]),v._v(" "),e("p",[e("strong",[v._v("Promise.resolve()")]),v._v(": 返回的"),e("code",[v._v("Promise")]),v._v("对象状态为"),e("code",[v._v("fulfilled")]),v._v(",并且将该"),e("code",[v._v("value")]),v._v("传递给对应的"),e("code",[v._v("then")]),v._v("方法")]),v._v(" "),e("p",[e("strong",[v._v("Promise.reject()")]),v._v(": 返回一个状态为失败的"),e("code",[v._v("Promise对象")]),v._v(",并将给定的失败信息传递给对应的处理方法")]),v._v(" "),e("p",[e("strong",[v._v("Promise.all()")]),v._v(":返回一个新的"),e("code",[v._v("promise")]),v._v("对象,该"),e("code",[v._v("promise")]),v._v("对象在参数对象里所有的"),e("code",[v._v("promise")]),v._v("对象都成功的时候,才会触发成功,一旦有一个失败，则整个都会失败")]),v._v(" "),e("p",[e("strong",[v._v("Promise.any()")]),v._v(": 接收一个"),e("code",[v._v("Promise")]),v._v("对象的集合,当其中的一个"),e("code",[v._v("Promise")]),v._v("成功,就返回那个成功的"),e("code",[v._v("promise")]),v._v("的值")]),v._v(" "),e("p",[e("strong",[v._v("Promise.race()")]),v._v(": 当参数里的任意一个子"),e("code",[v._v("promise")]),v._v("被成功或失败后,父"),e("code",[v._v("promise")]),v._v("马上也会用子"),e("code",[v._v("promise")]),v._v("的成功返回值或失败详情作为参数调用调用父"),e("code",[v._v("promise")]),v._v("绑定的对象,并返回该"),e("code",[v._v("promise")]),v._v("对象")]),v._v(" "),e("h2",{attrs:{id:"第3题-说一下bfc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第3题-说一下bfc"}},[v._v("#")]),v._v(" 第3题-说一下BFC")]),v._v(" "),e("p",[v._v("块级格式化上下文,独立的渲染区域,不会影响边界以外的元素")]),v._v(" "),e("p",[v._v("产生BFC的条件: "),e("code",[v._v("float")]),v._v(","),e("code",[v._v("position")]),v._v(","),e("code",[v._v("overflow")]),v._v(","),e("code",[v._v("display")])]),v._v(" "),e("p",[v._v("块级格式化上下文,是"),e("code",[v._v("web")]),v._v("页面一块独立的渲染区域,内部元素的渲染不会影响边界以外的元素")]),v._v(" "),e("p",[e("code",[v._v("BFC")]),v._v("布局规则,内部盒子会在垂直方向,一个接一个的放置,"),e("code",[v._v("box")]),v._v("垂直方向的距离由"),e("code",[v._v("margin")]),v._v("决定,属于同一个"),e("code",[v._v("BFC")]),v._v("的两个相邻的"),e("code",[v._v("BOX")]),v._v("的"),e("code",[v._v("margin")]),v._v("会发生重叠")]),v._v(" "),e("p",[e("code",[v._v("BFC")]),v._v("的区域不会与"),e("code",[v._v("float")]),v._v("的"),e("code",[v._v("box")]),v._v("重叠")]),v._v(" "),e("p",[v._v("清除浮动:"),e("code",[v._v("overflow:hiiden")]),v._v(",解决外边距的合并问题")]),v._v(" "),e("h2",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[v._v("#")])])],1)}),[],!1,null,null,null);_.default=t.exports}}]);