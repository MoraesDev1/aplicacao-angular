import { MarcaInterface } from "./model/marca";

export class Marca implements MarcaInterface {
    id?: Number | undefined;
    nome: String;
    descricao: String;

    constructor(id: Number, nome: String, descricao: String) {
        this.id;
        this.nome = nome;
        this.descricao = descricao;
    }
}
