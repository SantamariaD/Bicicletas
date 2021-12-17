import { Component, NgModule } from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { LayoutComponent } from './components/layout/layout.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProductsComponent } from './views/products/components/products-components/products.component';

const routes : Routes =[
{
    path: '',
    component : LayoutComponent,
    children:[
{
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
},
{
    path: 'home',
    component: HomeComponent
},
{
    path: 'contact',
    component: ContactComponent
},
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'products',
    loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule)
}

    ]
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

