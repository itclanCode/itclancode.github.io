(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1161:function(s,a,n){s.exports=n.p+"assets/img/guide-01.b9d0e6bd.jpg"},1162:function(s,a,n){s.exports=n.p+"assets/img/guide-02.bdf42374.jpg"},1163:function(s,a,n){s.exports=n.p+"assets/img/guide-03.cf03a43f.jpg"},1920:function(s,a,n){"use strict";n.r(a);var e=n(12),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"javascript-中的浅拷贝-vs-深拷贝"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript-中的浅拷贝-vs-深拷贝"}},[s._v("#")]),s._v(" JavaScript 中的浅拷贝 VS 深拷贝")]),s._v(" "),e("h2",{attrs:{id:"快速导航"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[s._v("#")]),s._v(" 快速导航")]),s._v(" "),e("TOC"),s._v(" "),e("div",{attrs:{align:"center"}},[e("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:n(1161),alt:"深拷贝浅拷贝"}})]),s._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("在前端的数据处理当中,有时候往往需要对原有的数据进行克隆拷贝一份,然后在进行操作,但是又不能影响原来的数据")]),s._v(" "),e("p",[s._v("比较"),e("strong",[s._v("典型的应用场景就是")]),s._v(":"),e("strong",[s._v("点击一信息列表,然后编辑该列的信息。在弹出的编辑弹出框中,需要复制原有的列表信息内容,如果是浅拷贝的话,那么改变现有的数据,会影响原来的数据")]),s._v(",这样显然是不符合需求的")]),s._v(" "),e("p",[s._v("在真实的业务场景中,对数据进行深拷贝是一个非常常见的操作")]),s._v(" "),e("p",[s._v("你将在本文中学习到")]),s._v(" "),e("ul",[e("li",[s._v("基本(简单)数据类型赋值与复杂数据类型赋止的区别")]),s._v(" "),e("li",[s._v("浅拷贝与深拷贝它们的区别以及实现方式")]),s._v(" "),e("li",[s._v("往一个数组中 push 对象，前面的值总是会被最后一次的值覆盖的问题")])]),s._v(" "),e("h2",{attrs:{id:"基于基本-简单-数据类型的拷贝操作是赋值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于基本-简单-数据类型的拷贝操作是赋值"}},[s._v("#")]),s._v(" 基于基本(简单)数据类型的拷贝操作是赋值")]),s._v(" "),e("p",[s._v("在 js 中,数据类型包括两种:基本类型(6 种,数字 number,字符串 string,布尔 boolean,null,undefined,Symbol）和引用类型(对象,数组,函数)")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("赋值")])])]),s._v(" "),e("p",[s._v("基本类型的数据拷贝,会重新开辟一个空间存放拷贝的值,它是放置在栈中的,这种我们一般称为赋值 如下所示:")]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("点击即可查看")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('var num =  100;\nvar str = "itclanCoder";\nvar bol = true;\nvar nul = null;\nvar unde = undefined;\nvar sym = Symbol;\n\nnum1 = num;   // 将num赋值给左边num1\nstr1 = str;         // 将str赋值给左边的str1\nbol1 = bol;       // 将bol赋值给左边的bol1\nconsole.log(num,str,bol,nul,unde,sym,num1,str1,bol1);\nnum1 = 200;    // 给num1重新赋值\nstr1 = "川川";\nbol1 = false\nconsole.log(num,str,bol,nul,unde,sym,num1,str1,bol1);\nnum = 300;\nstr = "web";\nbol = false;\nconsole.log(num,str,bol,nul,unde,sym,num1,str1,bol1);\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])])]),s._v(" "),e("p",[s._v("显示结果如下所示")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('100 "itclanCoder" true null undefined ƒ Symbol() { [native code] } 100 "itclanCoder" true\n100 "itclanCoder" true null undefined ƒ Symbol() { [native code] } 200 "川川" false\n300 "web" false null undefined ƒ Symbol() { [native code] } 200 "川川" false\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{attrs:{align:"center"}},[e("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:n(1162),alt:"深拷贝浅拷贝"}})]),s._v("\n而对应的就是复杂类型(数组,对象,函数等)的拷贝,拷贝下来的只是指向存放数据空间的指针\n"),e("p",[s._v("类似这种拷贝数据的行为称为赋止(拷贝的是地止)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var a = [1,2,3,4];  // 定义一个数组\nb =  a;\nconsole.log(a)   // [1,2,3,4]\nconsole.log(b);  // [1,2,3,4]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("div",{attrs:{align:"center"}},[e("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:n(1163),alt:"深拷贝浅拷贝"}})]),s._v(" "),e("p",[s._v("当你尝试着改变"),e("code",[s._v("b[0]=100")]),s._v("时,此时 a 数组也发生改变了的,这就是浅拷贝了的 因为它们指向的都是同一个地止，所以当地止中的数据发生改变,指向该存放的地止的所有变量都会发生改变")]),s._v(" "),e("h2",{attrs:{id:"浅拷贝"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浅拷贝"}},[s._v("#")]),s._v(" 浅拷贝")]),s._v(" "),e("p",[e("strong",[s._v("定义")]),s._v(": 对一个对象进行拷贝时，仅仅拷贝对象的引用进行拷贝，但是拷贝对象和源对象还是引用同一份实体")]),s._v(" "),e("p",[s._v("其中一个对象的改变都会影响到另一个对象")]),s._v(" "),e("p",[e("strong",[s._v("简单点")]),s._v(": 假设 B 复制了 A 对象,改变其中的任何一个对象,都会影响到另一个对象,那么这就是浅拷贝,如果互相不影响,那么就是深拷贝")]),s._v(" "),e("h2",{attrs:{id:"深拷贝"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝"}},[s._v("#")]),s._v(" 深拷贝")]),s._v(" "),e("p",[s._v("主要是针对复杂的数据类型")]),s._v(" "),e("p",[e("strong",[s._v("定义")]),s._v(":指拷贝一个对象时，不仅仅把对象的引用进行复制，还把该对象引用的值也一起拷贝")]),s._v(" "),e("p",[e("strong",[s._v("简单点")]),s._v(":源对象与拷贝对象互相独立，其中任何一个对象的改动都不会对另外一个对象造成影响,其实就是打破隔离对象引用之间的关系")]),s._v(" "),e("p",[s._v("那么用代码具体怎么操作实现呢? 先来看一个问题:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var obj1 =  { x:1, y:2 }\nvar obj2 =  obj1;\nobj2.x = 100;\nconsole.log(obj1, obj2); // {x:100,y:2} {x:100, y:2}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("当你改变"),e("code",[s._v("obj2")]),s._v("的值,会影响到"),e("code",[s._v("obj1")]),s._v("的值,显然有时候,这不符合我们的需求,那怎么解决?")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("第一种解决办法: 通过 for-in")])])]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("点击即可查看")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var obj1 = {x: 1, y: 2};\nvar obj2 = {};   // 定义一个空对象\nfor(var key in obj1) {\n      obj2[key] = obj1[key]\n}\nobj2.x = 100;\nconsole.log(obj1, obj2); // {x:1, y:2} {x:100, y:2}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("第二种解决办法: 通过 object.assign()方法,这种方式在实际开发中很常用")])])]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("点击即可查看")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var obj1 = { x: 1, y: 2}\nvar obj2 = Object.assign({}, obj1);\nob2.x = 100;\nconsole.log(obj1, obj2);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("第 3 种解决办法: 通过 Es6 中的拓展运算符 ...")])])]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("点击即可查看")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var obj1 = {x: 1, y: 2}\nvar obj2 = {...obj1};\nobj2.x = 100;\nconsole.log(obj1, obj2);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("第 4 种解决办法: 通过 JSON.parse(JSON.stringify())")])])]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("点击即可查看")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var obj1 = { x: 1, y: 2}\nvar obj2 = JSON.parse(JSON.stringify(obj1));\nob2.x = 100;\nconsole.log(obj1, obj2);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("p",[s._v("上面四种方法都可以解决,改变 obj2 对象的值,不会影响到 obj1 对象的值")]),s._v(" "),e("p",[e("strong",[s._v("但是需要格外注意的是:除了第四种深拷贝 JSON.parse(JSON.stringify()),其他方式只能做一层拷贝")])]),s._v(" "),e("p",[s._v("如果考虑深层的嵌套关系,那么就需要用深拷贝了的,比如类似下面这样的结构")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var obj1 = {x: 1, y: 2, z: { a: 3, b: 4}}\nvar obj2 = {};\nfor(var key in obj1) {\n      obj2[key] = obj1[key]\n}\nobj2.z.a =  100;\nconsole.log(obj1, obj2);  // 这样的话，改变obj2的变量会影响obj1的变量对象\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("那怎么实现深拷贝?:利用的是递归")]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("点击即可查看")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" /*\n  *  *\n  *  @description:把一个对象递归拷贝给另外一个对象\n  *  源对象与拷贝后的对象没有引用关系,实现克隆\n  *  @params {obj2} obj2为被拷贝的对象\n  *  @return {obj} obj为最终拷贝出来的对象\n  *  @author itclanCoder\n  *  */\nfunction deepCopy(obj2){    // 递归函数\n    var obj =  isArray(obj2)?[]:{}; // 判断被拷贝对象是数组还是对象,如果不考虑数组的话,会出现一些问题,如果被拷贝对象里面有数组对象的话,会把数组变为对象,如果传进来是一个数组的话,就让它是一个数组的,是一个对象就是一个对象的\n    // 取出obj2的所有属性,如果当前拷贝的数据还是一个对象的话,那么继续调用,deepCopy进行二次拷贝，递归\n    for(var property in obj2){\n        if(isObject(obj2[property])){\n            obj[property] = deepCopy(obj2[property])  // 递归\n        }else{\n            obj[property] =  obj2[property]\n        }\n    }\n    return obj;\n}\n\n// 判断一个值是不是数组\nfunction isArray(val){\n    return Object.prototype.toString.call(val) === '[object Array]';\n    // 这里直接用Es6中的Array.isArray()方法判断是不是数组也是可以的,但是上面那种是一些标准库的常见用法\n}\n// 判断是不是对象\nfunction isObject(val){\n    return typeof val ==='object' && val !== null;\n}\nvar obj1 = {x: 1, y: 2, z: { a:3, b: 4}}\nvar obj2 = deepCopy(obj1);\nobj2.x = 100；\nobj2.z.a = 200;\nconsole.log(obj1, obj2);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br")])])]),s._v(" "),e("p",[s._v("上面的示例代码就完成了对一个数组或对象的深拷贝,无论是一级拷贝还是多级拷贝")]),s._v(" "),e("h2",{attrs:{id:"往一个数组中-push-对象-前面的值总是会被最后一次的值覆盖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#往一个数组中-push-对象-前面的值总是会被最后一次的值覆盖"}},[s._v("#")]),s._v(" 往一个数组中 push 对象，前面的值总是会被最后一次的值覆盖")]),s._v(" "),e("p",[s._v("**背景:**在实际开发中,你也许会遇到这样的需求,需要往一个数组中添加对象,但结果是最后一次 push 的对象值总会覆盖之前 push 进去的值，例如如下所示")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('var sourceObj = { name: "川川", age: 20, job: "搬砖"}\nvar targetObj = {};  // 在外头定义对象\nvar arrs = [];   // 定义一个空数组,保存新添加入的值,需要将obj中的对象添加到这个arrs数组当中去\nfor(var i in sourceObj ) {\n    targetObj.name = sourceObj[i];\n   arrs.push(targetObj);\n}\nconsole.log(arrs);  //  [{name: "搬砖"}, {name: "搬砖", {name: "搬砖"}}]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("结果令人意外,却是")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(' [{name: "搬砖"}, {name: "搬砖", {name: "搬砖"}}]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("而非")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(' [{name: "川川"}, {name: "age", {name: "搬砖"}}]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这在初学者的中,是一件非常令人苦恼的事情,甚至让你掉不少头发")]),s._v(" "),e("p",[s._v("目标结果:分别拿到 sourceObj 对象中的键值对,然后存储到目标数数组 arrs 中,也就是 arrs 最终结果应该是这样的")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('arrs = [{name: "川川"}, {age: 20}, {job: "搬砖"}]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("问题原因:")]),s._v(" 每次取出来的值都放在 "),e("code",[s._v("targetObj.name")]),s._v("中了，因为是在外面的定义的对象，所以每次 "),e("code",[s._v("targetObj")]),s._v("的地址是一样的, "),e("code",[s._v("arrs")]),s._v("中保存的是 "),e("code",[s._v("targetObj")]),s._v("的地址，当最后一次给"),e("code",[s._v("targetObj.name")]),s._v("赋值为 搬砖时")]),s._v(" "),e("p",[s._v("由于是同一个 "),e("code",[s._v("targetObj")]),s._v(",所以最后一次给 "),e("code",[s._v("targetObj.name")]),s._v("赋值时,会将前面两次的值给覆盖掉，其实第二次已经把第一次的值覆盖过了")]),s._v(" "),e("p",[e("strong",[s._v("具体解决")]),s._v(":把定义在外面的目标对象 "),e("code",[s._v("targetObj")]),s._v("放到 "),e("code",[s._v("for-in")]),s._v("里面就可以了的")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('var sourceObj = { name: "川川", age: 20, job: "搬砖"}\nvar arrs = [];   // 定义一个空数组,保存新添加入的值,需要将obj中的对象添加到这个arrs数组当中去\nfor(var i in sourceObj ) {\n    var targetObj = {};  // 在里面定义对象\n    targetObj.name = sourceObj[i];\n   arrs.push(targetObj);\n}\nconsole.log(arrs);  //  [{name: "川川"}, {name: 20, {name: "搬砖"}}]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("其中在"),e("code",[s._v("for-in")]),s._v("中前面的 i 代表的就是 "),e("code",[s._v("key")]),s._v("值,所以:如果想要把 "),e("code",[s._v("sourceObj")]),s._v("对象中的键值一并放到"),e("code",[s._v("arrs")]),s._v("数组中,你可以这样做:将目标对象赋值时, "),e("code",[s._v("targetObjet.name")]),s._v("换成 "),e("code",[s._v("targetObject[i]")]),s._v("就可以了的")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('var sourceObj = { name: "川川", age: 20, job: "搬砖"}\nvar arrs = [];   // 定义一个空数组,保存新添加入的值,需要将obj中的对象添加到这个arrs数组当中去\nfor(var i in sourceObj ) {\n    var targetObj = {};  // 在里面定义对象\n    targetObj[i] = sourceObj[i];\n   arrs.push(targetObj);\n}\nconsole.log(arrs);  //  [{name: "川川"}, {age: 20}, {job: "搬砖"}]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("曾今,这被作为一个面试题,尽管很基础,但我发现,能快速回答以及正确做出来的,还真不多,虽然也谈不上奇葩,一下子没想出来,也并不能代表什么,但是不得不说,最基础的东西,才是最值得回味的")]),s._v(" "),e("h2",{attrs:{id:"结语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[s._v("#")]),s._v(" 结语")]),s._v(" "),e("p",[s._v("本篇主要介绍了 JS 中的浅拷贝与深拷贝,其中深拷贝,主要是针对复杂的数据类型而言的,也就是,数组,对象,函数等")]),s._v(" "),e("p",[s._v("对于基本数据类型的拷贝称作为赋值,而复杂数据类型的拷贝为赋止,不用深究概念,改变一个对象,影响了另一个对象,那这就是浅拷贝,要是不影响,那就是深拷贝")]),s._v(" "),e("p",[s._v("而实现数据的拷贝有四种方式,"),e("code",[s._v("for-in")]),s._v(",以及"),e("code",[s._v("Object.assign()")]),s._v(",拓展运算符...,还有"),e("code",[s._v("JSON.parse(JSON.stringify())")])]),s._v(" "),e("p",[s._v("其中前面三者只能实现数据的一级拷贝,如果想要更深沉次的拷贝的话,那么可以用递归实现,如上面代码所示")]),s._v(" "),e("p",[s._v("当然最后也提到了一个开发中常见的问题:往一个数组中"),e("code",[s._v("push")]),s._v("对象，前面的值总是会被最后一次的值覆盖的问题,具体解决办法是,把目标对象放在"),e("code",[s._v("for-in")]),s._v("里面就可以了的")]),s._v(" "),e("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}})],1)}),[],!1,null,null,null);a.default=r.exports}}]);