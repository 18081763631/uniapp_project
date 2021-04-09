<template>
	<view class="X-baseBackgroundColor">
		<view class="X-contentBackgroundColor  " style="height: 200upx;">
			<text class="X-out-interval  X-font-weight X-fontspacing" style="color: #304E07; font-size: 50upx;">您对社区的意见:</text>
		</view>
		<view class="X-top X-have-interval X-contentBackgroundColor X-out-interval X-radius">
			<textarea @blur="bindTextAreaBlur" class="X-fontSizeSS X-fontspacing" style="color:  #1c3f2f;" value="" placeholder="输入您的意见" />
			</view>
		
		<view class="X-button " @click="updata()">
			<view class="X-allCenter X-font-weight X-fontspacing">提交</view>
		</view>
	</view>
</template>

<script>
	import chooseImage from '@/components/xyz-choose-image/xyz-choose-image.vue';
	export default {
		components: {
			chooseImage,
		},
		data() {
			return {
				tabActiveIdx:0,
				hasChooseImg: '',
				content:"1"
			};
		},
		onLoad() {
			uni.getSystemInfo({
				success(res) {
					console.log(res)
				}
			})
		},
		methods: {
			chooseImage(imgArr) {
				console.log(imgArr);
				this.hasChooseImg = imgArr;
			},
			  bindcontent: function (e) {
			            this.content = e.detail.value;
			        },
			updata(){
				var that = this;
				
				uni.request({
					url: 'http://106.13.239.202/index.php?c=evaluate&m=addcontent',
					method: 'POST',
					header: {"content-type": "application/x-www-form-urlencoded"}, 
					data: {
						content:that.content,
						community:that.getCommunity()
					
					},
					success(res) {
						if(res.data.data == "ok"){
							uni.showToast({
								title:"感谢您的反馈！"
							})
						}
						console.log(res);
						
						
					}
				});
				
				
			},
			savePhoto(path) {
				
			},
			tabSelect(idx) {
				this.tabActiveIdx = idx;
			},
			bindTextAreaBlur(e){
			            this.content = e.detail.value;
						
			}
		}
	};
</script>


<style>
	.tijiao{
		font-weight: 600;
		margin: auto;
		font-size: 30upx;
		width: 20%;
		height: 30upx;
		color: #DD524D;
	}
	.text{
		width: 95%;
		height: 90%;
		margin: 10upx;
	}
	.ts{
		font-size: 35upx;
		font-weight: 600;
		
	}
	.tishi{
		margin: 30upx;
		width: 100%;
		height: 300upx;
	}
	.sr{width: 100%;
		height: 300upx;
		width: 100%;
		margin-top: 30upx;
		background-color: #FFFFFF;
		box-shadow: 0upx 5upx 5upx #F2F2F2;
	}
	.shuru{
		margin: auto;
		width: 90%;
		height: 300upx;
		background-color: #FFFFFF;
		border: solid #f2f2f2 0.5px;
		
	}
	.content{
		width: 100%;
		height: 1200upx;
		display: flex;
		flex-direction: column;
		background-color: #F8F8F8;
	}
	
	.title{
		height: 150upx;
		width: 100%;
/* 		margin-top: 50upx; */
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
		padding-left: 20upx;
	}
	.txt{
		margin: auto;
		width: 80%;
		color: #0085FF;
		font-size: 45upx;
		font-weight: 600;
		letter-spacing:1.5upx;
	}
	
</style>
