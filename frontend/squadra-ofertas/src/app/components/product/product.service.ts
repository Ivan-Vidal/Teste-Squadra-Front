import { HttpClient } from '@angular/common/http';

import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Offers } from './product.model';

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrl = "http://localhost:3004/ofertas";

  constructor(private http: HttpClient) {

  }

  getAllProducts(): Observable<any> {
    return this.http.get(this.baseUrl)
    }

    getProductId(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`)
    }
    
  
}
