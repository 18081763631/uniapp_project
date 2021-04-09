<template>
	<view class="X-baseBackgroundColor X-have-interval">

		<view class="X-C X-contentBackgroundColor X-have-interval X-outLine" style="">
			<view class="X-R  X-bottom">
				<view class="X-R-Center">
					<text class="X-fontspacing" style="font-size: 50upx;color: #304E07;">订单信息</text>
				</view>

				<text class="X-R-Center X-fontspacing X-C-Center" style="font-size: 30upx; color: #d5861d;">完成待确定</text>
			</view>
			<view class="X-line"></view>

			<view class="X-C X-have-interval X-out-interval">
				<view class="X-R X-RautoAdjust">
					<text class="X-fontspacing" style="color: #1c3f2f;">订单编号:</text>
					<text class="X-fontspacing" style="color: #1c3f2f;">C12346</text>
				</view>
				<view class="X-R X-RautoAdjust">
					<text class="X-fontspacing" style="color: #1c3f2f;">问题描述:</text>
					<text class="X-fontspacing" style="color: #1c3f2f;">电脑维修</text>
				</view>
				<view class="X-R X-RautoAdjust " >
					<text class="X-fontspacing" style="color: #1c3f2f;">订单时间:</text>
					<text class="X-fontspacing" style="color: #d5861d;">2019/11/1 10:11</text>
				</view>


			</view>
			<view class="X-line"></view>
				<view class="X-R X-top">
					<button @click="toDetails()" class="X-allCenter X-top X-fontspacing" style="background: #304E07;color: #FFFFFF;">详情</button>
				</view>
		</view>

	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			toDetails() {
				uni.navigateTo({
					url: `/pages/repair/details`
				})
			},
		}
	}
</script>

<style>
	.hr1 {
		margin-top: 10upx;
		display: flex;
		flex-direction: row;
	}

	.marr {
		margin-right: 20upx;
	}

	.marl {
		margin-left: 20upx;
	}

	.mart {
		margin-top: 20upx;
	}

	.zi1 {
		font-size: 50upx;
	}

	.hor {
		justify-content: space-between;
		display: flex;
		flex-direction: row;
	}

	.vtc {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.ima {
		margin-top: 20upx;
		width: 125upx;
		height: 125upx;
	}
</style>
