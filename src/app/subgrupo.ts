import { SubgrupoInterface } from "./model/subgrupo";

export class Subgrupo implements SubgrupoInterface {
    id?: Number;
    idProdutoGrupo: Number;
    nomeGrupo?: String;
    nome: string;
    descricao: string;

    constructor(idProdutoGrupo: Number, nome: string, descricao: string, id?: Number, nomeGrupo?: String) {
        this.id = id,
            this.idProdutoGrupo = idProdutoGrupo,
            this.nomeGrupo = nomeGrupo,
            this.nome = nome,
            this.descricao = descricao
    }
}
