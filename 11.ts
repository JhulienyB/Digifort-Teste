import readlinesync = require("readline-sync");

// 11. Jogo de Adivinhação
//     - Escreva um programa que sorteie um número entre 1 e 100 e permita que o usuário tente adivinhar
//       o número, dando dicas se o número sorteado é maior ou menor do que o número fornecido pelo usuário.

let sortido = Math.floor(Math.random() * (100 - 1)) + 1;
let adivinha = readlinesync.questionInt("Tente adivinhar o numero sortido! Digite um numero: ",);

for (let index = 5; index > 0; index--) {
    if (sortido == adivinha) {
        console.log("Acertou!");
        break;
    } else {
        console.log("Errou! Voce tem mais "+index+" tentativas");
        adivinha = readlinesync.questionInt("Digite um numero : ",);
    }
}
console.log("O numero sortido era "+sortido);
