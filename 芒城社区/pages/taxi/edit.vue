<template>
	<view class="X-C X-baseBackgroundColor">
		<view class="X-C X-have-interval X-contentBackgroundColor" style="height: 200upx;">
			<text class="X-fontspacing X-font-weight" style="font-size:50upx ;color: #304E07;">便捷出门</text>
			<text class="X-fontspacing X-fontSizeSS X-top" style="color: #d5861d;">快速出行</text>
		</view>
		<text class="X-fontspacing X-left X-font-weight" style="color: #304E07;">司机</text>
		<view @click="toTaxi2()" class="X-C X-have-interval X-contentBackgroundColor X-radius X-CardShadow X-out-interval X-allCenter">
				
			<view class="X-RautoAdjust X-C-Center" style="height: 200upx;">
					<image class="" style="width: 200upx;height: 200upx;" src="../../static/car2.png"></image>
				
					<text class="X-C-Center X-fontspacing X-fontSizeS" style="color:  #1c3f2f;">当前寻找司机人数：</text>
					<text class="X-C-Center X-fontspacing" style="color:#d5861d;font-size: 40upx;">{{have}} 人</text>
					<image class="X-C-Center" src="../../static/jiantou.png" style="width: 40upx;height: 40upx;"></image>
			</view>
		</view>
		<text class="X-fontspacing X-left X-font-weight" style="color: #304E07;">乘客</text>
		<view style="height: 30upx;"></view>
		<view class="X-C X-have-interval X-CardShadow X-radius X-allCenter X-contentBackgroundColor" style="width: 90%;">
			<view class="X-C">
				<text class="X-fontspacing X-fontSizeS" style="color: #1c3f2f;">目的地：</text>
				<view class="X-C" style="margin-left: 80upx;">
					<input class="X-top" value="" @input="addaddress" />
					<view class="X-line" style="width: 100%;"></view>
				</view>
			</view>
			<view class="X-C X-top">
				<text class="X-fontspacing X-fontSizeS" style="color: #1c3f2f;">选择人数：</text>

				<jsfun-picker mess="备注：请选择您本次出行的人数" :listArr="peopleList" :defaultArr="Default" type="single" @click="peopleChange">
					<!-- 自定义页面显示元素 -->
					<view class="X-fontspacing X-fontSizeS X-top" style="color: #555555;text-indent: 2em;">{{ people }}</view>
				</jsfun-picker>
			</view>
			<view class="X-C X-top">
				<text class="X-fontspacing X-fontSizeS" style="color: #1c3f2f;">出行时间：</text>
				<view class="X-C X-top" style="text-indent: 2em;">
					<dy-Datetime-Picker
						:placeholder="placeholder"
						:timeOptions="timeOptions"
						:maxDate="defaultMaxDate"
						:minDate="defaultMinDate"
						:minTime="minTime"
						:maxTime="maxTime"
						@getData="getData"
						:timeIntervalMsec="timeIntervalMsec"
						:type="timeType"
					></dy-Datetime-Picker>
				</view>
			</view>
		</view>
		<view style="height: 30upx;"></view>
		<view class="X-C X-have-interval X-CardShadow X-radius X-allCenter X-contentBackgroundColor" style="width: 90%;">
			<view class="X-C">
				<text class="X-fontspacing X-fontSizeS" style="color: #1c3f2f;">姓名：</text>
				<view class="X-C" style="text-indent: 2em;">
					<input class="X-top" value="" @input="addname" />
					<view class="X-line" style="width: 100%;margin-left: 80upx;"></view>
				</view>
			</view>
			<view class="X-C X-top">
				<text class="X-fontspacing X-fontSizeS" style="color: #1c3f2f;">电话：</text>
				<view class="X-C" style="text-indent: 2em;">
					<input class="X-top" type="number" maxlength=11 value="" @input="addphone" />
					<view class="X-line" style="width: 100%;margin-left: 80upx;"></view>
				</view>
			</view>
		</view>
		<view style="height: 30upx;"></view>
		<view @click="uporder()" class="X-button"><text class=" X-allCenter" style="">寻找司机</text></view>
	</view>
</template>

<script>
import jsfunPicker from '@/components/jsfun-picker/jsfun-picker.vue';
import dyDatetimePicker from '../../components/lanxiujuan-dyDateTime/lanxiujuan-dyDateTime.vue';
export default {
	components: {
		jsfunPicker,
		dyDatetimePicker
	},
	data() {
		return {
			have:0,
			people: '请选择',
			Default: '请选择',
			peopleList: ['1人', '2人', '3人', '4人', '5人', '6人', '7人'],
			childValue: new Date().getTime(),
			placeholder: '请选择开始时间',

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
			region: '',
			tabActiveIdx: 0,
			address: '',
			time: '',
			name: '',
			phone: 0,
			inputValue: ''
		};
	},
	onLoad() {},
	onShow() {
		this.getTaxiNum();
	},
	methods: {
		toTaxi2() {
			uni.navigateTo({
				url: '/pages/taxi/taxi'
			});
		},
		getTaxiNum(){
			var that =this;
			uni.request({
				url: 'http://106.13.239.202/index.php?c=taxi&m=have',
				method: 'POST',
				header: {"content-type": "application/x-www-form-urlencoded"}, 
				data: {
					community:that.getCommunity()
				},
				success: res => {
					console.log(res.data.data);
					this.have = res.data.data;
						
				},
				fail: () => {
					uni.showToast({
						title:"请检查您的网络连接",
						icon:"none"
					})
				}
			});
		},
		getData(time) {
			this.time = time;
		},
		peopleChange(data) {
			this.people = data.textStr;
		},
		addaddress(event) {
			this.address = event.target.value;
		},
		addtime: function(event) {
			this.time = event.target.value;
		},
		addname: function(event) {
			this.name = event.target.value;
		},
		addphone: function(event) {
			this.phone = event.target.value;
		},

		test() {
			console.log(this.time);
		},

		uporder() {
			if (!this.address) {
				uni.showToast({
					title: '请输入目的地',
					icon: 'none'
				});

				return;
			}  else if (this.people == "请选择") {
				uni.showToast({
					title: '请选择出行人数',
					icon: 'none'
				});

				return;
			}  else if (!this.time) {
				uni.showToast({
					title: '请选择出行时间',
					icon: 'none'
				});

				return;
			}else if (!this.name) {
				uni.showToast({
					title: '请输入姓名',
					icon: 'none'
				});

				return;
			}else if (!this.phone) {
				uni.showToast({
					title: '请输入电话',
					icon: 'none'
				});

				return;
			}else if (this.phone < 10000000000) {
				uni.showToast({
					title: '请输入正确的11位电话号码',
					icon: 'none'
				});

				return;
			}  else {
				var that = this;
				var user = this.getPhone();
				uni.showLoading({
					title:"提交数据中..."
				})
				uni.request({
					url: 'http://106.13.239.202/index.php?c=taxi&m=uporder',
					method: 'POST',
					header: { 'content-type': 'application/x-www-form-urlencoded' },
					data: {
						address: this.address,
						people: this.people,
						name: this.name,
						phone: this.phone,
						status: '0',
						time: this.time,
						user: user,
						community:that.getCommunity()
					},
					success: res => {
						if(res.data.data == "添加成功"){
							uni.showToast({
								title:"发布信息成功",
								icon:"success"
							})
						}else{
							uni.showToast({
								title:"发布信息失败",
								icon:"none"
							})
						}
						uni.hideLoading();
					}
				});
			}
		}
	}
};
</script>
<style></style>
