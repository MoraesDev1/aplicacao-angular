import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GrupoDialogEditandoComponent } from './grupo/grupo-dialog-editando/grupo-dialog-editando.component';
import { GrupoDialogExcluindoComponent } from './grupo/grupo-dialog-excluindo/grupo-dialog-excluindo.component';
import { GrupoDialogInserindoComponent } from './grupo/grupo-dialog-inserindo/grupo-dialog-inserindo.component';
import { GrupoComponent } from './grupo/grupo.component';
import { MarcaDialogEditandoComponent } from './marca/marca-dialog-editando/marca-dialog-editando.component';
import { MarcaDialogExcluindoComponent } from './marca/marca-dialog-excluindo/marca-dialog-excluindo.component';
import { MarcaDialogInserindoComponent } from './marca/marca-dialog-inserindo/marca-dialog-inserindo.component';
import { MarcaComponent } from './marca/marca.component';
import { ProdutosDialogEditandoComponent } from './produtos/produtos-dialog-editando/produtos-dialog-editando.component';
import { ProdutosDialogExcluindoComponent } from './produtos/produtos-dialog-excluindo/produtos-dialog-excluindo.component';
import { ProdutosDialogInserindoComponent } from './produtos/produtos-dialog-inserindo/produtos-dialog-inserindo.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SubgrupoDialogEditandoComponent } from './subgrupo/subgrupo-dialog-editando/subgrupo-dialog-editando.component';
import { SubgrupoDialogExcluindoComponent } from './subgrupo/subgrupo-dialog-excluindo/subgrupo-dialog-excluindo.component';
import { SubgrupoDialogInserindoComponent } from './subgrupo/subgrupo-dialog-inserindo/subgrupo-dialog-inserindo.component';
import { SubgrupoComponent } from './subgrupo/subgrupo.component';
import { UnidadeDialogEditandoComponent } from './unidade/unidade-dialog-editando/unidade-dialog-editando.component';
import { UnidadeDialogExcluindoComponent } from './unidade/unidade-dialog-excluindo/unidade-dialog-excluindo.component';
import { UnidadeDialogInserindoComponent } from './unidade/unidade-dialog-inserindo/unidade-dialog-inserindo.component';
import { UnidadeComponent } from './unidade/unidade.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProdutosComponent,
    GrupoComponent,
    SubgrupoComponent,
    MarcaComponent,
    UnidadeComponent,
    GrupoDialogInserindoComponent,
    GrupoDialogEditandoComponent,
    GrupoDialogExcluindoComponent,
    MarcaDialogInserindoComponent,
    MarcaDialogEditandoComponent,
    MarcaDialogExcluindoComponent,
    ProdutosDialogInserindoComponent,
    ProdutosDialogEditandoComponent,
    ProdutosDialogExcluindoComponent,
    SubgrupoDialogInserindoComponent,
    SubgrupoDialogEditandoComponent,
    SubgrupoDialogExcluindoComponent,
    UnidadeDialogInserindoComponent,
    UnidadeDialogEditandoComponent,
    UnidadeDialogExcluindoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
