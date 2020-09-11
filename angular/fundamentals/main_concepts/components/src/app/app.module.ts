import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { UserInputComponent } from './user-input/user-input.component';
import { PipesComponent } from './pipes/pipes.component';
import { ComponentLifecycleComponent } from './component-lifecycle/component-lifecycle.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ComponentStylesComponent } from './component-styles/component-styles.component';
import { DynamicComponensComponent } from './dynamic-componens/dynamic-componens.component';
import { AngularElementsComponent } from './angular-elements/angular-elements.component';
import { ExponentPipe } from './pipes/exponent-pipe.pipe';
import { OninitComponent } from './component-lifecycle/oninit/oninit.component';
import { SpyComponent } from './component-lifecycle/with-directives/spy.component';
import { SpyDirective } from './component-lifecycle/with-directives/spy.directive';
import { OnChangesComp } from './component-lifecycle/onchange/onchange.component';
import { ChildViewComp } from './component-lifecycle/after-view/child-view/child-view.component';
import { AfterViewComponent } from './component-lifecycle/after-view/after-view.component';
import { AfterContentChild } from './component-lifecycle/after-content/after-content-child.component';
import { AfterContentParent } from './component-lifecycle/after-content/after-content-parent.component';
import { AfterContent } from './component-lifecycle/after-content/after-content.component';
import { DoCheckComp } from './component-lifecycle/do-check/do-check.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    UserInputComponent,
    PipesComponent,
    ComponentLifecycleComponent,
    ComponentInteractionComponent,
    ComponentStylesComponent,
    DynamicComponensComponent,
    AngularElementsComponent,
    ExponentPipe,
    OninitComponent,
    SpyComponent,
    SpyDirective,
    OnChangesComp,
    ChildViewComp,
    AfterViewComponent,
    AfterContentChild,
    AfterContentParent,
    AfterContent,
    DoCheckComp,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
