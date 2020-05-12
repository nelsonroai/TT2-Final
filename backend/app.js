const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//cabeceras
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Authorization, X-API-KEY, Origin, X-requested-with, Content-type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Method', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Rutas

require('./server/routes/usuarios')(app);
require('./server/routes/prueba')(app);
require('./server/routes/proyecto')(app);


app.get('*', (req, res) => {
    res.status(200).send({ message: "Bienvenido al servidor NodeJS" });
});
module.exports = app;