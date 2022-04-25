import { Router } from '@angular/router';
import { CartService } from './../../../views/cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  counter: number = 0

  constructor(private cartService: CartService,
    private route: Router) {
    this.cartService.lengthItems$.subscribe((length: number) => {
      this.counter = length
    })  //subscribe para pegar o valor do length do carrinho
  }

  ngOnInit(): void {
    let cartSession = sessionStorage.getItem("cart")
    cartSession = cartSession != null ? JSON.parse(cartSession) : []
    if (cartSession != null) {
      this.cartService.setLengthItems(cartSession.length)
    }


  }

  navigateToCart() {
    this.route.navigate(['cart'])
  }

}
