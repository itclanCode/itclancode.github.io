(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1090:function(e,v,_){e.exports=_.p+"assets/img/redux-01.c61249d8.jpg"},1091:function(e,v,_){e.exports=_.p+"assets/img/redux-02.31c8509c.jpg"},1092:function(e,v,_){e.exports=_.p+"assets/img/redux-03.6fe5aa7e.jpg"},1093:function(e,v,_){e.exports=_.p+"assets/img/redux-04.38098ef8.jpg"},1094:function(e,v,_){e.exports=_.p+"assets/img/redux-05.aede3691.jpg"},1928:function(e,v,_){"use strict";_.r(v);var t=_(12),s=Object(t.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"理解-redux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#理解-redux"}},[e._v("#")]),e._v(" 理解 Redux")]),e._v(" "),t("h2",{attrs:{id:"快速导航"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[e._v("#")]),e._v(" 快速导航")]),e._v(" "),t("TOC"),e._v(" "),t("div",{attrs:{align:"center"}},[t("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:_(1090),alt:"Redux"}})]),e._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),t("p",[e._v("在 React 中,数据流是单向的,并且是不可逆的,这其实,也很好理解,之所以这么设计,是因为组件复用的特点")]),e._v(" "),t("p",[t("strong",[e._v("父(外部)组件向子(内部)组件传递数据是通过自定义属性 props 值的方式进行实现的,并且在子组件内部通过"),t("code",[e._v("this.props")]),e._v("进行获取,它并不能直接被修改,如果想要修改,那么得通过 React 内置的一个"),t("code",[e._v("setState")]),e._v("的方法进行触发")])]),e._v(" "),t("p",[e._v("而"),t("strong",[e._v("子组件想要传递数据给父组件,是通过调用父组件的方法进行通信")])]),e._v(" "),t("p",[e._v("一个组件可能存在着很多状态,组件之间有时需要进行通信,对于多个组件状态维护,如果依旧用原来的方式,那么就比较复杂了的")]),e._v(" "),t("p",[e._v("那么 Redux 正好解决了这一问题.个人觉得,Redux 学起来很抽象,的确是块硬骨头,但是高山始终是要越过的")]),e._v(" "),t("p",[e._v("下面就一起来学习下 Redux 的")]),e._v(" "),t("p",[e._v("您将在本文中学习到")]),e._v(" "),t("ul",[t("li",[e._v("Redux 是什么")]),e._v(" "),t("li",[e._v("Redux 的使用场景以及与不使用 Redux 的灵魂对比")]),e._v(" "),t("li",[e._v("Redux 的工作流程")]),e._v(" "),t("li",[e._v("Redux 的设计基本原则")])]),e._v(" "),t("p",[e._v("本篇虽不涉及代码层面上的,但是对后续编码 Redux 非常重要,磨刀不误砍柴工")]),e._v(" "),t("h2",{attrs:{id:"redux-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redux-是什么"}},[e._v("#")]),e._v(" Redux 是什么?")]),e._v(" "),t("p",[t("strong",[e._v("官方解释:")]),e._v(" "),t("code",[e._v("JavaScript")]),e._v(" 应用程序的可预测的状态容器(一个管理应用程序状态的框架）")]),e._v(" "),t("p",[t("strong",[e._v("通俗一点")]),e._v(":管理组件公共数据状态的容器(仓库/区域)")]),e._v(" "),t("p",[t("strong",[e._v("解决的问题")]),e._v(": 当应用组件拥有多个状态,并且组件之间需要共享数据状态时,从原始的组件传递数据的方式中解脱出来,集中管理组件的状态")]),e._v(" "),t("p",[e._v("你可以把 Redux 理解为一个仓库,房产中介.拥有很多共享的房源的一个管理者,后面会有具体的例子")]),e._v(" "),t("h2",{attrs:{id:"redux-的使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redux-的使用场景"}},[e._v("#")]),e._v(" Redux 的使用场景")]),e._v(" "),t("p",[e._v("从上面提到的 "),t("code",[e._v("Redux")]),e._v(" 解决问题可以看出,"),t("strong",[e._v("Redux 只是用来管理和维护组件的状态的")])]),e._v(" "),t("p",[t("code",[e._v("React")]),e._v("开发的模式就是组件化开发,将一个大的应用拆分成若干个小的应用,然后拼接成一个大的应用,而编写一个大小应用就是在编写各个大小组件")]),e._v(" "),t("p",[e._v("而组件的显示形态又取决于它的状态,这不区分于无论是外部的 props 还是内部的 state,而组件之间有时需要共享传递数据,"),t("code",[e._v("Redux")]),e._v("仅仅就是用来管理这些组件的状态的")]),e._v(" "),t("p",[e._v("在一些开发者眼里,项目里要是没有用到"),t("code",[e._v("Redux")]),e._v(",就觉得很 low,要么把 Redux 捧得高高在上,要么说都已经快 0202 年了,都用"),t("code",[e._v("React hook")]),e._v("了,鄙视得不行,个人觉得完全没有必要.")]),e._v(" "),t("p",[e._v("React 与 Redux 本身就是解决两个不同方向的问题,某种程度上讲,React 可以视为 MVC 架构中的视图层 V,而 Redux 则是 model 数据层 M,而 C 层往往是连接视图层和 model 的连接器,往往处理前端数据请求,路由跳转等业务逻辑")]),e._v(" "),t("p",[e._v("即使不用 Redux,照样能做小应用,只是略复杂繁琐一些而已,下面会介绍他们之间的对比")]),e._v(" "),t("p",[e._v("那么对于技术选型,什么时候用 Redux 什么时候不用?")]),e._v(" "),t("p",[e._v("以下是选用"),t("code",[e._v("Redux")]),e._v("的场景:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("项目非常庞大,公共组件与业务组件非常多,用户的使用方式比较复杂")])]),e._v(" "),t("li",[t("p",[e._v("不同身份的用户角色权限管理(例如很多后台管理系统,普通用户,超级管理员,VIP 用户)读,写权限管理等")])]),e._v(" "),t("li",[t("p",[e._v("多个用户之间可以协作实时操作(很多那种在线敏捷协作办公文档工具,多个用户可以实时编辑操作同一份文档等的,例如石墨文档,语雀,confluence.钉钉等的)")])]),e._v(" "),t("li",[t("p",[e._v("需要与服务器大量的交互,或者使用了 webscoket 的,聊天,直播等应用的")])]),e._v(" "),t("li",[t("p",[e._v("视图层 view 需要从多个来源获取数据")])])]),e._v(" "),t("p",[t("strong",[e._v("只要你发现 React 解决不了的问题,遇到多交互,多数据源的,那么就可以考虑使用 Redux 的")])]),e._v(" "),t("p",[t("strong",[e._v("反之,则以下则是没有必要使用 Redux")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("UI 层非常简单,只是用于渲染,无复杂的数据交互,依赖外部的 props 就可以渲染组件")])]),e._v(" "),t("li",[t("p",[e._v("用户的使用方式比较简单,页面之间比较独立,没有互相协作")])]),e._v(" "),t("li",[t("p",[e._v("与服务器之间没有大量交互")])])]),e._v(" "),t("p",[e._v("当你发现使用"),t("code",[e._v("React")]),e._v("实在解决不了的问题,在各个组件之间传递数据非常复杂,很痛苦时,那么就可以考虑使用"),t("code",[e._v("Redux")]),e._v("了的,只要你 hold 住,没有所谓的高大上技术,只有适合自己业务的技术")]),e._v(" "),t("p",[e._v("盲目引入 Redux 只会增加项目的复杂度,引入新的技术应该是循序渐进的")]),e._v(" "),t("h2",{attrs:{id:"不使用-redux-与使用-redux-的灵魂对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不使用-redux-与使用-redux-的灵魂对比"}},[e._v("#")]),e._v(" 不使用 Redux 与使用 Redux 的灵魂对比")]),e._v(" "),t("p",[e._v("下面这张组件树状态图的对比就很好的解释了使用 Redux 与不使用 Redux 的区别")]),e._v(" "),t("div",{attrs:{align:"center"}},[t("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:_(1091),alt:"Redux"}})]),e._v("\n一个React应用(例如:pc网站,手机app应用,后台管理系统等用React技术栈构建的应用)其实就是一颗由组件构成的树\n"),t("p",[e._v("如上图所示,在这颗树的根结点,最顶层的组件就是该应用的本身,由于组件都是以树结构组织起来的,当每个组件被渲染时,它都会递归地渲染下级组件")]),e._v(" "),t("div",{attrs:{align:"center"}},[t("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:_(1092),alt:"Redux"}}),e._v(" "),t("p",[e._v("根节点就是最顶层的组件,该应用本身")])]),e._v(" "),t("div",{attrs:{align:"center"}},[t("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:_(1093),alt:"Redux"}}),e._v(" "),t("p",[e._v("一个大的应用是由各个组件拼装而成的")])]),e._v("\n假设红色圆圈代表的是一个应用的子组件,如果想要把该红色圆圈组件的状态数据传递给父级或者非父级组件,它是通过调用父组件的方法来实现,这样一层一层往上传,如果组件树很庞大的话,那么就会变得非常繁琐\n"),t("p",[e._v("在小型项目中,Redux 并不是必需的,但是使用 Redux 却是一劳永逸的,管理组件的状态方便得多,对于大型应用来说,单纯使用原始的数据传递方式")]),e._v(" "),t("p",[e._v("那么组件之间的传值会变得非常复杂,如果要做一个大型的应用,那么就需要在 React 的基础上配置一个数据层的框架进行结合的使用")]),e._v(" "),t("p",[e._v("假设红色圆圈代表的是一个应用的子组件,如果想要把该红色圆圈组件的状态数据传递给父级或者非父级组件,它是通过调用父组件的方法来实现,这样一层一层往上传,如果组件树很庞大的话,那么就会变得非常繁琐")]),e._v(" "),t("p",[e._v("在小型项目中,Redux 并不是必需的,但是使用 Redux 却是一劳永逸的,管理组件的状态方便得多,对于大型应用来说,单纯使用原始的数据传递方式")]),e._v(" "),t("p",[e._v("那么组件之间的传值会变得非常复杂,如果要做一个大型的应用,那么就需要在 React 的基础上配置一个数据层的框架进行结合的使用")]),e._v(" "),t("p",[e._v("如果改为右边的 Redux 处理方式,将红色圆圈组件的状态数据放到一个 Store 仓库当中集中进行管理,哪个组件需要的话,直接派发给哪个组件就可以了的.")]),e._v(" "),t("p",[t("strong",[e._v("在 Redux 中,要求把组件的数据放到公共的存储仓库(区域)当中,让组件尽可能的减少状态数据存储,换而言之,所有组件自身内部状态数据都不放在 state 里面了,把它放到 Store 这样的一个存储仓库当中去")])]),e._v(" "),t("p",[e._v("其实"),t("strong",[e._v("本质上来说,是放到 reducer 里面去管理,Store 从 Reducer 中拿到返回的数据 state,最后供外部组件的取用")])]),e._v(" "),t("p",[e._v("当红色圆圈组件想要改变数据传递给其他组件时,只需要去改变 Store 里面的存储红色圆圈组件的数据就可以了")]),e._v(" "),t("p",[e._v("一旦 Store 公共存储的状态数据发生改变了的,由于其他组件是公用 Store 的数据,那么其他组件就会感知到 Store 的数据发生了改变,从而自身组件也会跟着改变")]),e._v(" "),t("p",[e._v("只要 Store 公共存储区域的数据发生改变,凡是共用了 Store 里面的数据的组件都会重新的取数据")]),e._v(" "),t("p",[e._v("这样一来,红色圆圈组件的数据就非常容易的传递给其他组件了,无论是它的父级组件还是兄弟,非兄弟组件的")]),e._v(" "),t("p",[t("strong",[e._v("Redux 就是把组件的数据放到一个公共的区域(仓库)中进行存储,当改变 Store 存储区域里面的数据时,其他组件如果用到了公共区域的数据,那么就会感知到数据的变化,它会自动的更新取 Store 中最新的数据")])]),e._v(" "),t("p",[e._v("这样话,无论你的应用组件嵌套得有多么复杂,多么深,走的流程都是一样的,组件之间并不会干扰,低耦合的效果")]),e._v(" "),t("p",[e._v("当组件一修改,把修改的数据放到 Store 当中,而其他组件又从 Store 当中再来取,这样的话,组件与组件之间并不是直接进行通信的,是通过这么一个 store 中间角色来实现数据的传递共享的.")]),e._v(" "),t("p",[e._v("这样的话,组件的数据传递就简单多了的,也避免了组件与组件之间频繁通信,容易产生混乱的问题")]),e._v(" "),t("p",[t("strong",[e._v("Redux 其实是 Flux 数据框架的一个替代演进,同样强调的是单向的数据源")]),e._v(","),t("strong",[e._v("保持状态只具备读的能力")]),e._v(","),t("strong",[e._v("而数据改变只能通过纯函数完成基本")]),e._v(",这和原先中 React 的 UI=render(data)完全吻合.")]),e._v(" "),t("p",[e._v("React 与 Redux 是两个独立的框架,前者是用于组件视图层的渲染,而后者是管理组件的数据")]),e._v(" "),t("h2",{attrs:{id:"redux-的工作流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redux-的工作流程"}},[e._v("#")]),e._v(" Redux 的工作流程")]),e._v(" "),t("p",[e._v("现在已经知道了使用 Redux 与不使用 Redux 的区别,那么现在是时候来了解一下 Redux 的工作流程了,下面这个流程图对于理解 Redux 很重要 先附上一张 Redux 工作流的流程图:以后会在代码中逐步的体现")]),e._v(" "),t("div",{attrs:{align:"center"}},[t("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:_(1094),alt:"Redux"}})]),e._v(" "),t("p",[e._v("上面的 Redux 工作流图中,以中间为准:包括了"),t("code",[e._v("Store")]),e._v(","),t("code",[e._v("ReactComponents")]),e._v(","),t("code",[e._v("Actions Creators")]),e._v(",以及"),t("code",[e._v("Reducers")])]),e._v(" "),t("p",[e._v("其中 "),t("strong",[e._v("Store 代表的就是负责组件存储所有公共状态的数据,全局只有一个 Store")]),e._v(".(这里你可以把它理解为类似生活当中中介公司管理房源的仓库(数据库)的区域经理)")]),e._v(" "),t("p",[t("strong",[e._v("实质上")]),e._v(":"),t("code",[e._v("store")]),e._v(" 就是把 "),t("code",[e._v("Reducer")]),e._v("关联到一起的一个对象,"),t("strong",[e._v("它提供 dispatch(action)方法更新 state,以及 getState 方法获取 state")])]),e._v(" "),t("p",[t("strong",[e._v("React Components")]),e._v(":指的是页面上的任意一个组件(你可以理解为小区公寓楼里的每个房间,而你就是住在里面的租房用户)")]),e._v(" "),t("p",[t("strong",[e._v("Actions Creators")]),e._v(":具体要干什么事情,触发的动作,可以看做一个交互动作,"),t("strong",[e._v("改变应用状态或 view 的更新,都需要通过触发 action 来实现,Action 的执行结果就是"),t("code",[e._v("调用 Dispatch")]),e._v(" 来处理相应的事情,实现页面视图 view 的更新,唯一的办法就是调用 dispatch 派发 action")])]),e._v(" "),t("p",[e._v("它是一个 "),t("code",[e._v("javascript 对象")]),e._v(",是用来描述事件的行为的,对象里记录了相关的信息,例如:todolist 的添加,删除 list 的这个具体操作,就是一个 "),t("code",[e._v("action")])]),e._v(" "),t("p",[e._v("(当你想要提出换房的时候,跟中介公司管理房源的经理说,你要换个带有沙发,电视,配备厨房的两室一厅的房子,因为增加人口了,现有的房子住不下了的,你要做的什么事情,提出的条件信息就是数据),这个动作可以理解为 "),t("code",[e._v("actions creators")])]),e._v(" "),t("p",[e._v("在你提出换房的时候,房产中介公司经理虽然手握很多房源,但是他也没有办法记得所有的房子相关信息,它需要去数据库(仓库)里去查,你常常看到中介小哥带你看房的时候")]),e._v(" "),t("p",[e._v("手上拿一个单子,Excel 表格跟你介绍房源的时候,你可以把这个单子,Excel 表格理解为一个实时记录本,只要有房子出租去了,这个表格就会实时更新(新旧信息的核实对比),返回一张新的房源信息表单给房产中介的经理")]),e._v(" "),t("p",[t("strong",[e._v("Reducer")]),e._v(":可以把上面的用于实时更新记录房源信息的记录本称为 Reducer,它只用作于根据旧的房源与提出新的需求(动作),总是会返回一张新的记录本给房产中介经理")]),e._v(" "),t("p",[t("strong",[e._v("实质上")]),e._v(":"),t("code",[e._v("Reducer")]),e._v("是"),t("strong",[e._v("根据 action 发出的 type(动作类型)来做什么事")]),e._v("("),t("strong",[e._v("返回最新的 state 给 store 等逻辑操作")]),e._v(")")]),e._v(" "),t("p",[e._v("现在归纳一下整个流程:")]),e._v(" "),t("p",[e._v("我(租客/组件"),t("code",[e._v("React Component")]),e._v(")想要换一个 xxx 信息的房子("),t("code",[e._v("Actions creators")]),e._v(",具体要做的什么事情),房产中介经理收到了请求,他得根据你提供的一些需求信息去找相应的房源信息")]),e._v(" "),t("p",[e._v("但是房源太多,需要借助一个实时的记录本去查看符合条件的房源信息,当查到符合条件的信息后,这个记录本("),t("code",[e._v("Reducer")]),e._v(")把最新的信息会返回给房产经理("),t("code",[e._v("Store")]),e._v("),最终把信息返回给用户"),t("code",[e._v("React Components")]),e._v(",实现房子替换的更新")]),e._v(" "),t("p",[e._v("虽然文字啰嗦了点:但是 Redux 就是这么一回事,我要换大房子,房产中介经理听到后,它去记录本里面去查,查到之后,返回到房产中介经理,然后最终在返回给我,实现房子的替换")]),e._v(" "),t("p",[e._v("那么转换为代码理解:")]),e._v(" "),t("p",[e._v("页面上的一个组件,想要获取更新 Store 中的数据,跟 Store 说,我点击这个按钮,要更新这个组件的数据,要干什么事情,做的这个具体动作就是"),t("code",[e._v("Actions Creators")]),e._v(",这时会派发("),t("code",[e._v("dispatch")]),e._v(") 该动作("),t("code",[e._v("action")]),e._v(")给"),t("code",[e._v("Store,Store")]),e._v("会去"),t("code",[e._v("Reducer")]),e._v("里面去查一下,"),t("code",[e._v("Reducer")]),e._v("会返回一个新的结果给"),t("code",[e._v("Store")]),e._v(","),t("code",[e._v("Store")]),e._v("拿到最新的数据结果后,返回给页面上的组件,实现页面组件的更新")]),e._v(" "),t("p",[e._v("大家可以先仔细体会上面这段文字的含义,在后续的实例代码中,在回过头来对比着代码与文字进行理解的,后续还会在拿出来的")]),e._v(" "),t("h2",{attrs:{id:"redux-的设计基本原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redux-的设计基本原则"}},[e._v("#")]),e._v(" Redux 的设计基本原则")]),e._v(" "),t("p",[e._v("在 Redux 中有以下几个设计基本原则")]),e._v(" "),t("ul",[t("li",[e._v("单向数据流")]),e._v(" "),t("li",[e._v("唯一数据源")]),e._v(" "),t("li",[e._v("保持状态只读")]),e._v(" "),t("li",[e._v("数据的改变只能通过纯函数 reducer 来完成")])]),e._v(" "),t("p",[t("strong",[e._v("单向数据流")]),e._v(": 这个其实与 props 不能直接被修改一样,在父组件向子组件传递数据时是通过属性的方式进行传递的,而子组件内部通过"),t("code",[e._v("this.props")]),e._v("进行接收,但是外部传递过来的"),t("code",[e._v("props")]),e._v("属性不能直接被修改,若想要修改,需要借助"),t("code",[e._v("React")]),e._v("内置的"),t("code",[e._v("setState")]),e._v("方法进行触发")]),e._v(" "),t("p",[t("strong",[e._v("唯一数据源")]),e._v(": 它指的是组件的应用状态数据应该只存在唯一的 Store 上,这一点是不同于 Flux 的,在 Flux 中允许有多个 store。而在 Redux 中整个组件的应用只保持一个 Store，所有组件的数据源就是这个 Store 上的状态,可以将它 Store 理解为一个全局的变量对象")]),e._v(" "),t("p",[t("strong",[e._v("保持状态 state 可读")]),e._v(": 不能直接的去修改状态,要修改 Store 的状态,必须要通过派发("),t("code",[e._v("dispatch")]),e._v(")一个"),t("code",[e._v("action")]),e._v("对象去完成")]),e._v(" "),t("p",[e._v("然后组件渲染的对应的界面要更改的话,实际更改的就是组件的状态,如果状态都是只能读不能修改的话,那么界面就不会更新变化了")]),e._v(" "),t("p",[e._v("想要更改用户界面的渲染,就要改变组件的应用状态,但时改变组件状态的方法不是直接去修改状态上的值,而是创建一个新的状态对象返回给 Redux,由 Redux 完成新的状态的组装")]),e._v(" "),t("p",[e._v("组件数据的改变只能通过纯函数完成")]),e._v(" "),t("p",[e._v("所谓的"),t("strong",[e._v("纯函数,就是指 Reducer")]),e._v(",而 Redux 某种程度上讲,它是 Reducer+Flux 的组合,其中这 Redux 的 Red 代表就是 Reducer,而 ux 就是 Flux,但是又不同于 Flux,它更像是 Flux 的一个实现,演进。"),t("strong",[e._v("它是为了描述 Action 如何改变组件的状态的")])]),e._v(" "),t("p",[e._v("这也是为什么 Redux 这个名称比较抽象的原因,"),t("strong",[e._v("其中 Reducer 类似一个数组中的迭代器函数 reduce")])]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("点击即可查看")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var arr = [1,2,3,4,5,6]\nvar sum = arr.reduce(function reducer(prevValue, currentValue,index,array){\n    console.log(`上一次调用回调返回的值(或者是提供的初始值): ${prevValue},数组中当前被处理的元素: ${currentValue}, 当前元素在数组中的索引: ${index}, 调用的数组: ${array}`);\n  return prevValue+currentValue;\n},0)\nconsole.log(sum); // 21\n\nVM1742:3 上一次调用回调返回的值(或者是提供的初始值): 0,数组中当前被处理的元素: 1, 当前元素在数组中的索引: 0, 调用的数组: 1,2,3,4,5,6\nVM1742:3 上一次调用回调返回的值(或者是提供的初始值): 1,数组中当前被处理的元素: 2, 当前元素在数组中的索引: 1, 调用的数组: 1,2,3,4,5,6\nVM1742:3 上一次调用回调返回的值(或者是提供的初始值): 3,数组中当前被处理的元素: 3, 当前元素在数组中的索引: 2, 调用的数组: 1,2,3,4,5,6\nVM1742:3 上一次调用回调返回的值(或者是提供的初始值): 6,数组中当前被处理的元素: 4, 当前元素在数组中的索引: 3, 调用的数组: 1,2,3,4,5,6\nVM1742:3 上一次调用回调返回的值(或者是提供的初始值): 10,数组中当前被处理的元素: 5, 当前元素在数组中的索引: 4, 调用的数组: 1,2,3,4,5,6\nVM1742:3 上一次调用回调返回的值(或者是提供的初始值): 15,数组中当前被处理的元素: 6, 当前元素在数组中的索引: 5, 调用的数组: 1,2,3,4,5,6\nVM1742:6 21\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br")])])]),e._v(" "),t("p",[e._v("上面的代码中是做一个简单的累加,"),t("code",[e._v("reducer")]),e._v("函数接收四个参数,第一个参数是上一次调用返回的结果,第二个参数是当前被处理的元素的值,第三个是当前元素在数组中的索引,第四个是调用的原数组")]),e._v(" "),t("p",[e._v("这个 reduce 的方法接收一个函数作为累加器,reduce 为数组中的每一个元素依次执行回调函数")]),e._v(" "),t("p",[e._v("而在 Redux 中,每个 reducer 纯函数如下所示")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("reducer(state, action)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("其中"),t("code",[e._v("reducer")]),e._v("函数的第一个参数"),t("code",[e._v("state")]),e._v("是指当前的状态值,而第二个参数"),t("code",[e._v("action")]),e._v("是接收到的 action 对象")]),e._v(" "),t("p",[e._v("而"),t("strong",[e._v("reducer 函数要做的事情就是根据 state 和 action 的值产生一个新的对象返回给 Store")]),e._v(","),t("strong",[e._v("它是定义整个组件应用状态如何更改,根据 Action 动作行为去更新 Store 中的状态")]),e._v("\n::: warn 注意\nreducer 必须是纯函数,换句话说,"),t("strong",[e._v("reducer 函数的返回结果必须完全由参数 state 和 action 决定")]),e._v(",而且不产生任何的副作用,也不能修改参数 state 和 action 对象\n:::")]),e._v(" "),t("p",[e._v("如下一个典型的 reducer 示例,reducer 只是一个函数名称,你是可以任意取的,如下一个计数的 counter 纯函数")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function counter(state = 0, action) {\n  switch (action.type) {\n  case 'INCREMENT':\n    return state + 1;\n  case 'DECREMENT':\n    return state - 1;\n  default:\n    return state;\n  }\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])]),t("p",[e._v("从上面的例子看得出,"),t("code",[e._v("reducer")]),e._v("函数不光接受"),t("code",[e._v("action")]),e._v("为参数,还接受"),t("code",[e._v("state")]),e._v("参数,也就是说,"),t("code",[e._v("Redux")]),e._v("中的"),t("code",[e._v("reduce")]),e._v("函数只负责计算组件的状态,却不负责存储组件的状态")]),e._v(" "),t("p",[e._v("在"),t("code",[e._v("Reducer")]),e._v("函数中往往包含"),t("code",[e._v("action.type")]),e._v("为判断条件的"),t("code",[e._v("if-else")]),e._v("或者"),t("code",[e._v("switch")]),e._v("语句")]),e._v(" "),t("p",[t("strong",[e._v("根据 action,总是返回一个新的状态,这个新的状态的结果返回给 store")]),e._v(","),t("code",[e._v("store")]),e._v("就会将原来上一次的 state 进行替换更新,最终达到改变 state 这么一个过程")]),e._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("本节主要介绍了 Redux,它与 React 是两个独立的产品,两个框架做的事情的方向不一样,React 是用作于视图层的渲染,也相当于 MVC 中的 V 层,而 Redux 它是用于管理组件公共数据的 Model 层,更近一步讲,它是 Reducer 与 Flux 的一种结合,改进.")]),e._v(" "),t("p",[e._v("对比了使用 Redux 与不使用 Redux 的区别,以及 Redux 的工作流,最后 Redux 的设计基本原则,其中前两个,个人觉得对于理解 Redux 是非常重要的")]),e._v(" "),t("p",[e._v("当然现在也可以使用高阶组件,"),t("code",[e._v("React hooks")]),e._v("的写法,可以不用"),t("code",[e._v("Redux")]),e._v("了的,也有类似于"),t("code",[e._v("dva")]),e._v("这样的框架,基于 Redux 以及中间件(Redux-saga)的数据流方案")]),e._v(" "),t("p",[e._v("但是 Redux 依然是主流,只要你能够应付项目中开发需求,哪个用得爽就用哪个的,Redux 虽然确实是绕了一些,有时候在各个文件之间进行来回切换,对于模块化的拆分,如果不是很清楚 Redux 的使用流程,无论是后续维护还是迭代升级,都挺痛苦的")]),e._v(" "),t("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}}),e._v(" "),t("footer-FeedBack")],1)}),[],!1,null,null,null);v.default=s.exports}}]);