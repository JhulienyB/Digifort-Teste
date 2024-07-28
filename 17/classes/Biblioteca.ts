import { Livro } from "./Livro";

export class Biblioteca {
    livros: Livro[] = [];

    adicionar_livro(livro: Livro): void {
        this.livros.push(livro);
    }

    remover_livro(titulo: string): void {
        this.livros = this.livros.filter(livro => livro.titulo !== titulo);
    }

    buscar_livro(titulo: string): Livro | undefined {
        return this.livros.find(livro => livro.titulo === titulo);
    }

    listar_livros_disponiveis(): void {
        const livros_disponiveis = this.livros.filter(livro => livro.disponivel);
        if (livros_disponiveis.length === 0) {
            console.log('Nenhum livro disponível no momento.');
        } else {
            livros_disponiveis.forEach(livro => livro.exibir_info());
        }
    }

    exibir_informacoes(titulo: string): void {
        const livro = this.buscar_livro(titulo);
        if (livro) {
            livro.exibir_info();
        } else {
            console.log(`Livro com título "${titulo}" não encontrado.`);
        }
    }
}