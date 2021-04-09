<template>
	<view class="X-C">
		<sl-filter :menuList="menuList" @result="result"></sl-filter>
		<view   class="X-R X-have-interval X-contentBackgroundColor"  v-for="(itme,index) in list" :key="index" @click="toDetails(itme)" v-if="priceMin<=itme.money&&priceMax>=itme.money&&areaMin<=itme.area&&areaMax>=itme.area&&itme.community == this.getInto()" >
				<!-- 图片 -->
					<image v-if="itme.community == this.getInto()" class="X-radius" style="width: 180upx;height: 200upx;" :src="itme.index"></image>
				<!-- 信息 -->
				<view v-if="itme.community == this.getInto()" class="X-C X-left">
					<!-- 小区名及户型 -->
						<!--这个没有改 -->
						<text class="X-fontspacing X-font-weight" style="color: #304E07;">{{itme.community}}</text>
					<!-- 面积等 -->
						<text class="X-fontspacing X-top" style="color: #1c3f2f;font-size: 20upx;">{{itme.fitment}} | {{itme.area}}平方米 | 朝向{{itme.direction}}</text>
						<text  class="X-fontspacing X-top" style="color: #1c3f2f;font-size: 20upx;">{{itme.door}}</text>
						<text  class="X-fontspacing X-top X-fontSizeS" style="color: #d5861d;">{{itme.money}}元/月</text>
				</view>
		</view>
		
		<view v-if="this.getCommunity() == this.getInto()">
		        <uni-fab
		            :pattern="pattern"
		            :content="content"
		            :horizontal="horizontal"
		            :vertical="vertical"
		            :direction="direction"
		            @trigger="trigger"
		        ></uni-fab>
				
		    </view>
	</view>
</template>
<script>
	import slFilter from '@/components/sl-filter/sl-filter.vue';
	import uniFab from '../../components/uni-fab/uni-fab.vue';
	export default {
		data() {
			return {
				priceMin:0,
				srcc:"http://106.13.239.202/imgs/5dde755cf087b.jpeg",
				priceMax:100000,
				areaMin:0,
				areaMax:1000,
               horizontal: 'left',
                           vertical: 'bottom',
                           direction: 'horizontal',
                           pattern: {
                               color: '#ED1C24',
                               backgroundColor: '#fff',
                               selectedColor: '#007AFF',
                               buttonColor:"#ED1C24"
                           },
                           content: [
                               {
                                   iconPath: '/static/component.png',
                                   selectedIconPath: '/static/componentHL.png',
                                   text: '我要出租',
                                   active: false
                               }
                           ],
			   list:[],
			 

			   menuList: [{
						'title': '月租',
						'isMutiple': false,
						'key': 'price',
						'detailList': [{
								'title': '不限',
								'value': '0-999999'
							},
							{
								'title': '1000以下',
								'value': '0-1000'
							},
							{
								'title': '1000-2000',
								'value': '1000-2000'
							},
							{
								'title': '2000-3000',
								'value': '2000-3000'
							},
							{
								'title': '3000以上',
								'value': '3000-1000000'
							}
						]
					},
					{
						'title': '大小',
						'key': 'area',
						'isMutiple': false,
						'detailTitle': '单位/㎡',
						'detailList': [{
								'title': '不限',
								'value': '0-999'
							},
							{
								'title': '100以下',
								'value': '0-100'
							},
							{
								'title': '100-200',
								'value': '100-200'
							},
							{
								'title': '200-300',
								'value': '200-300'
							},
							{
								'title': '300以上',
								'value': '300-100000'
							}
						]

					},
					{
						'title': '排序',
						'key': 'sort',
						'isSort': true,
						'detailList': [{
								'title': '默认排序',
								'value': ''
							},
							{
								'title': '价格由高到低',
								'value': 'price_Up_To_Low'
							},
							{
								'title': '价格由低到高',
								'value': 'price_Low_To_Up'
							}
						]
					}
				]

			   
			}
		},
		onLoad() {
			
			var that = this;
			uni.request({
				url: 'http://106.13.239.202/index.php?c=rent&m=salelist',
				method: 'GET',
				data: {
				},
				success: res => {
				  var i = 0;
				  that.list = res.data.data;
				 console.log(res);
			
				
				}
			});
		}
		
		
		,
		methods: {
			
		
			
			result(val) {
				
				var that = this;
				if(val.price == ""){
					that.price_999();
				}
				if(val.price == "0-1000"){
					that.price_0_1000();
				}
				if(val.price == "1000-2000"){
					that.price_1000_2000();
				}
				if(val.price == "2000-3000"){
					that.price_2000_3000();
				}
				if(val.price == "3000-1000000"){
					that.price_3000_Up();
				}
				if(val.area == "0-100"){
					that.area_0_100();
				}
				if(val.area == ""){
					that.area_0001();
				}
				if(val.area == "100-200"){
					that.area_100_200();
				}
				if(val.area == "200-00"){
					that.area_200_300();
				}
				if(val.area == "300-100000"){
					that.area_300_Up();
				}
				if(val.sort == "price_Up_To_Low"){
					that.sort_price_Up_To_Low();
				}
				if(val.sort == "price_Low_To_Up"){
					that.sort_price_Low_To_Up();
				}
				console.log('filter_result:' + JSON.stringify(val));
				this.filterResult = JSON.stringify(val, null, 2)
			},
			sort_price_Up_To_Low:function(){
				var that = this;
				var temp;
				//冒泡排序
				for (var i = 0; i < that.list.length-1; i++) {
					for (var j = i+1; j < that.list.length; j++) {
						if(that.list[i].money < that.list[j].money){
							temp = that.list[i];
							that.list[i] = that.list[j];
							that.list[j] = temp;
						}
					}
				}
			},
			sort_price_Low_To_Up:function(){
				var that = this;
				var temp;
				for (var i = 0; i < that.list.length-1; i++) {
					for (var j = i+1; j < that.list.length; j++) {
						if(that.list[i].money > that.list[j].money){
							temp = that.list[i];
							that.list[i] = that.list[j];
							that.list[j] = temp;
						}
					}
				}
			},
			price_999:function(){
				this.priceMin = 1;
				this.priceMax = 9999999;
				
			},
			price_0_1000:function(){
				this.priceMin = 0;
				this.priceMax = 999;
				
			},
			price_1000_2000:function(){
				this.priceMin = 1000;
				this.priceMax = 2000;
			},
			price_2000_3000:function(){
				this.priceMin = 2000;
				this.priceMax = 3000;
			},
			price_3000_Up:function(){
				this.priceMin = 3000;
				this.priceMax = 10000000;
			},
			area_0_100:function(){
				this.areaMin = 0;
				this.areaMax = 100;
			},
			area_0001:function(){
				this.areaMin = 0;
				this.areaMax = 99999;
			},
			area_100_200:function(){
				this.areaMin = 100;
				this.areaMax = 200;
			},
			area_200_300:function(){
				this.areaMin = 200;
				this.areaMax = 300;
			},
			area_300_Up:function(){
				this.areaMin = 300;
				this.areaMax = 100000;
			},
			trigger(e) {
			            console.log(e);
			            this.content[e.index].active = !e.item.active;
			            uni.navigateTo({
			            	url: `/pages/rent/edit`
			            })
			},
		
			toDetails(itme) {
				
				var code = itme.code;
				
				uni.navigateTo({
					url: `/pages/rent/details?code=${code}`
				})
			},
		}, 
			  components: {
				uniFab,
				slFilter
			}
	}
</script>
<style>
	.zufang {
		background-color: #f6f6f6;
		width: 100%;
		height: 1400upx;
		display: flex;
		flex-direction: column;
	}
	.wenzi2 {
		width: 500upx;
		height: 50upx;
	}

	.wenzi3 {
		width: 500upx;
		height: 50upx;
	}

	.wenzi4 {
		width: 500upx;
		height: 50upx;
	}

	.wenzi5 {
		width: 500upx;
		height: 50upx;
	}

	.text2 {
		font-size: 40upx;
		font-weight: 550;
		letter-spacing: 5upx;
	}

	.text3 {
		font-size: 20upx;
		color: #CCCCCC;
		letter-spacing: 5upx;
	}

	.text4 {
		font-size: 25upx;
		color: #CCCCCC;
		letter-spacing: 5upx;
	}

	.text5 {
		font-weight: 550;
		font-size: 30upx;
		color: #ED1C24;
		letter-spacing: 5upx;
	}

	.mokuai {
		width: 100%;
		height: 300upx;
		display: flex;
		flex-direction: column;
	}

	.miaoshu {
		background-color: #FFFFFF;
		padding: 20upx;
		width: 680upx;
		height: 250upx;
		border-radius: 20upx;
		box-shadow: 2upx 5upx 5upx 3upx #F0F0F0;
		display: flex;
		margin: auto;
		flex-direction: row;
	}

	.tupian {
		width: 180upx;
		height: 200upx;
		border-radius: 20upx;
	}

	.tupianxiangqing {
		width: 180upx;
		height: 200upx;
		border-radius: 20upx;
	}

	.xinxi {
		margin-left: 20upx;
		width: 450upx;
		height: 300upx;
		display: flex;
		flex-direction: column;
	}
</style>
