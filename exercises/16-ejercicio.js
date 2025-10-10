// 16. Destructuring en Objetos
// Del objeto anterior, extrae marca y año en dos variables
// usando destructuring.

const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  info() {
    return coche.marca + " " + coche.modelo + " (" + coche.año + ")";
  }
};

const { marca, año } = coche;

console.log(marca); 
console.log(año);   