import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from './modules/shared/main-nav/main-nav/main-nav.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: MainNavComponent,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'produtos', component: MainNavComponent,
    loadChildren: () => import('./modules/produto/produto.module').then(m => m.ProdutoModule),
  },
  {
    path: 'carrinho', component: MainNavComponent,
    loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
