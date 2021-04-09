<template>
	<view class="X-baseBackgroundColor X-C" >
		<view class="X-contentBackgroundColor X-have-interval " style="height: 200upx;">
			<text class="X-out-interval X-fontspacing X-font-weight" style="font-size: 50upx;color: #304E07;">我的账单</text>
			<view class="X-fontSizeSS X-top X-fontspacing X-left" style="color: #d5861d;">该数据来自于物业服务中心</view>
		</view>
		<view class="X-allCenter" v-if="!have">
			没有内容
		</view>
		<!-- 待缴费 -->
		<view @click="details(wait.All_fees)" v-if="wait.All_fees" class="X-contentBackgroundColor X-R X-out-interval X-radius X-outLine X-CardShadow X-RautoAdjust">
			<!-- 图和文字 -->
			<view class="X-C X-out-interval" style="width: 100upx;"><image class="X-allCenter" style="width: 80upx;height: 80upx;" src="../../static/house.png"></image></view>
			<!-- 竖线 -->
			<view class="mokuai2"></view>
			<!-- 后半部分 -->
			<view class="X-C X-have-interval" style="width: 420upx;">
				<view class="X-out-interval X-R X-allCenter">
					<text class="  X-fontSizeS X-fontspacing" style="color: #1c3f2f;"> 缴费账单共：  ￥{{wait.All_fees}} 元</text>
					
				</view>
				<view class= "X-out-interval">
					<text class="text4  X-fontspacing" style="color: #1c3f2f;">来自： {{this.getInto()}}</text>
				</view>
			</view>
			<view class="X-C">
				<view class="X-tag " style="background-color: #F0AD4E;">
					<view class="X-allCenter X-fontspacing" style="color: #fff;">待缴费</view>
				</view>
				<view class="X-R-Center X-font-weight X-fontspacing " style="font-size: 20upx; color: #d5861d;">{{ stute[index] }}</view>
				<view class=" X-R-Center X-font-weight X-fontspacing" style="font-size: 20upx; color: #304E07;margin-top: 60upx;">点击查看</view>
			</view>
		</view>
		<view @click="details(item.All_fees)" v-if="log" v-for="(item, index) in log" :key="index" class="X-contentBackgroundColor X-R X-out-interval X-radius X-outLine X-CardShadow">
			<!-- 图和文字 -->
			<view class="X-C X-out-interval" style="width: 100upx;"><image class="X-allCenter" style="width: 80upx;height: 80upx;" src="../../static/house.png"></image></view>
			<!-- 竖线 -->
			<view class="mokuai2"></view>
			<!-- 后半部分 -->
			<view class="X-C X-have-interval" style="width: 420upx;">
				<view class="X-out-interval X-R X-allCenter">
					<text class="  X-fontSizeS X-fontspacing" style="color: #1c3f2f;"> 缴费账单共：  ￥{{item.All_fees}} 元</text>
					
				</view>
				<view class= "X-out-interval">
					<text class="text4  X-fontspacing" style="color: #1c3f2f;">来自： {{this.getInto()}}</text>
				</view>
			</view>
			<view class="X-C">
				<view class="X-tag ">
					<view class="X-allCenter X-fontspacing" style="color: #fff;">已缴费</view>
				</view>
				<view class="X-R-Center X-font-weight X-fontspacing " style="font-size: 20upx; color: #d5861d;"></view>
				<view class=" X-R-Center X-font-weight X-fontspacing" style="font-size: 20upx; color: #304E07;margin-top: 60upx;">点击查看...</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				wait:[],
				stute:[],
				list:[],
				have:false,
				phone:"",
				log:[]
				
			}
		},
		onLoad() {
			this.get();
			this.phone = this.getPhone();
		},
		methods: {
			get(){
				var that =this;
				var phone = this.getPhone();
				console.log(this.getid());
				
				var url = "http://106.13.239.202:8080/advice_charge/get_fees?id="+this.getid();
				uni.request({
					url: url,
					method: 'get',
					header: {"content-type": "application/x-www-form-urlencoded"}, 
					data: {
						
						
						
						
					},
					success: res => {
						var i = 0;
						var total = 0;
						console.log(res);
						
							that.have = true;
							that.wait = res.data.data;
							
							console.log(total);
						
						
					     
					},
					fail: () => {
					
					},
					complete: () => {}
				});
				
			},
			details (money)
			{
	
				uni.navigateTo({
					url: `/pages/payment/details?context=${money}`
				})
			}
			  
			}
		}
	
</script>

<style>
	.jiaofeixiaokuai {
		width: 700upx;
		height: 200upx;
		display: flex;
		margin: auto;
		flex-direction: row;
		border-radius: 20upx;
		box-shadow: 2upx 5upx 5upx 3upx #909399;
		border: solid #555555 1upx;
	}

	.mokuai1 {
		width: 150upx;
		height: 150upx;
		display: flex;
		margin: auto;
		flex-direction: column;
	}

	.tupian {
		width: 80upx;
		height: 80upx;
		border-radius: 40upx;
		box-shadow: 2upx 5upx 5upx 3upx #909399;
		border: solid #555555 1upx;
		display: flex;
		margin: auto;
	}

	.tupian1 {
		width: 80upx;
		height: 80upx;
		border-radius: 50upx;
	}

	.wenzi1 {
		width: 100upx;
		height: 50upx;
		display: flex;
		margin: auto;
	}

	.text1 {
		letter-spacing: 4upx;
		font-size: 40upx;
		font-weight: 550;
		display: flex;
		margin: auto;
	}

	.text2 {
		font-size: 40upx;
		display: flex;
		margin: auto;
	}

	.text3 {
		color: #FFFFFF;
		font-size: 30upx;
		display: flex;
		margin: auto;
	}

	.text4 {
		letter-spacing: 2upx;
		font-size: 25upx;
	}

	.mokuai2 {
		width: 5upx;
		height: 120upx;
		background-color: #F0F0F0;
		margin-top: 40upx;
	}

	.mokuai3 {
		width: 550upx;
		height: 200upx;
		display: flex;
		margin: auto;
		flex-direction: column;
	}

	.qian {
		width: 100%;
		height: 100upx;
		display: flex;
		flex-direction: row;
		margin: auto;
	}

	.wenzi2 {
		margin-left: 20upx;
		margin-top: 50upx;
		width: 150upx;
		height: 50upx;
	}

	.wenzi3 {
		background-color: #39B54A;
		width: 150upx;
		height: 50upx;
		display: flex;
		margin-left: 235upx;
		margin-top: 10upx;
		border-radius: 25upx;
	}

	.louhao {
		width: 500upx;
		height: 100upx;
		display: flex;
		margin: auto;
		padding-top: 20upx;
	}
</style>
