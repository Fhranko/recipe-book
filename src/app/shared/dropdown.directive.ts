import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  @HostBinding("class.show") isOpen = false;
  @HostListener("click") toogleOpen() {
    this.isOpen = !this.isOpen;
  }
}
