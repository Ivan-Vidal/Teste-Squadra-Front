import { Observable, Subject } from 'rxjs';

import {Injectable} from '@angular/core'
import { Offers } from 'src/app/components/product/product.model'


@Injectable()
export class CartService {

    items: Offers[] = []
    counter!: number;
    public itemCart$ = new Subject<number>()


    ngOnInit(): void {
        let cartSession = sessionStorage.getItem("cart");
    
        if(cartSession != null){
          this.items = JSON.parse(cartSession);
          this.counter = this.items.length
          console.log(this.counter)
          this.setItemCart(this.counter)
        }        
    }

   
    setItemCart(value: number) {
        this.itemCart$.next(value); 
      }

    addOfferCart(item:Offers){
        this.items.push(item)
        sessionStorage.setItem("cart",JSON.stringify(this.items))
    }

    total() :number{
        return this.items
        .map(item => item.valor)
        .reduce((prev, value)=> prev+value, 0)
    }

    removeItem(Offer: Offers){
        this.items.splice(this.items.indexOf(Offer), 1)
        //salva na sessão
        sessionStorage.setItem("cart",JSON.stringify(this.items))   
    }
}

