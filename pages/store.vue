<template lang="pug">
	div
		Header
		el-row
			el-col.img-wrap
				img(src="~/assets/img/phone.jpg")
				el-button(round) Быстрый просмотр
				div {{ sale }}
			el-col.content-wrap
				.content-price
					div
						span.discount1 {{ discount1 }}
						span.price {{ price }}
					div
						span.discount2 {{ discount2 }}
				.content-info
					div Apple / Смартфон iPhone 12 Pro 128GB / 6.1" / 2532x1170 / OLED / 128 ГБ
				.content-buy
					div
						el-rate(
							v-model="value"
							disabled
							show-score
							text-color="gray"
							score-template="87"
							)
					.installment РАССРОЧКА 0-0-6
					.buy
						el-button В корзину
						img(src="https://img.icons8.com/small/32/CB11AB/like--v1.png")
</template>

<script>
export default {
	data() {
		return {
			sale: '-14%',
			price: '99 990 ₽',
			discount1: '86 956 ₽',
			discount2: '85 251 ₽',
			value: 5,
		}
	}
}
</script>

<style scoped>
.el-container {
	padding: 0 20px;
}
.el-row {
	display: flex;
	flex-direction: column;
}
.el-col {
	max-width: 300px;
	padding: 20px;
}
.img-wrap {
	position: relative;
}
.img-wrap div {
	position: absolute;
	bottom: 20px;
	left: 20px;
	background-color: #ffeafb;
	color: #cb11ab;
	border-radius: 20px;
	padding: 5px;
	font-weight: bold;
}
.img-wrap .el-button {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: white;
	color: #606266;
}
.img-wrap .el-button:hover {
	background-color: #ffeafb;
	color: #cb11ab;
}
img {
	width: 100%;
	background-size: cover;
}
.content-wrap {
	display: flex;
	flex-direction: column;
}
.content-price {
	padding: 10px 0;
	font-weight: bold;
}
.content-price div {margin-bottom: 10px;}
.content-price div span {margin-right: 10px;}
.discount1 {font-size: 18px;}
.price, .discount2 {font-size: 14px;}
.price {
	color: gray;
	text-decoration: line-through;
}
.discount2 {color: #cb11ab;}
.content-info {color: gray;}
.content-buy {padding: 10px 0;}
.el-rate >>> .el-rate__icon {color: #cb11ab !important;}
.installment {
	background-image: linear-gradient(90deg, #d2ffeb, #ecff50);
	padding: 10px;
	border-radius: 20px;
	text-align: center;
	font-weight: bold;
	margin: 10px 0;
}
.content-buy .el-button {
	background-color: #cb11ab;
	border-color: #cb11ab;
	color: white;
	margin-right: 20px;
}
.content-buy .el-button:hover {background-color: #cf55ba;}
.buy {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.buy img {
	width: 30px;
	height: 30px;
}
</style>