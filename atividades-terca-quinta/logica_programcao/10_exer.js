/* 
    * Faça um programa que converta graus Celsius para fahrenheit.
*/

const prompt = require("prompt-sync")();
const colors = require('@colors/colors');

const graus = prompt("Graus em Celsius: ");

console.log("De Celsius para fahrenheit: ".yellow, graus * (9 / 5) + 32);
