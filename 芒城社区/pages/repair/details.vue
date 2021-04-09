<template>
	<view class="X-C X-baseBackgroundColor">
		
		<view class="X-top X-contentBackgroundColor X-R">
			<image  style="width:300upx;height: 200upx;" src="../../static/worker.png"></image>
			<view class="X-C X-have-interval X-RautoAdjust" style="width: 100%; height: 150upx;">
				<text class="X-fontspacing" style="color: #1c3f2;">设备维修</text>
				<text class="X-fontspacing" style="color: #1c3f2;">{{onlywork.time}}</text>
			</view>
		</view>
		
		
		<view class="X-R X-have-interval X-top X-RautoAdjust X-contentBackgroundColor">
			<view><text class="X-fontspacing" style="color: #1c3f2;">联系人:</text>
			<text class="X-fontspacing" style="color: #1c3f2;">{{onlywork.name}}</text></view>
			<view class="X-R" @click="tophone()">
					<text class="X-left X-allCenter X-fontspacing" style="color: #1c3f2;">{{onlywork.phone}}</text>
					<image class=" X-allCenter " style="width: 50upx;height: 50upx;" src="../../static/call.png"></image>
			</view>
			
		</view>
		
		<view class="X-C X-top X-RautoAdjust">	
		<view >
			<view class="X-R X-contentBackgroundColor X-have-interval X-RautoAdjust" >
			<text class="X-fontspacing" style="color: #1c3f2;">工单编号:</text>
			<text class="X-fontspacing" style="color: #1c3f2;"> {{onlywork.code}}</text>
			</view>
		</view>
		<view class="X-R X-contentBackgroundColor X-have-interval X-RautoAdjust ">
			
			<text class="X-fontspacing" style="color: #1c3f2;">工单状态:</text>
			<text class="X-fontspacing" style="color: #1c3f2;">{{stute}}</text>
		</view>
			
		
		<view class="X-R X-contentBackgroundColor X-have-interval X-fontSizeS X-RautoAdjust">
			
			<text class="X-fontspacing" style="color: #1c3f2;">业主地址:</text>
			<view>
			<text class="X-fontspacing" style="color: #1c3f2;">{{onlywork.door}}</text>
			</view>
			
			
			
		</view>
		<view class="X-R X-contentBackgroundColor X-have-interval X-RautoAdjust">
			
			<text class="X-fontspacing" style="color: #1c3f2;">上门时间:</text>
			<text class="X-fontspacing" style="color: #1c3f2;">{{onlywork.time}}</text>
			
		</view>
		<view class="X-C X-contentBackgroundColor X-have-interval  X-RautoAdjust">
			
			<text class="X-fontspacing" style="color: #1c3f2;">工单内容:</text>
			<text class="X-fontspacing" style="color: #1c3f2;">{{onlywork.describe}}</text>
		
			
		</view>
		<view class="X-R X-allCenter" style="width: 100%; display: flex;flex-flow:wrap">
		 
		 <view v-for="(item,index) in src" :key="index">
			 <image :src="item" @click="yu(item)" style="width: 200upx;height: 200upx;display: flex; "></view>
		</view>
		
		
		</view>
		<view class="X-R" >
			<button @click="order()" class="X-top X-contentBackgroundColor X-allCenter " style=" width: 150upx;background: #304E07;" >接单</button>
		</view>
		
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				onlywork:[],
				stute:"",
				src:[],
				img:[],
				cod:"",
				phone:""
				
			}
		},
		onLoad(option) {
		   
			var that = this;
		      
			uni.request({
				
				url: 'http://106.13.239.202/index.php?c=workorder&m=onlywork',
				method: 'POST',
				header: {"content-type": "application/x-www-form-urlencoded"}, 
				data: {
					code:option.code
				},
				success: res => {
				 
				  that.onlywork = res.data.data;
				  that.cod = res.data.data.code;
				  that.phone = res.data.data.phone;
				
				  uni.request({
				  	
				  	url: 'http://106.13.239.202/index.php?c=uploadimg&m=getSrc',
				  	method: 'POST',
				  	header: {"content-type": "application/x-www-form-urlencoded"}, 
				  	data: {
				  		code:that.onlywork.picture
				  	},
				  	success: res => {
						
						var le = res.data.data.length;
						
					var l = [];
					for (var i = 0; i < le; i++) {
						l[i] = res.data.data[i].src;
						
					    }
				  	  
				  	  that.src = l;
					 
					  	
				  	}
				  });
				  if(that.onlywork.stute==0)
				  {
					  that.stute = "待处理";
				  }
				  else if(that.onlywork.stute==1)
				  {
					  that.stute = "已完成";
				  }
				}
			});
			
			
		}
		  ,
		methods: {
			yu(item){
			 // 预览图片
			        uni.previewImage({
			            urls: [item],
			            longPressActions: {
			                itemList: ['发送给朋友', '保存图片', '收藏'],
			                success: function(data) {
			                    console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
			                },
			                fail: function(err) {
			                    console.log(err.errMsg);
			                }
			            }
			        });
			},
			
            tophone(){
				console.log(this.phone)	
				uni.makePhoneCall({
				 	
				 	// 手机号
				    phoneNumber: this.phone, 
				
					// 成功回调
					success: (res) => {
						console.log('调用成功!')	
					},
				
					// 失败回调
					fail: (res) => {
						console.log('调用失败!')
					}
					
				  });
			},
			order(){
				
				uni.request({
					
					url: 'http://106.13.239.202/index.php?c=workorder&m=getwork',
					method: 'POST',
					header: {"content-type": "application/x-www-form-urlencoded"}, 
					data: {
						code:this.cod,
					
					},
					success: res => {
						
						var phone = this.getPhone();
						    console.log(res.data)
			                console.log("phone="+phone);
							
							uni.request({
								
								url: 'http://106.13.239.202/index.php?c=workorder&m=uphandler',
								method: 'POST',
								header: {"content-type": "application/x-www-form-urlencoded"}, 
								data: {
									code:this.cod,
									people:phone
								
								},
								success: res => {
									
									console.log(res.data)
									
								},
								fail(e) {
									console.log(e)
								}
							});
							
							if(res.data.data=="1"){
								uni.showToast({
									title:"接单成功"
								});
						}
						else{
							uni.showToast({
							title:"接单失败，请重试"
							});
						}
					},
					fail(e) {
						console.log(e)
					}
				});
			},
			view(index){
				console.log("D");
				console.log(this.src[0]);
				this.img[0] = '["'+this.src[index]+'"]';
				var that =this;
				console.log(this.img);
				uni.previewImage({
					urls: this.img
				});
				
			}
		}
	}
</script>

<style>
	.tu1
	{
		width: 50upx;
		height: 50upx;
	}
   .tupian
   {
	   width: 100upx;
	   height: 100upx;
   }
   .ht
   {   background: #FFFFFF;
	   display: flex;
	   flex-direction: row;
   } 
   .vcl
   {
	   display: flex;
	   flex-direction: column;
   }
</style>
