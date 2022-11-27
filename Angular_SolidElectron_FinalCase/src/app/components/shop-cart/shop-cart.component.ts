import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addProduct, clearCart, removeProduct } from 'src/app/state/cart.actions';
import { ProductGroup, selectGroupedCartEntries, selectTotalPrice } from 'src/app/state/cart.selector';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit {

  cartEntries$: Observable<ProductGroup[]>
  totalPrice$: Observable<number>;


  //   this.countProducts$ = store.select(selectCountProducts);


  constructor(private store: Store) {
    this.cartEntries$ = store.select(selectGroupedCartEntries);
    this.totalPrice$ = store.select(selectTotalPrice)
  }

  ngOnInit(): void {
  }

  clearEntries () {
    this.store.dispatch(clearCart());
  }

  increaseProduct(entry: ProductGroup) {
    this.store.dispatch(addProduct(entry.product));
  }

  decreaseProduct (entry: ProductGroup) {
    this.store.dispatch(removeProduct(entry.product));
  }

}
