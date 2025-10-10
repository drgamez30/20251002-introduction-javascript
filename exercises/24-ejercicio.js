// 24. .reduce() — Sumar elementos
// Dado el arreglo:
// const valores = [10, 20, 30, 40];
// Usa .reduce() para calcular la suma total de todos los
// valores.

let valores = [10, 20, 30, 40];
let sumaTotal = valores.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(sumaTotal); 