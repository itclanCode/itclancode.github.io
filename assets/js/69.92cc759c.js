(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1190:function(t,s,n){t.exports=n.p+"assets/img/01-life-cycle.888de608.gif"},1191:function(t,s,n){t.exports=n.p+"assets/img/03-components.ddde1d53.jpg"},1192:function(t,s,n){t.exports=n.p+"assets/img/04-components.9ab91b28.jpg"},2076:function(t,s,n){"use strict";n.r(s);var a=n(12),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"react-中组件的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-中组件的生命周期"}},[t._v("#")]),t._v(" React 中组件的生命周期")]),t._v(" "),a("h2",{attrs:{id:"快速导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[t._v("#")]),t._v(" 快速导航")]),t._v(" "),a("TOC"),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("为了进一步了解"),a("code",[t._v("React")]),t._v("的工作过程,已经晓得了怎么编写"),a("code",[t._v("React")]),t._v("组件,知道了"),a("code",[t._v("React")]),t._v("的数据流,那么是时候学习 React 组件的生命周期了,每个组件都包含生命周期方法,生命周期如同四季更替,一个人的生,老,病,死.在每个特殊的年龄阶段,做着不同的事情")]),t._v(" "),a("p",[t._v("在 React 编写组件中,每个组件在网页中都有被创建,更新,删除这么一过程,就像有机的生命体一样")]),t._v(" "),a("p",[t._v("理解生命周期函数对于编写 React 组件代码是非常重要的")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclancode/blogImgAssets/2020-9-2/1599041795051-01-guide.jpg",alt:"todolist"}})]),t._v(" "),a("h2",{attrs:{id:"生命周期-钩子-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期-钩子-函数"}},[t._v("#")]),t._v(" 生命周期(钩子)函数")]),t._v(" "),a("p",[a("strong",[t._v("定义")]),t._v(": 在特定的阶段,能够自动执行的函数(方法)")]),t._v(" "),a("p",[t._v("在前面的"),a("code",[t._v("JSX")]),t._v("学习中,一个"),a("code",[t._v("React")]),t._v("元素渲染到页面当中,本质上是通过底层的"),a("code",[t._v("React.CreateElement")]),t._v("的一个方法实现的,它是一个"),a("code",[t._v("javascript")]),t._v("对象,将虚拟"),a("code",[t._v("DOM")]),t._v("转化为真实的"),a("code",[t._v("DOM")]),t._v(",最后通过"),a("code",[t._v("ReactDOM.render()")]),t._v("方法将真实的"),a("code",[t._v("DOM")]),t._v("渲染挂载到对应的页面位置上")]),t._v(" "),a("p",[t._v("一个组件的渲染,经历了以下几个过程:可以对照这个完整的生命周期图谱的")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclancode/blogImgAssets/2020-9-2/1599042137827-02-life-cycle.jpg",alt:"todolist"}})]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("组件的装载(Mount)")]),t._v(":"),a("code",[t._v("React")]),t._v("组件第一次在"),a("code",[t._v("DOM")]),t._v("树中渲染的过程")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("componentWillMount")]),t._v(":组件即将被挂载,在"),a("code",[t._v("Render")]),t._v("方法之前调用:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("应用场景")]),t._v(": 常用于组件的启动工作,例如:"),a("code",[t._v("Ajax")]),t._v("数据的获取,定时器的启动,类似"),a("code",[t._v("Render")]),t._v("函数的前哨,调用"),a("code",[t._v("setState")]),t._v("修改状态也不会引起重新绘制,这个时候没有任何渲染,需要注意的是,它可以在服务器端被调用,也可以在浏览器端调用")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("componentDidMount")]),t._v(":组件被加载完之后调用,也就是"),a("code",[t._v("render")]),t._v("函数执行之后调用，相当于"),a("code",[t._v("render")]),t._v("函数的后卫,当这个生命周期执行时,render 函数会引发渲染,组件重新挂载到 DOM 树上")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("注意")]),t._v(":它只能在浏览器端调用,在服务器端使用"),a("code",[t._v("React")]),t._v("的时候不会调用,装载是将组件渲染,并且构造"),a("code",[t._v("DOM")]),t._v("元素,然后塞入页面的过程,这个状态是不可能在服务器端完成的,服务器端不可能产生"),a("code",[t._v("DOM")]),t._v("树的")]),t._v(" "),a("li",[a("strong",[t._v("应用场景")]),t._v(":我们往往在这个生命周期内进行"),a("code",[t._v("Ajax")]),t._v("的获取,填充组件的内容,因为在"),a("code",[t._v("componentDidMount")]),t._v("被调用时,组件已经挂载到"),a("code",[t._v("DOM")]),t._v("树上了,而往往若需要结合第三方库的使用,例如:"),a("code",[t._v("JQ")]),t._v("等,也是放到这个生命周期函数中进行处理的")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("getSnapshotBeforeUpdate(prevProps, prevState)")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("使用场景")]),t._v("：该函数在最终"),a("code",[t._v("render")]),t._v("结果提交到"),a("code",[t._v("DOM")]),t._v("之前被调用,记录 DOM 刷新前的特性，如：滚动位置")]),t._v(" "),a("li",[a("strong",[t._v("注意")]),t._v("：该函数的返回值会作为参数传递给"),a("code",[t._v("componentDidUpdate")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("componentWillUnmount")]),t._v(": 当组件对应的 "),a("code",[t._v("DOM")]),t._v(" 元素从页面中删除之前调用")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("组件的更新(update)")]),t._v(": 当组件被重新渲染的过程("),a("code",[t._v("state")]),t._v("与"),a("code",[t._v("props")]),t._v("发生改变都会引起渲染)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("componentWillReceiveProps")])]),t._v(" "),a("li",[a("code",[t._v("shouldComponentUpdate")])]),t._v(" "),a("li",[a("code",[t._v("componentWillUpdate")])]),t._v(" "),a("li",[a("code",[t._v("componentDidUpdate")])])])]),t._v(" "),a("li",[a("p",[t._v("组件的卸载("),a("code",[t._v("unmount")]),t._v("): 组件从"),a("code",[t._v("DOM")]),t._v("中删除的过程")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("componentWillUnmount")]),t._v(": 组件从页面销毁时,会触发该函数,当需要对数据进行清理时,例如定时器的清理,放到该函数里面去做")])])])]),t._v(" "),a("p",[t._v("三种不同的过程,"),a("code",[t._v("React")]),t._v("库会依次调用组件的一些成员函数(生命周期函数)")]),t._v(" "),a("h2",{attrs:{id:"组件装载过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件装载过程"}},[t._v("#")]),t._v(" 组件装载过程")]),t._v(" "),a("p",[t._v("当组件第一次被渲染的时候,会依次的调用如下生命周期函数")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("constructor")]),t._v(":构造器函数")]),t._v(" "),a("li",[a("code",[t._v("getDerivedStateFromProps(props,state)")]),t._v(":")])]),t._v(" "),a("p",[a("strong",[t._v("使用场景")]),t._v("：当组件内部的"),a("code",[t._v("state")]),t._v("变化依赖于"),a("code",[t._v("props")]),t._v("时,调用该生命周期函数 注意：不要过度使用该函数,如果你的操作依赖于"),a("code",[t._v("props")]),t._v("的更改并有副作用，最好放到"),a("code",[t._v("componentDidUpdate")]),t._v("中")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("componentWillMount")]),t._v(":组件挂载开始之前调用,也就是"),a("code",[t._v("render")]),t._v("函数之前被自动调用,在"),a("code",[t._v("React16.3")]),t._v("版本之后不应该使用,由于该函数在"),a("code",[t._v("Render")]),t._v("函数之前调用,因此使用同步的"),a("code",[t._v("setState")]),t._v("方法不会触发额外的"),a("code",[t._v("render")]),t._v("处理")])]),t._v(" "),a("p",[t._v("它也只会在初始化的时候调用一次,所以"),a("code",[t._v("this")]),t._v("环境的绑定放在这里面也是可以的,但是最好是放在"),a("code",[t._v("constructor")]),t._v("构造器函数里面,如果是处理带有后续异步操作或者有副作用的订阅事件处理,例如："),a("code",[t._v("Ajax")]),t._v("数据获取,则放到"),a("code",[t._v("componentDidMount")]),t._v("中")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("render")]),t._v(":组件的渲染,插入到"),a("code",[t._v("DOM")]),t._v("元素中")]),t._v(" "),a("li",[a("code",[t._v("componentDidMount")]),t._v(":组件挂载完之后调用,也就是在"),a("code",[t._v("render")]),t._v("函数之后调用,"),a("code",[t._v("DOM")]),t._v("已经插入到页面中了的,可以在这里使用"),a("code",[t._v("refs")])])]),t._v(" "),a("p",[a("code",[t._v("constructor")]),t._v(":构造器函数")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ptops")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一定要调用super,并且接收props参数,否则该组件的实例方法无法获取到外部的props值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("至于"),a("code",[t._v("constructor")]),t._v("在上节当中已经提及过,并不是每个组件都需要定义"),a("code",[t._v("constructor")]),t._v("构造器函数，函数式(无状态)组件就不需要定义构造函数")]),t._v(" "),a("p",[t._v("一般使用"),a("code",[t._v("constructor")]),t._v("构造函数有如下两种情况")]),t._v(" "),a("ul",[a("li",[t._v("组件内部初始化"),a("code",[t._v("state")]),t._v(",因为生命周期内的任何函数都可能要访问"),a("code",[t._v("state")]),t._v(",取它的值,进行相应的逻辑处理,它是该组件一个私有的对象变量")]),t._v(" "),a("li",[t._v("在对"),a("code",[t._v("JSX")]),t._v("元素上绑定事件监听处理函数时,也就是组件内部成员函数(方法)"),a("code",[t._v("this")]),t._v("环境的绑定,因为在"),a("code",[t._v("Es6")]),t._v("中类的成员方法在执行时 this 并不会和类的实例化本身自动的绑定,你需要手动"),a("code",[t._v("bind")]),t._v("的方式进行绑定")])]),t._v(" "),a("p",[t._v("为了方便调用,在构造函数中,"),a("code",[t._v("this")]),t._v("就是当前组件的实例,往往在构造函数中将组件实例下的成员方法绑定"),a("code",[t._v("this")]),t._v("为当前的实例对象")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件监听处理函数，this环境的绑定")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleBtnClick "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleBtnCLick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleInputChange "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleInputChange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("在执行了"),a("code",[t._v("constructor")]),t._v("构造器函数后,执行"),a("code",[t._v("componentWillMount")]),t._v("方法,然后在执行"),a("code",[t._v("render")]),t._v("方法,执行完"),a("code",[t._v("render")]),t._v("方法后,在执行"),a("code",[t._v("componentDidMount")]),t._v("方法,整个装载过程就结束了的")]),t._v(" "),a("p",[t._v("当然这其中的一个"),a("code",[t._v("componentWillUnmount")]),t._v("方法是在组件销毁前进行触发,也就是删除"),a("code",[t._v("DOM")]),t._v("元素之前调用,这个常用于当组件从页面删除销毁时,做一些数据清理的时候能用得上,例如定时器的清理,取消网络请求,在该生命周期函数内,不应该调用"),a("code",[t._v("setState")]),t._v("函数,因为该组件销毁后,将不会被重新渲染")]),t._v(" "),a("p",[t._v("具体的实例代码如下所示:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Fragment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Component "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ReactDOM "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-dom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LifeCycle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1-constructor函数被调用执行'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      isShow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleBtnClick "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleBtnClick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillMount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2-componentWillMount函数已执行,组件挂载之前,在render方法之前调用'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isShow\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4-componentDidMount函数已执行,组件挂载完之后,DOM元素已经插入到页面后调用'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3-render函数执行'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Fragment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isShow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button onClick"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleBtnClick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("更改"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Fragment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleBtnClick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      isShow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isShow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillUnmount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'componentWillUnmount函数已执行,组件从页面中移除之前调用,Text组件移除'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Text组件被渲染'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("itclanCoder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" container "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nReactDOM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("LifeCycle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br"),a("span",{staticClass:"line-number"},[t._v("53")]),a("br"),a("span",{staticClass:"line-number"},[t._v("54")]),a("br"),a("span",{staticClass:"line-number"},[t._v("55")]),a("br"),a("span",{staticClass:"line-number"},[t._v("56")]),a("br"),a("span",{staticClass:"line-number"},[t._v("57")]),a("br"),a("span",{staticClass:"line-number"},[t._v("58")]),a("br"),a("span",{staticClass:"line-number"},[t._v("59")]),a("br"),a("span",{staticClass:"line-number"},[t._v("60")]),a("br"),a("span",{staticClass:"line-number"},[t._v("61")]),a("br")])]),a("p",[t._v("效果如下所示:")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:n(1190),alt:"todolist"}})]),t._v(" "),a("p",[t._v("大家可以自行将这些生命周期函数放到组件内部当中,进行测试的,看每个生命周期执行的顺序就一目了然了的")]),t._v(" "),a("p",[t._v("说完了组件的装载,那么接下来就是组件的更新了")]),t._v(" "),a("h2",{attrs:{id:"组件的更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件的更新"}},[t._v("#")]),t._v(" 组件的更新")]),t._v(" "),a("p",[t._v("当"),a("code",[t._v("props")]),t._v("或者"),a("code",[t._v("state")]),t._v("发生改变的时候,就会引起"),a("code",[t._v("render")]),t._v("函数的渲染,也就是会引发组件的更新,它与组件的装载一样,会触发一些生命周期函数")]),t._v(" "),a("p",[t._v("更新组件时:生命周期函数执行的顺序")]),t._v(" "),a("ul",[a("li",[a("strong",[a("code",[t._v("componentWillReceiveProps(nextProps,nextState)")])]),t._v(":只要父组件的"),a("code",[t._v("render")]),t._v("函数被调用,在"),a("code",[t._v("render")]),t._v("函数里面被渲染的子组件就会经历更新的过程,无论父组件传给子组件的"),a("code",[t._v("props")]),t._v("有没有改变,都会触发子组件的"),a("code",[t._v("componentWillReceiveProps")]),t._v("函数")])]),t._v(" "),a("p",[t._v("你可以理解为,第一次渲染时,父组件的"),a("code",[t._v("componentWillReceiveProps")]),t._v("函数不会被执行,如果是第二次渲染时,已经存在于父组件中,则该"),a("code",[t._v("componentWillReceiveProps")]),t._v("才会执行")]),t._v(" "),a("p",[a("strong",[t._v("注意")]),t._v(":在挂载过程中,"),a("code",[t._v("React")]),t._v("不会针对初始"),a("code",[t._v("props")]),t._v("调用此方法,通过触发"),a("code",[t._v("setState")]),t._v("方法更新过程不会调用这个函数,这是因为这个函数适合根据新的"),a("code",[t._v("props")]),t._v("值(也就是"),a("code",[t._v("nextProps")]),t._v(")来计算出是不是要更新内部状态"),a("code",[t._v("state")])]),t._v(" "),a("p",[a("strong",[t._v("应用场景")]),t._v(":当你希望只有在接收新的"),a("code",[t._v("props")]),t._v("时做一些逻辑,"),a("code",[t._v("props")]),t._v("改变需要相应改变内部"),a("code",[t._v("state")]),t._v("状态时,则使用"),a("code",[t._v("componentWillReceiveProps")]),t._v("，比如:根据父组件传入的数据初始化或重置组件内部的某些 state 状态")]),t._v(" "),a("ul",[a("li",[a("strong",[a("code",[t._v("shouldComponentUpdate")])]),t._v(":它决定一个组件什么时候不需要被渲染,在组件更新过程中,Render 函数之前调用执行,它同"),a("code",[t._v("Render")]),t._v("函数一样,要求有返回结果的函数")])]),t._v(" "),a("p",[t._v("返回一个"),a("code",[t._v("boolean")]),t._v("值,告诉"),a("code",[t._v("React")]),t._v("库这个组件在这次更新过程是否要继续,如果该函数返回"),a("code",[t._v("true")]),t._v(",那么继续更新,调用"),a("code",[t._v("render")]),t._v("函数,反之,若函数返回"),a("code",[t._v("false")]),t._v(",那么立刻停止更新过程,便不会执行"),a("code",[t._v("render")]),t._v("函数了的")]),t._v(" "),a("p",[t._v("这个函数是提高"),a("code",[t._v("React")]),t._v("的性能的,如果发现没必要的渲染,那就干脆不用渲染了的,这个"),a("code",[t._v("shouldComponentUpdate")]),t._v("就可以做到")]),t._v(" "),a("p",[a("strong",[t._v("注意")]),t._v(": "),a("code",[t._v("forceUpdate")]),t._v("不会触发该函数,也可以使用"),a("code",[t._v("PureComponent")]),t._v("替代该函数,该函数做了内部的优化")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nextProps表示的是接下来我的props值会样,nextState表示的是我的state会变成什么样")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shouldComponentUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props属性 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props属性 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" nextState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state属性 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state属性"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("ul",[a("li",[a("code",[t._v("componentWillUpdate")]),t._v(": 组件即将更新时调用,在"),a("code",[t._v("Render")]),t._v("函数之前调用")])]),t._v(" "),a("p",[a("strong",[t._v("注意")]),t._v(": 不要在该函数中通过"),a("code",[t._v("this.setState")]),t._v("再次改变"),a("code",[t._v("state")]),t._v(",如果需要,则在"),a("code",[t._v("componentWillReceiveProps")]),t._v("函数中改变")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("render")]),t._v(":决定该组件 UI 渲染结果,返回的结果用于构造 DOM 对象")])]),t._v(" "),a("p",[a("strong",[t._v("注意")]),t._v(":不能在"),a("code",[t._v("render")]),t._v("函数中调用"),a("code",[t._v("setState")]),t._v("，如果在"),a("code",[t._v("shouldComponentUpdate")]),t._v("返回"),a("code",[t._v("false")]),t._v("，则"),a("code",[t._v("render")]),t._v("函数不会被调用")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("componentDidUpdate")]),t._v(":组件更新完之后执行，有两个参数"),a("code",[t._v("prevProps")]),t._v("和"),a("code",[t._v("prevState")]),t._v("，无论是父组件"),a("code",[t._v("props")]),t._v("的修改还是状态的更改都会触发该方法")])]),t._v(" "),a("p",[a("strong",[t._v("应用场景")]),t._v(":如果希望无论"),a("code",[t._v("props")]),t._v("更改还是组件内的状态更改都能触发一些逻辑,则可以使用"),a("code",[t._v("componentDidUpdate")]),t._v(",进行业务处理,发送网络请求")]),t._v(" "),a("p",[a("strong",[t._v("注意")]),t._v(":在处理业务或发送网络请求时,一定要做好条件比较,否则容易造成死循环")]),t._v(" "),a("h2",{attrs:{id:"组件的卸载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件的卸载"}},[t._v("#")]),t._v(" 组件的卸载")]),t._v(" "),a("p",[t._v("组件的卸载")]),t._v(" "),a("p",[a("code",[t._v("React")]),t._v("组件从页面中移除时,在卸载的过程中,只涉及一个生命周期函数"),a("code",[t._v("componentWillUnmount")]),t._v(",由于该函数在组件删除之前会被调用,所以该函数适合做一些清理性的工作")]),t._v(" "),a("p",[a("strong",[t._v("应用场景")]),t._v(": 清理无效的"),a("code",[t._v("timer")]),t._v(",取消未完成的网络请求,清理已注册的订阅")]),t._v(" "),a("p",[a("strong",[t._v("注意")]),t._v("：在这里使用"),a("code",[t._v("setState")]),t._v("时无效的")]),t._v(" "),a("p",[t._v("当然对于"),a("code",[t._v("React")]),t._v("的生命周期,不同的版本,官方对它做了一些优化和改动,这里介绍的是"),a("code",[t._v("React Version 16.2.0")]),t._v("版本的,生命周期过程图如下所示")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:n(1191),alt:"todolist"}})]),t._v("\n如果是最新的，在React17.0版本中,生命周期函数如下所示\n"),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:n(1192),alt:"todolist"}})]),t._v(" "),a("h2",{attrs:{id:"结语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),a("p",[t._v("本文主要讲解了 "),a("code",[t._v("React")]),t._v(" 的生命周期,只要理解了生命周期的图谱,生命周期也就差不多了的,在 constructor 构造器中初始化工作,"),a("code",[t._v("componentWillMount")]),t._v(" 在组件即将挂载之前执行调用,常用于组件的启动工作,例如:Ajax 数据的获取,定时器的启动")]),t._v(" "),a("p",[t._v("当然数据的请求最好放在 "),a("code",[t._v("componentDidMount")]),t._v(" 函数中,而当 "),a("code",[t._v("props")]),t._v(" 或者 "),a("code",[t._v("state")]),t._v(" 发生改变时,会引起组件的渲染,也就是组件的更新,只要父组件的 render 函数被渲染了")]),t._v(" "),a("p",[t._v("就会触发子组件的 "),a("code",[t._v("componentWillReceiveProps")]),t._v(",而当 "),a("code",[t._v("shouldComponentUpdate")]),t._v(" 的函数返回 "),a("code",[t._v("true")]),t._v(" 时,则 "),a("code",[t._v("render")]),t._v(" 函数会渲染,要是返回 "),a("code",[t._v("false")]),t._v(" 时,则 "),a("code",[t._v("render")]),t._v(" 函数不会渲染")]),t._v(" "),a("p",[t._v("当组件从页面中移除时,在卸载之前会触发 "),a("code",[t._v("componentWillUnmount")]),t._v(" 函数,该函数常常用于组件销毁时调用,清理无效的定时器 "),a("code",[t._v("timer")]),t._v("，取消未完成的网络("),a("code",[t._v("Ajax")]),t._v(")请求,清理已注册的订阅")]),t._v(" "),a("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}}),t._v(" "),a("footer-FeedBack")],1)}),[],!1,null,null,null);s.default=e.exports}}]);