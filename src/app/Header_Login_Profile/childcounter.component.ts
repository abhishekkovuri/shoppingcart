import { Component, OnInit, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
    selector: 'app-childCounter',
    template: `<h1>Child Component </h1>

    
    <button (click)="Increment()">Increment</button>
    
    `
})
export class ChildCounterComponent implements OnInit {
    counter:number =0

    @Output()
    change:EventEmitter<number> =new EventEmitter()

    constructor() { }

    ngOnInit() { 

    }

    Increment(){
        this.counter++
        //Raise Event: Pass value to parent
        this.change.emit(this.counter)
    }

}