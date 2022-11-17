(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1196:function(s,e,t){s.exports=t.p+"assets/img/config-ssh.4d6b16d0.png"},1197:function(s,e,t){s.exports=t.p+"assets/img/find-ssh.d320539f.png"},1198:function(s,e,t){s.exports=t.p+"assets/img/config-email.67799756.png"},1199:function(s,e,t){s.exports=t.p+"assets/img/serect-key.13d3edad.png"},1200:function(s,e,t){s.exports=t.p+"assets/img/settings.fe2428ff.png"},1201:function(s,e,t){s.exports=t.p+"assets/img/new-ssh-key.b8568e57.png"},1202:function(s,e,t){s.exports=t.p+"assets/img/add-new-key.5b1ed79f.png"},1203:function(s,e,t){s.exports=t.p+"assets/img/open-id-pub.6541c37a.png"},1204:function(s,e,t){s.exports=t.p+"assets/img/clone-fail.e023fd2c.png"},1205:function(s,e,t){s.exports=t.p+"assets/img/re-clone.50981570.png"},2031:function(s,e,t){"use strict";t.r(e);var a=t(12),i=Object(a.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"git-使用速查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-使用速查"}},[s._v("#")]),s._v(" git-使用速查")]),s._v(" "),a("h2",{attrs:{id:"快速导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[s._v("#")]),s._v(" 快速导航")]),s._v(" "),a("TOC"),s._v(" "),a("h2",{attrs:{id:"如何免密向-github-gitlab-提交代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何免密向-github-gitlab-提交代码"}},[s._v("#")]),s._v(" 如何免密向 github/gitLab 提交代码")]),s._v(" "),a("p",[s._v("当在本地工作区编写代码完后,最后往往需要"),a("code",[s._v("push")]),s._v("到远端的仓库当中去,如果没有进行任何的设置,每次都要输入用户名和密码,然后才能推送,这样很麻烦,下面介绍下几种方式免密向"),a("code",[s._v("github")]),s._v("推送")]),s._v(" "),a("h3",{attrs:{id:"方法-1-手动创建-git-credentials文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法-1-手动创建-git-credentials文件"}},[s._v("#")]),s._v(" "),a("strong",[s._v("方法 1")]),s._v(":手动创建"),a("code",[s._v(".git-credentials")]),s._v("文件")]),s._v(" "),a("ul",[a("li",[s._v("在你的用户目录下新建一个文本文件:"),a("code",[s._v(".git-credentials")]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("windows")]),s._v("用户中无法手动建这种"),a("code",[s._v(".")]),s._v("的后缀名文件,可以在命令行终端使用"),a("code",[s._v("touch")]),s._v("命令,也可以使用"),a("code",[s._v("vscode")]),s._v("或者"),a("code",[s._v("sublime")]),s._v("这样的编辑器进行创建")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("windows: C:/Users/username  // windows用户\nMac OS X: /Users/username   // Mac OS用户\nLinux: /home/username       // linux\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[a("code",[s._v(".git-credentials")]),s._v("在文件中输入以下内容")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https: {username}:{password}@github.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("username")]),s._v("和"),a("code",[s._v("password")]),s._v("是你的 github 账号和密码")]),s._v(" "),a("ul",[a("li",[s._v("修改 git 配置 执行命令")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git config --global credentials.helper store\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上述命令会在"),a("code",[s._v(".gitconfig")]),s._v("文件与"),a("code",[s._v(".git-credentials")]),s._v("在同目录下)末尾添加如下配置")]),s._v(" "),a("p",[s._v("经过上述三步配置之后, 你 "),a("code",[s._v("push")]),s._v("代码到"),a("code",[s._v("github")]),s._v("时, 便无需再输入用户名密码了")]),s._v(" "),a("h3",{attrs:{id:"方法-2-命令行方式创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法-2-命令行方式创建"}},[s._v("#")]),s._v(" "),a("strong",[s._v("方法 2")]),s._v(":命令行方式创建")]),s._v(" "),a("p",[s._v("在命令行输入命令:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git config --global credentials.helper store\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这一步会在用户目录下的"),a("code",[s._v(".gitconfig")]),s._v("文件最后添加")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("helper = store\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("向远端"),a("code",[s._v("push")]),s._v(" 代码")]),s._v(" "),a("p",[s._v("push 你的代码 (git push), 这时会让你输入用户名和密码, 这一步输入的用户名密码会被记住, 下次再"),a("code",[s._v("push")]),s._v("代码时就不用输入用户名密码!这一步会在用户目录下生成文件"),a("code",[s._v(".git-credential")]),s._v("记录用户名密码的信息")]),s._v(" "),a("p",[s._v("方案 1 与方案 2 都是创建"),a("code",[s._v(".git-credentials")]),s._v("文件并写入用户信息，一个是手动创建，一个命令创建")]),s._v(" "),a("p",[a("strong",[s._v("缺点")]),s._v(":密码,用户名暴露")]),s._v(" "),a("h3",{attrs:{id:"方法-3-配置ssh-设置秘钥-推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法-3-配置ssh-设置秘钥-推荐"}},[s._v("#")]),s._v(" "),a("strong",[s._v("方法 3")]),s._v(": 配置"),a("code",[s._v("ssh")]),s._v(",设置秘钥(推荐)")]),s._v(" "),a("p",[s._v("在你从"),a("code",[s._v("github")]),s._v("或"),a("code",[s._v("gitlab")]),s._v("中克隆远端代码下来的时候,默认是"),a("code",[s._v("https")]),s._v(",而另外一种方式是"),a("code",[s._v("ssh")]),s._v("的")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("https")]),s._v(":使用"),a("code",[s._v("https url")]),s._v("对初学者来说会比较方便，复制"),a("code",[s._v("https url")]),s._v("然后到"),a("code",[s._v("git Bash")]),s._v("里面直接用 clone 命令克隆到本地就好了，但是每次"),a("code",[s._v("fetch")]),s._v("和"),a("code",[s._v("push")]),s._v("代码都需要输入账号和密码,此方法很麻烦")]),s._v(" "),a("li",[a("strong",[s._v("ssh")]),s._v(": 使用"),a("code",[s._v("SSH url")]),s._v(",需要在只用之前先配置和添加好"),a("code",[s._v("SSH key")]),s._v("。每次"),a("code",[s._v("fetch")]),s._v("和"),a("code",[s._v("push")]),s._v("代码都不需要输入账号和密码，如果你想要每次都输入账号密码才能进行"),a("code",[s._v("fetch")]),s._v("和"),a("code",[s._v("push")]),s._v("也可以另外进行设置")])]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:t(1196),alt:"克隆代码"}})]),s._v("\n当然在本地也是可以通过git remote -v,查看克隆代码的方式的\n"),a("ul",[a("li",[s._v("若是"),a("code",[s._v("https")]),s._v("方式使用上面的命令,会显示如下")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("origin  https://github.com/github用户名/仓库名称.git (fetch)\norigin  https://github.com/github用户名/blogcode.git (push)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("若是"),a("code",[s._v("ssh")]),s._v("方式,则会显示如下")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("origin git@github.com:github用户名/仓库名称.git (fetch)\norigin git@github.com:github用户名/仓库名称.git (push)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("检查电脑上是否有"),a("code",[s._v("ssh key")])])]),s._v(" "),a("p",[s._v("打开"),a("code",[s._v("git bash")]),s._v(",在终端输入"),a("code",[s._v("~/.ssh")]),s._v("或用"),a("code",[s._v("~/.ssh ls")]),s._v(",这行命令的作用,主要是查看你电脑上有没有"),a("code",[s._v(".ssh")]),s._v("文件夹")]),s._v(" "),a("ul",[a("li",[s._v("如果电脑有,就会显示")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("bash: /c/Users/itclancode/.ssh: Is a director\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("如果电脑没有,就会显示")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  bash: /c/Users/itclancode/.ssh: No such file or directory\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:t(1197),alt:"查看电脑本地是否有ssh"}})]),s._v(" "),a("ul",[a("li",[s._v("创建"),a("code",[s._v("SSH Key")])])]),s._v(" "),a("p",[s._v("进入你磁盘根目录,"),a("code",[s._v("C:\\Users\\你磁盘的目录\\.ssh")]),s._v("内,在"),a("code",[s._v("git bash")]),s._v("中输入")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('ssh-keygen -t rsa -C "你github的邮箱"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:t(1198),alt:"设置ssh"}})]),s._v("\n执行完设置邮箱后,就会显示下面这两行\n"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Generating public/private rsa key pair.\nEnter file in which to save the key (/c/Users/16627/.ssh/id_rsa):\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这是让你输入一个文件名,用于保存刚才生成的 "),a("code",[s._v("SSH key")]),s._v("代码。如果不设置任何名称,会默认生成"),a("code",[s._v("id_rsa")]),s._v("和"),a("code",[s._v("id_rsa.pub")]),s._v("两个秘钥文件。这个并非是固定的,可以有多个")]),s._v(" "),a("p",[s._v("这时候已经创建好"),a("code",[s._v(".ssh")]),s._v("这个文件夹了，会提示")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Created directory /c/Users/xxxx/.ssh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("紧接着又会提示你")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Enter passphrase (empty for no passphrase):\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("就是让你输入密码，如果你设置了密码，那在你使用"),a("code",[s._v("ssh")]),s._v("传输文件的时候，你就要输入这个密码。为了避免麻烦，建议不用设置，直接回车,免密码推送,不要给自己找麻烦")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Enter same passphrase again\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这是让你再输入一次密码，就跟我们注册账号时候设置密码需要设置两次一样。上一步没设置密码，这里直接回车就可以了。到这里你的秘钥就设置好了，你会收到这段代码提示")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Your identification has been saved in /c/Users/…/.ssh/id_rsa\nYour public key has been saved in /c/Users/…/.ssh/id_rsa.pub\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("还会向你展示你的秘钥长啥样")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:t(1199),alt:"生成ssh"}})]),s._v(" "),a("p",[s._v("当你看到上面这段代码，那就说明你的 "),a("code",[s._v("SSH key")]),s._v(" 已经创建成功")]),s._v(" "),a("ul",[a("li",[s._v("添加"),a("code",[s._v("SSH Key")]),s._v("到"),a("code",[s._v("GitHub")]),s._v(",其他"),a("code",[s._v("gitlab")]),s._v(","),a("code",[s._v("coding")]),s._v("或"),a("code",[s._v("码云")]),s._v("平台都是一致的")])]),s._v(" "),a("p",[s._v("首先打开"),a("a",{attrs:{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("登录 Github 官网"),a("OutboundLink")],1),s._v(",进入设置页面,添加"),a("code",[s._v("ssh key")])]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:t(1200),alt:"生成ssh"}}),s._v(" "),a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:t(1201),alt:"生成ssh"}})]),s._v("\n点击右上角新建一个`SSH Key`\n"),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:t(1202),alt:"生成ssh"}})]),s._v("\n打开生成`id_rsa.pub`文件，全选其中的内容粘贴到网页的Key中,就可以了的\n"),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:t(1203),alt:"生成ssh"}})]),s._v("\n当你完成这一步后,往后就可以愉快的提交代码,不用输入密码和账号了\n这相当于是在你电脑创建了一个私钥与`github`上的进行匹配\n"),a("ul",[a("li",[s._v("测试一下该"),a("code",[s._v("SSH key")]),s._v("是否匹配成功")])]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("git Bash")]),s._v("中输入以下代码,注意是"),a("code",[s._v("git@github.com")]),s._v("，不是你的邮箱")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ssh -T git@github.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("接下来就会提示你输入密码，如果上边设置 ssh 的时候，你没设置密码会提示你")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Warning: Permanently added ‘github.com,192.30.255.112’ (RSA) to the list of known hosts\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("警告完了，如果你能看到如下提示，那你已经成功设置 SSH 密钥")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Hi “用户名”! You’ve successfully authenticated, but GitHub does not provide shell acces\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果你看到"),a("code",[s._v("access denied")]),s._v("，者表示拒绝访问，那么你就需要使用 "),a("code",[s._v("https")]),s._v("去访问")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh",target:"_blank",rel:"noopener noreferrer"}},[s._v("配置 ssh 相关参考文档"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),a("h3",{attrs:{id:"使用-git-clone-克隆远端代码失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-git-clone-克隆远端代码失败"}},[s._v("#")]),s._v(" 使用-git-clone-克隆远端代码失败")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git clone xxx\ncloning into 'xxx'..\nremote: Coding提示:Authentication failed\nremote: 认证失败: 请确认您输入了正确的账号密码\nfatal: Authentication failed for 'https://xxx.git'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("如下错误所示\n"),a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:t(1204),alt:"克隆代码错误"}}),s._v(" "),a("strong",[s._v("原因")]),s._v(":这种情况很大原因是你的电脑以前用不同的 git 账号 clone 过代码,每次计算机会做记录 git 账号,在"),a("code",[s._v("clone")]),s._v("代码时候导致 git 时候计算机识别不出 git 账号是否匹配,输入正确的账户名和密码即可")]),s._v(" "),a("p",[a("strong",[s._v("解决办法")]),s._v(":")]),s._v(" "),a("ul",[a("li",[s._v("方法-1:window 用户")]),s._v(" "),a("li",[s._v("打开电脑的控制面板(window+R--\x3econtrol 可快速进入)---\x3e进入用户账户--\x3e管理 windows 凭据---\x3e将您克隆的代码地址删掉,重新克隆,或者修改为正确的邮箱地址和用户密码登录即可(若输入用户名仍然报错,则输入注册的邮箱)\n"),a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:t(791),alt:"克隆代码错误"}}),s._v(" "),a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:t(791),alt:"克隆代码错误"}}),s._v(" "),a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:t(1205),alt:"克隆代码错误"}})])]),s._v(" "),a("ul",[a("li",[s._v("方法-2:clone 的代码连接前加上 git 账号和密码\ngit clone http://账户名:密码@192.168.0.00/xxxx/xxxx.git")])]),s._v(" "),a("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}}),s._v(" "),a("footer-FeedBack"),s._v(" "),a("footer-AvoidCopy")],1)}),[],!1,null,null,null);e.default=i.exports},791:function(s,e,t){s.exports=t.p+"assets/img/open-control.8b41972e.png"}}]);