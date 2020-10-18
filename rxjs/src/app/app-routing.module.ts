import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IntroductionComponent } from './introduction/introduction.component';
import { ObservablesComponent } from './observables/observables.component';
import { ObserverComponent } from './observer/observer.component';
import { OperatorsComponent } from './operators/operators.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { TestingComponent } from './testing/testing.component';


const routes: Routes = [
  { path: "overview", component: IntroductionComponent },
  { path: "observables", component: ObservablesComponent },
  { path: "observer", component: ObserverComponent },
  { path: "operators", component: OperatorsComponent },
  { path: "subscription", component: SubscriptionComponent },
  { path: "subjects", component: SubjectsComponent },
  { path: "scheduler", component: SchedulerComponent },
  { path: "testing", component: TestingComponent },
  { path: "**", redirectTo: "/overview" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
