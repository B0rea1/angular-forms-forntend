import { Directive, ElementRef, HostListener, OnInit, Renderer2, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { InfoComponent } from '../components/info/info.component';

@Directive({
  selector: '[appShowInfo]'
})
export class ShowInfoDirective implements OnChanges {

  @Input() show = false;
  @Input() infoElement!: InfoComponent;

  private focus = false;

  constructor(private element: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if ('show' in changes || 'focus' in changes) {
      this.update();
    }
  }

  @HostListener('focus')
  onFocus() {
    this.focus = true;
    this.update();
  }

  @HostListener('focusout')
  onFocusout() {
    this.focus = false;
    this.update();
  }

  private update() {
    this.infoElement.show = this.show && this.focus;
  }
}