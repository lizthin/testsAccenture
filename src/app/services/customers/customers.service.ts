import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { Customers } from "src/app/models/common/customer";

@Injectable({
  providedIn: "root"
})
export class CustomersService {
  constructor(private http: HttpClient) {}

  getCustomer() {
    return this.http
      .get(environment.api + "/clients.json")
      .pipe(map(data => data));
  }
  postCustomer(object: Customers) {
    return this.http
      .post(environment.api + "/clients.json", object)
      .pipe(map(data => data));
  }
}
