import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {JinnyRoutingModule} from "./jinny-routing.module";
import {JinnyChildComponent} from "./jinny-child/jinny-child.component";



@NgModule({
  declarations: [JinnyChildComponent],
  imports: [
    CommonModule,
    JinnyRoutingModule
  ]
})
export class JinnyModule { }
