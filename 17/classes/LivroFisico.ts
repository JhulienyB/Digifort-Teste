import { Livro } from "./Livro";

export class LivroFisico extends Livro{
    
    private _numPaginas: number;

	constructor(titulo: string, autorPublicacao: string, tipo: number, numPaginas: number) {
        super(titulo, autorPublicacao, tipo);
		this._numPaginas = numPaginas;
	}


    /**
     * Getter numPaginas
     * @return {number}
     */
	public get numPaginas(): number {
		return this._numPaginas;
	}

    /**
     * Setter numPaginas
     * @param {number} value
     */
	public set numPaginas(value: number) {
		this._numPaginas = value;
	}
    

    public exibir_info(): void {
        super.exibir_info();
        console.log(`Numero de Paginas: ${this._numPaginas}`);
    }
}