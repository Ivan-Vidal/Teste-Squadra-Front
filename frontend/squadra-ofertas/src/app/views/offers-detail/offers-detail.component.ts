import { ProductService } from 'src/app/components/product/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offers-detail',
  templateUrl: './offers-detail.component.html',
  styleUrls: ['./offers-detail.component.css']
})
export class OffersDetailComponent implements OnInit {
  fieldId: any;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:any) =>{
        const id = params['id'];
        console.log(id)
        this.productService.getProductId(id).subscribe(details =>{
          console.log(details)
          this.fieldId = details
        }); 
      }
    )
  }
}


