import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { IntroComponent } from "./intro/intro.component";
import { TemplateStatementsComponent } from "./template-statements/template-statements.component";
import { InterpolationComponent } from "./interpolation/interpolation.component";
import { BindingSyntaxComponent } from "./binding-syntax/binding-syntax.component";
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { AppItemDetailComponent } from "./property-binding/app-item-detail/app-item-detail.component";
import { StringInitComponent } from "./property-binding/string-init/string-init.component";
import { AttrClStyleBindingComponent } from "./attr-cl-style-binding/attr-cl-style-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { ClickDirective } from "./event-binding/click.directive";
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";
import { SizerComponent } from "./two-way-binding/sizer/sizer.component";
import { BuiltInDirectivesComponent } from "./built-in-directives/built-in-directives.component";
import { TemplateRefVarsComponent } from "./template-ref-vars/template-ref-vars.component";
import { InOutPropsComponent } from "./in-out-props/in-out-props.component";
import { ChildComponent } from "./in-out-props/child/child.component";
import { ParentComponent } from "./in-out-props/parent/parent.component";
import { TemplateExpressionOperatorsComponent } from "./template-expression-operators/template-expression-operators.component";
import { SvgInTemplatesComponent } from "./svg-in-templates/svg-in-templates.component";
import { APP_BASE_HREF } from "@angular/common";

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
    TwoWayBindingComponent,
    SizerComponent,
    BuiltInDirectivesComponent,
    TemplateRefVarsComponent,
    InOutPropsComponent,
    ChildComponent,
    ParentComponent,
    TemplateExpressionOperatorsComponent,
    SvgInTemplatesComponent,
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
    {
      provide: APP_BASE_HREF,
      useValue:
        "/js/angular/fundamentals/1_components-%26-templates/template-syntax%20%5Bdone%5D/dist",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
