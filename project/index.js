const express = require('express');
//const debug = require('debug')('app:main');

const { Config } = require('./src/config/index');
const { Productsapi } = require('./src/products/index');
const app = express();

app.use(express.json);

Productsapi(app);


app.listen(Config.port, () => {
    //debug(`servidor escuchando en el puerto ${Config.port}`);
    console.log(`Servidor escuchando en el puerto ${Config.port}`)
});


