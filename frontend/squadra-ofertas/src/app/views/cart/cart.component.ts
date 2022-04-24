import { MatDialog } from '@angular/material/dialog';
import { Offers } from './../../components/product/product.model';
import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';
import { ModalRemoveComponent } from 'src/app/components/product/modals/modal-remove/modal-remove.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  removeResult: boolean = false;

  constructor(private cartService: CartService, private dialog: MatDialog) { }

  ngOnInit(): void {
      let cartSession = sessionStorage.getItem("cart");
    
      if(cartSession != null){
        this.cartService.items = JSON.parse(cartSession);
        console.log()
      }

    }


    items(): Offers[] {
      return this.cartService.items;
    }
    
    total(): number {
       return this.cartService.total()
    }

    removeOffer(offer: Offers) {
      this.openDialog()
           
      if (this.removeResult === true) {
        return this.cartService.removeItem(offer)
      }
        
     
    }

    openDialog() {
      const dialogRef =  this.dialog.open(ModalRemoveComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
         return  this.removeResult = result
      });
    }
}