const agRand = (max=9999, min=1111) => Math.floor(Math.random() * (max -min) + min);

class Account {
    constructor(titular, agencia, saldo){
        this.name_user = titular;
        this.agencia = agencia;
        this.saldo = saldo;
    }
}

const account1 = new Account("Davi", String(agRand()), 56.78);
const account2 = new Account("Micael", String(agRand()), 145.34);
// console.log(account1);

class Veiculo{
    constructor(marca, rodas, cor, valor, usado){
        this.marca = marca;
        this.rodas = rodas;
        this.cor = cor;
        this.valor = valor;
        this.usado = usado;
    }
}

const uno = new Veiculo("Fiat", 4, "Vermelho", 25.000, true);
console.log(uno);