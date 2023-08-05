const lPessoas = ["Pedro", "Ana", "Bruno", "Davi", "João", "Joana", "Juliana", "Milena", "Carla", "Carlos"];
const lIdades = [20, 19, 18, 33, 34, 40, 24, 70, 56, 44];
const lCores = ["Vermelho", "Verde", "Amarelo", "Azul", "Rosa", "Roxo", "Preto", "Branco", "Marrom", "Cinza"];

// console.log(lPessoas.length, lIdades.length, lCores.length);
const pessoas = [
    ["Pedro", [20, "Vermelho"]],
    ["Ana", [19, "Verde"]],
    ["Bruno", [18, "Amarelo"]],
    ["Davi", [33, "Azul"]],
    ["João", [34, "Rosa"]],
    ["Joana", [40, "Roxo"]],
    ["Juliana", [24, "Preto"]],
    ["Milena", [70, "Branco"]],
    ["Carla", [56, "Marrom"]],
    ["Carlos", [44, "Cinza"]],
];
// console.log(pessoas);
for(let i in pessoas){
    console.log(pessoas[i][0], pessoas[i][1][0], pessoas[i][1][1]);
}

pessoas[0][1][0] = 21;
pessoas[0][1][1] = "Tomato";

pessoas[3][1][0] = 66;
pessoas[3][1][1] = "Salmão";

console.log("----");
for(let i in pessoas){
    console.log(pessoas[i][0], pessoas[i][1][0], pessoas[i][1][1]);
}