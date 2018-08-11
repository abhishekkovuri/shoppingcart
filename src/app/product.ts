export class Product{


    productname:string
    productid:number
    productimage:string
    productprice:number
    productcategory:string


    constructor(id:number,name:string,image:string,
        price:number,
        category:string
    ){
   this.productname=name
   this.productid=id
   this.productprice=price
   this.productcategory=category
   this.productimage=image
    }
}