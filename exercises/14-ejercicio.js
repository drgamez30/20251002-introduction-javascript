// 14. .filter() + Condición Compleja
// Filtra los nombres con más de 4 letras y que contengan la
// letra "a" del arreglo ["ana","luis","pedro","sol","andres"].

const nombres = ["ana", "luis", "pedro", "sol", "andres"];
const resultado = nombres.filter(nombre => nombre.length > 4 && nombre.includes("a"));
console.log(resultado); 