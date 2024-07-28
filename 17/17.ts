import readlinesync = require('readline-sync');
import { Biblioteca } from './classes/Biblioteca';
import { LivroFisico } from './classes/LivroFisico';
import { Ebook } from './classes/Ebook';

export function main() {

    let opcao, tamanhoArquivo, tipo, numPaginas: number;
    let titulo, autorPublicacao: string;
    let tipoLivro = ['Livro Fisico', 'Ebook'];

    const biblioteca: Biblioteca = new Biblioteca();


    while (true) {
        console.log("                                                    ");
        console.log("******************** BIBLIOTECA ********************");
        console.log("                                                    ");
        console.log("            1 - Adicionar Livro                     ");
        console.log("            2 - Remover Livro                       ");
        console.log("            3 - Listar Livros Disponiveis           ");
        console.log("            4 - Exibir Informacoes do Livro         ");
        console.log("            5 - Emprestar Livro                     ");
        console.log("            6 - Devolver Livro                      ");
        console.log("            0 - Sair                                ");
        console.log("                                                    ");
        console.log("****************************************************");
        console.log("                                                    ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log("\nVolte Sempre!");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nAdicionar Livro\n\n");
                titulo = readlinesync.question("Digite o Titulo do Livro: ");
                console.log("Informe se é um Livro Fisico(1) ou Ebook(2): ")
                tipo = readlinesync.keyInSelect(tipoLivro, "", { cancel: false }) + 1;
                autorPublicacao = readlinesync.question("Digite o Autor: ");
                switch (tipo) {
                    case 1:
                        numPaginas = readlinesync.questionInt("Digite o Numero de Paginas: ");
                        biblioteca.adicionar_livro(new LivroFisico(titulo, autorPublicacao, tipo, numPaginas));
                        break;
                    case 2:
                        tamanhoArquivo = readlinesync.questionFloat("Digite o Tamanho do Arquivo (em MB): ");
                        biblioteca.adicionar_livro(new Ebook(titulo, autorPublicacao, tipo, tamanhoArquivo));
                        break;
                }
                keyPress();
                break;
            case 2:
                console.log("\n\nRemover Livro\n\n");
                titulo = readlinesync.question("Digite o Nome do Livro: ");
                biblioteca.remover_livro(titulo);
                keyPress();
                break;
            case 3:
                console.log("\n\nListar Livros Disponiveis\n\n");
                biblioteca.listar_livros_disponiveis();
                keyPress();
                break;
            case 4:
                console.log("\n\nExibir Informacoes do Livro\n\n");
                titulo = readlinesync.question('Digite o Titulo do Livro: ');
                biblioteca.exibir_informacoes(titulo);
                keyPress();
                break;
            case 5:
                console.log("\n\nEmprestar Livro\n\n");
                titulo = readlinesync.question('Digite o Titulo do Livro a ser emprestado: ');
                let livroEmprestar = biblioteca.buscar_livro(titulo);
                if (livroEmprestar) {
                    livroEmprestar.emprestar();
                } else {
                    console.log(`Livro com titulo "${titulo}" nao encontrado.`);
                }
                keyPress();
                break;
            case 6:
                console.log("\n\nDevolver Livro\n\n");
                titulo = readlinesync.question('Digite o Titulo do Livro a ser devolvido: ');
                let livroDevolver = biblioteca.buscar_livro(titulo);
                if (livroDevolver) {
                    livroDevolver.devolver();
                } else {
                    console.log(`Livro com título "${titulo}" não encontrado.`);
                }
            default:
                break;
        }
    }
    
    function keyPress(): void {
        console.log("\nPressione enter para continuar...");
        readlinesync.prompt();
    }
}

main();