import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {path:"product",component:ProductComponent},
  {path:"transaction",component:TransactionComponent},
  {path:"report",component:ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[ProductComponent,TransactionComponent,ReportComponent]