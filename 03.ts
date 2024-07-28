import readlinesync = require("readline-sync");

// 3. Fatorial de um Número
//    - Escreva um programa que leia um número inteiro do usuário e exiba o fatorial desse número.

let numero = readlinesync.questionInt("Digite um numero inteiro: ",);
let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    console.log("O fatorial do numero é: " + (fatorial));