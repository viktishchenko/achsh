import { Component } from "@angular/core";

@Component({
  selector: "app-item",
  template: `
    <h3>Item component with <u>[ng-content]</u></h3>
    <ng-content></ng-content>
    <ng-content select="h1"></ng-content>
    <ng-content select="section"></ng-content>
  `,
  styles: [],
})
export class ItemComponent {}
