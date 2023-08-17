function calculadora(operador, x, y){
    if(operador === "+") return x + y;
    if(operador === "-") return x - y;
    if(operador === "*") return x * y;
    if(operador === "/") return x / y;
}
console.log(calculadora("+", 2, 4));