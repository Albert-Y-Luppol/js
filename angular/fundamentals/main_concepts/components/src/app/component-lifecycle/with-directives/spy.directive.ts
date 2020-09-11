import { Directive, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({ selector: '[spy]' })
export class SpyDirective implements OnInit, OnDestroy {
  @Input() heroNumber: number;

  ngOnInit() {
    console.log('Spy: OnInit - ', this.heroNumber);
  }
  ngOnDestroy() {
    console.log('Spy: OnDestroy - ', this.heroNumber);
  }
}
