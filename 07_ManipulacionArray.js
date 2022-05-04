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
    { nombre: 'camisas', precio: 15, totalVentas: 10 },
    { nombre: 'zapatos', precio: 30, totalVentas: 12 },
    { nombre: 'gel', precio: 5, totalVentas: 40 }
]

var resultado = ventas.reduce((acomulador, producto) => {
    let totalVendido = producto.precio * producto.totalVentas;
    acomulador[producto.nombre] = totalVendido;
    return acomulador;
},{}) 

console.log(ventas);
console.log(resultado);

var estudiantes = [
  { nombre: "juan", edad: 20, matriculado: true },
  { nombre: "alan", edad: 19, matriculado: true },
  { nombre: "paco", edad: 23, matriculado: false },
  { nombre: "luis", edad: 25, matriculado: true },
  { nombre: "pedro", edad: 29, matriculado: false },
];

var resultado = estudiantes.map((estudiante) => estudiante.matriculado).reduce((acomulador, item) =>
{
    if (item) {
        acomulador.matriculado += 1;
    } else {
        acomulador.noMatriculado += 1;
    }
    return acomulador;
}, { matriculado: 0, noMatriculado: 0 })

console.log(estudiantes);
console.log(resultado);


// some -- retorna un valor booleano, si ALGUNO de los elementos coincide retornara true por ejemplo

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultado = numeros.some((numero) => numero % 2 == 0);
console.log(resultado);


// Every -- retorna un valor logico si  TODOS los elementos del array cumplen con alguna condicion
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultado = numeros.every((numero) => numero % 2 === 0);
console.log(resultado);

// Find -- Es inmutable, va retornar el primer elemento que coinicida con la busqueda, unicamente el primer elemento, solo puede retornar un valor
var clientes = [
  { id: 1, nombre: "a" },
  { id: 2, nombre: "b" },
  { id: 3, nombre: "c" },
  { id: 4, nombre: "d" },
  { id: 5, nombre: "f" }
];
var cliente = clientes.find((cliente) => cliente.id === 1);
console.log(cliente);
console.log(clientes);

// Find index: Me devuelve la POSICOMN del array
var clientes = [
  { id: 1, nombre: "a" },
  { id: 2, nombre: "b" },
  { id: 3, nombre: "c" },
  { id: 4, nombre: "d" },
  { id: 5, nombre: "f" },
];

var posicion = clientes.findIndex((cliente) => cliente.id === 2);
console.log(posicion);

// Includes

var mascotas = ['perro', 'gatito', 'conejo'];
var resultado = mascotas.includes('gatito')
console.log(resultado);
console.log('juan'.includes('a'));

var buscador = (parametro) => {
    let clientes = [
      { id: 1, nombre: "a" },
      { id: 2, nombre: "b" },
      { id: 3, nombre: "c" },
      { id: 4, nombre: "d" },
      { id: 5, nombre: "f" },
    ];

    return clientes.filter((cliente) => cliente.nombre.includes(parametro))
}

console.log(buscador('a'));

// join - Unir todos los metodos de un arreglo y generar un string

var elementos = ['aire', 'agua', 'fuego', 'tierra'];
var resultado = elementos.join('.');
console.log(resultado);


var clientes = [
  { id: 1, nombre: "a" },
  { id: 2, nombre: "b" },
  { id: 3, nombre: "c" },
  { id: 4, nombre: "d" },
  { id: 5, nombre: "f" },
];

//console.log(clientes.join());

var csvGenerator = (array, separador = ',') => {
    let headers = Object.keys(array[0]).join(separador); // shift devuelve el primer elemento pero lo modifica
    let data = array.map((element) => Object.values(element).join(separador))  //Object.values --- Obtiene los valores de un objeto
    console.log(headers);
    data.forEach(element => console.log(element))
}

csvGenerator(clientes);







console.log(Object.values({ id: 2, nombre: 'juan' }));
console.log(Object.keys({id: 2, nombre: 'juan'})); //keys -- retorna las claves de objeto