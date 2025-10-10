// 18. Comparación de Arrays
// Declara let a = [1,2,3] y let b = [1,2,3].
// ¿a === b es true o false? ¿Por qué? Imprímelo y explícalo en
// un comentario.

let a = [1, 2, 3];
let b = [1, 2, 3];

console.log(a === b); // false

// La comparación a === b es false porque en JavaScript, los arrays son
// objetos y se comparan por referencia, no por valor. Aunque ambos arrays
// contienen los mismos elementos, son dos instancias diferentes en memoria,
// por lo que no son estrictamente iguales.