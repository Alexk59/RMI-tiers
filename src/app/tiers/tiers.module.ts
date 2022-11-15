import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ListComponent } from "./_components/list/list.component";
import { FormComponent } from "./_components/form/form.component";
import { MainComponent } from "./_components/main/main.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "list", component: ListComponent },
      { path: "form", component: FormComponent },
      { path: "form/:tierid", component: FormComponent },
      { path: "**", component: ListComponent },
    ],
  },
];

@NgModule({
  declarations: [ListComponent, FormComponent, MainComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class TiersModule {}
