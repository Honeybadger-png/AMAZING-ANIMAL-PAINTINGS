import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-view',
  standalone: false,
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit {
  cartItems: Product[] = []

  constructor(private cartService: CartService){

  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(data=>{
      this.cartItems = data;
    })
  }

}
