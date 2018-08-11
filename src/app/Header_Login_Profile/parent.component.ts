import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
   <app-childCounter
    (change)="GetValueFromCHild($event)">
    </app-childCounter> <br/>

    <h1>Value from child :{{counter}}</h1>
   
    `
})
export class ParentComponent implements OnInit {

    counter: number
    constructor() { }

    GetValueFromCHild(value){
        this.counter =value
    }

    ngOnInit() { 

    }

}