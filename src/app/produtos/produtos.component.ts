import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GrupoService } from '../services/grupo.service';
import { ProdutosDialogEditandoComponent } from './produtos-dialog-editando/produtos-dialog-editando.component';
import { ProdutosDialogExcluindoComponent } from './produtos-dialog-excluindo/produtos-dialog-excluindo.component';
import { ProdutoInterface } from '../model/produto';
import { ProdutoService } from '../services/produto.service';
import { ProdutosDialogInserindoComponent } from './produtos-dialog-inserindo/produtos-dialog-inserindo.component';
import { Produto } from '../produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent {
  produto: ProdutoInterface[] = [];

  displayedColumns = ['botoes', 'nome', 'gtin', 'valor', 'dataCadastro'];

  constructor(private produtoService: ProdutoService, public dialog: MatDialog) {
    this.getProducts();
  }

  getProducts() {
    this.produtoService.getProducts().subscribe(produto => this.produto = produto);
  }

  deleteProduct(idProduct: Number) {
    this.produtoService.deleteProducts(idProduct).subscribe(_ => this.getProducts());
  }

  postProduct(product: Produto) {
    this.produtoService.postProduct(product).subscribe(_ => this.getProducts());
  }

  editProduct(product: Produto) {
    this.produtoService.editProduct(product.id!, product).subscribe(_ => this.getProducts());
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(ProdutosDialogInserindoComponent, {
      width: '100%',
    });
    dialogRef.afterClosed().subscribe(newProduct => {
      if (newProduct) {
        this.postProduct(newProduct);
        window.location.reload();
      }
    });
  }
  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string, selectedProduct: Produto): void {
    const dialogRef = this.dialog.open(ProdutosDialogEditandoComponent, {
      width: '100%',
      height: '90vh',
      data: { selectedProduct }
    });
    dialogRef.afterClosed().subscribe(editedProduct => {
      if (editedProduct) {
        this.editProduct(editedProduct);
        window.location.reload();
      }
    });
  }

  openDialogExclude(enterAnimationDuration: string, exitAnimationDuration: string, idProduct: Number): void {
    const dialogRef = this.dialog.open(ProdutosDialogExcluindoComponent, {
      width: '50%',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteProduct(idProduct);
        window.location.reload();
      }
    });
  }

}
