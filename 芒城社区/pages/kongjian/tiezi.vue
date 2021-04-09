<template>
	<view class="content">

		<view class="sr">
			<textarea class="text" value="" placeholder="快给邻居们分享点什么吧~~~" />
		</view>
		<view class="tupian">
			<view v-if="tabActiveIdx === 0">
					<chooseImage :num="6" :size="200" @chooseImage="chooseImage" @delImg="chooseImage" :isSave="false" saveStr="chooseImage" :isClear="hasChooseImg" />
			</view>
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
				var _self = this;
				console.log(imgArr);
				this.hasChooseImg = imgArr;
				console.log(hasChooseImg["blob"]);
				var  uploadIndex = 0;
				var uploader = uni.uploadFile({
				    url      : '127.0.0.1/index?c=uploadimg&m=index',
				    filePath : _self.hasChooseImg[_self.uploadIndex],
				    name     : 'file',
				    success: (uploadFileRes) => {
				        uploadFileRes = JSON.parse(uploadFileRes.data);
				        if(uploadFileRes.status != 'ok'){
				            
				            uni.showToast({title:"上传图片失败,请重试!", icon:"none"});
				            return false;
				        }
				        // 将已经上传的文件地址赋值给文章数据
				        var index = _self.hasChooseImg[_self.uploadIndex].indexID;
				        _self.uploadIndex ++;
				        // 递归上传
				        setTimeout(function(){_self.uploadImg();}, 1000);
				    },
				    fail: () => {
				        uni.showToast({title:"上传图片失败,请重试!", icon:"none"});
				    }
				});
			},
			savePhoto(path) {},
			tabSelect(idx) {
				this.tabActiveIdx = idx
			}
		},
		onReachBottom() {
			this.masonryList = this.masonryList.concat(this.masonryList);
		}
	};
</script>


<style>
	.tupian{
		padding: 20upx;
		width: 760upx;
		background-color:#FFFFFF ;
	}
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
