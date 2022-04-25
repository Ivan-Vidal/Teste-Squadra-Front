import { Observable, Subject } from 'rxjs';

import {Injectable} from '@angular/core'
import { Offers } from 'src/app/components/product/product.model'


@Injectable()
export class CartService {

    private lengthItemsSubject: Subject<number> = new Subject<number>()
    public get lengthItems$(): Observable<number> {
        return this.lengthItemsSubject.asObservable()
    }

    items: Offers[] = []
    counter: any;

    setLengthItems(number: number) {
        this.lengthItemsSubject.next(number)
    }

    addOfferCart(item: Offers) {
        this.items.push(item)
        sessionStorage.setItem("cart", JSON.stringify(this.items))
        this.setLengthItems(this.items.length)

    }

    total(): number {
        return this.items
            .map(item => item.valor)
            .reduce((prev, value) => prev + value, 0)
    }

    removeItem(offer: Offers) {
        this.items.splice(this.items.indexOf(offer), 1)
        //salva na sessão
        sessionStorage.setItem("cart", JSON.stringify(this.items))
        this.setLengthItems(this.items.length)
    }
}

