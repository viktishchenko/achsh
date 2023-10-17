import { Component } from "@angular/core";
import { environment } from "./../environments/environment";

@Component({
  selector: "app-root",
  template: `
    <h1>Hello there {{ title }}!</h1>
    <div class="app-user"></div>
    <app-item>
      <h1>hello there!</h1>
      <span>
        {{ titleItem }} <b><u>select</u></b>
      </span>
      <section>
        <p>bla-bal-bal</p>
      </section>
    </app-item>
  `,
  styles: [],
})
export class AppComponent {
  title = "contentchild";
  titleItem = "[content from app w/o]";
}
