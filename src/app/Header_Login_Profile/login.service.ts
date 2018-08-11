import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

//NewsPaper Agency
export class LoginService {
    

    //Subject--- News

     loginsubject:Subject<string>=new Subject<string>()


     //Observables/boradcasters

     loginbroadcatser= this.loginsubject.asObservable()


    //userName:string
    constructor() { }


    SetUserName(username){
       //this.userName =username
       //EMit Information //Dropping paper
      // alert("SetUSerName of service is called"+username)
       this.loginsubject.next(username)
    }

}