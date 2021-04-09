<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
	
</script>

<style>
	@import "colorui/icon.css";
	@import "colorui/main.css";
	
	
	page{background-color: #F6F6F6}
	.X-BIMG{
		background-image: "../../static/weixiu.png";
	}
	 .status_bar {
	      height: var(--status-bar-height);
	      width: 100%;
	  }
	.X-color{
		color:#806E2E;
	}
	.X-unClick{
		width: 50upx;
		height: 50upx;
		border-radius: 25upx;
		background-color: #E54D42;
		border-color: #000000;
		border-spacing: auto;
		
	}
	.X-tag{
		background-color:#07BB07 ;
		height: 50upx;
		width: 100upx;
		font-size: 30upx;
		color: #FFFFFF;
		border-radius: 25upx;
		display: flex;
	
	}
	.X-fontSizeSS{
		font-size: 25upx;
	}
	.X-CardShadow{
		display: flex;
		box-shadow: 0px 8px 4px #f2f2f2;
	}
	.X-outLine{
		border: solid #f2f2f2 0.5px;
		
	}
	.X-left{
		margin-left: 20upx;
	}
	.X-bottom{
		margin-bottom: 20upx;
	}
	
	/*每个页面公共css */
	.X-TextCenter{
		 text-align: center;
	}
	.X-top{
		display: flex;
		margin-top: 20upx;
	}
	.X-allCenter{
		display: flex;
		margin: auto;
	}
	.X-R-Center{
		display: flex;
		margin-left: auto;
		margin-right: auto;
	}
	.X-C-Center{
		display: flex;
		margin-top: auto;
		margin-bottom: auto;
	}
	.X-R{
		display: flex;
		flex-direction: row;
	}
	.X-C{
		display: flex;
		flex-direction: column;
	}
	.X-title-fontsize{
		font-size: 50upx;
	}
	.X-baseBackgroundColor{
		background-color: #F6F6F6;
	}
	.X-contentBackgroundColor{
		background-color: #FFFFFF;
	}
	.X-line{
		
		display: flex;
		margin: auto;
		width: 80%;
		height: 1upx;
		background-color: #F0F0F0;
	}
	.X-have-interval{
		padding: 20upx;
	}
	.X-have-intervalMin{
		padding: 10upx;
	}
	.X-have-intervalPlus{
		padding: 30upx;
	}
	.X-out-interval{
		margin: 20upx;
	}
	.X-radius{
		border-radius: 20upx;
	}
	.X-textColor1{
		color: #E1D7F0;
	}
	.X-font-weight{
		font-weight: 550;
	}
	.X-border-line{
		border: solid #DCDFE6 1px;
	}
	.X-right{
		
		float: right;
	}
	.X-RautoAdjust
	{
		display: flex;
		justify-content: space-between;
		
	}
	.X-CautoAdjust{
		display: flex;
		  justify-content:center;
	}
	.X-fontSizeS{
		font-size: 30upx;
		
	}
	.X-fontspacing{
		letter-spacing: 2upx;
	}
	.X-button{
		position: fixed;
		width: 100%;
		bottom: 0upx;
		
		height: 100upx;
		margin-top: 30upx;
		display: flex;
		background-color: #304e07;
		color: #FFFFFF;
	}
	
</style>
