import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadMainComponent } from './lazy-load-main/lazy-load-main.component';
import {LazyLoadRoutingModule} from "./lazy-load-routing.module";



@NgModule({
  declarations: [LazyLoadMainComponent],
  imports: [
    CommonModule,
    LazyLoadRoutingModule
  ]
})
export class LazyLoadModule { }
