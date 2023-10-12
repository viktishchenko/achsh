import { Component } from "@angular/core";

@Component({
  selector: "app-dynamic",
  template: ` <div>
    <h1>hallo dynamic comp!!!</h1>
  </div>`,
  styles: [
    `
      :host {
        text-align: center;
      }
    `,
  ],
})
export class DynamicComponent {}
