import { Component } from '@angular/core';

@Component({
    selector: 'profile',
    template:`
                <h2>Profile Name is {{profileName}}</h2>                
                `
})

export class ProfileComponent{
    profileName:string;
    constructor() { }
}