/**
 * Control de fluujo
 */

// Estructura IF

const MAYOR_DE_EDAD = 18
const MENOR_DE_EDAD = 10
var edad = 17

var llueve = true;
if (llueve) {
    console.log('esta lloviendo');
} else{
    console.log('No esta lloviendo!');
}

var admin = 'admin'
if (admin === 'admin') {
    console.log('soy admin xd');
} else{
    console.log('no soy admin uwu');

}

if (edad >= MAYOR_DE_EDAD) {
    console.log('Es LEGAL');
} else {
    console.log('ALEJATE HERMANO, NO ES LEGAL');
}

var semaforo = 'amarilla'
if (semaforo === 'rojo') {
    console.log('detente brothr');
} else if (semaforo == 'amarilla') {
    console.log('preparate carnallll');

} else {
    console.log('arrrrrrancate compare');
}


// Switch
var producto = 'apera';
switch (producto) {
    case 'papaya':
        console.log('1$ cada papaya');// Codigo a ejecutastr al entrar al caso
        break;
    case 'tomate':
        console.log('el tomate saladed xd');// Codigo de este caso
        break
    case 'pera':
        console.log('es pera xd');
        break;
    default:
        console.log('este caso se cumple si nmiungumo de los anteriores cumple la expresion xd');

}