// * Outros Conceitos Básicos:

// TODO: 1 - Crie uma função que calcule o fatorial de um número inteiro.
function fatorial(n){
    if(n === 1) return n;
    return n * fatorial(n-1);
}
// console.log(fatorial(5));

//TODO: Crie uma função que retorne o maior valor entre três números.
function maiorQ(a,b,c){
    if(a > b && a > c) return a;
    if(b > a && b > c) return b;
    return c; 
}
// console.log(maiorQ(3,5,10));

//TODO: Converta uma temperatura de Celsius para Fahrenheit usando funções.
function conversor(celsius){
    return ((celsius - 32) * (5/9)).toFixed(2); 
}
//console.log(conversor(45));

//TODO: Crie uma função que receba um array de números e retorne a média deles.

function media(array){
    let med = 0;
    for(let media of array){
        med += media;
    }
    return med / array.length
}
//console.log(media([9,8,6,7]));

//TODO: Crie uma função que remova elementos duplicados de um array.
function removeDuplicados(array){
    const arr = [];
    for(let ele of array){
        if(!arr.includes(ele)){
            arr.push(ele);
        }
    }
    return arr;
}
// console.log(removeDuplicados([1, 2, 2, 3, 4, 4, 5, 6, 7,7, 5, 2]))