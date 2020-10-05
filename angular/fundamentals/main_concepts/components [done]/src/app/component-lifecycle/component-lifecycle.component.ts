import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-component-lifecycle',
  templateUrl: './component-lifecycle.component.html',
  styleUrls: ['./component-lifecycle.component.scss'],
})
export class ComponentLifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy {
  counter: number = 1;
  toggler: boolean = false;
  heroName: string;
  heroPowers: string;
  heroDoCheckName: string;
  heroDoCheckPowers: string;

  constructor() {}

  ngOnChanges(): void {
    console.log(`${this.counter++} OnChanges`);
  }

  ngOnInit(): void {
    console.log(`${this.counter++} OnInit`);
  }

  ngDoCheck(): void {
    console.log(`${this.counter++} DoCheck`);
  }

  ngAfterContentInit(): void {
    console.log(`${this.counter++} AfterContentInit`);
  }

  ngAfterContentChecked(): void {
    console.log(`${this.counter++} AfterContentChecked`);
  }

  ngAfterViewInit(): void {
    console.log(`${this.counter++} AfterViewInit`);
  }

  ngAfterViewChecked(): void {
    console.log(`${this.counter++} AfterViewChecked`);
  }

  ngOnDestroy(): void {
    console.log(`${this.counter++} OnDestroy`);
  }

  toggleToggler(): void {
    this.toggler = !this.toggler;
  }
}
