import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { dataTiers } from "../../data";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  tierID: number;
  currentTierIndex: number;
  form = new FormGroup({
    name: new FormControl(null, Validators.required),
    amount: new FormControl(null, [Validators.required, Validators.min(1)]),
  });

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const tmpTierID = this.route.snapshot.params.tierid;
    this.tierID = tmpTierID ? parseInt(tmpTierID) : 0;

    if (this.tierID) {
      this.currentTierIndex = dataTiers.findIndex(
        (tier: any) => tier.id === this.tierID
      );
      const currentTier = dataTiers[this.currentTierIndex];

      this.form.patchValue({
        name: currentTier.name,
        amount: currentTier.amount,
      });
    }
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const data = this.form.getRawValue();
    if (this.tierID) {
      const currentTier = dataTiers[this.currentTierIndex];
      currentTier.name = data.name;
      currentTier.amount = data.amount;

      dataTiers[this.currentTierIndex] = currentTier;
    } else {
      const tmpTier = dataTiers.find((tier: any) => tier.name === data.name);

      if (tmpTier) {
        alert("Already exists a tier with the same name");
        return;
      }

      const lastTier = dataTiers[dataTiers.length - 1];
      const newID = lastTier ? lastTier.id + 1 : 1;

      const newTier = {
        id: newID,
        name: data.name,
        amount: data.amount,
      };

      dataTiers.push(newTier);
    }
    this.router.navigateByUrl("/list");
  }
}
