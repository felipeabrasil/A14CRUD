import { CRUDService } from './../services/crud.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['p_id', 'p_name', 'p_description', 'p_price', 'action'];



  productList: any = [];
  dataSource: any = [];
  productListSubscrible: any;


  constructor(private crudService:CRUDService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this.productListSubscrible = this.crudService.loadProducts().subscribe( res => {
      this.productList = res;
      this.dataSource =  res;
      //console.log('res', res);
    })
  }



}
