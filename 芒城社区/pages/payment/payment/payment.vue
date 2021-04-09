<template>
	<view class="X-C X-baseBackgroundColor X-out-interval">
		<view class="X-C X-contentBackgroundColor" style="height: 300upx;">
			<view class="X-allCenter X-C">
				<text class="X-fontspacing X-R-Center X-fontSizeS" style="color: #304e07;">支付金额</text>
				<text v-if="!(price == 0)" class="X-fontspacing X-R-Center X-font-weight X-top" style="font-size: 50upx;">￥{{money}}</text>
			</view>
		</view>
		<view class="X-C X-have-interval X-contentBackgroundColor ">
			<view class="X-RautoAdjust X-bottom">
				<view class="X-R">
					<image class="X-C-Center" style="width: 80upx;height: 80upx;" src="../../../static/wx.png"></image>
					<view class="X-C X-left">
						<text class="X-fontspacing X-fontSizeS X-font-weight" style="color: #304e07;">微信支付</text>
						<text class="X-fontspacing X-fontSizeSS" style="margin-top: 10upx;color: #1c3f2f;">推荐使用微信支付</text>
					</view>
				</view>
				<radio class="X-C-Center" value="" color="#fa436a" :checked="iswx" @click="wx()"></radio>
			</view>
			<view class="X-line" style="width: 100%;"></view>
			<view class="X-RautoAdjust X-top X-bottom" >
				<view class="X-R">
					<view class="X-allCenter" style="width: 80upx;height: 80upx;">
						<image class="X-allCenter" style="width: 50upx;height: 50upx;" src="../../../static/ali.png"></image>
					</view>
					<view class="X-C X-left"><text class="X-fontspacing X-C-Center X-fontSizeS X-font-weight" style="color: #304e07;">支付宝支付</text></view>
				</view>
				<radio class="X-C-Center" value="" color="#fa436a" disabled="true" @click="ali()"></radio>
			</view>
			<view class="X-line" style="width: 100%;"></view>
		</view>
		<view class="X-contentBackgroundColor" style="height: 50upx;"></view>
		<view class="X-allCenter X-CardShadow" @click="requestPayment()" style="width: 80%;background-color: #304e07;border-radius: 5upx;height:80upx;">
			<text class=" X-allCenter X-fontSizeS" style="color: #FFFFFF;" >确认支付</text>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			title: 'request-payment',
			loading: false,
			money: 0,
			providerList: [],
			payType:0,
			code:"",
			iswx:true,
		};
	},
	onLoad: function(code) {
		uni.showLoading({
			title:"加载中..."
		});
		console.log(code.context);
		this.code = code.context;
		this.money =this.getMoney();
		
		uni.hideLoading();
	},
	methods: {
		getMoney(){
			var that = this;
			this.code = that.code;
			uni.request({
				url: 'http://106.13.239.202/index.php?c=payment&m=getMoney',
				method: 'POST',
				header: {"content-type": "application/x-www-form-urlencoded"},
				data: {
					code:that.code
				},
				success: res => {
					console.log(res);
					  that.money =res.data.data.money;
				       
				},
				fail: () => {
			
				},
				complete: () => {
			
				}
			});
		},
		ali(){
			uni.showToast({
				title:"支付宝方式暂未开放",
				icon:"none"
			})
		},
		wx(){
			if(!this.iswx){
				this.iswx = true;
			}else if(this.iswx){
				this.iswx = false;
				}

			
			
		},
		async requestPayment() {
			console.log("ok2");
			if(this.price == 0){
				uni.showToast({
					title:"数据错误",
					icon:"none"
				});
				return;
			}
			let orderInfo = await this.getOrderInfo();
			console.log("ok1");
			console.log('得到订单信息', orderInfo);
			if (orderInfo.statusCode !== 200) {
				console.log('获得订单信息失败', orderInfo);
				uni.showModal({
					content: '获得订单信息失败',
					showCancel: false
				});
				return;
			}
			uni.requestPayment({
				provider: "wxpay",
				orderInfo: orderInfo.data,
				success: e => {
					console.log('success', e);
					var url = "http://106.13.239.202:8080/nesoft";
					uni.request({
						url: url,
						method: 'POST',
						header: {"content-type": "application/x-www-form-urlencoded"}, 
						data: {
							id:this.getid(),
							fees:this.money
						},
						success: res => {
							
							console.log(res);
						}
					});
					
					uni.showToast({
						title: '支付成功!'
					});
				},
				fail: e => {
					
					uni.showModal({
						content: '支付失败',
						showCancel: false
					});
				},
				complete: () => {
					this.providerList[index].loading = false;
				}
			});
		},
		getOrderInfo() {
			
			var that =this;
			let url = 'http://106.13.239.202/index.php?c=wxpay&m=index';
			console.log(url);
			return new Promise(res => {
				uni.request({
					url: url,
					method: 'POST',
					header: {"content-type": "application/x-www-form-urlencoded"},
					data: {
						
						code:that.code,
						id:that.getid()
						
					},
					success: result => {
						res(result);
					},
					fail: e => {
						res(e);
					}
				});
			});
		},
		priceChange(e) {
			console.log(e.detail.value);
			this.price = e.detail.value;
		}
	}
};
</script>

<style>
.rmbLogo {
	font-size: 40upx;
}

button {
	background-color: #007aff;
	color: #ffffff;
}

.uni-h1.uni-center {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-end;
}

.price {
	border-bottom: 1px solid #eee;
	width: 200upx;
	height: 80upx;
	padding-bottom: 4upx;
}

.ipaPayBtn {
	margin-top: 30upx;
}
</style>
