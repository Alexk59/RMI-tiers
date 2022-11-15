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

  filterMonth = 0;
  tiers = dataTiers;
  completeTiers = [];
  months = {
    0: "- Filter Month -",
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  ngOnInit() {
    this.servTiers.getUsers().subscribe((response: any) => {
      if (response.success) {
        this.tiers = response.data;
        this.completeTiers = [...this.tiers];
      } else {
        alert(response.message);
      }
    });
  }

  delete(index: number) {
    dataTiers.splice(index, 1);
  }

  filterData() {
    this.tiers = this.completeTiers;
    if (this.filterMonth !== 0) {
      this.tiers = this.completeTiers.filter(
        (t: any) => t.month === this.filterMonth
      );
    }
  }
}
