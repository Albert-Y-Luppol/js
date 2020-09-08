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
