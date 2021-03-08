import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  images: any;
  image () {
    this.images.style.display = 'none';
  }
}
