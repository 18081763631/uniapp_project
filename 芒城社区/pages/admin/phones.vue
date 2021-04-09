<template>
	<view class="X-baseBackgroundColor X-C">
	<view class="X-C X-contentBackgroundColor X-radius X-out-interval">
			<text class="X-R-Center X-fontspacing X-font-weight" style="font-size: 50upx;color: #304E07;">管理员</text>
		<view  class="X-R X-R-Center X-RautoAdjust X-have-interval" style="width: 90%;" v-if="item.type == 0&&itme.community == this.getInto()"  v-for="(item, index) in list" :key="item.content">
					<text class="X-fontspacing" style="color: #304E07;">{{item.name}}</text>
					<view class="X-R">
						<text class="X-fontspacing" style="color: #d5861d;">{{item.content}}</text>
						<view class="X-allCenter cuIcon-phone" @click="call(item.content)"></view>
					</view>
		</view>
	</view>
	<view class="X-C X-contentBackgroundColor X-radius X-out-interval">
			<text class="X-allCenter X-fontspacing X-R-Center X-font-weight" style="font-size: 50upx;color: #304E07;">工作人员</text>
		<view  class="X-R X-R-Center X-RautoAdjust X-have-interval" style="width: 90%;" v-if="item.type == 1&&itme.community == this.getInto()"  v-for="(item, index) in list" :key="item.content">
					<view class="X-fontspacing" style="color: #304E07;">{{item.name}} </view>
					<view class="X-R">
						<view class="X-fontspacing" style="color: #d5861d;">{{item.content}}</view>
						<view class="X-allCenter cuIcon-phone" @click="call(item.content)"></view>
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
		onLoad() {
			this.getPhones()
		},
		methods: {
			call(phone){
				uni.makePhoneCall({
				    phoneNumber: phone
				});
			},
			getPhones(){
				var that = this;
				uni.request({
					url: 'http://106.13.239.202/index.php?c=admin&m=getPhones',
					method: 'GET',
					header: {"content-type": "application/x-www-form-urlencoded"},
					data: {
					},
					success: res => {
						that.list = res.data.data;
						 console.log(res);
					       
					},
					fail: () => {
					
					},
					complete: () => {
						
					}
				});
				},
		}
	}
</script>

<style>

</style>
