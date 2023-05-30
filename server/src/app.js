const express = require('express');
const app = express();
const cors = require('cors');
const { Server } = require('socket.io');
const server = require('http').Server(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }
});

// Rutas

// Middlewares para cliente
app.use(cors());
app.use(express.json());

io.on('connection', socket => {
  console.log('Cliente conectado');

  socket.on('data', data => {
    io.emit('data', data);
  });

  console.log(socket);

  socket.on('disconnect', () => {
    console.log('cliente desconectado');
  });
});
// Uso de rutas

app.listen(3000, () => console.log('Servidor en ejecución en el puerto 3000'));

server.listen(4000, () => {
  console.log(`Servidor Socket.io escuchando en el puerto 4000`);
});
