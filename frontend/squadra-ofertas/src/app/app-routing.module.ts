import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './views/cart/cart.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { HomeComponent } from './views/home/home.component';
import { OffersDetailComponent } from './views/offers-detail/offers-detail.component';
import { OffersComponent } from './views/offers/offers.component';

const routes: Routes = [
  {
    path: "", 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "offers",
    component: OffersComponent
  },
  {
    path: "details/:id",
    component: OffersDetailComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "**",
    component: ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
