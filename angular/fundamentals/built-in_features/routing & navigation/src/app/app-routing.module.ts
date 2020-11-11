import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IntroductionComponent } from './introduction/introduction.component';
import { Err404 } from './err404/err404.component';


const routes: Routes = [
  { path: "introduction", component: IntroductionComponent },
  { path: "", redirectTo: "/introduction", pathMatch: "full" },
  {path:"**", component: Err404}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
