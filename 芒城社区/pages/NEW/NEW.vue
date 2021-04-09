
<template>
	<view style="height: 500upx;width: 100%;">
		 <web-view  :webview-styles="webviewStyles" src="http://106.13.239.202:8080/docs/detail.html#30"></web-view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				 webviewStyles: {
				                    progress: {
				                        color: '#FF3333'
				                    }
				                },
				TabCur: 0,
				tabList: [{ name: '精选' }, { name: '订阅' }],
			}
		},
		
		methods: {
			tabChange(index) {
			    this.TabCur = index;
			 }
		}
		
	}
</script>

<style>

</style>
