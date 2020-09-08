import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { UserInputComponent } from './user-input/user-input.component';
import { PipesComponent } from './pipes/pipes.component';
import { ComponentLifecycleComponent } from './component-lifecycle/component-lifecycle.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ComponentStylesComponent } from './component-styles/component-styles.component';
import { DynamicComponensComponent } from './dynamic-componens/dynamic-componens.component';
import { AngularElementsComponent } from './angular-elements/angular-elements.component';

const routes: Routes = [
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'user-input', component: UserInputComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'component-lifecycle', component: ComponentLifecycleComponent },
  { path: 'component-interaction', component: ComponentInteractionComponent },
  {
    path: 'component-styles',
    component: ComponentStylesComponent,
  },
  { path: 'dynamic-componens', component: DynamicComponensComponent },
  { path: 'angular-elements', component: AngularElementsComponent },
  { path: '**', redirectTo: '/data-binding' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
