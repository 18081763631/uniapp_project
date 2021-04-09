<template>
	<view class="X-baseBackgroundColor X-have-interval" style="height: 1200upx;">

		<view v-if="community == li.community"  v-for="(li,id) in list" :key= "id" class="X-C X-contentBackgroundColor X-have-interval X-outLine mart" style="">
			<view  class="X-R  X-bottom">
				<view class="X-R-Center">
					<text class="X-fontspacing" style="font-size: 50upx;color: #304E07;">订单信息</text>
				</view>

				<text class="X-R-Center X-C-Center X-fontSizeS" style="color: #d5861d;">{{stute[id]}}</text>
			</view>
			<view class="X-line"></view>

			<view class="X-C X-have-interval X-out-interval">
				<view class="X-R X-RautoAdjust">
					<text class="X-fontspacing" style="color: #1c3f2f;">订单编号:</text>
					<text class="X-fontspacing X-fontSizeS X-C-Center" style="color: #1c3f2f;">{{li.code}}</text>
				</view>
				
				<view class="X-R X-RautoAdjust " >
					<text class="X-fontspacing" style="color: #1c3f2f;">订单时间:</text>
					<text class="X-fontspacing X-C-Center X-fontSizeS" style="color: #1c3f2f;">{{li.time}}</text>
				</view>
                <view class="X-C X-RautoAdjust">
					<text class="X-fontspacing" style="color: #1c3f2f;">问题描述:</text>
					<text class="X-fontspacing X-fontSizeS" style="color: #1c3f2f;text-indent: 2em;">{{li.describe}}</text>
				</view>

			</view>
			<view class="X-line"></view>
			<view class="hor">
				<view>
				</view>
				<view class="X-R" >
					<button @click="toDetails(li)" class="X-have-interval:20upx X-top" style="background: #304E07;color: #FFFFFF;">详情</button>
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
               list:[],
			   stute:[],
			   community:""
			   
			}
		},
		onShow() {
			
			var that = this;
			this.community =this.getCommunity();
			uni.request({
				url: 'http://106.13.239.202/index.php?c=workorder&m=getallorder',
				method: 'GET',
				data: {	
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
					url: `/pages/repair/details?code=${code}`
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
