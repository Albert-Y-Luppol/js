import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IntroComponent } from './intro/intro.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ValidationComponent } from './validation/validation.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { ReactiveFavoriteColorComponent } from './intro/reactive-favorite-color/reactive-favorite-color.component';
import { TemplateDrivenFavoriteColorComponent } from './intro/template-driven-favorite-color/template-driven-favorite-color.component';
import { NameEditorComponent } from './reactive-forms/name-editor/name-editor.component';
import { ProfileEditorComponent } from './reactive-forms/profile-editor/profile-editor.component';
import { TemplateDrivenValidatorComponent } from './validation/template-driven-validator/template-driven-validator.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsValidationComponent } from './validation/reactive-forms-validation/reactive-forms-validation.component';
import { ForbiddenNameValidatorDirective } from './validation/template-driven-validator/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './validation/template-driven-validator/identity-revealed.directive';
import { SpinnerComponent } from './spinner/spinner.component';
import { UniqueAlterEgoValidatorDirective } from './validation/template-driven-validator/uniqueAlterEgoValidator';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ReactiveFormsComponent,
    ValidationComponent,
    DynamicFormsComponent,
    ReactiveFavoriteColorComponent,
    TemplateDrivenFavoriteColorComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    TemplateDrivenValidatorComponent,
    ReactiveFormsValidationComponent,
    ForbiddenNameValidatorDirective,
    IdentityRevealedValidatorDirective,
    SpinnerComponent,
    UniqueAlterEgoValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
