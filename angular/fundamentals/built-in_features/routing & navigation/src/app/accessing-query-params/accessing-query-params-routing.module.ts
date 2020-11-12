import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AccessingQueryParamsComponent} from "./accessing-query-params.component";

const routes: Routes=[
  {path: "", component: AccessingQueryParamsComponent}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AccessingQueryParamsRoutingModule{}
