(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{1602:function(t,e,n){},"2ed9":function(t,e,n){"use strict";(function(t,e){n("15a3"),n("921b");var o=a(n("66fd")),u=a(n("cd9b"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}o.default.config.productionTip=!1,o.default.prototype.n="",o.default.prototype.urlHead="http://106.13.239.202/app/index.php?",o.default.prototype.setPic=function(e,n){t.request({url:"http://106.13.239.202/index.php?c=uploadimg&m=setImg",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{code:e,src:n},success:function(t){}})},o.default.prototype.getAddress=function(){var e;return t.getStorage({key:"address",success:function(t){e=t.data}}),e},o.default.prototype.getid=function(){var e;return t.getStorage({key:"id",success:function(t){e=t.data}}),e},o.default.prototype.getInto=function(){var e;return t.getStorage({key:"into",success:function(t){e=t.data}}),e},o.default.prototype.getCode=function(){var e;return t.getStorage({key:"code",success:function(t){e=t.data}}),e},o.default.prototype.getName=function(){var e;return t.getStorage({key:"name",success:function(t){e=t.data}}),e},o.default.prototype.getCommunity=function(){var e;return t.getStorage({key:"community",success:function(t){e=t.data}}),e},o.default.prototype.isComAdmin=function(){var e;return t.getStorage({key:"admin",success:function(t){e="Admin"==t.data||(t.data,!1)}}),e},o.default.prototype.isSuperAdmin=function(){var e;return t.getStorage({key:"admin",success:function(t){e="Admin"!=t.data&&"superAdmin"==t.data}}),e},o.default.prototype.getPhone=function(){var e;return t.getStorage({key:"phone",success:function(t){e=t.data}}),e},o.default.prototype.isApprove=function(){var e;return t.getStorage({key:"approve",success:function(t){e=t.data}}),!e},u.default.mpType="app";var i=new o.default(r({},u.default));e(i).$mount()}).call(this,n("6e42")["default"],n("6e42")["createApp"])},"481b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){console.log(t("App Launch"," at App.vue:4"))},onShow:function(){console.log(t("App Show"," at App.vue:7"))},onHide:function(){console.log(t("App Hide"," at App.vue:10"))}};e.default=n}).call(this,n("0de9")["default"])},"5f57":function(t,e,n){"use strict";var o=n("1602"),u=n.n(o);u.a},cd9b:function(t,e,n){"use strict";n.r(e);var o=n("f4eb");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("5f57");var a,r,c=n("2877"),i=Object(c["a"])(o["default"],a,r,!1,null,null,null);e["default"]=i.exports},f4eb:function(t,e,n){"use strict";n.r(e);var o=n("481b"),u=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=u.a}},[["2ed9","common/runtime","common/vendor"]]]);