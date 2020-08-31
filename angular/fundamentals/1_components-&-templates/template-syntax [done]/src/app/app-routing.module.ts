import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IntroComponent } from "./intro/intro.component";
import { TemplateStatementsComponent } from "./template-statements/template-statements.component";
import { InterpolationComponent } from "./interpolation/interpolation.component";
import { BindingSyntaxComponent } from "./binding-syntax/binding-syntax.component";
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { AttrClStyleBindingComponent } from "./attr-cl-style-binding/attr-cl-style-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";
import { BuiltInDirectivesComponent } from "./built-in-directives/built-in-directives.component";
import { TemplateRefVarsComponent } from "./template-ref-vars/template-ref-vars.component";
import { InOutPropsComponent } from "./in-out-props/in-out-props.component";
import { TemplateExpressionOperatorsComponent } from "./template-expression-operators/template-expression-operators.component";
import { SvgInTemplatesComponent } from "./svg-in-templates/svg-in-templates.component";

const routes: Routes = [
  { path: "intro", component: IntroComponent },
  { path: "interpolation", component: InterpolationComponent },
  { path: "template-statements", component: TemplateStatementsComponent },
  { path: "binding-syntax", component: BindingSyntaxComponent },
  { path: "property-binding", component: PropertyBindingComponent },
  {
    path: "attributes-class-style-bindings",
    component: AttrClStyleBindingComponent,
  },
  { path: "event-binding", component: EventBindingComponent },
  { path: "two-way-binding", component: TwoWayBindingComponent },
  { path: "built-in-directives", component: BuiltInDirectivesComponent },
  {
    path: "template-reference-variables",
    component: TemplateRefVarsComponent,
  },
  { path: "inputs-outputs", component: InOutPropsComponent },
  {
    path: "template-expression-operators",
    component: TemplateExpressionOperatorsComponent,
  },
  { path: "svg-in-templates", component: SvgInTemplatesComponent },
  { path: "**", redirectTo: "/intro" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
