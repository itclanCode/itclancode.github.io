(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{1086:function(t,a,i){"use strict";i.r(a);i(178);var r=i(950),n=(i(984),{name:"hotChart",props:{chartData:{type:Array,required:!0},className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.$nextTick((function(){t.initEchart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initEchart:function(){this.myChart=r.init(this.$refs.hotChart),this.myChart.setOption({tooltip:{trigger:"item",formatter:"{b} <br/> 热词次数：{c} 次"},series:[{type:"wordCloud",sizeRange:[14,28],rotationRange:[0,0],gridSize:10,width:"100%",shape:"pentagon",top:0,textStyle:{normal:{fontFamily:"sans-serif",color:function(){return"rgb("+[Math.round(160*Math.random()),Math.round(160*Math.random()),Math.round(160*Math.random())].join(",")+")"}}},data:this.chartData}]},!0),this.myChart.off("click"),this.myChart.on("click",(function(t){console.log(t),window.open(t.data.href,"_blank")}))}},watch:{chartData:{handler:function(t,a){this.initEchart()},deep:!0}}}),e=i(12),h=Object(e.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"hotChart",style:{height:this.height,width:this.width},attrs:{className:this.chart}})}),[],!1,null,null,null);a.default=h.exports}}]);