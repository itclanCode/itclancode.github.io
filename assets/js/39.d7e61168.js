(window.webpackJsonp=window.webpackJsonp||[]).push([[39,175],{1326:function(t,e,n){"use strict";n(791)},1660:function(t,e,n){"use strict";n.r(e);var u={components:{SWUpdatePopup:n(975).default}},o=(n(1326),n(12)),a=Object(o.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){var u=e.enabled,o=e.reload,a=e.message,s=e.buttonText;return[u?n("div",{staticClass:"my-sw-update-popup"},[t._v("\n    "+t._s(a)),n("br"),t._v(" "),n("button",{on:{click:o}},[t._v(t._s(s))])]):t._e()]}}])})}),[],!1,null,null,null);e.default=a.exports},695:function(t,e,n){},734:function(t,e,n){"use strict";n(695)},791:function(t,e,n){},975:function(t,e,n){"use strict";n.r(e);var u=n(108),o=n(0),a={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}},s={name:"SWUpdatePopup",data:function(){return{rawPopupConfig:{"/zh/":{message:"发现有新的内容更新,马上更新",buttonText:"刷新"}},updateEvent:null}},computed:{popupConfig:function(){return Object(o.g)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||a["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||a["/"].buttonText}},created:function(){u.a.$on("sw-updated",this.onSWUpdated),!0==={"/zh/":{message:"发现有新的内容更新,马上更新",buttonText:"刷新"}}&&(this.rawPopupConfig=a)},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then((function(){location.reload(!0)})),this.updateEvent=null)}}},i=(n(734),n(12)),p=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",(function(){return[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)+"\n\n      "),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")])]):t._e()]}),{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"fec8b358",null);e.default=p.exports}}]);