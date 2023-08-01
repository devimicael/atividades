/* 
    * Faça um programa que retorne o maior número de uma lista e o menor.
*/

const prompt = require("prompt-sync")();
const colors = require('@colors/colors');

const max = prompt("Quantos números deseja digitar? ".green);
const lista = [];

for (let i = 1; i <= max; i++) {
    let numeros = prompt(`Número ${i}: `);
    lista.push(Number(numeros));
}

let maior = lista[0];
let menor = lista[0];

for (let i = 1; i < lista.length; i++) {
    if (lista[i] > maior) {
        maior = lista[i];
    }
    if (lista[i] < menor) {
        menor = lista[i];
    }
}
console.log("O maior número encontrado: ".green, maior);
console.log("O menor número encontrado: ".red, menor);