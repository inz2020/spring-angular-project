import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  public products:any;
  public size:number=2;
  public currentPage:number=1;
  public totalPages:number=0;

  // @ts-ignore
  public pages:Array<number>;

  constructor(private productService:ProductService) {

  }

  ngOnInit(): void {
  }

  onGetProducts(){
   this.productService.getProducts(this.currentPage, this.size)
      .subscribe(data=>{
        // @ts-ignore
          this.totalPages= data["page"].totalPages;
        this.pages= new Array <number>(this.totalPages);
          this.products=data;
      },
        error=>{console.log(error)})
  }
  onPageProducts(index:number){
    this.currentPage=index;
    this.onGetProducts();
  }

  onSearch(value: any) {
    console.log(value);

  }
}
