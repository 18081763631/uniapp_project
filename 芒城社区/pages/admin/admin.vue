<template>
	<view class="X-C " style="background: #f6f6f6;">
		<view class="X-C X-top X-radius X-R-Center X-have-interval" style="height: 200upx; width: 90%;background-color: #FFFFFF;">
			<view class="X-R">
				<text class="X-fontspacing  X-font-weight" style="	width: 80%;font-size: 50upx;color: #304E07;">最新通知:</text>
				<text style="font-size: 20upx;color: #555555;">2019/11/5</text>
			</view>
			<text class="X-top X-fontSizeSS" style="color: #d5861d;">{{ meg }}</text>
		</view>

		<view class="X-R  X-RautoAdjust X-top X-out-interval" style="background: #F5F5F5; font-size: 30upx;">
			<view @click="toRepair()" v-if="comAdmin || superAdmin" class=" X-TextCenter X-radius X-C " style="width: 200upx; background: #FFFFFF;">
				<image class="icon X-allCenter" src="../../static/adminWork.png"></image>
				<text class="X-bottom">工单</text>
			</view>
			<view @click="Null()" v-if="comAdmin || superAdmin" class=" X-TextCenter X-radius X-C " style="width: 200upx; background: #FFFFFF;">
				<image class="icon X-allCenter" src="../../static/adminCar.png"></image>
				<text class="X-bottom">车辆管理</text>
			</view>
			<view v-if="comAdmin || superAdmin" class=" X-TextCenter X-radius X-C  " style="width: 200upx; background: #FFFFFF;" @click="phones()">
				<image class="icon X-allCenter" src="../../static/adminPhone.png"></image>
				<text class="X-bottom ">通讯录</text>
			</view>
			

			
		</view>
		<view class="X-R  X-RautoAdjust X-top X-out-interval" style="background: #F5F5F5; font-size: 30upx;">
			<view @click="toEvaluate()" v-if="superAdmin" class=" X-TextCenter X-radius X-C " style="width: 200upx; background: #FFFFFF;">
				<image class="icon X-allCenter  " src="../../static/adminMsg.png"></image>
				<text class="X-bottom">评价</text>
			</view>
			<view v-if="superAdmin" @click="toCheckList()" class=" X-TextCenter X-radius X-C  " style="width: 200upx; background: #FFFFFF;">
				<image class="icon X-allCenter" @click="zhushou()" src="../../static/adminCheck.png"></image>
				<text class="X-bottom">租售审核</text>
			</view>
			<view @click="toEdit()" v-if="superAdmin" class=" X-TextCenter X-radius X-C " style="width: 200upx; background: #FFFFFF;">
				<image class="icon X-allCenter" src="../../static/adminNotice.png"></image>
				<text class="X-bottom">公告</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			meg: '',
			comAdmin: false,
			superAdmin: false
		};
	},
	onShow() {
		this.getMeg();
		this.comAdmin = this.isComAdmin();
		this.superAdmin = this.isSuperAdmin();
	},
	methods: {
		Null(){
			uni.showToast({
				title:"暂未开放该功能",
				icon:"none"
			})
		},
		getMeg() {
			var that = this;
			uni.request({
				url: 'http://106.13.239.202/index.php?c=main&m=getNotice',
				method: 'GET',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				data: {},
				success: res => {
					that.meg = res.data.data[0].content;
				}
			});
		},
		toEvaluate() {
			uni.navigateTo({
				url: `/pages/admin/evaluate`
			});
		},
		toRepair() {
			uni.navigateTo({
				url: `/pages/repair/list`
			});
		},
		toEdit() {
			uni.navigateTo({
				url: `/pages/admin/edit`
			});
		},
		gongdan() {
			uni.navigateTo({
				url: `/pages/gongdan/gongdan`
			});
		},
		phones() {
			uni.navigateTo({
				url: `/pages/admin/phones`
			});
		},
		gonggao() {
			uni.navigateTo({
				url: `/pages/gonggao/gonggao`
			});
		},
		toCheckList() {
			uni.navigateTo({
				url: `/pages/check/list`
			});
		}
	}
};
</script>

<style>
.t {
	width: 100%;
	display: flex;
	flex-direction: row;
}
.a {
	font-size: 20upx;
	color: #555555;
}
.content {
	width: 100%;
	height: 1200upx;
	background-color: #f6f6f6;
}
.B {
	margin-top: 20upx;
	font-size: 30upx;
	color: #555555;
	letter-spacing: 1upx;
}
.A {
	width: 80%;
	font-size: 40upx;
	font-weight: 550;
	letter-spacing: 2upx;
}
.tongzi {
	margin-top: 20upx;
	margin-left: auto;
	margin-right: auto;
	padding: 20upx;
	width: 90%;
	height: 200upx;
	background-color: #ffffff;
	border-radius: 30upx;
	display: flex;
	flex-direction: column;
}

.te {
	margin-bottom: 10upx;
}
.ra {
	border-radius: 20upx;
}
.li {
	background: #ffffff;
	font-size: 30upx;
	display: flex;
	margin-left: 10upx;
	margin-right: 10upx;
	margin-bottom: 20upx;
	border-radius: 20upx;
	margin-top: 20upx;
	width: 220upx;
	align-items: center;
	text-align: center;
	flex-direction: column;
}
.icon {
	width: 150upx;
	height: 150upx;
}
.huan {
	justify-content: space-between;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
.tu {
	height: 100%;
	width: 100%;
	border-radius: 20upx;
}
.lun {
	height: 300upx;
	width: 100%;
}
</style>
