import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Grupo } from '../model/grupo';
import { GrupoService } from '../services/grupo.service';

import { MarcaDialogEditandoComponent } from './marca-dialog-editando/marca-dialog-editando.component';
import { MarcaDialogExcluindoComponent } from './marca-dialog-excluindo/marca-dialog-excluindo.component';
import { MarcaInterface } from '../model/marca';
import { MarcaService } from '../services/marca.service';
import { ProdutoInterface } from '../model/produto';
import { ProdutoService } from '../services/produto.service';
import { Marca } from '../marca';


@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent {
  marca: MarcaInterface[] = [];
  produto: ProdutoInterface[] = [];

  displayedColumns = ['botoes', 'nome', 'descricao'];

  constructor(public dialog: MatDialog, private marcaService: MarcaService, private produtoService: ProdutoService) {
    this.getBrands();
  }

  getBrands() {
    this.marcaService.getBrands().subscribe(marca => this.marca = marca);
    this.produtoService.getProducts().subscribe(produto => this.produto = produto);
  }

  deleteBrand(idBrand: Number) {
    const relatedItens = this.produto.filter(produto => produto.idProdutoMarca === idBrand);
    if (relatedItens.length == 0) {
      this.marcaService.deleteBrand(idBrand).subscribe(_ => this.getBrands());
    } else {
      alert(`Ação bloqueada\nExistem ${relatedItens.length} produtos dentro desta Marca no momento`);
    }
  }

  postBrand(brand: Marca) {
    this.marcaService.postBrand(brand).subscribe(_ => this.getBrands());
  }

  editBrand(brand: Marca) {
    this.marcaService.editBrand(brand.id!, brand).subscribe(_ => this.getBrands());
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(MarcaDialogInserindoComponent, {
      width: '100%',
    });
    dialogRef.afterClosed().subscribe(newBrand => {
      if (newBrand) {
        this.postBrand(newBrand);
      }
    });
  }

  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string, selectedBrand: Marca): void {
    const dialogRef = this.dialog.open(MarcaDialogEditandoComponent, {
      width: '100%',
      height: '90vh',
      data: { selectedBrand }
    });
    dialogRef.afterClosed().subscribe(editedBrand => {
      if (editedBrand) {
        this.editBrand(editedBrand);
        window.location.reload();
      }
    });
  }

  openDialogExclude(enterAnimationDuration: string, exitAnimationDuration: string, idBrand: Number): void {
    const dialogRef = this.dialog.open(MarcaDialogExcluindoComponent, {
      width: '50%',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteBrand(idBrand);
        window.location.reload();
      }
    })
  }
}
