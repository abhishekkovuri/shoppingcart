import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from './product';
import { Router } from '@angular/router';
@Component({
    selector: 'app-CartDetails',
    templateUrl: './cartdetails.component.html',
    styleUrls:['./cartdetails.component.css']
})
export class CartDetailsComponent implements OnInit {

    CartProducts: Product[]
    constructor(private cartservice:CartService, private router: Router) {

        this.CartProducts =new Array<Product>()
        this.CartProducts =this.cartservice.GetCartProducts()

        //console.log("Cart Products"+this.CartProducts)

       
     }

    ngOnInit() { 

    }
MyFunction(){
this.router.navigate(['home']);
}
}