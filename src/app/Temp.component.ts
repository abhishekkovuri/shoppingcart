import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user',
    template: `
    First Name:<input type="text"
     bind-value="FirstName"
     #fname /><br/>
    Last Name:<input type="text" [(ngModel)]="LastName"
    
    #lname /> <br/>

    <button (click)="Submit(fname.value,lname.value)">Submit</button>
    
    <h1>Full Name: {{FName}} + {{LName}} </h1> <br/>

    <button (click)="Address='Mumbai'">Change SOurce</button><br/>

    <p>SOurce Address : {{Address}}</p>

    

    
    
    `
})
export class UserComponent implements OnInit {
    
    Submit(fanem,lname){
        alert("Submit clicked")
    }


   FName:string ="Mukta"
   LName:string ="Peshave"
   Address:string="Pune"
    constructor() { 
        
    }

    ngOnInit() { 

    }



}

