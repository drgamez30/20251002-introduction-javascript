// 3. Condicional con Validación de String
// Declara una variable rol con valores posibles: "admin", "user"
// o "guest".
// ● Si es "admin" → imprime "Acceso total"
// ● Si es "user" → imprime "Acceso limitado"
// ● Si es "guest" → imprime "Inicia sesión para continuar"
// ● Si es otro valor → "Rol no válido"

const prompt = require('prompt-sync')();

let rol = prompt("Ingresa tu rol (admin, user, guest): ").toLowerCase();
if (rol === "admin") {
    console.log("Acceso total");
}
else if (rol === "user") {
    console.log("Acceso limitado");
}
else if (rol === "guest") {
    console.log("Inicia sesión para continuar");
}
else {
    console.log("Rol no válido");
}