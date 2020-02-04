var socket = io();
//saber cuando se conecta al servidor .on=escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//enviar info
socket.emit('enviarMensaje', {
    usuario: 'Vito',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server', resp);
});

//escuchar info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});