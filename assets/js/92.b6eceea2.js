(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1521:function(e,t,a){"use strict";a(874)},1658:function(e,t,a){"use strict";a.r(t);var n=a(45),o=(a(265),a(13),a(658)),i=a.n(o),l=(a(1480),a(1481),a(705),a(688),a(867),a(1482),a(755),a(868),a(1483),a(1484),a(869),a(1485),a(706),a(1494),a(1495),a(1496),a(870),a(1498),a(1499),a(1500),a(1501),a(1502),a(1503),a(1504),a(1505),a(871),a(872),a(756),a(1506),a(873),a(1507),a(1508),a(1509),a(1510),a(1511),a(757),a(1512),a(1513),a(1514),a(1515),a(1516),a(1517),a(1518),a(1519),a(1520)),r=a.n(l);window.diff_match_patch=r.a,window.DIFF_DELETE=-1,window.DIFF_INSERT=1,window.DIFF_EQUAL=0;var s={name:"codeMirror",props:{value:String,language:{type:String,default:null}},data:function(){return{mode:"javascript",coder:null,options:Object(n.a)({tabSize:4,lineNumbers:!0,line:!0,matchBrackets:!0,indentUnit:2,autoCloseBrackets:!0,autoCloseTags:!0,cursorHeight:1,smartIndent:!0,styleActiveLine:!0,scrollbarStyle:"simple",continueComments:"Enter",lineWrapping:!0,foldGutter:!0,theme:"seti",extraKeys:{Ctrl:"autocomplete","Ctrl-Q":function(e){e.foldCode(e.getCursor())}},gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],keyMap:"sublime"},"styleActiveLine",!0),modes:[{value:"css",label:"CSS"},{value:"javascript",label:"Javascript"},{value:"html",label:"XML/HTML"}]}},methods:{_initialize:function(){var e=this;if(this.coder=i.a.fromTextArea(this.$refs.textarea,this.options),this.coder.setValue(this.value),this.coder.on("change",(function(t){e.code=t.getValue(),e.$emit&&e.$emit("input",e.code)})),this.language){var t=this._getLanguage(this.language);t&&(this.mode=t.label)}this.coder.setOption("extraKeys",{F11:function(e){e.setOption("fullScreen",!e.getOption("fullScreen"))},Esc:function(e){e.getOption("fullScreen")&&e.setOption("fullScreen",!1)}})},_getLanguage:function(e){return this.modes.find((function(t){var a=e.toLowerCase(),n=t.label.toLowerCase(),o=t.value.toLowerCase();return n===a||o===a}))},changeMode:function(e){this.coder.setOption("mode","text/".concat(e));var t=this._getLanguage(e).label.toLowerCase();this.$emit("language-change",t)}},mounted:function(){this._initialize()}},c=(a(1521),a(12)),u=Object(c.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"脚本内容"}},[a("div",{staticClass:"in-coder-panel"},[a("div",[a("el-select",{staticClass:"code-mode-select",on:{change:e.changeMode},model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}},e._l(e.modes,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("div",[a("textarea",{ref:"textarea",staticClass:"code-textarea",attrs:{name:"code"}})])])])],1)],1)}),[],!1,null,"50c0823b",null);t.default=u.exports},874:function(e,t,a){}}]);