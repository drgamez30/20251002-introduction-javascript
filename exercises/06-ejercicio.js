// 6. Ciclo while con Conteo Regresivo Condicional
// Cuenta del 15 al 0 y solo imprime los números que sean
// múltiplos de 3.

let contador = 15;
while (contador >= 0) {
    if (contador % 3 === 0) {
        console.log(contador);
    }
    contador--;
}