import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
    selector: 'app-menu',
    template: `

    <nav class="navbar navbar-inverse">
       
    <ul class="nav navbar-nav">
    
<li *ngFor="let menu of menus">
 <a routerLink="{{menu | lowercase}}">{{menu}}</a>
</li>
    </ul>
    </nav>
    
    `,
    providers:[MenuService]
})
export class MenuComponent implements OnInit {

    menus:string[]
    constructor(menuservice:MenuService) { 

      this.menus=menuservice.getMenus()

    }

    ngOnInit() { 

    }

}