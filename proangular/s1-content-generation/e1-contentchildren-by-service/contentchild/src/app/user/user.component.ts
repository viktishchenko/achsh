import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: ".app-user",
  template: `
    <hr />
    <h1><u>User comp</u>: {{ name }}</h1>
    <p>
      <b>[intropolation e.g.]</b> User name is:
      {{ user.name }}
      {{ math }}
    </p>
    <hr />
    <app-header></app-header>
    <div>
      <span>user component: attribute</span>
      <h1>
        app directive:
        <span style="cursor: pointer;" appColory #colory="colory">
          @HostBinding() </span
        >/ @HostListener()
      </h1>
      <button (click)="colory.setRandomColor()">random color</button>
      <br />
      <span>color: {{ colory.myColor }}</span
      ><br />
      <span>counter: {{ colory.counter }}</span>
    </div>
    <hr />
  `,
  styles: [],
})
export class UserComponent {
  math = this.getMath();
  userCardUser = new BehaviorSubject("");
  name = "";

  user = {
    name: "Vasya",
  };

  getMath() {
    return Math.random();
  }

  setNameFromComponent(userCardUser: string) {
    this.userCardUser.next(userCardUser);
    this.name = userCardUser;
  }
}
