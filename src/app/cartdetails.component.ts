import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from './product';

@Component({
    selector: 'app-CartDetails',
    template: `<h1>Cart Products</h1>
    <table>
<tr>
<th>Product Name</th>
<th>Product Image</th>
</tr>

<tr *ngFor="let product of CartProducts">
 <td>{{product.productname}}</td>
 <td><img [src]="product.productimage"/></td>
</tr>

    </table>
    
    `,

    styles:[
        `
        table,th,tr,td{
            border:1px solid black
        }

        img{
            width:auto;
            height:100px;
        }
        `
    ]
})
export class CartDetailsComponent implements OnInit {

    CartProducts: Product[]
    constructor(private cartservice:CartService) {

        this.CartProducts =new Array<Product>()
        this.CartProducts =this.cartservice.GetCartProducts()

        //console.log("Cart Products"+this.CartProducts)

        
     }

    ngOnInit() { 

    }

}