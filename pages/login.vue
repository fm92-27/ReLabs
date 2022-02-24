<template lang="pug">
	.background-auth
		Header(v-if="$store.state.login.authenticated")
		el-container.container-form
			el-main
				h3(v-if="$store.state.login.authenticated") Вы уже авторизированны
				h3(v-else) Авторизация
				el-form
					el-form-item
						el-col(:span="12") Электронная почта
						el-input(
							v-model="mail"
							type="email"
							v-bind:disabled="isDisabled"
							v-bind:class="[isMail ? '' : inputError]")
						el-col
							.error {{ helpMail }}
					el-form-item
						el-col(:span="12") Пароль
						el-input(
							v-model="pass"
							type="password"
							v-bind:disabled="isDisabled"
							v-bind:class="[isPass ? '' : inputError]"
							show-password)
						el-col
							.error {{ helpPass }}
					el-form-item
						el-button(@click="Submit" type="primary" v-bind:disabled="isDisabled") Авторизация
</template>

<script>
export default {
	data() {
		return {
			mail: '',
			pass: '',
			isMail: true,
			isPass: true,
			inputError: 'input-error',
			helpMail: '',
			helpPass: '',
		}
	},
	methods: {
		Submit() {
			var reMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			var rePass = /(?=.*[A-Z])[a-zA-Z]{8,}/;
			this.helpMail = '';
			this.helpPass = '';
			if(reMail.test(this.mail) && rePass.test(this.pass)) {
				this.$nuxt.$loading.start();
				setTimeout(() => {
					this.$nuxt.$loading.finish();
					this.$store.commit('login/add', this.mail.slice(0, this.mail.indexOf('@')), this.pass);
					this.$store.commit('login/go');
				}, 2000);
			} else {
				if(!reMail.test(this.mail)) {
					this.isMail = false;
					this.helpMail = "Некорректный адрес электронной почты";
				} else {
					this.isMail = true;
				};
				if(!rePass.test(this.pass)) {
					this.isPass = false;
					if(this.pass.length < 8) {
						this.helpPass = "Пароль должен содержать не менее 8 символов";
					} else {
						this.helpPass = "Пароль должен содержать хотя бы одну заглавную букву";
					}
				} else {
					this.isPass = true;
				}
			}
		}
	},
	computed: {
		get() {
			return [
				this.$store.state.login.authenticated,
				this.$store.state.login.name,
				this.$store.state.login.pass,
			];
		},
		isDisabled() {
			if(this.$store.state.login.authenticated) {
				return 'disabled'
			}
		}
	}
}
</script>

<style scoped>
.el-container {
	padding: 0 20px;
}
.background-auth {
	height: 100%;
	background-color: #2d3a4b;
	display: flex;
	flex-direction: column;
}
.container-form {
	height: 100%;
	align-items: center;
	text-align: center;
}
h3 {color: white;}
.el-main, .el-form {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.el-form {
	max-width: 400px;
}
.el-form-item {
	width: 100%;
	position: relative;
}
.el-input {
	min-width: 300px;
}
.el-input >>> input {border: 2px solid white !important;}
.el-col-12 {
	text-align: left;
	position: relative;
	padding-left: 20px;
	color: white;
}
.el-col-12::before {
	content: "*";
	width: 20px;
	position: absolute;
	left: 0;
	text-align: center;
	color: #f56c6c;
}
.el-col-24 {
	text-align: left;
	color: #f56c6c;
	position: absolute;
	height: 22px;
}
.error {
	font-size: 11px;
	height: 100%;
	display: flex;
	align-items: center;
}
.input-error >>> input {
	border: 2px solid #f56c6c !important;
}
</style>