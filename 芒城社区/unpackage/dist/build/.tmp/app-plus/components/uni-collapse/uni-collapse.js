(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-collapse/uni-collapse"],{"0f86":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c={name:"UniCollapse",props:{accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach(function(t,e){t.isOpen&&n.push(t.nameSync)}),this.$emit("change",n)}}};t.default=c},"32fb":function(n,t,e){"use strict";e.r(t);var c=e("9b3c"),u=e("b13b");for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);e("4209");var o=e("2877"),r=Object(o["a"])(u["default"],c["a"],c["b"],!1,null,"ab487652",null);t["default"]=r.exports},4209:function(n,t,e){"use strict";var c=e("fc9e"),u=e.n(c);u.a},"9b3c":function(n,t,e){"use strict";var c=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return c}),e.d(t,"b",function(){return u})},b13b:function(n,t,e){"use strict";e.r(t);var c=e("0f86"),u=e.n(c);for(var a in c)"default"!==a&&function(n){e.d(t,n,function(){return c[n]})}(a);t["default"]=u.a},fc9e:function(n,t,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("32fb"))
        })
    },
    [['components/uni-collapse/uni-collapse-create-component']]
]);                
