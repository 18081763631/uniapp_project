<template>
	<view class="X-C X-contentBackgroundColor" style="height: 1470upx;">
		
		<view class="X-contentBackgroundColor" >
			<image class="X-allCenter" style="width: 300upx;height: 300upx;" src="../../static/logo.png" mode=""></image>
		</view>
		<view @click="showTree()" class="X-RautoAdjust X-out-interval X-contentBackgroundColor X-radius X-have-interval X-C-Center" >
			
				<view class=" X-out-interval X-fontspacing X-fontSizeS" style="color: #1c3f2f;">{{address}}</view>
				
					<view class="X-out-interval cuIcon-right"></view>
		
			
		</view>
		<view class="X-contentBackgroundColor X-out-interval X-C-Center X-have-interval X-radius">
			<input type="tel" @input="phone" class="X-fontspacing X-fontSizeS X-out-interval" style="color: #1c3f2f;" name="" placeholder="请输入手机号" />
		</view>
		<view class="X-contentBackgroundColor X-out-interval X-C-Center X-have-interval X-radius">
			<input type="password"  @input="password" class="X-out-interval X-fontspacing X-fontSizeS" style="color: #1c3f2f;" name="" placeholder="请输入密码" />
		</view>
		<button style="width: 50%;" type="primary" @click="LOGIN()">登陆</button>
		<view class="links">
			<view @click="gotoForgetPassword()">忘记密码？</view>
			<view>|</view>
			<view class="link-highlight" @click="gotoRegistration()">注册账号</view>
		</view>
		
		<tki-tree ref="tkitree" :selectParent="selectParent" :multiple="multiple" :range="list" rangeKey="name" @confirm="treeConfirm" @cancel="treeCancel"></tki-tree>
	</view>
</template>

<script>
	import tkiTree from "@/components/tki-tree/tki-tree.vue";
	
	export default {
		 components: {tkiTree},
		
		data() {
			return {
				ph:"",
				pw:"",
				list: [],
				multiple:false,
				selectParent:false,
				address:"请选择社区"
			}
		},
		onLoad() {
			// 获取选择列表
			this.getCommunity();
			
			// setTimeout(()=>{
			// 	this.list = testList;
			// }, 300)
			
		},
		methods: {
			getAdmin(){
				var that = this;
				var into = this.getInto();
				uni.request({
					url: 'http://106.13.239.202/index.php?c=login&m=isAdmin',
					method: 'POST',
					header: {"content-type": "application/x-www-form-urlencoded"},
					data: {
						phone:that.ph,
						community:into
					},
					success: res => {
						console.log(res.data.data);
						uni.setStorage({
						    key: 'admin',
						    data: res.data.data
						}); 
						
						
						
					}
				})
				
			},
			getCommunity(){
				var that = this;
				uni.request({
					url: 'http://106.13.239.202/index.php?c=community&m=getAll',
					method: 'GET',
					header: {"content-type": "application/x-www-form-urlencoded"},
					data: {
					},
					success: res => {
						console.log(res);
						that.list = res.data.data;
						
					}
				})
			},
			getInformation(){
				var that = this;
				// 读取本地手机号
				var phone = this.ph;
				console.log(phone);
					var p;
				// 向数据库查询门牌号
				uni.request({
					url: 'http://106.13.239.202/index.php?c=approve&m=find',
					method: 'POST',
					header: {"content-type": "application/x-www-form-urlencoded"},
					data: {
						phone:phone
					},
					success: res => {
						console.log(res);
						uni.setStorage({
						    key: 'name',
						    data: res.data.data.name
						}); 
						uni.setStorage({
						    key: 'id',
						    data: res.data.data.id
						}); 
						uni.setStorage({
						    key: 'community',
						    data: res.data.data.community
						}); 
					
						
							
					uni.request({
								url: 'http://106.13.239.202/index.php?c=member&m=getAddress',
						     	method: 'POST',
								header: {"content-type": "application/x-www-form-urlencoded"},
								data: {
								phone:phone
									},
								success: res => {
								console.log(res);
								uni.setStorage({
							    key: 'address',
							    data: res.data.data.house_number
											}); 
												
								console.log(res.data.data.house_number);
												
								}
								})

						
						
					}
				})
				
			},
			// 存储选择的社区信息
			treeConfirm(e){
				this.address = e[0].name;
				console.log(e[0].name);
					uni.setStorage({
					    key: 'into',
					    data: e[0].name
		
				})
				
			},
			// 取消回调事件
			treeCancel(e){
				console.log(e)
			},
			// 显示树形选择器
			showTree(){
				this.$refs.tkitree._show();
			},
			phone: function(event) {
				this.ph = event.target.value;
			},
			password: function(event) {
				this.pw = event.target.value;
			},
			LOGIN(){
				
				var that = this;
				if(this.address == "请选择社区"){
					uni.showToast({title:"请选择社区", icon:"none"});
					return;
				}else if(!this.ph){
					uni.showToast({title:"请输入手机号", icon:"none"});
					return;
				}else if(!this.pw){
					uni.showToast({title:"请输入密码", icon:"none"});
					return;
				}else{
					uni.showLoading({
						title:"登录中..."
					})
					uni.request({
						url: 'http://106.13.239.202/index.php?c=login&m=login',
						method: 'POST',
						header: {"content-type": "application/x-www-form-urlencoded"}, 
						data: {
							phone:that.ph,
							password:that.pw,
							
						},
						success: res => {
							uni.hideLoading()
							console.log(res);
							if(res.data.status == 'ok'){
								uni.showToast({title:"登录成功！", icon:"success"});
								uni.setStorage({
								    key: 'code',
								    data: res.data.data
								});
								uni.setStorage({
								    key: 'phone',
								    data: that.ph
								});
								setTimeout(function () {
									uni.switchTab({
										url: '/pages/index/index'
									});
								}, 1000);
								
								this.getInformation();
								this.getAdmin();
								
							}else{
								uni.showToast({title:"登录失败", icon:"none"});
			
							}
								
						},
						fail: () => {
							uni.showToast({title:"网络连接有问题，请重试...", icon:"none"});
						}
					});
				}
				
				
			},
			
			
			gotoRegistration() {
				uni.navigateTo({
					url: '/pages/login/registration'
				});
			},
			gotoForgetPassword() {
				uni.showToast({
					title:"请联系物业中心管理员",
					icon:"none"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	$color-primary: #304e07;

	.content {
		padding: 100upx;
		background-color: #FFFFFF;
	}

	.logo {
		text-align: center;

		image {
			height: 300upx;
			width:300upx;
			margin: 0 0 60upx;
		}
	}

	.uni-form-item {
		margin-bottom: 40upx;
		padding: 0;
		border-bottom: 1px solid #e3e3e3;

		.uni-input {
			font-size: 30upx;
			padding: 7px 0;
		}
	}

	button[type="primary"] {
		background-color: $color-primary;
		border-radius: 0;
		font-size: 34upx;
		margin-top: 60upx;
	}

	.links {
		text-align: center;
		margin-top: 40upx;
		font-size: 26upx;
		color: #999;

		view {
			display: inline-block;
			vertical-align: top;
			margin: 0 10upx;
		}

		.link-highlight {
			color: $color-primary
		}
	}
</style>
