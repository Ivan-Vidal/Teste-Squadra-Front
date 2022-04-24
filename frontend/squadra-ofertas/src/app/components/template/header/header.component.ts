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

  constructor(private cartService: CartService, private route: Router) { }

  ngOnInit(): void {

    let cartSession = sessionStorage.getItem("cart");
    
    if(cartSession != null){
      this.cartService.items = JSON.parse(cartSession);
    }

    this.counter = this.cartService.items.length
  }

  navigateToCart() {
    this.route.navigate(['cart'])
  }

}
