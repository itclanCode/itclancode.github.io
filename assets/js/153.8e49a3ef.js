(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{1654:function(e,t,n){"use strict";n(956)},1828:function(e,t,n){"use strict";n.r(t);var r={name:"setHome",methods:{SetHome:function(e,t){try{e.style.behavior="url(#default#homepage)",e.setHomePage(t)}catch(e){if(window.netscape)try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")}catch(e){alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'")}else if(window.sidebar){Components.classes["@mozilla.org/preference-service;1"].getService(Components.interfaces.nsIPrefBranch).setCharPref("browser.startup.homepage",t)}else alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+t+"】设置为首页。")}}}},s=(n(1654),n(12)),a=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap"},[n("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.SetHome(this,"https://coder.itclan.cn")}}},[e._v("设为首页")]),e._v("  \n")],1)}),[],!1,null,"0b26d9b8",null);t.default=a.exports},956:function(e,t,n){}}]);