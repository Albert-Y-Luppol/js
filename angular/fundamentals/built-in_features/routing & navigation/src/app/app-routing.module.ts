import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IntroductionComponent } from './introduction/introduction.component';
import {NestedComponent} from "./nested/nested.component";
import {AlexChildComponent} from "./nested/alex-child/alex-child.component";
import {TomChildComponent} from "./nested/tom-child/tom-child.component";


const routes: Routes = [
  { path: "introduction", component: IntroductionComponent },
  {path: "nested", component: NestedComponent, children:[
      {path: "alex", component: AlexChildComponent},
      {path: "tom", component: TomChildComponent},
      {path: "jinny", loadChildren: ()=> import('./nested/jinny/jinny.module').then(m=>m.JinnyModule)}
    ]},
  { path: "", redirectTo: "/introduction", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
