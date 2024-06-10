const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
//console.log(process.env);

//Crear servidor de express
const app = express();

//Base de datos
dbConnection();

//Directorio Publico
app.use( express.static('public') );

//Lectura y parseo del body
app.use( express.json() );

//Rutas
//TODO: auth //crear, login, renew
app.use('/api/auth', require('./routes/auth'));
//TODO: CRUD: Eventos

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});