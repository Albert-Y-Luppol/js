import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name.directive';
import { identityRevealedValidator } from './identity-revealed.directive';
import { UniqueAlterEgoValidator } from '../template-driven-validator/uniqueAlterEgoValidator';

@Component({
  selector: 'app-reactive-forms-validation',
  templateUrl: './reactive-forms-validation.component.html',
  styleUrls: ['./reactive-forms-validation.component.scss'],
})
export class ReactiveFormsValidationComponent implements OnInit {
  heroForm: FormGroup;

  constructor(private uniqueAlterEgoValidator: UniqueAlterEgoValidator) {}

  ngOnInit(): void {
    this.heroForm = new FormGroup(
      {
        name: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(4),
            forbiddenNameValidator(/bobby/i),
          ],
        }),
        alterEgo: new FormControl('', {
          updateOn: 'blur',
          asyncValidators: this.uniqueAlterEgoValidator.validate.bind(
            this.uniqueAlterEgoValidator
          ),
        }),
        power: new FormControl(),
      },
      { validators: identityRevealedValidator }
    );
  }

  get name() {
    return this.heroForm.get('name');
  }
  get alterEgo() {
    return this.heroForm.get('alterEgo');
  }
}
