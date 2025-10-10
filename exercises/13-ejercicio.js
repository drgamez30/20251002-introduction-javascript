// 13. .map() + Multiplicación Condicional
// Dado [1,2,3,4,5,6], usa .map() para duplicar solo los números
// pares, dejando los impares igual.

const numeros = [1, 2, 3, 4, 5, 6];

const resultado = numeros.map(num => {
  if (num % 2 === 0) {
    return num * 2;
  } else {
    return num;
  }
});
console.log(resultado);
