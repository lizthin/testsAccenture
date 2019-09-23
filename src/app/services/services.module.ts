import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomersService } from "./customers/customers.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [CustomersService]
})
export class ServicesModule {}
