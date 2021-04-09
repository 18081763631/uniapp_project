<template>
	<view class="X-baseBackgroundColor " style="width: 100%;">
		<view class="X-contentBackgroundColor X-have-interval " style="height: 200upx;">
			<text class="X-out-interval X-fontspacing X-font-weight" style="font-size: 50upx;color: #304E07;">报修</text>
			<view class="X-fontSizeSS X-top X-fontspacing X-left" style="color: #d5861d;">欢迎使用{{this.getInto()}}报修服务</view>
		</view>

		<textarea @blur="bindTextAreaBlur" class="X-radius X-have-interval  X-out-interval X-contentBackgroundColor X-fontspacing X-R-Center" style="color: #1c3f2f;width: 95%;"
		 value="" placeholder="请描述您报修的问题..." />


		<!-- 图片选择区域 -->
		<view class="X-out-interval" style="width: 100%;" v-if="tabActiveIdx === 0">
			<chooseImage   :num="6" :size="140" @chooseImage="chooseImage" @delImg="chooseImage" :isSave="false" saveStr="chooseImage" :isClear="hasChooseImg"  />
		</view>
		
		<!-- 选择区域 -->
		<view class="X-R X-have-interval X-RautoAdjust" >
				<text class="X-C-Center X-font-weight X-fontspacing" style="color: #304E07;">上门维修时间</text>
				<view class="X-R " >
					<view class="time">
						
						<dy-Datetime-Picker 
						
							:placeholder="placeholder"
							:timeOptions="timeOptions" 
							:maxDate="defaultMaxDate"
							:minDate="defaultMinDate" 
							:minTime="minTime" 
							:maxTime="maxTime"
							@getData="getData"
							
							:timeIntervalMsec="timeIntervalMsec"
							:type="timeType"></dy-Datetime-Picker>
						 
					</view>
					<view class="cuIcon-unfold X-C-Center"></view>
				</view>
				
		</view>


		
		<view class="X-button " @click="submit()">
			<view class="X-allCenter X-font-weight X-fontspacing" >提交</view>
		</view>
	</view>
</view>
</template>
<script>
	import dyDatetimePicker from '../../components/lanxiujuan-dyDateTime/lanxiujuan-dyDateTime.vue'
	import MxDatePicker from "@/components/mx-datepicker/mx-datepicker.vue";
	import uniCollapse from "../../components/uni-collapse/uni-collapse.vue";
	import uniCollapseItem from "../../components/uni-collapse-item/uni-collapse-item.vue";
	import chooseImage from '@/components/xyz-choose-image/xyz-choose-image.vue';
export default {
		components: {
			uniCollapse,
			uniCollapseItem,
			 MxDatePicker,
			 dyDatetimePicker,
			chooseImage                                                                                                                                                                                                                                                                        
		},
		data() {
			return {
				childValue: new Date().getTime(),
				placeholder: '请选择时间',
							
				defaultMinDate: new Date('2001/1/3').getTime(),
				defaultMaxDate: new Date('2050/12/31').getTime(),
				// 最小时间
				minTime: '10:00',
				// 最大时间
				maxTime: '23:59',
				// 默认时间
				defaultValue: 0,
				// 用于判断是否显示默认的时间， 只有当日期时间都有固定值才为true
				isShowDefaultValue: false,
				// 时间固定选项
				timeOptions: [],
				// 时间类型
				timeType: 'anyTime',
				// 间隔的毫秒
				timeIntervalMsec: 20,
				fixedTimeAarr: [],
				datetimeKey: new Date().getTime(),
				            region:'',
				tabActiveIdx:0,
				hasChooseImg: [],
				decr:"",
				time:"",
				src:"",
				code:"",
				name:"",
				address:""
				
			};
		},
		onLoad() {
			console.log(this.getName());
			
			if (this.isApprove()) {
				this.name = this.getName();
				this.address = this.getAddress();
				this.phone = this.getPhone();
				console.log(this.phone);
			} else{
				
			}
			uni.getSystemInfo({
				success(res) {
					console.log(res)
				}
			})
		},
		methods: {
			getData(time) {
				this.time = time;
			},
			submit(){
				if (!this.decr) {
					uni.showToast({
						title:"请输入报修描述",
						icon:"none"
					})
					
					
					return;
				}else if(!this.time){
					uni.showToast({
						title:"请选择上门时间",
						icon:"none"
					})
					
					return;
				}else{
					var index = 0;
					var that = this;
					uni.request({
						url: 'http://106.13.239.202/index.php?c=workorder&m=editrepair',
						method: 'POST',
						header: {"content-type": "application/x-www-form-urlencoded"}, 
						data: {
							time:that.time,		                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
							describe:that.decr,
							phone:that.phone,
							door:that.address,
							name:that.name,
							community:that.getCommunity()
							
						},
						success: res => {
							console.log(res);
							that.code = res.data.data;
							if (res.data.status == "ok") {
								uni.showToast({
									title:"提交成功！"
								})
							} else{
								uni.showToast({
										title:"提交失败！",
										icon:"none"
									})
								
							}
							
						}
					});
					// 上传文件
					while(index < this.hasChooseImg.length){
						this.upImg(index);
						++index;
					}
					
				}
				
				
				
			},
			bindTextAreaBlur: function (e) {
			            this.decr = e.detail.value;
						
			},
			upImg(index){
				uni.showLoading({title:"正在上传图片"});
				var _self =this;
				console.log(_self.hasChooseImg[0]);
				var uploader = uni.uploadFile({
				    url      : 'http://106.13.239.202/index.php?c=uploadimg&m=index',
				    filePath : _self.hasChooseImg[index],
				    name     : 'file',
				    success: (uploadFileRes) => {
						uni.hideLoading();
						
				        uploadFileRes = JSON.parse(uploadFileRes.data);
						console.log(uploadFileRes.data);
						console.log(uploadFileRes);
				        if(uploadFileRes.status != 'ok'){
				 
				            uni.showToast({title:"上传图片失败,请重试!", icon:"none"});
				            return false;
				        }else{
							
							console.log(uploadFileRes.data);
							this.upcode(uploadFileRes.data);
						}
				        // 将已经上传的文件地址赋值给文章数
				        // 递归上传
				        // setTimeout(function(){_self.uploadImg();}, 1000);
				    },
				    fail: (uploadFileRes) => {
						
				        uni.showToast({title:"上传图片失败,请重试!", icon:"none"});
				    }
				});
			},
			chooseImage(imgArr) {
				var index=0;
				this.hasChooseImg = imgArr;
				
				
			},
			upcode(src){
				var that = this;
				uni.request({
					url: 'http://106.13.239.202/index.php?c=uploadimg&m=setImg',
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
			savePhoto(path) {},
			tabSelect(idx) {
				this.tabActiveIdx = idx
			}
		},
		onReachBottom() {
			this.masonryList = this.masonryList.concat(this.masonryList);
		},
		 openPicker() {
		            this.lotusAddressData.visible = true;
		            this.lotusAddressData.provinceName = '广东省';
		           
		 },
		     
	};
</script>
