// 20. Conversión de Tipos
// Convierte estos valores y muestra sus tipos finales:
// "123" → número
// 123 → string
// 0 → booleano
// "" → booleano

let val1 = Number("123");
console.log(val1, typeof val1); 

let val2 = String(123);
console.log(val2, typeof val2); 

let val3 = Boolean(0);
console.log(val3, typeof val3);

let val4 = Boolean("");
console.log(val4, typeof val4); 
