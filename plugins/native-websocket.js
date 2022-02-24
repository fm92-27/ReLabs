import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'

export default ({ store }) => {
	Vue.use(VueNativeSock, 'wss://test.relabs.ru/event', {store: store});
}