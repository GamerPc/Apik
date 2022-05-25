'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.Promise = global.Promise;

//Conecion DB

mongoose.connect('mongodb://localhost:27017/Apik', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("La conexion a la base de datos es correcta");

        //Crear servidor
        app.listen(port, () => {
            console.log("Serviddor corriendo en http://localhost:3800");
        })
    })
    .catch(err => console.log(err));