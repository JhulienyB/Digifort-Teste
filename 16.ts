import readlinesync = require("readline-sync");

// 16. Manipulação de Arrays
// Crie um programa que permita ao usuário manipular uma lista de numeros através das seguintes operações:
//  - Adicionar um numero na lista.
//  - Remover um numero da lista.
//  - Mudar a posição de um numero na lista.

let lista: number[] = [];
let opcao: number;

do {
    console.log("\nEscolha uma operacao:");
    console.log("1 - Adicionar um numero");
    console.log("2 - Remover um numero");
    console.log("3 - Mudar a posicao de um numero");
    console.log("4 - Exibir a lista");
    console.log("5 - Sair");

    opcao = readlinesync.questionInt("Digite sua escolha: ",);

    switch (opcao) {
    case 1:
        let adicionar = readlinesync.questionFloat("Digite o numero a ser adicionado: ",);
        lista.push(adicionar);
        console.log(`Numero ${adicionar} adicionado.`);
        break;
    case 2:
        let remover = readlinesync.questionFloat("Digite o numero a ser removido: ",);
        let indexRemover = lista.indexOf(remover);
        if (indexRemover !== -1) {
            lista.splice(indexRemover, 1);
            console.log(`Numero ${remover} removido.`);
        } else {
            console.log(`Numero ${remover} nao encontrado na lista.`);
        }
        break;
    case 3:
        let numMover = readlinesync.questionFloat("Digite o numero a ser movido: ",);
        let novaPosicao = readlinesync.questionInt("Digite a nova posicao (indice comecando de 0): ",);
        let indexMover = lista.indexOf(numMover);
        if (indexMover !== -1 && novaPosicao >= 0 && novaPosicao < lista.length) {
            lista.splice(indexMover, 1);
            lista.splice(novaPosicao, 0, numMover);
            console.log(`Numero ${numMover} movido para a posicao ${novaPosicao}.`);
        } else {
            console.log(`Numero ${numMover} não encontrado ou posicao invalida.`);
        }
        break;
    case 4:
        console.log("Lista atual:", lista);
        break;
    case 5:
        console.log("Saindo...");
        break;
    default:
        console.log("Escolha inválida. Tente novamente.");
    }
} while (opcao !== 5);
