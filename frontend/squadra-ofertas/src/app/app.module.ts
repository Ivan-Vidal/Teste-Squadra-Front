import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { ButtonComponent } from './components/template/button/button.component';
import { HomeComponent } from './views/home/home.component';
import { OffersComponent } from './views/offers/offers.component';
import { CardOfferComponent } from './components/template/card-offer/card-offer.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { OffersDetailComponent } from './views/offers-detail/offers-detail.component';


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
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
