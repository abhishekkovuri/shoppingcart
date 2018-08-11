import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-helloworld',
    template: `<h1>{{Message}}</h1>`
})
export class HelloWorldComponent implements OnInit {

    Message:string ="Welcome To Mobile DuNiYaA!!!!!!"
    constructor() { }

    ngOnInit() { 

    }

}