import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { GrupoComponent } from './grupo/grupo.component';
import { SubgrupoComponent } from './subgrupo/subgrupo.component';
import { MarcaComponent } from './marca/marca.component';
import { UnidadeComponent } from './unidade/unidade.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'produtos', component: ProdutosComponent },
  {path: 'grupo', component: GrupoComponent },
  {path: 'subgrupo', component: SubgrupoComponent },
  {path: 'marca', component: MarcaComponent },
  {path: 'unidade', component: UnidadeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
