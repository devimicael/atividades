/* 
    * Faça um programa que verifique se um número é par ou ímpar.
*/

const prompt = require("prompt-sync")();
const colors = require('@colors/colors');

const numero = prompt("informe um número para saber se é par ou ímpar: ");
if(Number(numero) % 2 === 0){
    console.log(`Número informado: [${numero}] é par`.blue);
} else{
    console.log(`Número informado: [${numero}] é ímpar`.red);
}
