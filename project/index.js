const express = require('express');
//const debug = require('debug')('app:main');

const { Config } = require('./src/config/index');
const { Productsapi } = require('./src/products/index');
const { Usersapi } = require('./src/users/index');
const { IndexAPI,NotFoundAPI } = require("./src/index/index")
const app = express();

app.use(express.json);

IndexAPI(app);
Usersapi(app);
Productsapi(app);
NotFoundAPI(app);

app.listen(Config.port, () => {
    //debug(`servidor escuchando en el puerto ${Config.port}`);
    console.log(`Servidor escuchando en el puerto ${Config.port}`);
});


