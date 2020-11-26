<template>
	<div class="side-box">
		    <el-menu
		      default-active="2"
		      class="el-menu-vertical-demo"
		      background-color="#545c64"
		      text-color="#fff"
		      active-text-color="#ffd04b">
		      <el-submenu index="1">
		        <template slot="title">
		          <i class="el-icon-location"></i>
		          <span>导航一</span>
		        </template>
				  <el-menu-item index="1-1">选项1</el-menu-item>
				  <el-menu-item index="1-2">选项2</el-menu-item>
				  <el-menu-item index="1-3">选项3</el-menu-item>
		      </el-submenu>
		    </el-menu>
	</div>
</template>

<script>
	 export default {
	    methods: {
	     
	    }
	  }
</script>

<style>
</style>
