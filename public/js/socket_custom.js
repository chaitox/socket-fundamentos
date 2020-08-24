var socket = io();

socket.on('connect', function() {
    console.log('Conectado');
});

socket.on('disconnect', function() {
    console.log("Perdimos conexion con el servidor");
});

//son para emitir mensajes
socket.emit('enviarMensaje', {
    usuario: 'ricardo',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log(resp);
});

//escuchar informacion
socket.on('enviarMensaje', function(data, callback) {
    console.log(data);

});