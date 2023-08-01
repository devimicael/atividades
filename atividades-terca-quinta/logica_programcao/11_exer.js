/* 
    * Escreva um programa que receba uma lista de números e imprima apenas os pares.
*/

const prompt = require("prompt-sync")();
const colors = require('@colors/colors');

const max = prompt("quantos números deseja digitar? ".green);
const lista = [];

for(let i=0; i<= max; i++){
    let numeros = prompt(`Número ${i+1}: `);
    lista.push(numeros);
}
for(let numero of lista){
    if(Number(numero) % 2 === 0){
        console.log("Números par: ".yellow, numero);
    }else{
        console.log("Números impar: ".blue, numero);
    }
}
