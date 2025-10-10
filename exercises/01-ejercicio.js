// Declara una variable nombre y otra hobby. Imprime un mensaje
// como:
// "Hola, soy Juan y me gusta el fútbol", pero usando
// concatenación con + y luego usando template strings.


const prompt = require('prompt-sync')();

let nombre = prompt("Ingresa tu nombre: ");
let hobby = prompt("Ingresa tu hobby: ");
console.log(`Hola, soy ${nombre} y me gusta ${hobby}.`);