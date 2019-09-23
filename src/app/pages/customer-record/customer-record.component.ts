import {
  Component,
  OnInit,
  Directive,
  Input,
  ElementRef,
  HostListener
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CustomersService } from "src/app/services/customers/customers.service";
import { Customers } from "src/app/models/common/customer";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-customer-record",
  templateUrl: "./customer-record.component.html",
  styleUrls: ["./customer-record.component.css"]
})
export class CustomerRecordComponent implements OnInit {
  public formCustomer: FormGroup;
  public validateOk: boolean = false;
  public customers: Customers[] = [];
  public loading: boolean = false;
  public startDate = new Date(2000, 0, 1);

  constructor(
    fb: FormBuilder,
    public customersService: CustomersService,
    private _snackBar: MatSnackBar
  ) {
    this.formCustomer = fb.group({
      identification: ["", Validators.required],
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      birthdate: ["", Validators.required]
    });
  }

  ngOnInit() {}
  validateId(param) {
    if (!/^[0-9]+$/.test(param.identification.value)) {
      this.formCustomer.controls["identification"].setValue(
        param.identification.value.replace(/[^0-9]/g, "")
      );
    }
  }

  searchId(param) {
    this.loading = !this.loading;
    this.customersService.getCustomer().subscribe((data: Customers[]) => {
      this.customers = Object.values(data);
      if (
        this.customers.filter((element: any) => element.identification == param)
          .length > 0
      ) {
        this.validateOk = false;
        this._snackBar.open(
          "Ya se encuentra esta cedula en el sistema",
          "Cerrar",
          {
            duration: 30000
          }
        );
      } else {
        this.validateOk = true;
      }
      this.loading = !this.loading;
    });
  }
  cleanAll() {
    this.validateOk = false;
    this.formCustomer.reset();
  }
  validateAge(ageParam) {
    let day = ageParam.getDate();
    let month = ageParam.getMonth();
    let year = ageParam.getFullYear();
    let age = 18;
    let mydate = new Date();
    mydate.setFullYear(year, month, day);
    let currdate: any = new Date();
    let setDate: any = new Date();
    setDate.setFullYear(mydate.getFullYear() + age, month, day);
    if (currdate - setDate > 0) {
      
    } else {
      this.formCustomer.controls["birthdate"].setValue('');
      this._snackBar.open("No es posible solicitar creditos si es menor de 18 años", "Cerrar", {
        duration: 30000
      });
    }
  }
  save(objectSave: Customers) {
    this.customersService.postCustomer(objectSave).subscribe((result: any) => {
      this, this.cleanAll();
      this._snackBar.open("Registro exitoso", "Continuar", {
        duration: 30000
      });
    });
  }
}
