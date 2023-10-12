import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appColory]",
  exportAs: "colory",
})
export class ColoryDirective {
  @HostBinding("style.color")
  myColor!: string;
  counter = 0;

  @HostListener("click") changeColor() {
    this.setRandomColor();
    this.counter++;
    console.log(`hostlistener directive ${this.counter}`);
  }

  setRandomColor() {
    this.counter++;
    this.myColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  constructor() {
    this.myColor = "green";
  }
}
