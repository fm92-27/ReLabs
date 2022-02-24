<template lang="pug">
	div
		div(v-if="load") Загрузка....
		el-row(v-else)
			el-col
				el-card
					.clearfix(slot="header")
						span Дата
					.item(v-for="ctime in ctimes") {{ DateString(ctime) }}
			el-col
				el-card
					.clearfix(slot="header")
						span События
					.item(v-for="event in events") {{ event }}
</template>

<script>
export default {
	data() {
		return {
			ctimes: [],
			events: [],
			load: true
		}
	},
	created() {
		if(this.$socket) {
			this.load = false;
			this.$socket.onopen = () => {};
			this.$socket.onclose = () => {delete this.$socket.onmessage};
			this.$socket.onmessage = (e) => {
				if(this.ctimes.length < 15 || this.events.length < 15) {
					const sockets = JSON.parse(e.data);
					this.ctimes.push(sockets.ctime);
					this.events.push(sockets.event);
				} else {
					this.$socket.onclose();
				};
			};
		} else {
			this.load = true;
		};
	},
	methods: {
		DateString(e) {
			const date = new Date((e*1000));
			return date.toLocaleDateString() + ' ' + date.toLocaleTimeString().slice(0, 5);
		}
	}
}

</script>

<style scoped>
.el-row {
	display: flex;
}
.el-card {
	height: 100%;
	border: none;
	display: flex;
	flex-direction: column;
}
.el-card >>> .el-card__body {
	padding: 20px 0;
}
.is-always-shadow {
	box-shadow: none !important;
}
.item {
	height: 40px;
	flex: auto;
	margin: 10px 0;
	padding: 0 20px;
	display: flex;
	align-items: flex-start;
	border-bottom: 1px solid #EBEEF5;
}
.clearfix {
	font-weight: bold;
	color: gray;
}
</style>