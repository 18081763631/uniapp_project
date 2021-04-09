
<template>
	<view class="X-baseBackgroundColor " style="width: 100%;">
		<!-- 头标题 -->
		<view class="X-title-fontsize X-contentBackgroundColor X-font-weight X-have-interval X-fontspacing" style="color: #304E07;">发布公告</view>
		<view class="X-have-interval X-textColor1 X-fontSizeS X-contentBackgroundColor X-fontspacing" style="width: 100%;color: #1c3f2f;">请选择发送对象</view>
		<!-- 输入框 -->

		<textarea @blur="bindTextAreaBlur" class="X-radius X-have-interval  X-out-interval X-contentBackgroundColor X-fontspacing" style="width: 90%;color: #1c3f2f;"
		 value="" placeholder="请描述公告..." />
		<view class="X-out-interval X-contentBackgroundColor X-C X-top X-radius">
		<text class="X-out-interval X-font-weight X-fontspacing" style="color: #1c3f2f;">发送对象</text>
		<checkbox-group @change="checkboxChange" class="X-contentBackgroundColor X-radius X-R X-RautoAdjust  X-C-Center X-have-interval" style="height: 100upx;">
			<label>
					<checkbox class="X-out-interval X-fontspacing" style="color: #1c3f2f;" value="people"  />业主
			</label>
			<label>
					<checkbox class="X-out-interval X-fontspacing" style="color: #1c3f2f;" value="worker" />工作人员
			</label>
		</checkbox-group>
	    </view>
		<view class="X-button " @click="send()" >
			<view class="X-allCenter X-font-weight X-fontspacing" >提交</view>
		</view>
	</view>

</template>
<script>
	export default {
	        data() {
	            return {
					content:"",
					choose:[],
					title: 'request-payment',
					loading: false,
					price: 1,
					providerList: [],
					orderInfo:[],
	            }
	        },
			onload(){
				uni.getProvider({
				    service: "payment",
				    success: (e) => {
				        console.log("payment success:" + JSON.stringify(e));
				        let providerList = [];
				        e.provider.map((value) => {
				            switch (value) {
				                case 'alipay':
				                    providerList.push({
				                        name: '支付宝',
				                        id: value,
				                        loading: false
				                    });
				                    break;
				                case 'wxpay':
				                    providerList.push({
				                        name: '微信',
				                        id: value,
				                        loading: false
				                    });
				                    break;
				                default:
				                    break;
				            }
				        })
				        this.providerList = providerList;
				    },
				    fail: (e) => {
				        console.log("获取支付通道失败：", e);
				    }
				});
			},
			
	        methods: {
	            checkboxChange: function (e) {
						
	                    this.choose = e.detail.value;
	                console.log(this.choose);
	            },
				send(){
					
					if (!this.choose.length ) {
						uni.showToast({
						    title: '请先选择发送对象！',
						    duration: 2000,
							icon:"none"
						});
					}else{
						var index = 0;
						
						while(index < this.choose.length){
							if(this.choose[index] == "people"){
								console.log(this.choose[index]);
								this.setPeople();
							}else if(this.choose[index] == "worker"){
								console.log(this.choose[index]);
								this.setWorker();
							}
							index++;
						}
					}
					
				},
				setPeople(){
					var that = this;
					var community =this.getInto();
					uni.request({
						url: 'http://106.13.239.202/index.php?c=admin&m=setPeople',
						method: 'POST',
						header: {"content-type": "application/x-www-form-urlencoded"},
						data: {
							content:that.content,
							community:community
						},
						success: res => {
							 if(res.data.status == "OK"){
							 	uni.showToast({
							 	    title: '发送给业主成功！',
							 	    duration: 2000,
									icon:"none"
							 	});
							 }
						       
						},
						fail: () => {
						
						},
						complete: () => {
							
						}
					});
				},
				
				setWorker(){
					var that = this;
					var community =this.getInto();
					uni.request({
						url: 'http://106.13.239.202/index.php?c=admin&m=setWorker',
						method: 'POST',
						header: {"content-type": "application/x-www-form-urlencoded"},
						data: {
							content:that.content,
							community:community
						},
						success: res => {
							if(res.data.status == "OK"){
								console.log("成功")
								uni.showToast({
								    title: '发送给工作人员成功！',
								    duration: 2000,
									icon:"none"
								});
							}
							  
						       
						},
						fail: () => {
						
						},
						complete: () => {
							
						}
					});
				},
				bindTextAreaBlur: function (e) {
							this.content = e.detail.value;
				            console.log(this.content)
				},
				
	        }
	    }
</script>


