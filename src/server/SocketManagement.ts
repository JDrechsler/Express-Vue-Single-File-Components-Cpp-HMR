var connectedIds = []

var manageConnections = function manageConnections(server){
	console.log('ManageConnections.ts loaded --> Server is ready to communicate')
	var io = require('socket.io')(server)

	io.on('connection', function (socket) {
		connectedIds.push(socket.id)
		console.log(`A client connected: ${socket.id}`)
		showConnectedClientIds()

		socket.on('halloVonClient', function () {
			socket.emit('halloVonServer', 'Server sagt hallo zu Client')
		})

		socket.on('client-wants-foregroundApp', function () {

			console.log('Client wants foregroundApp')
			var winprocess = require('./cpp/winprocess/build/Release/winprocess')

			setInterval(function () {
				socket.emit('server-sends-foregroundApp', winprocess.getActiveWindowName())
			}, 1000);
		})

		//A client disconnects from the server
		socket.on('disconnect', function () {
			for (var i = connectedIds.length - 1; i >= 0; i--) {
				if (connectedIds[i] === socket.id) {
					connectedIds.splice(i, 1)
				}
			}
			console.log(`Client left: ${socket.id}`);
			showConnectedClientIds()
		})
	})
}

function showConnectedClientIds() {
	console.log('');
	console.log('Connected client ids:')

	if (connectedIds.length < 1) {
		console.log('none');
	} else {
		for (var i = 0; i < connectedIds.length; i++) {
			console.log(connectedIds[i])
		}
	}

	console.log('');
}

exports.manageConnections = manageConnections

