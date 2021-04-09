<template>
	<view class="X-C X-contentBackgroundColor">
		<view class="X-R X-out-interval X-RautoAdjust">                      
			
			<view class="X-C X-C-Center" style="height: 200upx;">
				<text class="X-fontspacing X-font-weight" style="font-size: 50upx;color: #304E07;">尊敬的：{{name}} 您好！</text>
				<text class="X-fontSizeSS X-fontspacing X-top" style="color: #d5861d;">{{community}} 物业服务中心欢迎您！</text>
			</view>
			<image class="" style="height: 100upx;width: 100upx;border-radius: 80upx;background-color: #007AFF;" src="../../static/missing-face.png"></image>
		</view>
		
			<view v-if="isAdmin" class="cu-btn bg-cyan round X-font-weight X-fontspacing X-left X-bottom"  style="width: 150upx;" @click="toAdmin()">管理</view>
	
			<view class=" X-baseBackgroundColor" style="height: 30upx;width: 100%;"></view>
		<view class="X-C">
			<text @click="toHouse()" class="cuIcon-home X-fontspacing X-have-interval " style="font-size: 30upx;">我的房屋</text>
			<view  class="X-line" style="width: 100%;"></view>
			<text @click="toRepair()"  class="cuIcon-repair X-fontspacing X-have-interval" style="font-size: 30upx;color: #1c3f2f;">  我的报修</text>
			
			<view class="X-line" style="width: 100%;"></view>
			<text @click="toTaxi()" class="cuIcon-taxi X-fontspacing X-have-interval" style="font-size: 30upx;color: #1c3f2f;">  我的出行</text>
			<view class="X-line" style="width: 100%;"></view>
			<text @click="Null()" class="cuIcon-ticket X-fontspacing X-have-interval" style="font-size: 30upx;color: #1c3f2f;">  我的优惠券</text>
			<view class="X-line" style=" width: 100%;"></view>
			<text @click="Null()" class="cuIcon-shop X-fontspacing X-have-interval" style="font-size: 30upx;color: #1c3f2f;">  我的订单</text>
			<view class="X-line" style="width: 100%;"></view>
			<text @click="toInformation()" class="cuIcon-settings X-fontspacing X-have-interval" style="font-size: 30upx;color: #1c3f2f;">  设置</text>
		</view>
		<view @click="toEdit()" class="X-C">
			<view class=" X-baseBackgroundColor" style="height: 30upx;width: 100%;"></view>
			
			<text class="X-fontspacing X-top X-have-interval" style="font-size: 35upx;color: #304E07;">社区意见与建议</text>
		</view>
	</view>
</template>


<script>
	export default {
		components: {
	
		},
		data() {
			return {
				name:"游客",
				community:"",
				src:[],
				isAdmin:false
				
			};
		},
		onShow() {
			this.name = this.getName();
			this.community = this.getInto();
			this.isAdmin = (this.isComAdmin()||this.isSuperAdmin());
			
			
		},
		methods: {
			Null(){
				uni.showToast({
					title:"暂未开放该功能",
					icon:"none"
				})
			},
			getHead(){
				var that = this;	
				uni.request({
					
					url: 'http://106.13.239.202/index.php?c=uploadimg&m=getSrc',
					method: 'POST',
					header: {"content-type": "application/x-www-form-urlencoded"}, 
					data: {
						code:that.onlywork.picture
					},
					success: res => {
					  
					  that.src = res;
									  
									  	
					}
				});
			},
			toTaxi() {
				if(this.getCommunity() == this.getInto()){
					uni.navigateTo({
						url: '/pages/user/taxi'
					});
				}else{
					uni.showToast({title:"您非该社区租户", icon:"none"});
				}
				
			},
			toRepair() {
				if(this.getCommunity() == this.getInto()){
					uni.navigateTo({
						url: '/pages/user/repair-list'
					});
				}else{
					uni.showToast({title:"您非该社区租户", icon:"none"});
				}
				
			},
			toAdmin() {
				uni.navigateTo({
					url: '/pages/admin/admin'
				});
			},
			toHouse(){
				if(this.getCommunity() == this.getInto()){
					uni.navigateTo({
						url: '/pages/user/house'
					});
				}else{
					uni.showToast({title:"您非该社区租户", icon:"none"});
				}
				
			},
			toInformation(){
				uni.navigateTo({
					url: '/pages/user/information'
				});
			},
			toEdit(){
				if(this.getCommunity() == this.getInto()){
					uni.navigateTo({
						url: '/pages/index/evaluate'
					});
				}else{
					uni.showToast({title:"您非该社区租户", icon:"none"});
				}
				
			},

		}
	};
</script>

