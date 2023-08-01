/* 
    * Escreva um programa que calcule a média de três números inforamdos pelo usuário.
*/

const prompt = require("prompt-sync")();
const colors = require('@colors/colors');

let total = 0;
for(let i=0; i<3; i++){
    let valor_user = prompt(`nota ${i + 1}: `);
    total += Number(valor_user);
}
const media = total / 3;

if(media < 6){
    console.log(`A media é: ${media.toFixed(2)}`.red);
} else if(media > 5 && media < 8){
    console.log(`A media é: ${media.toFixed(2)}`.yellow);
} else if(media >= 8 && media <= 10){
    console.log(`A media é: ${media.toFixed(2)}`.green);
}else{
    console.log(`A media é: ${0.0}`.black);
}
