class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.proximo = null;
    }
}
class ListPessoa {
    constructor(){
        this.cabeca = null;
    }

    add(nome, idade){
        const novoPessoa = new Pessoa(nome, idade);
        if(!this.cabeca){
            this.cabeca = novoPessoa;
        } else {
            let atual = this.cabeca;
            while(atual.proximo){
                atual = atual.proximo;
            }
            atual.proximo = novoPessoa;
        }
    }
    showPessoas(){
        let atual = this.cabeca;
        while(atual){
            console.log(`Nome:${atual.nome} | Idade:${atual.idade}`);
            atual = atual.proximo;
        }
    }
}
const l1 = new ListPessoa();
l1.add("Davi", 24);
l1.add("Ana", 28);
l1.showPessoas();