// Promesas:

const getData = (error) => new Promise((resolve, reject) => { //Funcion que retorna una promesa. Podemos pasarle parametro
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'juan',
                apellido: 'mange'
            })
        }, 3000);
    } else {
        reject('No hay datos por ahora')
    }
})

const getData2 = (error) => new Promise((resolve, reject) => { //Funcion que retorna una promesa. Podemos pasarle parametro
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'paco',
                apellido: 'saga'
            })
        }, 5000);
    } else {
        reject('No hay datos por ahora')
    }
})


console.log('Inicio');
getData(false)                  // al retornar una promesa, nos habilita los metodos de esa promesa
    .then((data) => {           //Podemos encadenar promesas en el then. Si se resuelve bien va por den
        console.log(data);
        return getData2(false)
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {            // si no se resuelve trabaja con catch
        console.log(error);
    }) 
console.log('Fin');





const suma = new Promise((res, rej) => {                 //nueva promesa. No podemos darle un parametro

    if (true) {
        res()
    }
    
})

//Equivalente de promesa con function
//function getData() {
//return new Promise((resolve, reject) => {

//})


// Async - Await: Para que funcione Await debe de existir Async



const getData3 = (error) => new Promise((resolve, reject) => { //Funcion que retorna una promesa. Podemos pasarle parametro
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'juan',
                apellido: 'mange'
            })
        }, 3000);
    } else {
        reject('No hay datos por ahora')
    }
})

const getData4 = (error) => new Promise((resolve, reject) => { //Funcion que retorna una promesa. Podemos pasarle parametro
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'paco',
                apellido: 'saga'
            })
        }, 2000);
    } else {
        reject('No hay datos por ahora')
    }
})

const main = async () => {
    try {
        let resultado = await getData3(false);
        let resultado2 = await getData4(false);
        console.log(resultado);
        console.log(resultado2);
    } catch (error){
        console.log(error);
    }
   
}

main();