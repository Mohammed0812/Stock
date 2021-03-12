import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  no: any;
  date: any;
  fname: any;
  type: any;
  quantity: any;
  products: any = [];
  transaction: any = [];
  value: any;
  constructor() {
    let a = localStorage.getItem('products');
    if (a) {
      this.products = JSON.parse(a);
    }
    let b = localStorage.getItem('transaction');
    if (b) {
      this.transaction = JSON.parse(b);
    }
  }

  in() {
    let t = {
      No: this.no,
      Dates: this.date,
      Name: this.fname,
      Type: this.type = 'in',
      Quantity: this.quantity
    }
    this.transaction.push(t);
    localStorage.setItem('transaction', JSON.stringify(this.transaction));
  }
  out() {
    let t = {
      No: this.no,
      Dates: this.date,
      Name: this.fname,
      Type: this.type = 'out',
      Quantity: this.quantity
    }
    this.transaction.push(t);
    localStorage.setItem('transaction', JSON.stringify(this.transaction));
  }
  delete(i: any) {
    this.transaction.splice(i, 1);
  }
  changeName() {
    let obj: any = this.transaction.filter((o: any) => o.Name === 'Apple');
    console.log(obj);
    let result = obj.reduce((a: any, b: any) => {
      a[b.Name] = (a[b.Name] || 0) + b.Quantity;
      return a;
    }, {});
    console.log(result);
  }

  ngOnInit(): void {
  }

}
