import { Directive, ElementRef, HostListener, Renderer2, HostBinding } from "@angular/core";

@Directive ({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding("class.open") isOpen = false;

    // constructor(private elRef: ElementRef, private rend: Renderer2) {
    // }

    @HostListener("click") toggleOpen(eventData: Event) {
        // if (this.isOpen) {
        //     this.rend.removeClass(this.elRef.nativeElement, "open");
        // }
        // else {
        //     this.rend.addClass(this.elRef.nativeElement, "open");
        // }
        this.isOpen = !this.isOpen;
    }
}