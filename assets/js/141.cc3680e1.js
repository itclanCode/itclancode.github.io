(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1637:function(t,e,n){"use strict";n(950)},1808:function(t,e,n){"use strict";n.r(e);var i={name:"cloneNodeElem",data:function(){return{handleClone:function(){var t=document.querySelector(".myImg");if(t){var e=t.cloneNode(!0);e.children[1].addEventListener("click",(function(t){console.log(t);var e=t.currentTarget.parentElement;e.parentElement.removeChild(e)})),document.querySelector(".img-content").appendChild(e)}else alert("元素节点不存在,无法克隆新元素,请刷新页面,然后对原有的元素进行克隆"),location.reload()},handleDelete:function(t){console.log(t);var e=t.currentTarget.parentElement;console.log(e);var n=e.parentElement;console.log(n),n.removeChild(e)}}}},a=(n(1637),n(12)),l=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap"},[e("div",[e("el-button",{attrs:{type:"primary"},on:{click:this.handleClone}},[this._v("克隆")])],1),this._v(" "),e("div",{staticClass:"img-content"},[e("div",{staticClass:"myImg"},[e("img",{staticClass:"img",attrs:{src:"https://img1.baidu.com/it/u=829829583,2565413602&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=661",width:"150",height:"100",alt:""}}),this._v(" "),e("img",{staticClass:"closeimg",attrs:{src:"https://img0.baidu.com/it/u=3387898836,1597995708&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666026000&t=e8de3885ef1563b4f8806bc4fcc3507b",width:"25",height:"25",alt:""},on:{click:this.handleDelete}})])])])}),[],!1,null,"059dbe5f",null);e.default=l.exports},950:function(t,e,n){}}]);