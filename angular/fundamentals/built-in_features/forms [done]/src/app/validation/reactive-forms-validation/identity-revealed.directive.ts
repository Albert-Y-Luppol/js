import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const identityRevealedValidator: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  // console.log(control);
  const name = control.get('name');
  const alterEgo = control.get('alterEgo');

  return name && alterEgo && name.value === alterEgo.value
    ? { identityRevealed: true }
    : null;
};
