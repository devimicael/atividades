class Pessoa {
    nome: string;
    private idade: number;

    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`Me chamo ${this.nome} e tenho ${this.idade} anos.`);
    }

    getIdade(){
        return this.idade;
    }

    setIdade(idade: number){
        this.idade = idade
    }

}

const p1 = new Pessoa("Davi", 24);
//console.log(p1.getIdade());
// console.log(p1);
// p1.apresentar();

class Aluno extends Pessoa{
    matricula:string;

    constructor(nome:string, idade:number, matricula:string){
        super(nome, idade);
        this.matricula = matricula;
    }
    apresentar(){
        console.log(`Me chamo ${this.nome} e minha matricula é ${this.matricula}`);
    }
}

const aluno1 = new Aluno("Davi", 24, "09-OP1");
console.log(aluno1);
aluno1.apresentar();

class Animal {

    falar(){}
}

class Gato extends Animal{
    nome: string;
    som: string;

    constructor(nome: string, som:string){
        super();
        this.nome = nome;
        this.som = som;
    }

    falar(){
        console.log(`${this.nome} está falando ${this.som}`);
    }
}
const gatito = new Gato("titi", "miau");
console.log(gatito);