<template>
	<view class="X-baseBackgroundColor">
		<!-- 标题 -->
		<view class="X-C X-contentBackgroundColor X-have-interval" style="height: 200upx;">
			<text class="X-font-weight X-fontspacing" style="color: #304E07;font-size: 50upx;">我的房屋</text>
			<text class="X-fontSizeSS X-top X-fontspacing" style="color: #d5861d;">温馨提示：系统会自动绑定物业中心房屋信息</text>
		</view>
		<view class="X-R X-out-interval X-radius X-contentBackgroundColor X-RautoAdjust" style="height: 200upx;" v-if="house">
			<!-- 图 -->
			<view class="X-R" style="width: 200upx;">
				<image class="X-allCenter" style="width: 80upx; height: 80upx;" src="../../static/tab-home.png"></image>
				<view class="X-baseBackgroundColor X-top" style="width: 5upx;height: 80%;"></view>
			</view>
			
			<!-- 后半部分 -->
			<view class="X-R X-RautoAdjust" style="width:70%;" >
				<!-- 前面部分 -->
					<text class="X-font-weight X-C-Center X-fontspacing" style="color: #304E07;">{{house}}</text>
				<!-- 后面部分 -->
				<view class="X-tag X-fontspacing" style="width: 150upx;"><text class="X-allCenter">已绑定</text></view>	
			</view>
		</view>
		<view class="X-allCenter X-have-interval X-fontSizeS" v-if="!house">
			<text class="X-allCenter">您未绑定任何房屋，有疑问请联系物业中心工作人员</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg:[],
				house:""
			}
		},
		onShow() {
			this.house = this.getAddress();
			var that = this;
			uni.request({
				url: 'http://127.0.0.1/index.php?c=member&m=login',
				method: 'POST',
				header: {"content-type": "application/x-www-form-urlencoded"},
				data: {
					phone:"18283454537",
				},
				success: res => {
					console.log(res.data.data);
					that.msg = res.data.data;
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods:{
			GO(){
			
			}
		}
	}
</script>

