import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss'],
  providers: [QuestionControlService, QuestionService],
})
export class DynamicFormsComponent implements OnInit, OnDestroy {
  questions: QuestionBase<string>[] = [];
  questionsSubscription: Subscription;
  form: FormGroup;
  payLoad = '';

  constructor(
    private qcs: QuestionControlService,
    private questionsService: QuestionService
  ) {}

  ngOnInit() {
    this.questionsSubscription = this.questionsService
      .getQuestions()
      .subscribe((questionsFromSevice: QuestionBase<string>[]) => {
        this.questions = questionsFromSevice;
      });
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

  ngOnDestroy() {
    this.questionsSubscription.unsubscribe();
  }
}
