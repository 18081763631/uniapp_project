<template>
	<view class="quyu">
		<view class="card">
			<view class="tou">
				<view class="touxiang">
					<image class="img" src="../../static/emptyCart.jpg" mode=""></image>
				</view>
				<view class="textcontent">
						<view class="name">用户昵称</view>
						<view class="miaosu">用户签名</view>
				</view>
			</view>
			<view class="content">
				<text class="txt">用户发布详细内容 </text>
			</view>
			<view class="mg">
				<text class="time ">10月8日 11.23</text>
				<view class="cuIcon-appreciate dianzan"></view>
				<view class="cuIcon-comment pinglun"></view>
			</view>
			<view class="ping">
				<textarea class="shuru" value="" placeholder="评论" />
			</view>
		</view>
		<view class="card">
			<view class="tou">
				<view class="touxiang">
					<image class="img" src="../../static/emptyCart.jpg" mode=""></image>
				</view>
				<view class="textcontent">
						<view class="name">用户昵称</view>
						<view class="miaosu">用户签名</view>
				</view>
			</view>
			<view class="content">
				<text class="txt">用户发布详细内容 </text>
			</view>
			<view class="mg">
				<text class="time ">10月8日 11.23</text>
				<view class="cuIcon-appreciate dianzan"></view>
				<view class="cuIcon-comment pinglun"></view>
			</view>
			<view class="ping">
				<textarea class="shuru" value="" placeholder="评论" />
			</view>
		</view>
		<uni-fab
		            :pattern="pattern"
		            :content="content"
		            :horizontal="horizontal"
		            :vertical="vertical"
		            :direction="direction"
		            @trigger="trigger"
		        ></uni-fab>
	</view>
</template>

<script>
	import uniIcons from "@/components/yangxiaochuang-icons/yangxiaochuang-icons.vue"
	import uniFab from '@/components/uni-fab/uni-fab.vue';
	export default {
		data() {
			return {
				 horizontal: 'left',
				            vertical: 'bottom',
				            direction: 'horizontal',
				            pattern: {
				                color: '#7A7E83',
				                backgroundColor: '#fff',
				                selectedColor: '#007AFF',
				                buttonColor:"#007AFF"
				            },
				            content: [
				                {
				                    iconPath: '/static/component.png',
				                    selectedIconPath: '/static/componentHL.png',
				                    text: '动态',
				                    active: false
				                },
				                {
				                    iconPath: '/static/api.png',
				                    selectedIconPath: '/static/apiHL.png',
				                    text: '租售',
				                    active: false
				                },

				            ]
				
			}
		},
		methods: {
			
		},
		components: {
		        uniFab,
				uniIcons
		    }
	}
</script>

<style>
	.img{
		width: 70upx;
		height: 70upx;

		border-radius: 35upx;
	}
	.txt{
		
	}
	.pinglun{
		float: right;
	}
	.dianzan{
		width: 50upx;
		height: 50upx;
		color: #F43F3B;
		display: flex;
		float: right;
	
	}
	.time{
		width: 600upx;
		font-size: 10upx;
		color: #F1F1F1;
	}
	.shuru{
		padding: 15upx;
		width: 80%;
		height: 50upx;
		border-radius: 30upx;
		border: solid #f2f2f2 0.5px;
		background-color: #F2F2F2;
		font-size: 20upx;
	}
	.mg{
		width: 100%;
		height: 50upx;
		display: flex;
		flex-direction: row;
	}
	.ping{
		width: 100%;
		height: 80upx;
		
	}
	.content{
		padding: 10upx;
		height: 150upx;
		
		display: flex;
	}
	.miaosu{
		font-size: 20upx;
		color: #E0E0E0;
		}
	.name{
		font-size: 30upx;
		font-weight: 600;
	}
	.textcontent{
		margin-left: 20upx;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.tou{
		width: 100%;
		height: 80upx;

		display: flex;
		flex-direction: row;
		
		
	}
	.touxiang{
		width: 70upx;
		height: 70upx;

		
	}
	.quyu{
		width: 100%;
		height: 100%;
		background-color: #F6F6F6;
	}
	
	.card{
		margin-top: 20upx;
		width: 96%;
		height: 350upx;
		padding: 20upx;
		display: flex;
		flex-direction: column;
		margin-left: auto;
		margin-right: auto;
		border-radius: 30upx;
		box-shadow: 0px 5px 6px #f2f2f2;
		background-color: #FFFFFF;
		
	}
</style>
