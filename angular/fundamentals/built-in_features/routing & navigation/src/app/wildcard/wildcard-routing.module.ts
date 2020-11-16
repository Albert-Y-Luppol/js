import {Err404} from "./err404/err404.component";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

const path = [
  {path: '**', component: Err404}
]
@NgModule({
  imports: [RouterModule.forChild(path)],
  exports: [RouterModule]
})
export class WildcardRoutingModule{}
