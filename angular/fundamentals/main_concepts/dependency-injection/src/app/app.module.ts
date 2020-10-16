import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { AngularDependencyInjectionComponent } from './angular-dependency-injection/angular-dependency-injection.component';
import { HierarchialInjectionsComponent } from './hierarchial-injections/hierarchial-injections.component';
import { DiProvidersComponent } from './di-providers/di-providers.component';
import { NavigateTheComponentTreeComponent } from './navigate-the-component-tree/navigate-the-component-tree.component';
import { DiInActionComponent } from './di-in-action/di-in-action.component';
import { HeroesComponent } from './angular-dependency-injection/heroes/heroes.component';
import { HeroListComponent } from './angular-dependency-injection/heroes/hero-list/hero-list.component';
import { SelfNoDataComponent } from './hierarchial-injections/self-no-data/self-no-data.component';
import { SkipSelfComponent } from './hierarchial-injections/skip-self/skip-self.component';
import { ParentHostComponent } from './hierarchial-injections/parent-host/parent-host.component';
import { HostComponent } from './hierarchial-injections/parent-host/host/host.component';
import { ChildHostComponent } from './hierarchial-injections/parent-host/host/child-host/child-host.component';
import { RootComponent } from './hierarchial-injections/root/root.component';
import { ChildComponent } from './hierarchial-injections/root/child/child.component';
import { InspectorComponent } from './hierarchial-injections/root/child/inspector/inspector.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularDependencyInjectionComponent,
    HierarchialInjectionsComponent,
    DiProvidersComponent,
    NavigateTheComponentTreeComponent,
    DiInActionComponent,
    HeroesComponent,
    HeroListComponent,
    SelfNoDataComponent,
    SkipSelfComponent,
    ParentHostComponent,
    HostComponent,
    ChildHostComponent,
    RootComponent,
    ChildComponent,
    InspectorComponent,

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
