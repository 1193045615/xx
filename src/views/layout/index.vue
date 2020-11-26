<template>
	<div class="all">
			<sidebar></sidebar>
		<div class="content-box">
			<navbar></navbar>
			<mainbar></mainbar>
		</div>
	</div>
</template>

<script>
	import sidebar from '@/views/layout/component/sideBar.vue'
	import navbar from '@/views/layout/component/navBar.vue'
	import mainbar from '@/views/layout/component/mainBar.vue'
	export default {
		components:{sidebar,navbar,mainbar}
	}
</script>
<!-- 表示使用sass编程 -->
<style lang="scss">
	.all{
		display:flex;	
		height:100vh;
		box-sizing: border-box;
		border:1px solid red;
		.side-box{
			width:180px;
			background-color: #294256;
			min-height: 100%;
			overflow: hidden;
			.el-menu{
				border-right:0;
			}
		}
		.content-box{
			flex:1;
			.nav-box{
				height:50px;
				border:1px solid #ccc;
			}
			.main-box{
			}
		}
	}
</style>
