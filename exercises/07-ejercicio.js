// 7. Array de Números y Promedio
// Crea un array de 5 notas (números). Recorre el arreglo y
// calcula el promedio manualmente sin usar reduce.

const notas = [8, 7.5, 9, 6, 8.5];

let suma = 0;
for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
}

let promedio = suma / notas.length;
console.log(`El promedio es: ${promedio}`);
