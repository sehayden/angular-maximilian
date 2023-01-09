import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'purple';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.backgroundColor=this.defaultColor
  }
  ngOnInit(): void {
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')
    this.backgroundColor=this.highlightColor
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue')
    this.backgroundColor=this.defaultColor

  }

}
