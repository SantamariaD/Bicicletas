import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { saveProducts } from 'src/app/state/products/products.actions';
import { Products } from 'src/app/state/products/products.reducer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
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
}
