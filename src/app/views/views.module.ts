import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    LoginComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ViewsModule { }
