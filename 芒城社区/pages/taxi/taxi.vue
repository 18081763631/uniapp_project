<template>

	<view class="X-baseBackgroundColor ">
		<view class="X-have-interval X-C X-contentBackgroundColor" style="height: 200upx;">
			<text class="X-fontspacing X-font-weight" style="color: #304e07;font-size: 50upx;">快捷出行</text>
			<text class="X-fontspacing X-fontSizeSS X-top" style="color: #d5861d;">温馨提示：请遵守社区约车的相关条约</text>
		</view>
		<view class=" X-have-interval X-contentBackgroundColor">
			
		</view>
		<view   v-for="(item,index) in list" :key = "index" class= "X-top  X-radius X-CardShadow X-R X-RautoAdjust X-have-interval X-contentBackgroundColor X-out-interval">
			<view class="X-R  X-RautoAdjust X-have-interval">
				<view class="X-allCenter X-R" style="width: 150upx;height: 150upx;">
					<image src="../../static/taxicar.png"  style="width: 150upx;height: 150upx"></image>
					
				</view>
				<view class="X-C X-left" style="display: flex; width: 350upx;">
					<view class="X-C X-fontSizeS X-C-Center"><text >目的地：</text>
					<text class="X-fontSizeSS X-C-Center X-top" style="text-indent: 2em;">{{item.address}}</text>
					</view>
					
						<view class="X-R X-fontSizeS X-C-Center X-top"><text >出发时间：</text>
						<text class="X-fontSizeSS X-C-Center">{{item.time}}</text>
						</view>
					
				</view>
			</view>
			<view class="X-C X-contentBackgroundColor" style="width: 180upx;">
			<view class="X-R X-fontSizeSS" style="height: 35upx;"><text >人数：</text>
			<text class="X-C-Center" style="font-size: 20upx;">{{item.people}}</text>
			</view>
			<image @click="tophone(item.phone)" class="X-R-Center" style="width:80upx;height:80upx;border-radius:80upx;margin-top: 70upx;" src="../../static/call.png"></image>
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
				method: 'POST',
				header: {"content-type": "application/x-www-form-urlencoded"},
				data: {	
					community:that.getInto()
				},
				success: res => {
					
				  console.log(res.data);
				  that.list = res.data;
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
			tophone(phone){
				console.log(this.phone);
				uni.makePhoneCall({
				 	
				 	// 手机号
				    phoneNumber: phone, 
				
					// 成功回调
					success: (res) => {
						console.log('调用成功!')	
					},
				
					// 失败回调
					fail: (res) => {
						console.log('调用失败!')
					}
					
				  });
			}
			
		}
	}
</script>

<style>

</style>
