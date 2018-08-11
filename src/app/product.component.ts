import { Component, OnInit } from '@angular/core';
import { Product } from '../app/product';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product',
    template: `

<!--<input type="text" [value]="ProductSlogan"  />-->
<!--<button>-->

<!--Template Reference Variable-->
<!--<input type="text" #search
 (blur)="SearchProduct(search.value)" /> <br/>-->

 <!-- $event-->
 <input type="text" placeholder="search products" 
 (blur)="SearchProduct($event.target.value)" /> <br/>

<button class="btn btn-info" (click)="SearchProduct(search.value)">
Search Product</button>

    <table class="table table-bordered">
<tr>
<th>Product Id</th>
<th>Product Name</th>
<th>Product Price</th>
<th>Product Image</th>
<th>Product Category</th>
<th >    Actions      </th>
<th>Delete item</th>
<th>Add items</th>
</tr>


<tr *ngFor="let product of products;let i=index">
<td> {{product.productid}}</td>
<td> {{product.productname}}</td>
<td> {{product.productprice}}</td>
<!--Interpolation-->
<!--<td> <img  src={{product.productimage}}/></td>-->
<!--Property Binding-->
<td> <img  [src]= "product.productimage"/></td>


<td> {{product.productcategory}}</td>
<!--<td><button *ngIf=IsAdmin>Delete</button> </td>-->

<!--<td><button  class="btn btn-primary"
 [disabled]="false">Edit</button> </td>-->

 <td><button class="btn btn-info" (click)="ShowDetails(product)">
 Show Details</button></td>

  <td><button class="btn btn-danger" (click)="DeleteProduct(i)">Delete</button></td>

<app-addToCart [SelectedProduct]="product" >
</app-addToCart>


</tr>
    </table>
    
    `,
    styles:[
    `
    img{
        width:auto;
        height:100px;
    }
    `    
    ],

    providers:[ProductService]
})
export class ProductComponent implements OnInit {

    ProductSlogan:string
    products: Product[] 
    IsAdmin:boolean=true
    constructor(productservice: ProductService) {

       this.products = productservice.getProducts()
       this.ProductSlogan ="New Products Arrived !!"
     
     }

    ngOnInit() { 

    }

    DeleteProduct(i:number)
    {
        this.products.splice(i,1)
    }
    ShowDetails(product:Product){
        alert("Product Details++"+product.productname+"---"+product.productprice)
    }

    SearchProduct(searchString:string)
    {
       // alert("Search FUnction is called+++  "+searchString)

        var searchProduct: string[]=[]

        for(var i=0;i<this.products.length;i++)
        {
            if(this.products[i].productname.toLowerCase().
            startsWith(searchString.toLowerCase()))
            {
                searchProduct.push(this.products[i].productname)
            }
        }

        alert(searchProduct)
    }

}