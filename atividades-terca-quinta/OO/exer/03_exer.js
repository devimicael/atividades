// *  Modifique a classe "Pessoa" para que o atributo "idade" seja privado.
// * Crie métodos getters e setters para acessar e alterar o valor da idade, respeitando o encapsulamento

class Pessoa {
    // #_idade

    constructor(nome, idade){
        this.nome = nome;
        this._idade = idade;
    }

    apresentar(){
        console.log(`Me chamo ${this.nome} e tenho ${this._idade} anos.`);
    }

    get idade(){
        return this._idade;
    }

    set idade(idade){
        if(typeof idade !== 'number') return idade;
        return this._idade = idade;
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