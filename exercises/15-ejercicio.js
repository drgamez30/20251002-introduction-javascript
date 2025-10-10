// 15. Objeto con Método Interno
// Crea un objeto de coche con propiedades marca, modelo, año y
// un método info() que retorne "Toyota Corolla (2020)".

const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  info() {
    return coche.marca + " " + coche.modelo + " (" + coche.año + ")";
  }
};


console.log(coche.info()); 
