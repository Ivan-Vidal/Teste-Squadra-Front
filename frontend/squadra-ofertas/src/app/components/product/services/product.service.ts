import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrl = "http://localhost:3004/ofertas";
}
