import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-greet',
    template: 
    `<h2>{{Name}}</h2>
    <h2>{{Message}}</h2>`,
    styles:
    [
   `
   h2{
       color:blue;
       background:yellow
   }
   
   `

    ]
})
export class GreetComponent implements OnInit {

    Name:string
    GreetMessage:string
    constructor() { 

        this.Name ="Sachin Tendulkar"
        this.GreetMessage="How are u"+this.Name
    }

    ngOnInit() { 

    }

}