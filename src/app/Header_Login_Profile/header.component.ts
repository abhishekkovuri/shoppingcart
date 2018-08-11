import { Component} from '@angular/core';
import { LoginService } from './login.service';

@Component({
    selector: 'app-header',
    template:`<h2>Welcome {{username}}</h2>
    
    ` 
})
export class HeaderComponent{   
    username:string;   
    constructor(private loginservice:LoginService) {


        this.loginservice.loginbroadcatser.subscribe(
           res=>
           {
              // alert("Subscribe called"+res)
               this.username=res
           }

        )
     }
}
