<template>
	<view class="X-contentBackgroundColor X-C X-have-interval">
			<text class="X-font-weight X-fontspacing" style="font-size: 50upx;color: #304E07;">验证信息</text>
			<view style="height:30upx ;"></view>
		<view class="X-outLine X-C-Center" style="height:80upx ; border-radius: 40upx;">
			<textarea class="X-C-Center X-fontspacing" style="color: #1c3f2f;margin-left: 20upx;height: 50upx;" value="" placeholder="输入手机号" />
		</view>
		<view style="height:50upx ;"></view>
		<view class="X-R X-C-Center X-RautoAdjust" style="width: 100%;">
			<view class="X-outLine X-C-Center " style="height:80upx ; border-radius: 40upx; width: 60%;">
				<textarea class="X-C-Center X-fontspacing" style="height: 50upx; width: 50%;color: #1c3f2f;margin-left: 20upx;" value="" placeholder="输入验证码" />
			</view>
			<text class="X-fontSizeS X-allCenter X-fontspacing" style="width: 500upx;color: #d5861d;">发送短信</text>
		</view>
		
			<view class="X-radius X-R-Center X-top" style="width:80% ;height: 100upx; background: #304E07;">
				<view class="X-allCenter X-fontspacing" style="color: #FFFFFF;">验证</view>
			</view>
	</view>
</template>

<style>
	.all {
		width: 100%;
		height: 1400upx;
	}

	.biaoti {
		width: 100%;
		height: 200upx;
		padding: 45upx;
	}

	.text1 {
		font-size: 40upx;
		font-weight: 550;
		margin-left: 20upx;
		display: flex;
		margin: auto;
		color: #FFFFFF;
	}

	.text2 {
		font-size: 30upx;
		color: #C0C4CC;
		display: flex;
		margin: 20upx;
	}

	.text3 {
		font-size: 50upx;
		font-weight: 550;
	}
.text4 {
		font-size: 30upx;
		color: #C0C4CC;
	}
	.shojihao {
		width: 680upx;
		height: 80upx;
		border-radius: 50upx;
		box-shadow: 1upx 2upx 2upx 1upx #D3D3D3;
		border: solid #d3d3d3 1px;
		display: flex;
		margin-top: 50upx;
		margin-left: 35upx;
	}

	.yanzhengma {
		width: 680upx;
		height: 80upx;
		display: flex;
		flex-direction: row;
		border-radius: 50upx;
		box-shadow: 1upx 2upx 2upx 1upx #D3D3D3;
		border: solid #d3d3d3 1px;
		margin-top: 50upx;
		margin-left: 35upx;
	}

	.shurukuang {
		margin: 20upx;
		width: 500upx;
		height: 60upx;
		
	}
.button
{
	margin: 15upx;
	width: 200upx;
	height: 60upx;
}
	.yanzhengtubiao {
		background-color: #ec5b58;
		width: 680upx;
		height: 100upx;
		display: flex;
		box-shadow: 1upx 2upx 2upx 1upx #D3D3D3;
		border: solid #d3d3d3 1px;
		margin-top: 50upx;
		margin-left: 35upx;
			border-radius: 80upx;
	}
</style>
