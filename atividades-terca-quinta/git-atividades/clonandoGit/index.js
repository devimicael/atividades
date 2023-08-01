import { gerarEmpresas } from "./gerar-empresas.mjs";

const empresas = gerarEmpresas(2);
function maiorEmpresa(empresas){
    let verificador=0;
    let empresanome;
    
    for(let i in empresas){
        let empresaTotal = empresas[i].produtos.reduce((ac, el) => Number(ac) + Number(el.preco), 0);

        if(empresaTotal > verificador){
            verificador = empresaTotal;
            empresanome = empresas[i].nome
        }
    }
    return {empresa: empresanome, valor:verificador};
}
const {empresa, valor} = maiorEmpresa(empresas);
console.log(empresa, valor);
