import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product';
import { CartService } from './cart.service';
@Component({
    selector: 'app-addToCart',
    template: `<button class="btn btn-primary"
      (click)="AddInCart()"
    >Add To Cart</button>`,

    //providers:[CartService]
})
export class AddToCartComponent implements OnInit {
    @Input()
    SelectedProduct: Product  //Parent will set product  to SelectedProduct property

   /// private _cartservice:CartService
    constructor(private cartservice:CartService) {
       //this. _cartservice=cartservice
     }
    ngOnInit() { }
     AddInCart()
    {
        console.log(this.SelectedProduct)
        alert("Product Added"+
        this.SelectedProduct.productname)
        this.cartservice.AddToCart
        (this.SelectedProduct)
        
    }
}