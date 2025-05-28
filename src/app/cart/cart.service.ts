import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiCartUrl = environment.apiUrl + "/cart";
  apiCheckoutUrl = environment.apiUrl + "/checkout";

  constructor(private http: HttpClient) { }

  addToCart(product: Product):Observable<void>{
    return this.http.post<void>(this.apiCartUrl,product);
  }

  getCart(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiCartUrl);
  }

  clearCart():Observable<void>{
    return this.http.delete<void>(this.apiCartUrl);
  }

  checkoutCart(products: Product[]):Observable<void>{
    return this.http.post<void>(this.apiCheckoutUrl,products);
  }
}
