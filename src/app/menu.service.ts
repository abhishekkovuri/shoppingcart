import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
    menus: string[]=["Products",
    "CartDetails","Login","Profile"]
    constructor() { }

    getMenus():string[]{
     /* this.menus =["Products","ProductDetails",
      "CartDetails","Login","Profile"]*/

      return this.menus

    }

}