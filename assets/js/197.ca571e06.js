(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{1120:function(a,e,s){a.exports=s.p+"assets/img/guide01.d43b2517.jpg"},1121:function(a,e,s){a.exports=s.p+"assets/img/guide02.63771ffe.jpg"},1924:function(a,e,s){"use strict";s.r(e);var t=s(12),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"create-react-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-react-app"}},[a._v("#")]),a._v(" create-react-app")]),a._v(" "),t("h2",{attrs:{id:"快速导航"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[a._v("#")]),a._v(" 快速导航")]),a._v(" "),t("TOC"),a._v(" "),t("h2",{attrs:{id:"全文导图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全文导图"}},[a._v("#")]),a._v(" 全文导图")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:s(1120),alt:"create-react-app"}})]),a._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("如今,对于现今前端热门的三大框架"),t("code",[a._v("Vue")]),a._v(","),t("code",[a._v("Angular")]),a._v(","),t("code",[a._v("React")]),a._v(",对于 web 开发者来说,早已不是什么陌生的词")]),a._v(" "),t("p",[a._v("尽管三者实现业务最终的目的都能达成一致,但是各有特色,其中任何一框架,个人觉得,都博大精深,可圈可点,要学习的内容有很多,我也仅仅是浅尝辄止而已.")]),a._v(" "),t("p",[a._v("有时候,因为工作项目的需要,自己在切换各个技术栈的时候,只要一段时间没有用,就有些陌生,说到底不得不承认自己功力不够")]),a._v(" "),t("p",[a._v("本文并不是什么教程,只是作为自己学习过程中的一些总结和思考,一起学习,共同成长")]),a._v(" "),t("h2",{attrs:{id:"react-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react-是什么"}},[a._v("#")]),a._v(" React 是什么?")]),a._v(" "),t("p",[a._v("用于构建用户界面的"),t("code",[a._v("javascript库")]),a._v(",MVC 架构中的 V 层")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("声明式编程")]),a._v("(想要实现什么目的,应该做什么,但是不指定具体怎么做,如下代码所示)")])]),a._v(" "),t("p",[a._v("面向数据编程,只要把数据构建好了就可以了的,react 会自动的帮你去构建网站,把数据可以理解为图纸,图纸做好了之后,React 会自动的结合这张图纸帮助你去构建这个大厦,去构建整个页面的 DOM")]),a._v(" "),t("p",[a._v("数据是什么,页面就显示什么,这种声明式的开发帮助我们节约掉大量的 DOM 操作,这是 React 编程带来的一个优势)")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('/**\n*\n* 需求:编写一个函数，处理传入包含大写字符串的数组，返回包含相同小写字符串的数组\n* 声明式编程实现toLowerCase\n* 输入数组的元素传递给map函数，然后返回包含小写值的新数组\n*/\n\nlet toLowerCase = arr => arr.map(function(item) {\n   return item.toLowerCase();\n})\n\nlet aToCasesA = [\'SUIBICHUANJI\',\'ITCLANCODER\', \'ZHONGGUO\', \'BEIJING\', \'AGE\'];\nlet aToCasesB = toLowerCase(aToCasesA);\nconsole.log(aToCasesA); // ["SUIBICHUANJI", "ITCLANCODER", "ZHONGGUO", "BEIJING", "AGE"]\nconsole.log(aToCasesB); // ["suibichuanji", "itclancoder", "zhongguo", "beijing", "age"]\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br")])]),t("ul",[t("li",[t("strong",[a._v("命令式编程")]),a._v("(类似"),t("code",[a._v("jQuery")]),a._v("操作"),t("code",[a._v("DOM")]),a._v(",创建一个页面,你要一点点的告诉 DOM 怎么去挂载,要怎么去做,JQ,原生也好都是命令式编程，都是在做 DOM 操作,获取元素,绑定元素,执行操作)")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('/*\n* 命令式编程:按照顺序一步一步的实现\n* 首先，创建一个空数组用于保存结果，然后遍历输入数组的所有元素，\n将每项元素的小写值存入空数组中，然后返回结果数组\n*/\n\n\nvar aToCasesA = [\'SUIBICHUANJI\', \'ITCLANCODER\', \'ZHONGGUO\', \'BEIJING\', \'AGE\'];\nfunction toLowerCase(arr) {\n     var res = [];\n     for(var i = 0; i < arr.length; i++) {\n         res.push(arr[i].toLowerCase());\n     }\n    return res;\n}\nvar aToCasesB = toLowerCase(aToCasesA);\nconsole.log(aToCasesA); // ["SUIBICHUANJI", "ITCLANCODER", "ZHONGGUO", "BEIJING", "AGE"]\nconsole.log(aToCasesB); // ["suibichuanji", "itclancoder", "zhongguo", "beijing", "age"]\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br")])]),t("ul",[t("li",[t("strong",[a._v("函数式编程")]),a._v(":写的都是一些函数，带来的好处,是维护起来比较容易,当一个函数比较大的时候,可以进行拆分，每一个函数各司其职,便于前端自动化测试(数组中的一些 map,reduce,find 等方法的应用就是函数式编程)")]),a._v(" "),t("li",[t("strong",[a._v("视图层框架")]),a._v("(在大型项目中,光用 React 是不行的,还得配合一些数据层的框架帮助我们解决一些组件之间的父子组件传值的问题,React 把自己定义成一个视图层的框架,并不是什么问题都能解决,只是帮助你解决数据和页面渲染的问题，至于组件之间怎么传值，交给其他组件来做")])]),a._v(" "),t("p",[a._v("在小型项目中,可以借助"),t("code",[a._v("React")]),a._v("中的父子组件传值就可以,但是在大型项目里,单单来使用"),t("code",[a._v("React")]),a._v("是不够的,比如说:"),t("code",[a._v("flux")]),a._v("，"),t("code",[a._v("redux")]),a._v(","),t("code",[a._v("mobox")]),a._v("这样的数据层框架),React 并不是一个完整的框架,所以它学习的成本也就相对高些的.")]),a._v(" "),t("h2",{attrs:{id:"react-能做什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react-能做什么"}},[a._v("#")]),a._v(" React 能做什么?")]),a._v(" "),t("ul",[t("li",[a._v("写 web 应用(网站,pc 端,移动端等,例如:知乎,简书等)")]),a._v(" "),t("li",[a._v("桌面客户端应用软件(类似 vscode 或者一些报表软件携带窗口的应用)")]),a._v(" "),t("li",[a._v("webApp--react native,混合开发应用")]),a._v(" "),t("li",[a._v("服务器端应用(java,php 等后端语言能干的事情,react 也能干)")])]),a._v(" "),t("p",[a._v("只有你想不到的应用,没有实现不了的技术...")]),a._v(" "),t("h2",{attrs:{id:"初始化一个-react-项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化一个-react-项目"}},[a._v("#")]),a._v(" 初始化一个 React 项目")]),a._v(" "),t("p",[t("strong",[a._v("前置条件")])]),a._v(" "),t("ul",[t("li",[a._v("命令行坏境("),t("code",[a._v("windows")]),a._v("中"),t("code",[a._v("DOS CMD")]),a._v("坏境或者"),t("code",[a._v("git")]),a._v("工具),苹果"),t("code",[a._v("Mac")]),a._v("电脑可用自带的 Terminal,对于 Linux 用户,命令行工作坏境不必赘述,这里以 Windows 开发坏境为例")]),a._v(" "),t("li",[a._v("下载安装"),t("code",[a._v("NodeJS")]),a._v("(React 本身并不依赖 Node.js 但是项目中所需要的依赖包/工具,需要"),t("code",[a._v("Node.js")]),a._v("的支持),本地安完 Node,默认也就安装了 npm 包管理工具")])]),a._v(" "),t("p",[t("code",[a._v("cmd")]),a._v("或者"),t("code",[a._v("git")]),a._v("命令行下，检测"),t("code",[a._v("Node")]),a._v("与"),t("code",[a._v("npm")]),a._v("是否安装成功,如果"),t("code",[a._v("npm")]),a._v("下载包很慢,也可以使用国内淘宝的"),t("code",[a._v("cnpm")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("D:\\公开课\\2019>node -v\nv10.13.0\nD:\\公开课\\2019>npm -v\n6.4.1\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("当然,你也可以安装"),t("code",[a._v("cnpm")]),a._v(",使用国内的地止,下载依赖包会快一些的")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ npm install -g cnpm --registry=https://registry.npm.taobao.org\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("安装完"),t("code",[a._v("cnpm")]),a._v("后与"),t("code",[a._v("npm")]),a._v("使用并没有什么区别")]),a._v(" "),t("ul",[t("li",[a._v("chrome 浏览器(应用商店里下载"),t("code",[a._v("React Developer Tools")]),a._v("调试工具)")])]),a._v(" "),t("h2",{attrs:{id:"create-react-app-脚手架工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-react-app-脚手架工具"}},[a._v("#")]),a._v(" create-react-app 脚手架工具")]),a._v(" "),t("p",[t("code",[a._v("create-react-app")]),a._v("(创建 react 应用),它是一个通过 "),t("code",[a._v("npm")]),a._v("发布的安装包,也是一个命令,在安装好"),t("code",[a._v("nodejs")]),a._v("后,在命令终端下执行 "),t("code",[a._v("npm")]),a._v("或者 "),t("code",[a._v("cnpm")]),a._v("命令,全局安装 "),t("code",[a._v("create-react-app")]),a._v(" 这个脚手架工具")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("D:\\公开课\\2019 npm install --global create-react-app\n或者\nD:\\公开课\\2019 cnpm install -g create-react-app\n其中-g是--global的缩写\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("在安装好"),t("code",[a._v("create-react-app")]),a._v("脚手架工具后执行 "),t("code",[a._v("create-react-app")]),a._v("命令,这个命令会在当前目录下创建指定的参数名的应用目录")]),a._v(" "),t("p",[a._v("创建 react 项目应用有三种方式")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("方式 1")]),a._v(": "),t("code",[a._v("create-react-app")]),a._v(" 应用名称(推荐使用这种方式)")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("D:\\公开课\\2019 create-react-app myfirstreactapp\nD:\\公开课\\2019 cd myfirstreactapp\nD:\\公开课\\2019 npm start\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[t("strong",[a._v("方式 2")]),a._v(": npm init react-app my-first-react-app")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("D:\\公开课\\2019 npm init react-app myfirstreactapp\nD:\\公开课\\2019 cd myfirstreactapp\nD:\\公开课\\2019 npm start\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[t("strong",[a._v("方式 3")]),a._v(":使用 yarn, yarn create react-app my-react-app")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("D:\\公开课\\2019 yarn create react-app myfirstreactapp\nD:\\公开课\\2019 cd myfirstreactapp\nD:\\公开课\\2019 npm start\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[t("strong",[a._v("方式 4")]),a._v(": "),t("code",[a._v("npx create-react-app")]),a._v("应用名称,与方式一是等价的,当你运行 "),t("code",[a._v("npx create-react-app my-app")]),a._v("时，它会自动安装最新版本的"),t("code",[a._v("Create React App")]),a._v(",如果你之前全局安装过 "),t("code",[a._v("create-react-app")]),a._v(",请全局卸载")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npx create-react-app myfirstreactapp\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("注意事项")]),a._v(" "),t("ul",[t("li",[a._v("应用名称不能包含大写字母(不能驼峰式,只能是小写字母,例如如下所示")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('D:\\公开课\\2019 create-react-app myFirstReactApp X\nD:\\公开课\\2019 a project called "myFirstReactApp" because of npm naming restrictions\n* name can no longer contain capital letters\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("ul",[t("li",[a._v("当使用"),t("code",[a._v("npx create-react-app")]),a._v("命令创建 react 应用失败,更改淘宝镜像,替换成国内下载，更改完后,在使用"),t("code",[a._v("npm")]),a._v("或者"),t("code",[a._v("cnpm")]),a._v("以及一些其他命令时,下载依赖包会快很多")])])]),a._v(" "),t("p",[a._v("查看 npm 的镜像源")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("D:\\公开课\\2019 npm config get registry\n// 默认是：https://registry.npmjs.org/\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("修改成淘宝的镜像源")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("D:\\公开课\\2019 npm config set registry https://registry.npm.taobao.org\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("create-react-app 创建项目")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("D:\\公开课\\2019 npx create-react-app 应用名称\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("以上的命令可以创建 react 项目应用,在这个目录下回自动的创建一个应用框架的代码结构")]),a._v(" "),t("p",[a._v("你可以在 src 中创建子目录。为了加快重建速度")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),t("p",[a._v("Webpack 只处理 src 中的文件。你需要将任何 JS 和 CSS 文件放在 src 中，否则 Webpack 将不会看到它们的")])]),a._v(" "),t("p",[a._v("借助这个 "),t("code",[a._v("create-react-app")]),a._v("工具创建的应用程序可以避免那些麻烦的手工配置工作,"),t("code",[a._v("react")]),a._v("技术依赖 webpack 工具,这也是个技术")]),a._v(" "),t("p",[a._v("当一切就绪好后,执行 npm start 命令会启动一个本地开发模式的服务,同时会自动的打开一个网页,指向本地地止http://localhost:3000 如下图所示,以你自己启动的端口号为准\n"),t("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:s(1121),alt:"create-react-app"}}),a._v("\n接下来用你喜欢的代码编辑器打开项目:这将是本节最重要的内容")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("myfirstreactapp\n├── package-lock.json // 锁定安装时的包的版本号，并且需要上传到git，以保证其他人在npm install时大家的依赖能保证一致,对整个文件的描述,为的是让开发者知道只要你保存了源文件，到一个新的机器上、或者新的下载源，只要按照这个package-lock.json所标示的具体版本下载依赖库包，就能确保所有库包与你上次安装的完全一样，它是npm install自动生成的一文件\n├── package.json // 对整个应用程序的描述,应用名称,版本号,一些依赖包,以及项目的启动,打包，测试配置，锁定大版本\n├── public\n│ ├── favicon.ico // icon图标\n│ ├── index.html // 主页面,首页模板\n│ └── manifest.json // 定义成app应用的方式来使用,快捷方式的图标,可以配置icons，定义快捷方式的图标,定义快捷方式跳转的网址到哪里,主题颜色,用于指定应用的显示名称、图标、应用入口文件地址及需要使用的设备权限等信息，类似于android里面的manifest.xlm配置文件\n├── README.md // 说明文档\n└── src // 源码目录\n├── App.css // App应用组件的样式\n├── App.js // App应用组件的逻辑代码,构成一个react组件的基本组成部分\n├── App.test.js // App自动化测试文件\n├── index.css // 首页入口index的样式\n├── index.js // 整个程序运行的入口文件,这个应用所做的事情是,只是渲染一个名叫App的组件，App组件在同目录下的App.js文件中定义\n├── logo.svg // 图标,资源\n└── serviceWorker.js // 引入这个是为了帮助我们借助网页去写手机app应用这样的一个功能,如果\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br")])]),t("h2",{attrs:{id:"react-中的组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react-中的组件"}},[a._v("#")]),a._v(" React 中的组件")]),a._v(" "),t("p",[a._v("在 react 中一个重要的思想就是"),t("strong",[a._v("通过组件(Component)来开发应用,所谓组件,就是指能够完成某个特定功能的独立的,可重用的代码(页面中的某一部分)")])]),a._v(" "),t("p",[a._v("基于组件的应用开发是广泛使用的软件开发模式,用分而治之的方法,"),t("strong",[a._v("把一个大的应用分解成若干个小的组件,每个组件只关注于某个小范围的特定的功能,但是把组件组合起来，就能够构成一个功能庞大的应用")])]),a._v(" "),t("p",[a._v("应用只是一个会渲染其他组件的组件而已")]),a._v(" "),t("p",[a._v("也可以说,"),t("strong",[a._v("react 应用是由组件构成的,你可以将组件理解为一种教浏览器认识新的 HTML 标签的方式,实现组件的好处就是它拓展了原生 HTML 标签的功能")]),a._v(",例如:组件之间的数据流等。")]),a._v(" "),t("p",[a._v("如果你有用过 AngularJS 的话,可以把组件理解为类似指令的概念,在现今的开发模式里,基于组件化开发是非常流行的")]),a._v(" "),t("p",[a._v("react 非常适合构建用户交互组件")]),a._v(" "),t("p",[t("strong",[a._v("一个 React 应用其实就是一颗由组件构成的树")]),a._v(",其实另外两个框架（vue,Angular）也是如此")]),a._v(" "),t("p",[a._v("在这颗树的根结点,最顶层的组件就是该应用的本身,它会在浏览器启动,也叫引导应用的时候被渲染")]),a._v(" "),t("p",[a._v("由于组件都是以树结构组织起来的,当每个组件被渲染时,它都会递归地渲染下级组件")]),a._v(" "),t("h2",{attrs:{id:"react-特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react-特点"}},[a._v("#")]),a._v(" React 特点")]),a._v(" "),t("ul",[t("li",[a._v("虚拟 DOM")])]),a._v(" "),t("p",[a._v("通过 DOM diff 算法,只会更新有差异化的部分,不用渲染整个页面提高效率")]),a._v(" "),t("ul",[t("li",[a._v("组件化")])]),a._v(" "),t("p",[a._v("把页面分成若干个组件,组件中包含逻辑结构和样式 组件只包含自身逻辑,更新组件的时候可以预测,利于维护整个页面拆分多个组件,可以做到重用")]),a._v(" "),t("ul",[t("li",[a._v("单向数据流(父组件允许向子组件传值,但是子组件你只能去使用父组件),子组件并不能直接的去改写这个值,只能单向的传递,但是你不能反过来的给我修改,想要达成这一目的,子组件调用父组件的方法,通过在父组件中改变自己来操作,维护代码起来比较方便)")]),a._v(" "),t("li",[a._v("可以与其他框架并存(Jq,Angular 等)")])]),a._v(" "),t("p",[a._v("数据是从顶层组件传递到子组件中 数据可控")]),a._v(" "),t("h2",{attrs:{id:"写一个-react-应用的基本流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写一个-react-应用的基本流程"}},[a._v("#")]),a._v(" 写一个 react 应用的基本流程")]),a._v(" "),t("p",[a._v("其实不光是 react 还是 vue,甚至是 Angular,遵循的流程都是一样的")]),a._v(" "),t("p",[t("strong",[a._v("基于产品经理给的原型图或者 UI 设计师提供的设计稿,首先要做的不是开始写代码,而是基于页面,按照不同大小细粒度,把页面拆分成若干个组件")])]),a._v(" "),t("p",[a._v("对页面的内容进行分组,并抽象成一个个的组件,从上至下,组合我们的应用,从而构成一个完整的软件系统应用")]),a._v(" "),t("h3",{attrs:{id:"从-creact-react-app-脚手架中学到的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从-creact-react-app-脚手架中学到的"}},[a._v("#")]),a._v(" 从 creact-react-app 脚手架中学到的")]),a._v(" "),t("ul",[t("li",[a._v("一切皆是 js,以前讲究是内容(html),层叠样式(css),行为(js)进行分离,这种分离仅仅是物理层文件的分离,如果视为一个整体,那么 css 是可以和 js 一样,通过模块的形式嵌入到 js 里面去的")]),a._v(" "),t("li",[a._v("构成组件的方式")])]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("本文主要讲到了"),t("code",[a._v("react")]),a._v("是什么,以及通过"),t("code",[a._v("creact-react-app")]),a._v("脚手架工具搭建一个"),t("code",[a._v("react")]),a._v("初始化的项目,其中初始化一个 react 应用,有多种方式")]),a._v(" "),t("p",[a._v("其中最重要的是,初始化项目目录文件的含义,以及构建一个 react 组件的方式,以及 react 中的组件,react 的特点,写一个 react 应用的基本流程,从一个初始化项目里,学到了 react 编程方式")]),a._v(" "),t("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}}),a._v(" "),t("footer-FeedBack")],1)}),[],!1,null,null,null);e.default=r.exports}}]);