import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  productList = new BehaviorSubject<any>([]);
  search = new BehaviorSubject<string>("");

  constructor() { }
}
