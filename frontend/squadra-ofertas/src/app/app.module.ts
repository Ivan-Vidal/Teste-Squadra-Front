import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';

import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { ButtonComponent } from './components/template/button/button.component';
import { HomeComponent } from './views/home/home.component';
import { OffersComponent } from './views/offers/offers.component';
import { CardOfferComponent } from './components/template/card-offer/card-offer.component';
import { OffersDetailComponent } from './views/offers-detail/offers-detail.component';
import { CartComponent } from './views/cart/cart.component';

import { ProductService } from 'src/app/components/product/product.service';
import { CartService } from './views/cart/cart.service';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatDialogModule} from '@angular/material/dialog';
import { ModalAddComponent } from './components/product/modals/modal-add/modal-add.component';
import { ModalRemoveComponent } from './components/product/modals/modal-remove/modal-remove.component';
import { ModalSucessComponent } from './components/product/modals/modal-sucess/modal-sucess.component';




registerLocaleData(ptBr);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ErrorPageComponent,
    ButtonComponent,
    OffersComponent,
    CardOfferComponent,
    OffersDetailComponent,
    CartComponent,
    ModalAddComponent,
    ModalRemoveComponent,
    ModalSucessComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule

  ],
  providers: [
    CartService,
    ProductService,
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
