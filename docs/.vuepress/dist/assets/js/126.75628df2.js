(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{1027:function(t,i,s){},1827:function(t,i,s){"use strict";s(1027)},1961:function(t,i,s){"use strict";s.r(i);s(83),s(386);var e={name:"fireWorkEffect",data:function(){return{}},mounted:function(){this.drawCanvas()},methods:{drawCanvas:function(){window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};var t,i,s=document.getElementById("canvas"),e=s.getContext("2d"),n=window.innerWidth,o=window.innerHeight,h=[],a=[],r=120,d=0,c=0,u=!1;function p(t,i){return Math.random()*(i-t)+t}function l(t,i,s,e){var n=t-s,o=i-e;return Math.sqrt(Math.pow(n,2)+Math.pow(o,2))}function f(t,i,s,e){for(this.x=t,this.y=i,this.sx=t,this.sy=i,this.tx=s,this.ty=e,this.distanceToTarget=l(t,i,s,e),this.distanceTraveled=0,this.coordinates=[],this.coordinateCount=3;this.coordinateCount--;)this.coordinates.push([this.x,this.y]);this.angle=Math.atan2(e-i,s-t),this.speed=2,this.acceleration=1.05,this.brightness=p(50,70),this.targetRadius=1}function g(t,i){for(this.x=t,this.y=i,this.coordinates=[],this.coordinateCount=5;this.coordinateCount--;)this.coordinates.push([this.x,this.y]);this.angle=p(0,2*Math.PI),this.speed=p(1,10),this.friction=.95,this.gravity=1,this.hue=p(r-20,r+20),this.brightness=p(50,80),this.alpha=1,this.decay=p(.015,.03)}s.width=n,s.height=o,f.prototype.update=function(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.targetRadius<8?this.targetRadius+=.3:this.targetRadius=1,this.speed*=this.acceleration;var i=Math.cos(this.angle)*this.speed,s=Math.sin(this.angle)*this.speed;this.distanceTraveled=l(this.sx,this.sy,this.x+i,this.y+s),this.distanceTraveled>=this.distanceToTarget?(!function(t,i){var s=30;for(;s--;)a.push(new g(t,i))}(this.tx,this.ty),h.splice(t,1)):(this.x+=i,this.y+=s)},f.prototype.draw=function(){e.beginPath(),e.moveTo(this.coordinates[this.coordinates.length-1][0],this.coordinates[this.coordinates.length-1][1]),e.lineTo(this.x,this.y),e.strokeStyle="hsl("+r+", 100%, "+this.brightness+"%)",e.stroke(),e.beginPath(),e.arc(this.tx,this.ty,this.targetRadius,0,2*Math.PI),e.stroke()},g.prototype.update=function(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.friction,this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed+this.gravity,this.alpha-=this.decay,this.alpha<=this.decay&&a.splice(t,1)},g.prototype.draw=function(){e.beginPath(),e.moveTo(this.coordinates[this.coordinates.length-1][0],this.coordinates[this.coordinates.length-1][1]),e.lineTo(this.x,this.y),e.strokeStyle="hsla("+this.hue+", 100%, "+this.brightness+"%, "+this.alpha+")",e.stroke()},s.addEventListener("mousemove",(function(e){t=e.pageX-s.offsetLeft,i=e.pageY-s.offsetTop})),s.addEventListener("mousedown",(function(t){t.preventDefault(),u=!0})),s.addEventListener("mouseup",(function(t){t.preventDefault(),u=!1})),window.onload=function s(){requestAnimFrame(s),r+=.5,e.globalCompositeOperation="destination-out",e.fillStyle="rgba(0, 0, 0, 0.5)",e.fillRect(0,0,n,o),e.globalCompositeOperation="lighter";for(var l=h.length;l--;)h[l].draw(),h[l].update(l);for(l=a.length;l--;)a[l].draw(),a[l].update(l);c>=80?u||(h.push(new f(n/2,o,p(0,n),p(0,o/2))),c=0):c++,d>=5?u&&(h.push(new f(n/2,o,t,i)),d=0):d++}}}},n=(s(1827),s(10)),o=Object(n.a)(e,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"wrapper"},[i("canvas",{attrs:{id:"canvas"}},[this._v("Canvas is not supported in your browser.")])])}],!1,null,"3432eaf8",null);i.default=o.exports}}]);