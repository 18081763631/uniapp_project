<template>
	<view class="X-C X-baseBackgroundColor">
		<view class="X-have-interval X-C X-contentBackgroundColor">
			<text class="X-fontspacing X-font-weight" style="color: #304e07;">快捷出行</text>
			<text class="X-fontspacing X-fontSizeSS X-top" style="color: #d5861d;">温馨提示：请遵守社区约车的相关条约</text>
		</view>
		<view class="X-C X-contentBackgroundColor X-CardShadow X-radius X-have-interval X-allCenter" style="width: 90%;">
			<text class="X-fontspacing X-font-weight" style="font-size: 50upx;">客户信息：</text>
			<view class="X-R">
				<text class="X-fontspacing" style="font-size: 40upx;">目的地：{{details[0].address}}</text>
				<text class="X-fontspacing" style="font-size: 40upx;"></text>
			</view>
			<view class="X-R">
				<text class="X-fontspacing" style="font-size: 40upx;">出行时间：</text>
				<text class="X-fontspacing" style="font-size: 40upx;">{{details[0                                                              ].time}}</text>
			</view>
			<view class="X-R">
				<text class="X-fontspacing" style="font-size: 40upx;">客户名：</text>
				<text class="X-fontspacing" style="font-size: 40upx;">{{details[0].name}}</text>
			</view>
			<view class="X-R">
				<text class="X-fontspacing" style="font-size: 40upx;">电话：</text>
				<text class="X-fontspacing" style="font-size: 40upx;">{{details[0].phone}}</text>
			</view>
		</view>
		<view class="X-button"><text class=" X-allCenter" style="font-size: 50upx;">接单</text></view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				details:[]
				
			}
		},
		onLoad(option) {
		        
				var that = this;
		     
			uni.request({
				
				url: 'http://106.13.239.202/index.php?c=taxi&m=taxidetails',
				method: 'POST',
				header: {"content-type": "application/x-www-form-urlencoded"}, 
				data: {
					code:option.code
				},
				success: res => {
				  that.details = res.data.data;
				  console.log( that.details )
				
				},
				fail: () => {
				
				},
				complete: () => {}
			});
			
			
		}
		,
		methods: {
			
		}
	}
</script>
<style>
	
</style>