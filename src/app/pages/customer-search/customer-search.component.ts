import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Customers } from "src/app/models/common/customer";
import { CustomersService } from "src/app/services/customers/customers.service";

@Component({
  selector: "app-customer-search",
  templateUrl: "./customer-search.component.html",
  styleUrls: ["./customer-search.component.css"]
})
export class CustomerSearchComponent implements OnInit {
  public customers: Customers[] = [];
  public displayedColumns: string[] = [];
  public dataSource:any;

  constructor(public customersService: CustomersService) {}

  ngOnInit() {
    this.customersService.getCustomer().subscribe((data: Customers) => {
      this.customers = Object.values(data);

      this.displayedColumns = [
        "identification",
        "firstname",
        "lastname",
        "birthdate"
      ];
      this.dataSource = new MatTableDataSource(this.customers);
    });
  }

  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
