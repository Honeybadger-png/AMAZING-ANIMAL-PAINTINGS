import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiUrl = environment.apiUrl + "/carts";

  constructor(private http: HttpClient) { }

  addToCart(product: Product):Observable<void>{
    return this.http.post<void>(this.apiUrl,product);
  }

  getCart(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  clearCart():Observable<void>{
    return this.http.delete<void>(this.apiUrl);
  }
}
