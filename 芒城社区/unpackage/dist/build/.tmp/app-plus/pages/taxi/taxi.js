(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/taxi/taxi"],{"28d6":function(t,e,n){"use strict";(function(t){n("15a3"),n("921b");a(n("66fd"));var e=a(n("be1d"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"5efd":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},"6d3e":function(t,e,n){"use strict";n.r(e);var a=n("7145"),u=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=u.a},7145:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{list:[],stute:[]}},onShow:function(){var e=this,a=0,u=0;t.request({url:"http://106.13.239.202/index.php?c=taxi&m=taxilist",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{community:e.getInto()},success:function(t){console.log(n(t.data," at pages\\taxi\\taxi.vue:61")),e.list=t.data,u=t.data.data.length;while(a<u)0==e.list[a].status?e.stute[a]="未接单":1==e.list[a].status&&(e.stute[a]="已经接单"),a++},fail:function(){},complete:function(){}})},methods:{tophone:function(e){console.log(n(this.phone," at pages\\taxi\\taxi.vue:92")),t.makePhoneCall({phoneNumber:e,success:function(t){console.log(n("调用成功!"," at pages\\taxi\\taxi.vue:100"))},fail:function(t){console.log(n("调用失败!"," at pages\\taxi\\taxi.vue:105"))}})}}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},be1d:function(t,e,n){"use strict";n.r(e);var a=n("5efd"),u=n("6d3e");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);var i=n("2877"),c=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports}},[["28d6","common/runtime","common/vendor"]]]);