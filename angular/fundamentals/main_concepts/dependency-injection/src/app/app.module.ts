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
import { UseCasesInjectionsComponent } from './hierarchial-injections/use-cases-injections/use-cases-injections.component';
import { VillansListComponent } from './hierarchial-injections/use-cases-injections/villans-list/villans-list.component';
import { MultipleEditSessionComponent } from './hierarchial-injections/use-cases-injections/multiple-edit-session/multiple-edit-session.component';
import { HeroTaxReturnComponent } from './hierarchial-injections/use-cases-injections/multiple-edit-session/hero-tax-return/hero-tax-return.component';
import { ClassProvidersComponent } from './di-providers/class-providers/class-providers.component';
import { AliasedClassComponent } from './di-providers/aliased-class/aliased-class.component';
import { SilentLoggerComponent } from './di-providers/silent-logger/silent-logger.component';
import { ValueProviderComponent } from './di-providers/value-provider/value-provider.component';
import { HierarchyChildCheckComponent } from './di-providers/value-provider/hierarchy-child-check/hierarchy-child-check.component';
import { FactoryProviderComponent } from './di-providers/factory-provider/factory-provider.component';
import { heroServiceProvider } from './di-providers/services/hero.service.provider';
import { HeroinoListComponent } from './di-providers/factory-provider/heroino-list/heroino-list.component';
import { AlexComponent } from './navigate-the-component-tree/alex/alex.component';
import { CatchyComponent } from './navigate-the-component-tree/catchy/catchy.component';
import { CraigComponent } from './navigate-the-component-tree/craig/craig.component';
import { CarolComponent } from './navigate-the-component-tree/carol/carol.component';
import { BarryComponent } from './navigate-the-component-tree/barry/barry.component';
import { AliceComponent } from './navigate-the-component-tree/alice/alice.component';
import { ChrisComponent } from './navigate-the-component-tree/chris/chris.component';
import { BethComponent } from './navigate-the-component-tree/beth/beth.component';
import { BobComponent } from './navigate-the-component-tree/bob/bob.component';


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
    UseCasesInjectionsComponent,
    VillansListComponent,
    MultipleEditSessionComponent,
    HeroTaxReturnComponent,
    ClassProvidersComponent,
    AliasedClassComponent,
    SilentLoggerComponent,
    ValueProviderComponent,
    HierarchyChildCheckComponent,
    FactoryProviderComponent,
    HeroinoListComponent,
    AlexComponent,
    CatchyComponent,
    CraigComponent,
    CarolComponent,
    BarryComponent,
    AliceComponent,
    ChrisComponent,
    BethComponent,
    BobComponent,

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
