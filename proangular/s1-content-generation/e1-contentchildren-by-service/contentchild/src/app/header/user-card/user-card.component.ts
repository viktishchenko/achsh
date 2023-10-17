import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Subscription } from "rxjs";
import { IUsers } from "src/app/models/users";
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
    <h4>Select, remove or add new user:</h4>
    <ul>
      <li
        class="user-list"
        style="cursor: pointer;"
        *ngFor="let user of users"
        [class.selected]="user.name === selectedUser"
        (click)="selectUser(user.name)"
      >
        {{ user.name }}
        <button
          class="remove-btn"
          (click)="removeUser(user.name); $event.stopImmediatePropagation()"
        >
          x
        </button>
      </li>
    </ul>
    <input type="text" #userNameEl />
    <button>add user</button>
    <!-- <input
      type="text"
      #userNameEl
      (keydown.enter)="addUser(userNameEl.value); userNameEl.value = ''"
    />
    <button (click)="addUser(userNameEl.value); userNameEl.value = ''">
      add user
    </button> -->
  `,
  styles: [
    `
      .user-list {
        margin: 1rem;
        position: relative;
        width: 30%;
        background-color: transparent;
        padding: 5px;
        border: 1px solid gray;
        border-radius: 5px;
      }
      .remove-btn {
        position: absolute;
        top: -12px;
        right: -10px;
        border: 1px solid red;
        border-radius: 50%;
        padding: 2px 7px;
        background-color: white;
        color: red;
      }
      .selected {
        /* padding: 5px 10px;
        width: 100px; */
        background-color: #f2f2f2;
      }
    `,
  ],
})
export class UserCardComponent implements OnInit, OnDestroy {
  @Input()
  userName!: string | null | undefined;
  @Output() passSelectedUser = new EventEmitter<string>();

  isShown = false;
  users!: IUsers[];

  selectedUser?: string;
  errorMessage: string = "";
  sub!: Subscription;

  constructor(
    private userComp: UserComponent,
    private getUsers: UsersService
  ) {}

  ngOnInit(): void {
    this.getUsers.getAllUsers().subscribe({
      next: (users) => {
        this.users = users;
      },

      error: (err) => (this.errorMessage = err),
    });
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

  removeUser(name: string) {
    // this.getUsers.deleteUser(name);
    // this.users = this.getUsers.getAllUsers();
    console.log("REMOVE THIS name>>", name);
  }

  // addUser(name: string) {
  //   if (!name) {
  //     return;
  //   }
  //   this.getUsers.addUser(name);
  //   this.users = this.getUsers.getAllUsers();
  // }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
