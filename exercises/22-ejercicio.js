// 22. .filter() — Filtrar palabras largas
// Usa .filter() para obtener solo las palabras con más de 4
// letras.
// const palabras = ["sol", "montaña", "mar", "cielo"];

let palabras = ["sol", "montaña", "mar", "cielo"];
let palabrasLargas = palabras.filter(palabra => palabra.length > 4);
console.log(palabrasLargas);
