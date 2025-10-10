// 25. .forEach() — Recorrer e imprimir con formato
// Dado el arreglo:
// const colores = ["rojo", "azul", "verde"];
// Usa .forEach() para imprimir en consola:
// Color: rojo
// Color: azul
// Color: verde

let colores = ["rojo", "azul", "verde"];
colores.forEach(color => {
  console.log(`Color: ${color}`);
});