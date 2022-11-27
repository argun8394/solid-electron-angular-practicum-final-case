import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  productId!: any; //product id variable ;

  constructor(private service:ApiService, private route:ActivatedRoute
) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.productId = params['id']
    })
    this.getById(this.productId)
  }

  getById(id: number){
    this.productId = this.service.getProductById(id).subscribe((result) => {
      this.productId = result;
    });
  }


}
