import { createAction, props } from '@ngrx/store';
import { Product, ProductResponse } from '../models/product.interface';

export const getProductsAction = createAction('[Product Actions] Get Products');

export const getProductsSuccess = createAction(
  '[Product Actions] Get Products Success',
  props<{ response: ProductResponse }>()
);

export const getProductsFail = createAction(
  '[Product Actions] Get Products Fail',
  props<{ error: string }>()
);

export const getProductByIdAction = createAction(
  '[Product] Get Product By ID',
  props<{ productId: number }>()
);

export const getProductByIdSuccess = createAction(
  '[Product] Get Product By ID Success',
  props<{ product: Product }>()
);

export const getProductByIdFail = createAction(
  '[Product] Get Product By ID Fail',
  props<{ error: string }>()
);
