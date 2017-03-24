import Vue from 'vue'
import Component from 'vue-class-component'

const io = require('./src/js/socket.io.min.js')
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

var test = new SocketTest()
test.showForegroundApp()
