import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";

import { IntroductionComponent } from './introduction/introduction.component';
import { ObservablesComponent } from './observables/observables.component';
import { ObserverComponent } from './observer/observer.component';
import { OperatorsComponent } from './operators/operators.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { TestingComponent } from './testing/testing.component';



@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    ObservablesComponent,
    ObserverComponent,
    OperatorsComponent,
    SubscriptionComponent,
    SubjectsComponent,
    SchedulerComponent,
    TestingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
