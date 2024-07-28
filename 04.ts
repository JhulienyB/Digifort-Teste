import readlinesync = require("readline-sync");

// 4. Maior e Menor Número
//    - Crie um programa que leia três números do usuário e exiba o maior e o menor entre eles.

let numA  = readlinesync.questionFloat("Digite o primeiro numero: ",);
let numB  = readlinesync.questionFloat("Digite o segundo numero: ",);
let numC  = readlinesync.questionFloat("Digite o terceiro numero: ",);

let maior = numA;
let menor = numA;


if (maior < numB) {
   maior = numB;
};

if (maior < numC) {
   maior = numC;
};

if (menor > numB) {
   menor = numB;
};

if (menor > numC) {
   menor = numC;
};

console.log("O maior numero digitado foi: " + maior);
console.log("O menor numero digitado foi: " + menor);