import readlinesync = require("readline-sync");

// 8. Cálculo de Média
//     - Escreva um programa que leia várias notas do usuário
//      (permitir a entrada de uma quantidade indefinida de notas) e exiba a média delas.

let contagem=0, soma=0, media;
let opcao = true;

do {
    
    let nota = readlinesync.questionFloat("Digite a "+(contagem+1)+"a nota: ",);

    soma += nota;
    contagem++;

    opcao = readlinesync.keyInYNStrict("\nDeseja continuar adicionando notas? ");

} while (opcao == true);

media = soma / contagem;

console.log("soma das notas: "+soma);
console.log("contagem das notas: "+contagem);
console.log("Media das notas: "+media);