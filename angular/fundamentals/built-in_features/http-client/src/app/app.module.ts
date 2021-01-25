import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";

import {WildcardModule} from "./wildcard/wildcard.module";
import { ServerCommunicationComponent } from './server-communication/server-communication.component';
import { RequestingDataComponent } from './requesting-data/requesting-data.component';
import { HandlingErrorsComponent } from './handling-errors/handling-errors.component';
import { SendingDataComponent } from './sending-data/sending-data.component';
import { ParamsComponent } from './params/params.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';
import { ProgressComponent } from './progress/progress.component';
import { OptimizationComponent } from './optimization/optimization.component';
import { SecurityComponent } from './security/security.component';
import { TestingComponent } from './testing/testing.component';
import { HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import { ConfigComponent } from './requesting-data/config/config.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {httpInterceptorProviders} from "./interceptors";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";


@NgModule({
  declarations: [
    AppComponent,
    ServerCommunicationComponent,
    RequestingDataComponent,
    HandlingErrorsComponent,
    SendingDataComponent,
    ParamsComponent,
    InterceptorsComponent,
    ProgressComponent,
    OptimizationComponent,
    SecurityComponent,
    TestingComponent,
    ConfigComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WildcardModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
  ],
  bootstrap: [AppComponent],
  providers:[httpInterceptorProviders]
})
export class AppModule { }
