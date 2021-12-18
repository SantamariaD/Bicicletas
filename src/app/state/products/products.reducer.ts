import { Action, createReducer, on } from "@ngrx/store";
import * as fomProductsActions from './products.actions'

export interface Products {
    name: string;
    price: string;
    stoke: string;
}

export interface ProductsState {
    products: Array<Products>
}

const initialState: ProductsState = {
    products: []
}


const ProductsReducer = createReducer(
    initialState,
    on(
        fomProductsActions.saveProducts,
        (state, { listProducts }) => ({
            ...state,
            products: listProducts
        })
    ),
)

export function reducer(state: ProductsState | undefined, action: Action) {
    return ProductsReducer(state, action);
}