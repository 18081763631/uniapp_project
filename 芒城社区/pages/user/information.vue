<template>
	<view class="X-C X-baseBackgroundColor">
		<view class="X-contentBackgroundColor X-have-interval " style="height: 200upx;">
			<text class="X-out-interval X-fontspacing X-font-weight" style="font-size: 50upx;color: #304E07;">{{name}}</text>
			<view class="X-fontSizeSS X-top X-fontspacing X-left" style="color: #d5861d;">{{community}}</view>
		</view>
		<view class="X-C X-contentBackgroundColor X-have-interval">
				
			<view class="X-RautoAdjust X-have-interval">
				
					<text class="X-fontspacing" style="color: #1c3f2f;">实名认证</text>
				
						<text class="X-fontspacing" style="color:  #d5861d;" >{{approve?"已通过物业认证":"未通过物业认证"}}</text>
							
					
			</view>
			<view class="X-line" style="width: 100%;"></view>
			<view class="X-RautoAdjust X-have-interval">
				
					<text class="X-fontspacing" style="color: #1c3f2f;">姓名</text>
				
						<text class="X-fontspacing" style="color:  #d5861d;" >{{name}}</text>
							
					
			</view>
			<view class="X-line" style="width: 100%;"></view>
			<view class="X-RautoAdjust X-have-interval">
				
					<text class="X-fontspacing" style="color: #1c3f2f;">已绑定社区</text>
				
						<text class="X-fontspacing" style="color:  #d5861d;" >{{community}}</text>
							
					
			</view>
			<view class="X-line" style="width: 100%;"></view>
			
			<view class="X-line" style="width: 100%;"></view>
			<view class="X-RautoAdjust X-have-interval">
				
					<text class="X-fontspacing" style="color: #1c3f2f;">手机</text>
				
						<text class="X-fontspacing" style="color:  #d5861d;" >{{phone}}</text>
							
					
			</view>
			</view>
			<view class="X-C X-have-interval X-contentBackgroundColor">
			<view @click="go()" class="X-RautoAdjust X-have-interval">
				
					<text class="X-fontspacing" style="color: #1c3f2f;">修改密码</text>
				
						
					
			</view>
				
				<view v-if="phone" @click="clear()" class="X-RautoAdjust X-have-interval">
					
						<text class="X-fontspacing" style="color: #d5861d;">退出登录</text>
					
								
						
				</view>
				<view v-if="!phone" @click="toLogin()" class="X-RautoAdjust X-have-interval">
					
						<text class="X-fontspacing" style="color: #d5861d;">登录</text>
					
								
						
				</view>
				
				</view>
			
			
			</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:"",
				approve:0,
				community:"您未绑定社区",
				name:"游客"
				
			}
		},
		onShow() {
			this.name = this.getName();
			this.into = this.getInto();
			this.community = this.getCommunity();
			this.phone = this.getPhone();
			if(this.getAddress()){
				this.approve  = 1;
			}
		},
		methods: {
			toLogin(){
				uni.navigateTo({
					url: '/pages/login/login'
				});
			},
			go(){
				uni.showToast({
					title:"请联系您社区的物业中心",
					icon:"none"
				})
			},
			clear(){
				this.approve  = 1;
				uni.setStorage({
				    key: 'code',
				    data: ''
				});
				uni.setStorage({
				    key: 'name',
				    data: '游客'
				});
				uni.setStorage({
				    key: 'community',
				    data: '未绑定社区'
				});
				uni.setStorage({
				    key: 'phone',
				    data: ''
				});
				uni.setStorage({
				    key: 'admin',
				    data: ''
				});
				uni.setStorage({
				    key: 'address',
				    data: '未选择社区'
				});
				uni.navigateTo({
					url: '/pages/login/login'
				});
			}
		}
	}
</script>

<style>
	.top
	{
		margin-top: 25upx;
	}
	.zhi
	{
		width: 30upx;
		height: 30upx;
		margin-left: 20upx;
	}
	.zi2
	{
		font-size: 30upx;
		margin-right: 20upx;
		
	}
	.zi 
	{
		font-size: 40upx;
		margin-left: 20upx;
	}
	.you
	{
		display: flex;
		
		
	}
	.h{
		display: flex;
		flex-direction: row;
	}
	.man
	{
		width: 100%;
		height:100%;
	}
	.youke
	{
		font-size: 30upx;
		background: #C0C0C0;
		border-radius: 7upx;
		 color: #FFFFFF;
	}
    .vr 
	{
		display: flex;
		flex-direction: column;
	}
</style>
