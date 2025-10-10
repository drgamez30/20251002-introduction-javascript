// 23. .find() — Buscar un número específico
// Dado el arreglo:
// const numeros = [3, 5, 7, 9, 11];
// Usa .find() para encontrar el número 7.
// Si lo encuentra, imprime "Encontrado", si no "No encontrado".

const numeros = [3, 5, 7, 9, 11];
let encontrado = false;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 7) {
    encontrado = true;
    break; // Salimos del ciclo al encontrar el número
  }
}
if (encontrado) {
  console.log("Encontrado");
} else {
  console.log("No encontrado");
}
