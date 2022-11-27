import { Product } from './../models/product.model';
import { createAction, props } from '@ngrx/store';


export const addProduct = createAction('Add Product', props<Product>());//add product
export const removeProduct = createAction('Remove Product', props<Product>());//remove product
export const clearCart = createAction('Clear Cart');//remove all product
