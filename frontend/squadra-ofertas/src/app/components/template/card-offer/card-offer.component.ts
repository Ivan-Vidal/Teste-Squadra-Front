import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-offer',
  templateUrl: './card-offer.component.html',
  styleUrls: ['./card-offer.component.css']
})
export class CardOfferComponent implements OnInit {
@Input() title!: string;
@Input() description!: string;
@Input() price!: number;
@Input() id!:number;
@Input() type!: 'hotel' | 'rest' | 'entr';
imgType!: string
  constructor(private route: Router) { }

  ngOnInit(): void {

    if (this.type === 'hotel') {
      
     this.imgType = 'hotel-icon.svg'

    } if (this.type === 'rest') {

      this.imgType = 'chef-icon.svg'

    } if (this.type === 'entr') {
      
      this.imgType = 'entreterimento-icon.svg'
    }
  }


  purchaseOffer(id: number) {
    this.route.navigate(['details', id])
  }
}
