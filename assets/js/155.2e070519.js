(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{1602:function(t,e,s){"use strict";s(948)},1742:function(t,e,s){"use strict";s.r(e);s(28),s(177),s(87);var a={name:"regExpress",props:["label","input","placeholer","type","btntext"],data:function(){return{result:"",labelText:this.label,inputVal:this.input,inputType:this.type,btnText:this.btntext}},methods:{checkUrl:function(t){/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(t)?(this.result=t,this.inputVal=""):this.errMessage("您输入的url有误,请重新输入")},checkPhone:function(t){if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(t))return this.errMessage("您输入的手机号码有误,请重新输入"),!1;this.result=t,this.inputVal=""},checkEmail:function(t){if(!/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/g.test(t))return this.errMessage("您输入的邮箱有误,请重新输入"),!1;this.result=t,this.inputVal=""},checkID:function(t){/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|(X|x))$/.test(t)?(this.result=t,this.inputVal=""):this.errMessage("您输入的身份证有误,请重新输入")},checkPassword:function(t){/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(t)?(this.result=t,this.inputVal=""):this.errMessage("您输入的密码太简单,6-20位字母与数字组合,请重新输入")},validateLowerCase:function(t){/^[a-z]+$/.test(t)?(this.result=t,this.inputVal=""):this.errMessage("您输入的不是小写字母,请重新输入")},validateUpperCase:function(t){/^[A-Z]+$/.test(t)?(this.result=t,this.inputVal=""):this.errMessage("您输入的不是大写字母,请重新输入")},validatAlphabets:function(t){/^[A-Za-z]+$/.test(t)?(this.result=t,this.inputVal=""):this.errMessage("您输入的不是大小写字母,请重新输入")},validatAlphabetsAndNumber:function(t){/^[A-Za-z0-9]+$/.test(t)?(this.result=t,this.inputVal=""):this.errMessage("您输入的不是大小写字母及数字,请重新输入")},validatNumber:function(t){/^[0-9]+$/.test(t)?(this.result=t,this.inputVal=""):this.errMessage("您输入的不是数字,请重新输入")},errMessage:function(t){this.$message({showClose:!0,message:t,type:"error"})},handleElBtn:function(t,e){switch(e){case"url":this.checkUrl(t);break;case"phone":this.checkPhone(t);break;case"email":this.checkEmail(t);break;case"ID":this.checkID(t);break;case"password":this.checkPassword(t);break;case"lowercase":this.validateLowerCase(t);break;case"uppercase":this.validateUpperCase(t);break;case"lowerUppercase":this.validatAlphabets(t);break;case"alphabetssndnumber":this.validatAlphabetsAndNumber(t);break;case"number":this.validatNumber(t)}}},mounted:function(){}},i=(s(1602),s(12)),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[s("el-form-item",{attrs:{label:t.labelText}},[s("el-input",{staticClass:"el-input",attrs:{type:t.inputType,clearable:""},model:{value:t.inputVal,callback:function(e){t.inputVal=e},expression:"inputVal"}})],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleElBtn(t.inputVal,t.inputType)}}},[t._v(t._s(t.btnText))])],1)],1),t._v(" "),s("div",[t._v("校验结果:  "+t._s(t.result))])],1)}),[],!1,null,"0964a330",null);e.default=n.exports},948:function(t,e,s){}}]);