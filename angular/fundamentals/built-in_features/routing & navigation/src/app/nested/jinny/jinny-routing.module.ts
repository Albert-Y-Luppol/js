import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {JinnyChildComponent} from "./jinny-child/jinny-child.component";

const routes: Routes = [
  {path: "", component: JinnyChildComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JinnyRoutingModule{}
