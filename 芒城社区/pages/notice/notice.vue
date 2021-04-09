<template>
	<view class="X-C X-baseBackgroundColor">
		<view class="X-have-interval X-C X-contentBackgroundColor" style="height: 200upx;">
			<text class="X-fontspacing X-font-weight" style="color: #304e07;font-size: 50upx;">物业公告</text>
			<text class="X-fontspacing X-fontSizeSS X-top" style="color: #d5861d;">该数据源于 {{this.getInto()}} 物业中心</text>
		</view>
		<scroll-view v-for="(item,index) in tmep" :key="index" v-if="this.getInto() == item.community">
			<view  class="X-C X-CardShadow X-radius X-out-interval X-have-interval X-contentBackgroundColor">
				<view class="X-RautoAdjust X-have-interval">
					<image class="X-C-Center" style="width:80upx;height: 80upx;" src="../../static/notice.png"></image>
					<text class="X-fontspacing X-C-Center X-fontSizeS" style="color: #3C3E49;">{{item.time}}</text>
				</view>
				<text class="X-fontspacing X-fontSizeS X-bottom X-out-interval" style="text-indent: 2em;">
				{{item.content}}
				</text>
			</view>
			
			
		</scroll-view>
	
	</view>
</template>


<script>
	export default {
		data() {
			return {
				tmep:[],
				notice:[],
				
			}
		},
		onLoad() {
			var that = this;
			uni.request({
				url: 'http://106.13.239.202/index.php?c=main&m=getallnotice',
				method: 'GET',
				header: {"content-type": "application/x-www-form-urlencoded"}, 
				data: {
				},
				success: res => {
					console.log(res);
					that.tmep = res.data.data;
					var i=0;
					var j=res.data.data.length;
					
					while(i<res.data.data.length){
						that.notice[i] = that.tmep[j-1];
						console.log(that.notice);
						j--;
						i++;
					}
					that.tmep = that.notice;	
				},
				fail: () => {
				
				},
				complete: () => {}
			});
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
