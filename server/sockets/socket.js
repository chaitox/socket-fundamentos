const { io } = require('../server')


io.on('connection', (client) => {
    console.log('Cliente conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    })



    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        /* if (mensaje.usuario) {

             callback({
                 mensaje: 'Todo salio bien'
             });
         } else {
             callback({
                 mensaje: 'Todo salio mal!!!!'
             });
         }*/
    });
});