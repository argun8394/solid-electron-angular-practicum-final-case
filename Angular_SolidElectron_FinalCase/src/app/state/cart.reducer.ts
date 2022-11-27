import { Product } from './../models/product.model';
import { createReducer, on, ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { addProduct, clearCart, removeProduct } from './cart.actions';

export const intialCartEntries: Product[] = [];

export const cartReducer = createReducer(
  intialCartEntries,

  //remove all products
  on(clearCart, _ => [] ),

  //add product to shop cart
  on(addProduct, (entries, product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries));
    entriesClone.push(product);
    return entriesClone;
  }),

  //product remove
  on(removeProduct, (entries, product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries));
    const found = entriesClone.find(e => e.id == product.id);
    if (found) {
        entriesClone.splice(entriesClone.indexOf(found), 1)
    }
    return entriesClone;
  })
)

