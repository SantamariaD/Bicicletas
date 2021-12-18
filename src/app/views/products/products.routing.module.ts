import { Component, NgModule } from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { AccesoriosComponent } from './components/accesorios/accesorios.component'
import { BicicletasComponent } from './components/bicicletas/bicicletas.component'
import { LlantasComponent } from './components/llantas/llantas.component'
import { ProductsComponent } from './components/products-components/products.component'
import { ServiciosComponent } from './components/servicios/servicios.component'


const routes : Routes =[

    {
        path:'',
        component: ProductsComponent,
        children:[
            {
                path: '',
                redirectTo: 'bicicletas',
                pathMatch: 'full'
            },
          {
            path:'llantas',
            component: LlantasComponent
          },
          {
            path:'servicios',
            component: ServiciosComponent
          },
          {
              path: 'bicicletas',
              component: BicicletasComponent
          },
          {
              path: 'accesorios',
              component: AccesoriosComponent
          }
        ]
      }

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductsRoutingModule {}