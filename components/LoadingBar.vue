<template lang="pug">
	div.loading-page(v-if="loading")
		div.loading
</template>

<script>
export default {
	data: () => ({
		loading: false,
	}),
	methods: {
		start() {
			this.loading = true
		},
		finish() {
			this.loading = false
		},
	},
}
</script>

<style scoped>
.loading-page {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 1000;
	padding: 1rem;
	text-align: center;
	font-size: 3rem;
	font-family: sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: gray;
}
.loading {
	display: inline-block;
	width: 1.5rem;
	height: 1.5rem;
	border: 4px solid #ecf5ff;
	border-radius: 50%;
	border-top-color: #b3d8ff;
	animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
	to {
		-webkit-transform: rotate(360deg);
	}
}
</style>