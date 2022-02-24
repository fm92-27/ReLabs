<template lang="pug">
	el-container
		el-header
			el-menu
				el-menu-item
					NuxtLink.el-link.el-link--default(to="/") Главная страница
				el-menu-item
					NuxtLink.el-link.el-link--default(to="/login") Авторизация
				el-menu-item
					NuxtLink.el-link.el-link--default(to="/store") Магазин
</template>

<script>
export default {
}
</script>

<style scoped>
.el-container {
	background-color: white;
}
.el-menu {
	display: flex;
	border: none;
}
.el-menu-item {
	padding: 0 !important;
}
.nuxt-link-exact-active {
	color: black !important;
	cursor: default;
	background-color: white;
	position: relative;
}
.nuxt-link-exact-active::after {
	content: "";
	width: 100%;
	height: 2px;
	background-color: #409eff;
	bottom: 0;
	position: absolute;
}
.el-link {
	padding: 0 20px;
	position: relative;
}
.el-link:hover::after {
	content: "";
	width: 100%;
	height: 2px;
	background-color: #409eff;
	bottom: 0;
	position: absolute;
}
</style>