import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BuiltInDirectivesComponent } from "./built-in-directives/built-in-directives.component";
import { AttributeDirectiveComponent } from "./attribute-directive/attribute-directive.component";
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';


const routes: Routes = [
  { path: "built-in-directives", component: BuiltInDirectivesComponent },
  { path: "attribute-directives", component: AttributeDirectiveComponent },
  { path: "structural-directives", component: StructuralDirectiveComponent },
  { path: "**", redirectTo: "/built-in-directives" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
