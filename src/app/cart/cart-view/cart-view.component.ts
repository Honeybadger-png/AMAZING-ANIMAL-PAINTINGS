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
  totalPrice = 0;

  constructor(private cartService: CartService){

  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(data=>{
      this.cartItems = data;
      this.totalPrice = this.getTotalPrice();
    })
  }

  getTotalPrice():number {
    let total = 0;
    this.cartItems.map(item=>{
      total += item.price; 
    })
    return total;
  }

  clearCart():void{
    this.cartService.clearCart().subscribe();
  }

  checkout():void{
    this.cartService.checkoutCart(this.cartItems).subscribe();
  }

}
