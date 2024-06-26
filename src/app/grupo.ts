import { GrupoInterface } from "./model/grupo";

export class Grupo implements GrupoInterface {
    id?: number;
    nome: string;
    descricao: string;

    constructor(nome: string, descricao: string, id?: number) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}