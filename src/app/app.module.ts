import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterModule, Routes,Router } 
from '@angular/router';


import { AppComponent } from './app.component';
import { GreetComponent } from './greet.component';
import { HelloWorldComponent } from './Helloworld.component';
import { ProductComponent } from './product.component';
import { MenuComponent } from './menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user.component';
import { ProductService } from './product.service';
import { AddToCartComponent } from './addToCart.component';
import { CartService } from './cart.service';
import { CartDetailsComponent } from './cartdetails.component';
import { LoginComponent } from './Header_Login_Profile/login.component';
import { HeaderComponent } from './Header_Login_Profile/header.component';
import { LoginService } from './Header_Login_Profile/login.service';
import { ParentComponent } from './Header_Login_Profile/parent.component';
import { ChildCounterComponent } from './Header_Login_Profile/childcounter.component';
import { PageNotFoundComponent } from './PageNotFoundComponent.component';

let roots : Routes =[
//http://localhost:8080/product


//http://localhost:8080
{

  path:'',
  component:HelloWorldComponent
},

  {
    path:'products',
    component:ProductComponent,
    
  },

  //http://localhost:8080/product
  {
    path:'cartdetails',
    component:CartDetailsComponent
  },
//http://localhost:8080/parent
  {
    path:'parent',
    component:ParentComponent
  },

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }


]






@NgModule({

  //Mention all componets here



  declarations: [
    AppComponent,
    GreetComponent,
    HelloWorldComponent,
    ProductComponent,
    MenuComponent,
    WelcomeComponent,
    UserComponent,
    AddToCartComponent,
    CartDetailsComponent,
    LoginComponent,
    HeaderComponent,
    ParentComponent,
    ChildCounterComponent,

    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(roots)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
