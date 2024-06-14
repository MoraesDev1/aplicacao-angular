import { MarcaInterface } from "./model/marca";

export class Marca implements MarcaInterface {
    id?: Number;
    nome: String;
    descricao: String;

    constructor(nome: String, descricao: String, id?: Number) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}
