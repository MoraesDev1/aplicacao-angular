import { SubgrupoInterface } from "./model/subgrupo";

export class Subgrupo implements SubgrupoInterface {
    id?: Number | undefined;
    idProdutoGrupo: Number;
    nomeGrupo?: String | undefined;
    nome: string;
    descricao: string;

    constructor(id: Number, idProdutoGrupo: Number, nomeGrupo: String, nome: string, descricao: string) {
        this.id,
            this.idProdutoGrupo = idProdutoGrupo,
            this.nomeGrupo,
            this.nome = nome,
            this.descricao = descricao
    }
}
