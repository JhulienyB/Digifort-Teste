export abstract class Livro {

    private _titulo: string;
    private _autorPublicacao: string;
    private _tipo: number;
    private _disponivel: boolean;

    constructor(titulo: string, autorPublicacao: string, tipo: number){
        this._titulo = titulo;
        this._autorPublicacao = autorPublicacao;
        this._tipo = tipo;
        this._disponivel = true;
    }



    /**
     * Getter titulo
     * @return {string}
     */
	public get titulo(): string {
		return this._titulo;
	}

    /**
     * Getter autorPublicacao
     * @return {string}
     */
	public get autorPublicacao(): string {
		return this._autorPublicacao;
	}

    /**
     * Getter disponivel
     * @return {number}
     */
    public get tipo(): number {
        return this._tipo;
    }

    /**
     * Getter disponivel
     * @return {boolean}
     */
	public get disponivel(): boolean {
		return this._disponivel;
	}


    /**
     * Setter titulo
     * @param {string} value
     */
	public set titulo(value: string) {
		this._titulo = value;
	}

    /**
     * Setter autorPublicacao
     * @param {string} value
     */
	public set autorPublicacao(value: string) {
		this._autorPublicacao = value;
	}

    /**
     * Setter tipo
     * @param {number} value
     */
    public set tipo(value: number) {
        this._tipo = value;
    }

    /**
     * Setter disponivel
     * @param {boolean} value
     */
	public set disponivel(value: boolean) {
		this._disponivel = value;
	}


    emprestar(): void {
        if (this.disponivel) {
            this.disponivel = false;
            console.log(`O livro "${this.titulo}" foi emprestado.`);
        } else {
            console.log(`O livro "${this.titulo}" ja esta emprestado.`);
        }
    }

    devolver(): void {
        if (!this.disponivel) {
            this.disponivel = true;
            console.log(`O livro "${this.titulo}" foi devolvido.`);
        } else {
            console.log(`O livro "${this.titulo}" ja esta disponivel.`);
        }
    }

    public exibir_info(): void {

        console.log("****************************************************")
        console.log("LIVRO")
        console.log("****************************************************")
        console.log(`Titulo: ${this._titulo}`)
        console.log(`Autor Publicacao: ${this._autorPublicacao}`)
        console.log(`Disponivel: ${this._disponivel}`)
    }
}