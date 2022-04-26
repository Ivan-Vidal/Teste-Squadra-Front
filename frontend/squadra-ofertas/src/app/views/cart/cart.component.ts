import { Offers } from './../../components/product/product.model';
import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';
import { ModalRemoveComponent } from 'src/app/components/product/modals/modal-remove/modal-remove.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalSucessComponent } from 'src/app/components/product/modals/modal-sucess/modal-sucess.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  removeResult: boolean = false;
  items: Offers[] = []
  theAmount: number = 1
  constructor(private cartService: CartService,
    private dialog: MatDialog) { }
    
    ngOnInit(): void {
      let cartSession = sessionStorage.getItem("cart");
      if (cartSession != null) {
        this.cartService.items = JSON.parse(cartSession);
        this.items = this.cartService.items
      }
      
      this.cartService.lengthItems$.subscribe(() => {
        this.items = this.cartService.items
      })  //subscribe para pegar o valor do length do carrinho
    }
    
    total(): number {
      return this.cartService.total()
    }
    
    removeOffer(offer: Offers) {
      const dialogRef = this.dialog.open(ModalRemoveComponent);
      dialogRef.afterClosed().subscribe((result: any) => {
        if (result) {
          this.cartService.removeItem(offer)
        }
      });
    }
    
    onSubmit() {
      this.dialog.open(ModalSucessComponent);

      while (this.items.length) {
       
       for (let offer of this.items) {
        this.cartService.removeItem(offer)
       }
        
      }
      
    }
    
  }