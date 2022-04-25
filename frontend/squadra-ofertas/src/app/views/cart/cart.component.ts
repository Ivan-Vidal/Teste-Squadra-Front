import { Offers } from './../../components/product/product.model';
import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  removeResult: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
      let cartSession = sessionStorage.getItem("cart");
    
      if(cartSession != null){
        this.cartService.items = JSON.parse(cartSession);
      }
    }

    items(): Offers[] {
      return this.cartService.items;
    }
    
    total(): number {
       return this.cartService.total()
    }

    removeOffer(offer: Offers) {
        return this.cartService.removeItem(offer)
      }
        
}