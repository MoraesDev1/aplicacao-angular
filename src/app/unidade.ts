import { UnidadeInterface } from "./model/unidade";

export class Unidade implements UnidadeInterface {
    id?: Number | undefined;
    sigla: String;
    descricao: String;

    constructor(id: Number, sigla: String, descricao: String) {
        this.id;
        this.sigla = sigla;
        this.descricao = descricao;
    }
}
