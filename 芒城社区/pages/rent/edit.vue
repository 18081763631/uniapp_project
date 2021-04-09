<template>
	<view class="X-baseBackgroundColor">
		<view class="X-have-interval X-C X-contentBackgroundColor" style="height: 200upx;">
			<text class="X-fontspacing X-font-weight" style="color: #304e07;font-size: 50upx;">我要租房</text>
			<text class="X-fontspacing X-fontSizeSS X-top" style="color: #d5861d;">该数据源于物业中心</text>
		</view>
		<view class="X-C X-have-interval X-contentBackgroundColor X-radius">
			<view class="X-R X-RautoAdjust X-out-interval">
				<text class="X-fontspacing X-fontSizeS" style="color: 1c3f2f;">当前房屋</text>
				<text class="X-fontspacing X-fontSizeSS" style="color: 1c3f2f;">{{address}}</text>
			</view>
			<view class="X-line"></view>

			<view class="X-R X-RautoAdjust X-have-interval">
				<text class="X-fontSizeS X-fontspacing X-C-Center" style="color: #1c3f2f;">户型</text>
				<view class="X-R">
				<jsfun-picker mess="备注：这是底部分显示的备注提示" :listArr="ApartmentList" :defaultArr="Default" type="single" @click="ApartmentChange">
					<!-- 自定义页面显示元素 -->
					<view class="X-fontspacing X-fontSizeS X-C-Center" style="color: #555555;">{{ Apartment }}</view>
				</jsfun-picker>
				<view class="cuIcon-unfold"></view>
				</view>
			</view>
			<view class="X-line"></view>
			<view class="X-R X-RautoAdjust X-out-interval">
				<text class="X-fontSizeS X-fontspacing X-C-Center" style="color: #1c3f2f;">装修程度</text>
				<view class="X-R">
				<jsfun-picker mess="备注：这是底部分显示的备注提示" :listArr="RenovationList" :defaultArr="Default" type="single" @click="RenovationChange">
					<!-- 自定义页面显示元素 -->
					<view class="X-fontspacing X-fontSizeS X-C-Center" style="color: #555555;">{{ Renovation }}</view>
				</jsfun-picker>
				<view class="cuIcon-unfold"></view>
				</view>
			</view>
			<view class="X-line"></view>
			<view class="X-R X-RautoAdjust X-out-interval">
				<text class="X-fontSizeS X-fontspacing X-C-Center" style="color: #1c3f2f;">朝向</text>
				<view class="X-R">
				<jsfun-picker mess="备注：这是底部分显示的备注提示" :listArr="OrientationList" :defaultArr="Default" type="single" @click="OrientationChange">
					<!-- 自定义页面显示元素 -->
					<view class="X-fontspacing X-fontSizeS X-C-Center" style="color: #555555;">{{ Orientation }}</view>
				</jsfun-picker>
				<view class="cuIcon-unfold"></view>
				</view>
			</view>
			<view class="X-line"></view>
			<view class="X-R X-RautoAdjust X-out-interval">
				<text class="X-fontSizeS X-fontspacing X-C-Center" style="color: #1c3f2f;">面积</text>
				<textarea value="" @blur="bindArea" placeholder="请输入面积" style="height: 50upx; width: 200upx;" />
					
			</view>
			<view class="X-line"></view>
			<view class="X-R X-RautoAdjust X-out-interval">
				<text class="X-fontSizeS X-fontspacing X-C-Center" style="color: #1c3f2f;">租金</text>
				<textarea value="" @blur="bindMoney" placeholder="请输入租金" style="height: 50upx; width: 200upx;" />
	
			</view>
		</view>

		<view class="X-C X-have-interval X-contentBackgroundColor X-radius X-top">
			<view class="X-R X-RautoAdjust X-have-interval">
				<text class="X-font-weight X-fontSizeS X-fontspacing X-C-Center" style="color: #1c3f2f;">房东姓名：</text>
				<view class="X-fontspacing X-fontSizeS X-C-Center" style="color: #1c3f2f;">
					{{name}}
				</view>
			</view>
			<view class="X-R X-RautoAdjust X-have-interval">
				<text class="X-font-weight X-fontSizeS X-fontspacing X-C-Center" style="color: #1c3f2f;">手机号码：</text>
				<view class="X-fontspacing X-fontSizeS X-C-Center" style="color: #1c3f2f;">
	{{phone}}
				</view>
			</view>
		</view>

		<view class="X-C X-contentBackgroundColor X-radius X-top X-have-interval">
			<view style="width: 100%;"><textarea  @blur="bindTextAreaBlur" class="text" value="" placeholder="对您的房屋描述..." /></view>
			<view class="tupian" style="padding-bottom: 20upx;">
				<view v-if="tabActiveIdx === 0">
					<chooseImage :num="6" :size="200" @chooseImage="chooseImage" @delImg="chooseImage" :isSave="false" saveStr="chooseImage" :isClear="hasChooseImg" />
				</view>
			</view>
		</view>
		<view class="X-button X-top" @click="add()"><text style="color: #FFFFFF;margin: auto;font-size: 40upx;font-weight: 550; letter-spacing: 5upx;">提交</text></view>
		<lotus-address v-on:choseVal="choseValue" :lotusAddressData="lotusAddressData"></lotus-address>
	</view>
</template>
<script>
import jsfunPicker from '@/components/jsfun-picker/jsfun-picker.vue';
import chooseImage from '@/components/xyz-choose-image/xyz-choose-image.vue';
import xflSelect from '@/components/xfl-select/xfl-select.vue';
import lotusAddress from '../../components/Winglau14-lotusAddress/Winglau14-lotusAddress.vue';
export default {
	components: {
		chooseImage,
		xflSelect,
		jsfunPicker,
		'lotus-address': lotusAddress
	},
	data() {
		return {
			
			ApartmentList: ['1室0厅', '1室1厅', '2室1厅', '2室2厅', '3室1厅', '3室2厅', '4室1厅', '4室2厅', '4室3厅', '4室4厅','4室以上'],
			RenovationList: ['精装修', '普通装修', '毛坯房'],
			OrientationList: ['朝南', '朝北', '朝东', '朝西', '朝东南', '朝东北', '朝西南', '朝西北'],
			Apartment: '请选择',
			Renovation: '请选择',
			Orientation: '请选择',
			Default: '请选择',
			lotusAddressData: {
				visible: false,
				provinceName: '',
				cityName: '',
				townName: ''
			},
			tabActiveIdx: 0,
			hasChooseImg: '',
		
			area:"",
			money:"",
			decr:"",
			time:"",
			src:"",
			code:"",
			phone:"",
			name:"",
			address:""
			
		};
	},
	onShow() {
		this.phone = this.getPhone();
		this.name = this.getName();
		this.address = this.getAddress();
	},
	methods: {
		bindMoney: function (e) {
		            this.money = e.detail.value;
					
		},
		bindArea: function (e) {
		            this.area = e.detail.value;
					
		},
		bindTextAreaBlur(e){
		            this.decr = e.detail.value;
					
		},
		upImg(index) {
		      /* uni.showLoading({ 
				title: '正在上传图片' ,
				
				});
				
				    uni.hideLoading();*/
			
			var _self = this;
			
			var uploader = uni.uploadFile({
				url: 'http://106.13.239.202/index.php?c=uploadimg&m=index',
				filePath: _self.hasChooseImg[index],
				name: 'file',
				success: uploadFileRes => {
					uni.hideLoading();

					uploadFileRes = JSON.parse(uploadFileRes.data);
					
					if (uploadFileRes.status != 'ok') {
						uni.showToast({ title: '上传图片失败,请重试!', icon: 'none' });
						return false;
					} else {
						
						this.upcode(uploadFileRes.data);
					}
					// 将已经上传的文件地址赋值给文章数
					// 递归上传
					// setTimeout(function(){_self.uploadImg();}, 1000);
				},
				fail: uploadFileRes => {
					uni.showToast({ title: '上传图片失败,请重试!', icon: 'none' });
				}
			});
		},
		chooseImage(imgArr) {
			var index = 0;
			this.hasChooseImg = imgArr;
		},
		upcode(src) {
			
			var that = this;
			
			uni.request({
				url: 'http://106.13.239.202/index.php?c=uploadimg&m=setImg',
				method: 'POST',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				data: {
					code: that.code,
					 src: src
				},
				success: res => {
					console.log(res);
				}
				
			});
			uni.request({
				url: 'http://106.13.239.202/index.php?c=uploadimg&m=setIndex',
				method: 'POST',
				header: {"content-type": "application/x-www-form-urlencoded"}, 
				data: {
					code:that.code,
					src:src
				},
				success: res => {
					console.log(res);
				}
			});
		},
	
		OrientationChange(data) {
			
			this.Orientation = data.textStr;
		},
		RenovationChange(data) {
			this.Renovation = data.textStr;
		},
		ApartmentChange(data) {
			this.Apartment = data.textStr;
		},
		savePhoto(path) {},
		tabSelect(idx) {
			this.tabActiveIdx = idx;
		},
		add() {
			var index = 0;
			var that = this;
			var phone = this.getPhone();
			var address = this.getAddress();
			var name = this.getName();
			
			//var time = time();
			uni.request({
				url: 'http://106.13.239.202/index.php?c=rent&m=addsalete',
				method: 'POST',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				data: {
					name: name,
					time: "time",
					phone: phone,
					money: '1000',
					type: that.Apartment,
					area: '100',
					direction: that.Orientation,
					door: address,
					level: '11楼',
					fitment: that.Renovation,
					describle: that.decr,
					community:that.getInto()
					
					
				},
				success: res => {
					console.log("asdknalsdkjbajsbdnkasbdnj");
					console.log(res.data.status);
					var ti = res.data.status;
				
					
						uni.showToast({
							title: '发送给工作人员成功！',
							duration: 2500,
							icon: 'none'
						});
						
						that.code = res.data.data;
						console.log(that.code);
						
					
					// 上传文件
					while(index < this.hasChooseImg.length){
						this.upImg(index);
						++index;
					}
					// 上传数据库
				},
				fail: () => {},
				complete: () => {}
			});
		}
	},

	onReachBottom() {
		this.masonryList = this.masonryList.concat(this.masonryList);
	}
};
</script>

<style>
	.bottom {
	}
	.sr {
		height: 50%;
		margin-bottom: 20upx;
	}
	.desc {
		margin-left: auto;
		margin-right: auto;
		width: 96%;
		height: 600upx;
		padding: 20upx;
		display: flex;
		flex-direction: column;
		margin-top: 20upx;
		border-radius: 30upx;
		box-shadow: 0px 5px 6px #f2f2f2;
		background-color: #ffffff;
	}
	.phone-input-line {
		margin: auto;
		width: 80%;
		height: 5upx;
		background-color: #f0f0f0;
	}

	.phone-input-input {
		text-align: center;
		width: 400upx;
		height: 60upx;
		margin: auto;
		display: flex;
		font-size: 35upx;
		letter-spacing: 3upx;
	}
	.phone {
		width: 100%;
		height: 80upx;
		display: flex;
		flex-direction: row;
	}
	.phone-input {
		margin: auto;
		height: 60upx;
		width: 400upx;
	}
	.phone-txt {
		letter-spacing: 10upx;
		margin: auto;
		font-size: 35upx;
		font-weight: 550;
	}
	.name-input {
		height: 60upx;
		width: 100upx;
	}
	.name-input {
		display: flex;
		margin: auto;
		height: 60upx;
		width: 200upx;
		flex-direction: column;
	}
	.name-txt {
		letter-spacing: 25upx;
		margin: auto;
		font-size: 35upx;
		font-weight: 550;
	}
	.name-input-line {
		width: 100%;
		height: 5upx;
		background-color: #f0f0f0;
	}
	.name-input-input {
		text-align: center;
		width: 200upx;
		height: 60upx;
		margin: auto;
		display: flex;
		font-size: 35upx;
		letter-spacing: 3upx;
	}

	.name {
		width: 100%;
		height: 80upx;
		display: flex;
		flex-direction: row;
	}
	.zhuren {
		margin-left: auto;
		margin-right: auto;
		width: 96%;
		height: 200upx;
		display: flex;
		flex-direction: column;
		margin-top: 20upx;
		border-radius: 30upx;
		box-shadow: 0px 5px 6px #f2f2f2;
		background-color: #ffffff;
	}
	.ge {
		display: flex;
		margin: auto;
		width: 90%;
		height: 6upx;
		background-color: #f6f6f6;
		border-radius: 3upx;
	}
	.jiange {
		display: flex;
		margin: auto;
		width: 100%;
		height: 8upx;
		background-color: #f6f6f6;
		border-radius: 4upx;
	}
	.title {
		display: flex;
		margin: auto;
		width: 300upx;
		height: 50upx;
		font-weight: 550;
		letter-spacing: 2upx;
	}
	.xiala {
		float: right;
	}
	.jiantou {
		float: right;
	}
	.xuan {
		letter-spacing: 2upx;
		font-size: 35upx;
		font-weight: 600;
		width: 700upx;
		height: 50upx;
	}
	.A {
		width: 100%;
		height: 1200upx;
		background-color: #f9f9f9;
		display: flex;
		flex-direction: column;
	}
	.B {
		width: 100%;
		height: 100upx;
		display: flex;
		flex-direction: row;
		padding: 20upx;
	}
	.C {
		width: 100%;
		height: 700upx;
		display: flex;
		flex-direction: column;
	}
	.D {
		width: 100%;
		height: 100upx;
		display: flex;
		flex-direction: row;
		padding: 20upx;
	}
	.I {
		width: 400upx;
		height: 100upx;
		display: flex;
		flex-direction: row;

		padding-left: 30upx;
	}
	.itxt {
		width: 200upx;
		font-size: 40upx;
		font-weight: 800;
		display: flex;
		margin: auto;
	}
	.itxt2 {
		font-size: 20upx;
		color: #808080;
		margin-top: 47upx;
	}
	.H {
		margin-top: 20upx;
		width: 96%;
		height: 550upx;

		display: flex;
		flex-direction: column;
		margin-left: auto;
		margin-right: auto;
		border-radius: 30upx;
		box-shadow: 0px 5px 6px #f2f2f2;
		background-color: #ffffff;
	}
	.swiper {
		width: 100%;
		height: 320upx;
	}
	.c1 {
		width: 150upx;
		height: 180upx;
		box-shadow: 0px 8px 4px #f6f6f6;
		display: flex;
		flex-direction: column;

		margin-right: 30upx;
		border-radius: 15upx;

		background-color: #ffffff;
		border: solid #f2f2f2 0.5px;
	}
	.E {
		width: 680upx;
		height: 700upx;

		display: flex;
		flex-direction: column;
		margin: auto;
		border-radius: 30upx;
		box-shadow: 0px 5px 6px #f2f2f2;
		background-color: #ffffff;
	}
	.img {
		width: 70upx;
		height: 70upx;

		margin-top: 30upx;
		margin-left: auto;
		margin-right: auto;
	}
	.txt {
		font-size: 25upx;
		font-weight: 550;
		margin-left: auto;
		margin-right: auto;
		margin-top: 8upx;
		color: #535353;
		letter-spacing: 2upx;
	}
	.txt2 {
		display: flex;
		margin: auto;
		font-size: 38upx;
		font-weight: 800;
	}
	.txt3 {
		display: flex;
		margin: auto;
		font-size: 20upx;
		color: #808080;
	}

	.d1 {
		width: 100upx;
		height: 100upx;

		margin: auto;
		display: flex;
	}
	.d2 {
		width: 15upx;
		height: 100upx;

		margin-top: auto;
		margin-bottom: auto;
		margin-left: -10upx;
	}
	.d3 {
		width: 300upx;
		height: 100upx;

		margin: auto;
		display: flex;
	}
	.d4 {
		width: 50upx;
		height: 50upx;

		margin: auto;
	}
	.img1 {
		width: 40upx;
		height: 40upx;
	}
	.img2 {
		width: 20upx;
		height: 100upx;
	}
</style>
