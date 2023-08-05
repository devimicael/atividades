const array = [3,7,9,1,0];
console.log(array);

const filaRemove = () => array.shift();
const listaRemove = (el) => array.splice(array.indexOf(el), 1); 
const pilhaRemove = () => array.pop();

console.log("fila:", filaRemove());
console.log("lista:", listaRemove(7));
console.log("pilha:", pilhaRemove());

console.log(array);