<template>

	<view class="X-baseBackgroundColor ">
		<view class="X-have-interval X-C X-contentBackgroundColor" >
			<text class="X-fontspacing X-font-weight" style="color: #304e07;font-size: 50upx;">快捷出行</text>
			<text class="X-fontspacing X-fontSizeSS X-top" style="color: #d5861d;">温馨提示：请遵守社区约车的相关条约</text>
		</view>
		<view  @click="todetails(item)" v-for="(item,index) in list" :key = index class= "X-top X-have-interval X-contentBackgroundColor  X-radius X-CardShadow X-R X-RautoAdjust" style="height: 300upx;">
			<view class="X-R  X-RautoAdjust" style="width: 400upx;">
				<view class="X-allCenter X-R" style="width: 150upx;height: 150upx;">
					<image src="../../static/car.png"  style="width: 150upx;height: 150upx"></image>
					<view style="width: 5upx;background-color: #000;"></view>
				</view>
				<view class="X-C" style="display: flex;">
					<view class="X-fontspacing X-fontSizeS X-C" style="color: #1c3f2f;"><text >目的地</text>
					<text class="X-fontspacing X-fontSizeSS X-top" style="color: #1c3f2f;">{{item.address}}</text>
					</view>
					<view style="height: 60upx;"></view>
						<view class="X-fontspacing X-fontSizeS X-C" style="color: #1c3f2f;"><text >出发时间</text>
						<text class="X-fontspacing X-fontSizeSS X-top" style="color: #1c3f2f;">{{item.time}}</text>
						</view>
					
				</view>
			</view>
			<view class="X-tag" style="width: 150upx;">
				<text class="X-allCenter X-font-weight">{{stute[index]}}</text>
			</view>
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
			var i = 0;
			var j = 0;
			uni.request({
				url: 'http://106.13.239.202/index.php?c=taxi&m=taxilist',
				method: 'GET',
				data: {	
				},
				success: res => {
					
				  console.log(res)
				  that.list = res.data.data;
				  j = res.data.data.length;
			       
				   while(i<j)
					  {     
				   if(that.list[i].status == 0 )
					 {  
						that.stute[i] = "未接单";
										 
									 }
					else if(that.list[i].status == 1 )
					{
							that.stute[i] = "已经接单"; 
							
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
			todetails(item)
			{
				var code = item.code;
				
				uni.navigateTo({
					url: `/pages/taxi/details?code=${code}`
				})
			}
		}
	}
</script>

<style>

</style>
