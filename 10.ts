import readlinesync = require("readline-sync");

// 10. Calcular Hipotenusa
//     - Crie um programa que leia os comprimentos dos dois catetos de um triângulo retângulo e 
//       exiba o comprimento da hipotenusa.

let comprimentoA = readlinesync.questionFloat("Digite o comprimento do primeiro cateto: ",);
let comprimentoB = readlinesync.questionFloat("Digite o comprimento do segundo cateto: ",);

let hipotenusa = Math.sqrt((comprimentoA*comprimentoA)+(comprimentoB*comprimentoB));

console.log("O comprimento da hipotenusa é: "+ hipotenusa);