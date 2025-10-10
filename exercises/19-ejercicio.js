// 19. Spread Operator
// Une dos arreglos [1,2,3] y [4,5,6] en uno solo usando ....

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinado = [...arr1, ...arr2];

console.log(combinado);