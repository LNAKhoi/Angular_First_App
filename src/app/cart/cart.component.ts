import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
    ) { }

  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address:'',
    phoneNumber: ''
  });

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    window.alert("Your order has been submitted!");
    this.checkoutForm.reset();
  };
}
