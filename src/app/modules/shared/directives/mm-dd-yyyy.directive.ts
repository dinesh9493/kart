import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMmDdYyyy]'
})
export class MmDdYyyyDirective {

  constructor() { }

  @HostListener("mouseenter", ["$event"])
  mouseEnter(e: any) {
    e.target.style.backgroundColor = "green";
  }
  
  @HostListener("mouseleave", ["$event"])
  mouseLeave(e: any) {
    e.target.style.backgroundColor = "red";
  }

  @HostListener('input', ["$event"])
  userData(event: any) {
    event.target.value = this.processUserInput(event.target.value);
  }

  processUserInput(e: string) {
    let withoutSlash = e.replace(/\//gi, "");
    let valueInArray: any = Array.from(withoutSlash);
    if (valueInArray.length > 1) {
      if (valueInArray.length >= 2) {
        valueInArray.splice(2, 0, "/");
      }
      if (valueInArray.length >= 5) {
        valueInArray.splice(5, 0, "/");
      }
      valueInArray = valueInArray.join("");
      return valueInArray;
    }
    return e;
  }
}