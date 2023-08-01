/* 
    * Determine se um número é primo ou não.
*/

const prompt = require("prompt-sync")();
const colors = require('@colors/colors');

const numero = prompt("Digite um número: ");
for(let i=0; i<= numero; i++){
    if(numero % i === 0){
        console.log("divisivel".green, i)
    }else{
        console.log("ñ divisivel".red, i);
    }
}