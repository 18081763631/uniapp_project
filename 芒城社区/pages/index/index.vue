<template>
	<view class="X-baseBackgroundColor " style="height: 1450upx;margin-top: 10upx;">
		 <view class="status_bar X-contentBackgroundColor">
          <!-- 这里是状态栏 -->
      </view>
	  <view class="cu-bar bg-white ">
	  	<view class="cuIcon-location X-left ">{{commuity}}</view>
	  	<view >
	  		<text style="font-weight: 900;font-size: 40upx; color: #A5673F; margin-left: -65upx;" >社志</text>
	  	</view>
		
	  	<view @click="toTip()" class="action " >
			
	  		<text class="cuIcon-notice"></text>
			<view v-if="tip" class="cu-tag badge">{{tip}}</view>
	  	</view>
		
	  </view>
		<view style="height: 10upx;"></view>
		<view class="X-contentBackgroundColor X-out-interval  X-radius">
			
				<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1500">
					<swiper-item>
						<image class="X-radius" style="width: 100%;" src="../../static/jj.jpg" mode="aspectFill"></image>
					</swiper-item>
					<swiper-item>
						<image class="X-radius" style="width: 100%;" src="../../static/u=497438432,973287270&fm=15&gp=0.jpg" mode=""></image>
					</swiper-item>
					<swiper-item>
						<image class="X-radius" style="width: 100%;" src="../../static/u=3660986835,294162580&fm=26&gp=0.jpg" mode=""></image>
					</swiper-item>
				</swiper>
			
			<view class="X-left">
				<scroll-view scroll-x style="white-space: nowrap;show-scrollbar:false;height: 220upx;">
					<view style="display:flex;align-items: flex-start;width: 1500upx;">
						
						<view class="X-contentBackgroundColor X-C X-outLine X-have-intervalPlus X-radius X-out-interval X-CardShadow X-CautoAdjust"
						 style="width: 150upx;" @click="toPayment()">
							<image class=" X-R-Center" style="width: 80upx;height: 80upx;" src="../../static/account.png"></image>
							<text class="X-fontSizeSS  X-font-weight X-fontspacing" style="color:  #d5861d;">房屋账单</text>
						</view>
						<view class="X-contentBackgroundColor X-C X-outLine X-have-intervalPlus X-radius X-out-interval X-CardShadow X-CautoAdjust"
						 @click="toRepair()"  style="width: 150upx;">
							<image class=" X-R-Center" style="width: 80upx;height: 80upx;" src="../../static/repair.png"></image>
							<text class="X-fontSizeSS  X-font-weight X-fontspacing" style="color:  #d5861d;">在线报修</text>
						</view>

							<view class="X-contentBackgroundColor X-C X-outLine X-have-intervalPlus X-radius X-out-interval X-CardShadow X-CautoAdjust"
							  style="width: 150upx;" @click="toTaxi()">
							 
								<image class=" X-R-Center" style="width: 80upx;height: 80upx;" src="../../static/go.png"></image>
								<text class="X-fontSizeSS  X-font-weight X-fontspacing" style="color:  #d5861d;">便捷出行</text>
							</view>
						
						
						
						<view class="X-contentBackgroundColor X-C X-outLine X-have-intervalPlus X-radius X-out-interval X-CardShadow X-CautoAdjust"
						 @click="toRent()"  style="width: 150upx;">
							<image class=" X-R-Center" style="width: 80upx;height: 80upx;" src="../../static/rent.png"></image>
							<text class="X-fontSizeSS  X-font-weight X-fontspacing" style="color:  #d5861d;">快速租房</text>
						</view>
						<view @click="Null()" class=" X-C X-outLine X-have-intervalPlus X-radius X-out-interval X-CardShadow X-CautoAdjust x-"
						  style="width: 150upx;">
							<image class=" X-R-Center" style="width: 80upx;height: 80upx;" src="../../static/door.PNG"></image>
							<text class=" X-fontSizeSS  X-font-weight X-fontspacing" style="color:  #d5861d;" >我的钥匙</text>
						</view>
						<view @click="Null()" class="X-contentBackgroundColor X-C X-outLine X-have-intervalPlus X-radius X-out-interval X-CardShadow X-CautoAdjust"
						  style="width: 150upx;">
							<image class=" X-R-Center" style="width: 80upx;height: 80upx;" src="../../static/vehicle.png"></image>
							<text class="X-fontSizeSS  X-font-weight X-fontspacing" style="color:  #d5861d;">车辆管理</text>
						</view>

					</view>

				</scroll-view>
				<view style="height: 50upx;"></view>
			</view>

		</view>
		<view  class=" X-C X-out-interval X-radius X-outLine X-CardShadow" style="background-color: #e50302; height: 600upx;">
			<view @click="toNEW()" >
					<image class=" X-radius" style="width: 100%;height: 100upx;" mode="aspectFill" src="../../static/TOP.png"></image>
			</view>
			<view @click="toNEW()" class="X-R X-RautoAdjust">
				<text class="X-out-interval X-font-weight X-fontspacing" style="color: #fadd2d;">党建</text>
				<text class="X-out-interval X-fontSizeSS X-fontspacing" style="color:  #FFF;">点击进入...</text>
			</view>
			<view @click="toNEW()" class="">
				<view class="X-fontSizeS X-have-interval X-font-weight X-fontspacing" style="color:  #FFF;">“{{NEW[0].manage_name}}”</view>
				<view class=" X-have-interval X-fontSizeSS X-fontspacing" style=" text-overline: inherit; height: 300upx; color:  #FFF;">
                              {{text}}...

				</view>
			</view>
		</view>
		<view @click="toNotice()" class="X-C X-have-interval X-contentBackgroundColor X-radius X-CardShadow X-out-interval X-allCenter">
				<view class="X-R X-RautoAdjust">
					<text class="X-fontspacing X-font-weight" style="color: #304E07;">社区公告</text>
					<view class="X-C-Center" style="width: 80upx;">
						<image class="img1" src="../../static/jiantou.png" style="width: 50upx;height: 50upx;"></image>
					</view>
				</view>
				

					<view class="X-C-Center X-out-interval" style="">
						
						<text class="X-fontSizeSS X-TextCenter X-allCenter X-fontspacing" style="color:  #1c3f2f;">{{content}}</text>
					</view>
					
			</view>
		</view>
	</view>
</template>

<script>
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	export default {
		components: {
			uniPopup
		},
		go(){
			console.log("11");
			uni.previewImage({
						urls    :"http://static.hcoder.net/public/images/logo.png",
						current :currentUrl
			});
		},
		data() {
			return {
				content:"",
				isshow: true,
				tip:0,
				commuity:"未绑定社区",
				can:false,
				NEW:[],
				text:""
			};
		},
		onLoad() {
			this.getNew();
		},
		onShow(){
			this.isLogin();
			this.getNew();
			this.getTipNum();
			this.commuity = this.getInto();
			this.getNotice();
			
			this.isCan();
			
		},
		onPullDownRefresh() {
			setTimeout(function () {
				
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			getNew(){
				var that =this;
				var phone =this.getPhone();
				uni.request({
					url: 'http://106.13.239.202/community/public/manage/current?type=1',
					method: 'GET',
					header: {"content-type": "application/x-www-form-urlencoded"}, 
					data: {
					},
					success: res => {
						console.log(res);
						that.NEW = res.data.data;
						that.text = res.data.data[0].manage_content.substring(0,190); 	
					},
					fail: () => {
						uni.showToast({
							title:"请检查您的网络连接",
							icon:"none"
						})
					}
				});
			},
			isCan(){
				if(this.getCommunity() == this.getInto()){
					this.can = true;
				}
			},
			toTip(){
				uni.navigateTo({
					url: '/pages/tip/tip'
				});
			},
			Null(){
				uni.showToast({
					title:"暂未开放该功能",
					icon:"none"
				})
			},
			getTipNum(){
				var that =this;
				var phone =this.getPhone();
				uni.request({
					url: 'http://106.13.239.202/index.php?c=tip&m=have',
					method: 'POST',
					header: {"content-type": "application/x-www-form-urlencoded"}, 
					data: {
						phone:phone
					},
					success: res => {
						console.log(res.data.data);
						this.tip = res.data.data;
							
					},
					fail: () => {
						uni.showToast({
							title:"请检查您的网络连接",
							icon:"none"
						})
					}
				});
			},
			getNotice(){
				var that =this;
				uni.request({
					url: 'http://106.13.239.202/index.php?c=main&m=getNotice',
					method: 'GET',
					header: {"content-type": "application/x-www-form-urlencoded"}, 
					data: {
					},
					success: res => {
						console.log(res);
						if(res.data.status == 'OK'){
							that.content = res.data.data[0].content;
						}else{
							uni.showToast({title:"获取公告失败", icon:"none"});
							
						}
							
					},
					fail: () => {
					
					},
					complete: () => {}
				});
			},
			toNEW(){
				uni.switchTab({
					url: '/pages/NEW/NEW'
				});
			},
			toRepair() {
				if(this.getCommunity() == this.getInto()){
					uni.navigateTo({
						url: '/pages/repair/edit'
					});
				}else{
					uni.showToast({title:"您非该社区租户", icon:"none"});
				}
				
			},
			toPayment() {
				if(this.getCommunity() == this.getInto()){
					uni.navigateTo({
						url: '/pages/payment/list'
					});
				}else{
					uni.showToast({title:"您非该社区租户", icon:"none"});
				}
				
			},
			toRent() {
				uni.navigateTo({
					url: '/pages/rent/list'
				});
			},
			toNotice(){
				plus.runtime.getProperty(plus.runtime.appid,(wgtinfo)=>{
				console.log(wgtinfo);
				console.log(wgtinfo.version);   //版本号
				});
				uni.navigateTo({
					url: '/pages/notice/notice'
				});
			},
			to(){
				uni.navigateTo({
					url: '/pages/payment/payment/payment'
				});
			},
			toTaxi() {
				if(this.getCommunity() == this.getInto()){
					uni.navigateTo({
						url: '/pages/taxi/edit'
					});
				}else{
					uni.showToast({title:"您非该社区租户", icon:"none"});
				}
				
			},
			toTaxi2() {
				if(this.getCommunity() == this.getInto()){
					uni.navigateTo({
						url: '/pages/taxi/taxi'
					});
				}else{
					uni.showToast({title:"您非该社区租户", icon:"none"});
				}
				
				
			},
			toLogin() {
				uni.navigateTo({
					url: '/pages/taxi/taxi'
				});
			},
			isLogin(){
				uni.getStorage({
				    key: 'code',
				    success: function (res) {
						console.log(res);
				        if(!res.data){
							uni.navigateTo({
								url: '/pages/login/login'
							});
						}
						
				    },fail() {
				    	uni.navigateTo({
				    		url: '/pages/login/login'
				    	});
				    }
				});
				
			}

			
			
		}
	};
</script>
