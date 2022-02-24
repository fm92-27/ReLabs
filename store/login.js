import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const state = () => ({
	authenticated: false,
	name: '',
	pass: '',
})

export const mutations = {
	go(state) {
		if(state.authenticated) {
			this.$router.push("/");
		}
	},
	add(state, name, pass) {
		state.authenticated = true;
		state.name = name;
		state.pass = pass;
	}
}
