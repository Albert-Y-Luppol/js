import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { AngularDependencyInjectionComponent } from './angular-dependency-injection/angular-dependency-injection.component';
import { HierarhialInjectionsComponent } from './hierarhial-injections/hierarhial-injections.component';
import { DiProvidersComponent } from './di-providers/di-providers.component';
import { NavigateTheComponentTreeComponent } from './navigate-the-component-tree/navigate-the-component-tree.component';
import { DiInActionComponent } from './di-in-action/di-in-action.component';
import { HeroesComponent } from './angular-dependency-injection/heroes/heroes.component';
import { HeroListComponent } from './angular-dependency-injection/heroes/hero-list/hero-list.component';



@NgModule({
  declarations: [
    AppComponent,
    AngularDependencyInjectionComponent,
    HierarhialInjectionsComponent,
    DiProvidersComponent,
    NavigateTheComponentTreeComponent,
    DiInActionComponent,
    HeroesComponent,
    HeroListComponent,
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
