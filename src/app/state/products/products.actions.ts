import { createAction, props } from '@ngrx/store';
import { Products } from './products.reducer';

const SAVE_PRODUCTS = '[Products] Products are saved';

export const saveProducts = createAction(
  SAVE_PRODUCTS,
  props<{ listProducts: Array<Products> }>()
);
