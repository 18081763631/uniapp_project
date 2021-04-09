<template>
	<view class="X-baseBackgroundColor">
		<view class="X-contentBackgroundColor X-C  X-have-interval X-CardShadow" style="height: 200upx;">
			<view class="X-RautoAdjust ">
				<text class="X-fontspacing X-font-weight" style="font-size: 50upx;color: #304E07;">缴费详情</text>
				<view class="X-tag">
					<text class="X-allCenter X-font-weight"></text>
				</view>
			</view>
			<view class="X-fontSizeSS X-top X-fontspacing" style="color: #d5861d;">计费标准请参照物业管理中心提供的数据</view>
		</view>
		<view class="X-top"></view>
		<view class=" X-allCenter X-contentBackgroundColor ">
			<text class="X-R-Center X-top X-font-weight X-fontspacing" style=" font-size: 50upx;">{{ this.getAddress() }}</text>
		</view>
		<view class="X-C X-contentBackgroundColor">
			<view class="X-font-weight X-have-interval"><text class="X-fontspacing" style="margin: auto;margin-left: 5upx;color: #1c3f2f;">明细</text></view>
			<view class="X-line" style="width: 100%;"></view>
			<view v-for="(li,id) in details" :key= "id" class="X-C X-have-interval">
				<view class="X-R X-RautoAdjust">
					<text class="X-fontspacing" style="font-size: 35upx;color: #1c3f2f">{{li.pay_type_name}}</text>
					<view class="X-R">
						<text class="X-fontspacing" style="font-size: 30upx;color: #1c3f2f">￥</text>
						<text class="X-fontspacing" style="font-size: 30upx;color: #FBBD08">{{ li.fees}}</text>
					</view>
				</view>
				
			</view>
		</view>
		<view class="X-R X-button">
			<view class="X-contentBackgroundColor " style="width: 70%; ">
				<text class="X-font-weight X-have-interval X-fontspacing X-R-Center" style="color: #FBBD08;">总计: ￥{{ money }}</text>
			</view>
			<view @click="topay(money)"  class="X-allCenter">
				<text  class="X-font-weight X-fontspacing" style="text-align: ; margin-right: 10upx;color: #fff;">去缴费</text>
			</view>
			
		</view>
	</view>
</template>
<script>
export default {
	components: {

	},
	data() {
		return {
			money:0,
			details:[],
			code:""
		};
	},
	onLoad(option) {
		var that = this;
		this.money = option.context;
		var url = "http://106.13.239.202:8080/advice_charge/get_fees?id="+this.getid();
		uni.request({
			url: url,
			method: 'get',
			header: {"content-type": "application/x-www-form-urlencoded"}, 
			data: {
			},
			success: res => {
				var i = 0;
				var total = 0;
				console.log(res);
				
					that.have = true;
					that.details = res.data.data.owner_content;
					
					console.log(total);
				
				
			     
			},
			fail: () => {
			
			},
			complete: () => {}
		});


	},
	methods: {
		
		topay(details)
		{
			var money = this.money;
			var id = this.getid();
			uni.request({
				url: 'http://106.13.239.202/index.php?c=payment&m=setMoney',
				method: 'POST',
				header: {"content-type": "application/x-www-form-urlencoded"}, 
				data: {
					money:money,
					id:id
					},
				success: res => {
					console.log(res);
					var code = res.data.data;
					uni.navigateTo({
						
						url: `/pages/payment/payment/payment?context=${code}`
					})
					
					
				}
			});
			
			
		}

	},


};
</script>

<style>
.A {
	width: 100%;
	height: 1250upx;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
}
.B {
	width: 100%;
	height: 150upx;
	display: flex;
	flex-direction: row;

	margin: auto;
	padding: 20upx;
}
.C {
	width: 100%upx;
	height: 80upx;
	background-color: #ffffff;
	display: flex;
	font-weight: 550;
}
.D {
	padding: 20upx;
	width: 100%upx;
	height: 900upx;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
}
.D1 {
	width: 100upx;
	height: 100upx;
	background-color: #ffffff;
	display: flex;
}
.D2 {
	width: 100%upx;
	height: 800upx;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
}
.d2 {
	width: 100%upx;
	height: 50upx;
	display: flex;
	margin-top: 10upx;
	flex-direction: row;
	justify-content: space-between;
	font-size: 30upx;
	color: #c0c0c0;
}

.E {
	width: 100%upx;
	height: 100upx;
	background-color: #ffffff;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 200upx;
}
.E1 {
	width: 70%upx;
	height: 90upx;
	background-color: #ffffff;
	display: flex;
}
.E2 {
	width: 35%;
	height: 90upx;
	background-color: #dd524d;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
