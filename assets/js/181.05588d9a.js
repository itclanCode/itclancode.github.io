(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{1133:function(n,s,a){n.exports=a.p+"assets/img/scode-chain.392282fa.png"},1815:function(n,s,a){"use strict";a.r(s);var e=a(12),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"理解-js-中的作用域-作用域链以及闭包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#理解-js-中的作用域-作用域链以及闭包"}},[n._v("#")]),n._v(" 理解-JS-中的作用域-作用域链以及闭包")]),n._v(" "),e("h2",{attrs:{id:"快速导航"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[n._v("#")]),n._v(" 快速导航")]),n._v(" "),e("TOC"),n._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[n._v("#")]),n._v(" 前言")]),n._v(" "),e("p",[n._v("您将本篇中读完后学习到")]),n._v(" "),e("ul",[e("li",[n._v("理解上下文和作用域,作用域是基于函数的,而上下文是基于对象的,虽然说函数也是对象,但是这里更多的是指对象直接量的表示法,上下文始终围绕着 this 所代表的值,它是拥有控制当前执行代码对象的引用")]),n._v(" "),e("li",[n._v("变量的作用域,在 Es6 之前没有块级作用域,而 Es6 有了块级作用域,也就是"),e("code",[n._v("if")]),n._v(","),e("code",[n._v("while")]),n._v(","),e("code",[n._v("switch")]),n._v(","),e("code",[n._v("for")]),n._v(",若使用 let 关键字,则具备块级作用域,也就是说定义在双大括号内的变量,在双大括号内的才起作用，一旦离开该范围，就不起作用了")]),n._v(" "),e("li",[n._v("什么是执行坏境,定义了变量或函数有访问的其他数据的能力,它决定了各自的行为,它的侧重点在于函数的作用域,而并不是所要纠结的上下文,分为创建坏境和执行坏境")]),n._v(" "),e("li",[n._v("作用域链(词法作用域),当查找与变量相关联的值时,会遵循一定的规则,也就是沿着作用域链从当前函数作用域内逐级的向上查找,直到顶层全局作用域结束,若找到则返回该值,若无则返回"),e("code",[n._v("undefined")])]),n._v(" "),e("li",[e("code",[n._v("javascript")]),n._v("没有块级作用域,往往很多时候使用匿名函数自执行来模拟块级作用域")]),n._v(" "),e("li",[n._v("作用域是在函数定义时就确定的,而非调用时确定,作用域就是根据函数定义时的位置确定的,而与该函数在哪里被调用无关,其实就是词法作用域")]),n._v(" "),e("li",[n._v("产生闭包的根本原因是作用域链")])]),n._v(" "),e("h2",{attrs:{id:"理解上下文和作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#理解上下文和作用域"}},[n._v("#")]),n._v(" 理解上下文和作用域")]),n._v(" "),e("p",[n._v("其实上下文与作用域是两个不同的概念,有时我自己也经常混淆,把它们视为是同一个东西,我们知道函数的每次调用都会有与之紧密相连的作用域和上下文")]),n._v(" "),e("p",[e("strong",[n._v("本质上")]),n._v(":作用域其实是基于函数的,而上下文是基于对象的,也就是说作用域是涉及到它所被调用函数中的变量访问,而调用方法和访问属性又存在着不同的调用场景,如下四种场景")]),n._v(" "),e("ul",[e("li",[n._v("函数调用")]),n._v(" "),e("li",[n._v("方法调用")]),n._v(" "),e("li",[n._v("构造器函数调用")]),n._v(" "),e("li",[n._v("call(),apply()间接调用")])]),n._v(" "),e("p",[n._v("而上下文始终是"),e("code",[n._v("this")]),n._v("所代表的值,它是拥有控制当前执行代码的对象的引用")]),n._v(" "),e("h2",{attrs:{id:"变量作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量作用域"}},[n._v("#")]),n._v(" 变量作用域")]),n._v(" "),e("p",[n._v("在 JS 中,作用域是执行代码的上下文(方法调用中 this 所代表的值)")]),n._v(" "),e("p",[n._v("作用域有三种类型:")]),n._v(" "),e("ul",[e("li",[n._v("全局作用域(Global scope)")]),n._v(" "),e("li",[n._v("局部作用域(Local/Function scope,函数作用域)")]),n._v(" "),e("li",[n._v("eval 作用域")])]),n._v(" "),e("p",[n._v("在函数内部使用"),e("code",[n._v("var")]),n._v("定义的代码,其作用域都是局部的,且只对该函数的其他表达式是可见的,包括嵌套子函数中的代码,局部变量只能在它被调用的作用域范围内进行读和写的操作")]),n._v(" "),e("p",[n._v("在全局作用域内定义的变量从任何地方都是可以访问的,因为它是作用域链中的最高层中的最后一个,在整个范围内都是可见的,注意在 Es6 之前是没有块级作用域的,而 Es6 后是有的,也就是说"),e("code",[n._v("if")]),n._v(","),e("code",[n._v("while")]),n._v(","),e("code",[n._v("switch")]),n._v(","),e("code",[n._v("for语句")]),n._v("是有了块级作用域的,可以使用 let 关键字声明变量,修正了 var 关键字的缺点,注意 let 使用规则")]),n._v(" "),e("p",[n._v("看如下代码所示")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('/\n* 全局变量与局部变量\n*\n* @global variable {variable="itclan"}\n* @function myFun\n* @local variable {variable="itclanCode",variable=24}\n* @function otherFun\n* @eval作用域 evalfun\n*/\nvar variable = "itclan"; //全局变量\nconsole.log("全局variable","=",variable); // 全局variable = itclan\n// 函数表达式\nvar myFun = function(){\n    var variable = "itclanCode"; //局部变量\n    console.log("局部variable","=",variable); // 局部variable = itclanCode\n    var otherFun = function(){\n        var variable = 24; //局部变量\n        console.log("局部variable","=",variable); // 局部variable = 24\n     }\n    otherFun();\n}\nmyFun();\neval("var evalfun = 20;console.log(\'evalfun作用域\',\'=\',evalfun)");// evalfun作用域 = 20\n\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br")])]),e("p",[n._v("输出结果")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("全局variable = itclan\n局部variable = itclanCode\n局部variable = 24\nevalfun作用域 = 20\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[n._v("注意")]),n._v(" "),e("ul",[e("li",[n._v("函数可以嵌套函数,并可以无限的嵌套下去,也就是可以创建无数的函数作用域和 eval 作用域,而"),e("code",[n._v("javascript")]),n._v("坏境只是用一个全局作用域")]),n._v(" "),e("li",[n._v("全局作用域("),e("code",[n._v("global scope")]),n._v(")是作用域链中的最后一层")]),n._v(" "),e("li",[n._v("包含函数的函数,会创建堆栈执行的作用域,这些链接在一起的栈通常被称为作用域链(也就是后面会提到闭包产生的本质原因)")])])]),n._v(" "),e("h2",{attrs:{id:"什么是执行坏境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是执行坏境"}},[n._v("#")]),n._v(" 什么是执行坏境?")]),n._v(" "),e("p",[e("strong",[n._v("执行坏境")]),n._v(":它定义了变量或函数有访问的其他数据的能力,它决定了各自的行为\n"),e("strong",[n._v("侧重点")]),n._v(": 在于函数的作用域,而并不是所要纠结的上下文,一旦函数一声明定义,就会自动的分配产生了作用域,有着自己的执行坏境,"),e("strong",[n._v("执行坏境")]),n._v(":可以分为"),e("strong",[n._v("创建")]),n._v("与"),e("strong",[n._v("执行两个阶段")])]),n._v(" "),e("ul",[e("li",[n._v("在创建阶段,"),e("code",[n._v("js")]),n._v("解析器首先会创建一个变量对象(活动对象),它由定义在执行坏境中的变量,函数声明和参数组成,在这个阶段,系统会自动的产生一个"),e("code",[n._v("this")]),n._v("对象,作用域链会被初始化，随之,"),e("code",[n._v("this")]),n._v("的值也会被确定")]),n._v(" "),e("li",[n._v("第二阶段,也就是代码执行,代码会被解释执行,你会发现,每个执行坏境都有一个与之关联的变量对象,执行坏境中所有定义的变量和函数都保存在这个对象中")])]),n._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[n._v("注意")]),n._v(" "),e("p",[n._v("我们是无法手动的访问这个对象的,只有 js 解析器才能够访问它,其实也就是 this,尽管很抽象,但是理解它还是蛮重要的")])]),n._v(" "),e("h2",{attrs:{id:"作用域链-词法作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用域链-词法作用域"}},[n._v("#")]),n._v(" 作用域链(词法作用域)")]),n._v(" "),e("p",[n._v("当"),e("code",[n._v("javascript")]),n._v("查找与变量相关联的值时,会遵循一定的规则,也就是沿着作用域链从当前函数作用域内逐级的向上查找,直到顶层全局作用域结束,若找到则返回该值,若无则返回 undefined，这个链条是基于作用域的层次结构的")]),n._v(" "),e("p",[n._v("一旦当代码在坏境中执行时,会自动的创建一个变量对象的作用域链")]),n._v(" "),e("p",[e("strong",[n._v("作用域链的用途")]),n._v(": 保证对执行坏境的全局变量和具有访问权限函数内的局部变量定制特殊的规则,由内到外有序的对变量或者函数进行访问,作用域链包含了在坏境栈中的每个执行坏境对应的变量对象,通过作用域链可以决定变量的访问与标识符的解析")]),n._v(" "),e("p",[n._v("如下代码所示:")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('/* 作用域链变量的访问\n*\n* @global variable {name="随笔川迹"}\n* @function fun1,fun2\n* @local variable {oTherName="哇嘎嘎",AliasName = "川川"}\n* @return {fun2,name,oTherName,AliasName}\n* @return fun2,fun1函数的返回结果值为fun2的值\n*\n*\n*/\nvar name = "随笔川迹"; // 全局变量\nvar fun1 = function(){\n    var oTherName = "哇嘎嘎"; // 局部变量\n    var fun2 = function(){\n      var AliasName = "川川"; // 局部变量\n      AliasName = oTherName;\n      oTherName = AliasName;\n      return {name,oTherName,AliasName};\n   }\n   console.log(fun2());\n   return fun2();\n}\n//console.log(fun2()); // 若在全局作用域调用访问fun()会失败，显示fun2 is not defined\nconsole.log(fun1(),"name is","=",name)\n\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br")])]),e("p",[n._v("效果显示如下所示:\n"),e("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:a(1133),alt:"作用域链"}}),n._v("\n当我们分析这段代码时\n全局变量:"),e("code",[n._v("name")]),n._v(","),e("code",[n._v("函数fun1")]),n._v("嵌套"),e("code",[n._v("fun2函数")])]),n._v(" "),e("p",[n._v("fun1,fun2 函数内局部变量分别为:"),e("code",[n._v("oTherName")]),n._v(","),e("code",[n._v("AliasName")])]),n._v(" "),e("p",[n._v("当在函数 fun2 内,并未声明 name 变量，便在该函数 fun2 内进行了访问,这是如何找到的?")]),n._v(" "),e("p",[e("code",[n._v("javascript")]),n._v("首先在当前 fun2 函数作用域内查找一个名为"),e("code",[n._v("name")]),n._v("的变量,但是在"),e("code",[n._v("fun2")]),n._v("并未找到,于是它会查找它的父函数 fun1 的作用域内进行查找,但是发现仍然没有找到,于是在往外进行查找,结果在全局作用域范围内查找了 name 的值,于是找到了便把该值进行返回,若是在全局作用域内还未找到则会返回"),e("code",[n._v("undefined")])]),n._v(" "),e("p",[n._v("注意在"),e("code",[n._v("函数fun2")]),n._v("作用域内,"),e("code",[n._v("name")]),n._v(","),e("code",[n._v("oTherName")]),n._v(","),e("code",[n._v("AliasName")]),n._v("都是可以访问的,而在函数"),e("code",[n._v("fun1")]),n._v("函数作用域内是访问不了"),e("code",[n._v("oTherName")]),n._v("的,因为它脱离了 fun1 的函数的作用域嘛")]),n._v(" "),e("p",[n._v("我们知道在函数外是无法访问函数里面的的变量的,访问变量由内向外进行查找是可以的，但是反之则就不行")]),n._v(" "),e("p",[n._v("从上图的箭头分析图可知,内部坏境中,是可以通过作用域链访问它所有的外部坏境，但是在外部坏境是无法访问内部坏境中的任何变量和函数,这点很重要")]),n._v(" "),e("p",[n._v("我们在函数嵌套函数,并且进行函数调用时,要格外注意")]),n._v(" "),e("p",[n._v("如果在编程当中出现这种函数 is not defined 那么就是牵扯到函数作用域的问题了")]),n._v(" "),e("p",[n._v("在函数外是无法访问函数内的变量或者函数的,当然这种问题是可以解决的,也就是后面提到的闭包")]),n._v(" "),e("p",[n._v("其实上面我们的代码中就已经无形用了闭包,"),e("strong",[n._v("匿名函数 fun1,fun2 就是个闭包")]),n._v(",嵌套函数与被嵌套坏境的连接是线性的,有次序的")]),n._v(" "),e("p",[n._v("对于标识符(也就是变量或者函数名查找)是从当前函数作用域开始,沿着作用域链逐级的向上查找,直到最顶端全局变量坏境,若找到该值则返回,若无则返回"),e("code",[n._v("undefined")])]),n._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[n._v("注意")]),n._v(" "),e("p",[n._v("理解作用域以及作用域链对理解原型链是很有帮助的,其实他们区别并不是很大,两者都是通过位置体系(上下嵌套关系)和分层体系来查找值的方法,进而可以对变量或者函数进行读和写的操作,如下代码所示")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('var x = 5;\nvar fun1 = function(){\n    var y = 10;\n    var fun2 = function(){\n        var z = 20;\n        return z+y+x;\n    }\n    fun2();\n    return fun2();\n}\nconsole.log("x+y+z的和=",fun1()); //x+y+z的和= 35\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br")])]),e("h2",{attrs:{id:"javascript-没有块级作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript-没有块级作用域"}},[n._v("#")]),n._v(" javascript 没有块级作用域")]),n._v(" "),e("p",[n._v("在 Es6 之前,如"),e("code",[n._v("if")]),n._v(","),e("code",[n._v("for")]),n._v(","),e("code",[n._v("while")]),n._v(","),e("code",[n._v("switch")]),n._v("逻辑语句是无法创建作用域,也就是它后面的双大括号并没有域的作用,这才得以变量可以相互覆盖")]),n._v(" "),e("p",[e("strong",[n._v("解决办法")]),n._v(":你可以使用 es6 的 let 关键字声明变量,如下代码所示")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('var str = "itclan";     // 全局变量\nconsole.log(str);       // itclan\nif(true){               // if逻辑语句\n    str = "itclanCoder";\n    console.log(str);    // itclanCoder\n    for(var i = 0;i<=2;i++){\n      str = i;\n      console.log(str); // 0,1,2\n    }\n      console.log(str);    // 2\n}\nconsole.log(str);       // 2\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br")])]),e("p",[n._v("因此,代码在执行过程中,从上到下,"),e("code",[n._v("str")]),n._v("是变化的,因为在 Es6 之前,没有块级作用域,只有全局作用域,函数作用域,eval()作用域")]),n._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[n._v("注意")]),n._v(" "),e("p",[n._v("在函数中应用"),e("code",[n._v("var")]),n._v("声明变量,避免作用域的陷阱\n"),e("code",[n._v("javascript")]),n._v("会将缺少 var 的变量声明,即便在函数或者封装在函数中,都会视为全局变量作用域")]),n._v(" "),e("p",[n._v("而非局部作用域,我们是不应该出现这种不要 var 声明的,这样会造成全局变量的污染,易混淆,如下代码所示")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('/* 如果不使用var来声明变量,那么,该变量实际上是在全局作用域中定义,而不是局部作用域中定义(它本是在局部作用域中定义)\n*\n* @descortion:这样很容易产生误解,应当杜绝这么干\n* @在函数内定义的变量应用var,当然要在函数内部创建或更改全局作用域内的属性就另当别论了的\n*\n*\n*/\nvar fun1Exp = function(){\nvar fun2Exp = function(){\n    name = "污葵"; // 没有使用var,它相相当于window.name\n}\nfun2Exp();\n}\nfun1Exp();\nconsole.log({name});\n// 相反,使用var的情况\nvar fun3Exp = function(){\n    var fun4Exp = function(){\n        var age = 20; //使用var,局部变量\n    }\n    fun4Exp();\n}\nfun3Exp();\nconsole.log(age); //Uncaught ReferenceError: age is not defined,报错的原因,age在fun4Exp函数作用域中,在函数外是访问不了函数内部的变量的\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br")])]),e("h2",{attrs:{id:"作用域是在什么时候确定的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用域是在什么时候确定的"}},[n._v("#")]),n._v(" 作用域是在什么时候确定的?")]),n._v(" "),e("p",[n._v("作用域是在函数定义时就确定的,而非调用时确定")]),n._v(" "),e("p",[n._v("因为函数决定作用域,又因为函数也是对象,也是一种数据类型,一样可以像基本数据类型值一样被作为值来传递")]),n._v(" "),e("p",[n._v("作用域就是根据函数定义时的位置确定的,而与该函数在哪里被调用无关,其实就是词法作用域,作用域链是在调用函数之前创建,也是这样,我们就可以创建闭包,我们常常是这么做的,让函数向全局作用域返回一个嵌套函数,但该函数仍然能够通过作用域访问它父函数的作用域,")]),n._v(" "),e("p",[n._v("作用域链是在定义时确定的,并在函数内部传递代码不会改变作用域\n如下代码所示：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('/* 作用域链是在函数定义时位置确定的,而非函数调用位置,在函数内部传递代码不会改变作用域链\n*\n* @funtion expression parentFun\n* @local variable localVal\n* @return parentFun的返回值为一个匿名函数,访问该匿名函数外的变量\n*\n*/\nvar parentFun = function(){\n  var localVar = "itclanCoder是个有温度的公众号";\n  return function(){  // 返回一个匿名函数\n      console.log(localVar);\n  }\n}\nvar nestedFun =  parentFun();//nestedFun引用parentFun函数,把函数parentFun函数的返回值赋值给变量nestedFun\nnestedFun();   // 输出itclanCoder是个有温度的公众号，因为返回的函数可以通过作用域链访问到localVar变量\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br")])]),e("h2",{attrs:{id:"产生闭包的根本原因是作用域链"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#产生闭包的根本原因是作用域链"}},[n._v("#")]),n._v(" 产生闭包的根本原因是作用域链")]),n._v(" "),e("p",[n._v("通过上面的了解变量的作用域和作用域链后,相信理解闭包就不难了,如下代码所示")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("/* 闭包是由作用域链引用的\n*\n* @function expression countNum 匿名函数\n* @local variable count\n* @return 匿名函数\n*\n*/\nvar countNum = function(){\n    var count = 0;\n    return function(){ //调用countNum的时候返回嵌套的子函数\n      return ++count;// count在作用域链内定义,父函数里\n     };\n\n  }(); // 匿名函数的立即调用,返回嵌套函数\n // countNum(),上面的匿名函数后若不加括号调用,则返回的结果将是return 后面的函数的整体代码\nconsole.log(countNum());   // 1\nconsole.log(countNum());   // 2\nconsole.log(countNum());   // 3\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br")])]),e("p",[n._v("输出结果")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("1\n2\n3\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br")])]),e("p",[n._v("当每次调用"),e("code",[n._v("countNum")]),n._v("函数时,嵌套在该函数内的匿名函数是可以访问父函数(这里指的是"),e("code",[n._v("countNum")]),n._v("的)作用域的")]),n._v(" "),e("p",[n._v("这就是所谓的闭包,"),e("strong",[n._v("作用链是闭包的桥梁,用来连接内部函数与外部函数的关系")]),n._v(",从而达到外部函数访问内部函数局部变量或者函数的目的,其中被嵌套函数就可以称为是一个闭包")]),n._v(" "),e("p",[e("strong",[n._v("小结")]),n._v(":")]),n._v(" "),e("ul",[e("li",[n._v("产生闭包的原因是由作用域链引起的")]),n._v(" "),e("li",[n._v("函数嵌套函数,被嵌套的函数就可以称为闭包")]),n._v(" "),e("li",[n._v("子函数可以使用父函数的变量(访问其他函数内部的局部变量)")]),n._v(" "),e("li",[n._v("让变量始终保存在内存中,避免自动垃圾回收(其实上面的例子中就已经用到了的)")]),n._v(" "),e("li",[n._v("对外提供公有属性和方法")])]),n._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[n._v("#")]),n._v(" 总结")]),n._v(" "),e("p",[n._v("整篇文章从理解上文和作用域开始,以及什么是执行坏境,其产生闭包的原因是作用域链,并知道在 Es6 之前是没有块级作用域的概念的,并且作用域是在函数定义时就确定的,而非函数调用确定")]),n._v(" "),e("p",[n._v("在我的理解中编程其实很大一部分就是对数据进行读和写的操作,其中读可以理解对定义变量数据的访问")]),n._v(" "),e("p",[n._v("而写可以理解赋值,引用,变更，改写操作,当然 js 中不像其他后台语言的存储数据类型那般复杂,基本就是基本数据类型和对象了,理解作用域以及作用域链对理解闭包是相当的重要,对后续的原型链以及继承都是相关联的")]),n._v(" "),e("p",[n._v("其实也不必抓着什么执行坏境和上下文这些相对抽象的概念不放,我们只有在平时的使用当中,稍稍留意就行")]),n._v(" "),e("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}})],1)}),[],!1,null,null,null);s.default=t.exports}}]);