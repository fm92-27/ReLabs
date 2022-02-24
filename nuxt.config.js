export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	target: 'static',
	head: {
		title: 'ReLabs',
		htmlAttrs: {
		lang: 'en'
	},
	meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ hid: 'description', name: 'description', content: '' },
		{ name: 'format-detection', content: 'telephone=no' }
	],
	link: [
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
	]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'normalize.css',
		'@/assets/css/main.css'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{
			src: '~/plugins/native-websocket.js',
			ssr: false
		},
		'~/plugins/element-ui.js'
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	loading: '~/components/LoadingBar.vue',

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		//'vue-native-websocket'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	},
}
