import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutoModule } from './modules/produto/produto.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { JwtInterceptor } from './modules/shared/helpers/JwtInterceptor';
import { ErrorInterceptor } from './modules/shared/helpers/error.interceptor';
import { NgxMaskModule } from 'ngx-mask';
import { CheckoutModule } from './modules/checkout/checkout.module';
import { MainNavClienteComponent } from './modules/shared/main-nav/main-nav-cliente/main-nav-cliente.component';
import { MainNavComponent } from './modules/shared/main-nav/main-nav/main-nav.component';


const routes: Routes = [
  { path: '', component: AppComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainNavClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    HttpClientModule,
    ProdutoModule,
    CheckoutModule,
    SharedModule,
    RouterModule.forChild(routes),
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    MatProgressSpinnerModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
