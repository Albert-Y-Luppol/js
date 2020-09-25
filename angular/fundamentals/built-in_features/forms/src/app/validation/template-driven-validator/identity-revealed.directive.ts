import { identityRevealedValidator } from '../reactive-forms-validation/identity-revealed.directive';
import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  AbstractControl,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appIdentityRevealed]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IdentityRevealedValidatorDirective,
      multi: true,
    },
  ],
})
export class IdentityRevealedValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return identityRevealedValidator(control);
  }
}
