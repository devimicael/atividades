const animais = [
    ["Felis Catus", "Gato", 3],
    ["Canídeos", "Cachorro", 13],
    ["Aves", "Pato", 5],
    ["Mamífero", "Baleia-jubarte", 34],
];

for(let animal in animais){
    console.log(`Nome:${animais[animal][1]} | Classe:${animais[animal][0]} | Idade:${animais[animal][2]}`);
}