import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  no:any;
  date:any = new Date().getDate() + '/' + (new Date().getMonth() + 1 ) + '/' + new Date().getFullYear();
  fname:any;
  type:any;
  quantity:any;
  transaction:any = [
  ];
  constructor() {
    let a = localStorage.getItem('transaction');
    if (a) {
      this.transaction = JSON.parse(a);
    } 
  }
  add() {
    let t = {
      No: this.no,
      Dates: this.date,
      Name: this.fname,
      Type: this.type,
      Quantity: this.quantity
    }
    this.transaction.push(t);
    localStorage.setItem('transaction', JSON.stringify(this.transaction));
  }
  delete(i: any) {
    this.transaction.splice(i, 1);
  }
  ngOnInit(): void {
  }

}
