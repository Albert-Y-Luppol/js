import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccessingQueryParamsRoutingModule} from "./accessing-query-params-routing.module";
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import {FormsModule} from "@angular/forms";
import {AccessingQueryParamsComponent} from "./accessing-query-params.component";



@NgModule({
  declarations: [HeroDetailsComponent, AccessingQueryParamsComponent],
  imports: [
    CommonModule,
    FormsModule,
    AccessingQueryParamsRoutingModule
  ]
})
export class AccessingQueryParamsModule { }
