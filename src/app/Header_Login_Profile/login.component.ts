import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { CartService } from '../cart.service';

@Component({
    selector: 'login',
    template:`<h3>Login Component</h3>
              Enter Username: <input type="text" [(ngModel)]="name" /><br>
              Enter Password: <input type="password" [(ngModel)]="password" /><br>
              <button (click)="login()">Login</button>
        ` 
})
export class LoginComponent{
    name:string="admin";
    password:string="admin";
    constructor(private loginservice:LoginService,
      ) { }
    login():void{
        //alert("login method of logincomponent"+this.name)
        this.loginservice.SetUserName(this.name)
    }
}