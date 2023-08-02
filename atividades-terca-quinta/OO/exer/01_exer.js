// *  Na classe "Pessoa" criada anteriormente, adicione um método chamado "apresentar" que exiba no console
// *  uma mensagem com o nome e a idade da pessoa.

class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        console.log(`Me chamo ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const p1 = new Pessoa("Davi", 24);
// console.log(p1);
// p1.apresentar();