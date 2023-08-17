// TODO: Verifique se uma string é um palíndromo (lê-se da mesma forma de trás para frente).

const frase = "ala"
const palindromo = frase.split("").reverse().join("") === frase?"sou um palindromo":"não sou um palindromo";
console.log(palindromo);
