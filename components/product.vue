<template>
	<view class="product">
		<block v-for="(item,index) in productData" :key="index">
			<view class="product-item" :class="index%2==0?'product-one':'product-two'">
				<image class="img" :src="item.image"></image>
				<view class="product-name">
					{{item.title}}
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			productData: {
				type: Array,
				default () {
					return [];
				}
			}
		},

	};
</script>

<style>
	.product-item {
		display: flex;
		flex-direction: column;
		width: 345px;
		float: left;
		margin-bottom: 20px;
		font-size: 26px;
	}

	.product-item .img {
		width: 320px;
		height: 320px;
	}

	.product-one {
		margin-left: 20px;
		margin-right: 10px;
		background-color: #FFFFFF;
	}

	.product-two {
		margin-right: 20px;
		margin-left: 10px;
		background-color: #FFFFFF;
	}

	.product-name {
		height: 80px;
		padding:0 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
