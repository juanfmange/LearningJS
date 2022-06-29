/**
 * Variables

3 formas de definir Variables

vat
let
const
 * 
 * 
 * 
 */


// Variabel con var

//var name = 'juan mfange'
//console.log(name);

var age = 25
console.log(age);

var person = {
  name: "juanito",
  age : 26,
  istall : false,
  direccion : {
    calle : "progreso",
    numero : 368,
    ciudad: "boca del rio",
    estado: "Veracruz",
    lugaresVisitados: [
      "poza rica",
      "cdmx",
      "guadalajara"
    ]
  }
}

console.log(person);


// Variables con let
// La diferencia entre let y var es que let funciona dentro de un bloque de codigo especifico, mientras que var funciona de manera global

let nombre= 'Franciasco';
console.log(nombre);

{
  let saludo = 'Hola soy paco';
  console.log(saludo);
}

//console.log(saludo); // Me da error porque no esta definida la variable ya que es un let

{
  var saludo = 'Hola soy paquito';
  console.log(saludo);
}

console.log(saludo);


// Variables con Const, son variables constantes que no cambian durante el tiempo. No puedo dejar sinasignar la variable const

const NUMERO_PI = 3.1416;
console.log(NUMERO_PI);


var nuevo_nombre = 'juanitoxd';
var nuevo_saludo = `hola soy ${nuevo_nombre}`;
console.log(nuevo_saludo);

