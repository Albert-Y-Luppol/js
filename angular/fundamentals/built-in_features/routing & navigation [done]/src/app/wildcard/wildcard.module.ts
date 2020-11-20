import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Err404} from "./err404/err404.component";
import {WildcardRoutingModule} from "./wildcard-routing.module";



@NgModule({
  declarations: [Err404],
  imports: [
    CommonModule,
    WildcardRoutingModule,
  ]
})
export class WildcardModule { }
