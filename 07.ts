import readlinesync = require("readline-sync");

// 7. Ordenação de Lista
//    - Crie um programa que leia uma lista de números do usuário e exiba a lista ordenada em ordem crescente.

let quantidade = readlinesync.questionInt("Quer fazer uma lista de quando numeros? ",);

let lista = [];
let aux;

for (let index = 1; index <= quantidade; index++) {
    lista[index] = readlinesync.questionFloat("Digite o "+index+"o numero: ",);
}

for (let index = 0; index < lista.length; index++) {
    
    if (lista[index] < lista[index+1]) {
        aux=lista[index];
        lista[index]=lista[index+1];
        lista[index+1] = aux;
    }
}

for (let index = 0; index < lista.length; index++) {
    console.log(lista[index]+", ");
}