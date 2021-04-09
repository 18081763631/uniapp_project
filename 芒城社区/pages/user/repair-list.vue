<template>
	<view class="X-baseBackgroundColor " style="">
	<view class="X-have-interval X-C X-contentBackgroundColor" style="height: 200upx;">
			<text class="X-fontspacing X-font-weight" style="color: #304e07;font-size: 50upx;">我的报修</text>
			<text class="X-fontspacing X-fontSizeSS X-top" style="color: #d5861d;">该数据源于物业中心</text>
		</view>
		<view style="height: 30upx;"></view>
		<view @click="toDetails(li)"  v-for="(li,id) in list" :key= "id" class="X-C X-contentBackgroundColor X-have-interval X-out-interval X-outLine mart" style="">
			
			<view  class="X-RautoAdjust  X-bottom X-have-interval ">
				<view class="X-C-Center">
					<text class="X-fontspacing X-fontSizeS X-C-Center" style="color: #304E07;">报修信息</text>
				</view>
				<view class="X-R">
					<text class="X-fontspacing X-fontSizeSS X-C-Center" style="color: #d5861d;">查看详情</text>
					<image class="X-C-Center" style="width: 30upx;height: 30upx;" src="../../static/jiantou.png"></image>
				</view>
				
			</view>
			<view class="X-line"></view>
			
			<view class="X-C X-have-interval X-out-interval">
				<view class="X-R X-RautoAdjust">
					<text class="X-fontspacing X-fontSizeS" style="color: #1c3f2f;">报修编号:</text>
					<text class="X-fontspacing X-fontSizeS" style="color: #1c3f2f;">{{li.code}}</text>
				</view>
				<view class="X-R X-RautoAdjust ">
					<text class="X-fontspacing X-fontSizeS" style="color: #1c3f2f;">报修时间:</text>
					<text class="X-fontspacing X-fontSizeS" style="color: #1c3f2f;">{{li.time}}</text>
				</view>
				<view class="X-R X-RautoAdjust ">
					<text class="X-fontspacing X-fontSizeS" style="color: #1c3f2f;">处理情况:</text>
					<text class="X-fontspacing X-fontSizeS" style="color: #d5861d;">{{stute[id]}}</text>
				</view>
			</view>
			<view style="height: 50upx;"></view>
		</view>
	<view style="height: 50upx;"></view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
               list:[],
			   stute:[]
			   
			}
		},
		onShow() {
			
			var that = this;
			var phone = this.getPhone();
			uni.request({
				url: 'http://106.13.239.202/index.php?c=workorder&m=myOrder',
				method: 'POST',
				header: {"content-type": "application/x-www-form-urlencoded"},
				data: {
					phone:phone
				},
				success: res => {
					var i =0;
					var l = res.data.data.length;
				  console.log(res.data)
				  that.list = res.data.data;
				  
				  while(i<l)
				  {     if(that.list[i].stute == 0 )
				  		 {
							that.stute[i] = "未完成";
							 
						 }
						 else if(that.list[i].stute == 1 )
				  		{
									that.stute[i] = "完成"; 
						}	  
				  			 i++;
				  }
				 
				},
				fail: () => {
				
				},
				complete: () => {}
			});
		}
		,
		methods: {
			toDetails(li) {
				
				var code = li.code;
				
				uni.navigateTo({
					url: `/pages/user/repair-detail?code=${code}`
				})
			},
		}
	}
</script>
