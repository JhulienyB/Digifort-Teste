import readlinesync = require("readline-sync");

// 5. Verificação de Palíndromo
//    - Escreva um programa que leia uma string do usuário e verifique 
//      se ela é um palíndromo (lê-se da mesma forma de trás para frente).

let palavra = readlinesync.question("Digite uma palavra: ",);

let letras = palavra.length;
let aux = 0;

for (let index = 0; index < letras / 2; index++) {
    if (palavra[index] !== palavra[letras - 1 - index]) {
        aux++;
    }
}

if (aux == 0) {
    console.log("A palavra é um palíndromo.");
} else {
    console.log("A palavra não é um palíndromo.");
}