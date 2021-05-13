//Import Body parser
//Gracias al bodyParser podemos entender los datos que vienen en la petición POST recibida

//En una petición GET, recibimos las variables en la URL, pero en una petición POST, vienen en el cuerpo,
//para poder coger las variables del cuerpo de una petición POST, usamos el bodyParser
let bodyParser = require('body-parser');

//Import Mongoose
//Librería para conectar la BBDD
let mongoose = require('mongoose');

// Importar express
//Express es el servidor web
let express = require('express');

// Inicializar la app (crear una instancia)
let app = express();

//Import routes
//importamos el router de api-routes.js
let apiRoutes = require("./api-routes");

//Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded(
    {
        extended:true
    }
))
app.use(bodyParser.json());

//Connect to mongoDB and ser connection variable (mongoose es la librería para poder hacer la conexión)
mongoose.connect('mongodb://almi:Almi123@localhost/trivialmi?authSource=admin', {useNewUrlParser:true, useFindAndModify: false, useUnifiedTopology: true});
var db = mongoose.connection;
if(!db)
{
    console.log("Error connecting db");
}
else
{
    console.log("DB connected succesfully");
}

// Puerto del servidor
var port = process.env.PORT || 8080;

// Enviar el mensaje a la URL por defecto
app.get('/', (req, res) => res.send('URL por defecto'));

// Dejamos abierta la aplicación para que escuche del puerto especificado anteriormente
app.listen(port, function()
{
    console.log("Running on port " + port);
});

//Use API routes in APP
app.use('/trivialmi', apiRoutes);