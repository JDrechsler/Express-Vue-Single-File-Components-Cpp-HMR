<template>
	<section>
		<h3>SocketTest-Component</h3>
		<h5>Current foreground app: {{foregroundApp}}</h5>
		<button class="btn btn-success btn-sm" @click="showForegroundApp">Load socket.io.min.js</button>
	</section>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Component from 'vue-class-component'

	const io = require('socket.io-client')
	const socket = io('localhost:8080')

	@Component({
		components: {

		}
	})

	export default class SocketTest extends Vue {

		foregroundApp: String = ''

		showForegroundApp() {
			console.log("client-wants-foregroundApp")
			socket.emit('client-wants-foregroundApp')
		}

		created() {
			console.log('Created')

			socket.emit('halloVonClient')

			socket.on('halloVonServer', function (message) {
				console.log(message)
			})

			var _this = this
			socket.on('server-sends-foregroundApp', function (message: String) {
				_this.foregroundApp = message
			})
		}
	}

</script>

<style>
	.test {
		background-color: aquamarine;
	}

</style>
