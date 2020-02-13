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
  // This Directive is not working
  constructor() {
    console.log("Directiva cargada");
  }

  // @HostBinding("class.show") isOpen = false;
  // @HostListener("click") mensajeConsola() {
  //   this.isOpen = !this.isOpen;
  //   console.log("Click detectado");
  // }
  // @HostListener("click", ["$event.target"]) mensajeConsola() {
  //   console.log("Click detectado");
  // }
}
