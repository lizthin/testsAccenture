import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToolbarComponent } from "./layout/toolbar/toolbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule,FlexLayoutModule],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent]
})
export class ComponentsModule {}
