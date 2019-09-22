import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerRecordComponent } from './customer-record/customer-record.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomerRecordComponent, CustomerSearchComponent]
})
export class PagesModule { }
