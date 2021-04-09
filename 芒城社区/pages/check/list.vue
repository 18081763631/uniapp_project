<template>
	<view class="X-C X-baseBackgroundColor">
		<view class="X-C X-R-Center X-have-interval X-contentBackgroundColor" style="wbackground-color: #FFFFFF;width: 100%;">
			<text class="X-fontspacing  X-font-weight" style="font-size: 50upx;color: #304E07;">审核房源：</text>
			<text class="X-fontspacing X-fontSizeS X-top" style="color: #d5861d;">该信息来源于物业中心</text>
		</view>
		<view class="X-R X-contentBackgroundColor X-have-interval"  v-for="(itme,id) in list" :key="id" @click="fang(itme)" >
					<image class="" style=" width: 180upx;height: 200upx;" :src="list[id].index"></image>
				<view class="X-C X-C-Center X-left">
					<text class="X-fontspacing X-font-weight" style="color: #304E07;">凤凰城 2室1厅1卫</text>
						<text class="X-fontspacing X-top" style="font-size: 20upx;color: #555555;">{{itme.fitment}}  | {{itme.area}}平方米 | 朝向{{itme.direction}}</text>
						<text class="X-fontspacing X-fontSizeSS X-top" style="color: #555555;">{{itme.door}}</text>
						<text class="X-fontspacing X-fontSizeS X-top" style="color: #d5861d;">{{itme.money}}元/月</text>
				</view>
		</view>
		<view>
		        <uni-fab
		            :pattern="pattern"
		            :content="content"
		            :horizontal="horizontal"
		            :vertical="vertical"
		            :direction="direction"
		            @trigger="trigger"
		        ></uni-fab>
		    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				src:[]
			
			}
		},
		onLoad() {
			
			
			var that = this;
			
			uni.request({
				url: 'http://106.13.239.202/index.php?c=rent&m=checkall',
				method: 'GET',
				data: {
					
					
				},
				success: res => {
					 
			   that.list = res.data.data;
				  console.log(that.list);
				
				},
				fail: () => {
				
				},
				complete: () => {}
			});
		},
		methods: {
			fang(item) {
				var code = item.code;
				
				uni.navigateTo({
					url: `/pages/check/details?code=${code}`
				})
			},
		}
	}
</script>

<style>
	.zufang {
		background-color: #f6f6f6;
		width: 100%;
		height: 1400upx;
		display: flex;
		flex-direction: column;
	}
	.wenzi2 {
		width: 500upx;
		height: 50upx;
	}

	.wenzi3 {
		width: 500upx;
		height: 50upx;
	}

	.wenzi4 {
		width: 500upx;
		height: 50upx;
	}

	.wenzi5 {
		width: 500upx;
		height: 50upx;
	}

	.text2 {
		font-size: 40upx;
		font-weight: 550;
		letter-spacing: 5upx;
	}

	.text3 {
		font-size: 20upx;
		color: #CCCCCC;
		letter-spacing: 5upx;
	}

	.text4 {
		font-size: 25upx;
		color: #CCCCCC;
		letter-spacing: 5upx;
	}

	.text5 {
		font-weight: 550;
		font-size: 30upx;
		color: #ED1C24;
		letter-spacing: 5upx;
	}

	.mokuai {
		width: 100%;
		height: 300upx;
		display: flex;
		flex-direction: column;
	}

	.miaoshu {
		background-color: #FFFFFF;
		padding: 20upx;
		width: 680upx;
		height: 250upx;
		border-radius: 20upx;
		box-shadow: 2upx 5upx 5upx 3upx #F0F0F0;
		display: flex;
		margin: auto;
		flex-direction: row;
	}

	.tupian {
		width: 180upx;
		height: 200upx;
		border-radius: 20upx;
	}

	.tupianxiangqing {
		width: 180upx;
		height: 200upx;
		border-radius: 20upx;
	}

	.xinxi {
		margin-left: 20upx;
		width: 450upx;
		height: 300upx;
		display: flex;
		flex-direction: column;
	}
</style>

