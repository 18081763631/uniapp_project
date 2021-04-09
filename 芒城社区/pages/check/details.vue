<template>
	<view class="X-C ">
		<view class="X-radius" style=" height: 300upx;width: 100%; ">
			<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1500" style="border-radius: 10upx;">

				<swiper-item v-for="(item,index) in pic" :key="index">
			  <image @click="yu(index)" class="X-radius" style="height: 100%;width: 100%;" :src="item.src" mode=""></image>
				</swiper-item>

			</swiper>
		</view>


		<view class="X-C">
			<text class="X-left X-top X-fontspacing" style="font-size: 30upx;color: #1c3f2f;">成都市金牛区南华小区</text>
		</view>
		<view class="X-C X-top">
			<view class="X-R X-left" style="font-size: 30upx;">
				<text class="X-fontspacing" style="color: #1c3f2f;">发布人:</text>
				<text class="X-fontspacing" style="color: #1c3f2f;">{{details.name}}</text>
			</view>

			<view class="X-R X-left" style="font-size: 30upx;">
				<text class="X-fontspacing" style="color: #1c3f2f;">发布时间:</text>
				<text class="X-fontspacing" style="color: #1c3f2f;">{{details.time}}</text>
			</view>
			<view class="X-R X-left X-align-items X-RautoAdjust" style="font-size: 30upx;">
				<view class="X-R">
					<text class="X-fontspacing" style="color: #1c3f2f;">联系方式:</text>
					<text class="X-fontspacing" style="color: #1c3f2f;">{{details.phone}}</text>
				</view>

				<image style="width: 50upx;height: 50upx; " src="../../static/电话.png"></image>
			</view>
		</view>
		<view class="X-R X-RautoAdjust X-top">
			<view></view>
			<view class="X-C X-align-items">
				<view class="X-R X-align-items">
					<image style="width: 80upx;height: 80upx;" src="../../static/房屋租金.png"></image>
					<text class="X-fontspacing" style="color: #1c3f2f;">租金 </text>
				</view>
				<text class="X-fontspacing X-fontSizeS" style="color:#1c3f2f ;">{{details.money}}/月 </text>
			</view>
			<view class="X-C X-align-items">
				<view class="X-R X-align-items" style="align-items: center;">
					<image style="width: 80upx;height: 80upx;" src="../../static/户型.png"></image>
					<text class="X-fontspacing" style="color: #1c3f2f;">户型 </text>
				</view>
				<text class="X-fontspacing X-fontSizeS" style="color:#1c3f2f ;">{{details.type}}</text>
			</view>
			<view class="X-C X-align-items">
				<view class="X-R X-align-items">
					<image style="width: 80upx;height: 80upx;" src="../../static/面积-线.png"></image>
					<text class="X-fontspacing" style="color: #1c3f2f;">面积 </text>
				</view>
				<text class="X-fontspacing X-fontSizeS" style="color:#1c3f2f ;">{{details.area}} m² </text>
			</view>
			<view></view>
		</view>
		<view class="X-top" style="height: 1upx; background: #F5F5F5;"></view>

		<view class="X-R X-top X-left" style="font-size: 30upx;">

			<view class="X-C" style="width: 50%;">
				<view class="X-R">
					<text class="X-fontspacing" style="color: #1c3f2f;">朝向:</text>
					<text class="X-fontspacing X-left" style="color: #1c3f2f;">{{details.direction}}</text>
				</view>
				<view class="X-R X-top">
					<text class="X-fontspacing" style="color: #1c3f2f;">楼层:</text>
					<text class="X-fontspacing X-left" style="color: #1c3f2f;">{{details.level}}</text>
				</view>
				<view class="X-R X-top">
					<text class="X-fontspacing" style="color: #1c3f2f;">装修:</text>
					<text class="X-fontspacing X-left" style="color: #1c3f2f;">{{details.fitment}}</text>
				</view>

			</view>

			<view class="X-C">

				<view class="X-R X-top">
					<text class="X-fontspacing" style="color: #1c3f2f;">门牌:</text>
					<text class="X-fontspacing X-left" style="color: #1c3f2f;">{{details.door}}</text>
				</view>
				<view class="X-R X-top">
					<text class="X-fontspacing" style="color: #1c3f2f;">权属:</text>
					<text class="X-fontspacing X-left" style="color: #1c3f2f;">产权</text>
				</view>

			</view>

		</view>

		<view class="X-C X-top ">
			<text class="X-fontspacing X-left" style="color: #1c3f2f;">详情:</text>
			<text class="X-wrap X-left  X-have-interval X-fontspacing" style="font-size: 20upx; text-indent: 2em;color: #1c3f2f;">{{details.describe}}</text>
		</view>
		<view class="X-line"></view>
		<view class="X-top X-RautoAdjust " style="padding-bottom: 20upx;">
			<view></view>
			<view @click="pass()" > <button style="font-size: 30upx; background: #4CD964;color: #FFFFFF;">审核通过</button>
			</view>
			<view @click="fail()"  > <button style="font-size: 30upx; background: #d5861d;color: #FFFFFF;">审核驳回</button>
			</view>
			<view></view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
            details:[],
			pic:[],
			code:"",
			phone:"",
			sss:"http://106.13.239.202/imgs/5de122c15cfbb.png"
			}
		},
		onLoad(option) {
			
		    var that = this;
			that.code = option.code;
		   
			uni.request({
				url: 'http://106.13.239.202/index.php?c=rent&m=checkdetails',
				method: 'POST',
				header: {"content-type": "application/x-www-form-urlencoded"}, 
				data: {
					
					code:option.code
					
				},
				success: res => {
					
				
				   that.details = res.data.data;
				   
				   that.phone   = res.data.data.phone;
				  
					
					
				},
				fail: () => {
				
				},
				complete: () => {}
			});
			
			uni.request({
				url: 'http://106.13.239.202/index.php?c=uploadimg&m=getSrc',
				method: 'POST',
				header: {"content-type": "application/x-www-form-urlencoded"}, 
				data: {
					
					code:option.code+"3"
					
				},
				success: res => {
				    that.pic = res.data.data;
	             
					
				},
				fail(e) {
					  console.log("fail")
				}
			});
			
		},
   methods: {
			yu(index){
			 // 预览图片
			 var that = this;
			
			  uni.previewImage({
			  urls:that.pic[index],
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
			fail(){
				uni.request({
				 	url: 'http://106.13.239.202/index.php?c=rent&m=salefail',
				 	method: 'POST',
				 	header: {"content-type": "application/x-www-form-urlencoded"}, 
				 	data: {
				 		
				 		code:this.code
				 		
				 	},
				 	success: res => {
				 		
				 	
				 	 
				 	    
						if(res.data.data=="2")
				 		{
							uni.showToast({
								title:"审核驳回",
								 duration: 2000,
							})
						}
				 		
				 		
				 	},
				 	fail(e) {
				 		  console.log("fail")
				 	}
				 });
			}
			,
          pass(){
			  var that =this;
                uni.request({
				 	url: 'http://106.13.239.202/index.php?c=rent&m=salepass',
				 	method: 'POST',
				 	header: {"content-type": "application/x-www-form-urlencoded"}, 
				 	data: {
				 		
				 		code:that.code
				 		
				 	},
				 	success: res => {
				 	    console.log(res.data.data)
						if(res.data.data==that.code)
				 		{
							uni.showToast({
								title:"审核通过",
								 duration: 2000,
							})
						}
				 		
				 		
				 	},
				 	fail(e) {
				 		  console.log("fail")
				 	}
				 });
			 }
		}
	}
</script>

