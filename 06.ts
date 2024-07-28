import readlinesync = require("readline-sync");

// 6. Números Primos
//    - Faça um programa que imprima todos os números primos de 1 a 100.

console.log(2);

for (let numero = 1; numero <= 100; numero++) {

    let primo = true;
    
    if (numero % 2 === 0) {
        primo = false;
    } else {
        for (let index = 3; index <= Math.sqrt(numero); index += 2) {
            if (numero % index === 0) {
                primo = false;
                break;
            }
        }
    }

    if (primo) {
        console.log(numero);
    }
}
