import { Product } from '../models/product.interface';
import { createReducer, on } from '@ngrx/store';
import {
  getProductByIdAction,
  getProductByIdFail,
  getProductByIdSuccess,
  getProductsFail,
  getProductsSuccess,
} from './product.actions';

export const productFeatureKey = 'product';

export interface ProductState {
  products: Product[];
  product: Product;
  error?: string;
}

export const initialState: ProductState = {
  products: [],
  product: {},
  error: undefined,
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(getProductsSuccess, (state, action) => ({
    ...state,
    products: action.response.products,
  })),
  on(getProductsFail, (state, action) => ({
    ...state,
    error: action.error,
  })),
  on(getProductByIdAction, (state) => ({
    ...state,
    product: {},
    error: undefined,
  })),
  // Reducer for getProductByIdSuccess
  on(getProductByIdSuccess, (state, { product }) => ({
    ...state,
    product,
    error: undefined,
  })),

  on(getProductByIdFail, (state, { error }) => ({
    ...state,
    product: {},
    error,
  }))
);
