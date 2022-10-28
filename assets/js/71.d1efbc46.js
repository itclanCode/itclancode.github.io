(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1155:function(s,a,n){s.exports=n.p+"assets/img/01-guide1.7a570a5b.jpg"},1156:function(s,a,n){s.exports=n.p+"assets/img/process-structure.f9d6e6eb.jpg"},1157:function(s,a,n){s.exports=n.p+"assets/img/if.6cfe4344.gif"},1905:function(s,a,n){"use strict";n.r(a);var e=n(12),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"js-之选择控制语句及很重要的表达式真与假"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-之选择控制语句及很重要的表达式真与假"}},[s._v("#")]),s._v(" Js 之选择控制语句及很重要的表达式真与假")]),s._v(" "),e("h2",{attrs:{id:"快速导航"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[s._v("#")]),s._v(" 快速导航")]),s._v(" "),e("TOC"),s._v(" "),e("div",{attrs:{align:"center"}},[e("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:n(1155),alt:"流程控制"}})]),s._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("您将在本文当中学习到")]),s._v(" "),e("ul",[e("li",[s._v("顺序语句")]),s._v(" "),e("li",[s._v("分支语句")]),s._v(" "),e("li",[s._v("If 判断,switch,while 循坏,do..while 循环,for 循环,表达式中的真(true)与假(false)")])]),s._v(" "),e("p",[s._v("在程序代码中,我们经常都会使用流程控制语句,它是用来控制程序中各语句执行顺序的语句,利用语句的组合便能完成一定功能的小逻辑模块")]),s._v(" "),e("p",[s._v("流程控制方式采用结构化程序设计中规定的三种基本流程结构")]),s._v(" "),e("p",[s._v("即："),e("strong",[s._v("顺序结构、分支结构和循环结构")]),s._v("，如下图所示：")]),s._v(" "),e("div",{attrs:{align:"center"}},[e("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:n(1156),alt:"流程控制"}})]),s._v(" "),e("h2",{attrs:{id:"顺序语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#顺序语句"}},[s._v("#")]),s._v(" 顺序语句")]),s._v(" "),e("p",[s._v("按照正常的语句顺序从上往下执行")]),s._v(" "),e("h2",{attrs:{id:"分支语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支语句"}},[s._v("#")]),s._v(" 分支语句")]),s._v(" "),e("p",[s._v("根据某些条件选择执行")]),s._v(" "),e("ul",[e("li",[s._v("if 语句(针对条件单一的情况使用)")]),s._v(" "),e("li",[s._v("if-else 语句（针对两种情况的时候使用）")]),s._v(" "),e("li",[s._v("if-else-if 语句(多重 if 嵌套）")]),s._v(" "),e("li",[s._v("while 语句(往往一进入,就需要判断,需要条件为真时执行一组语句)")]),s._v(" "),e("li",[s._v("switch 语句(多个 case 子句匹配)")])]),s._v(" "),e("h2",{attrs:{id:"if-判断语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#if-判断语句"}},[s._v("#")]),s._v(" If 判断语句")]),s._v(" "),e("p",[s._v("条件语句是一种代码结构,用来测试表达式的真假,并根据布尔表达式的结果执行不同的代码,也就是判断结构让程序可以选择执行哪些程序语句")]),s._v(" "),e("p",[e("strong",[s._v("写法")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("if(条件表达式) {\n   语句体;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("注意要点")]),s._v(" "),e("ul",[e("li",[s._v("条件表达式的结果必须是 boolean 类型")]),s._v(" "),e("li",[s._v("语句体中可以有一条语句,也可以有多条语句,如果语句体中只有一条语句,那么{}可以省略不写")]),s._v(" "),e("li",[s._v("可以使用三目运算符替代")])])]),s._v(" "),e("p",[e("strong",[s._v("应用场景")])]),s._v(" "),e("p",[s._v("针对条件单一的情况使用单 if 语句 建议判断区间或范围的时候用")]),s._v(" "),e("p",[e("strong",[s._v("编程题")])]),s._v(" "),e("p",[s._v("求最大值:编写一个方法，找出两个数字 a 和 b 中最大的那一个")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("方式 1：if...else")]),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("点击即可查看")])])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("示例：\n输入：a = 1, b = 2\n输出：2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var maximum = function(a,b) {\n   if(a -b > 0) {\n     return a;\n   } else {\n     return b;\n   }\n   // 或者如下所示:三目运算符\n   return a-b>0?a:b;\n}\nmaximum(1,2)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v(":::\n"),e("strong",[s._v("方式 2:使用 Math 提供的数据函数 max")])]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("点击即可查看")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var maximum = function(a, b) {\n    return Math.max(a,b)\n}\nmaximum(1,2)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("p",[s._v("在实际的程序代码中:if 的使用可以说无处不在")]),s._v(" "),e("div",{attrs:{align:"center"}},[e("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:n(1157),alt:"流程控制"}})]),s._v(" "),e("p",[s._v("例如:上面例子中的:当表单输入框内不为空时,右侧的按钮激活,否则就禁用")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// reducer代码中的代码\nif(newState.inputVal !="") {\n    newState.btnDisable = false;\n  }\n// UI组件中\n <button onClick =  { hanldeAddContent } disabled = {  btnDisable }>提交</button>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("相比于"),e("code",[s._v("if..else")]),s._v("语句,"),e("code",[s._v("switch")]),s._v("语句可能会没那么熟练,"),e("code",[s._v("switch")]),s._v("语句只支持常量值相等的分支判断，而 "),e("code",[s._v("if")]),s._v("语句支持更为灵活，任意布尔表达式均可 但通常比一系列嵌套 "),e("code",[s._v("if")]),s._v("语句效率更高；逻辑也更加清晰")]),s._v(" "),e("h2",{attrs:{id:"switch-语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#switch-语句"}},[s._v("#")]),s._v(" switch 语句")]),s._v(" "),e("p",[s._v("将表达式的值与 "),e("code",[s._v("case 子句")]),s._v("匹配，并执行与该情况相关联的语句")]),s._v(" "),e("p",[e("strong",[s._v("应用场景:常用于等值判断")])]),s._v(" "),e("p",[e("strong",[s._v("写法")])]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("点击即可查看")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("switch (express表达式) {\n  case value1:\n    // 当 express 的结果与 value1 匹配时，执行此处语句\n   语句体1;\n    break;\n  case value2:\n    // 当 express 的结果与 value2 匹配时，执行此处语句\n    语句体2;\n    break;\n  ...\n  case valueN:\n    // 当 express 的结果与 valueN 匹配时，执行此处语句\n    语句体3;\n   break;\n   default:\n    // 如果 express 与上面的 value 值都不匹配，执行此处语句\n    语句体4;\n    break;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])])]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("注意事项")]),s._v(" "),e("ul",[e("li",[s._v("在 JS 中 switch 语句与其他变成语言的一个主要区别是:switch 语句中的判断表达式可以是任意类型,而其他语言,类如 java 等一些语言就要求该表达式必须为整型")]),s._v(" "),e("li",[s._v("表达式可以是变量也可以是常量，也可以是一个复杂表达式,用全等===符号,express 是一个用来与 case 子语句匹配的表达式")]),s._v(" "),e("li",[s._v("case 子句必须是常量表达式,case 子句可以有多个,但是每一个 case 子句的取值不能够重复")]),s._v(" "),e("li",[s._v("default 子句类似于 if 语句中的 else 语句,可以省略,但是不建议,一般用来处理一种其他的情况,可以出现在 switch 语句中的任意位置，但是一般建议写在最后面")]),s._v(" "),e("li",[s._v("break 子句表示退出 switch 语句体,break 语句也可以省略,一旦省略会出现 break 穿透现象,一般不会省略 break 子句")])])]),s._v(" "),e("p",[e("strong",[s._v("实例")]),s._v("： 打 10086 时,电话呼叫案例，业务查询请按 1，手机充值请按 2，业务办理请按 3，密码服务与停复机请按 4，集团业务请按 8，人工服务请按 0")]),s._v(" "),e("p",[s._v("例如如下所示:"),e("code",[s._v("Redux")]),s._v(" 中 "),e("code",[s._v("Redux")]),s._v(" 中"),e("code",[s._v("if")]),s._v("改写成 "),e("code",[s._v("switch")]),s._v("语句")]),s._v(" "),e("p",[s._v("if 语句是这样的")]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("点击即可查看")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('import * as constants  from "./actionTypes";\nfunction reducer(state = defaultStatus, action) {\n    if(action.type === constants.HANDLE_INPUT_CHANGE) {\n        const newState =  JSON.parse(JSON.stringify(state));\n        if(newState.inputVal !="") {\n            newState.btnDisable = false;\n        }\n        newState.inputVal = action.value;\n        return newState;\n\n    }\n\n    if(action.type === constants.HANDLE_ADD_CONTENT) {\n        const newState =  JSON.parse(JSON.stringify(state));\n        newState.list.push(state.inputVal);\n        newState.inputVal = "";\n        newState.btnDisable = true;\n        return newState;\n\n    }\n\n    if(action.type === constants.HANDLE_DELETE_ITEM) {\n        const newState =  JSON.parse(JSON.stringify(state));\n        newState.list.splice(action.index, 1);\n        return newState;\n\n    }\n    return state;\n\n}\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br")])])]),s._v(" "),e("p",[s._v("经过 "),e("code",[s._v("switch")]),s._v("的改写后,如下所示")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('import * as constants  from "./actionTypes";\n\nfunction reducer(state = defaultStatus, action) {\n    const newState =  JSON.parse(JSON.stringify(state));\n    switch(action.type) {\n        case constants.HANDLE_INPUT_CHANGE:\n                if(newState.inputVal !="") {\n                    newState.btnDisable = false;\n                }\n                newState.inputVal = action.value;\n                return newState;\n        case constants.HANDLE_ADD_CONTENT:\n                newState.list.push(state.inputVal);\n                newState.inputVal = "";\n                newState.btnDisable = true;\n                return newState;\n        case  constants.HANDLE_DELETE_ITEM:\n                newState.list.splice(action.index, 1);\n                return newState;\n        default:\n             return state;\n    }\n\n}\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])]),e("p",[s._v("通过与"),e("code",[s._v("if")]),s._v("语句的比较：可以看的出,"),e("code",[s._v("switch")]),s._v("语句有几下特点")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("switch")]),s._v(" 语句常用于判断固定值的时候用")]),s._v(" "),e("li",[s._v("凡是能用 "),e("code",[s._v("switch")]),s._v(" 能做的,用 "),e("code",[s._v("if")]),s._v("都能做,单反过来则不行")]),s._v(" "),e("li",[s._v("在实际开发中,如果需要进行代码的优化,当遇到多个条件是等值条件的判断选择时,不妨用 "),e("code",[s._v("switch")]),s._v(" 语句替代")])]),s._v(" "),e("p",[e("strong",[s._v("小结")]),s._v("：选择控制语句的使用")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("if")]),s._v(" 语句: 针对一种情况的时候")]),s._v(" "),e("li",[e("code",[s._v("if-else")]),s._v(" 语句: 针对两种情况的时候,非黑即白")]),s._v(" "),e("li",[s._v("多重 if 语句: 针对多种情况的时候,常用于区间判断")]),s._v(" "),e("li",[s._v("嵌套 if 语句: 针对多种条件的时候（若是等值判断可用 switch 替代）")]),s._v(" "),e("li",[e("code",[s._v("swtich")]),s._v(" 语句: 针对条件是等值,某个固定值的情况 上面说完了选择结构,下面来说说循环结构")])]),s._v(" "),e("h2",{attrs:{id:"while-循环"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#while-循环"}},[s._v("#")]),s._v(" while 循环")]),s._v(" "),e("p",[s._v("可以在某个条件表达式为真的前提下，循环执行指定的一段代码，直到表达式不为真时结束循环")]),s._v(" "),e("p",[e("strong",[s._v("应用场景")]),s._v(":如果你希望在一开始条件为真时执行一组语句,当你不知道循环执行的次数，只知道达到某个条件的时候循环继续,那么就选择 while 循环")]),s._v(" "),e("p",[e("strong",[s._v("写法")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("while (条件表达式)\n  statement\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("条件表达式:")])]),s._v(" "),e("p",[s._v("在每次循环前被求值。如果求值为真，"),e("code",[s._v("statement")]),s._v(" 就会被执行。如果求值为假，则跳出 "),e("code",[s._v("while")]),s._v(" 循环执行后面的语句")]),s._v(" "),e("p",[e("strong",[s._v("statement")])]),s._v(" "),e("p",[s._v("只要条件表达式求值为真,该语句就会一直被执行。要在循环中执行多条语句，可以使用块语句（{ ... }）包住多条语句")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),e("p",[s._v("使用 break 语句在条件表达式计算结果为真之前停止循环")])]),s._v(" "),e("p",[s._v("如下代码所示:求 1-100 之和")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var number = 1;      // 循环的初始条件,定义在外面\nvar sum = 0;\nfunction getSum(n){\n    while(number<n) {   // 循环满足什么条件时执行\n          sum += number;\n          ++number;      // 循环变量的更新\n     }\n    return sum;\n}\ngetSum(100);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("使用 while 循环的时候,需要注意以下几点:")]),s._v(" "),e("ul",[e("li",[s._v("循环的初始条件是定义在外面的")]),s._v(" "),e("li",[s._v("只有 "),e("code",[s._v("while")]),s._v(" 中条件表达式为真时,才执行里面的语句体")]),s._v(" "),e("li",[e("code",[s._v("while")]),s._v(" 循环中应该有循环变量的更新,否则它会造成死循环")])]),s._v(" "),e("h2",{attrs:{id:"do-while-循环"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#do-while-循环"}},[s._v("#")]),s._v(" do...while 循环")]),s._v(" "),e("p",[s._v("创建一个执行指定语句的循环，直到条件表达式值为"),e("code",[s._v("false")]),s._v("。在执行 "),e("code",[s._v("statement")]),s._v(" 后检测条件表达式，所以指定的"),e("code",[s._v("statement")]),s._v("至少执行一次")]),s._v(" "),e("p",[e("strong",[s._v("写法")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("do {\n   语句体;\n}while(条件表达式循环条件)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("strong",[s._v("使用场景:")]),s._v(" 往往需要一开始就要执行一次,就像很多游戏一样,一上来,就让你先玩一盘,闯过了多少关,才进行下一环节")]),s._v(" "),e("p",[e("strong",[s._v("与 while 的区别是")])]),s._v(" "),e("ul",[e("li",[s._v("whle 循环是先判断后执行,而 do..while 是先执行,后判断")]),s._v(" "),e("li",[s._v("当第一次条件不成立时，while 不会执行,而 do-while 无论是否成立都至少会执行一次")]),s._v(" "),e("li",[s._v("循环中每次都会计算的表达式。如果条件表达式循环条件值为真， 语句体会再次执行。当条件表达式循环条件值为假，则跳到 do...while 之后的语句")])]),s._v(" "),e("p",[s._v("例如将"),e("code",[s._v("while")]),s._v("语句改成"),e("code",[s._v("do..while")]),s._v("写法")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var number = 1;\nvar sum = 0;\nfunction getSum(n) {\n    do {\n          sum += number;\n          ++number;\n    } while (number < n);\n\n    return sum;\n}\n\nconsole.log(getSum(3));\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h2",{attrs:{id:"for-循环"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-循环"}},[s._v("#")]),s._v(" for 循环")]),s._v(" "),e("p",[s._v("用于创建一个循环，它包含了三个可选的表达式，这三个表达式被包围在圆括号之中，使用分号分隔，后跟一个用于在循环中执行的语句")]),s._v(" "),e("p",[e("strong",[s._v("应用场景")]),s._v(":用于固定循环次数的场景")]),s._v(" "),e("p",[e("strong",[s._v("写法")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("for(初始化变量;循环条件;循环自增变量){\n  循环体;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("注意事项")]),s._v(" "),e("ul",[e("li",[s._v("for 语句头部圆括号中的所有三个表达式都是可选的")]),s._v(" "),e("li",[s._v("初始化值可以定义在圆括号里头,也可以定义在外头,但是个人强烈建议定义在里头,不要写让人猜的代码,更不要写奇奇怪怪的代码,让人看不懂,不是在炫技,而是在挖坑,本质上就是垃圾代码")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var sum = 0;\nfunction getSum(n) {\n    for (var number = 0; number < n; number++) {\n        sum += number;\n     }\n     return sum;\n}\nconsole.log(getSum(100))\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[e("code",[s._v("for")]),s._v("循环往往是在我们已知循环次数的情况下使用它,常用于遍历数组")]),s._v(" "),e("p",[e("strong",[s._v("小结")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("for")]),s._v(" 循环拥有三个表达式的语法结构,得给定初始条件,条件判断、自增变量,它是在已经知道循环次数的情况下使用它")]),s._v(" "),e("li",[e("code",[s._v("while")]),s._v("循环是先判断后执行,表达式中只有一个 "),e("code",[s._v("boolean")]),s._v("类型的值用于作为循环结束的判断,若表达式为真,则执行语句体,若为假,则跳出 "),e("code",[s._v("while")]),s._v("循环,它常用于:不知道循环执行的次数，只知道达到某个条件的时候循环继续时使用")]),s._v(" "),e("li",[e("code",[s._v("do- while")]),s._v("循环是"),e("code",[s._v("while")]),s._v("循环的变形，在语法上与 "),e("code",[s._v("while")]),s._v(" 有相似度，它是先执行后判断,判断循环是否继续执行的"),e("code",[s._v("boolean")]),s._v("表达式放在了循环体的后面，它也是在不知道循环执行的具体次数，只知道达到某个条件时循环继续或结束,但，至少执行一次")])]),s._v(" "),e("p",[s._v("当然针对"),e("code",[s._v("for")]),s._v("循环常常用于遍历,可以用"),e("code",[s._v("forEach")]),s._v(","),e("code",[s._v("map")]),s._v("等一些迭代器方法替代的")]),s._v(" "),e("h2",{attrs:{id:"表达式中的真-true-与-false-假"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表达式中的真-true-与-false-假"}},[s._v("#")]),s._v(" 表达式中的真(true)与(false)假")]),s._v(" "),e("p",[s._v("在上面的"),e("code",[s._v("if")]),s._v(" 语句,"),e("code",[s._v("while")]),s._v("语句,"),e("code",[s._v("do..while")]),s._v(",以及 for 循环,都离不开条件表达式,而条件表达式的结果,毫无疑问,影响着语句体的执行,下面这些实际开发中的技巧有必要提一嘴")]),s._v(" "),e("p",[s._v("下⾯的布尔表达式都返回 "),e("code",[s._v("false:")])]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("点击即可查看")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("null\nundefined\n0 // 数字0\n“” // 空字符串\nNaN 怎么检测:可以利用系统内置对象Boolean()，它会返回一个布尔值,注意这个Boolean的作用是用来初始化 Boolean 对象的值的\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("注意下面的都返回 true")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('"0"; // 字符串0\n[]; // 空数组\n{}; // 空对象\n非0数字\nInfinity\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])]),s._v(" "),e("p",[e("strong",[s._v("注意")]),s._v(":任何不是"),e("code",[s._v("null")]),s._v("和"),e("code",[s._v("undefined")]),s._v("包括值为 "),e("code",[s._v("false")]),s._v(" 的 "),e("code",[s._v("Boolean")]),s._v("对象，直接用于条件语句时都会被当做 "),e("code",[s._v("true")]),s._v("来对待,有"),e("code",[s._v("new")]),s._v("时,会执行语句体的代码,而无 new 则不会执行语句体的代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var x = new Boolean(false);\nif (x) {\n  // 这里的代码会被执行\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("基本类型的布尔值不受此规则影响,如下代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var x = false;\nif (x) {\n  // 这里的代码不会执行\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),e("p",[s._v("不要用创建 Boolean 对象的方式将一个非布尔值转化成布尔值，直接将"),e("code",[s._v("Boolean")]),s._v(" 当做转换函数来使用即可，或者使用双重!!运算符")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var x = Boolean(expression);     // 推荐\nvar x = !!(expression);          // 推荐\nvar x = new Boolean(expression); // 不太好\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("有"),e("code",[s._v("new")]),s._v("与"),e("code",[s._v("无new")]),s._v("的结果是不一样的,前面无 "),e("code",[s._v("new")]),s._v("的 "),e("code",[s._v("Boolean")]),s._v(" 会返回一个 "),e("code",[s._v("boolean")]),s._v("结果 值得注意的是:")]),s._v(" "),e("p",[s._v("对于任何对象，即使是值为 "),e("code",[s._v("false")]),s._v(" 的 "),e("code",[s._v("Boolean")]),s._v("对象，当将其传给 "),e("code",[s._v("Boolean")]),s._v("函数时，生成的 "),e("code",[s._v("Boolean")]),s._v("对象的值都为 "),e("code",[s._v("true")]),s._v(",如下所示")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('var myFalse = new Boolean(false);   // false\nvar g = new Boolean(myFalse);       // true\nvar myString = new String("Hello");\nvar s = new Boolean(myString);      // true\nif (myFalse) {\n    console.log("itclanCoder");    // 这条语句会执行\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("官方的建议是:不要在应该使用基本类型布尔值的地方使用 Boolean 对象,滥用 Boolean 对象,如果需要将其他类型转化为布尔值的时候,可以使用,例如将字符串转为 boolean 类型等")]),s._v(" "),e("p",[s._v("以下是列出的值得注意:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Boolean('0') == true;  // true\n'0' != true                  // true\n 0 != null ;                // true\n 0 == [] ;                 // true,比较的是值,如果是全等===,那么将是false\n 0 == false              // true\n Boolean(null) == false;   // true\n null != true;    // true\n null != false   // true\n Boolean(undefined) == false;   // true\n undefined != true;         // true\n undefined != false;       // true\n Boolean([]) == true     // true\n Boolean({}) == true  // true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("有时候,当你需要排除不是 0 和空字符和 false,或许你会写这样的代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('if (x != "" && x != null) {\n   // 语句体\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("上面的代码不是不可以,但很冗余,可以优化为如下所示")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("if (x) {\n  // 语句体\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("当你使用 while 循环时,当你希望 变量 x 不是 0 和空字符串, 和 false,你或许看到这样的代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("while(x != null){\n  // 语句体\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("同样,可以优化为如下所示")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("while(x) {\n  // 语句体\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("上面的代码优化同时考虑到了 null,空字符,或者 false 的情况,如果说要非真的话,那么就取反嘛")]),s._v(" "),e("h2",{attrs:{id:"结语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[s._v("#")]),s._v(" 结语")]),s._v(" "),e("p",[s._v("小节主要学习到 js 中的选择控制语句,if 语句,switch 语句,while 语句以及 do..while 语句,for 循环的对比,每个语句都有与之对应的应用场景以及解决的问题")]),s._v(" "),e("p",[s._v("当然最后学习到了表达式中的真(true)与假(false),在我们平时做一些逻辑判断的时候,对于一些边界值的判断往往是非常重要的")]),s._v(" "),e("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}})],1)}),[],!1,null,null,null);a.default=t.exports}}]);