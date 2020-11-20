import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksArrayRoutingModule } from './links-array-routing.module';
import { LinksArrayComponent } from './links-array.component';
import { ShowParamsComponent } from './show-params/show-params.component';


@NgModule({
  declarations: [LinksArrayComponent, ShowParamsComponent],
  imports: [
    CommonModule,
    LinksArrayRoutingModule
  ]
})
export class LinksArrayModule { }
