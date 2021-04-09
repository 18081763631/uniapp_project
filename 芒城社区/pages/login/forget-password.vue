<template>
	<view class="X-C X-baseBackgroundColor">
		
		<view class="X-contentBackgroundColor" >
			<image class="X-allCenter" style="width: 300upx;height: 300upx;" src="../../static/logo.png" mode=""></image>
		</view>
		<view class="X-RautoAdjust X-contentBackgroundColor X-have-interval X-C-Center">
			<view class="X-fontspacing X-fontSizeS X-have-interval" style="color: #1c3f2f;">{{address}}</view>
			<view class="X-R" @click="showTree()">
				<view class="cuIcon-right"></view>
			</view>
		</view>
		<view class="X-line"></view>
		<view class="X-contentBackgroundColor X-C-Center X-have-interval">
			<input type="tel" @input="phone" class="X-fontspacing X-fontSizeS X-have-interval" style="color: #1c3f2f;" name="" placeholder="请输入手机号" />
		</view>
		<view class="X-line"></view>
		<view class="X-contentBackgroundColor X-C-Center X-have-interval">
			<input type="password"  @input="password" class="X-fontspacing X-fontSizeS X-have-interval" style="color: #1c3f2f;" name="" placeholder="请输入密码" />
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
	export default {
		data() {
			return {
				captchaImg: '',
				seconds: 10,
				codeBtn: {
					text: '获取验证码',
					waitingCode: false,
					count: this.seconds
				},
				ph : "",
				pw : "",
				co :"",
				changeSuccess: false
			}
		},
		onLoad() {

		},
		methods: {
			GO(){
				var that = this;
				uni.request({
					url: 'http://106.13.239.202/index.php?c=login&m=forget',
					method: 'POST',
					header: {"content-type": "application/x-www-form-urlencoded"}, 
					data: {
						phone:that.ph,
						password:that.pw,
						
					},
					success: res => {
						console.log(res);
						
					},
					fail: () => {
					
					},
					complete: () => {}
				});
			},
			phone: function(event) {
				console.log(event.target.value);
				this.ph = event.target.value;
			},
			password: function(event) {
				console.log(event.target.value);
				this.pw = event.target.value;
			},
			sendCode: function () {
				this.codeBtn.waitingCode = true;
				this.codeBtn.count = this.seconds;
				this.codeBtn.text = this.codeBtn.count + 's';
				
				let countdown = setInterval( () => {
					this.codeBtn.count--;
					this.codeBtn.text = this.codeBtn.count + 's';
					if( this.codeBtn.count < 0 ){
						clearInterval(countdown);
						this.codeBtn.text = '重新发送';
						this.codeBtn.waitingCode = false;
					}
				},1000);
			},
			gotoLogin: function () {
				uni.navigateTo({
					url: 'login'
				})
			}
		},
		computed: {
			disableCodeBtn: function (){
				return this.codeBtn.waitingCode || this.captchaImg.length < 4;
			} 
		}
	}
</script>

<style lang="scss" scoped>
	$color-primary: #ED1C24;
	.content{
		padding: 100upx;
	}
	.uni-form-item{
		margin-bottom: 40upx;
		padding: 0;
		border-bottom: 1px solid #e3e3e3;
		.uni-input{
			font-size: 30upx;
			padding: 7px 0;
		}
	}
	.column-with-btn{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		button{
			font-size: 24upx;
			margin: 0;
			width: 180upx;
			text-align: center;
			&:after{
				border: none
			}
			&.active{
				background-color: $color-primary;
				color: $uni-text-color-inverse;
			}
		}
	}
	.img-captcha{
		width: 150upx;
		height: 60upx;
	}
	button[type="primary"]{
		background-color: $color-primary;
		border-radius: 0;
		font-size: 34upx;
		margin-top: 60upx;
	}
	.text-reset{
		text-align: center;
		margin-bottom: 100upx;
		font-size: 36upx;
	}
</style>
