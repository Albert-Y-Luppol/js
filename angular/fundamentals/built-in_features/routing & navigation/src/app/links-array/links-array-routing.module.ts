import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinksArrayComponent } from './links-array.component';
import {ShowParamsComponent} from "./show-params/show-params.component";

const routes: Routes = [
  {path: 'params', component: ShowParamsComponent},
  { path: '', component: LinksArrayComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinksArrayRoutingModule { }
