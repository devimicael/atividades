/* 
    * Escreva um que calcule soma de dois números inteiros e exiba o resultado.
*/

const prompt = require("prompt-sync")();
const colors = require('@colors/colors');

const num1 = prompt("informe o número 1: ".green);
const num2 = prompt("informe o número 2: ".green);

const somar = (a, b) => Number(a) + Number(b);
console.log(`Resultado: ${somar(num1, num2)}`.red);