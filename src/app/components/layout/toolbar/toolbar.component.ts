import { Component, OnInit } from "@angular/core";
import { Menu } from "src/app/models/layout/menu";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {
  public objectMenu: Menu[] = [];

  constructor() {
    this.objectMenu = [
      {
        name: "Creación de clientes",
        route: "",
        icon: "account_circle"
      },
      {
        name: "Busqueda de clientes",
        route: "",
        icon: "search"
      }
    ];
  }

  ngOnInit() {}
}
