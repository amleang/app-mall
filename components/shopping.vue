<template>
	<view class="seller-list">
		<view class="seller-item">
			<view class="seller">
				<label class="radio">
					<radio value="check" />
				</label>
				<view class="logo">
					<image src="http://p02jejryx.bkt.clouddn.com/69c76fa2419a4c099c774a248a0c7a31.jpg" mode="aspectFill"></image>
				</view>
				<view class="">
					Test001小店
				</view>
			</view>
			<view class="product-list">
				<view class="product-item">
					<label class="radio">
						<radio value="check" />
					</label>
					<image src="https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg" mode="aspectFill"></image>
					<view class="name">
						张胜男佛那单佛大赛你佛搜到你发圣诞
					</view>
					<view class="num">
						x1
					</view>
				</view>
			</view>
		</view>
	</view>

</template>
<script>
	export default {
		data() {
			return {
				check: false
			}
		}
	}
</script>
<style>
	.seller-item {
		background-color: #FFFFFF;
	}

	.seller {
		padding: 0 20px;
		display: flex;
		align-items: center;
		height: 80px;
		border-bottom: 2px solid #eaeaea;
	}

	.seller .logo {
		height: 70px;
		width: 70px;
		margin-right: 10px;
	}

	.seller .logo image {
		height: 70px;
		width: 70px;
	}

	.product-list {
		padding: 0 20px;
	}

	.product-item {
		height: 150px;
		display: flex;
		align-items: center;
	}

	.product-item image {
		width: 140px;
		height: 100%;
	}
</style>
