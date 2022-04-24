import { Observable } from 'rxjs';

import {Injectable} from '@angular/core'
import { Offers } from 'src/app/components/product/product.model'


@Injectable()
export class CartService {

    items: Offers[] = []
    counter: any;

    addOfferCart(item:Offers){
        this.items.push(item)
        sessionStorage.setItem("cart",JSON.stringify(this.items))
    }

    itemsCart(): Observable<number> {
        return  new Observable()
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

