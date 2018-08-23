<template>
	<view class="index">
		<scroll-view class="index-bd" scroll-y>
			<scroll-view id="tab-bar" class="swiper-tab" scroll-x :scroll-left="scrollLeft">
				<block v-for="(tab,index) in tabs" :key="tab.id">
					<view :class="['swiper-tab-list',currentTab==index ? 'on' : '']" :id="tab.id" :data-current="index" @tap="swichNav">{{tab.name}}</view>
				</block>
			</scroll-view>
			<view class="search">
				搜索
			</view>
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height:35%;">
				<swiper-item>
					<view class="swiper-item">
						<image src="http://img.anlyzhao.com/3188799691524b4d99754b989ff075bb.jpg" mode="aspectFill" style="width:100%;height:100%;"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="http://img.anlyzhao.com/74f833d766ac445aaef60e6c5b9e0dfe.jpg" mode="aspectFill" style="width:100%;height:100%;"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">文本</view>
				</swiper-item>
			</swiper>

			<view class="product-list">
				<product :productData="productList"></product>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	import product from '../../components/product.vue';

	export default {
		components: {
			product
		},
		data() {
			return {
				productList: [],
				title: 'tabbar',
				scrollLeft: 0,
				isClickChange: false,
				currentTab: 0,
				tabs: [{
					name: '关注',
					id: 'guanzhu'
				}, {
					name: '推荐',
					id: 'tuijian'
				}, {
					name: '体育',
					id: 'tiyu'
				}, {
					name: '热点',
					id: 'redian'
				}, {
					name: '财经',
					id: 'caijing'
				}, {
					name: '娱乐',
					id: 'yule'
				}, {
					name: '军事',
					id: 'junshi'
				}, {
					name: '历史',
					id: 'lishi'
				}, {
					name: '本地',
					id: 'bendi'
				}],
			}
		},
		onLoad: function () {
			this.loadData();
			uni.getSystemInfo({
				success: function (res) {

					// 					uni.showToast({
					// 						title: "height=>" + this.bannerHeight
					// 					})
					console.log("res=>", res)
				}
			})
		},
		onUnload: function () {
			this.scrollLeft = 0,
				this.isClickChange = false,
				this.currentTab = 0;
		},
		methods: {
			loadData(action = 'add') {
				const data = [{
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
					title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
					originalPrice: 9999,
					favourPrice: 8888,
					tip: '自营'
				}, {
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
					title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
					originalPrice: 3499,
					favourPrice: 3399,
					tip: '优惠'
				}, {
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
					title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MPXT2CH/A）',
					originalPrice: 12999,
					favourPrice: 10688,
					tip: '秒杀'
				}, {
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
					title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
					originalPrice: 999,
					favourPrice: 958,
					tip: '秒杀'
				}, {
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',
					title: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',
					originalPrice: 8888,
					favourPrice: 8288,
					tip: '优惠'
				}, {
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
					title: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
					originalPrice: 2899,
					favourPrice: 2799,
					tip: '自营'
				}];

				if (action === 'refresh') {
					this.productList = [];
				}

				data.forEach(item => {
					this.productList.push(item);
				});
			},
			getWidth: function (id) { //得到元素的宽高
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						if (id === 'tab-bar') {
							console.log("id=", id, "数据:", data)
						}
						res(data);
					}).exec();
				})
			},
			swichNav: async function (e) { //点击tab-bar
				if (this.currentTab === e.target.dataset.current) {
					return false;
				} else {
					let tabBar = await this.getWidth("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.currentTab = e.target.dataset.current
				}
			}

		}
	}
</script>

<style>
	page {
		display: flex;
	}

	.index {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
		background-color: #F2F2F2;
	}

	.index-bd {
		width: 750px;
		height: 100%;
	}

	.swiper-item {
		height: 100%;
		display: block;
		text-align: center;
	}

	.swiper-tab {
		width: 100%;
		white-space: nowrap;
		line-height: 62px;
		height: 70px;
		background-color: #FFFFFF;
	}


	.swiper-tab-list {
		font-size: 30px;
		width: 150px;
		display: inline-block;
		text-align: center;
		color: #777777;
	}

	.search {
		height: 60px;
		line-height: 60px;
		background-color: #fff;
		text-align: center;
		border: 1px solid #f0f0f0;
		font-size: 28px;
		color: #777777;
	}

	.on {
		color: #FF0000;
		border-bottom: 5px solid #FF0000;
	}

	.swiper-box {
		flex: 1;
		width: 100%;
		height: 100%;
	}

	.swiper-box view {
		text-align: center;
	}

	.tab-list {
		width: 100%;
		height: 90px;
		line-height: 90px;
		text-align: left;
		border-bottom: 2px solid #EFEFF4;
	}

	.product-list {
		padding-top: 20px;
	}
</style>
