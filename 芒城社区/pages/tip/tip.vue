<template>
	<view class="X-C X-baseBackgroundColor">
		<view class="X-have-interval X-C X-contentBackgroundColor">
			<text class="X-fontspacing X-font-weight" style="color: #304e07;">通知中心</text>
			<text class="X-fontspacing X-fontSizeSS X-top" style="color: #d5861d;">该数据来自于物业中心</text>
		</view>
		
		<view   v-if="item.stute == '0'"  v-for="(item,index) in tips" :key = "index"  class="X-C X-contentBackgroundColor X-have-interval X-radius X-CardShadow X-out-interval X-C">
			<view @click="go(item.code)" class="X-RautoAdjust">
				<view class=" X-R">
					<view v-if="!(item.stute == '1')" class="cuIcon-notice"></view>
					<view v-if="item.stute == '1'" class="cuIcon-noticefill" style="color: #d5861d;"></view>
					
				</view>
				<view class=" X-allCenter X-fontSizeS">点击查看...</view>
				<view class="X-R">
						<text class="X-fontspacing X-font-weight X-fontSizeSS" style="color: #d5861d;"></text>
						<text class="X-fontspacing X-font-weight" style="color: #d5861d;font-size: 20upx;margin-top: 8upx;">{{item.time}}</text>
					
				</view>
			</view>
			<text v-if="item.stute == '1'" class="X-fontspacing X-fontSizeSS X-out-interval" style="text-indent: 2em;color: #1c3f2f;">{{item.content}}</text>
		</view>
		<view  v-if="item.stute == '1'"  v-for="(item,index) in tips" :key = "index"  class="X-C X-contentBackgroundColor X-have-interval X-radius X-CardShadow X-out-interval X-C">
			<view @click="go(item.code)" class="X-RautoAdjust" >
				<view>
					<view v-if="!(item.stute == '1')" class="cuIcon-notice"></view>
					<view v-if="item.stute == '1'" class="cuIcon-noticefill" style="color: #d5861d;"></view>
				</view>
				<view class="X-R">
						<text class="X-fontspacing X-font-weight X-fontSizeSS" style="color: #d5861d;"></text>
						<text class="X-fontspacing X-font-weight" style="color: #d5861d;font-size: 20upx;margin-top: 8upx;">{{item.time}}</text>
					
				</view>
			</view>
			<text v-if="item.stute == '1'" class="X-fontspacing X-fontSizeSS X-out-interval" style="text-indent: 2em;color: #1c3f2f;">{{item.content}}</text>
		</view>
		
	</view>
</template>

<script>
	export default {
	        data() {
	            return {
					ok:false,
					tips:{}
	            }
	        },
			onShow() {
				this.loadData();
			},
	        methods: {
				loadData(){
					uni.showLoading({
						title:"获取中..."
					})
					var that =this;
					var phone =this.getPhone();
					uni.request({
						url: 'http://106.13.239.202/index.php?c=tip&m=myTip',
						method: 'POST',
						header: {"content-type": "application/x-www-form-urlencoded"}, 
						data: {
							phone:phone
						},
						success: res => {
							console.log(res.data.data);
							that.tips = res.data.data;
							uni.hideLoading();
						},
						fail: () => {
							uni.showToast({
								title:"请检查您的网络连接",
								icon:"none"
							})
						}
					});
				},
	            go(code) {
					console.log(code);
						var that =this;
						var phone =this.getPhone();
						uni.request({
							url: 'http://106.13.239.202/index.php?c=tip&m=read',
							method: 'POST',
							header: {"content-type": "application/x-www-form-urlencoded"}, 
							data: {
								code:code
							},
							success: res => {
								console.log(res);
								that.loadData();
									
							},
							fail: () => {
								uni.showToast({
									title:"请检查您的网络连接",
									icon:"none"
								})
							}
						});
	                    
	                
	            }
				
			}
		}
</script>

<style>
</style>
