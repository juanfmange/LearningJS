// Callbacks: Funciones que se pasan como parametros a otras funciones

const suma = (a, b, cb) => {
    cb(a + b)
}

const imprimir = (data) => {
    console.log(data);
}

suma(5, 3, imprimir)

///////////////////////////////

const getData = (cb,cbError) => {
    if (false) {
        setTimeout(() => {
            cb({
                nombre: 'juanito',
                edad: 25,
                sexo: 'H'
            })
        }, 3000);
    } else {
        cbError(new Error('No se pudo obtener los datos'));
    }

}

const imprimirData = (data) => console.log(data);

const errorHandler = (error) => console.log(error);

getData(imprimirData,errorHandler);
