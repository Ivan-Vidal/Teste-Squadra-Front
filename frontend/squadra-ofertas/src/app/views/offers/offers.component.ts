import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  allOffers!: any[] 

  constructor(private productService: ProductService) { }

   ngOnInit() {
     this.productService.getAllProducts().subscribe(
      next =>   this.allOffers = next,
      error => console.log(error) )

  }


}
