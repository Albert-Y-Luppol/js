import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AccessingQueryParamsComponent} from "./accessing-query-params.component";
import {HeroDetailsComponent} from "./hero-details/hero-details.component";

const routes: Routes=[
  {path: 'hero/:id', component: HeroDetailsComponent},
  {path: 'query-params', component: AccessingQueryParamsComponent},
  {path: 'heroes', redirectTo:'query-params', pathMatch:'full'},
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AccessingQueryParamsRoutingModule{}
