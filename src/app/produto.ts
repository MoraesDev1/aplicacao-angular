import { ProdutoInterface } from "./model/produto";

export class Produto implements ProdutoInterface {
    id?: Number;
    idProdutoSubgrupo: Number;
    idProdutoMarca: Number;
    idProdutoUnidade: Number;
    nome: String;
    gtin: String;
    valor: Number;
    dataCadastro: String;

    constructor(idProdutoSubgrupo: Number,
        idProdutoMarca: Number,
        idProdutoUnidade: Number,
        nome: String,
        gtin: String,
        valor: Number,
        dataCadastro: String,
        id?: Number) {
        this.id = id;
        this.idProdutoSubgrupo = idProdutoSubgrupo;
        this.idProdutoMarca = idProdutoMarca;
        this.idProdutoUnidade = idProdutoUnidade;
        this.nome = nome;
        this.gtin = gtin;
        this.valor = valor;
        this.dataCadastro = dataCadastro;

    }
}
