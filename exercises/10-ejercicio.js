// 10. Función con Parámetro por Defecto
// Crea una función saludar(nombre = "Visitante").
// ● Si se llama sin argumentos → "Hola, Visitante"
// ● Si se llama con un nombre → "Hola, Ana"

function saludar(nombre = "Visitante") {
  console.log(`Hola, ${nombre}`);
}

saludar(); 
saludar("Ana"); 
