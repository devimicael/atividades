// TODO: 5 - Crie um loop que imprima a sequência de Fibonacci até o 10º termo.

const arr = new Array(0, 1, 1);
for(let i=3; i < 11; i++){
    arr[i] = arr[i-1] + arr[i-2];
}

console.log(arr);