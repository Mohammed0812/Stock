import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  no:any;
  type:any;
  name:any;
  sales:any;
  date:any;
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
      Type: this.type,
      Name: this.name,
      Dates: this.date,
      Sales: this.sales
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
