//npm init
//npm install express --save

var express = require('express');
var path = require('path');
var app = express();

//-----------------------Conexion mongodb--------------------------------
/*
//BDD Mongo
var mongoose = require('mongoose');
var bodyParser = require('body-parser');*/

app.listen(3000, function () { //escucha en el puerto 3000
  console.log('App escuchando en puerto 3000!');
});

/*
//Conexion Mongo
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/vuelos', function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});
*/
///------------------------------------------------------------------------





//Muestra el HTML que aparece en el inicio
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'Rutas','vuelos.html'));
});





//funcion de descargar logos American
app.get('/American', function (req, res) {
    res.download(path.join(__dirname,'rutas','imagenes','American_Airlines.jpg'),'American_Airlines.jpg',
        function(err){
            if (err)
                console.log('Ocurrio un error en la descarga.');
            else
                console.log('Descarga exitosa.');
        });


});


//funcion de descargar logos france
app.get('/france', function (req, res) {
    res.download(path.join(__dirname,'rutas','imagenes','Air_France.jpg'),'Air_France.jpg',
        function(err){
            if (err)
                console.log('Ocurrio un error en la descarga.');
            else
                console.log('Descarga exitosa.');
        });


});


//funcion de descargar logos Copa
app.get('/Copa', function (req, res) {
    res.download(path.join(__dirname,'rutas','imagenes','Copa_Airlines.jpg'),'Copa_Airlines.jpg',
        function(err){
            if (err)
                console.log('Ocurrio un error en la descarga.');
            else
                console.log('Descarga exitosa.');
        });


});

//funcion de descargar logos Delta
app.get('/Delta', function (req, res) {
    res.download(path.join(__dirname,'rutas','imagenes','Delta_Airlines.jpg'),'Delta_Airlines.jpg',
        function(err){
            if (err)
                console.log('Ocurrio un error en la descarga.');
            else
                console.log('Descarga exitosa.');
        });


});