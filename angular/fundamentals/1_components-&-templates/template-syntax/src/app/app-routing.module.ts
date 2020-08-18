import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { TemplateStatementsComponent } from './template-statements/template-statements.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BindingSyntaxComponent } from './binding-syntax/binding-syntax.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'template-statements', component: TemplateStatementsComponent },
  { path: 'binding-syntax', component: BindingSyntaxComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  {
    path: 'attributes-class-style-bindings',
    component: TemplateStatementsComponent,
  },
  { path: 'event-binding', component: TemplateStatementsComponent },
  { path: 'two-way-binding', component: TemplateStatementsComponent },
  { path: 'built-in-directives', component: TemplateStatementsComponent },
  {
    path: 'template-reference-variables',
    component: TemplateStatementsComponent,
  },
  { path: 'inputs-outputs', component: TemplateStatementsComponent },
  {
    path: 'template-expression-operators',
    component: TemplateStatementsComponent,
  },
  { path: 'svg-in-templates', component: TemplateStatementsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
