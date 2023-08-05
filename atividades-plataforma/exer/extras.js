/* 
    * Hora do desafio!
    * A tabela apresenta as três notas de três aluno.
    * Vamos representá-la em uma matriz e calcular a média final de cada aluno e a média de cada nota?
*/
const desafio1 = [
    ["José", [5.5, 7.9, 7.1]],
    ["Lúcia", [7.0, 3.5, 9.0]],
    ["PEdro", [8.6, 7.3, 8.8]],
];
const { link } = require("fs");
const { type } = require("os");
/* 
for(let i in desafio1){
    let soma = 0;
    for(let j of desafio1[i][1]){
        soma += j;
    }
    soma = soma / desafio1.length;
    console.log(`Nome:${desafio1[i][0]} | Média:${soma.toFixed(1)}`);
}
*/


class No{
    constructor(nome){
        this.nome = nome;
        this.proximo = null;
    }
}

class ListaLigada{
    constructor(){
        this.cabeca = null;
    }

    addFirst(nome){
        const newNo = new No(nome);
        newNo.proximo = this.cabeca;
        this.cabeca = newNo;
    }
    addLast(nome){
        const newNo = new No(nome);
        if(!this.cabeca){
            this.cabeca = newNo;
        } else {
            let current = this.cabeca;
            while(current.proximo){
                current = current.proximo;
            }
            current.proximo = newNo;
        }
    }
    removeFirst(){
        if(!this.cabeca){
            return null;
        }
        const removeNo = this.cabeca;
        this.cabeca = this.cabeca.proximo;
        removeNo.proximo = null;
        return removeNo.nome;
    }
    removeLast(){
        if(!this.cabeca) return null;
        if(!this.cabeca.proximo){
            const removeNo = this.cabeca;
            this.cabeca = null;
            return removeNo.nome;
        }
        let current = this.cabeca;
        let previous = null;
        while(current.proximo){
            previous = current;
            current = current.proximo;
        }
        previous.proximo = null;
        return current.nome;
    }
    serach(nome){
        let current = this.cabeca;
        while(current){
            if(current.nome === nome) return current;
            current = current.proximo;
        }
        return null;
    }
    size(){
        let count = 0;
        let current = this.cabeca;
        while(current){
            count += 1;
            current = current.proximo;
        }
        return count;
    }
    printList(){

    }
}

class Pessoa {
    constructor(nome){
        this.nome = nome;
        this.proximo = null;
    }
}

class FilaEspera{
    constructor(){
        this.primeiraPessoa = null;
        this.ultimaPessoa = null;
    }

    entrarNaFila(nome){
        const novaPessoa = new Pessoa(nome);
        if(!this.primeiraPessoa){
            this.primeiraPessoa = novaPessoa;
            this.ultimaPessoa = novaPessoa;
        } else {
            this.ultimaPessoa.proximo = novaPessoa;
            this.ultimaPessoa = novaPessoa;
        }
    }

    atenderProxima(){
        if(!this.primeiraPessoa){
            return "A fila está vazia!";
        }
        const pessoaAtendida = this.primeiraPessoa;
        this.primeiraPessoa = this.primeiraPessoa.proximo;
        pessoaAtendida.proximo = null;
        return `${pessoaAtendida.nome} foi atendida!`;
    }
}