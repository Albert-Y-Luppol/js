import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";

import { NestedComponent } from './nested/nested.component';
import { AlexChildComponent } from './nested/alex-child/alex-child.component';
import { TomChildComponent } from './nested/tom-child/tom-child.component';
import {JinnyModule} from "./nested/jinny/jinny.module";
import {AccessingQueryParamsModule} from "./accessing-query-params/accessing-query-params.module";
import {WildcardModule} from "./wildcard/wildcard.module";


@NgModule({
  declarations: [
    AppComponent,
    NestedComponent,
    AlexChildComponent,
    TomChildComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    JinnyModule,
    AccessingQueryParamsModule,
    WildcardModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
