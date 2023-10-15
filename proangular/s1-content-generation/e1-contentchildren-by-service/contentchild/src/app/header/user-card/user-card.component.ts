import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { UsersService } from "src/app/service/users.service";
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
    <button (click)="showUserName()">
      {{ isShown ? "Hide" : "Show" }} username
    </button>
    <h4>Select user:</h4>
    <ul>
      <li
        *ngFor="let user of users"
        [class.selected]="user.name === selectedUser"
        style="cursor: pointer;"
        (click)="selectUser(user.name)"
      >
        {{ user.name }}
      </li>
    </ul>
  `,
  styles: [
    `
      .selected {
        margin: 1rem;
        padding: 5px 10px;
        width: 100px;
        background-color: #f2f2f2;
      }
    `,
  ],
})
export class UserCardComponent implements OnInit {
  @Input()
  userName!: string | null | undefined;
  @Output() passSelectedUser = new EventEmitter<string>();

  isShown = false;
  users: { name: string }[] | undefined;

  selectedUser?: string;

  constructor(
    private userComp: UserComponent,
    private getUsers: UsersService
  ) {}

  ngOnInit(): void {
    this.users = this.getUsers.getAllUsers();
  }

  showUserName() {
    this.isShown = !this.isShown;
  }

  selectUser(name: string) {
    console.log("selectUser: ", name);
    this.passSelectedUser.emit(name);
    this.userComp.setNameFromComponent(name);
    this.selectedUser = name;
  }
}
