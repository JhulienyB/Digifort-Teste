import readlinesync = require("readline-sync");

// 12. Sequência de Fibonacci
//     - Crie um programa que exiba os n primeiros termos da sequência de Fibonacci,
//       onde n é informado pelo usuário.

let termos = readlinesync.questionInt("Digite o numero de termos da sequencia de Fibonacci: ",);
let fibo = [];
fibo[0] = 0;
fibo[1] = 1;
console.log("Os primeiros "+termos+" termos da sequencia de Fibonacci sao:");
for (let index = 1; index <= termos; index++) {
    fibo[index+1] = fibo[index-1] + fibo[index];
    console.log(fibo[index-1]);
}