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
   }
   sum:any = this.reports.reduce((a: number, b: any) => {
      return a + parseInt(b.totals);
    }, 0);
  ngOnInit(): void {
  }

}
