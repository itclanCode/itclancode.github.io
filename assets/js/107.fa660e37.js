(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{697:function(t,i,s){},751:function(t,i,s){"use strict";s(697)},776:function(t,i,s){"use strict";s.r(i);s(133),s(90);var a={name:"FlipClock",data:function(){return{isFlipping:!1,flipType:"down",frontTextFromData:0,backTextFromData:1}},props:{frontText:{type:[Number,String],default:0},backText:{type:[Number,String],default:1},duration:{type:Number,default:600}},methods:{_textClass:function(t){return"number"+t},_flip:function(t,i,s){var a=this;if(this.isFlipping)return!1;this.frontTextFromData=i,this.backTextFromData=s,this.flipType=t,this.isFlipping=!0,setTimeout((function(){a.isFlipping=!1,a.frontTextFromData=s}),this.duration)},flipDown:function(t,i){this._flip("down",t,i)},flipUp:function(t,i){this._flip("up",t,i)},setFront:function(t){this.frontTextFromData=t},setBack:function(t){this.backTextFromData=t}},created:function(){this.frontTextFromData=this.frontText,this.backTextFromData=this.backText}},n=(s(751),s(12)),e=Object(n.a)(a,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"M-Flipper",class:[this.flipType,{go:this.isFlipping}]},[i("div",{staticClass:"digital front",class:this._textClass(this.frontTextFromData)}),this._v(" "),i("div",{staticClass:"digital back",class:this._textClass(this.backTextFromData)})])}),[],!1,null,null,null);i.default=e.exports}}]);