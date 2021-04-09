import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.n = ""
Vue.prototype.urlHead = "http://106.13.239.202/app/index.php?"
Vue.prototype.setPic = function(code,src){
  var that = this;
  uni.request({
  	url: 'http://106.13.239.202/index.php?c=uploadimg&m=setImg',
  	method: 'POST',
  	header: {"content-type": "application/x-www-form-urlencoded"},
  	data: {
		code:code,
		src:src
  		
  	},
  	success: res => {
  		
  	       
  	}
  });
}

Vue.prototype.getAddress = function(){
  var out;
  	uni.getStorage({
      key: 'address',
      success: function (res) {
  		   out = res.data;
  			
  		
      }
  	});
  return out;
}

Vue.prototype.getid = function(){
  var out;
  	uni.getStorage({
      key: 'id',
      success: function (res) {
  		   out = res.data;
  			
  		
      }
  	});
  return out;
}

Vue.prototype.getInto = function(){
  var out;
  	uni.getStorage({
      key: 'into',
      success: function (res) {
  		   out = res.data;
  			
  		
      }
  	});
  return out;
}
Vue.prototype.getCode = function(){
  var out;
  	uni.getStorage({
      key: 'code',
      success: function (res) {
  		   out = res.data;
  			
  		
      }
  	});
  return out;
}

// 查询数据库
Vue.prototype.getName = function(){
  var out;
  	uni.getStorage({
      key: 'name',
      success: function (res) {
  		   out = res.data;
  			
  		
      }
  	});
  return out;
  
}
Vue.prototype.getCommunity = function(){
  var out;
  	uni.getStorage({
      key: 'community',
      success: function (res) {
  		   out = res.data;
  			
  		
      }
  	});
  return out;
  
}
Vue.prototype.isComAdmin = function(){
  var out;
  	uni.getStorage({
      key: 'admin',
      success: function (res) {
  		   if(res.data == "Admin"){
			   out = true;
		   }else if(res.data == "superAdmin"){
			   out = false;
		   }else{
			   out = false;
		   }
		   
  			
  		
      }
  	});
  return out;
  
}
Vue.prototype.isSuperAdmin = function(){
  var out;
  	uni.getStorage({
      key: 'admin',
      success: function (res) {
  		   if(res.data == "Admin"){
			   out = false;
		   }else if(res.data == "superAdmin"){
			   out = true;
		   }else{
			   out = false;
		   }
		   
  			
  		
      }
  	});
  return out;
  
}
Vue.prototype.getPhone = function(){
	var out;
	uni.getStorage({
      key: 'phone',
      success: function (res) {
		   out = res.data;
			
  		
      }
	});
  return out;
}

Vue.prototype.isApprove = function(){
  
	var out;
	uni.getStorage({
		key: 'approve',
		success: function (res) {
  	   out = res.data;
  		
  	
		}
	});
  	if(!out){
  		return true;
  	}else{
  		return false;
  	}
  
}

			
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()


