import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { UnidadeDialogInserindoComponent } from './unidade-dialog-inserindo/unidade-dialog-inserindo.component';
import { UnidadeDialogEditandoComponent } from './unidade-dialog-editando/unidade-dialog-editando.component';
import { UnidadeDialogExcluindoComponent } from './unidade-dialog-excluindo/unidade-dialog-excluindo.component';
import { UnidadeInterface } from '../model/unidade';
import { UnidadeService } from '../services/unidade.service';
import { ProdutoInterface } from '../model/produto';
import { ProdutoService } from '../services/produto.service';
import { Unidade } from '../unidade';
@Component({
  selector: 'app-unidade',
  templateUrl: './unidade.component.html',
  styleUrls: ['./unidade.component.css']
})
export class UnidadeComponent {

  unidade: UnidadeInterface[] = [];
  produto: ProdutoInterface[] = [];

  displayedColumns = ['botoes', 'sigla', 'descricao'];

  constructor(public dialog: MatDialog, private unidadeService: UnidadeService, private produtoService: ProdutoService) {
    this.getUnits();
  }

  getUnits() {
    this.unidadeService.getUnits().subscribe(unidade => this.unidade = unidade);
    this.produtoService.getProducts().subscribe(produto => this.produto = produto);
  }

  deleteUnit(idUnidade: Number) {
    const relatedItens = this.produto.filter(produto => produto.idProdutoUnidade === idUnidade);
    if (relatedItens.length == 0) {
      this.unidadeService.deleteUnit(idUnidade).subscribe(_ => this.getUnits());
    } else {
      alert(`Ação bloqueada\nExistem ${relatedItens.length} produtos dentro desta Unidade no momento`);
    }
  }

  postUnit(unit: Unidade) {
    this.unidadeService.postUnit(unit).subscribe(_ => this.getUnits());
  }

  editUnit(unit: Unidade) {
    this.unidadeService.editUnit(unit.id!, unit).subscribe(_ => this.getUnits());
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(UnidadeDialogInserindoComponent, {
      width: '100%',
    });
    dialogRef.afterClosed().subscribe(newUnit => {
      if (newUnit) {
        this.postUnit(newUnit);
      }
    });
  }
  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string, selectedUnit: Unidade): void {
    const dialogRef = this.dialog.open(UnidadeDialogEditandoComponent, {
      width: '100%',
      height: '90vh',
      data: { selectedUnit }
    });
    dialogRef.afterClosed().subscribe(editedUnit => {
      if (editedUnit) {
        this.editUnit(editedUnit);
        window.location.reload();
      }
    });
  }

  openDialogExclude(enterAnimationDuration: string, exitAnimationDuration: string, idUnidade: Number): void {
    const dialogRef = this.dialog.open(UnidadeDialogExcluindoComponent, {
      width: '50%',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteUnit(idUnidade);
        window.location.reload();
      }
    });
  }
}
