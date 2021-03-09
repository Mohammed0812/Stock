import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  fname:any = '';
  fprice:any; 
  products:any = [];
  rname:any;
  rprice:any;
  in:any = 130
  out:any = 100
  sum:any = 0;
  total:any = 1;
  reports:any = [];
  constructor() {
    
    let a = localStorage.getItem('products');
    if (a) {
      this.products = JSON.parse(a);
    }
   }
  addReport() {
    let c = {
      Name:this.rname,
      In:this.in,
      Out:this.out,
      Balance:this.in - this.out,
      totals:this.out * this.rprice
    }
    this.reports.push(c);
    this.sum = this.reports.reduce((a: number, b: any) => {
      return a + parseInt(b.totals);
    }, 0);
  }
  ngOnInit(): void {
  }

}
