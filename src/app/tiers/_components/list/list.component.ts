import { Component, OnInit } from "@angular/core";
import { dataTiers } from "./../../data";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  constructor() {}

  tiers = dataTiers;

  ngOnInit() {}

  delete(index: number) {
    dataTiers.splice(index, 1);
  }
}
