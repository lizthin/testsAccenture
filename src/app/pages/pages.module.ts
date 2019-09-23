import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomerSearchComponent } from "./customer-search/customer-search.component";
import { CustomerRecordComponent } from "./customer-record/customer-record.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { MatInputModule } from "@angular/material/input";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatNativeDateModule } from "@angular/material/core";
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatRadioModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  declarations: [CustomerRecordComponent, CustomerSearchComponent]
})
export class PagesModule {}
