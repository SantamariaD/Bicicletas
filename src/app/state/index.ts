import { ActionReducerMap } from "@ngrx/store";
import * as fromProducts from './products/products.reducer'

export interface AppState {
    products: fromProducts.ProductsState
}

export const appReducer: ActionReducerMap<AppState> = {
    products: fromProducts.reducer,
}