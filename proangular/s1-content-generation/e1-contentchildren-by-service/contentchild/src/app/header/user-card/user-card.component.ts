import { Component, EventEmitter, Input, Output } from "@angular/core";
import { UserComponent } from "src/app/user/user.component";

@Component({
  selector: "app-user-card",
  template: `
    <h3>
      <u> User-card nested comp :</u>
      <span *ngIf="userName != undefined && isShown">
        {{ " " + userName }}</span
      >
    </h3>
    <button (click)="showTitle()">
      {{ isShown ? "Hide" : "Show" }} username
    </button>
    <h4>Select user:</h4>
    <ul *ngFor="let user of users">
      <li style="cursor: pointer;" (click)="selectUser(user.name)">
        {{ user.name }}
      </li>
    </ul>
  `,
  styles: [],
})
export class UserCardComponent {
  @Input()
  userName!: string | null | undefined;
  @Output() passSelectedUser = new EventEmitter<string>();

  isShown = true;
  users = [{ name: "John" }, { name: "Mike" }, { name: "Alice" }];

  constructor(private userComp: UserComponent) {}

  showTitle() {
    this.isShown = !this.isShown;
  }

  selectUser(name: string) {
    console.log("selectUser: ", name);
    this.passSelectedUser.emit(name);
    this.userComp.setNameFromComponent(name);
  }
}
