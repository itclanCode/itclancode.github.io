(window.webpackJsonp=window.webpackJsonp||[]).push([[9,13,116],{1e3:function(t,e,i){"use strict";i.r(e);i(387),i(85),i(29),i(252),i(51),i(673),i(674),i(675),i(664),i(696);var r={name:"FlipClock",data:function(){return{timer:null,flipObjs:[]}},components:{Flipper:i(722).default},methods:{init:function(){for(var t=new Date,e=this.formatDate(new Date(t.getTime()),"hhiiss"),i=0;i<this.flipObjs.length;i++)this.flipObjs[i].setFront(e[i])},run:function(){var t=this;this.timer=setInterval((function(){for(var e=new Date,i=t.formatDate(new Date(e.getTime()-1e3),"hhiiss"),r=t.formatDate(e,"hhiiss"),n=0;n<t.flipObjs.length;n++)i[n]!==r[n]&&t.flipObjs[n].flipDown(i[n],r[n])}),1e3)},formatDate:function(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var i={"m+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"i+":t.getMinutes(),"s+":t.getSeconds()};for(var r in i)if(new RegExp("(".concat(r,")")).test(e)){var n=i[r]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?n:this.padLeftZero(n))}return e},padLeftZero:function(t){return("00"+t).substr(t.length)}},mounted:function(){this.flipObjs=[this.$refs.flipperHour1,this.$refs.flipperHour2,this.$refs.flipperMinute1,this.$refs.flipperMinute2,this.$refs.flipperSecond1,this.$refs.flipperSecond2],this.init(),this.run()}},n=(i(764),i(12)),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"FlipClock"},[i("Flipper",{ref:"flipperHour1"}),t._v(" "),i("Flipper",{ref:"flipperHour2"}),t._v(" "),i("em",[t._v(":")]),t._v(" "),i("Flipper",{ref:"flipperMinute1"}),t._v(" "),i("Flipper",{ref:"flipperMinute2"}),t._v(" "),i("em",[t._v(":")]),t._v(" "),i("Flipper",{ref:"flipperSecond1"}),t._v(" "),i("Flipper",{ref:"flipperSecond2"})],1)}),[],!1,null,null,null);e.default=s.exports},1598:function(t,e,i){"use strict";i(921)},1769:function(t,e,i){"use strict";i.r(e);i(387);var r={components:{FlipClock:i(1e3).default},name:"Weather",data:function(){return{color:"#409eff",str:"",src:"https://tianqiapi.com/api.php?style=tz&skin=mango"}},mounted:function(){this.welcomeTime()},methods:{welcomeTime:function(){var t=(new Date).getHours();t<12?(this.str="Hi,早上好,又是崭新的一天,打工人,要加油哦",this.color="#409eff"):t>=12&&t<13?(this.str="Hi,中午好,在忙,也不要忘记眯一小会儿,不然下午会神游哦",this.color="#67c23a"):t>=13&&t<18?(this.str="Hi,下午好,打起精神,该起来搬砖干活了",this.color="#909399"):t>=18&&t<22?(this.str="Hi,晚上好,忙完了一天,该放下手机,电脑,好好休息下了",this.color="#e6a23c"):(this.str="Hi,夜猫子好,熬最晚的夜,敷最贵的膜,不要熬夜哦,没了1,后面再多的零,也没有意义哈,狗命要紧",this.color="#f56c6c")}}},n=(i(1598),i(12)),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"welcome-tip",style:{color:t.color}},[t._v(t._s(t.str))]),t._v(" "),t.src?i("iframe",{staticClass:"iframe",attrs:{scrolling:"no",src:t.src,frameborder:"0",width:"100%",height:"32",allowtransparency:"true"}}):t._e(),t._v(" "),i("div",{staticClass:"clock-box"},[i("FlipClock")],1)])}),[],!1,null,"2855df02",null);e.default=s.exports},664:function(t,e,i){"use strict";var r=i(11),n=i(133).PROPER,s=i(49),o=i(25),a=i(109),c=i(35),f=i(13),l=i(389),u=RegExp.prototype,p=u.toString,h=r(l),g=f((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),d=n&&"toString"!=p.name;(g||d)&&s(RegExp.prototype,"toString",(function(){var t=o(this),e=c(t.source),i=t.flags;return"/"+e+"/"+c(void 0===i&&a(u,t)&&!("flags"in u)?h(t):i)}),{unsafe:!0})},666:function(t,e,i){"use strict";var r=i(52),n=i(28),s=i(18),o=i(22),a=s("species");t.exports=function(t){var e=r(t),i=n.f;o&&e&&!e[a]&&i(e,a,{configurable:!0,get:function(){return this}})}},673:function(t,e,i){var r=i(22),n=i(8),s=i(11),o=i(255),a=i(256),c=i(53),f=i(28).f,l=i(110).f,u=i(109),p=i(259),h=i(35),g=i(389),d=i(254),m=i(49),v=i(13),x=i(26),b=i(107).enforce,F=i(666),_=i(18),w=i(390),T=i(392),E=_("match"),y=n.RegExp,D=y.prototype,k=n.SyntaxError,R=s(g),S=s(D.exec),C=s("".charAt),$=s("".replace),O=s("".indexOf),H=s("".slice),M=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,j=/a/g,I=/a/g,A=new y(j)!==j,N=d.MISSED_STICKY,P=d.UNSUPPORTED_Y,Y=r&&(!A||N||w||T||v((function(){return I[E]=!1,y(j)!=j||y(I)==I||"/a/i"!=y(j,"i")})));if(o("RegExp",Y)){for(var q=function(t,e){var i,r,n,s,o,f,l=u(D,this),g=p(t),d=void 0===e,m=[],v=t;if(!l&&g&&d&&t.constructor===q)return t;if((g||u(D,t))&&(t=t.source,d&&(e="flags"in v?v.flags:R(v))),t=void 0===t?"":h(t),e=void 0===e?"":h(e),v=t,w&&"dotAll"in j&&(r=!!e&&O(e,"s")>-1)&&(e=$(e,/s/g,"")),i=e,N&&"sticky"in j&&(n=!!e&&O(e,"y")>-1)&&P&&(e=$(e,/y/g,"")),T&&(t=(s=function(t){for(var e,i=t.length,r=0,n="",s=[],o={},a=!1,c=!1,f=0,l="";r<=i;r++){if("\\"===(e=C(t,r)))e+=C(t,++r);else if("]"===e)a=!1;else if(!a)switch(!0){case"["===e:a=!0;break;case"("===e:S(M,H(t,r+1))&&(r+=2,c=!0),n+=e,f++;continue;case">"===e&&c:if(""===l||x(o,l))throw new k("Invalid capture group name");o[l]=!0,s[s.length]=[l,f],c=!1,l="";continue}c?l+=e:n+=e}return[n,s]}(t))[0],m=s[1]),o=a(y(t,e),l?this:D,q),(r||n||m.length)&&(f=b(o),r&&(f.dotAll=!0,f.raw=q(function(t){for(var e,i=t.length,r=0,n="",s=!1;r<=i;r++)"\\"!==(e=C(t,r))?s||"."!==e?("["===e?s=!0:"]"===e&&(s=!1),n+=e):n+="[\\s\\S]":n+=e+C(t,++r);return n}(t),i)),n&&(f.sticky=!0),m.length&&(f.groups=m)),t!==v)try{c(o,"source",""===v?"(?:)":v)}catch(t){}return o},U=function(t){t in q||f(q,t,{configurable:!0,get:function(){return y[t]},set:function(e){y[t]=e}})},J=l(y),K=0;J.length>K;)U(J[K++]);D.constructor=q,q.prototype=D,m(n,"RegExp",q)}F("RegExp")},674:function(t,e,i){var r=i(8),n=i(22),s=i(390),o=i(63),a=i(28).f,c=i(107).get,f=RegExp.prototype,l=r.TypeError;n&&s&&a(f,"dotAll",{configurable:!0,get:function(){if(this!==f){if("RegExp"===o(this))return!!c(this).dotAll;throw l("Incompatible receiver, RegExp required")}}})},675:function(t,e,i){var r=i(8),n=i(22),s=i(254).MISSED_STICKY,o=i(63),a=i(28).f,c=i(107).get,f=RegExp.prototype,l=r.TypeError;n&&s&&a(f,"sticky",{configurable:!0,get:function(){if(this!==f){if("RegExp"===o(this))return!!c(this).sticky;throw l("Incompatible receiver, RegExp required")}}})},677:function(t,e,i){},696:function(t,e,i){"use strict";var r=i(10),n=i(11),s=i(50),o=i(108),a=i(35),c=n("".slice),f=Math.max,l=Math.min;r({target:"String",proto:!0,forced:!"".substr||"b"!=="ab".substr(-1)},{substr:function(t,e){var i,r,n=a(s(this)),u=n.length,p=o(t);return p===1/0&&(p=0),p<0&&(p=f(u+p,0)),(i=void 0===e?u:o(e))<=0||i===1/0||p>=(r=l(p+i,u))?"":c(n,p,r)}})},709:function(t,e,i){"use strict";i(677)},710:function(t,e,i){},722:function(t,e,i){"use strict";i.r(e);i(174),i(85);var r={name:"FlipClock",data:function(){return{isFlipping:!1,flipType:"down",frontTextFromData:0,backTextFromData:1}},props:{frontText:{type:[Number,String],default:0},backText:{type:[Number,String],default:1},duration:{type:Number,default:600}},methods:{_textClass:function(t){return"number"+t},_flip:function(t,e,i){var r=this;if(this.isFlipping)return!1;this.frontTextFromData=e,this.backTextFromData=i,this.flipType=t,this.isFlipping=!0,setTimeout((function(){r.isFlipping=!1,r.frontTextFromData=i}),this.duration)},flipDown:function(t,e){this._flip("down",t,e)},flipUp:function(t,e){this._flip("up",t,e)},setFront:function(t){this.frontTextFromData=t},setBack:function(t){this.backTextFromData=t}},created:function(){this.frontTextFromData=this.frontText,this.backTextFromData=this.backText}},n=(i(709),i(12)),s=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"M-Flipper",class:[this.flipType,{go:this.isFlipping}]},[e("div",{staticClass:"digital front",class:this._textClass(this.frontTextFromData)}),this._v(" "),e("div",{staticClass:"digital back",class:this._textClass(this.backTextFromData)})])}),[],!1,null,null,null);e.default=s.exports},764:function(t,e,i){"use strict";i(710)},921:function(t,e,i){}}]);