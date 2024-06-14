import { UnidadeInterface } from "./model/unidade";

export class Unidade implements UnidadeInterface {
    id?: Number;
    sigla: String;
    descricao: String;

    constructor(sigla: String, descricao: String, id?: Number) {
        this.id = id;
        this.sigla = sigla;
        this.descricao = descricao;
    }
}
