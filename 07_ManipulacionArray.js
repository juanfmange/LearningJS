/**
 * Manipulacion de arrays
 */

// ForEach: nos permite correr elemento de un arreglo
var letras = ['a','b','c','d','e'];
console.log(letras.length);
for (let i = 0;i< letras.length;i++){
   const element = letras[i];
   console.log(element);
}
letras.forEach((elemento)=>console.log(elemento));

// push -- shift-- pop
// push -- Agrega un valor nuevo al arreglo
letras.push('f');
console.log(letras);

// shift -- obtiene el primer elemento del arreglo
var primerelemento = letras.shift();
console.log(letras);
console.log(primerelemento);

// Pop -- obtiene el utliomo elemento del arreglo, no solo lo obtiene, tambien lo elimina
var ultimoelemento = letras.pop();
console.log(letras);
console.log(ultimoelemento);

// map -- Recorre cada elemento del array
var alumnos = ['juan','paco','pedro','oscar']
var asistencia = alumnos.map((nombre)=>{
    return {
        nombre : nombre,
        asistencia : false
    }
})
console.log(alumnos);
console.log(asistencia);

var asist = alumnos.map((nombre)=> `${nombre}.`)
console.log(alumnos);
console.log(asist);
console.log(alumnos);

var productos = [
    {
        nombre : 'camisetas',
        precio : 20
    },
    {
        nombre : 'zapatos',
        precio : 10
    },
    {
        nombre : 'pantalones',
        precio : 15
    }
]

 
var impuestos = productos.map((producto)=>{ // retornamos un nuevo objeto y ya no el objeto original
    return {
        ...producto, //ESC6
        impuesto: .12
    }
})

var precios = productos.map((producto)=>producto.precio)

console.log(productos);
console.log(impuestos);
console.log(precios);


// Filter
var estudiantes = [
    {nombre: 'juan',edad:20,matriculado: true},
    {nombre: 'alan',edad:19,matriculado: true},
    {nombre: 'paco',edad:23,matriculado: false},
    {nombre: 'luis',edad:25,matriculado: true},
    {nombre: 'pedro',edad:29,matriculado: false},

];

// La funcion flecha lo que hace es inyectar a la funcion señalada el valor asignado
var filtrado = estudiantes.filter((estudiante)=>estudiante.edad >= 21);
var filtradomatri = estudiantes.filter((estudiante)=>estudiante.edad >= 21 && estudiante.matriculado === true);
console.log(estudiantes);
console.log(filtrado);
console.log(filtradomatri);


// Reduce

var calificaciones = [3,5,9,10,10];
var suma = calificaciones.reduce((acomulador,calificacion)=>acomulador + calificacion,0);
console.log(calificaciones);
console.log(suma);
console.log(suma / calificaciones.length);

var edades = [21,21,23,43,21,43,18,18,23,23];
var resultado = edades.reduce((acomuladore,edade)=>{
    if (!acomuladore[edade]){
        acomuladore[edade] = 1;
    } else{
        acomuladore[edade] += 1;
    }
    return acomuladore
},{})
console.log(edades);
console.log(resultado);

var ventas = [
    { nombre: 'camiseta', precio: 12, totalVendido: 10 },
    {nombre: 'pantalon', precio: 18, totalVendido: 20 },
    {nombre: 'tenis', precio: 20, totalVendido: 40}
]

var resultado = ventas.reduce((acomulador, item) => {
    let totalVentas = item.precio * item.totalVendido;
    acomulador[item.nombre] = totalVentas;
    return acomulador;

}, {})

console.log(ventas);
console.log(resultado);


var estudiantes = [
    { nombre: 'juan', edad: 20, matriculado: true },
    { nombre: 'alan', edad: 19, matriculado: true },
    { nombre: 'paco', edad: 23, matriculado: false },
    { nombre: 'luis', edad: 25, matriculado: true },
    { nombre: 'pedro', edad: 29, matriculado: false },

];

var resultado = estudiantes.map((es)=>)
