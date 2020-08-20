import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IntroComponent } from './intro/intro.component';
import { TemplateStatementsComponent } from './template-statements/template-statements.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { FormsModule } from '@angular/forms';
import { BindingSyntaxComponent } from './binding-syntax/binding-syntax.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AppItemDetailComponent } from './property-binding/app-item-detail/app-item-detail.component';
import { StringInitComponent } from './property-binding/string-init/string-init.component';
import { AttrClStyleBindingComponent } from './attr-cl-style-binding/attr-cl-style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ClickDirective } from './event-binding/click.directive';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    TemplateStatementsComponent,
    InterpolationComponent,
    BindingSyntaxComponent,
    PropertyBindingComponent,
    AppItemDetailComponent,
    StringInitComponent,
    AttrClStyleBindingComponent,
    EventBindingComponent,
    ClickDirective,
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
