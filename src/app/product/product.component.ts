import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  fname:any = '';
  fprice:any; 
  products:any = [];
  constructor() {
    let a = localStorage.getItem('products');
    if (a) {
      this.products = JSON.parse(a);
    }
   }
  addProduct() {
    let p = {
      name: this.fname,
      price: this.fprice
    }
    this.products.push(p);
    localStorage.setItem('products', JSON.stringify(this.products));
  }
  delete(i: any) {
    this.products.splice(i, 1);
  }
  ngOnInit(): void {
  }

}
