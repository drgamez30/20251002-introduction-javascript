// 5. Ciclo for con Suma Acumulada
// Imprime los números del 1 al 20 y al final muestra la suma
// total de todos ellos.

acumulador = 0;
for (let i = 1; i <= 20; i++) {
    acumulador += i;
    console.log(i);
}
console.log("La suma total es: " + acumulador);