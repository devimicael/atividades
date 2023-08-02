// *  Crie uma classe chamada "Aluno" que herde da classe "Pessoa" (do exercício 1).
// * A classe "Aluno" deve ter um atributo adicional chamado "matricula".
// * Crie um objeto chamado "aluno1" que seja um aluno e imprima no console.

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

class Aluno extends Pessoa {
    constructor(nome, idade, matricula){
        super(nome, idade);
        this.matricula = matricula;
    }
}

const aluno1 = new Aluno("Frog", 32, "1101");
console.log(aluno1);
aluno1.apresentar();