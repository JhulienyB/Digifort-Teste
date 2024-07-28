import { Livro } from "./Livro";

export class Ebook extends Livro{
    
    private _tamanhoArquivo: number;

	constructor(titulo: string, autorPublicacao: string, tipo: number, tamanhoArquivo: number) {
        super(titulo, autorPublicacao, tipo);
		this._tamanhoArquivo = tamanhoArquivo;
	}


    /**
     * Getter tamanhoArquivo
     * @return {number}
     */
	public get tamanhoArquivo(): number {
		return this._tamanhoArquivo;
	}

    /**
     * Setter tamanhoArquivo
     * @param {number} value
     */
	public set tamanhoArquivo(value: number) {
		this._tamanhoArquivo = value;
	}
    

    public exibir_info(): void {
        super.exibir_info();
        console.log(`Tamanho do Arquivo (em MB): ${this._tamanhoArquivo}`);
    }
}