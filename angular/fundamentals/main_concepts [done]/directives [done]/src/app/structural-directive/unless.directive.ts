import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


export type Show = false;
export type Hide = true;
export type State = Show | Hide;

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }

  static ngTemplateGuard__appUnless(dir: UnlessDirective, expr: State): expr is Show {
    return true;
  }

  static ngTemplateContextGuard<T>(dir: UnlessDirective, ctx: any): ctx is any { return true; }

  private hasView: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

}
