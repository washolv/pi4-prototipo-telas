import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, registerLocaleData } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import localePt from '@angular/common/locales/pt';


const routes: Routes = [
];
registerLocaleData(localePt, 'pt');

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModule,
    CurrencyMaskModule,
    MatSlideToggleModule,
    MatSelectModule,
    NgbModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [

  ],
  exports: [
    RouterModule,
  ],
  providers: [NgbRatingConfig,
    CurrencyPipe,
    {
      provide: LOCALE_ID,
      useValue: "pt"
    }
  ],
  entryComponents: [
  ],
  bootstrap: [
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ProdutoModule { }
