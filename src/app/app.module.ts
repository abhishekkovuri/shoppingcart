import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterModule, Routes,Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductComponent } from './product.component';
import { MenuComponent } from './menu.component';
import { ProductService } from './product.service';
import { AddToCartComponent } from './addToCart.component';
import { CartService } from './cart.service';
import { CartDetailsComponent } from './cartdetails.component';
import { PageNotFoundComponent } from './PageNotFoundComponent.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';




let roots : Routes =[
{
   path:'',
  component:LoginComponent
},
{
  path:'logout',
 component:LoginComponent
},

  {
    path:'home',
    component:ProductComponent,
  },
  
  {
    path:'cartdetails',
    component:CartDetailsComponent
  },
 
  {
    path:'**',
    component:PageNotFoundComponent
  }


]






@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MenuComponent,
    AddToCartComponent,
    CartDetailsComponent,
    LoginComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(roots)
  ],
  providers: [LoginService,CartService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
