// 8. Buscar un Elemento Manualmente (sin .find())
// Dado ["html","css","javascript","react"], recorre el arreglo y
// si encuentras "javascript" imprime "¡Encontrado!".

const tecnologias = ["html", "css", "javascript", "react"];
for (let i = 0; i < tecnologias.length; i++) {
    if (tecnologias[i] === "javascript") {
        console.log("¡Encontrado!");
    }
}
