import { Component, OnInit } from '@angular/core';
import { Product } from '../app/product';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css'],
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
        alert("Product Details "+product.productname+"  "+product.productprice)
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