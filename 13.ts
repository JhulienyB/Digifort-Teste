import readlinesync = require("readline-sync");

// 13. Calculadora Simples
//   - Crie um programa que simule uma calculadora simples capaz de realizar as
//     operações de adição, subtração, multiplicação e divisão com dois números informados pelo usuário.

console.log(" -- Calculadora -- ");
console.log("Escolha uma operacao: ");
console.log("1 - Adicao");
console.log("2 - Subtracao");
console.log("3 - Multiplicacao");
console.log("4 - Divisao");
let opcao = readlinesync.questionInt();
let numA = readlinesync.questionInt("Digite o primeiro numero: ",);
let numB = readlinesync.questionInt("Digite o segundo numero: ",);
let resultado;

switch (opcao) {
    case 1:
        resultado = numA + numB;
        break;
    case 2:
        resultado = numA - numB;
        break;
    case 3:
        resultado = numA * numB;
        break;
    case 4:
        resultado = numA / numB;
        break;
    default:
        break;
}

console.log("Resultado: "+resultado);