import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appColory]",
})
export class ColoryDirective {
  @HostBinding("style.color")
  myColor!: string;
  counter = 0;

  @HostListener("click") changeColor() {
    this.myColor = "#" + Math.floor(Math.random() * 16777215).toString();
    this.counter++;
    console.log(`hostlistener directive ${this.counter}`);
  }

  constructor() {
    this.myColor = "green";
  }
}
