/**
 * funciones
 */

// declarativas

function saludar(){
console.log('Hola soy juan!');
}

saludar();

function despedir(nombre){
    console.log(`adios ${nombre}`);

}

despedir('paco');

function hola(apellido){
    return `Hola soy ${apellido}`
}

var saludo = hola('mange');

console.log(saludo);
console.log(hola('juan paco'));

// FUnciones de expresion o funcones anonimas (similares a lambda en python)

var suma = function(a,b){
    return a+b;

}

console.log(suma(2,4));

// Arrow functions: Son alternativas para compactaer a una expresionm de funcion. Son mas limitadas

var restar = (a,b) => {
    if (typeof a === 'numbrer' && typeof b === 'number'){
        return a-b;
    } else {
        return 'Ingresar solo numeros';
    }
    
}

console.log(restar(2,8));

var multiplicar = (a,b) => a*b; // el arrow hace que evite usar el return y los {}

console.log(multiplicar(2,4));


// Si mi funcion requiere un cuerpo mas amplio es conveniente utilizar una funcion normal, pero si no es tan largo puedo usar las arrow function