import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class CartService {
    CartProducts: Product[]
    constructor() { 

        this.CartProducts =new Array<Product>()
        console.log(this.CartProducts)

    }

    AddToCart(product:Product){
        this.CartProducts.push(product)
       // console.log(this.CartProducts)
    }

    GetCartProducts(): Product[]{
       // alert("Call Get Products")
        return this.CartProducts
    }

}