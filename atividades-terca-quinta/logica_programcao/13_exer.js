/* 
    * Faça um programa que verifica se  uma palavra é um palindromo.
*/

const prompt = require("prompt-sync")();
const colors = require('@colors/colors');


const frase = prompt("digite uma frase para saber se é um palindromo: ".green);
const fraseList = frase.split("").reverse().join("").toLowerCase();

if(frase.toLowerCase() === fraseList){
    console.log("É um palindromo.".yellow);
}else{
    console.log("Não é um palindromo.".blue);
}