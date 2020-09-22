import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ValidationComponent } from './validation/validation.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';

const routes: Routes = [
  { path: 'introduction', component: IntroComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'validate-form-input', component: ValidationComponent },
  { path: 'building-dynamics-forms', component: DynamicFormsComponent },
  { path: '**', redirectTo: '/introduction' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
