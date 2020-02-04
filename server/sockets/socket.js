const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    //escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data); //mandar a todos
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien!'
        //     });

        // } else {
        //     callback({
        //         resp: 'Todo salio mal'
        //     });
        // }
    });
})