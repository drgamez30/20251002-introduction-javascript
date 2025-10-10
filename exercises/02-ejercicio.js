// 2. Operaciones Matemáticas con Redondeo
// Declara dos números decimales y muestra:
// ● Su suma
// ● Su multiplicación
// ● El resultado redondeado con Math.round()

const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Ingresa el primer número decimal: "));
let numero2 = parseFloat(prompt("Ingresa el segundo número decimal: "));

let suma = numero1 + numero2;
let multiplicacion = numero1 * numero2;

console.log(`La suma es: ${suma}`);
console.log(`La multiplicación es: ${multiplicacion}`);
console.log(`La suma redondeada es: ${Math.round(suma)}`);
console.log(`La multiplicación redondeada es: ${Math.round(multiplicacion)}`);