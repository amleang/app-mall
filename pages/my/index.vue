<template>
	<view class="main">
		<view class="head">
			<view class="head-img">
				<image :src="userinfo.avatarUrl" mode=""></image>
				<view class="username">
					{{userinfo.nickName}}
				</view>
			</view>
			<view class="head-btn">
				<view class="btn" @click="update_user_handle">
					更新资料
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				userinfo: {
					nickName: '赵安良😘',
					avatarUrl: 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqBVsJytCEvOneQVaibPHiaX1dcYy4Fe0bAKqWIOPfOTzYCGN8ibNAia2ic8CY1rPibPhhQFQ2D0UDxPHrQ/132'
				}
			}
		},
		onShow: function () {
			debugger
			let userinfo = uni.getStorageSync("dacl_mall_user")
			console.log(userinfo)
			if (userinfo) {
				this.userinfo = JSON.parse(userinfo);
			}
		},
		methods: {
			update_user_handle() {

				uni.login({
					provider: 'weixin',
					success: lres => {
						console.log("login=>", lres);
						uni.getUserInfo({
							withCredentials: true,
							provider: 'weixin',
							success: ires => {
								uni.showToast({
									title: '更新成功!',
									duration: 2000
								})
								uni.setStorageSync("dacl_mall_user", JSON.stringify(ires.userInfo))
								console.log("info=>", ires)
							}
						})
					}
				})
			}

		},
	}
</script>
<style>
	.head {
		height: 350px;
		background-color: #ff4500;
	}

	.head-img {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 280px;
		flex-direction: column;
	}

	.head-img image {
		height: 150px;
		width: 150px;
		border-radius: 100%;
	}

	.head-img .username {
		height: 40px;
		line-height: 40px;
		color: #FFFFFF;
	}

	.head-btn {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.head-btn .btn {
		width: 150rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		font-size: 20rpx;
		color: #fff;
		border-radius: 10rpx;
		border: 1px solid #fff;
		background: transparent;
	}
</style>
