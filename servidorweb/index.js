const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
    res.json({
        mensaje: 'hola mundo desde express'
    })
})

app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
})