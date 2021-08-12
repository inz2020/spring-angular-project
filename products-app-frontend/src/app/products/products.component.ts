import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products:any;

  constructor(private productService:ProductService) {

  }

  ngOnInit(): void {
  }

  onGetProducts(){
   this.productService.getProducts()
      .subscribe(data=>{
        this.products=data;
      },
        error=>{console.log(error)})
  }

}
