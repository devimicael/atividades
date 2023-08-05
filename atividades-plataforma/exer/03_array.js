let array = [3, 7 ,9, 1,0];
const sizeArray = array.length

const filaRemove = () => array.shift();
const listaRemove = (el) => array.splice(array.indexOf(el), 1); 
const pilhaRemove = () => array.pop();

/* 
console.log("fila:", filaRemove());
console.log("lista:", listaRemove(7));
console.log("pilha:", pilhaRemove());

*/
// * filas
for(let i=0; i < sizeArray; i++){
    filaRemove();
    console.log(i, array);
}

// * listas
array = [3, 7 ,9, 1,0];
for(let i=0; i < sizeArray; i++){
    listaRemove(i)
    console.log(i, array);
}
// * pilhas
array = [3, 7 ,9, 1,0];
for(let i=0; i < sizeArray; i++){
    pilhaRemove()
    console.log(i, array);
}