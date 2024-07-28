import readlinesync = require("readline-sync");

// 14. Validação de Senha
//     - Escreva um programa que leia uma senha do usuário e verifique se ela atende aos seguintes critérios: 
//       - Pelo menos 8 caracteres
//       - Contém pelo menos uma letra maiúscula
//       - Contém pelo menos uma letra minúscula
//       - Contém pelo menos um número
//       - Contém pelo menos um caractere especial (como @, #, $)

let correto = false;
let letraMaiuscula = false;
let letraMinuscula = false;
let numero = false;
let especial = false;
let especialChar = "!@#$%^&*()_+-=[]{}|;:'\",.<>/?";

do {
    let senha = readlinesync.question("Digite uma senha: ",);

    if (senha.length >= 8) {
        for (let i = 0; i < senha.length; i++) {
            const char = senha[i];
            
            if (char >= 'A' && char <= 'Z') {
                letraMaiuscula = true;
            } else if (char >= 'a' && char <= 'z') {
                letraMinuscula = true;
            } else if (char >= '0' && char <= '9') {
                numero = true;
            } else if (especialChar.includes(char)) {
                especial = true;
            }
        }
    }
    
    if (letraMaiuscula && letraMinuscula && numero && especial) {
            correto = true;
        } else {
            console.log("A senha precisa conter:");
            console.log("- Pelo menos 8 caracteres");
            console.log("- Contém pelo menos uma letra maiuscula");
            console.log("- Contém pelo menos uma letra minuscula");
            console.log("- Contém pelo menos um caractere especial (como @, #, $)");
        }
} while (correto == false);

console.log("Senha cadastrada com sucesso!");