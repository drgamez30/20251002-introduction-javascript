// 12. Función Flecha que Cuente Vocales
// Crea una función flecha que reciba un string y retorna cuántas
// vocales tiene.

const contarVocales = (texto) => {
  const vocales = "aeiouAEIOU";
  let contador = 0;
  for (let letra of texto) {
    if (vocales.includes(letra)) {
      contador++;
    }
  }
  return contador;
};

console.log(contarVocales("Hola Mundo")); 
