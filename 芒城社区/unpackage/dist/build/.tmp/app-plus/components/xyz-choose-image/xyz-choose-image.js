(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/xyz-choose-image/xyz-choose-image"],{"0aa5":function(t,e,i){"use strict";i.r(e);var n=i("4d0d"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a},1213:function(t,e,i){},"12b7":function(t,e,i){"use strict";i.r(e);var n=i("e639"),s=i("0aa5");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("788e");var r=i("2877"),u=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,"0feb679a",null);e["default"]=u.exports},"4d0d":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function a(t,e,i,n,s,a,r){try{var u=t[a](r),o=u.value}catch(c){return void i(c)}u.done?e(o):Promise.resolve(o).then(n,s)}function r(t){return function(){var e=this,i=arguments;return new Promise(function(n,s){var r=t.apply(e,i);function u(t){a(r,n,s,u,o,"next",t)}function o(t){a(r,n,s,u,o,"throw",t)}u(void 0)})}}var u={props:{size:{type:Number,default:200},num:{type:Number,default:9},isSave:{type:Boolean,default:!0},saveStr:{type:String,default:"chooseImage"},isBase64:{type:Boolean,default:!0}},data:function(){return{imgList:[],base64:""}},methods:{chooseImage:function(){var t=r(n.default.mark(function t(){var e;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this,t.next=3,e.getImage();case 3:this.$emit("chooseImage",e.imgList);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getImage:function(){var e=this,i=e.num-e.imgList.length;return new Promise(function(n,s){t.chooseImage({count:i,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){e.isBase64,0!=e.imgList.length?e.imgList=e.imgList.concat(i.tempFilePaths):e.imgList=i.tempFilePaths,e.isSave&&t.setStorageSync(e.saveStr,e.imgList.join(",")),n(e.imgList)}})})},delImg:function(e){this.imgList.splice(e,1),this.imgList=this.imgList,this.isSave&&t.setStorageSync(this.saveStr,this.imgList.join(",")),this.$emit("delImg",this.imgList)},viewImg:function(e){t.previewImage({urls:this.imgList,current:e})}},onLoad:function(){if(this.isSave){var e=t.getStorageSync(this.saveStr);""!=e&&(e=e.split(","),e.length>this.num&&(e=e.slice(0,this.num)),this.imgList=e)}else t.removeStorageSync(this.saveStr)}};e.default=u}).call(this,i("6e42")["default"])},"788e":function(t,e,i){"use strict";var n=i("1213"),s=i.n(n);s.a},e639:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/xyz-choose-image/xyz-choose-image-create-component',
    {
        'components/xyz-choose-image/xyz-choose-image-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("12b7"))
        })
    },
    [['components/xyz-choose-image/xyz-choose-image-create-component']]
]);                
