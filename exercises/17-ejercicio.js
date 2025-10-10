// 17. Array de Objetos + Búsqueda
// Dado un array de personas con nombre y edad, encuentra
// manualmente con un ciclo la primera persona mayor de 30 años.

const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 28 },
  { nombre: "Carlos", edad: 35 },
  { nombre: "María", edad: 22 }
];

let personaMayor = null;

for (let i = 0; i < personas.length; i++) {
  if (personas[i].edad > 30) {
    personaMayor = personas[i];
    break; 
  }
}

console.log(personaMayor); // { nombre: 'Carlos', edad: 35 }
