/**
 * Ciclos
 */

// While: Regresa un valor logico
var contador = 1;
while (contador <= 5){
    console.log('Hola while!');
    contador += 1;
}

// Do While
do{
    console.log('Hola dowhile!');
    contador += 1;
} while (contador <= 10)

// For

for (let c = 1;c <= 5;c++){
    console.log('Hola For!!');
}

// For In, In nos retorina un valor booleano si la clave se encuentra en el objeto (itera sobre el objeto)

var p = {
    nombre:'juan',
    apellido:'mange',
    edad:25
}

for(let clave in p){
    console.log(clave,p[clave]);

}

// For of: iterar sobre objetos iterables para obtener datos internos
var array = [1,2,3,4,5];
var nombre = 'juanito';
for(let valor of array){
    console.log(valor);
}
for(let v of nombre){
    console.log(v);
}
// Los arreglos son objetos iterables, mientras que los objetos o lista no. No puedo usar for of en una lista por eso