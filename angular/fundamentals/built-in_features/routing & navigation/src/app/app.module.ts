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
import {AccessingQueryParamsModule} from "./accessing-query-params/accessing-query-params.module";
import {WildcardModule} from "./wildcard/wildcard.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {AuthGuard} from "./auth/auth.guard";
import {ValidateService} from "./auth/validate.service";
import {PassModalComponent} from "./auth/pass-modal/pass-modal.component";


@NgModule({
  declarations: [
    AppComponent,
    NestedComponent,
    AlexChildComponent,
    TomChildComponent,
    PassModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    AccessingQueryParamsModule,
    WildcardModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [
    AuthGuard,
    ValidateService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
