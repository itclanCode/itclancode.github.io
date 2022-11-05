(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{2058:function(e,v,_){"use strict";_.r(v);var t=_(12),s=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h2",{attrs:{id:"快速导航"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[e._v("#")]),e._v(" 快速导航")]),e._v(" "),_("TOC"),e._v(" "),_("h2",{attrs:{id:"第1题-说一说js数据类型有哪些-他们之间的区别是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第1题-说一说js数据类型有哪些-他们之间的区别是什么"}},[e._v("#")]),e._v(" 第1题-说一说JS数据类型有哪些,他们之间的区别是什么")]),e._v(" "),_("p",[e._v("数字("),_("code",[e._v("number")]),e._v("),布尔("),_("code",[e._v("boolean")]),e._v("),字符串"),_("code",[e._v("string")]),e._v(","),_("code",[e._v("null")]),e._v(","),_("code",[e._v("undefined")]),e._v(","),_("code",[e._v("Symbol")]),e._v(","),_("code",[e._v("Object")]),e._v(","),_("code",[e._v("function")])]),e._v(" "),_("p",[_("code",[e._v("JS")]),e._v("数据类型分为两种:")]),e._v(" "),_("h3",{attrs:{id:"类型不同"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#类型不同"}},[e._v("#")]),e._v(" 类型不同")]),e._v(" "),_("ul",[_("li",[e._v("基本(简单)数据类型(7种):"),_("code",[e._v("Number")]),e._v(","),_("code",[e._v("String")]),e._v(","),_("code",[e._v("Boolean")]),e._v(","),_("code",[e._v("Null")]),e._v(","),_("code",[e._v("undefined")]),e._v(","),_("code",[e._v("Symbol")]),e._v(","),_("code",[e._v("BigInt")])]),e._v(" "),_("li",[e._v("引用(复杂/非)数据类型: "),_("code",[e._v("Object")]),e._v("，对象,数组,正则,日期,Math都属于"),_("code",[e._v("Object")])])]),e._v(" "),_("h3",{attrs:{id:"本质区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#本质区别"}},[e._v("#")]),e._v(" 本质区别")]),e._v(" "),_("p",[_("strong",[e._v("存储方式")]),e._v(": 基本数据类型存储在栈中,而非基本数据类型存储在堆中\n"),_("strong",[e._v("存储大小")]),e._v(": 基本数据类型存储在栈中,占据的空间小,属于被频繁使用的数据,而引用数据类型是存储在堆内存中,占据空间大,引用数据类型在栈中存储了指针，该指正指向的实体的起始地止,当解释器寻找引用值时,会检索在栈中的地止,取得地止后从堆中获得实体")]),e._v(" "),_("p",[_("code",[e._v("Symbol")]),e._v("是"),_("code",[e._v("Es6")]),e._v("新出的一种数据类型,这种数据类型的特点就是没有重复的数据,可以作为"),_("code",[e._v("object")]),e._v("的"),_("code",[e._v("key")])]),e._v(" "),_("p",[e._v("数据的创建方法"),_("code",[e._v("Symbol()")]),e._v(",因为它的构造函数不够完整,所以不能使用"),_("code",[e._v("new Symbol()")]),e._v("创建数据,由于"),_("code",[e._v("Symbol()")]),e._v("创建数据具有唯一性,所以"),_("code",[e._v("Symbol()!==Symbol()")]),e._v(",同时使用"),_("code",[e._v("Symbol")]),e._v("数据作为"),_("code",[e._v("key")]),e._v("不能使用"),_("code",[e._v("for")]),e._v("获取到这个"),_("code",[e._v("key")])]),e._v(" "),_("p",[e._v("需要使用"),_("code",[e._v("Object.getOwnPropertySymbols(obj)")]),e._v("获得这个"),_("code",[e._v("obj")]),e._v("对象中"),_("code",[e._v("key")]),e._v("类型是"),_("code",[e._v("Symbol")]),e._v("的"),_("code",[e._v("key")]),e._v("值")]),e._v(" "),_("div",{staticClass:"language-js line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" key "),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("Symbol")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[e._v("'key'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" obj "),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("key"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),_("span",{pre:!0,attrs:{class:"token string"}},[e._v("'symbol'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" keyArray "),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Object"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("getOwnPropertySymbols")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("obk"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("  "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 返回一个数组[Symbol['key']]")]),e._v("\nobj"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("keyArray"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("  "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 'symbol'")]),e._v("\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br"),_("span",{staticClass:"line-number"},[e._v("2")]),_("br"),_("span",{staticClass:"line-number"},[e._v("3")]),_("br"),_("span",{staticClass:"line-number"},[e._v("4")]),_("br")])]),_("p",[_("code",[e._v("BigInt")]),e._v("也是"),_("code",[e._v("Es6")]),e._v("新出的一种数据类型,这种数据类型的特点就是数据涵盖的范围大,能够解决超出普通数据类型范围报错的问题")]),e._v(" "),_("h3",{attrs:{id:"使用方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[e._v("#")]),e._v(" 使用方法")]),e._v(" "),_("ul",[_("li",[e._v("整数末尾直接+n: 4352342643634324n")]),e._v(" "),_("li",[e._v("调用"),_("code",[e._v("BigInt()")]),e._v('构造函数: BigInt("43342634634646434")')])]),e._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[e._v("注意事项")]),e._v(" "),_("p",[_("code",[e._v("BigInt")]),e._v("和"),_("code",[e._v("Number")]),e._v("之间不能进行混合操作")])]),e._v(" "),_("p",[e._v("更多相关: "),_("RouterLink",{attrs:{to:"/fontend/js/understand-symbol/"}},[e._v("理解Es6中的Symbol类型")])],1),e._v(" "),_("h2",{attrs:{id:"第2题-说一下promise是什么以及它是怎么使用的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第2题-说一下promise是什么以及它是怎么使用的"}},[e._v("#")]),e._v(" 第2题-说一下promise是什么以及它是怎么使用的")]),e._v(" "),_("p",[_("code",[e._v("Promise")]),e._v("是异步微任务,解决了异步多层嵌套的问题,也就是解决回调地域的问题,让代码可读性更高,更容易维护")]),e._v(" "),_("p",[e._v("具体使用: "),_("code",[e._v("Promise")]),e._v("是"),_("code",[e._v("Es6")]),e._v("提供的一个构造函数，可以使用"),_("code",[e._v("Promise")]),e._v("构造函数"),_("code",[e._v("new")]),e._v("一个实例,"),_("code",[e._v("Promise")]),e._v("构造函数接收一个函数作为参数")]),e._v(" "),_("p",[e._v("这个函数有两个参数,分别是"),_("code",[e._v("resolve")]),e._v("和"),_("code",[e._v("reject")]),e._v(","),_("code",[e._v("resolve")]),e._v("将"),_("code",[e._v("Promise")]),e._v("的状态等待变为成功,将异步操作的结果作为参数传递过去,"),_("code",[e._v("reject")]),e._v("则将")]),e._v(" "),_("p",[e._v("状态由等待转变为失败,在异步操作失败时调用,将异步操作报出的报出的错误作为参数传递过去")]),e._v(" "),_("p",[e._v("实例创建完成后,可以使用"),_("code",[e._v("then")]),e._v("方法分别指定成功或失败的回调函数,也可以使用"),_("code",[e._v("catch")]),e._v("捕获失败,"),_("code",[e._v("then")]),e._v("和"),_("code",[e._v("catch")]),e._v("最终返回的也是一个"),_("code",[e._v("Promise")]),e._v(",所以可以链式调用")]),e._v(" "),_("p",[_("strong",[e._v("特点")]),e._v(":")]),e._v(" "),_("ol",[_("li",[e._v("对象的状态不受外界影响("),_("code",[e._v("Promise")]),e._v("对象代表一个异步操作,有三种状态)")])]),e._v(" "),_("p",[_("code",[e._v("pending")]),e._v(":执行中,"),_("code",[e._v("Resolved")]),e._v("(成功,又称"),_("code",[e._v("Fullfilled")]),e._v("),"),_("code",[e._v("rejected")]),e._v("(拒绝),其中"),_("code",[e._v("pending")]),e._v("为初始状态,"),_("code",[e._v("fulfilled")]),e._v("和"),_("code",[e._v("rejected")]),e._v("为结束状态,结束状态表示"),_("code",[e._v("Promise")]),e._v("的生命周期已经结束")]),e._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[e._v("一旦状态改变,就会在变,"),_("code",[e._v("Promise")]),e._v("对象的状态改变,只有两种可能(状态凝固了,就不会在变了,会一直保持这个结果)")])]),e._v(" "),_("p",[e._v("从"),_("code",[e._v("Pending")]),e._v("变为"),_("code",[e._v("Resolved")]),e._v(",从"),_("code",[e._v("Pending")]),e._v("变为"),_("code",[e._v("Rejected")])]),e._v(" "),_("p",[_("code",[e._v("resolve")]),e._v("方法的参数是"),_("code",[e._v("then")]),e._v("中回调函数的参数,"),_("code",[e._v("reject")]),e._v("方法中的参数"),_("code",[e._v("catch")]),e._v("中的参数,"),_("code",[e._v("then")]),e._v("方法和"),_("code",[e._v("catch")]),e._v("方法只要不报错,返回的都是一个"),_("code",[e._v("fulllfilled")]),e._v("状态的"),_("code",[e._v("promise")])]),e._v(" "),_("p",[_("strong",[e._v("Promise.resolve()")]),e._v(": 返回的"),_("code",[e._v("Promise")]),e._v("对象状态为"),_("code",[e._v("fulfilled")]),e._v(",并且将该"),_("code",[e._v("value")]),e._v("传递给对应的"),_("code",[e._v("then")]),e._v("方法")]),e._v(" "),_("p",[_("strong",[e._v("Promise.reject()")]),e._v(": 返回一个状态为失败的"),_("code",[e._v("Promise对象")]),e._v(",并将给定的失败信息传递给对应的处理方法")]),e._v(" "),_("p",[_("strong",[e._v("Promise.all()")]),e._v(":返回一个新的"),_("code",[e._v("promise")]),e._v("对象,该"),_("code",[e._v("promise")]),e._v("对象在参数对象里所有的"),_("code",[e._v("promise")]),e._v("对象都成功的时候,才会触发成功,一旦有一个失败，则整个都会失败")]),e._v(" "),_("p",[_("strong",[e._v("Promise.any()")]),e._v(": 接收一个"),_("code",[e._v("Promise")]),e._v("对象的集合,当其中的一个"),_("code",[e._v("Promise")]),e._v("成功,就返回那个成功的"),_("code",[e._v("promise")]),e._v("的值")]),e._v(" "),_("p",[_("strong",[e._v("Promise.race()")]),e._v(": 当参数里的任意一个子"),_("code",[e._v("promise")]),e._v("被成功或失败后,父"),_("code",[e._v("promise")]),e._v("马上也会用子"),_("code",[e._v("promise")]),e._v("的成功返回值或失败详情作为参数调用调用父"),_("code",[e._v("promise")]),e._v("绑定的对象,并返回该"),_("code",[e._v("promise")]),e._v("对象")])],1)}),[],!1,null,null,null);v.default=s.exports}}]);