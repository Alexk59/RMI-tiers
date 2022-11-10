import { Component, OnInit } from "@angular/core";
import { dataTiers } from "./../../data";

import { TiersService } from "../../_services/tiers.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  constructor(private servTiers: TiersService) {}

  tiers = dataTiers;

  ngOnInit() {
    this.servTiers.getUsers().subscribe((response: any) => {
      if (response.success) {
        this.tiers = response.data;
      } else {
        alert(response.message);
      }
    });
  }

  delete(index: number) {
    dataTiers.splice(index, 1);
  }
}
