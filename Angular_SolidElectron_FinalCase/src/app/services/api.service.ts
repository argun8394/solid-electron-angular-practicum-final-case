import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export const BASE_API_URL = 'https://fakestoreapi.com/products';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  detail = [];
  constructor(private http:HttpClient) { }

  //get product method from the fakestoreapi
  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
     return this.detail = res;   //*********** */
    }))
   }

   //get product method from the fakestoreapi for detail method
   getProductById(id:number): Observable<any> {
    return this.http.get<any>(`${BASE_API_URL}/${id}`)
   }
}
