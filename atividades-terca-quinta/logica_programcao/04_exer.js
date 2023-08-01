/* 
    * Crie um programa que receba a idade de uma pessoa e infome se ela é maior ou menor de idade.

*/

const prompt = require("prompt-sync")();
const colors = require('@colors/colors');

const idade = prompt("informe sua idade: ".red);

if(Number(idade) < 18){
    console.log(`Menor de idade: ${idade}`.red);
}else{
    console.log(`Maior de idade: ${idade}`.green);
}