import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";

import { Err404 } from './err404/err404.component';
import { NestedComponent } from './nested/nested.component';
import { AlexChildComponent } from './nested/alex-child/alex-child.component';
import { TomChildComponent } from './nested/tom-child/tom-child.component';
import {JinnyModule} from "./nested/jinny/jinny.module";
import { AccessingQueryParamsComponent } from './accessing-query-params/accessing-query-params.component';


@NgModule({
  declarations: [
    AppComponent,
    Err404,
    NestedComponent,
    AlexChildComponent,
    TomChildComponent,
    AccessingQueryParamsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    JinnyModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
