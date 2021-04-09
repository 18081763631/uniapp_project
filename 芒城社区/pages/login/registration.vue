<template>
	<view class="X-C X-contentBackgroundColor X-allCenter" style="height: 1470upx;">
		<view style="height: 100upx;"></view>
		<view class="X-contentBackgroundColor"><image  class="X-allCenter" style="width: 300upx;height: 300upx;" src="../../static/logo.png" mode=""></image></view>
		<view class="X-contentBackgroundColor X-out-interval X-allCenter X-radius X-have-interval">
			<input type="tel" class="X-fontspacing X-fontSizeS X-out-interval" style="color: #1c3f2f;" @input="phone" name="" placeholder="请输入手机号" />
		</view>

		<view class="X-contentBackgroundColor X-RautoAdjust X-out-interval X-radius X-have-interval">
			<input type="password" class="X-fontspacing X-fontSizeS X-out-interval" style="color: #1c3f2f;" name="" @input="password" placeholder="请输入密码" />
		</view>
		<view class="X-contentBackgroundColor X-RautoAdjust X-out-interval X-radius X-have-interval">
			<input type="password" class="X-fontspacing X-fontSizeS X-out-interval" style="color: #1c3f2f;" name="" @input="again" placeholder="请再次输入密码" />
		</view>
		<button  style="width: 50%;background-color: #304E07;" type="primary" @click="GO()">注册</button>
		<view class="X-R X-allCenter">
		<view class="X-fontspacing X-fontSizeSS X-out-interval" style="color: #1c3f2f;">已有账号？</view>
		<view class="X-fontspacing X-fontSizeSS X-out-interval" style="color: #d5861d;" @tap="gotoLogin">点此登陆</view>
		</view>
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
				ag:""
			}
		},
		onLoad() {

		},
		methods: {
			GO(){
				if (!this.ph) {
					uni.showToast({title:"请输入手机号", icon:"none"});
					return;
				}else if(!this.pw){
					uni.showToast({title:"请输入密码", icon:"none"});
					return;
				}else if(!(this.pw == this.ag)){
					uni.showToast({title:"密码不一致", icon:"none"});
					return;
				}else{
					uni.showLoading({
						title:"注册中..."
					});
					var that = this;
					uni.request({
						url: 'http://106.13.239.202/index.php?c=login&m=registration',
						method: 'POST',
						header: {"content-type": "application/x-www-form-urlencoded"}, 
						data: {
							phone:that.ph,
							password:that.pw,
							
							
						},
						success: res => {
							console.log(res);
							if(res.data.status == 'ok'){
								uni.hideLoading();
								uni.showToast({title:"注册成功！即将跳转登录...", icon:"none"});
								setTimeout(function () {
									uni.navigateTo({
										url:'/pages/login/login'
									});
								}, 1000);
								
							}else{
								uni.showToast({title:"注册失败", icon:"none"});
							}
							
						}
					});
				}
				
			},
			phone: function(event) {
				console.log(event.target.value);
				this.ph = event.target.value;
			},
			password: function(event) {
				console.log(event.target.value);
				this.pw = event.target.value;
			},
			again:function(event) {
				
				this.ag = event.target.value;
			},
			code: function(event) {
				console.log(event.target.value);
				this.co = event.target.value;
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
		padding: 60upx 100upx 100upx;
	}
	.logo{
	    text-align: center;
		image{
		    height: 200upx;
		    width: 200upx;
		    margin: 0 0 40upx;
		}
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
	.links{
		text-align: center;
		margin-top: 40upx;
		font-size: 26upx;
		color: #999;
		view{
			display: inline-block;
			vertical-align: top;
			margin: 0 10upx;
		}
		.link-highlight{
			color: $color-primary
		}
	}
</style>
