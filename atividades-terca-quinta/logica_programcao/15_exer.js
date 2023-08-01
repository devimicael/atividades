/* 
    * faça um programa que simule um jogo de adivinhação, onde o computador escolhe um número
    * e o úsuario tenta adivinhar.
*/

const rand = (max=20, min=1) => Math.round(Math.random() * (max - min) + min);
let controle = true;

const prompt = require("prompt-sync")();
const colors = require('@colors/colors');

while(controle){
    let aleatorio = rand();
    console.log("MAQ: Pensei em um número 🤔".bgBlue.white);
    const euAcho = prompt("Tente acerta: ".blue);

    if(Number(euAcho) !== aleatorio){
        console.log("Que pena 😚 pensei em :", aleatorio);
        console.log("Quer perder novamente? 😚 [n/s]");
        let novamente = prompt("-:");
        switch(novamente.toLowerCase()){
            case "n":
                console.log("até logo perdedor! 😚");
                controle = false;
                break;
            case "s":
                console.log("Então vamos perder mais uma 😚");
                console.clear();
                break;
        }
    }else{
        console.log("Você acertou");
    }
}