/* 
    * - Crie um programa que solicite o nome do usuário e, em seguida, imprima uma mensagem
    * personalizada com o nome inserido.
*/
const prompt = require('prompt-sync')();
const colors = require("@colors/colors");


const nome = prompt("digite seu nome: ");
function userPersonalizado(nome){
    console.log(`${nome}`.red);
}

userPersonalizado(nome);