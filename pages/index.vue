<template lang=pug>
	div
		Header
		el-container
			p(v-if="$fetchState.pending") Загрузка...
			el-main(v-else)
				el-row
					el-col(:span="2")
						el-card
							.clearfix(slot="header")
								span ID
							.item(v-for="(item, key) in paginated")
								span.item-content {{ item.id }}
					el-col(
						:xs="4"
						:lg="6"
						:xl="8"
						)
						el-card
							.clearfix(slot="header")
								span Имя
							.item(v-for="(item, key) in paginated")
								span.item-content {{ item.name }}
					el-col(
						:xs="4"
						:lg="6"
						:xl="8"
						)
						el-card
							.clearfix(slot="header")
								span Роль
							.item(v-for="(item, key) in paginated")
								span.item-content {{ item.role }}
					el-col(:span="6")
						el-card
							.clearfix(slot="header")
								span Дата создания
							.item(v-for="(item, key) in paginated")
								span.item-content {{ Time(item.ctime) }}
					el-col(
						:lg="4"
						:xl="5"
						)
						el-card
							.clearfix(slot="header")
								span Действия
							.item(v-for="(item, key) in paginated")
								el-button(type="danger" @click="Delete(key)") Удалить
				.pagination-wrap
					el-pagination(
						:total="maxPage*10"
						layout="prev, pager, next"
						background
						@current-change="handleCurrentChange")
			el-aside(width="30vw")
				WebSocket
</template>

<script>
export default {
	data() {
		return {
			items: [],
			limit: null,
			offset: null,
			total: null,
			minPage: 1,
			maxPage: null,
		}
	},
	async fetch() {
		this.items = await fetch(
			'https://test.relabs.ru/api/users/list'
		).then(res => res.json());
		this.limit = this.items.limit;
		this.offset = this.items.offset;
		this.total = this.items.total;
		let date = new Date();
		var maxId = [];
		for(let i in this.items.items) {
			maxId.push(this.items.items[i].id);
		};
		const arr = {
			ctime: Number(date.valueOf()/1000),
			id: Math.max(...maxId) + 1,
			name: this.$store.state.login.name,
			role: "dd"
		};
		this.items.items.push(arr);
		this.maxPage = Math.ceil(this.items.items.length/this.items.limit);
	},
	methods: {
		handleCurrentChange(val) {
			this.offset = val - 1;
		},
		Delete(key) {
			this.$delete(this.items.items, key);
		},
		Time(e) {
			let date = new Date((e*1000));
			return date.toLocaleDateString() + ' ' + date.toLocaleTimeString().slice(0, 5);
		},
	},
	computed: {
		paginated() {
			const start = this.offset * this.limit;
			const end = start + this.limit;
			return this.items.items.slice(start, end);
		},
	},
	middleware({ store, redirect }) {
		if (!store.state.login.authenticated) {
			return redirect('/login')
		}
	}
}
</script>

<style scoped>
.el-container {
	padding: 0 20px;
}
.el-main {
	display: flex;
	flex-direction: column;
	padding: 0;
}
.el-row {
	display: flex;
	width: 100%;
}
.el-card {
	height: 100%;
	border: none;
	display: flex;
	flex-direction: column;
}
.is-always-shadow {
	box-shadow: none;
}
.el-card >>> .el-card__body {
	display: table;
	height: 300px;
}
.clearfix {
	font-weight: bold;
	color: gray;
	white-space: nowrap;
	align-items: center;
}
.item {
	height: 40px;
	flex: auto;
	margin: 10px 0;
	display: flex;
	align-items: center;
	white-space: nowrap;
}
.pagination-wrap {
	display: flex;
	justify-content: center;
}
</style>