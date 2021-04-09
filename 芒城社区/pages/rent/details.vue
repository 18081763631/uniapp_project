<template>
	<view class="X-C">
		<view>
			<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1500">
				<swiper-item v-for="(photo,i) in pic" :key="i"><image class="X-radius" style="width: 100%;" :src="photo.src" mode="aspectFill"></image></swiper-item>
				</swiper>
		</view>
		<view class="X-R X-top">
			<view class="X-C X-allCenter">
				<text class="X-R-Center X-font-weight X-fontspacing X-fontSizeS" style="color: #304E07;">租金</text>
				<text class="X-R-Center X-fontspacing X-top" style="color: #1c3f2f;font-size: 20upx;">{{ details.money }}元/月</text>
			</view>
			<view class="X-out-interval" style="width: 5upx;background-color: #D6D6D6;"></view>
			<view class="X-C X-allCenter">
				<text class="X-R-Center X-font-weight X-fontspacing X-fontSizeS" style="color: #304E07;">户型</text>
				<text class="X-R-Center X-fontspacing" style="color: #1c3f2f;font-size: 20upx;">{{ details.type }}
				</text>
			</view>
			<view class="X-out-interval" style="width: 5upx;background-color: #D6D6D6;"></view>
			<view class="X-C X-allCenter">
				<text class="X-R-Center X-font-weight X-fontspacing X-fontSizeS" style="color: #304E07;">面积</text>
				<text class="X-R-Center X-fontspacing X-top" style="color: #1c3f2f;font-size: 20upx;">{{ details.area }}平方米</text>
			</view>
		</view>
		<view class="X-have-interval X-RautoAdjust">
			<view class="X-C X-out-interval">
				<view class="X-R">
					<text class="X-fontspacing X-fontSizeS X-C-Center" style="color: #1c3f2f;">门牌：</text>
					<text class="X-fontspacing X-C-Center" style="color: #1c3f2f;font-size: 25upx;">{{ details.door }}</text>
				</view>
				<view class="X-R X-top">
					<text class="X-fontspacing X-fontSizeS X-C-Center" style="color: #1c3f2f;">朝向：</text>
					<text class="X-fontspacing X-C-Center" style="color: #1c3f2f;font-size: 25upx;">{{ details.direction }}</text>
				</view>
			</view>
			<view class="X-C">
				<view class="X-R X-top">
				<text class="X-fontspacing X-fontSizeS X-C-Center" style="color: #1c3f2f;">装修：</text>
				<text class="X-fontspacing X-C-Center" style="color: #1c3f2f;font-size: 25upx;">{{ details.fitment }}</text>
			</view>
			<view class="X-R X-top">
				<text class="X-fontspacing X-fontSizeS X-C-Center" style="color: #1c3f2f;">楼层：</text>
				<text class="X-fontspacing X-C-Center" style="color: #1c3f2f;font-size: 25upx;">{{ details.direction }}</text>
			</view>
			</view>
		</view>
		<view class="X-RautoAdjust X-have-interval">
			<view class="X-C X-out-interval">
				<view class="X-R">
					<text class="X-fontspacing X-fontSizeS X-C-Center" style="color: #1c3f2f;">发布人：</text>
					<text class="X-fontspacing X-C-Center" style="color: #1c3f2f;font-size: 25upx;">{{ details.name }}</text>
				</view>
				<view class="X-R X-top">
					<text class="X-fontspacing X-fontSizeS X-C-Center" style="color: #1c3f2f;">发布时间：</text>
					<text class="X-fontspacing X-C-Center" style="color: #1c3f2f;font-size: 25upx;">{{ details.time }}</text>
				</view>
			</view>
			<image @click="tophone()" class="X-C-Center X-out-interval" style="width: 80upx;height: 80upx;border-radius: 80upx;" src="../../static/call.png"></image>
		</view>
		<view class="X-C X-have-interval">
			<text class="X-out-interval X-fontSizeS X-fontspacing X-font-weight" style="color: #304E07;">房屋详情</text>
				<text class="X-left X-fontspacing X-fontSizeS" style="text-indent: 2em;">{{ details.describe }}</text>
		</view>
		<view class="X-C X-have-interval">
		<text class="X-out-interval X-fontSizeS X-fontspacing X-font-weight" style="color: #304E07;">小区物业审核情况</text>
				<text class="X-left X-fontspacing X-fontSizeS" style="text-indent: 2em;color: #d5861d;">本房屋已通过小区物业审核</text>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			details: [],
			stute: '',
			pic:[],
			phone:"",
			
		};
	},
	onLoad(option) {
		var that = this;
		var i = 0;
		var co = "5de17c084d7c6"
		
		uni.request({
			url: 'http://106.13.239.202/index.php?c=rent&m=saledetails',
			method: 'POST',
			header: { 'content-type': 'application/x-www-form-urlencoded' },
			data: {
				code: option.code
			},
			success: res => {
				

				that.details = res.data.data;
                that.phone   = that.details.phone;
				
			}
		});
		uni.request({
			url: 'http://106.13.239.202/index.php?c=uploadimg&m=getSrc',
			method: 'POST',
			header: { 'content-type': 'application/x-www-form-urlencoded' },
			data: {
				code:option.code+"3"
			},
			success: res => {
				console.log(res);
				
					that.pic = res.data.data;
				
				
				
				
				
			}
		});
	},
	methods: {
		yu(photo){
		 // 预览图片
		        uni.previewImage({
		            urls: [photo.src],
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
	}
};
</script>

