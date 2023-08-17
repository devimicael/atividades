// TODO: 3 - Imprima os números pares de 0 a 20 utilizando um loop for.
for(let i=0; i < 21; i++){
    let par = i % 2 === 0 ? `${i}: PAR`: `${i}: IMPAR`;
    console.log(par);
}