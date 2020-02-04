const express = require('express');
const socketIO = require('socket.io');
const http = require('http'); //permite levantar servidor en node y socket.io trabaja desde aca mas que desde express

const path = require('path');

const app = express();
let server = http.createServer(app); //crea el servidor de node con las configuraciones que hagamos en express

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

module.exports.io = socketIO(server); //inicializar socket.io, comunicacion del backend
require('./sockets/socket');



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});