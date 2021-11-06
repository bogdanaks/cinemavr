import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')

function main() {
  console.log('Socket main run')
  socket.on("connect", () => {
    console.log('ws connect')

    console.log(socket.id) // x8WIv7-mJelg7on_ALbx

    socket.emit('events', { test: 'test' })

    socket.emit('identity', 0, response =>
      console.log('Identity:', response),
    )
  })

  socket.on('events', function(data) {
    console.log('event', data);
  })
  socket.on('exception', function(data) {
    console.log('event', data);
  })
  socket.on('disconnect', function() {
    console.log('Disconnected')
  })
}

export default main
