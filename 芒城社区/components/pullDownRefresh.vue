<template>
	<view>
		<view :style="{height:top+'px'}" class="bg-black" >
			<view class="cu-bar flex-direction align-center" >
				<text class="action padding text-white">{{text}}</text>
			</view>
		</view>
		<view   @touchstart="moveStart">
			<slot></slot>
		</view>
	</view>
</template>

<style>
	
</style>


<script>
	export default {
		data() {
			return {
				startY:0,
				top:0,
				text:'下拉刷新',
				status:1,
				isScroll:false,
				scrollTop:0
			};
		},
		
		watch:{
			status(newVal,oldVal){
				if(newVal == 3) {
					this.moveFinish();
				}
			}
		},
		
		methods:{
			
			
			stopScroll(){	
				this.isScroll = false
			},
			startScroll(){
				this.isScroll = true
			},
			move(evt){
				
				if(this.startY == 0){
					return
				}
				if(this.status == 2) {
					return
				}
				
				var touch = evt.touches[0]
				var y = Number(touch.pageY) //页面触点Y坐标
				this.top = y - this.startY
				
				if(this.top>0 && !this.isStopScroll) {
					
					this.stopScroll()
				}
				if(this.top>uni.upx2px(100)){
					this.text = "请释放"
				}else {
					this.text = "请下拉"	
				}
			},
			moveStart(evt){
				
				if(this.scrollTop == 0) {
					var touch = evt.touches[0] //获取第一个触点
					var y = Number(touch.pageY) //页面触点Y坐标
					this.startY = y
				}else {
					this.startY = 0
					
				}
			},
			moveEnd(){
				
				if(this.top>uni.upx2px(100)){
					this.text = "正在刷新"
					this.status = 2
					this.top = uni.upx2px(100)
					this.onPullDownRefresh()
				}else {
					this.moveFinish()
					this.startScroll()
				}
				
			},
			
			moveCancel(evt){
				this.moveFinish()
			},
			moveFinish(){
				if(this.status==2) {
					return
				}
				if(this.status == 3) {
					this.text = "刷新成功"
					this.status = 1
					setTimeout(()=>{
						this.moveFinish();
					},1000) 
				}else if(this.status == 1) {
					this.startY = 0
					this.top = 0
					this.text="请下拉"
				}
			},
			onPullDownRefresh(){
				this.$emit('on-pull-down')
			},
			onPullDownFinish(){
				this.status = 3
			}
		}
	}
</script>

