<template>
	<view class="main">
		<shopping ></shopping>
	</view>
</template>
<script>
	import shopping from '../../components/shopping.vue';

	export default{
		components: {
			shopping
		},
		data(){
			return{
				list:[],
				totalNum:0,
				totalMoney:0,
			}
		}
	}
</script>

<style>
	page {
		display: flex;
	}

	.main {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
		background-color: #F2F2F2;
	}
</style>
