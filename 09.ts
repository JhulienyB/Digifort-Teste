import readlinesync = require("readline-sync");

// 9. Tabuada
//     - Crie um programa que exiba a tabuada de um número informado pelo usuário.

let numero = readlinesync.questionInt("Digite um numero inteiro: ",);

console.log("Tabuada do "+numero+":");
for (let index = 0; index <= 10; index++) {
    console.log(numero + " x " + index + " = " + (numero*index));
}