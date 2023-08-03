/* 
    * Crie uma classe chamada "Animal" com um método chamado "falar".
    * Crie classes específicas que herdem de "Animal" (por exemplo: "Cachorro", "Gato", etc.)
    * e sobrescrevam o método "falar" para exibir o som característico de cada animal.  

*/

class Animal {
    constructor(nome){
        this.nome=nome;
    }

    falar(){
        console.log(`${this.nome} está falando.`);
    }
}

class Gato extends Animal{
    constructor(nome, som){
        super(nome);
        this.som = som;
    }

    falar(){
        console.log(`${this.nome} está falando ${this.som}`);
    }
}

class Cachorro extends Animal{
    constructor(nome, som){
        super(nome);
        this.som = som;

    }
    falar(){
        console.log(`${this.nome} está falando ${this.som}`);
    }
}

const gatitu = new Gato("Tom", "miau");
const cachoro = new Cachorro("Titi", "au au");

gatitu.falar();
cachoro.falar();