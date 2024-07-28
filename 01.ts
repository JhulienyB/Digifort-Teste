import readlinesync = require("readline-sync");
// 1. Soma de Dois Números
//    - Crie um programa que leia dois números do usuário e exiba a soma deles.

let num1, num2;

num1 = readlinesync.questionFloat("\nDigite o primeiro numero: ",);
num2 = readlinesync.questionFloat("\nDigite o segundo numero: ",);
console.log("A soma dos dois numeros é: " + (num1+num2));
