import { Router } from '@angular/router';
import { CartService } from './../../../views/cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  counter!: number;

  constructor(private cartService: CartService, private route: Router) { }

  ngOnInit(): void {

    let cartSession = sessionStorage.getItem("cart");
    
    if(cartSession != null){
      this.cartService.items = JSON.parse(cartSession);
      this.cartService.itemCart$.subscribe(
        next => {
          this.counter = next
        },
        error => {
          console.log(error)
        }
      )
    }
     
  }

  navigateToCart() {
    this.route.navigate(['cart'])
  }

}
