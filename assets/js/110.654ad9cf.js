(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1016:function(t,n,e){},1816:function(t,n,e){"use strict";e(1016)},1950:function(t,n,e){"use strict";e.r(n);var a={name:"inputPassword",data:function(){return{type:"password",inputVal:"123456",onOff:!0}},methods:{switchPass:function(){this.onOff?this.type="password":this.type="text",this.onOff=!this.onOff}}},i=(e(1816),e(12)),s=Object(i.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrap"},["checkbox"===t.type?e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],attrs:{name:"pass",type:"checkbox"},domProps:{checked:Array.isArray(t.inputVal)?t._i(t.inputVal,null)>-1:t.inputVal},on:{change:function(n){var e=t.inputVal,a=n.target,i=!!a.checked;if(Array.isArray(e)){var s=t._i(e,null);a.checked?s<0&&(t.inputVal=e.concat([null])):s>-1&&(t.inputVal=e.slice(0,s).concat(e.slice(s+1)))}else t.inputVal=i}}}):"radio"===t.type?e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],attrs:{name:"pass",type:"radio"},domProps:{checked:t._q(t.inputVal,null)},on:{change:function(n){t.inputVal=null}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],attrs:{name:"pass",type:t.type},domProps:{value:t.inputVal},on:{input:function(n){n.target.composing||(t.inputVal=n.target.value)}}}),t._v(" "),e("button",{on:{click:t.switchPass}},[t._v(t._s("password"===t.type?"隐藏密码":"显示密码"))])])}),[],!1,null,"0c535a6d",null);n.default=s.exports}}]);