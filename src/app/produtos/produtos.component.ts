import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { ProdutosDialogInserindoComponent } from './produtos-dialog-inserindo/produtos-dialog-inserindo.component';
import { ProdutosDialogEditandoComponent } from './produtos-dialog-editando/produtos-dialog-editando.component';
import { ProdutosDialogExcluindoComponent } from './produtos-dialog-excluindo/produtos-dialog-excluindo.component';
import { ProdutoInterface } from '../model/produto';
import { ProdutoService } from '../services/produto.service';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
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

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ProdutosDialogInserindoComponent, {
      width: '100%',
    });
  }
  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ProdutosDialogEditandoComponent, {
      width: '100%',
      height: '90vh'
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
