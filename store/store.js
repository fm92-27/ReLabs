import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const state = () => {
	socket: {
		isConnected: false;
		message: '';
		reconnectError: false
	}
}

export const mutations = {
	SOCKET_ONOPEN (state, event)  {
		Vue.prototype.$socket = event.currentTarget
		state.socket.isConnected = true
	},
	SOCKET_ONCLOSE (state, event)  {
		state.socket.isConnected = false
		Vue.prototype.$socket = null
	},
	SOCKET_ONERROR (state, event)  {
		console.error(state, event)
	},
	SOCKET_ONMESSAGE (state, message)  {
		state.socket.message = message
	},
	SOCKET_RECONNECT(state, count) {
		console.info(state, count)
	},
	SOCKET_RECONNECT_ERROR(state) {
		state.socket.reconnectError = true;
	},
}

export const actions = {
	sendMessageWS: (data) => {
		if (!Vue.prototype.$socket) {
		return
	}
		Vue.prototype.$socket.send(JSON.stringify(data))
	}
}
