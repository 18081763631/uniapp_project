(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/xfl-select/xfl-select"],{"0d9e":function(t,e,i){"use strict";i.r(e);var n=i("74bc"),o=i("278f");for(var l in o)"default"!==l&&function(t){i.d(e,t,function(){return o[t]})}(l);i("b5e5");var s=i("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"2cf57a12",null);e["default"]=r.exports},"278f":function(t,e,i){"use strict";i.r(e);var n=i("60bb"),o=i.n(n);for(var l in n)"default"!==l&&function(t){i.d(e,t,function(){return n[t]})}(l);e["default"]=o.a},"60bb":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}function u(t,e){return h(t)||a(t,e)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(t,e){var i=[],n=!0,o=!1,l=void 0;try{for(var s,r=t[Symbol.iterator]();!(n=(s=r.next()).done);n=!0)if(i.push(s.value),e&&i.length===e)break}catch(u){o=!0,l=u}finally{try{n||null==r["return"]||r["return"]()}finally{if(o)throw l}}return i}function h(t){if(Array.isArray(t))return t}n.default.__xfl_select=n.default.__xfl_select||new n.default;var f={name:"xfl-select",props:{list:{type:Array,default:function(){return[]}},focusShowList:null,initValue:null,isCanInput:{type:Boolean,default:!1},selectHideType:{type:String,default:"hideAll"},placeholder:{type:String,default:"请选择"},style_Container:{type:String,default:""},disabled:{type:Boolean,default:!1},showItemNum:{type:Number,default:5},listShow:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0}},data:function(){return{isShowList:!1,selectText:"",activeIndex:-1,isRotate:!1,listTop__:50}},watch:{listShow:function(t,e){this.onDataChange_listShow(t,e)}},computed:{focusShowList__:function(){return null!=this.focusShowList&&this.focusShowList},listBoxHeight__:function(){var t=2;return this.showItemNum*t},showInput:function(){return this.isCanInput&&!this.disabled},innerList:function(){var t=[],e=this.list;return e.forEach(function(e,i){var n="object"===typeof e&&"value"in e?e.value:e,o="object"===typeof e&&1==e.disabled;t.push({isActive:!1,value:n,disabled:o})}),t}},mounted:function(){n.default.__xfl_select.$on("open",this.onOtherXflSelectOpen),this.switchMgr=new v(this.onListShow,this.onListHide),this.onDataChange_listShow(this.listShow,null),this.init()},beforeDestroy:function(){n.default.__xfl_select.$off("open",this.onOtherXflSelectOpen)},methods:{onOtherXflSelectOpen:function(t){"independent"!==this.selectHideType&&"hideOthers"!==this.selectHideType&&t!==this&&this.switchMgr.close(100)},init:function(){this.clearInput(),this.setInput(this.initValue),this.changeActiveIndex(this.initValue),this.getInputBoxHeight()},getInputBoxHeight:function(){var t=this,e=this;d(".show-box",e,function(e){if(e){var i=6;t.listTop__=e[0].height+i}})},getIndex:function(t){var e=p(this.innerList,t,"value");return e},itemIsDisabled:function(t){return this.innerList[t].disabled},itemIsActive:function(t){return t===this.activeIndex},onDataChange_listShow:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];arguments.length>1&&arguments[1];t?this.switchMgr.open():this.switchMgr.close(100)},onFocus:function(t){this.focusShowList__&&this.switchMgr.open(),this.$emit("focus",t)},onBlur:function(t){this.focusShowList__&&this.switchMgr.close(100),this.$emit("blur",t)},onUpperClick:function(){this.disabled||(this.switchMgr.toggle("auto",-1,100),this.$emit("input-click"))},onClear:function(){this.clearItemActive(),this.clearInput(),this.$emit("clear")},onInput:function(t){var e=t.detail.value;this.changeActiveIndex(e),this.$emit("input",t)},clearInput:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.placeholder=null==t?this.placeholder:t,this.selectText=this.showInput?"":this.placeholder},setInput:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!=t&&(this.selectText=t)},changeActiveIndex:function(t){if(null!=t){var e=t,i=t;"number"!==typeof t?e=this.getIndex(i):i=this.innerList[e].value,e>-1?!this.itemIsActive(e)&&this.setItemActive(e,i):this.clearItemActive(),this.setInput(i)}},clearItemActive:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;t<0&&(this.activeIndex=-1)},setItemActive:function(t,e){this.itemIsDisabled(t)||(this.activeIndex=t)},onListClick:function(){},onClickItem:function(t,e){this.itemIsDisabled(t)?this.switchMgr.open():(this.switchMgr.close(100),this.disabled||this.itemIsActive(t)||(this.clearItemActive(),this.setItemActive(t,e),this.$emit("change",{newVal:e,oldVal:this.selectText,index:t,orignItem:this.list[t]}),this.setInput(e)))},onListHide:function(){this.isRotate=!1,this.isShowList=!1,this.$emit("visible-change",!1)},onListShow:function(){this.isShowList=!0,this.isRotate=!0,this.$emit("visible-change",!0),"independent"!==this.selectHideType&&"hideSelf"!==this.selectHideType&&n.default.__xfl_select.$emit("open",this)}}};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.selector,o=void 0===i?"selector":i,l=e.component,s=void 0===l?null:l,r=e.attemptSpaceTime,c=void 0===r?16:r,a=e.attemptSpaceRate,h=void 0===a?1.5:a,f=e.totalAttemptNum,d=void 0===f?8:f,v=e.id,p=void 0===v||v,g=e.dataset,m=void 0===g||g,y=e.rect,w=void 0===y||y,I=e.size,_=void 0===I||I,S=e.scrollOffset,x=void 0===S||S,T=e.properties,A=void 0===T?[]:T,O=e.computedStyle,L=void 0===O?[]:O,k=e.context,$=void 0===k||k,M=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,C=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,H=arguments;o="string"===typeof H[0]?H[0]:String(o),"function"!==typeof H[1]&&(s=H[1],M=H[2],C=H[3]),!s instanceof n.default&&(s=null);var j={selector:o,attemptSpaceTime:c,totalAttemptNum:d,attemptSpaceRate:h,id:p,dataset:m,rect:w,size:_,scrollOffset:x,properties:A,computedStyle:L,context:$},B=t.createSelectorQuery();s&&B.in(s);var D,N="viewport"===o?B.selectViewport():B.selectAll(o);return N.fields(j),"function"!==typeof M&&(D=new Promise(function(t){return M=t})),b(function(t,e){B.exec(function(i){var n=u(i,1),o=n[0];o&&0===o.length&&(o=null),o||d<=e?"function"===typeof M&&M.call(C,o):t(c),c=Math.round(c*h)})})(),D}e.default=f;var v=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;l(this,t),this.onopen=e,this.onclose=i,this.isOpen=!1}return r(t,[{key:"toggle",value:function(){var t,e,i,n,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";"close"!==o&&"open"!==o&&(o=this.isOpen?"close":"open");for(var l,s=0;s<(arguments.length<=1?0:arguments.length-1);s++)switch(l=s+1<1||arguments.length<=s+1?void 0:arguments[s+1],typeof l){case"number":null==t?t=l:e=l;break;case"string":null==i?i=l:n=l;break}var r="open"===o?t:e,u="open"===o?i:n;this.change(o,null==r?-1:r,null==u?"both":u)}},{key:"open",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"both";this.change("open",t,e)}},{key:"close",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"both";this.change("close",t,e)}},{key:"cancel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"both";"open"===t?(clearTimeout(this.openTimer),this.openTimer=null):"close"===t?(clearTimeout(this.closeTimer),this.closeTimer=null):"both"===t&&(clearTimeout(this.closeTimer),this.closeTimer=null,clearTimeout(this.openTimer),this.openTimer=null)}},{key:"change",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"both";if(this.cancel(n),!(this.isOpen&&"open"===t||!this.isOpen&&"close"===t)){var o="on"+t;i<0?(this.isOpen="open"===t,"function"===typeof this[o]&&this[o]()):this[t+"Timer"]=setTimeout(function(){e.isOpen="open"===t,"function"===typeof e[o]&&e[o]()},i)}}}]),t}();function p(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=-1;return i&&("string"===typeof i?i=i.split(/\s*[\,\.]\s*/):Array.isArray(i)||(i="")),g(t,function(t,l,s){if(i&&(t=m(t,i)),"function"===typeof n?n(t,e,arrElem,l,s):t===e)return o=l,!1}),o}function g(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t||"function"===typeof t||"function"!==typeof e)return t;var n=Object.keys(t),o=t.length,l="number"==typeof o&&o>-1&&o%1==0&&o<=9007199254740991;if(l){for(var s,r=/^(?:0|[1-9]\d*)$/,u=9007199254740991,c=[],a=0;a<n.length;a++)s=n[a],r.test(s)&&+s<=u&&c.push(s);n=c}for(var h=0;h<n.length;h++)if(!1===e.call(i,t[n[h]],n[h],t))break;return t}function m(t,e){for(var i,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],l=0,s=t,r=e.length;l<r;l++){if(!s||"object"!==typeof s)return;if(i=e[l],l===r-1){if(void 0===n)return s[i];s[i]=n}else{if(!s[i]||"object"!==typeof s[i]){if(!o||void 0===n)return;s[i]={}}s=s[i]}}}function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=function(t){return t=parseInt(t),!isNaN(t)&&isFinite(t)||(t=-1),t},n=[],o=function(t){if(null==t){for(var e=0;e<n.length;e++)clearTimeout(n[e]);n.length=0}else{var i=n.indexOf(t);i>-1&&(clearTimeout(n[i]),n.splice(i,1))}},l=0,s=function s(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"both";if("new"===u)o();else if("old"===u&&n.length>0)return;if(r=i(r),r<0)t.call(e,s,++l,n);else{var c=setTimeout(function(){o(c),t.call(e,s,++l,n)},r);n.push(c)}};return s}}).call(this,i("6e42")["default"])},"74bc":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},"8d9f":function(t,e,i){},b5e5:function(t,e,i){"use strict";var n=i("8d9f"),o=i.n(n);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/xfl-select/xfl-select-create-component',
    {
        'components/xfl-select/xfl-select-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("0d9e"))
        })
    },
    [['components/xfl-select/xfl-select-create-component']]
]);                
