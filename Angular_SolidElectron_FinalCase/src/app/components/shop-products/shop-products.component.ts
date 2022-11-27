import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { addProduct } from 'src/app/state/cart.actions';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';
import { FilterService } from 'src/app/services/filter.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.scss']
})
export class ShopProductsComponent implements OnInit {

  productList !: Product[];
  filterCategory : any;
  searchKey: any = "";
  productId !: Product;

  constructor(
    private api: ApiService,
    private filters: FilterService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private store: Store
    ) { }

    ngOnInit(): void{
      // this. loadProducts();
      this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        //console.log(this.productList)
        this.productList.forEach((res:any) =>{
          if(res.category === "women's clothing" || res.category === "men's clothing"){
            res.category = "fashion"
          }
          Object.assign(res, {quantity:1, total:res.price})
        })
        // console.log(this.productList)
      })
      this.filters.search.subscribe((val:any) => {
        this.searchKey = val;
      })
      this.route.params.subscribe((params)=>{
        this.productId = params['id'];
      })
      // this.route.params.subscribe(params => this.getById(params['id']));
    }

    //filter method for category
    filter(category : string){
      this.filterCategory = this.productList
      .filter((res:any) => {
        if(res.category === category || category==''){
          return res;
      }
      });
    }

    //product add to shop cart
  buyProduct(product: Product) {
    this.store.dispatch(addProduct(product));
  }

  //get by id for product detail
  getById(id: number){
    this.api.getProductById(id).subscribe((data: Product) => {
      this.productId = data;
    })
  }
  }





