import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products.routing.module';

import { AccesoriosComponent } from './components/accesorios/accesorios.component';
import { ProductsComponent } from './components/products-components/products.component';
<<<<<<< HEAD

=======
import { ServiciosComponent } from './components/servicios/servicios.component'
>>>>>>> 218cf6c4a0065874dc27ffc0435183968135fa3b
import { LlantasComponent } from './components/llantas/llantas.component'
import { BicicletasComponent } from './components/bicicletas/bicicletas.component'




@NgModule({
  declarations: [
    AccesoriosComponent,
    ProductsComponent,
<<<<<<< HEAD
    
=======
    ServiciosComponent,
>>>>>>> 218cf6c4a0065874dc27ffc0435183968135fa3b
    LlantasComponent,
    BicicletasComponent

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
