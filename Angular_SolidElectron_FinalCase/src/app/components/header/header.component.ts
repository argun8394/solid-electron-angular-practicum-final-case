import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FilterService } from 'src/app/services/filter.service';
import { selectCountProducts, selectTotalPrice } from '../../state/cart.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  countProducts$: Observable<number>;
  // totalPrice$: Observable<number>;
  // search = new BehaviorSubject<string>("");
  searchTerm: any;

  constructor(private store: Store, private filter: FilterService) {
    this.countProducts$ = store.select(selectCountProducts);
    // this.totalPrice$ = store.select(selectTotalPrice)
  }

  ngOnInit(): void {
  }

  search(event: any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.filter.search.next(this.searchTerm)
  }
}
