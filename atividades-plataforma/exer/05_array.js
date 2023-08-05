const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const numeroParaEncontrar = 20;

function encontrarNumero(array, numeroParaEncontrar){
    return `Número pedido:${array[array.indexOf(numeroParaEncontrar)]} | Pos:[${array.indexOf(numeroParaEncontrar)}]`;
}

console.log(encontrarNumero(array, numeroParaEncontrar));
//console.log(array[7])