import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ListaVendaComponent } from './modules/lista-venda/lista-venda/lista-venda.component';
import { RelatorioVendasComponent } from './modules/lista-venda/relatorio-vendas/relatorio-vendas.component';
import { VendasComponent } from './modules/lista-venda/vendas/vendas.component';
import { ListaProdutoComponent } from './modules/listaProduto/lista-produto/lista-produto.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [{
  path:'',
  component:DefaultComponent,
    children: [{
      path:'',
      component: DashboardComponent,
    },
    {
      path:'listaproduto',
      component: ListaProdutoComponent,
    },
    {
      path:'vendas',
      component: VendasComponent,
    },
    {
      path:'listavenda',
      component: ListaVendaComponent,
    },
    {
      path:'relatoriovenda',
      component: RelatorioVendasComponent,
    },
    {
      path:'posts',
      component: PostsComponent,
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
