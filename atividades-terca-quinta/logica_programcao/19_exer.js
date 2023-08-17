// TODO: 4 - Calcule o produto dos números de 1 a 5 utilizando um loop do...while.

const max = 6;
let count = 0;
do {
    let multiplicando = count * 10;
    let multiplicador = count * multiplicando;
    console.log(count, multiplicando, multiplicador);
    count++;
}while(count < max);