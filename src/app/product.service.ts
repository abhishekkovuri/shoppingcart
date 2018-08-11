import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {
    
    products: Product[]
    constructor() { }



    getProducts():Product[]{
        this.products=new Array<Product>()
        this.products.push(new Product(1, "OnePlus 5", "./assets/images/1.jpg", 37999, "Mobile"));
this.products.push(new Product(2, "Moto G5 Plus", "./assets/images/2.jpg", 13999, "Mobile"));
this.products.push(new Product(3, "Nokia 6", "./assets/images/3.jpg", 14999, "Mobile"));
this.products.push(new Product(4, "Samsung Galaxy Note 8", "./assets/images/4.jpg", 67900, "Mobile"));
this.products.push(new Product(5, "Apple Iphone 8", "./assets/images/5.jpg", 64000, "Mobile"));
this.products.push( new Product(6, "Dell Laptop", "./assets/images/6.jpg", 52000, "Laptop"));
this.products.push( new Product(7, "Canon DSLR", "./assets/images/7.jpg", 65000,  "Camera"));
this.products.push( new Product(8, "HP Printer", "./assets/images/8.jpg", 4000,  "Printer"));
this.products.push(new Product(9, "Apple iPad", "./assets/images/9.jpg", 24900,"Tab"));
        return this.products;
    }

}