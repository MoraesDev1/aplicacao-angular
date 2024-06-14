import { GrupoInterface } from "./model/grupo";

export class Grupo implements GrupoInterface {
    id?: number | undefined;
    nome: string;
    descricao: string;

    constructor(id: number, nome: string, descricao: string) {
        this.id;
        this.nome = nome;
        this.descricao = descricao;
    }
}