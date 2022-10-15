(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{1950:function(t,e,s){"use strict";s.r(e);var a=s(12),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"如何将网站代码部署到-netlify-上免费托管"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何将网站代码部署到-netlify-上免费托管"}},[t._v("#")]),t._v(" 如何将网站代码部署到 netlify 上免费托管")]),t._v(" "),s("h2",{attrs:{id:"快速导航"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[t._v("#")]),t._v(" 快速导航")]),t._v(" "),s("TOC"),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("之前分享过,如何将代码部署到"),s("a",{attrs:{href:"/fontend/tools/tencent-cloud-website-host"}},[t._v("腾讯云网站静态托管")]),t._v(",也分享过"),s("a",{attrs:{href:"/fontend/tools/vercel-hosting"}},[t._v("如何将代码部署到 vercel 上")]),t._v(",今天给大家分享下如何将代码部署到 Netlify 上")]),t._v(" "),s("h2",{attrs:{id:"使用-netlify-的优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-netlify-的优势"}},[t._v("#")]),t._v(" 使用 Netlify 的优势")]),t._v(" "),s("p",[t._v("⒈ 免费托管,一键部署,100GB 的存储容量")]),t._v(" "),s("p",[t._v("⒉ CI/CD: 当你将本地的代码 push 到 github/gitlab 等仓库中,Netlify 会自动触发实现自动部署(与 vercel 一样)")]),t._v(" "),s("p",[t._v("⒊ 自定义域名/支持 https,免费 ssl 证书")]),t._v(" "),s("p",[t._v("⒋ http headers: 你可以定制资源的 http header，从而可以为单页面应用做「缓存优化」等")]),t._v(" "),s("p",[t._v("⒌ CDN: 把你的静态资源推到各个边缘节点，虽然都在国外(跟国内还是没法比..但貌似也没慢多少)")]),t._v(" "),s("p",[t._v("⒍ http redirect/rewrite: 配置 /api 解决跨域问题，根据业务需求配置更多的路由重定向")]),t._v(" "),s("p",[t._v("⒎ 一些强大的辅助性的插件用于提升网站的性能")]),t._v(" "),s("h2",{attrs:{id:"怎么使用-netlify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎么使用-netlify"}},[t._v("#")]),t._v(" 怎么使用 Netlify")]),t._v(" "),s("p",[t._v("这里同样以 github pages 为例,将 github pages 迁移到 Netlify 上进行托管")]),t._v(" "),s("p",[t._v("登录打开"),s("a",{attrs:{href:"https://netlify.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netlify 官方网站"),s("OutboundLink")],1),t._v("(自备好梯子)")]),t._v(" "),s("p",[t._v("⒈ 使用 github 账号 授权登录 netlify。在主页点击 "),s("code",[t._v("New site from git")]),t._v("按钮，新建站点")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608289457385-00-auhor-Netlify.png",alt:"github"}})]),t._v(" "),s("h3",{attrs:{id:"新建站点-从-git-仓库中导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建站点-从-git-仓库中导入"}},[t._v("#")]),t._v(" 新建站点(从 git 仓库中导入)")]),t._v(" "),s("p",[t._v("⒉ 创建一个新的站点")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608289528892-01-Create-a-new-site-Netlify.png",alt:"github"}})]),t._v(" "),s("h3",{attrs:{id:"选择一个仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择一个仓库"}},[t._v("#")]),t._v(" 选择一个仓库")]),t._v(" "),s("p",[t._v("⒊ 这个仓库可以从 github/gitlab 中导入")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608289640493-02-select-res.png",alt:"github"}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("如果想要 Netlify 授权 github 中所有的仓库,那就选择所有,但是一般我们指定特定的仓库就可以了的")]),t._v(" "),s("p",[t._v("这里我是指定到我本地"),s("code",[t._v("npm run build")]),t._v("打包构建生成的那个"),s("code",[t._v("dist目录")]),t._v(",其中"),s("code",[t._v("dist")]),t._v("目录就是在 github pages 中的"),s("code",[t._v("xxxx.github.io")]),t._v("这个仓库")]),t._v(" "),s("p",[t._v("你可以指定源代码目录,但是需要注意的是,你需要进行一下配置,"),s("code",[t._v("Netlify")]),t._v("应该是放置你打包生成构建的 dist 目录")])]),t._v(" "),s("h3",{attrs:{id:"配置-netlify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-netlify"}},[t._v("#")]),t._v(" 配置 netlify")]),t._v(" "),s("p",[t._v("选择 github 中打包构建那个仓库,一般我们将本地开发源码与构建打包生成的目录,进行分开的,至于是否强行分开,这个并不是固定的,只是项目源码不会上传打包生成的 dist 目录")]),t._v(" "),s("p",[t._v("而将打包构建生成的 dist 目录单独放到一个仓库中独立管理的")]),t._v(" "),s("p",[t._v("这样分开管理代码,有利于代码的迭代和维护")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608289959669-03-build-res.png",alt:"github"}})]),t._v(" "),s("h3",{attrs:{id:"构建-netlify-选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建-netlify-选项"}},[t._v("#")]),t._v(" 构建 Netlify 选项")]),t._v(" "),s("p",[t._v("⒈ "),s("strong",[s("code",[t._v("build command")])]),t._v(": 如何构建生成静态文件资源，一般会是 "),s("code",[t._v("npm run build")])]),t._v(" "),s("p",[t._v("⒉ "),s("strong",[s("code",[t._v("publish directory")])]),t._v(": 静态文件资源目录，一般会是 "),s("code",[t._v("public/dist")]),t._v(" 等目录")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608289959669-03-build-res.png",alt:"github"}})]),t._v(" "),s("p",[t._v("build command,以及 publish directory,你可以不填,当然你可以指定命令,构建打包使用"),s("code",[t._v("npm run build")]),t._v(",而 publish directory,写"),s("code",[t._v("public")])]),t._v(" "),s("p",[t._v("这个一般我们在本地执行"),s("code",[t._v("npm run build")]),t._v("时就会生成 dist 目录,如果你的源码与构建代码是在同一个仓库进行管理的")]),t._v(" "),s("p",[t._v("那这里就需要填写指定的打包目录")]),t._v(" "),s("p",[t._v("因为我的源码和构建出来的代码已经分开了的,所以这里可以省略的")]),t._v(" "),s("h3",{attrs:{id:"部署成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署成功"}},[t._v("#")]),t._v(" 部署成功")]),t._v(" "),s("p",[t._v("只要你正确的导入你构建打包的目录文件,一般都会部署成功,最好不要将源码也一同部署到 Netlify 上的,其实只需要把本地打包构建后的项目文件部署到 Netlify 上就可以了的")]),t._v(" "),s("h3",{attrs:{id:"自定义域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义域名"}},[t._v("#")]),t._v(" 自定义域名")]),t._v(" "),s("p",[t._v("⒈ 在主面板中找到"),s("code",[t._v("Add or register domain")]),t._v("添加或注册域名")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608292293557-04-add-domain.png",alt:"github"}})]),t._v("\n⒉ 添加域名以及进行域名解析\n"),s("div",{attrs:{align:"center"}},[s("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608292405271-05-add-domain.png",alt:"github"}})]),t._v(" "),s("p",[t._v("⒊ 域名管理")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608292513687-06-add-domain.png",alt:"github"}})]),t._v(" "),s("p",[t._v("基本上到了这一步,域名解析,就很容易了,如果之前有 vercel 网站上解析过域名,在你购买域名商的控制台里找到 dns 进行域名解析就可以了的")]),t._v(" "),s("h3",{attrs:{id:"安装插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装插件"}},[t._v("#")]),t._v(" 安装插件")]),t._v(" "),s("p",[t._v("在 Netlify 部署网站后,如果你想你的网站运行得更快,除了自己可以对代码进行优化,或使用一些 seo 等让网站跑的更快")]),t._v(" "),s("p",[s("code",[t._v("Netlify")]),t._v("也提供了一些插件进行辅助,提升网站的性能")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608293574209-07-plugin.png",alt:"github"}}),t._v(" "),s("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/netlify-hosting/1608293631256-08-plugin.png",alt:"github"}})]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("使用 Netlify 部署网站,非常简单,它不仅可以部署 vuepress 应用,可以部署目前前端很多流行的项目,一些静态生成器的网站应用都可以部署在上面(如:Jamstack,React,Vue.js,Gatsby,Angular,Next.js,Sitecore,Drupal 等),非常强大,也支持"),s("code",[t._v("CI/CD")]),t._v("命令行终端操作")]),t._v(" "),s("p",[t._v("总之,如果你爱折腾,你可以尝试一下"),s("code",[t._v("Netlify")]),t._v("的,而我另一个网站"),s("a",{attrs:{href:"https://doc.itclan.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("doc.itclan.cn"),s("OutboundLink")],1),t._v("却是部署在 vercel 上的")]),t._v(" "),s("p",[t._v("你可能会有疑问,难道我要到不同的地方去管理代码?其实,不是的,两个网站的内容虽然是一样的,但是同一套代码,只是分别部署在不同的托管商那的,彼此之间并不会有任何干扰")]),t._v(" "),s("p",[t._v("如果你的网站受众人群更多的是国外用户,那么可以选择国外的网站托管商的,如果仅仅就考虑国内用户,那么可以选择国内的")]),t._v(" "),s("p",[t._v("一些服务器厂商,例如:阿里云,腾讯云,西部数码等都可以")]),t._v(" "),s("p",[t._v("如果仅仅是个人博客,用于记录自己的学习,个人觉得,用静态网站生成器构建的网站,就挺不错的,其中"),s("code",[t._v("github pages")]),t._v(","),s("code",[t._v("Netlify")]),t._v(","),s("code",[t._v("vercel")]),t._v("作为静态网站托管,都是免费的")]),t._v(" "),s("p",[t._v("而国内的阿里云,腾讯云静态网站托管会收一定的存储资源费用(cdn 节点都在国内,访问速度可能要快点),如果复杂的功能更强大的网站,可以选择云服务器(阿里云的 ECS,腾讯云的 CVM 等都可以).")]),t._v(" "),s("p",[t._v("如果你问我为什么这么折腾,从虚拟主机,静态网站托管,coding 静态托管,腾讯云网站静态托管,vercel,以及 Netlify")]),t._v(" "),s("p",[t._v("甚至还折腾过腾讯云的云托管(业余折腾可以,但是不建议目前把项目放到这上面来的),以及云服务器(ECS/CVM,往后也可以分享下怎么用云服务器建站部署应用的),")]),t._v(" "),s("p",[t._v("因为折腾过,就知道他们彼此各个之间的差异,在以后建站,搭应用的过程中,可以选择最合适的一种方案")]),t._v(" "),s("p",[t._v("而不止于局限就会一种.所谓技多不压身,会多个技术就多一种选择。虽然都是工具,但各有所长.")]),t._v(" "),s("h2",{attrs:{id:"参考文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://netlify.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("netlify 官网"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.netlify.com/configure-builds/common-configurations/#javascript-spas",target:"_blank",rel:"noopener noreferrer"}},[t._v("netlify 常用配置"),s("OutboundLink")],1)])]),t._v(" "),s("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}}),t._v(" "),s("footer-FeedBack"),t._v(" "),s("footer-AvoidCopy")],1)}),[],!1,null,null,null);e.default=i.exports}}]);