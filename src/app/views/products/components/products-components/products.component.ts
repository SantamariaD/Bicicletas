import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Store } from '@ngrx/store';
import { saveProducts } from 'src/app/state/products/products.actions';
import { Products } from 'src/app/state/products/products.reducer';
>>>>>>> 218cf6c4a0065874dc27ffc0435183968135fa3b

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
<<<<<<< HEAD
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

=======
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Array<Products> = [
    {
      name: 'string',
      price: 'string',
      stoke: 'string',
    },
  ];

  constructor(private sotre: Store) {}

  ngOnInit(): void {
    this.sotre.dispatch(saveProducts({ listProducts: this.products }));
    console.log('products')
  }
>>>>>>> 218cf6c4a0065874dc27ffc0435183968135fa3b
}
