// Callbacks: Funciones que se pasan como parametros a otras funciones

const suma = (a, b, cb) => {
    cb(a + b)
}

const imprimir = (data) => {
    console.log(data);
}

suma(5, 3, imprimir)

///////////////////////////////

const getData = (cb) => {
    setTimeout(() => {
        cb({
            nombre: 'juanito',
            edad: 25,
            sexo: 'H'
        })
    }, 3000);

}

const imprimirData = (data) => console.log(data);

getData(imprimirData);
