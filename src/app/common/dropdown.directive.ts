import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  TemplateRef,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]',
})
export class DropdownDirective {
  @HostBinding('class.open') isDropdownOpen: boolean = false;

  // dropdown will open and close when we click on the dropdown button
  //   @HostListener('click') toggleOpen() {
  //     this.isDropdownOpen = !this.isDropdownOpen;
  //   }

  // dropdown will close when we click anywhere on document.
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isDropdownOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isDropdownOpen
      : false;
  }
  constructor(private elRef: ElementRef) {}
}
