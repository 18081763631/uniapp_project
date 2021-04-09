<template>
	<view class="X-C X-baseBackgroundColor">
	<view v-if="item.community == this.getInto()"  v-for="(item,index) in list" :key="index" class="X-have-interval" >
		<view  class="X-R X-contentBackgroundColor X-radius X-CardShadow X-allCenter X-bottom" style="width: 90%;">
			
				<view class="X-R X-C-Center X-have-interval">
					<image class="X-C-Center" style="width:80upx; height: 80upx; border-radius: 80upx;" src="../../static/missing-face.png"></image>
					<view class="X-left" style="width: 5upx;background-color: #DDDDDD;"></view>
				</view>
				<view class="X-C X-have-interval">
					<text class="X-fontSizeSS X-fontspacing" style="color: #1c3f2f;">{{item.content}}</text>
					<view class="X-RautoAdjust">
						<text class="X-fontSizeSS X-fontspacing X-top" style="color: #d5861d;">{{item.time}}</text>
					
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		onShow() {
			this.get();
		},
		methods: {
			get(){
				var that = this;
				uni.request({
					url: 'http://106.13.239.202/index.php?c=evaluate&m=getAll',
					method: 'GET',
					header: {"content-type": "application/x-www-form-urlencoded"},
					data: {
					},
					success: res => {
						console.log(res);
						 that.list = res.data.data;
					       
					}
				});
			},

			todetails(){
				uni.navigateTo({
					url: `/pages/repair/list`
				})




			
	
			
		}
	},
	}
</script>

<style>
</style>
