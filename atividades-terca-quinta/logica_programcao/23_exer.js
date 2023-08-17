// TODO: Verifique se um ano é bissexto (divisível por 4 e não por 100, a menos que seja divisível por 400).

const ano = 2016;

if(ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) console.log("é bissexto.");
