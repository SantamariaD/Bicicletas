import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products.routing.module';

import { AccesoriosComponent } from './components/accesorios/accesorios.component';
import { ProductsComponent } from './components/products-components/products.component';
import { ServiciosComponent } from './components/servicios/servicios.component'
import { LlantasComponent } from './components/llantas/llantas.component'
import { BicicletasComponent } from './components/bicicletas/bicicletas.component'




@NgModule({
  declarations: [
    AccesoriosComponent,
    ProductsComponent,
    ServiciosComponent,
    LlantasComponent,
    BicicletasComponent

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
