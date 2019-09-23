import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerRecordComponent } from "./customer-record/customer-record.component";
import { CustomerSearchComponent } from "./customer-search/customer-search.component";

const routes: Routes = [
  {
    path: "record",
    component: CustomerRecordComponent
  },
  {
    path: "search",
    component: CustomerSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
