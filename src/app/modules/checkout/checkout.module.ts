import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CheckoutComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CheckoutComponent],
  exports: [
    RouterModule,
  ],
})
export class CheckoutModule {

}
