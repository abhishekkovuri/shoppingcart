import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user',
    template: `
    <!--Target-->
  <!--  <input type="text" [value]="UserName" #name/><br/>
    <input type="text" [value]="Password" #pwd/> <br/>
    <button (click)="ChangeSource(name.value,pwd.value)">SUbmit</button> <br/>-->


    <input type="text" [(ngModel)]="UserName" /><br/>
    <input type="text" [(ngModel)]="Password" /> <br/>
   <p>Source User Name: {{UserName}}</p>
   <p>Source Password: {{Password}}</p>

    
    `
})
export class UserComponent implements OnInit {

    //Source
    UserName:string ="ABHISHEK"
    Password:string ="1234"
    constructor() { }

    ngOnInit() { 

    }

    ChangeSource(name,pwd)
    {
       this.UserName=name
       this.Password=pwd 
    }

}