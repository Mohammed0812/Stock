import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  fname:any = '';
  fprice:any=0; 
  products:any = [];
  transaction:any = [];
  in:any = 130;
  out:any = 100;
  total:any = 1;
  reports:any = [
    {
      Name:this.fname,
      price:this.fprice,
      In:this.in,
      Out:this.out,
      Balance:this.in - this.out,
      totals:this.out * this.fprice
    }
  ];
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
   sum:any = this.reports.reduce((a: number, b: any) => {
      return a + parseInt(b.totals);
    }, 0);

    changeReport() {
      let obj1 = this.transaction.filter((o:any) =>  (o.Name === o.Name) && (o.Type === 'in'));
      let result1 = obj1.reduce((a:any, b:any) => {
    a[b.Name] = (a[b.Name] || 0) + b.Quantity;
    return a;
  }, {});
  console.table(this.transaction);
  console.table(obj1);
  console.log(result1);
    }
  ngOnInit(): void {
  }

}
