import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[appHighlight]' }) export class HighlightDirective {

    @Input('appHighlight') highlightColor: string;
    @Input() defaultColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this.defaultColor || 'yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    constructor(private el: ElementRef) {
        el.nativeElement.style.textShadow = '1px 1px 0px black'
    }

    private highlight(color: string | null) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}