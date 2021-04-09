<template>

	<view class="content">
		<uni-nav-bar left-icon="arrowleft" right-text="菜单" left-text="返回" title="标题" @click-left="back" />
		<uni-evaluate :list-data="evaluateData" :rate="rateData"/>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
	import uniEvaluate from '@/components/xiujun-evaluate/uni-evaluate.vue';
	export default {
		data() {
			return {
				evaluateData:evaluateData,
				rateData:4.6
			}
		},
		methods: {
			
		},
		components: {
			uniEvaluate,
			uniNavBar
		}
	}
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
}
.logo {
	height: 200upx;
	width: 200upx;
	margin-top: 200upx;
}
.title {
	font-size: 36upx;
	color: #8f8f94;
}
</style>
