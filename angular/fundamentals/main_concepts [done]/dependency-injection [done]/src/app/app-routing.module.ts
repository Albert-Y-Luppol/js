import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AngularDependencyInjectionComponent } from './angular-dependency-injection/angular-dependency-injection.component';
import { HierarchialInjectionsComponent } from './hierarchial-injections/hierarchial-injections.component';
import { DiProvidersComponent } from './di-providers/di-providers.component';
import { DiInActionComponent } from './di-in-action/di-in-action.component';
import { NavigateTheComponentTreeComponent } from './navigate-the-component-tree/navigate-the-component-tree.component';


const routes: Routes = [
  { path: "angular-dependency-injection", component: AngularDependencyInjectionComponent },
  { path: "hierarchial-injections", component: HierarchialInjectionsComponent },
  { path: "di-providers", component: DiProvidersComponent },
  { path: "di-in-action", component: DiInActionComponent },
  { path: "navigate-the-component-tree", component: NavigateTheComponentTreeComponent },
  { path: "**", redirectTo: "/angular-dependency-injection" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
