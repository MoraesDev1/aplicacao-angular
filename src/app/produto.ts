import { ProdutoInterface } from "./model/produto";

export class Produto implements ProdutoInterface {
    id?: Number | undefined;
    idProdutoSubgrupo: Number;
    idProdutoMarca: Number;
    idProdutoUnidade: Number;
    nome: String;
    gtin: String;
    valor: Number;
    dataCadastro: String;

    constructor(id: Number, idProdutoSubgrupo: Number,
        idProdutoMarca: Number,
        idProdutoUnidade: Number,
        nome: String,
        gtin: String,
        valor: Number,
        dataCadastro: String) {
        this.id;
        this.idProdutoSubgrupo = idProdutoSubgrupo;
        this.idProdutoMarca = idProdutoMarca;
        this.idProdutoUnidade = idProdutoUnidade;
        this.nome = nome;
        this.gtin = gtin;
        this.valor = valor;
        this.dataCadastro = dataCadastro;

    }
}
