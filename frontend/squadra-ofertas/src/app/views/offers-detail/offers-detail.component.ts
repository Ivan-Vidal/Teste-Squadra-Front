import { Subject } from 'rxjs';
import { ModalAddComponent } from '../../components/product/modals/modal-add/modal-add.component';
import { Offers } from './../../components/product/product.model';
import { ProductService } from 'src/app/components/product/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-offers-detail',
  templateUrl: './offers-detail.component.html',
  styleUrls: ['./offers-detail.component.css']
})
export class OffersDetailComponent implements OnInit {
  Offers!: Offers;
  imgSelected: string = 'assets/imgs/cafe-manha.svg'
  imgs = [
    'assets/imgs/cafe-manha.svg',
    'assets/imgs/hamburgue.svg',
    'assets/imgs/entreterimento-icon.svg'
  ]

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, private cartService: CartService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:any) =>{
        const id = params['id'];
        this.productService.getProductId(id).subscribe(details =>{
        this.Offers = details
        }); 
      }
    )
  }
    addOfferToCart(offer: Offers) {
      this.cartService.addOfferCart(offer)
      this.openDialog()
      this.router.navigate(['offers'])
      console.log(offer)       
  }

  selectImg(img: string) {
    this.imgSelected = img
  }

  openDialog() {
    this.dialog.open(ModalAddComponent, {
      width: '300px',
      height: '300px'
    });
}

}
